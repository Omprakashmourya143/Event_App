Online Event Management Platform - Backend Documentation

Overview

This is the backend application for the Online Event Management Platform. It provides RESTful APIs for user authentication, event management, ticket purchases, and other core functionalities. The backend is built using Node.js, Express, and MongoDB.


Here’s the detailed documentation for the backend of your Online Event Management Platform:

Online Event Management Platform - Backend Documentation
Overview
This is the backend application for the Online Event Management Platform. It provides RESTful APIs for user authentication, event management, ticket purchases, and other core functionalities. The backend is built using Node.js, Express, and MongoDB.

Project Structure

backend/
├── models/                    # Database schemas
│   ├── Event.js               # Event schema
│   ├── User.js                # User schema
│   ├── Ticket.js              # Ticket schema
├── routes/                    # API routes
│   ├── userRoutes.js          # Routes for user-related actions
│   ├── eventRoutes.js         # Routes for event-related actions
│   ├── ticketRoutes.js        # Routes for ticket purchases
├── controllers/               # Controller logic for APIs
│   ├── userController.js      # User-related controller functions
│   ├── eventController.js     # Event-related controller functions
│   ├── ticketController.js    # Ticket-related controller functions
├── middleware/                # Middleware functions
│   ├── authMiddleware.js      # Protect routes with JWT authentication
├── config/                    # Configuration files
│   ├── db.js                  # MongoDB connection setup
│   ├── dotenv                 # Environment variables configuration
├── server.js                  # Entry point for the backend
├── package.json               # Backend dependencies and scripts
├── package-lock.json          # Lock file for dependencies
└── README.md                  # Documentation (this file)

Key Features
User Management:

Register: Create a new user account (POST /api/users/register).
Login: Authenticate users and return a JWT token (POST /api/users/login).
CRUD Operations: Manage user data (GET, PUT, DELETE /api/users/:id).
Event Management:

Create Event: Allow admins to add new events (POST /api/events).
Read Events: Fetch a list of all events (GET /api/events).
Update/Delete Events: Modify or remove events (PUT/DELETE /api/events/:id).
Ticket Management:

Purchase Ticket: Users can buy tickets for events (POST /api/tickets).
View Tickets: Retrieve tickets for a specific user (GET /api/tickets).
Authentication and Authorization:

Protect routes using JWT tokens.
Differentiate between user roles (e.g., admin and regular users).

Database Models

User Model (models/User.js)
Fields: name, email, password, isAdmin.
Event Model (models/Event.js)
Fields: title, description, date, location, ticketPrice, organizer.
Ticket Model (models/Ticket.js)
Fields: event, user, purchaseDate

