import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const SignInPage = ({ setCurrentPage, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (resetEmail) {
      alert(`Password reset link has been sent to ${resetEmail}. Please check your email.`);
      setShowForgotPassword(false);
      setResetEmail('');
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center py-12">
      <div className="max-w-3xl w-full mx-auto px-8">
        {/* Header with Title and Back Button */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-6xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
              Pulse360AI
            </span>
          </h1>
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <ArrowLeft size={22} className="text-orange-600" />
            <span className="text-lg font-semibold text-orange-600">Back to Home</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          {!showForgotPassword ? (
            <>
              <h2 className="text-5xl font-bold text-center mb-10 text-orange-600">Sign In</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xl font-semibold text-gray-700 mb-3">Email / Username</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 rounded-2xl bg-orange-50 text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-3 focus:ring-orange-300"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xl font-semibold text-gray-700 mb-3">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-6 py-4 rounded-2xl bg-orange-50 text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-3 focus:ring-orange-300"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold text-2xl hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105 shadow-xl"
                >
                  Sign In
                </button>
              </form>

              <div className="flex items-center justify-between mt-8 px-2">
                <button 
                  onClick={() => setShowForgotPassword(true)}
                  className="text-orange-600 hover:text-orange-700 text-lg font-semibold hover:underline transition-colors"
                >
                  Forgot Password?
                </button>
                
                <div className="flex items-center gap-2">
                  <span className="text-lg text-gray-600">Don't have an account?</span>
                  <button 
                    onClick={() => setCurrentPage('signup')} 
                    className="text-orange-600 hover:text-orange-700 text-lg font-bold hover:underline transition-colors"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-5xl font-bold text-center mb-6 text-orange-600">Reset Password</h2>
              <p className="text-center text-xl text-gray-600 mb-8">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              
              <form onSubmit={handleForgotPassword} className="space-y-6">
                <div>
                  <label className="block text-xl font-semibold text-gray-700 mb-3">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 rounded-2xl bg-orange-50 text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-3 focus:ring-orange-300"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold text-2xl hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105 shadow-xl"
                >
                  Send Reset Link
                </button>
              </form>

              <div className="text-center mt-6">
                <button 
                  onClick={() => setShowForgotPassword(false)}
                  className="text-orange-600 hover:text-orange-700 text-lg font-semibold hover:underline transition-colors"
                >
                  Back to Sign In
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInPage;