import express from "express"
import { check } from "express-validator"
import { getActivities, createActivity } from "../controllers/activityController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

// Get all activities (public)
router.get("/", getActivities)

// Create a new activity (protected)
router.post(
  "/",
  [
    protect,
    check("title", "Title is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("location", "Location is required").not().isEmpty(),
    check("date", "Date is required").not().isEmpty(),
    check("time", "Time is required").not().isEmpty(),
  ],
  createActivity,
)

export default router
