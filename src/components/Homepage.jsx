import React from 'react';
import { ArrowLeft } from 'lucide-react';

const HomePage = ({ setCurrentPage, isLoggedIn, cartCount, currentUser, isAdmin }) => {
  
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('currentUser');
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-[95%] mx-auto px-8 py-12">
          {/* Logout Button - Only visible when logged in */}
          {isLoggedIn && (
            <div className="flex justify-end mb-6">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <ArrowLeft size={20} />
                <span className="text-base font-semibold">Logout</span>
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Grocery Image */}
            <div className="flex justify-center">
              <img 
                src="/images/grocer-background.png" 
                alt="Grocery Items"
                className="w-full max-w-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Right Side - Features */}
            <div className="space-y-8">
              
              {/* Pulse 360 Heading */}
              <div className="mb-12">
                <h1 className="text-6xl font-black mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
                    Pulse360AI
                  </span>
                </h1>
                <p className="text-2xl text-gray-700 font-medium">
                  Your Everyday Grocery Mate
                </p>
                {/* Admin Badge */}
                {isLoggedIn && isAdmin && (
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg">
                    <span className="text-xl">👑</span>
                    <span className="text-white font-bold text-sm">ADMIN ACCESS</span>
                  </div>
                )}
              </div>

              {/* Features based on login status */}
              {!isLoggedIn ? (
                <>
                  {/* About Feature - BEFORE login */}
                  <div 
                    onClick={() => setCurrentPage('about')}
                    className="bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">ℹ️</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">About</h3>
                      </div>
                    </div>
                  </div>

                  {/* Sign In Feature - BEFORE login */}
                  <div 
                    onClick={() => setCurrentPage('signin')}
                    className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">🔐</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Sign In</h3>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* ADMIN PANEL - ONLY FOR ADMIN */}
                  {isAdmin && (
                    <div 
                      onClick={() => setCurrentPage('admin')}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-4 border-yellow-300 relative"
                    >
                      <div className="flex items-center gap-5">
                        <div className="text-5xl">🔐</div>
                        <div>
                          <h3 className="text-3xl font-bold text-white">Admin Panel</h3>
                          <p className="text-white text-lg">Manage Users & Data</p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full px-3 py-1 text-xs font-bold animate-pulse">
                        ADMIN ONLY
                      </div>
                    </div>
                  )}

                  {/* Groceries Feature - GREEN */}
                  <div 
                    onClick={() => setCurrentPage('groceries')}
                    className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">🛒</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Groceries</h3>
                        <p className="text-white text-lg">Browse & Compare Prices</p>
                      </div>
                    </div>
                  </div>

                  {/* My Cart Feature - BLUE */}
                  <div 
                    onClick={() => setCurrentPage('cart')}
                    className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer relative"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">🛒</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">My Cart</h3>
                        <p className="text-white text-lg">View Your Items</p>
                      </div>
                    </div>
                    {cartCount > 0 && (
                      <span className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold animate-pulse">
                        {cartCount}
                      </span>
                    )}
                  </div>

                  {/* Pantry Feature - PURPLE */}
                  <div 
                    onClick={() => setCurrentPage('pantry')}
                    className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">🏺</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Pantry</h3>
                        <p className="text-white text-lg">Manage Your Stock</p>
                      </div>
                    </div>
                  </div>

                  {/* My Orders Feature - INDIGO */}
                  <div 
                    onClick={() => setCurrentPage('orders')}
                    className="bg-gradient-to-r from-indigo-400 to-purple-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">📦</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">My Orders</h3>
                        <p className="text-white text-lg">Track Your Purchases</p>
                      </div>
                    </div>
                  </div>

                  {/* Notifications Feature - AMBER */}
                  <div 
                    onClick={() => setCurrentPage('notifications')}
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">🔔</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Notifications</h3>
                        <p className="text-white text-lg">Stay Updated</p>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Feature - CYAN */}
                  <div 
                    onClick={() => setCurrentPage('dashboard')}
                    className="bg-gradient-to-r from-cyan-400 to-teal-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">📊</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Dashboard</h3>
                        <p className="text-white text-lg">Overview & Analytics</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;