import React, { useState, useEffect } from 'react';

import HomePage from './components/Homepage';
import AboutPage from './components/Aboutpage';
import GroceriesPage from './components/GroceriesPage';
import PantryPage from './components/Pantarypage';
import NotificationsPage from './components/Notificationspage';
import DashboardPage from './components/Dashboardpage';
import SignInPage from './components/SignInpage';
import SignUpPage from './components/SignUpPage';
import EntryAnimation from './components/EntryAnimation';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import OrderConfirmationPage from './components/OrderConfirmation';
import OrdersPage from './components/OrdersPage';
import AdminPanel from './components/AdminPanel';

function App() {
  const [currentPage, setCurrentPage] = useState('entry');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  
  // Check if user is logged in on mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setCurrentUser(user);
      setIsLoggedIn(true);
    }
  }, []);
  
  // Pantry items for dashboard and pantry page
  const pantryItems = [
    { id: 1, name: 'Brown Bread', stock: 2 },
    { id: 2, name: 'Butter', stock: 1 },
    { id: 3, name: 'Milk', stock: 5 },
    { id: 4, name: 'Eggs', stock: 12 },
    { id: 5, name: 'Honey', stock: 3 }
  ];

  // Notifications for dashboard and notifications page
  const notifications = [
    { id: 1, message: 'Your order #1234 has been delivered' },
    { id: 2, message: 'Low stock alert for Brown Bread' }
  ];

  // Check if current user is admin
  const isAdmin = () => {
    return currentUser?.role === 'admin';
  };

  // Updated addToCart function to handle price comparison data
  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id && cartItem.source === item.source);
    
    if (existingItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity = (updatedCart[existingItemIndex].quantity || 1) + 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    if (item.price && item.source) {
      alert(`${item.name} added to cart from ${item.source} at ₹${item.price}!`);
    } else {
      alert(`${item.name} added to cart!`);
    }
  };

  // Update cart item quantity
  const updateCartQuantity = (itemId, source, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId, source);
      return;
    }
    
    const updatedCart = cart.map(item => {
      if (item.id === itemId && item.source === source) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Remove item from cart
  const removeFromCart = (itemId, source) => {
    const updatedCart = cart.filter(item => !(item.id === itemId && item.source === source));
    setCart(updatedCart);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Place order
  const placeOrder = (orderDetails) => {
    const newOrder = {
      orderId: `ORD${Date.now()}`,
      orderDate: new Date().toLocaleDateString(),
      status: 'Pending',
      items: [...cart],
      userId: currentUser?.id,
      ...orderDetails
    };
    
    setOrders([...orders, newOrder]);
    setCurrentOrder(newOrder);
    setCart([]);
    setCurrentPage('orderconfirmation');
  };

  const handleAnimationComplete = () => {
    setCurrentPage('home');
  };

  // Enhanced login handler
  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  // Enhanced logout handler
  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser');
    setCurrentPage('home');
  };

  // Protected route handler
  const handleProtectedRoute = (page) => {
    // Check if trying to access admin panel
    if (page === 'admin') {
      if (!isLoggedIn) {
        alert('Please sign in to access admin panel!');
        setCurrentPage('signin');
        return;
      }
      if (!isAdmin()) {
        alert('Access denied! Admin privileges required.');
        return;
      }
    }
    
    if (!isLoggedIn && ['groceries', 'pantry', 'notifications', 'dashboard', 'cart', 'checkout', 'orders'].includes(page)) {
      alert('Please sign in to access this feature!');
      setCurrentPage('signin');
      return;
    }
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {/* Entry Animation */}
      {currentPage === 'entry' && (
        <EntryAnimation onAnimationComplete={handleAnimationComplete} />
      )}
      
      {currentPage === 'home' && (
        <HomePage 
          setCurrentPage={handleProtectedRoute}
          isLoggedIn={isLoggedIn}
          cartCount={cart.length}
          currentUser={currentUser}
          isAdmin={isAdmin()}
        />
      )}
      
      {/* About Page */}
      {currentPage === 'about' && (
        <AboutPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={handleLogout}
          isLoggedIn={isLoggedIn}
        />
      )}
      
      {/* Admin Panel - Only for Admins */}
      {currentPage === 'admin' && isLoggedIn && isAdmin() && (
        <AdminPanel 
          setCurrentPage={setCurrentPage}
          currentUser={currentUser}
          setIsLoggedIn={handleLogout}
        />
      )}
      
      {/* Protected Routes */}
      {currentPage === 'groceries' && isLoggedIn && (
        <GroceriesPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={handleLogout}
          addToCart={addToCart}
          cartCount={cart.length}
        />
      )}
      
      {currentPage === 'cart' && isLoggedIn && (
        <CartPage 
          setCurrentPage={setCurrentPage}
          cart={cart}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
        />
      )}
      
      {currentPage === 'checkout' && isLoggedIn && (
        <CheckoutPage 
          setCurrentPage={setCurrentPage}
          cart={cart}
          placeOrder={placeOrder}
        />
      )}
      
      {currentPage === 'orderconfirmation' && isLoggedIn && (
        <OrderConfirmationPage 
          setCurrentPage={setCurrentPage}
          order={currentOrder}
        />
      )}
      
      {currentPage === 'orders' && isLoggedIn && (
        <OrdersPage 
          setCurrentPage={setCurrentPage}
          orders={orders}
        />
      )}
      
      {currentPage === 'pantry' && isLoggedIn && (
        <PantryPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={handleLogout}
          pantryItems={pantryItems}
        />
      )}
      
      {currentPage === 'notifications' && isLoggedIn && (
        <NotificationsPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={handleLogout}
          notifications={notifications}
        />
      )}
      
      {currentPage === 'dashboard' && isLoggedIn && (
        <DashboardPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={handleLogout}
          pantryItems={pantryItems}
          notifications={notifications}
          currentUser={currentUser}
          isAdmin={isAdmin()}
        />
      )}
      
      {/* Auth Routes */}
      {currentPage === 'signin' && (
        <SignInPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={handleLogin}
        />
      )}
      
      {currentPage === 'signup' && (
        <SignUpPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={handleLogin}
        />
      )}
    </div>
  );
}

export default App;