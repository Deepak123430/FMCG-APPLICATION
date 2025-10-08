import React from 'react';
import { ArrowLeft, Package, Calendar, MapPin, CreditCard } from 'lucide-react';

const OrdersPage = ({ setCurrentPage, orders }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <ArrowLeft size={20} className="text-orange-600" />
            <span className="text-base font-semibold text-orange-600">Back to Home</span>
          </button>
        </div>

        <div className="flex items-center gap-4 mb-10">
          <Package size={40} className="text-orange-600" />
          <h2 className="text-4xl font-bold text-orange-600">My Orders</h2>
          <span className="text-2xl font-semibold text-gray-600">({orders.length} orders)</span>
        </div>

        {orders.length === 0 ? (
          // No Orders
          <div className="bg-white rounded-3xl p-16 shadow-2xl text-center">
            <Package size={80} className="mx-auto text-gray-300 mb-6" />
            <h3 className="text-3xl font-bold text-gray-700 mb-4">No orders yet</h3>
            <p className="text-xl text-gray-500 mb-8">Start shopping to place your first order!</p>
            <button
              onClick={() => setCurrentPage('groceries')}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-colors shadow-lg"
            >
              Browse Groceries
            </button>
          </div>
        ) : (
          // Orders List
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.orderId} className="bg-white rounded-3xl p-8 shadow-xl">
                {/* Order Header */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-gray-200">
                  <div>
                    <p className="text-lg text-gray-600 mb-1">Order ID</p>
                    <p className="text-2xl font-bold text-orange-600">{order.orderId}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg text-gray-600 mb-1">Order Date</p>
                    <p className="text-xl font-bold text-gray-800">{order.orderDate}</p>
                  </div>
                  <div>
                    <span className={`inline-block px-4 py-2 rounded-full font-bold text-lg ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Items ({order.items.length})</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {order.items.slice(0, 4).map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-orange-50 rounded-xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-contain rounded-lg"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23f3f4f6"/%3E%3C/svg%3E';
                          }}
                        />
                        <div className="flex-grow">
                          <p className="font-bold text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-bold text-orange-600">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  {order.items.length > 4 && (
                    <p className="text-center text-gray-600 mt-3">+ {order.items.length - 4} more items</p>
                  )}
                </div>

                {/* Order Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={24} className="text-orange-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Delivery Address</p>
                      <p className="font-semibold text-gray-800">{order.deliveryAddress.name}</p>
                      <p className="text-sm text-gray-600">{order.deliveryAddress.city}, {order.deliveryAddress.pincode}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar size={24} className="text-orange-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Delivery Slot</p>
                      <p className="font-semibold text-gray-800">{order.deliverySlot}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CreditCard size={24} className="text-orange-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Payment Method</p>
                      <p className="font-semibold text-gray-800">{order.paymentMethod}</p>
                    </div>
                  </div>
                </div>

                {/* Order Total */}
                <div className="flex items-center justify-between pt-6 border-t-2 border-gray-200">
                  <div>
                    <p className="text-lg text-gray-600">Total Amount</p>
                    <p className="text-3xl font-black text-orange-600">₹{order.grandTotal.toFixed(2)}</p>
                    <p className="text-sm text-green-600 font-semibold">You saved ₹{order.totalSavings.toFixed(2)}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        // You can add view order details functionality here
                        alert(`Order Details:\n\nOrder ID: ${order.orderId}\nStatus: ${order.status}\nTotal: ₹${order.grandTotal}\n\nView full details coming soon!`);
                      }}
                      className="bg-white border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors"
                    >
                      View Details
                    </button>

                    {order.status === 'Delivered' && (
                      <button
                        onClick={() => {
                          // Reorder functionality
                          alert('Reorder functionality: This will add all items from this order back to your cart!');
                        }}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-colors"
                      >
                        Reorder
                      </button>
                    )}

                    {order.status === 'Pending' && (
                      <button
                        onClick={() => {
                          if (window.confirm('Are you sure you want to cancel this order?')) {
                            alert('Order cancellation functionality coming soon!');
                          }
                        }}
                        className="bg-white border-2 border-red-500 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors"
                      >
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;