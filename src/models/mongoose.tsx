import mongoose from "mongoose";

let dbConnected = false;

export const connectDb = async () => {
  mongoose.set("strictQuery", true); // only query fields already in schema, throw error if not defined
  if (!process.env.MONGO_URL) {
    return console.log("No MONGO_URL founded");
  }
  if (dbConnected) {
    return console.log("Database already connected");
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    dbConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
