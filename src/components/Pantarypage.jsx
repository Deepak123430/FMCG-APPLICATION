import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const PantryPage = ({ setCurrentPage, pantryItems }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const getStatusColor = (status) => {
    switch(status) {
      case 'low': return 'text-red-600 bg-red-100';
      case 'good': return 'text-yellow-600 bg-yellow-100';
      case 'excellent': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'low': return 'Low Stock';
      case 'good': return 'Good Stock';
      case 'excellent': return 'Well Stocked';
      default: return 'Unknown';
    }
  };

  const lowStockCount = extendedPantryItems.filter(item => item.status === 'low').length;
  const goodStockCount = extendedPantryItems.filter(item => item.status === 'good').length;
  const excellentStockCount = extendedPantryItems.filter(item => item.status === 'excellent').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-[95%] mx-auto px-8 py-12">
        {/* Header with Title and Back Button */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-7xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
              Pulse360AI
            </span>
          </h1>
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <ArrowLeft size={28} className="text-orange-600" />
            <span className="text-xl font-semibold text-orange-600">Back to Home</span>
          </button>
        </div>

        <h2 className="text-7xl font-bold text-center mb-16 text-orange-600">Your Smart Pantry</h2>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="text-6xl font-bold text-orange-600 mb-3">{extendedPantryItems.length}</div>
            <div className="text-2xl text-gray-700">Total Items</div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="text-6xl font-bold text-green-500 mb-3">{excellentStockCount}</div>
            <div className="text-2xl text-gray-700">Well Stocked</div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="text-6xl font-bold text-yellow-500 mb-3">{goodStockCount}</div>
            <div className="text-2xl text-gray-700">Good Stock</div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="text-6xl font-bold text-red-500 mb-3">{lowStockCount}</div>
            <div className="text-2xl text-gray-700">Low Stock</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-8 py-4 rounded-full text-2xl font-semibold transition-all ${
                selectedCategory === cat.id 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white scale-110 shadow-xl' 
                  : 'bg-white text-orange-600 hover:bg-orange-100 shadow-md'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Pantry Items Table */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <tr>
                  <th className="px-8 py-6 text-left text-2xl font-bold">#</th>
                  <th className="px-8 py-6 text-left text-2xl font-bold">Item Name</th>
                  <th className="px-8 py-6 text-center text-2xl font-bold">Stock Remaining</th>
                  <th className="px-8 py-6 text-center text-2xl font-bold">Status</th>
                  <th className="px-8 py-6 text-center text-2xl font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className={`border-b border-gray-200 hover:bg-orange-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-8 py-6 text-gray-800 font-semibold text-2xl">
                      {index + 1}
                    </td>
                    <td className="px-8 py-6 text-gray-800 font-semibold text-2xl">
                      {item.name}
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="text-5xl font-bold text-orange-600">
                        {item.stock}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className={`px-6 py-3 rounded-full text-lg font-bold ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-colors shadow-lg hover:shadow-xl">
                        Reorder
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl shadow-lg mt-10">
            <p className="text-3xl text-gray-600">No items found in this category.</p>
          </div>
        )}

        {/* Summary Footer */}
        <div className="mt-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl p-8 text-white text-center">
          <p className="text-3xl font-bold">
            Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} 
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PantryPage;