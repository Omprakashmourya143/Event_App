import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend to register user
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/register`, userData);
      console.log('User registered:', response.data);
      navigate('/login'); // Navigate to login after registration
    } catch (err) {
      setError('Failed to register user');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
            autoComplete="username"  // Added autocomplete attribute
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            autoComplete="email"  // Added autocomplete attribute
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            autoComplete="new-password"  // Added autocomplete attribute
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
