import {
  getGithubProfile,
  getGithubRepos
} from "../services/github.service.js";

export const getGithubProfileController =
  async (req, res, next) => {
    try {
      const profile =
        await getGithubProfile();

      res.status(200).json({
        success: true,
        data: profile
      });
    } catch (error) {
      next(error);
    }
  };

export const getGithubReposController =
  async (req, res, next) => {
    try {
      const repos =
        await getGithubRepos();

      res.status(200).json({
        success: true,
        count: repos.length,
        data: repos
      });
    } catch (error) {
      next(error);
    }
  };