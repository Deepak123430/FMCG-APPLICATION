import React from 'react';
import { ArrowLeft, LogOut } from 'lucide-react';

const DashboardPage = ({ setCurrentPage, setIsLoggedIn, pantryItems = [], notifications = [] }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const userName = "Deepak";
  const lowStockItems = pantryItems ? pantryItems.filter(item => item.stock < 3) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header with Title, Back Button and Logout */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
              Pulse360AI
            </span>
          </h1>
          
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <ArrowLeft size={20} className="text-orange-600" />
              <span className="text-base font-semibold text-orange-600">Back to Home</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:bg-red-700"
            >
              <LogOut size={20} className="text-white" />
              <span className="text-base font-semibold text-white">Logout</span>
            </button>
          </div>
        </div>

        {/* Welcome Message */}
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Hi {userName}, here's your day at a glance.
        </h2>

        {/* Main Grid Layout - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="space-y-6">
            
            {/* Notifications Card */}
            <div className="bg-yellow-300 rounded-3xl p-6 shadow-xl h-80 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Notifications</h3>
              </div>
              <div className="flex-1 overflow-y-auto">
                {notifications && notifications.length > 0 ? (
                  notifications.slice(0, 4).map((notif, index) => (
                    <p key={index} className="text-base text-gray-800 mb-3 leading-relaxed">{notif.message}</p>
                  ))
                ) : (
                  <p className="text-base text-gray-600">No notifications at the moment</p>
                )}
              </div>
            </div>

            {/* Pantry Stock Card - Compact */}
            <div className="bg-yellow-300 rounded-3xl p-6 shadow-xl h-80">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Pantry Stock</h3>
              <div className="bg-white rounded-2xl p-4 h-60 overflow-y-auto">
                <div className="flex justify-between mb-3 pb-2 border-b-2 border-gray-800 sticky top-0 bg-white">
                  <span className="text-lg font-bold text-gray-800">Item</span>
                  <span className="text-lg font-bold text-gray-800">Stock</span>
                </div>
                {pantryItems && pantryItems.length > 0 ? (
                  pantryItems.slice(0, 6).map(item => (
                    <div key={item.id} className="flex justify-between py-2 text-base text-red-800 hover:bg-gray-50">
                      <span>{item.name}</span>
                      <span className="font-bold">{item.stock}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-base text-gray-600 text-center py-2">No pantry items available</p>
                )}
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-purple-200 rounded-3xl p-6 shadow-xl h-44">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 text-center">
                  <div className="text-3xl font-black text-purple-600">{pantryItems?.length || 0}</div>
                  <div className="text-sm font-semibold text-gray-700">Total Items</div>
                </div>
                <div className="bg-white rounded-2xl p-4 text-center">
                  <div className="text-3xl font-black text-red-600">{lowStockItems?.length || 0}</div>
                  <div className="text-sm font-semibold text-gray-700">Low Stock</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Alert Boxes */}
          <div className="space-y-6">
            
            {/* Alert Messages - Larger Boxes */}
            {lowStockItems && lowStockItems.length > 0 ? (
              lowStockItems.slice(0, 2).map((item, index) => (
                <div 
                  key={index} 
                  className={`rounded-3xl p-8 shadow-xl h-80 flex items-center ${index === 0 ? 'bg-cyan-200' : 'bg-red-300'}`}
                >
                  <div className="flex items-center gap-6 w-full">
                    <div className="flex-shrink-0">
                      {index === 0 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                        {index === 0 ? `${item.name} running low, reorder in 2 days` : `Your ${item.name} went out of stock`}
                      </h3>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-3xl p-8 shadow-xl bg-green-200 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-3xl font-bold text-gray-800">All items well stocked!</h3>
                </div>
              </div>
            )}

            {/* Order Tracking Card */}
            <div className="bg-gray-100 rounded-3xl p-6 shadow-xl h-44 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Order Tracking</h3>
              <div className="relative px-4">
                {/* Progress Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
                    <span className="text-sm font-medium text-gray-800 text-center">Order Placed</span>
                  </div>
                  <div className="flex-1 h-2 bg-blue-500 mx-2"></div>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-6 h-6 bg-gray-300 rounded-full mb-2"></div>
                    <span className="text-sm font-medium text-gray-800 text-center">Vendor</span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-300 mx-2"></div>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-6 h-6 bg-red-300 rounded-full mb-2"></div>
                    <span className="text-sm font-medium text-gray-800 text-center">Delivery</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;