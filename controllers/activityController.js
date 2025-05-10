import { validationResult } from "express-validator"
import Activity from "../models/activityModel.js"

// @desc    Get all activities
// @route   GET /api/activities
// @access  Public
export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({})
    res.json(activities)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Create a new activity
// @route   POST /api/activities
// @access  Private
export const createActivity = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { title, description, location, date, time } = req.body

  try {
    const activity = await Activity.create({
      title,
      description,
      location,
      date,
      time,
    })

    res.status(201).json(activity)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}
