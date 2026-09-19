export const sanitizeText = (value = "") => {
  return String(value)
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .replace(/\u0000/g, "")
    .trim();
};

export const normalizeText = (value = "") => {
  return sanitizeText(value)
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim();
};

export const sanitizeEmail = (email = "") => {
  return email
    .trim()
    .toLowerCase();
};