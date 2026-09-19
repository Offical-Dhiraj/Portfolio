const normalizeForModeration = (text = "") => {
  return text
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[\s._\-*]+/g, "")
    .trim();
};

const blockedPatterns = [
  // Explicit sexual content / solicitation
  /\bsex\b/i,
  /\bsexual\b/i,
  /\bporn\b/i,
  /\bpornography\b/i,
  /\bnudes?\b/i,
  /\bnaked\b/i,
  /\bxxx\b/i,

  // Sexual solicitation
  /\b(hookup|horny|fuck|fucking)\b/i,

  // Threats / serious harassment
  /\b(kill you|i will hurt you|rape you)\b/i
];

const suspiciousPatterns = [
  /free\s*money/i,
  /make\s*money\s*fast/i,
  /click\s*this\s*link/i,
  /crypto\s*investment/i,
  /send\s*me\s*money/i,
  /casino/i,
  /loan\s*offer/i
];

export const moderateMessage = ({
  subject = "",
  message = ""
}) => {
  const combined =
    `${subject} ${message}`;

  const normalized =
    normalizeForModeration(combined);

  for (const pattern of blockedPatterns) {
    if (
      pattern.test(combined) ||
      pattern.test(normalized)
    ) {
      return {
        allowed: false,
        category: "inappropriate",
        reason:
          "The message contains content that is not appropriate for a professional contact form."
      };
    }
  }

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(combined)) {
      return {
        allowed: false,
        category: "spam",
        reason:
          "The message appears to contain promotional or suspicious content."
      };
    }
  }

  return {
    allowed: true,
    category: "professional",
    reason: "Message passed moderation."
  };
};