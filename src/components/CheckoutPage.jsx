import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, CreditCard, ShoppingBag } from 'lucide-react';

const CheckoutPage = ({ setCurrentPage, cart, placeOrder }) => {
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    address: '',
    city: '',
    pincode: '',
    phone: ''
  });

  const [deliverySlot, setDeliverySlot] = useState('tomorrow-morning');
  const [paymentMethod, setPaymentMethod] = useState('cod');

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 40;
  const totalSavings = cart.reduce((sum, item) => sum + (item.price * item.quantity * 0.1), 0);
  const grandTotal = subtotal + deliveryFee;

  const handleInputChange = (e) => {
    setDeliveryDetails({
      ...deliveryDetails,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    // Validation
    if (!deliveryDetails.name || !deliveryDetails.address || !deliveryDetails.city || !deliveryDetails.pincode || !deliveryDetails.phone) {
      alert('Please fill in all delivery details!');
      return;
    }

    const timeSlots = {
      'today-evening': 'Today (6 PM - 9 PM)',
      'tomorrow-morning': 'Tomorrow (9 AM - 12 PM)',
      'tomorrow-afternoon': 'Tomorrow (3 PM - 6 PM)'
    };

    const paymentMethods = {
      'cod': 'Cash on Delivery',
      'card': 'Credit/Debit Card',
      'upi': 'UPI Payment',
      'wallet': 'Wallet'
    };

    placeOrder({
      deliveryAddress: deliveryDetails,
      deliverySlot: timeSlots[deliverySlot],
      paymentMethod: paymentMethods[paymentMethod],
      subtotal,
      deliveryFee,
      totalSavings,
      grandTotal
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-[95%] mx-auto px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-5xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
              Pulse360AI
            </span>
          </h1>
          <button
            onClick={() => setCurrentPage('cart')}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <ArrowLeft size={20} className="text-orange-600" />
            <span className="text-base font-semibold text-orange-600">Back to Cart</span>
          </button>
        </div>

        <h2 className="text-4xl font-bold text-orange-600 mb-10">Checkout</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={32} className="text-orange-600" />
                <h3 className="text-3xl font-bold text-gray-800">Delivery Address</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={deliveryDetails.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Address *</label>
                  <textarea
                    name="address"
                    value={deliveryDetails.address}
                    onChange={handleInputChange}
                    placeholder="House No., Street, Area"
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={deliveryDetails.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Pincode *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={deliveryDetails.pincode}
                      onChange={handleInputChange}
                      placeholder="Pincode"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={deliveryDetails.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Time Slot */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={32} className="text-orange-600" />
                <h3 className="text-3xl font-bold text-gray-800">Delivery Time Slot</h3>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-4 p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-orange-500 transition-colors">
                  <input
                    type="radio"
                    name="deliverySlot"
                    value="today-evening"
                    checked={deliverySlot === 'today-evening'}
                    onChange={(e) => setDeliverySlot(e.target.value)}
                    className="w-5 h-5"
                  />
                  <span className="text-lg font-semibold text-gray-700">Today (6 PM - 9 PM)</span>
                </label>

                <label className="flex items-center gap-4 p-4 border-2 border-orange-500 bg-orange-50 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    name="deliverySlot"
                    value="tomorrow-morning"
                    checked={deliverySlot === 'tomorrow-morning'}
                    onChange={(e) => setDeliverySlot(e.target.value)}
                    className="w-5 h-5"
                  />
                  <span className="text-lg font-semibold text-gray-700">Tomorrow (9 AM - 12 PM)</span>
                </label>

                <label className="flex items-center gap-4 p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-orange-500 transition-colors">
                  <input
                    type="radio"
                    name="deliverySlot"
                    value="tomorrow-afternoon"
                    checked={deliverySlot === 'tomorrow-afternoon'}
                    onChange={(e) => setDeliverySlot(e.target.value)}
                    className="w-5 h-5"
                  />
                  <span className="text-lg font-semibold text-gray-700">Tomorrow (3 PM - 6 PM)</span>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard size={32} className="text-orange-600" />
                <h3 className="text-3xl font-bold text-gray-800">Payment Method</h3>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-4 p-4 border-2 border-orange-500 bg-orange-50 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5"
                  />
                  <span className="text-lg font-semibold text-gray-700">💵 Cash on Delivery (COD)</span>
                </label>

                <label className="flex items-center gap-4 p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-orange-500 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5"
                  />
                  <span className="text-lg font-semibold text-gray-700">💳 Credit/Debit Card</span>
                </label>

                <label className="flex items-center gap-4 p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-orange-500 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5"
                  />
                  <span className="text-lg font-semibold text-gray-700">📱 UPI Payment</span>
                </label>

                <label className="flex items-center gap-4 p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-orange-500 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="wallet"
                    checked={paymentMethod === 'wallet'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5"
                  />
                  <span className="text-lg font-semibold text-gray-700">👛 Wallet</span>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-2xl sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag size={32} className="text-orange-600" />
                <h3 className="text-3xl font-bold text-orange-600">Order Summary</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-600">Items ({cart.length}):</span>
                  <span className="font-bold text-gray-800">₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="text-gray-600">Delivery:</span>
                  <span className="font-bold text-gray-800">₹{deliveryFee}</span>
                </div>

                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between text-lg text-green-600 mb-2">
                    <span className="font-semibold">You Saved:</span>
                    <span className="font-bold">₹{totalSavings.toFixed(2)} 🎉</span>
                  </div>
                </div>

                <div className="border-t-2 border-orange-200 pt-4">
                  <div className="flex justify-between text-2xl">
                    <span className="font-bold text-gray-800">Total:</span>
                    <span className="font-black text-orange-600">₹{grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-colors shadow-lg mb-4"
              >
                Place Order
              </button>

              <button
                onClick={() => setCurrentPage('cart')}
                className="w-full bg-white border-2 border-orange-500 text-orange-600 py-4 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-colors"
              >
                Back to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;