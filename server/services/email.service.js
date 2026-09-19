import nodemailer from "nodemailer";

const createTransporter = () => {
  if (
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS
  ) {
    throw new Error(
      "EMAIL_USER or EMAIL_PASS is missing."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

export const sendVerificationOtp = async ({
  email,
  name,
  otp
}) => {
  const transporter =
    createTransporter();

  await transporter.sendMail({
    from: `"Dhiraj Kumar Portfolio" <${process.env.EMAIL_USER}>`,

    to: email,

    subject:
      "Verify your email - Dhiraj Kumar Portfolio",

    text: `
Hello ${name},

Your email verification code is:

${otp}

This code will expire in 10 minutes.

If you did not submit a message through the portfolio contact form, you can ignore this email.

Regards,
Dhiraj Kumar
    `,

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: auto;
        padding: 30px;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
      ">

        <h2 style="color:#4f46e5;">
          Verify Your Email
        </h2>

        <p>
          Hello ${name},
        </p>

        <p>
          Please use the following verification
          code to verify your email address.
        </p>

        <div style="
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 8px;
          background: #f5f3ff;
          padding: 20px;
          text-align: center;
          border-radius: 12px;
          color: #4f46e5;
        ">
          ${otp}
        </div>

        <p>
          This code will expire in
          <strong>10 minutes</strong>.
        </p>

        <p>
          If you did not submit a message through
          the portfolio contact form, simply ignore
          this email.
        </p>

        <hr />

        <p>
          Dhiraj Kumar<br />
          Full Stack Developer
        </p>

      </div>
    `
  });
};

export const sendContactNotification = async ({
  name,
  email,
  subject,
  message
}) => {
  const transporter =
    createTransporter();

  const receiver =
    process.env.CONTACT_RECEIVER_EMAIL ||
    process.env.EMAIL_USER;

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,

    to: receiver,

    replyTo: email,

    subject: `Portfolio Contact: ${subject}`,

    text: `
New verified message from your portfolio.

Name:
${name}

Email:
${email}

Subject:
${subject}

Message:
${message}

The sender has successfully verified ownership of the email address.
    `,

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 700px;
        margin: auto;
        padding: 30px;
      ">

        <h2>
          New Portfolio Contact
        </h2>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>

        <p>
          <strong>Subject:</strong>
          ${subject}
        </p>

        <div style="
          margin-top:20px;
          padding:20px;
          background:#f8fafc;
          border-radius:12px;
        ">
          <strong>Message</strong>

          <p>
            ${message}
          </p>
        </div>

        <p style="color:#16a34a;">
          ✓ Email ownership verified
        </p>

      </div>
    `
  });
};