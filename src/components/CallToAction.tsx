import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 sm:py-14 md:py-16 px-2 sm:px-4 bg-[#18181b]">
      <div
        className="w-full max-w-xs sm:max-w-2xl md:max-w-5xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 flex flex-col items-center gap-8 sm:gap-12 bg-[#232323]"
        style={{}}
      >
        <div className="flex flex-col gap-2 sm:gap-4 items-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Start building with your fans today
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 text-center max-w-xs sm:max-w-2xl">
            Your content has value. Let your community show their support
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2 sm:mt-4 w-full sm:w-auto">
          <button
            className="w-full sm:w-auto bg-white text-[#18181b] font-semibold px-6 sm:px-10 py-3 rounded-full text-base sm:text-lg shadow hover:bg-gray-200 transition-colors border-2 border-white"
            style={{ borderRadius: 555 }}
          >
            Become a creator
          </button>
          <button
            className="w-full sm:w-auto bg-[#232323] text-white font-semibold px-6 sm:px-10 py-3 rounded-full text-base sm:text-lg shadow border-2 border-[#232323] hover:bg-[#292929] transition-colors"
            style={{ borderRadius: 555 }}
          >
            Join as a fan
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 