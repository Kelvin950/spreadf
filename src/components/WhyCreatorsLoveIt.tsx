import React from 'react';
import group74 from '../assets/Group 74.svg';

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
          <img 
            src={group74} 
            alt="Creator Revenue Stats" 
            className="w-full max-w-[450px] h-auto mx-auto sm:mx-0 sm:ml-12" 
          />
        </div>
      </div>
    </section>
  );
};

export default WhyCreatorsLoveIt; 