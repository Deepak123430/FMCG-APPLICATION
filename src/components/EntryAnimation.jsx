import React, { useEffect } from 'react';

const EntryAnimation = ({ onAnimationComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 7000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 flex items-center justify-center overflow-hidden z-50">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-52 h-52 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full animate-ping"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl px-8">
        {/* Logo/Icon Animation */}
        <div className="mb-10 animate-bounce-in">
          <div className="text-7xl mb-5 animate-rotate-scale">
            🛒
          </div>
        </div>

        {/* Title Animation */}
        <h1 className="text-6xl font-black text-white mb-5 animate-slide-up">
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Pulse</span>
          <span className="inline-block animate-fade-in-up text-cyan-300" style={{ animationDelay: '0.6s' }}>360</span>
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.9s' }}>AI</span>
        </h1>

        {/* Subtitle Animation */}
        <p className="text-2xl text-white/90 font-medium animate-fade-in mb-10" style={{ animationDelay: '1.2s' }}>
          Your Smart Grocery Partner
        </p>

        {/* Overview Text */}
        <div className="animate-fade-in-up mt-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl" style={{ animationDelay: '1.8s' }}>
          <p className="text-xl text-white/95 leading-relaxed">
            Experience the future of grocery shopping with AI-powered inventory management, 
            smart notifications, and personalized pantry tracking. 
            Never run out of essentials again!
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '2.2s' }}>
          <div className="flex justify-center gap-3">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="text-lg text-white/80 mt-5 animate-pulse">Loading your experience...</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotate-scale {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(10deg) scale(1.1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-bounce-in {
          animation: bounce-in 1.2s ease-out;
        }

        .animate-rotate-scale {
          animation: rotate-scale 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: fade-in-up 1.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default EntryAnimation;