import Skill from "../models/Skill.js";

export const getSkills = async (
  req,
  res,
  next
) => {
  try {
    const skills =
      await Skill.find()
        .sort({
          category: 1,
          order: 1
        })
        .lean();

    res.status(200).json({
      success: true,
      count: skills.length,
      data: skills
    });
  } catch (error) {
    next(error);
  }
};