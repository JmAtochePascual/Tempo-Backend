import Router from "express";
import { validateRegister } from "../middlewares/authMiddleware";
import { authRegister } from "../controllers/authController";

// Create the router
const router = Router();

// Router to register a new user
router.post("/register", validateRegister, authRegister);

export default router;