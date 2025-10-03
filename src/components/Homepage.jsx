import React from 'react';

const HomePage = ({ setCurrentPage, isLoggedIn }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-[95%] mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Grocery Image */}
            <div className="flex justify-center">
              <img 
                src="/images/grocer-background.png" 
                alt="Grocery Items"
                className="w-full max-w-full"
              />
            </div>

            {/* Right Side - Features */}
            <div className="space-y-8">
              
              {/* Pulse 360 Heading */}
              <div className="mb-12">
                <h1 className="text-8xl font-black mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
                    Pulse360AI
                  </span>
                </h1>
                <p className="text-3xl text-gray-700 font-medium">
                  Your Smart Grocery Partner
                </p>
              </div>

              {/* Show different features based on login status */}
              {!isLoggedIn ? (
                <>
                  {/* About Feature - Always visible */}
                  <div 
                    onClick={() => setCurrentPage('about')}
                    className="bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-7xl">ℹ️</div>
                      <div>
                        <h3 className="text-4xl font-bold text-white">About</h3>
                      </div>
                    </div>
                  </div>

                  {/* Sign In Feature - Changed from Sign Up */}
                  <div 
                    onClick={() => setCurrentPage('signin')}
                    className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-7xl">🔐</div>
                      <div>
                        <h3 className="text-4xl font-bold text-white">Sign In</h3>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Groceries Feature - Only visible after login */}
                  <div 
                    onClick={() => setCurrentPage('groceries')}
                    className="bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-7xl">🛒</div>
                      <div>
                        <h3 className="text-4xl font-bold text-white">Groceries</h3>
                      </div>
                    </div>
                  </div>

                  {/* Pantry Feature - Only visible after login */}
                  <div 
                    onClick={() => setCurrentPage('pantry')}
                    className="bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-7xl">🏺</div>
                      <div>
                        <h3 className="text-4xl font-bold text-white">Pantry</h3>
                      </div>
                    </div>
                  </div>

                  {/* Notifications Feature - Only visible after login */}
                  <div 
                    onClick={() => setCurrentPage('notifications')}
                    className="bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-7xl">🔔</div>
                      <div>
                        <h3 className="text-4xl font-bold text-white">Notifications</h3>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Feature - Only visible after login */}
                  <div 
                    onClick={() => setCurrentPage('dashboard')}
                    className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-7xl">📊</div>
                      <div>
                        <h3 className="text-4xl font-bold text-white">Dashboard</h3>
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