import React, { useState } from 'react';
import { ArrowLeft, LogOut } from 'lucide-react';

const GroceriesPage = ({ addToCart, setCurrentPage, setIsLoggedIn }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const groceryItems = [
    // Bakery
    { id: 1, name: 'Brown Bread', category: 'bakery', image: '/images/Brownbread.png' },
    { id: 2, name: 'White Bread', category: 'bakery', image: '/images/Whitebread.png' },
    
    // Dairy
    { id: 3, name: 'Butter', category: 'dairy', image: '/images/Butter.png' },
    { id: 4, name: 'Curd Packet', category: 'dairy', image: '/images/Curdpacket.png' },
    { id: 5, name: 'Fresh Milk', category: 'dairy', image: '/images/milk.png' },
    { id: 6, name: 'Paneer', category: 'dairy', image: '/images/panner.png' },
    { id: 7, name: 'Yogurt', category: 'dairy', image: '/images/Yogurt.png' },
    
    // Vegetables
    { id: 8, name: 'Corn', category: 'vegetables', image: '/images/Corn.png' },
    { id: 9, name: 'Potato', category: 'vegetables', image: '/images/potato.png' },
    
    // Protein
    { id: 10, name: 'Eggs', category: 'protein', image: '/images/Eggs.png' },
    
    // Pantry
    { id: 11, name: 'Honey', category: 'pantry', image: '/images/Honey.png' },
    { id: 12, name: 'Oats', category: 'pantry', image: '/images/Oats.png' },
    
    // Household
    { id: 13, name: 'Detergent', category: 'household', image: '/images/Detergent.png' },
    { id: 14, name: 'Glass Cleaner', category: 'household', image: '/images/Glasscleaner.png' },
    { id: 15, name: 'Harpic', category: 'household', image: '/images/Harpic.png' },
    
    // Personal Care
    { id: 16, name: 'Hand Wash', category: 'personal-care', image: '/images/HandWash.png' },
    { id: 17, name: 'Face Mask', category: 'personal-care', image: '/images/Mask.png' },
    { id: 18, name: 'Sanitizer', category: 'personal-care', image: '/images/Santizer.png' },
    { id: 19, name: 'Shampoo', category: 'personal-care', image: '/images/Shampoo.png' },
    { id: 20, name: 'Tooth Paste', category: 'personal-care', image: '/images/ToothPaste.png' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? groceryItems 
    : groceryItems.filter(item => item.category === selectedCategory);

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

        <h2 className="text-4xl font-bold mb-10 text-orange-600 text-center">Browse Groceries</h2>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {['all', 'bakery', 'dairy', 'vegetables', 'protein', 'pantry', 'household', 'personal-care'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-3 rounded-full text-lg font-semibold transition-all ${
                selectedCategory === cat 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white scale-110 shadow-xl' 
                  : 'bg-white text-orange-600 hover:bg-orange-100 shadow-md'
              }`}
            >
              {cat === 'all' ? 'All Items' : 
               cat === 'bakery' ? 'Bakery' :
               cat === 'dairy' ? 'Dairy' :
               cat === 'vegetables' ? 'Vegetables' :
               cat === 'protein' ? 'Protein' :
               cat === 'pantry' ? 'Pantry' :
               cat === 'household' ? 'Household' : 'Personal Care'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-3xl p-5 hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
              <div className="mb-5 h-40 overflow-hidden rounded-2xl bg-white flex items-center justify-center p-3">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16px" fill="%23666"%3ENo Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{item.name}</h3>
              <button 
                onClick={() => addToCart(item)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-colors shadow-lg"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroceriesPage;