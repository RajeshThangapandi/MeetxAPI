# Activity Booking API

A RESTful API for a basic activity booking application built with Node.js, Express, and MongoDB.

## Features

- User registration and authentication with JWT
- Activity listing (public)
- Activity booking for authenticated users
- View user's bookings

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT Token-based auth
- **Validation**: express-validator
- **Password Security**: bcrypt for password hashing

## API Endpoints

### User Authentication

- **POST /api/users/register** - Register a new user
  - Required fields: name, email, phone, password

- **POST /api/users/login** - Login and get JWT token
  - Required fields: email, password

### Activities

- **GET /api/activities** - List all activities (public)
- **POST /api/activities** - Create a new activity (authenticated)
  - Required fields: title, description, location, date, time

### Bookings

- **POST /api/bookings** - Book an activity (authenticated)
  - Required fields: activityId

- **GET /api/bookings** - Get all bookings for the logged-in user (authenticated)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/activity-booking-api.git
   cd activity-booking-api
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a `.env` file in the root directory with the following variables:
   \`\`\`
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   \`\`\`

4. Start the server:
   \`\`\`bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   \`\`\`

## Testing with Postman

A Postman collection is included in the repository for testing all API endpoints. Import the collection into Postman to get started.

### Steps to use the Postman collection:

1. Import the `Activity_Booking_API.postman_collection.json` file into Postman
2. Register a new user using the "Register User" request
3. Login with the registered user credentials using the "Login User" request
4. Copy the JWT token from the login response
5. Use the token in the Authorization header for protected routes

## Folder Structure

\`\`\`
activity-booking-api/
├── controllers/        # Request handlers
├── middleware/         # Custom middleware
├── models/             # Database models
├── routes/             # API routes
├── utils/              # Helper functions
├── .env                # Environment variables (not included in repo)
├── server.js           # Entry point
└── package.json        # Project dependencies
\`\`\`

## Deployment

This API can be deployed to platforms like Render, Vercel, or Cyclic. Make sure to set the environment variables in your deployment platform.

## License

MIT
# MeetxAPI
