const express = require('express');
const router = express.Router();
const { 
  createEvent, 
  getAllEvents, 
  getEventById, 
  updateEvent, 
  deleteEvent 
} = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

// Event routes
router.post('/', authMiddleware, createEvent);          // Create a new event
router.get('/', getAllEvents);                          // Get all events
router.get('/:id', getEventById);                       // Get event details by ID
router.put('/:id', authMiddleware, updateEvent);        // Update event details
router.delete('/:id', authMiddleware, deleteEvent);     // Delete an event

module.exports = router;
