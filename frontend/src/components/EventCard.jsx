import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p className="text-gray-600">{event.description}</p>
      <p className="text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
      <p className="text-gray-700 font-bold">Price: ₹{event.ticketPrice}</p>
      <p className="text-gray-500">Location: {event.location}</p>
    </div>
  );
};

export default EventCard;
