import React, { useState, useEffect } from 'react';
import { getEvents } from '../services/api'; // Assuming you have a service to fetch events

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading events...</div>;
  }

  return (
    <div className="events-container">
      <h1 className="text-2xl font-semibold mb-4">All Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            <h2 className="text-xl">{event.title}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.location}</p>
            <p>Price: ${event.ticketPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
