import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 sm:py-14 md:py-16 px-2 sm:px-4 bg-[#18181b]">
      {/* Headline pill */}
      <div className="rounded-full bg-[#232323] px-6 sm:px-8 py-2 sm:py-3 mb-4 sm:mb-6 flex items-center justify-center">
        <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">🧱 Build, 🤳🏾 Post & 🤑 Earn.</span>
      </div>
      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center leading-tight mb-4 sm:mb-6">
        From fans who truly support you
      </h1>
      {/* Subtitle */}
      <p className="max-w-md sm:max-w-xl md:max-w-2xl text-base sm:text-lg md:text-2xl text-gray-300 text-center mb-8 sm:mb-10">
        Build a space for your biggest supporters, connect deeper, share exclusive content, and earn along the way.
      </p>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8  justify-center  items-center w-full max-w-xs sm:max-w-none">
        <button className="flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 h-11 sm:h-12 rounded-full bg-white text-[#18181b] font-medium text-base sm:text-lg hover:bg-gray-200 transition-colors">
          Become a creator
          <svg className="ml-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 9h10M11 6l3 3-3 3" stroke="#18181b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="w-full sm:w-auto px-6 sm:px-8 h-11 sm:h-12 rounded-full border-2 border-gray-400 text-gray-200 bg-transparent font-medium text-base sm:text-lg hover:bg-[#232323] transition-colors">
          Join as a fan
        </button>
      </div>
    </section>
  );
};

export default Hero; 