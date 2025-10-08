import React, { useState } from 'react';
import { ArrowLeft, LogOut } from 'lucide-react';

const PantryPage = ({ setCurrentPage, setIsLoggedIn, pantryItems }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const categories = [
    { id: 'all', name: 'All Items', icon: '📦' },
    { id: 'bakery', name: 'Bakery', icon: '🍞' },
    { id: 'dairy', name: 'Dairy', icon: '🥛' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥬' },
    { id: 'protein', name: 'Protein', icon: '🥚' },
    { id: 'pantry', name: 'Pantry Items', icon: '🏺' },
    { id: 'household', name: 'Household', icon: '🧹' },
    { id: 'personal-care', name: 'Personal Care', icon: '🧴' }
  ];

  const extendedPantryItems = [
    { id: 1, name: 'Brown Bread', stock: 2, category: 'bakery', status: 'low' },
    { id: 2, name: 'White Bread', stock: 3, category: 'bakery', status: 'good' },
    { id: 3, name: 'Butter', stock: 1, category: 'dairy', status: 'low' },
    { id: 4, name: 'Milk', stock: 5, category: 'dairy', status: 'good' },
    { id: 5, name: 'Paneer', stock: 2, category: 'dairy', status: 'low' },
    { id: 6, name: 'Yogurt', stock: 4, category: 'dairy', status: 'good' },
    { id: 7, name: 'Curd Packet', stock: 6, category: 'dairy', status: 'excellent' },
    { id: 8, name: 'Eggs', stock: 12, category: 'protein', status: 'excellent' },
    { id: 9, name: 'Corn', stock: 3, category: 'vegetables', status: 'good' },
    { id: 10, name: 'Potato', stock: 8, category: 'vegetables', status: 'excellent' },
    { id: 11, name: 'Honey', stock: 3, category: 'pantry', status: 'good' },
    { id: 12, name: 'Oats', stock: 2, category: 'pantry', status: 'low' },
    { id: 13, name: 'Detergent', stock: 1, category: 'household', status: 'low' },
    { id: 14, name: 'Glass Cleaner', stock: 2, category: 'household', status: 'low' },
    { id: 15, name: 'Harpic', stock: 1, category: 'household', status: 'low' },
    { id: 16, name: 'Hand Wash', stock: 2, category: 'personal-care', status: 'low' },
    { id: 17, name: 'Face Mask', stock: 5, category: 'personal-care', status: 'good' },
    { id: 18, name: 'Sanitizer', stock: 3, category: 'personal-care', status: 'good' },
    { id: 19, name: 'Shampoo', stock: 1, category: 'personal-care', status: 'low' },
    { id: 20, name: 'Tooth Paste', stock: 4, category: 'personal-care', status: 'good' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? extendedPantryItems 
    : extendedPantryItems.filter(item => item.category === selectedCategory);

  const getStockColor = (status) => {
    switch(status) {
      case 'low': return 'bg-red-100 border-red-400 text-red-800';
      case 'good': return 'bg-yellow-100 border-yellow-400 text-yellow-800';
      case 'excellent': return 'bg-green-100 border-green-400 text-green-800';
      default: return 'bg-gray-100 border-gray-400 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-[95%] mx-auto px-8 py-12">
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

        <h2 className="text-5xl font-bold mb-10 text-orange-600 text-center">My Pantry</h2>

        {/* Category Filter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-5 rounded-3xl font-semibold transition-all text-lg ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl scale-105'
                  : 'bg-white text-orange-600 hover:bg-orange-100 shadow-md'
              }`}
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <div className="text-base">{cat.name}</div>
            </button>
          ))}
        </div>

        {/* Pantry Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className={`border-4 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 ${getStockColor(item.status)}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold">Stock:</span>
                    <span className="text-4xl font-black">{item.stock}</span>
                  </div>
                </div>
                <div className="text-5xl">
                  {item.status === 'low' && '⚠️'}
                  {item.status === 'good' && '✅'}
                  {item.status === 'excellent' && '⭐'}
                </div>
              </div>
              <div className="mt-4">
                <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase ${
                  item.status === 'low' ? 'bg-red-500 text-white' :
                  item.status === 'good' ? 'bg-yellow-500 text-white' :
                  'bg-green-500 text-white'
                }`}>
                  {item.status} STOCK
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl shadow-xl">
            <p className="text-2xl text-gray-600">No items in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PantryPage;