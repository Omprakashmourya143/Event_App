import axios from 'axios';

// Set the base URL for your API
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Set up axios instance with the base URL and default headers
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle user registration
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/api/users/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Registration failed');
  }
};

// Function to handle user login
export const loginUser = async (userData) => {
  try {
    const response = await api.post('/api/users/login', userData);
    return response.data;  // This should contain the JWT token
  } catch (error) {
    throw new Error(error.response.data.error || 'Login failed');
  }
};

// Function to get the current user's profile
export const getUserProfile = async (token) => {
  try {
    const response = await api.get('/api/users/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to fetch profile');
  }
};

// Function to get the list of events
export const getEvents = async () => {
  try {
    const response = await api.get('/api/events');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to fetch events');
  }
};

// Function to get details of a single event
export const getEventDetails = async (eventId) => {
  try {
    const response = await api.get(`/api/events/${eventId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to fetch event details');
  }
};

// Function to create a new event (for admins)
export const createEvent = async (token, eventData) => {
  try {
    const response = await api.post('/api/events', eventData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to create event');
  }
};

// Function to update an event (for admins)
export const updateEvent = async (token, eventId, eventData) => {
  try {
    const response = await api.put(`/api/events/${eventId}`, eventData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to update event');
  }
};

// Function to delete an event (for admins)
export const deleteEvent = async (token, eventId) => {
  try {
    const response = await api.delete(`/api/events/${eventId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to delete event');
  }
};

// Export default axios instance for use in other files if needed
export default api;
