import React, { useState } from 'react';
import { ChevronRight, X, ArrowLeft, LogOut } from 'lucide-react';

const AboutPage = ({ setCurrentPage, setIsLoggedIn, isLoggedIn }) => {
  const [selectedAboutFeature, setSelectedAboutFeature] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const aboutFeatures = [
    {
      id: 1,
      icon: '🧠',
      title: 'Smart Intelligence',
      description: 'Advanced AI algorithms that learn and adapt',
      overview: 'Our smart intelligence system uses cutting-edge machine learning to understand your preferences, predict your needs, and optimize your experience. It continuously learns from your behavior to provide personalized recommendations and automate routine tasks.'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Real-time processing and instant responses',
      overview: 'Experience blazing-fast performance with our optimized infrastructure. Real-time data processing ensures you get instant updates, immediate responses, and seamless interactions without any lag or delay.'
    },
    {
      id: 3,
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Enterprise-grade security measures',
      overview: 'Your data security is our top priority. We implement bank-level encryption, multi-factor authentication, and comply with international privacy standards to ensure your information remains completely secure and confidential.'
    },
    {
      id: 4,
      icon: '🌍',
      title: 'Global Access',
      description: 'Access anywhere, anytime with cloud sync',
      overview: 'Stay connected from anywhere in the world. Our cloud-based platform ensures your data is synchronized across all devices, allowing you to access your information seamlessly.'
    },
    {
      id: 5,
      icon: '🎯',
      title: 'Precision Accuracy',
      description: 'Machine learning models for maximum accuracy',
      overview: 'Achieve unparalleled accuracy with our advanced machine learning models. Our system is trained on millions of data points to provide precise predictions and reliable insights.'
    },
    {
      id: 6,
      icon: '🚀',
      title: 'Future Ready',
      description: 'Constantly evolving with latest AI breakthroughs',
      overview: 'Stay ahead of the curve with continuous updates and improvements. Our platform evolves with the latest AI breakthroughs, ensuring you always have access to the most advanced features.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-[95%] mx-auto px-8 py-12">
        {/* Header with Title, Back Button and Logout */}
        <div className="flex items-center justify-between mb-12">
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

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold mb-6 text-orange-600">About Pulse360AI</h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Pulse360AI is a revolutionary platform that combines artificial intelligence with everyday convenience. 
            Our mission is to create seamless, intelligent experiences that adapt to your needs and enhance your lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {aboutFeatures.map((feature) => (
            <div 
              key={feature.id}
              onClick={() => setSelectedAboutFeature(feature)}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-orange-600">{feature.title}</h3>
              <p className="text-lg text-gray-600 mb-5 leading-relaxed">{feature.description}</p>
              <div className="flex items-center text-orange-500 font-semibold">
                <span className="text-base">Click to learn more</span>
                <ChevronRight className="ml-2" size={20} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 mb-12 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 text-orange-600 text-center">Our Vision</h2>
          <p className="text-2xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            We envision a future where artificial intelligence seamlessly integrates into daily life, 
            making technology accessible and beneficial for everyone.
          </p>
        </div>
      </div>

      {selectedAboutFeature && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-8 z-50">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-12 max-w-4xl w-full relative shadow-2xl">
            <button 
              onClick={() => setSelectedAboutFeature(null)}
              className="absolute top-6 right-6 text-white hover:text-yellow-200 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="text-7xl mb-8 text-center">{selectedAboutFeature.icon}</div>
            <h2 className="text-4xl font-bold mb-6 text-center text-white">{selectedAboutFeature.title}</h2>
            <p className="text-2xl mb-8 text-center text-orange-100">{selectedAboutFeature.description}</p>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-5 text-white">Overview</h3>
              <p className="text-xl text-white leading-relaxed">{selectedAboutFeature.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;