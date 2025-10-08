const API_ENDPOINTS = {
  API1: 'https://talismanic-karon-unhandily.ngrok-free.dev/api/products',
  API2: 'https://unretrogressively-nonimaginational-kamryn.ngrok-free.dev/api/products'
};

// Store 1: BLINKIT - Mock Data
const USE_MOCK_API1 = true; // Use Blinkit mock data
const MOCK_API1_PRODUCTS = [
  {"id":1,"name":"Milk","category":"Dairy","price":48,"stock":24,"image":"/images/milk.png"},
  {"id":2,"name":"Brown Bread","category":"Bakery","price":45,"stock":19,"image":"/images/Brownbread.png"},
  {"id":3,"name":"Milk Bread","category":"Bakery","price":40,"stock":14,"image":"/images/Whitebread.png"},
  {"id":4,"name":"Eggs","category":"Dairy","price":52,"stock":25,"image":"/images/Eggs.png"},
  {"id":5,"name":"Oats","category":"Cereal","price":95,"stock":30,"image":"/images/Oats.png"},
  {"id":6,"name":"Paneer","category":"Dairy","price":135,"stock":15,"image":"/images/panner.png"},
  {"id":7,"name":"Curd","category":"Dairy","price":55,"stock":28,"image":"/images/Curdpacket.png"},
  {"id":8,"name":"Yogurt","category":"Dairy","price":49,"stock":18,"image":"/images/Yogurt.png"},
  {"id":9,"name":"Butter","category":"Dairy","price":89,"stock":28,"image":"/images/Butter.png"},
  {"id":10,"name":"Honey","category":"Grocery","price":170,"stock":17,"image":"/images/Honey.png"},
  {"id":11,"name":"Colin","category":"Household","price":120,"stock":28,"image":"/images/Glasscleaner.png"},
  {"id":12,"name":"Harpic","category":"Household","price":85,"stock":20,"image":"/images/Harpic.png"},
  {"id":13,"name":"Detergent","category":"Household","price":150,"stock":33,"image":"/images/Detergent.png"},
  {"id":14,"name":"Mask","category":"Personal Care","price":12,"stock":40,"image":"/images/Mask.png"},
  {"id":15,"name":"Sanitizer","category":"Personal Care","price":99,"stock":32,"image":"/images/Santizer.png"},
  {"id":16,"name":"Handwash","category":"Personal Care","price":110,"stock":29,"image":"/images/HandWash.png"},
  {"id":17,"name":"Corn","category":"Vegetables","price":35,"stock":36,"image":"/images/Corn.png"},
  {"id":18,"name":"Potato","category":"Vegetables","price":25,"stock":45,"image":"/images/potato.png"},
  {"id":19,"name":"Tooth Paste","category":"Personal Care","price":50,"stock":37,"image":"/images/ToothPaste.png"},
  {"id":20,"name":"Shampoo","category":"Personal Care","price":180,"stock":45,"image":"/images/Shampoo.png"}
];

// Store 2: INSTAMART (SWIGGY) - Mock Data
const USE_MOCK_API2 = true; // Set to false when real API 2 is available
const MOCK_API2_PRODUCTS = [
  {"id":1,"name":"Milk","category":"Dairy","price":55,"rating":4.5,"stock":20,"image":"/images/milk.png"},
  {"id":2,"name":"Brown Bread","category":"Bakery","price":40,"rating":4.2,"stock":15,"image":"/images/Brownbread.png"},
  {"id":3,"name":"Milk Bread","category":"Bakery","price":45,"rating":4.3,"stock":18,"image":"/images/Whitebread.png"},
  {"id":4,"name":"Eggs","category":"Dairy","price":60,"rating":4.7,"stock":30,"image":"/images/Eggs.png"},
  {"id":5,"name":"Oats","category":"Cereal","price":90,"rating":4.4,"stock":25,"image":"/images/Oats.png"},
  {"id":6,"name":"Paneer","category":"Dairy","price":120,"rating":4.6,"stock":10,"image":"/images/panner.png"},
  {"id":7,"name":"Curd","category":"Dairy","price":50,"rating":4.3,"stock":20,"image":"/images/Curdpacket.png"},
  {"id":8,"name":"Yogurt","category":"Dairy","price":55,"rating":4.2,"stock":15,"image":"/images/Yogurt.png"},
  {"id":9,"name":"Butter","category":"Dairy","price":80,"rating":4.5,"stock":12,"image":"/images/Butter.png"},
  {"id":10,"name":"Honey","category":"Grocery","price":150,"rating":4.8,"stock":8,"image":"/images/Honey.png"},
  {"id":11,"name":"Colin","category":"Household","price":100,"rating":4.1,"stock":20,"image":"/images/Glasscleaner.png"},
  {"id":12,"name":"Harpic","category":"Household","price":90,"rating":4.3,"stock":25,"image":"/images/Harpic.png"},
  {"id":13,"name":"Detergent","category":"Household","price":200,"rating":4.2,"stock":30,"image":"/images/Detergent.png"},
  {"id":14,"name":"Mask","category":"Personal Care","price":15,"rating":4,"stock":50,"image":"/images/Mask.png"},
  {"id":15,"name":"Sanitizer","category":"Personal Care","price":120,"rating":4.4,"stock":35,"image":"/images/Santizer.png"},
  {"id":16,"name":"Handwash","category":"Personal Care","price":90,"rating":4.3,"stock":25,"image":"/images/HandWash.png"},
  {"id":17,"name":"Corn","category":"Vegetables","price":30,"rating":4.1,"stock":40,"image":"/images/Corn.png"},
  {"id":18,"name":"Potato","category":"Vegetables","price":20,"rating":4,"stock":50,"image":"/images/potato.png"},
  {"id":19,"name":"Tooth Paste","category":"Personal Care","price":60,"rating":4.2,"stock":40,"image":"/images/ToothPaste.png"},
  {"id":20,"name":"Shampoo","category":"Personal Care","price":150,"rating":4.5,"stock":30,"image":"/images/Shampoo.png"}
];

// Product name mapping
const PRODUCT_NAME_MAP = {
  'Fresh Milk': 'Milk',
  'Brown Bread': 'Brown Bread',
  'White Bread': 'Milk Bread',
  'Curd Packet': 'Curd',
  'Paneer': 'Paneer',
  'Yogurt': 'Yogurt',
  'Butter': 'Butter',
  'Eggs': 'Eggs',
  'Honey': 'Honey',
  'Oats': 'Oats',
  'Corn': 'Corn',
  'Potato': 'Potato',
  'Detergent': 'Detergent',
  'Glass Cleaner': 'Colin',
  'Harpic': 'Harpic',
  'Hand Wash': 'Handwash',
  'Face Mask': 'Mask',
  'Sanitizer': 'Sanitizer',
  'Shampoo': 'Shampoo',
  'Tooth Paste': 'Tooth Paste'
};

const getSearchTerm = (productName) => {
  return PRODUCT_NAME_MAP[productName] || productName;
};

/**
 * Fetch products from both APIs and compare prices
 */
export const fetchProductComparison = async (productName) => {
  console.log('🔍 Searching for product:', productName);
  
  try {
    console.log('📡 Fetching from Blinkit and Instamart (Swiggy)...');
    
    const [response1, response2] = await Promise.allSettled([
      USE_MOCK_API1 ? Promise.resolve({ ok: true, json: async () => MOCK_API1_PRODUCTS }) : fetch(API_ENDPOINTS.API1, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        }
      }),
      USE_MOCK_API2 ? Promise.resolve({ ok: true, json: async () => MOCK_API2_PRODUCTS }) : fetch(API_ENDPOINTS.API2, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        }
      })
    ]);

    let api1Data = null;
    let api2Data = null;

    // Process Blinkit (API 1)
    if (USE_MOCK_API1) {
      api1Data = MOCK_API1_PRODUCTS;
      console.log('✅ Blinkit Mock Data Loaded! Products:', api1Data.length);
    } else if (response1.status === 'fulfilled' && response1.value.ok) {
      api1Data = await response1.value.json();
      console.log('✅ Blinkit API Success! Products:', Array.isArray(api1Data) ? api1Data.length : 'Unknown');
    } else {
      console.error('❌ Blinkit API Failed:', response1);
    }

    // Process Instamart (API 2)
    if (USE_MOCK_API2) {
      api2Data = MOCK_API2_PRODUCTS;
      console.log('✅ Instamart (Swiggy) Mock Data Loaded! Products:', api2Data.length);
    } else if (response2.status === 'fulfilled' && response2.value.ok) {
      api2Data = await response2.value.json();
      console.log('✅ Instamart (Swiggy) API Success! Products:', Array.isArray(api2Data) ? api2Data.length : 'Unknown');
    } else {
      console.error('❌ Instamart (Swiggy) API Failed:', response2);
    }

    const searchTerm = getSearchTerm(productName);
    console.log('🎯 Searching for:', searchTerm);

    const product1 = findProductByName(api1Data, searchTerm);
    const product2 = findProductByName(api2Data, searchTerm);

    console.log('🎯 Results:');
    console.log('  📦 Blinkit:', product1 ? `✅ ${product1.name} - ₹${product1.price}` : '❌ Not found');
    console.log('  📦 Instamart (Swiggy):', product2 ? `✅ ${product2.name} - ₹${product2.price}` : '❌ Not found');

    return {
      product1: product1,
      product2: product2,
      cheaperOption: getCheaperOption(product1, product2),
      comparison: {
        api1Available: !!product1,
        api2Available: !!product2,
        priceDifference: calculatePriceDifference(product1, product2)
      }
    };

  } catch (error) {
    console.error('💥 Error:', error);
    throw new Error('Failed to fetch product data');
  }
};

const findProductByName = (data, productName) => {
  if (!data) return null;

  const searchTerm = productName.toLowerCase().trim();
  const keywords = searchTerm.split(' ').filter(word => word.length > 2);
  const mainKeyword = keywords[keywords.length - 1] || searchTerm;

  const searchInArray = (arr) => {
    if (!arr || !Array.isArray(arr)) return null;

    let found = arr.find(item => {
      const itemName = (item.name || item.product_name || '').toLowerCase().trim();
      return itemName === searchTerm;
    });
    if (found) return found;

    found = arr.find(item => {
      const itemName = (item.name || item.product_name || '').toLowerCase().trim();
      return itemName.includes(searchTerm) || searchTerm.includes(itemName);
    });
    if (found) return found;

    found = arr.find(item => {
      const itemName = (item.name || item.product_name || '').toLowerCase().trim();
      return itemName.includes(mainKeyword);
    });
    if (found) return found;

    found = arr.find(item => {
      const itemName = (item.name || item.product_name || '').toLowerCase().trim();
      return keywords.some(keyword => itemName.includes(keyword));
    });

    return found;
  };

  if (Array.isArray(data)) return searchInArray(data);
  if (data.products && Array.isArray(data.products)) return searchInArray(data.products);
  return null;
};

const getCheaperOption = (product1, product2) => {
  if (!product1 && !product2) return null;
  if (!product1) return { ...product2, source: 'Instamart (Swiggy)' };
  if (!product2) return { ...product1, source: 'Blinkit' };

  const price1 = parseFloat(product1.price || product1.cost || 0);
  const price2 = parseFloat(product2.price || product2.cost || 0);

  console.log('💰 Price Comparison:');
  console.log('  Blinkit: ₹' + price1);
  console.log('  Instamart (Swiggy): ₹' + price2);
  console.log('  Winner:', price1 <= price2 ? 'Blinkit ✅' : 'Instamart (Swiggy) ✅');

  if (price1 <= price2) {
    return { ...product1, source: 'Blinkit', price: price1 };
  } else {
    return { ...product2, source: 'Instamart (Swiggy)', price: price2 };
  }
};

const calculatePriceDifference = (product1, product2) => {
  if (!product1 || !product2) return 0;
  const price1 = parseFloat(product1.price || product1.cost || 0);
  const price2 = parseFloat(product2.price || product2.cost || 0);
  return Math.abs(price1 - price2).toFixed(2);
};

export const fetchAllProducts = async () => {
  try {
    const [response1, response2] = await Promise.allSettled([
      USE_MOCK_API1 ? Promise.resolve({ ok: true, json: async () => MOCK_API1_PRODUCTS }) : fetch(API_ENDPOINTS.API1, {
        headers: { 'ngrok-skip-browser-warning': 'true' }
      }),
      USE_MOCK_API2 ? Promise.resolve({ ok: true, json: async () => MOCK_API2_PRODUCTS }) : fetch(API_ENDPOINTS.API2, {
        headers: { 'ngrok-skip-browser-warning': 'true' }
      })
    ]);

    let api1Products = [];
    let api2Products = [];

    if (USE_MOCK_API1) {
      api1Products = MOCK_API1_PRODUCTS;
    } else if (response1.status === 'fulfilled' && response1.value.ok) {
      const data = await response1.value.json();
      api1Products = Array.isArray(data) ? data : (data.products || []);
    }

    if (USE_MOCK_API2) {
      api2Products = MOCK_API2_PRODUCTS;
    } else if (response2.status === 'fulfilled' && response2.value.ok) {
      const data = await response2.value.json();
      api2Products = Array.isArray(data) ? data : (data.products || []);
    }

    return { api1Products, api2Products, success: true };
  } catch (error) {
    console.error('Error:', error);
    return { api1Products: [], api2Products: [], success: false, error: error.message };
  }
};