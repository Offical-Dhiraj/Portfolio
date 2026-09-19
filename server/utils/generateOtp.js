import crypto from "crypto";

export const generateOtp = () => {
  return crypto
    .randomInt(100000, 1000000)
    .toString();
};

export const hashOtp = (otp) => {
  const secret = process.env.OTP_SECRET;

  if (!secret) {
    throw new Error("OTP_SECRET is missing in .env");
  }

  return crypto
    .createHmac("sha256", secret)
    .update(otp)
    .digest("hex");
};

export const compareOtp = (otp, hash) => {
  const generatedHash = hashOtp(otp);

  return crypto.timingSafeEqual(
    Buffer.from(generatedHash),
    Buffer.from(hash)
  );
};