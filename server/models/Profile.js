import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    tagline: {
      type: String,
      default: "",
      trim: true
    },

    bio: {
      type: String,
      default: "",
      trim: true
    },

    profileImage: {
      type: String,
      default: ""
    },

    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true
    },

    location: {
      type: String,
      default: "",
      trim: true
    },

    education: {
      type: String,
      default: "",
      trim: true
    },

    github: {
      type: String,
      default: ""
    },

    linkedin: {
      type: String,
      default: ""
    },

    leetcode: {
      type: String,
      default: ""
    },

    resumeUrl: {
      type: String,
      default: ""
    },

    availability: {
      type: String,
      default: "Open for opportunities"
    }
  },
  {
    timestamps: true
  }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;