import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongodbURI = process.env.MONGODB_URI;

    if (!mongodbURI) {
      throw new Error("MONGODB_URI environment variable not set");
    }

    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully");
    });

    await mongoose.connect(mongodbURI);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;