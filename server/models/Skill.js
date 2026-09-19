import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Frontend",
        "Backend",
        "Database",
        "Language",
        "Tools",
        "Other"
      ]
    },

    icon: {
      type: String,
      default: ""
    },

    level: {
      type: Number,
      min: 0,
      max: 100,
      default: 80
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

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;