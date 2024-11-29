import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/events/${id}`);
        setEvent(response.data);
      } catch (err) {
        console.error('Error fetching event:', err);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">{event.title}</h2>
      <p className="text-gray-600">{event.description}</p>
      <p className="text-lg mt-4"><strong>Location:</strong> {event.location}</p>
      <p className="text-lg mt-2"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p className="text-lg mt-2"><strong>Ticket Price:</strong> ₹{event.ticketPrice}</p>
    </div>
  );
};

export default EventDetail;
