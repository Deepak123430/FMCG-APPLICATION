import React, { useState } from 'react';
import { ArrowLeft, X, ShoppingCart, TrendingDown, Package } from 'lucide-react';
import { fetchProductComparison } from '../services/apiService';

const GroceriesPage = ({ addToCart, setCurrentPage, cartCount }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(false);
  const [comparisonModal, setComparisonModal] = useState(null);
  const [error, setError] = useState(null);

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

  // Handle product click to fetch price comparison
  const handleProductClick = async (item) => {
    setLoading(true);
    setError(null);
    
    try {
      const comparisonData = await fetchProductComparison(item.name);
      
      if (!comparisonData.product1 && !comparisonData.product2) {
        setError(`Sorry, ${item.name} is not available in our partner stores right now.`);
        setLoading(false);
        return;
      }

      setComparisonModal({
        originalItem: item,
        ...comparisonData
      });
      
    } catch (err) {
      setError('Failed to fetch prices. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add the cheaper option to cart
  const handleAddCheaperToCart = () => {
    if (comparisonModal?.cheaperOption) {
      const cartItem = {
        ...comparisonModal.originalItem,
        price: comparisonModal.cheaperOption.price,
        source: comparisonModal.cheaperOption.source
      };
      addToCart(cartItem);
      setComparisonModal(null);
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
          
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            {cartCount > 0 && (
              <button
                onClick={() => setCurrentPage('cart')}
                className="relative flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <ShoppingCart size={24} className="text-orange-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold animate-pulse">
                  {cartCount}
                </span>
                <span className="text-base font-semibold text-orange-600">Cart</span>
              </button>
            )}
            
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <ArrowLeft size={20} className="text-orange-600" />
              <span className="text-base font-semibold text-orange-600">Back to Home</span>
            </button>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-10 text-orange-600 text-center">Browse Groceries</h2>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
            {error}
          </div>
        )}

        {/* Category Filters */}
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

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl p-5 hover:scale-105 transition-all shadow-xl hover:shadow-2xl cursor-pointer"
              onClick={() => handleProductClick(item)}
            >
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
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Compare Prices
              </button>
            </div>
          ))}
        </div>

        {/* Loading Overlay */}
        {loading && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto"></div>
              <p className="text-xl font-semibold text-gray-700 mt-4">Comparing prices...</p>
            </div>
          </div>
        )}

        {/* Price Comparison Modal */}
        {comparisonModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-8 z-50">
            <div className="bg-white rounded-3xl p-8 max-w-4xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
              <button 
                onClick={() => setComparisonModal(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors"
              >
                <X size={32} />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-orange-600 mb-2">Price Comparison</h2>
                <p className="text-xl text-gray-600">{comparisonModal.originalItem.name}</p>
              </div>

              {/* Best Deal Banner */}
              {comparisonModal.cheaperOption && (
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 mb-6 text-white flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <TrendingDown size={40} />
                    <div>
                      <h3 className="text-2xl font-bold">Best Deal Found!</h3>
                      <p className="text-lg">Save up to ₹{comparisonModal.comparison.priceDifference}</p>
                    </div>
                  </div>
                  <div className="text-3xl font-black">
                    ₹{comparisonModal.cheaperOption.price}
                  </div>
                </div>
              )}

              {/* Price Comparison Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Blinkit Card */}
                <div className={`border-4 rounded-2xl p-6 ${
                  comparisonModal.cheaperOption?.source === 'Blinkit' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-300 bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">🛒 Blinkit</h3>
                    {comparisonModal.cheaperOption?.source === 'Blinkit' && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        CHEAPEST
                      </span>
                    )}
                  </div>
                  
                  {comparisonModal.product1 ? (
                    <>
                      <div className="mb-4">
                        <p className="text-gray-600">Price:</p>
                        <p className="text-3xl font-black text-orange-600">
                          ₹{comparisonModal.product1.price || comparisonModal.product1.cost || 'N/A'}
                        </p>
                      </div>
                      {comparisonModal.product1.description && (
                        <p className="text-sm text-gray-600 mb-2">
                          {comparisonModal.product1.description}
                        </p>
                      )}
                      {comparisonModal.product1.stock && (
                        <p className="text-sm text-gray-600">
                          Stock: {comparisonModal.product1.stock} units
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <Package size={40} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-500">Not available</p>
                    </div>
                  )}
                </div>

                {/* Instamart (Swiggy) Card */}
                <div className={`border-4 rounded-2xl p-6 ${
                  comparisonModal.cheaperOption?.source === 'Instamart (Swiggy)' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-300 bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">🍔 Instamart (Swiggy)</h3>
                    {comparisonModal.cheaperOption?.source === 'Instamart (Swiggy)' && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        CHEAPEST
                      </span>
                    )}
                  </div>
                  
                  {comparisonModal.product2 ? (
                    <>
                      <div className="mb-4">
                        <p className="text-gray-600">Price:</p>
                        <p className="text-3xl font-black text-orange-600">
                          ₹{comparisonModal.product2.price || comparisonModal.product2.cost || 'N/A'}
                        </p>
                      </div>
                      {comparisonModal.product2.description && (
                        <p className="text-sm text-gray-600 mb-2">
                          {comparisonModal.product2.description}
                        </p>
                      )}
                      {comparisonModal.product2.stock && (
                        <p className="text-sm text-gray-600">
                          Stock: {comparisonModal.product2.stock} units
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <Package size={40} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-500">Not available</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleAddCheaperToCart}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-colors shadow-lg flex items-center justify-center gap-3"
              >
                <ShoppingCart size={24} />
                Add Best Deal to Cart - ₹{comparisonModal.cheaperOption?.price}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroceriesPage;