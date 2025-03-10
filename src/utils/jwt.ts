import jwt from "jsonwebtoken";
import { Id } from "../types/auth";

// Generate JWT for user
const generateJWT = (id: Id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
  return token;
};

export default generateJWT;