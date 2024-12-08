Online Event Management Platform - Frontend Documentation

Overview

This is the frontend application for the Online Event Management Platform, built with React and styled using TailwindCSS. It allows users to view events, register, log in, purchase tickets, and access dashboards.

Project Structure
plaintext
Copy code
frontend/
├── public/
│   ├── index.html               # Main HTML file for the app
│   ├── assets/                  # Static assets (images, icons, etc.)
│   └── favicon.ico              # Favicon for the site
├── src/
│   ├── components/              # Reusable components
│   │   ├── Navbar.js            # Navbar component
│   │   ├── Footer.js            # Footer component
│   │   ├── EventCard.js         # Event card for listing events
│   │   ├── PaymentForm.js       # Payment form component
│   │   └── RegistrationForm.js  # Registration form for users
│   ├── pages/                   # Pages for routing
│   │   ├── Home.js              # Home page
│   │   ├── EventDetail.js       # Event detail page
│   │   ├── Dashboard.js         # Dashboard for users/admins
│   │   ├── AdminPanel.js        # Admin panel for managing events
│   │   ├── Login.js             # Login page
│   │   └── Checkout.js          # Checkout page for purchasing tickets
│   ├── services/                # API service functions (axios calls)
│   │   ├── api.js               # API functions for communicating with backend
│   │   └── auth.js              # Authentication API functions
│   ├── App.js                   # Main React App component
│   ├── index.js                 # Entry point of the React app
│   ├── tailwind.config.js       # TailwindCSS configuration
│   └── .env                     # Environment variables (API URL, etc.)
├── package.json                 # Frontend dependencies and scripts
├── package-lock.json            # Lock file for exact dependencies
└── README.md                    # Documentation file (this file)

Key Features

Home Page:

Displays a list of upcoming events.
Fetches data from the backend via API (GET /api/events).
Event Details Page:

Shows detailed information about a selected event.
User Authentication:

Registration (POST /api/users/register) and login (POST /api/users/login).
Dashboard:

Allows users to view purchased tickets.
Admins can manage events.
Payment Integration:

Supports ticket purchases through a payment form.

Key Components
Navbar (components/Navbar.js): Navigation menu at the top of the app.
EventCard (components/EventCard.js): Displays event details in a card format.
RegistrationForm (components/RegistrationForm.js): Handles user registration.
PaymentForm (components/PaymentForm.js): Handles ticket payment inputs.

