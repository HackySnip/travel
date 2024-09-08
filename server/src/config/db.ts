import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const getConnection = async (): Promise<Mongoose | void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Server connected to MongoDB");
    return conn;
  } catch (error) {
    console.error("Mongoose connection error:", error);
    process.exit(1);
  }
};

export default getConnection;
