import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    console.log("MONGO_URL: ", process.env.MONGO_URL);
    if (!process.env.MONGO_URL) {
      console.log("No MONGO_URL found");
      return;
    }

    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");
    const connection = mongoose.connection;

    if (connection.readyState === 1) {
      // 1 means connected
      console.log("MongoDB connected successfully");
    } else {
      connection.once("open", () => {
        console.log("Hi there");
        console.log("MongoDB connected successfully");
      });
    }

    connection.on("error", (err) => {
      console.log("MongoDB connection error: ", err);
      process.exit();
    });
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
