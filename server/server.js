import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import projectRoutes from "./routes/project.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import skillRoutes from "./routes/skill.routes.js";
import githubRoutes from "./routes/github.routes.js";
import contactRoutes from "./routes/contact.routes.js";

dotenv.config();

const app = express();

const PORT =
  process.env.PORT || 5000;

/*
 * Required when deployed behind
 * Render / reverse proxy.
 */
app.set("trust proxy", 1);

/*
 * Connect MongoDB.
 */
await connectDB();

/*
 * CORS
 */
const allowedOrigin =
  process.env.CLIENT_URL ||
  "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
    methods: [
      "GET",
      "POST",
      "OPTIONS"
    ],
    allowedHeaders: [
      "Content-Type"
    ]
  })
);

/*
 * Body parser
 */
app.use(
  express.json({
    limit: "100kb"
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "100kb"
  })
);

/*
 * API Routes
 */
app.use(
  "/api/projects",
  projectRoutes
);

app.use(
  "/api/profile",
  profileRoutes
);

app.use(
  "/api/skills",
  skillRoutes
);

app.use(
  "/api/github",
  githubRoutes
);

app.use(
  "/api/contact",
  contactRoutes
);

/*
 * 404 handler
 */
app.use(
  (req, res) => {
    res.status(404).json({
      success: false,
      message:
        `Route not found: ${req.originalUrl}`
    });
  }
);

/*
 * Global error handler
 */
app.use(
  (error, req, res, next) => {
    console.error(
      "SERVER ERROR:",
      error
    );

    if (
      error.name ===
      "ValidationError"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid request data."
      });
    }

    res.status(500).json({
      success: false,
      message:
        "Something went wrong on the server."
    });
  }
);

/*
 * Start server
 */
app.listen(
  PORT,
  () => {
    console.log(
      `Portfolio server running on port ${PORT}`
    );
  }
);