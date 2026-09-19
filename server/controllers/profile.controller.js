import Profile from "../models/Profile.js";

export const getProfile = async (
  req,
  res,
  next
) => {
  try {
    const profile =
      await Profile.findOne()
        .sort({ createdAt: -1 })
        .lean();

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found."
      });
    }

    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    next(error);
  }
};