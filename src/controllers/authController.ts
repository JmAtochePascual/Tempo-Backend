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

// Login a user
export const authLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return
    }

    // Check the password 
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Incorrect password' })
      return;
    }

    // Generate the JWT
    const token = generateJWT(user._id);

    // Config cookie
    res.cookie("tempoToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000 // exipere in 7 days
    });

    res.status(200).json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
};

// Logout a user
export const authLogout = (req: Request, res: Response) => {
  res.cookie("tempoToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0 // exipere immediately
  });
  res.sendStatus(200);
};

// Verify the token 
export const authRequired = async (req: Request, res: Response, next: NextFunction) => {
  const { tempoToken } = req.cookies;

  // Check if the token is provided
  if (!tempoToken) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }

  try {
    const decoded = jwt.verify(tempoToken, process.env.JWT_SECRET!) as { id: Id };

    req.id = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Get current user
export const authProfile = async (req: Request, res: Response) => {
  const { id } = req;

  try {
    // Get the user by ID
    const user = await User.findById(id).select('name email');

    // Check if the user exists
    if (!user) {
      res.status(401).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error getting current user" });
  }
};