import Router from "express";
import { validateLogin, validateRegister } from "../middlewares/authMiddleware";
import { authRegister, authLogin } from "../controllers/authController";

// Create the router
const router = Router();

// Router to register a new user
router.post("/register", validateRegister, authRegister);

// Router to login a user
router.post("/login", validateLogin, authLogin);

export default router;