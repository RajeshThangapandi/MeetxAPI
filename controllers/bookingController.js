import { validationResult } from "express-validator"
import Booking from "../models/bookingModel.js"
import Activity from "../models/activityModel.js"

// @desc    Book an activity
// @route   POST /api/bookings
// @access  Private
export const bookActivity = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { activityId } = req.body

  try {
    // Check if activity exists
    const activity = await Activity.findById(activityId)
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" })
    }

    // Check if user has already booked this activity
    const existingBooking = await Booking.findOne({
      user: req.user._id,
      activity: activityId,
    })

    if (existingBooking) {
      return res.status(400).json({ message: "Activity already booked" })
    }

    // Create new booking
    const booking = await Booking.create({
      user: req.user._id,
      activity: activityId,
    })

    // Populate activity details
    await booking.populate("activity")

    res.status(201).json(booking)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Get user bookings
// @route   GET /api/bookings
// @access  Private
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate("activity")
    res.json(bookings)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}
