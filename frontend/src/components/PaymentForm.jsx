import React, { useState } from 'react';

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    // Call your backend for payment processing (Stripe or Razorpay integration)
    try {
      // Mock example: Replace with actual payment logic
      console.log('Processing payment...');
    } catch (error) {
      console.error('Payment failed:', error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Payment</h2>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default PaymentForm;
