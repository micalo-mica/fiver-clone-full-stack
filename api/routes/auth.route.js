import express from "express";
import {
  register,
  login,
  logout,
  activateUser,
  forgot,
  reset,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

// For registering a user
router.post("/register", register);

// For activating a user
router.post("/register/activateUser", activateUser);

// For login a user
router.post("/login/loginUser", login);

// For logout a user
router.post("/logout/logoutUser", logout);

// For a user forgot password
router.post("/forgot/email", forgot);

// For a user reset password
router.post("/forgot/newPassword", verifyToken, reset);

export default router;
