import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend to login user and get JWT token
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, { email, password });
      localStorage.setItem('token', response.data.token);  // Store token in localStorage
      navigate('/dashboard'); // Redirect to dashboard or event list
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
