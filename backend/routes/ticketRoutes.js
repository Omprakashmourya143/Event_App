const express = require('express');
const Ticket = require('../models/Ticket');
const Event = require('../models/Event');
const User = require('../models/User');
const { authMiddleware } = require('../middleware/authMiddleware'); // Ensure this path is correct

const router = express.Router();

// Route to create a ticket
router.post('/create', authMiddleware, async (req, res) => {
  try {
    const { eventId, userId } = req.body;

    // Ensure both event and user exist
    const event = await Event.findById(eventId);
    const user = await User.findById(userId);

    if (!event) return res.status(404).json({ message: 'Event not found' });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Create the ticket
    const ticket = new Ticket({
      event: eventId,
      user: userId,
    });

    await ticket.save();
    res.status(201).json({ message: 'Ticket created successfully', ticket });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Route to get tickets for a specific event
router.get('/event/:eventId', async (req, res) => {
  try {
    const tickets = await Ticket.find({ event: req.params.eventId })
      .populate('user', 'name email')
      .populate('event', 'title date location');

    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Route to get all tickets purchased by a user
router.get('/user/:userId', async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.params.userId })
      .populate('user', 'name email')
      .populate('event', 'title date location');

    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
