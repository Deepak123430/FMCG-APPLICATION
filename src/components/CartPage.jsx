import React from 'react';
import { ArrowLeft, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';

const CartPage = ({ setCurrentPage, cart, updateCartQuantity, removeFromCart }) => {
  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = cart.length > 0 ? 40 : 0;
  const totalSavings = cart.reduce((sum, item) => {
    // Assume 10% savings on average (you can calculate actual savings if you have original prices)
    return sum + (item.price * item.quantity * 0.1);
  }, 0);
  const grandTotal = subtotal + deliveryFee;

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
            onClick={() => setCurrentPage('groceries')}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <ArrowLeft size={20} className="text-orange-600" />
            <span className="text-base font-semibold text-orange-600">Back to Groceries</span>
          </button>
        </div>

        <div className="flex items-center gap-4 mb-10">
          <ShoppingCart size={40} className="text-orange-600" />
          <h2 className="text-4xl font-bold text-orange-600">My Shopping Cart</h2>
          <span className="text-2xl font-semibold text-gray-600">({cart.length} items)</span>
        </div>

        {cart.length === 0 ? (
          // Empty Cart
          <div className="bg-white rounded-3xl p-16 shadow-2xl text-center">
            <ShoppingCart size={80} className="mx-auto text-gray-300 mb-6" />
            <h3 className="text-3xl font-bold text-gray-700 mb-4">Your cart is empty</h3>
            <p className="text-xl text-gray-500 mb-8">Add some items to get started!</p>
            <button
              onClick={() => setCurrentPage('groceries')}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-colors shadow-lg"
            >
              Browse Groceries
            </button>
          </div>
        ) : (
          // Cart with Items
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.source}-${index}`} className="bg-white rounded-3xl p-6 shadow-xl">
                  <div className="flex items-center gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain rounded-2xl"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23f3f4f6"/%3E%3C/svg%3E';
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                      <p className="text-lg text-gray-600 mb-2">From: <span className="font-semibold text-orange-600">{item.source}</span></p>
                      <p className="text-2xl font-black text-orange-600">₹{item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.source, item.quantity - 1)}
                        className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="text-2xl font-bold w-12 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.source, item.quantity + 1)}
                        className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors"
                      >
                        <Plus size={20} />
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-lg text-gray-600 mb-1">Total:</p>
                      <p className="text-2xl font-black text-gray-800">₹{item.price * item.quantity}</p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.source)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-3 rounded-full transition-colors"
                    >
                      <Trash2 size={24} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-2xl sticky top-8">
                <h3 className="text-3xl font-bold text-orange-600 mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-xl">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-bold text-gray-800">₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-xl">
                    <span className="text-gray-600">Delivery Fee:</span>
                    <span className="font-bold text-gray-800">₹{deliveryFee}</span>
                  </div>
                  
                  <div className="border-t-2 border-gray-200 pt-4">
                    <div className="flex justify-between text-xl text-green-600 mb-2">
                      <span className="font-semibold">Total Savings:</span>
                      <span className="font-bold">₹{totalSavings.toFixed(2)} 🎉</span>
                    </div>
                  </div>
                  
                  <div className="border-t-2 border-orange-200 pt-4">
                    <div className="flex justify-between text-2xl">
                      <span className="font-bold text-gray-800">Grand Total:</span>
                      <span className="font-black text-orange-600">₹{grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentPage('checkout')}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-colors shadow-lg mb-4"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => setCurrentPage('groceries')}
                  className="w-full bg-white border-2 border-orange-500 text-orange-600 py-4 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;