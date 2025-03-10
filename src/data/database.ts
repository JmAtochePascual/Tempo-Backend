import mongoose from "mongoose";
import dotenv from "dotenv";

// Set up dotenv
dotenv.config();

// Create the connection to the database
const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI!);
    const url = `${connection.host}:${connection.port}/${connection.name}`;
    console.log("🚀 Database connected", url);
  } catch (error) {
    console.log("🔥 Error connecting to the database");
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;