import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const [eventsResponse, usersResponse] = await Promise.all([
          axios.get(`${process.env.REACT_APP_API_URL}/api/events`),
          axios.get(`${process.env.REACT_APP_API_URL}/api/users`)
        ]);
        setEvents(eventsResponse.data);
        setUsers(usersResponse.data);
      } catch (err) {
        console.error('Error fetching data for admin:', err);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">Admin Panel</h2>
      <h3 className="text-2xl font-semibold mb-4">Events</h3>
      <div>
        {events.map((event) => (
          <div key={event._id} className="mb-4 p-4 border border-gray-200 rounded">
            <h4 className="text-xl">{event.title}</h4>
            <p className="text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-4">Users</h3>
      <div>
        {users.map((user) => (
          <div key={user._id} className="mb-4 p-4 border border-gray-200 rounded">
            <p className="text-xl">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
