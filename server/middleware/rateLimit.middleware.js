import rateLimit from "express-rate-limit";

export const contactRequestLimiter =
  rateLimit({
    windowMs: 15 * 60 * 1000,

    max: 5,

    standardHeaders: true,

    legacyHeaders: false,

    message: {
      success: false,
      message:
        "Too many contact requests. Please try again later."
    }
  });

export const contactVerifyLimiter =
  rateLimit({
    windowMs: 15 * 60 * 1000,

    max: 10,

    standardHeaders: true,

    legacyHeaders: false,

    message: {
      success: false,
      message:
        "Too many verification attempts. Please try again later."
    }
  });