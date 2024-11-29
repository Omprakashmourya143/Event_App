Backend - Event Management Platform

Description

This is the backend for the Event Management Platform, developed with Node.js, Express, and MongoDB. It provides APIs for user registration, login, event management, ticket sales, and payment processing. The backend also integrates JWT authentication for secure access to protected routes.

Table of Contents

1. Installation
2. Environment Setup
3. API Endpoints
4. User Routes
5. Event Routes
6. Ticket Routes
7. Authentication
8. Running the Application
9. Testing with Postman
10. Deployment

API Endpoints

User Routes

https://event-app-eqnp.onrender.com/api/users/register

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

{
    "message": "User registered successfully"
}

POST /api/users/login

Login and return JWT token.

https://event-app-eqnp.onrender.com/api/users/login

{
  "email": "john@example.com",
  "password": "password123"
}

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDkxZDM0MGJlNTNhODM3YTdkNmUxMyIsImlhdCI6MTczMjg0NTI2MywiZXhwIjoxNzMyODQ4DYzfQ.G9uvsf8o8NTW2TmcS3lOcotXenZv623K72rkK5Bghcc"
}

Event Routes

POST /api/events

Create a new event.

{
  "title": "Tech Conference 2024",
  "description": "A conference about the future of technology.",
  "date": "2024-06-10T09:00:00.000Z",
  "location": "San Francisco, CA",
  "ticketPrice": 100
}

{
    "message": "Event created successfully",
    "event": {
        "title": "Tech Conference 2024",
        "description": "A conference about the future of technology.",
        "date": "2024-06-10T09:00:00.000Z",
        "location": "San Francisco, CA",
        "ticketPrice": 100,
        "_id": "67491fdb0be53a837a7d6e17",
        "__v": 0
    }
    
}

GET /api/events

Get a list of all events.

GET /api/events/:eventId
Get details of a specific event by ID.

PUT /api/events/:eventId
Update an event by ID.

DELETE /api/events/:eventId
Delete an event by ID.

Authentication
JWT authentication is implemented to secure the user routes. After a user registers or logs in, they receive a JWT token which must be included in the Authorization header for protected routes.

Authorization: Bearer <JWT_TOKEN>

Testing with Postman

Registration: POST /api/users/register

Login: POST /api/users/login

Create Event: POST /api/events

Get Events: GET /api/events

Create Ticket: POST /api/tickets

Deployment

Production URL: https://event-app-eqnp.onrender.com

Frontend :-

Frontend - Event Management Platform

Description

This is the frontend for the Event Management Platform, developed using React and styled with TailwindCSS. It provides a user-friendly interface for event browsing, registration, ticket purchasing, and user profile management. The platform interacts with the backend API to manage events, users, and tickets.

Testing with Postman
To test API endpoints in Postman, you can follow the below steps:

Set the Base URL: For local testing, set the base URL to http://localhost:5000/api/. For the deployed version, use https://event-app-eqnp.onrender.com/api/.

API Endpoints:

Register a User: POST /api/users/register

Login: POST /api/users/login

Get Events: GET /api/events

Create Event: POST /api/events

Get Event Details: GET /api/events/:eventId

Create Ticket: POST /api/tickets

Get Tickets: GET /api/tickets


  
