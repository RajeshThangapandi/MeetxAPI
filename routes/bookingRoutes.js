import express from "express"
import { check } from "express-validator"
import { bookActivity, getUserBookings } from "../controllers/bookingController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

// All booking routes are protected
router.use(protect)

// Book an activity
router.post("/", [check("activityId", "Activity ID is required").not().isEmpty()], bookActivity)

// Get user bookings
router.get("/", getUserBookings)

export default router
