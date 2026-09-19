import express from "express";

import {
  getGithubProfileController,
  getGithubReposController
} from "../controllers/github.controller.js";

const router = express.Router();

router.get(
  "/profile",
  getGithubProfileController
);

router.get(
  "/repos",
  getGithubReposController
);

export default router;