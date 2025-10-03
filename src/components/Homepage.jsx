import React from 'react';
import { ArrowLeft } from 'lucide-react';

const HomePage = ({ setCurrentPage, isLoggedIn }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-[95%] mx-auto px-8 py-12">
          {/* Back Button - Only visible when logged in */}
          {isLoggedIn && (
            <div className="flex justify-end mb-6">
              <button
                onClick={() => {
                  // This would typically log out the user
                  window.location.reload(); // Refresh to go back to initial state
                }}
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <ArrowLeft size={20} className="text-orange-600" />
                <span className="text-base font-semibold text-orange-600">Back to Home</span>
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
              </div>

              {/* Show different features based on login status */}
              {!isLoggedIn ? (
                <>
                  {/* About Feature - Visible BEFORE login */}
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

                  {/* Sign In Feature - Visible BEFORE login */}
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
                  {/* Groceries Feature - GREEN COLOR */}
                  <div 
                    onClick={() => setCurrentPage('groceries')}
                    className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">🛒</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Groceries</h3>
                      </div>
                    </div>
                  </div>

                  {/* Pantry Feature - PURPLE COLOR */}
                  <div 
                    onClick={() => setCurrentPage('pantry')}
                    className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">🏺</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Pantry</h3>
                      </div>
                    </div>
                  </div>

                  {/* Notifications Feature - YELLOW/AMBER COLOR */}
                  <div 
                    onClick={() => setCurrentPage('notifications')}
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">🔔</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Notifications</h3>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Feature - BLUE COLOR */}
                  <div 
                    onClick={() => setCurrentPage('dashboard')}
                    className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-5xl">📊</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Dashboard</h3>
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