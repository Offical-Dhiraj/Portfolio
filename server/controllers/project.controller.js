import Project from "../models/Project.js";

export const getProjects = async (
  req,
  res,
  next
) => {
  try {
    const projects =
      await Project.find()
        .sort({
          featured: -1,
          order: 1,
          createdAt: -1
        })
        .lean();

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (
  req,
  res,
  next
) => {
  try {
    const project =
      await Project.findById(
        req.params.id
      ).lean();

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found."
      });
    }

    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    next(error);
  }
};