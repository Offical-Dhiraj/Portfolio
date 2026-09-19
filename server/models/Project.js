import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },

    shortTitle: {
      type: String,
      trim: true,
      maxlength: 60
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000
    },

    image: {
      type: String,
      default: ""
    },

    technologies: {
      type: [String],
      default: []
    },

    githubUrl: {
      type: String,
      default: ""
    },

    liveUrl: {
      type: String,
      default: ""
    },

    featured: {
      type: Boolean,
      default: false
    },

    category: {
      type: String,
      default: "Web Development",
      trim: true
    },

    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;