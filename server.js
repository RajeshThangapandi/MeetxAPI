import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import activityRoutes from "./routes/activityRoutes.js"
import bookingRoutes from "./routes/bookingRoutes.js"

// Load environment variables
dotenv.config()

// Initialize Express app
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/users", userRoutes)
app.use("/api/activities", activityRoutes)
app.use("/api/bookings", bookingRoutes)

// Root route
app.get("/", (req, res) => {
  res.send("Activity Booking API is running")
})

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

export default app
