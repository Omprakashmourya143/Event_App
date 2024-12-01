const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import route files
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
// const ticketRoutes = require('./routes/ticketRoutes');

dotenv.config();
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({
  origin: 'https://event-app-u8fw.onrender.com/',  // Allow requests from frontend URL
  credentials: true,  // Allow cookies and authorization headers
}));

// Root route handler
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Event Management App!</h1><p>Your backend is up and running.</p>');
});

// Route setup
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
// app.use('/api/payments', paymentRoutes);
// app.use('/api/tickets', ticketRoutes);

// Database connection and server listen setup
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('🟢 MongoDB connected successfully!');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => {
    console.error('🔴 MongoDB connection failed:', err);
  });
