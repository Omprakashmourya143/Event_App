import React from 'react';
import PaymentForm from '../components/PaymentForm';

const Checkout = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
