import mongoose from "mongoose";
import connectDB from "./database";

const cleanDB = async () => {
  try {
    await connectDB();

    const db = mongoose.connection.db;
    if (!db) throw new Error("Database connection is not established.");

    const collections = await db.collections();
    for (const collection of collections) {
      await collection.deleteMany({});
    }

    console.log("🧹 Database cleaned successfully");
  } catch (error) {
    console.error("❌ Error cleaning database:", error);
  }
};

// Solo limpia si se pasa `--clean`
if (process.argv.includes("--clean")) {
  cleanDB().then(() => mongoose.disconnect()); // Desconectar sin forzar salida
}
