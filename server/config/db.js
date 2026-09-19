import mongoose from "mongoose";
import { setServers } from "node:dns/promises";

const connectDB = async () => {
  try {
    // Use Cloudflare and Google DNS
    setServers(["1.1.1.1", "8.8.8.8"]);

    // Check MongoDB URI
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env");
    }

    // Connect MongoDB
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `✅ MongoDB connected: ${connection.connection.host}`
    );
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error.message);

    process.exit(1);
  }
};

export default connectDB;