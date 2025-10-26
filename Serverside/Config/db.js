import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Manswab-dev:manswab-dev2003@cluster0.tkfzkle.mongodb.net/e-commerse'
    );
    console.log("DB connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Stop the server if DB connection fails
  }
};
