import express from "express";

import {
  requestContactVerification,
  verifyContactEmail
} from "../controllers/contact.controller.js";

import {
  validateContactRequest
} from "../middleware/validation.middleware.js";

import {
  contactRequestLimiter,
  contactVerifyLimiter
} from "../middleware/rateLimit.middleware.js";

const router = express.Router();

/*
 * Step 1:
 * Submit contact form and request OTP.
 */
router.post(
  "/request",
  contactRequestLimiter,
  validateContactRequest,
  requestContactVerification
);

/*
 * Step 2:
 * Verify email with OTP.
 */
router.post(
  "/verify",
  contactVerifyLimiter,
  verifyContactEmail
);

export default router;