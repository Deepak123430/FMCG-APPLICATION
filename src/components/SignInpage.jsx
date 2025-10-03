import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const SignInPage = ({ setCurrentPage, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-8">
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

        <div className="bg-white rounded-3xl p-16 shadow-2xl">
          <h2 className="text-6xl font-bold text-center mb-16 text-orange-600">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-2xl font-semibold text-gray-700 mb-3">Email / Username</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-8 py-6 rounded-3xl bg-orange-50 text-gray-800 placeholder-gray-500 text-2xl focus:outline-none focus:ring-4 focus:ring-orange-300"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-2xl font-semibold text-gray-700 mb-3">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-8 py-6 rounded-3xl bg-orange-50 text-gray-800 placeholder-gray-500 text-2xl focus:outline-none focus:ring-4 focus:ring-orange-300"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-6 rounded-3xl font-bold text-3xl hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105 shadow-xl"
            >
              Sign In
            </button>
          </form>

          {/* Forgot Password and Create Account side by side */}
          <div className="flex items-center justify-between mt-10 px-4">
            <button 
              onClick={() => alert('Password reset functionality coming soon!')}
              className="text-orange-600 hover:text-orange-700 text-xl font-semibold hover:underline transition-colors"
            >
              Forgot Password?
            </button>
            
            <div className="flex items-center gap-3">
              <span className="text-xl text-gray-600">Don't have an account?</span>
              <button 
                onClick={() => setCurrentPage('signup')} 
                className="text-orange-600 hover:text-orange-700 text-xl font-bold hover:underline transition-colors"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;