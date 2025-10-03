import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const SignUpPage = ({ setCurrentPage, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setIsLoggedIn(true);
      setCurrentPage('home');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center py-12">
      <div className="max-w-4xl w-full mx-auto px-8">
        {/* Header with Title and Back Button */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-7xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
              Pulse360AI
            </span>
          </h1>
          <button
            onClick={() => setCurrentPage('signin')}
            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <ArrowLeft size={28} className="text-orange-600" />
            <span className="text-xl font-semibold text-orange-600">Back to Sign In</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl p-16 shadow-2xl">
          <h2 className="text-6xl font-bold text-center mb-16 text-orange-600">Create Account</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-8 py-6 rounded-3xl bg-orange-50 text-gray-800 placeholder-gray-500 text-2xl focus:outline-none focus:ring-4 focus:ring-orange-300"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-8 py-6 rounded-3xl bg-orange-50 text-gray-800 placeholder-gray-500 text-2xl focus:outline-none focus:ring-4 focus:ring-orange-300"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-8 py-6 rounded-3xl bg-orange-50 text-gray-800 placeholder-gray-500 text-2xl focus:outline-none focus:ring-4 focus:ring-orange-300"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-8 py-6 rounded-3xl bg-orange-50 text-gray-800 placeholder-gray-500 text-2xl focus:outline-none focus:ring-4 focus:ring-orange-300"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-6 rounded-3xl font-bold text-3xl hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105 shadow-xl"
            >
              Create Account
            </button>
          </form>
          <p className="text-center mt-10 text-2xl text-gray-700">
            Already have an account?{' '}
            <button 
              onClick={() => setCurrentPage('signin')} 
              className="text-orange-600 hover:underline font-semibold"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;