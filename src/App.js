import React, { useState } from 'react';

import HomePage from './components/Homepage';
import AboutPage from './components/Aboutpage';
import GroceriesPage from './components/Groceriespage';
import PantryPage from './components/Pantarypage';
import NotificationsPage from './components/Notificationspage';
import DashboardPage from './components/Dashboardpage';
import SignInPage from './components/SignInpage';
import SignUpPage from './components/SignUpPage';
import EntryAnimation from './components/EntryAnimation';

function App() {
  const [currentPage, setCurrentPage] = useState('entry');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  
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

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  const handleAnimationComplete = () => {
    setCurrentPage('home');
  };

  // Protected route handler - redirect to signup if not logged in
  const handleProtectedRoute = (page) => {
    if (!isLoggedIn && ['groceries', 'pantry', 'notifications', 'dashboard'].includes(page)) {
      alert('Please sign in to access this feature!');
      setCurrentPage('signin');
      return;
    }
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {/* Entry Animation - NO LOGOUT BUTTON */}
      {currentPage === 'entry' && (
        <EntryAnimation onAnimationComplete={handleAnimationComplete} />
      )}
      
      {currentPage === 'home' && (
        <HomePage 
          setCurrentPage={handleProtectedRoute}
          isLoggedIn={isLoggedIn}
        />
      )}
      
      {/* About Page - WITH LOGOUT BUTTON */}
      {currentPage === 'about' && (
        <AboutPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
        />
      )}
      
      {/* Protected Routes - Only accessible when logged in - ALL WITH LOGOUT BUTTONS */}
      {currentPage === 'groceries' && isLoggedIn && (
        <GroceriesPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={setIsLoggedIn}
          addToCart={addToCart}
        />
      )}
      
      {currentPage === 'pantry' && isLoggedIn && (
        <PantryPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={setIsLoggedIn}
          pantryItems={pantryItems}
        />
      )}
      
      {currentPage === 'notifications' && isLoggedIn && (
        <NotificationsPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={setIsLoggedIn}
          notifications={notifications}
        />
      )}
      
      {currentPage === 'dashboard' && isLoggedIn && (
        <DashboardPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={setIsLoggedIn}
          pantryItems={pantryItems}
          notifications={notifications}
        />
      )}
      
      {/* Auth Routes - NO LOGOUT BUTTONS (user not logged in yet) */}
      {currentPage === 'signin' && (
        <SignInPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      
      {currentPage === 'signup' && (
        <SignUpPage 
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
}

export default App;