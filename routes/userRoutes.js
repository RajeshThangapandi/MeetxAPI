import express from "express"
import { check } from "express-validator"
import { registerUser, loginUser } from "../controllers/userController.js"

const router = express.Router()

// Register user
router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("phone", "Phone number is required").not().isEmpty(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
  ],
  registerUser,
)

// Login user
router.post(
  "/login",
  [check("email", "Please include a valid email").isEmail(), check("password", "Password is required").exists()],
  loginUser,
)

export default router
