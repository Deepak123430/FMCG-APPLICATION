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
      <div className="max-w-3xl w-full mx-auto px-8">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-6xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
              Pulse360AI
            </span>
          </h1>
          <button
            onClick={() => setCurrentPage('signin')}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <ArrowLeft size={22} className="text-orange-600" />
            <span className="text-lg font-semibold text-orange-600">Back to Sign In</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <h2 className="text-5xl font-bold text-center mb-10 text-orange-600">Create Account</h2>
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-6 py-4 rounded-2xl bg-orange-50 text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-3 focus:ring-orange-300"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-6 py-4 rounded-2xl bg-orange-50 text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-3 focus:ring-orange-300"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-6 py-4 rounded-2xl bg-orange-50 text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-3 focus:ring-orange-300"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-6 py-4 rounded-2xl bg-orange-50 text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-3 focus:ring-orange-300"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold text-2xl hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105 shadow-xl"
            >
              Create Account
            </button>
          </div>
          <p className="text-center mt-8 text-xl text-gray-700">
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