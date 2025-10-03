import React, { useState } from 'react';
import { ArrowLeft, Bell, Package, ShoppingCart, AlertTriangle, CheckCircle, LogOut } from 'lucide-react';

const NotificationsPage = ({ setCurrentPage, setIsLoggedIn, notifications }) => {
  const [filter, setFilter] = useState('all');
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const [notificationsList, setNotificationsList] = useState([
    { 
      id: 1, 
      type: 'delivery',
      icon: <Package className="w-10 h-10" />,
      title: 'Order Delivered', 
      message: 'Your order #1234 has been delivered successfully',
      time: '2 hours ago',
      priority: 'high',
      read: false,
      status: 'pending'
    },
    { 
      id: 2, 
      type: 'alert',
      icon: <AlertTriangle className="w-10 h-10" />,
      title: 'Low Stock Alert', 
      message: 'Brown Bread is running low. Only 2 items left in stock.',
      time: '5 hours ago',
      priority: 'high',
      read: false,
      status: 'pending'
    },
    { 
      id: 3, 
      type: 'alert',
      icon: <AlertTriangle className="w-10 h-10" />,
      title: 'Out of Stock', 
      message: 'Butter went out of stock. Time to reorder!',
      time: '1 day ago',
      priority: 'high',
      read: true,
      status: 'pending'
    },
    { 
      id: 4, 
      type: 'order',
      icon: <ShoppingCart className="w-10 h-10" />,
      title: 'Order Placed', 
      message: 'Your order #1235 has been placed successfully',
      time: '2 days ago',
      priority: 'medium',
      read: true,
      status: 'pending'
    },
    { 
      id: 5, 
      type: 'success',
      icon: <CheckCircle className="w-10 h-10" />,
      title: 'Restock Complete', 
      message: 'Your pantry has been restocked with fresh items',
      time: '3 days ago',
      priority: 'low',
      read: true,
      status: 'pending'
    },
    { 
      id: 6, 
      type: 'delivery',
      icon: <Package className="w-10 h-10" />,
      title: 'Order Shipped', 
      message: 'Your order #1235 has been shipped and is on the way',
      time: '3 days ago',
      priority: 'medium',
      read: true,
      status: 'pending'
    }
  ]);

  const handleAccept = (id) => {
    setNotificationsList(notificationsList.map(notif => 
      notif.id === id ? { ...notif, status: 'accepted' } : notif
    ));
  };

  const handleDeny = (id) => {
    setNotificationsList(notificationsList.map(notif => 
      notif.id === id ? { ...notif, status: 'denied' } : notif
    ));
  };

  const filteredNotifications = filter === 'all' 
    ? notificationsList 
    : filter === 'unread'
    ? notificationsList.filter(n => !n.read)
    : notificationsList.filter(n => n.type === filter);

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getIconColor = (type) => {
    switch(type) {
      case 'delivery': return 'text-blue-600';
      case 'alert': return 'text-red-600';
      case 'order': return 'text-orange-600';
      case 'success': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const unreadCount = notificationsList.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-[90%] mx-auto px-8 py-12">
        {/* Header with Title, Back Button and Logout */}
        <div className="flex items-center justify-between mb-10">
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

        {/* Page Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-orange-600 mb-3">Notifications</h2>
            <p className="text-xl text-gray-600">
              You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="relative">
            <Bell className="w-16 h-16 text-orange-600" />
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {unreadCount}
              </span>
            )}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          {[
            { id: 'all', label: 'All' },
            { id: 'unread', label: 'Unread' },
            { id: 'delivery', label: 'Delivery' },
            { id: 'alert', label: 'Alerts' },
            { id: 'order', label: 'Orders' }
          ].map(filterOption => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`px-5 py-3 rounded-full text-lg font-semibold transition-all ${
                filter === filterOption.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white scale-110 shadow-xl'
                  : 'bg-white text-orange-600 hover:bg-orange-100 shadow-md'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-5">
          {filteredNotifications.map(notification => (
            <div 
              key={notification.id}
              className={`bg-white rounded-3xl p-6 border-l-8 ${getPriorityColor(notification.priority)} shadow-xl hover:shadow-2xl transition-all ${!notification.read ? 'ring-3 ring-orange-400' : ''}`}
            >
              <div className="flex items-start gap-5">
                <div className={`${getIconColor(notification.type)} flex-shrink-0`}>
                  {notification.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{notification.title}</h3>
                    {!notification.read && (
                      <span className="bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-gray-600 mb-3">{notification.message}</p>
                  <p className="text-base text-gray-500 mb-4">{notification.time}</p>
                  
                  {/* Accept/Deny Buttons */}
                  {notification.status === 'pending' ? (
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleAccept(notification.id)}
                        className="px-6 py-2 bg-green-500 text-white rounded-xl font-bold text-base hover:bg-green-600 transition-colors shadow-md"
                      >
                        ✓ Accept
                      </button>
                      <button
                        onClick={() => handleDeny(notification.id)}
                        className="px-6 py-2 bg-red-500 text-white rounded-xl font-bold text-base hover:bg-red-600 transition-colors shadow-md"
                      >
                        ✗ Deny
                      </button>
                    </div>
                  ) : (
                    <div className={`inline-block px-6 py-2 rounded-xl font-bold text-base ${
                      notification.status === 'accepted' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {notification.status === 'accepted' ? '✓ Accepted' : '✗ Denied'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNotifications.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl shadow-xl">
            <Bell className="w-20 h-20 text-gray-300 mx-auto mb-5" />
            <p className="text-2xl text-gray-600">No notifications found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;