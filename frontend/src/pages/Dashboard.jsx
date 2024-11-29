import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">Welcome, {user.name}</h2>
      <p className="text-lg">Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
