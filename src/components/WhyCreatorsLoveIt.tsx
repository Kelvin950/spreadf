import React from 'react';

const features = [
  'No complicated setup',
  'Local payments (Mobile Money, cards)',
  'GHS pricing — no conversion stress',
  'You own your content and community',
  'Simple tools, no middlemen, no distractions',
];

const WhyCreatorsLoveIt: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 sm:py-14 md:py-16 px-2 sm:px-4 bg-[#18181b]">
      <div
        className="w-full max-w-[1344px] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-16 flex flex-col md:flex-row gap-10 sm:gap-12 items-center bg-[#232323]"
        style={{}}
      >
        {/* Left: Title, subtitle, features */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-8 max-w-xl">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">Why Creators Love It</h2>
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 font-medium">Built to help you grow — at your own pace.</p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-6 mt-2 sm:mt-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-4">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="#333" />
                  <path d="M11 19l5 5 9-9" stroke="#b7e97b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-base sm:text-lg md:text-xl text-white font-semibold">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image and revenue card */}
        <div className="flex flex-col gap-6 sm:gap-8 items-center">
          {/* Image card */}
          <div className="w-[200px] sm:w-[317px] h-[260px] sm:h-[414px] rounded-[12px] sm:rounded-[16px] border-4 border-[#232323] shadow-lg overflow-hidden bg-[#18181b] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              alt="Creator"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Revenue card */}
          <div className="flex items-center bg-[#18181b] rounded-[12px] sm:rounded-[16px] shadow-md px-4 sm:px-6 py-3 sm:py-4 gap-2 sm:gap-4 w-[220px] sm:w-[333px] border border-[#232323]">
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-[8px] sm:rounded-[10px] bg-[#232323] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12S4 22.627 4 16z" fill="#5a8c4e" />
                <path d="M10 18c1.333 2 4.667 2 6 0" stroke="#b7e97b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg text-gray-300 font-medium">Total revenue</span>
              <span className="text-lg sm:text-2xl md:text-3xl font-bold text-white">+ ₵84,990.00</span>
              <span className="text-xs sm:text-sm text-gray-400">Payout should appear in 24 hrs.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCreatorsLoveIt; 