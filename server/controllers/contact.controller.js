import Contact from "../models/Contact.js";
import EmailVerification from "../models/EmailVerification.js";

import {
  generateOtp,
  hashOtp,
  compareOtp
} from "../utils/generateOtp.js";

import {
  sanitizeText,
  normalizeText,
  sanitizeEmail
} from "../utils/sanitizeInput.js";

import {
  moderateMessage
} from "../services/moderation.service.js";

import {
  sendVerificationOtp,
  sendContactNotification
} from "../services/email.service.js";

const OTP_EXPIRY_MINUTES = 10;

export const requestContactVerification =
  async (req, res, next) => {
    try {
      /*
       * Honeypot field.
       * Real users should leave this empty.
       */
      if (req.body.website) {
        return res.status(400).json({
          success: false,
          message:
            "Unable to process this request."
        });
      }

      const name =
        normalizeText(req.body.name);

      const email =
        sanitizeEmail(req.body.email);

      const subject =
        normalizeText(req.body.subject);

      const message =
        sanitizeText(req.body.message);

      /*
       * Email validation
       */
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message:
            "Please enter a valid email address."
        });
      }

      /*
       * Moderation
       */
      const moderation =
        moderateMessage({
          subject,
          message
        });

      if (!moderation.allowed) {
        return res.status(400).json({
          success: false,
          message:
            "Your message could not be accepted. Please keep the message professional and related to work, projects, collaboration or opportunities."
        });
      }

      /*
       * Delete old verification requests
       * for this email.
       */
      await EmailVerification.deleteMany({
        email
      });

      /*
       * Generate OTP
       */
      const otp =
        generateOtp();

      const otpHash =
        hashOtp(otp);

      const expiresAt =
        new Date(
          Date.now() +
          OTP_EXPIRY_MINUTES *
            60 *
            1000
        );

      /*
       * Store pending verification.
       */
      await EmailVerification.create({
        name,
        email,
        subject,
        message,
        otpHash,
        expiresAt
      });

      /*
       * Send OTP to the submitted email.
       */
      await sendVerificationOtp({
        email,
        name,
        otp
      });

      res.status(200).json({
        success: true,
        message:
          "Verification code sent to your email.",
        expiresInMinutes:
          OTP_EXPIRY_MINUTES
      });
    } catch (error) {
      next(error);
    }
  };

export const verifyContactEmail =
  async (req, res, next) => {
    try {
      const email =
        sanitizeEmail(req.body.email);

      const otp =
        String(req.body.otp || "")
          .trim();

      if (!email || !otp) {
        return res.status(400).json({
          success: false,
          message:
            "Email and verification code are required."
        });
      }

      if (!/^\d{6}$/.test(otp)) {
        return res.status(400).json({
          success: false,
          message:
            "Verification code must contain 6 digits."
        });
      }

      const verification =
        await EmailVerification.findOne({
          email
        });

      if (!verification) {
        return res.status(404).json({
          success: false,
          message:
            "Verification request not found or expired."
        });
      }

      /*
       * Check expiry
       */
      if (
        verification.expiresAt <
        new Date()
      ) {
        await EmailVerification.deleteOne({
          _id: verification._id
        });

        return res.status(400).json({
          success: false,
          message:
            "Verification code has expired. Please request a new code."
        });
      }

      /*
       * Maximum OTP attempts.
       */
      if (verification.attempts >= 5) {
        await EmailVerification.deleteOne({
          _id: verification._id
        });

        return res.status(429).json({
          success: false,
          message:
            "Too many incorrect verification attempts."
        });
      }

      const isValid =
        compareOtp(
          otp,
          verification.otpHash
        );

      if (!isValid) {
        verification.attempts += 1;

        await verification.save();

        return res.status(400).json({
          success: false,
          message:
            "Invalid verification code."
        });
      }

      /*
       * Email ownership verified.
       */
      verification.verified = true;

      await verification.save();

      /*
       * Save verified contact message.
       */
      const contact =
        await Contact.create({
          name: verification.name,
          email: verification.email,
          subject: verification.subject,
          message: verification.message,
          emailVerified: true,
          moderationStatus: "approved"
        });

      /*
       * Send notification to portfolio owner.
       */
      try {
        await sendContactNotification({
          name: verification.name,
          email: verification.email,
          subject: verification.subject,
          message: verification.message
        });
      } catch (emailError) {
        console.error(
          "Notification email failed:",
          emailError.message
        );
      }

      /*
       * Delete verification record.
       */
      await EmailVerification.deleteOne({
        _id: verification._id
      });

      res.status(201).json({
        success: true,
        message:
          "Email verified and message sent successfully.",
        data: {
          id: contact._id
        }
      });
    } catch (error) {
      next(error);
    }
  };