import express from "express";
import cors, { CorsOptions } from "cors";
import morgan from "morgan";
import connectDB from "./data/database";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";

const app = express();

// Connect to the database
connectDB();

// Enable json
app.use(express.json());

// Enable cookies
app.use(cookieParser());

// Enable cors
const corsList = [process.env.FRONTEMD_URL];
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || corsList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// Enable morgan
app.use(morgan("dev"));

// Routers
app.use("/api/auth", userRouter);

export default app;