import Router from "express";
import { validateLogin, validateRegister } from "../middlewares/authMiddleware";
import { authRegister, authLogin, authLogout, authProfile, authRequired } from "../controllers/authController";

// Create the router
const router = Router();

// Router to register a new user
router.post("/register", validateRegister, authRegister);

// Router to login a user
router.post("/login", validateLogin, authLogin);

// Router to logout a user
router.post("/logout", authLogout);

// Router to get current user
router.get("/profile", authRequired, authProfile);

export default router;