import React from 'react';
import { CheckCircle, Package, MapPin, CreditCard, Calendar, Home as HomeIcon } from 'lucide-react';

const OrderConfirmationPage = ({ setCurrentPage, order }) => {
  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700">No order found</h2>
          <button
            onClick={() => setCurrentPage('home')}
            className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-xl"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
              Pulse360AI
            </span>
          </h1>
        </div>

        {/* Success Message */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl p-10 shadow-2xl text-white text-center mb-8">
          <CheckCircle size={80} className="mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-4">Order Placed Successfully!</h2>
          <p className="text-2xl">Thank you for your order! 🎉</p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-6">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-lg text-gray-600 mb-2">Order ID</p>
              <p className="text-2xl font-bold text-orange-600">{order.orderId}</p>
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-2">Order Date</p>
              <p className="text-2xl font-bold text-gray-800">{order.orderDate}</p>
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-2">Status</p>
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold text-lg">
                {order.status}
              </span>
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-2">Estimated Delivery</p>
              <p className="text-xl font-bold text-gray-800">{order.deliverySlot}</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Package size={32} className="text-orange-600" />
            <h3 className="text-3xl font-bold text-gray-800">Order Items</h3>
          </div>

          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-orange-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain rounded-xl"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23f3f4f6"/%3E%3C/svg%3E';
                    }}
                  />
                  <div>
                    <p className="text-xl font-bold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">From: {item.source}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-orange-600">₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t-2 border-gray-200 space-y-3">
            <div className="flex justify-between text-lg">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-bold text-gray-800">₹{order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-gray-600">Delivery Fee:</span>
              <span className="font-bold text-gray-800">₹{order.deliveryFee}</span>
            </div>
            <div className="flex justify-between text-lg text-green-600">
              <span className="font-semibold">You Saved:</span>
              <span className="font-bold">₹{order.totalSavings.toFixed(2)} 🎉</span>
            </div>
            <div className="flex justify-between text-2xl pt-3 border-t-2 border-orange-200">
              <span className="font-bold text-gray-800">Total Paid:</span>
              <span className="font-black text-orange-600">₹{order.grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-6">
          <div className="flex items-center gap-3 mb-6">
            <MapPin size={32} className="text-orange-600" />
            <h3 className="text-3xl font-bold text-gray-800">Delivery Address</h3>
          </div>

          <div className="text-lg text-gray-700 space-y-2">
            <p className="font-bold text-xl text-gray-800">{order.deliveryAddress.name}</p>
            <p>{order.deliveryAddress.address}</p>
            <p>{order.deliveryAddress.city} - {order.deliveryAddress.pincode}</p>
            <p>Phone: {order.deliveryAddress.phone}</p>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard size={32} className="text-orange-600" />
            <h3 className="text-3xl font-bold text-gray-800">Payment Information</h3>
          </div>

          <div className="text-lg text-gray-700">
            <p className="mb-2"><span className="font-semibold">Payment Method:</span> {order.paymentMethod}</p>
            <p><span className="font-semibold">Amount:</span> <span className="text-2xl font-bold text-orange-600">₹{order.grandTotal.toFixed(2)}</span></p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setCurrentPage('orders')}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-indigo-600 transition-colors shadow-lg"
          >
            View All Orders
          </button>

          <button
            onClick={() => setCurrentPage('groceries')}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-colors shadow-lg"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => setCurrentPage('home')}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <HomeIcon size={24} />
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;