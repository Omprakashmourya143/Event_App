import React from 'react';
import { Route, Routes } from 'react-router-dom';  // Import routing components
import Navbar from './components/Navbar';  // Assuming you have a Navbar component
import RegistrationForm from './components/RegistrationForm';  // Registration form component
import Login from './pages/Login';  // Login page
import Home from './pages/Home';  // Home page
import Dashboard from './pages/Dashboard';  // Dashboard page
import EventDetail from './pages/EventDetail';  // Event detail page
import Checkout from './pages/Checkout';  // Checkout page
import Footer from './components/Footer';  // Footer component
import ProtectedRoute from './components/ProtectedRoute';  // Protect Routes component
import Events from './pages/Events';  // Events page

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">  {/* Flexbox layout to make footer stick at the bottom */}
      <Navbar />  {/* Display the Navbar component on all pages */}

      <div className="flex-grow">  {/* This div takes the remaining space between Navbar and Footer */}
        <Routes>  {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />  {/* Home page */}
          <Route path="/register" element={<RegistrationForm />} />  {/* Registration page */}
          <Route path="/login" element={<Login />} />  {/* Login page */}
          
          {/* Protected Routes */}
          <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />  {/* Protected Events page */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />  {/* Protected Dashboard page */}
          
          <Route path="/event/:id" element={<EventDetail />} />  {/* Event Detail page */}
          <Route path="/checkout" element={<Checkout />} />  {/* Checkout page */}
        </Routes>
      </div>

      <Footer />  {/* Footer will stick to the bottom of the page */}
    </div>
  );
};

export default App;
