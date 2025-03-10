import { NextFunction, Request, Response } from "express";
import User from "../models/UserModel";
import jwt from 'jsonwebtoken';
import generateJWT from "../utils/jwt";
import { hashPassword, comparePassword } from "../utils/hash";
import { Id } from '../types/auth';

// Exten id type
declare global {
  namespace Express {
    interface Request {
      id?: Id;
    }
  }
}

// Register a new user
export const authRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Create the new user
    const newUser = new User({ name, email, password });

    // Hash the password
    newUser.password = await hashPassword(password);
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};