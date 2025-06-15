import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const features = [
  {
    color: 'bg-[#fe674a]',
    text: 'Photo shoot',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80',
  },
  {
    color: 'bg-[#b1f694]',
    text: 'Photo shoot',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80',
  },
  {
    color: 'bg-[#9b98d4]',
    text: 'Photo shoot',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80',
  },
  {
    color: 'bg-[#ffb6d7]',
    text: 'Photo shoot',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
  },
  {
    color: 'bg-[#d3d1fd]',
    text: 'Photo shoot',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80',
  },
  {
    color: 'bg-[#fbeedb]',
    text: 'Photo shoot',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80',
  },
];

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]
};

const FeatureBar: React.FC = () => {
  return (
    <>
    <section className="w-full flex flex-col items-center py-10 sm:py-14 md:py-16 px-2 sm:px-4 bg-[#18181b]">
      {/* Top text */}
      <div className="w-full max-w-2xl sm:max-w-4xl mx-auto flex flex-col items-center gap-2 sm:gap-4 mb-6 sm:mb-12">
        <span className="uppercase tracking-widest text-[#b7e97b] text-xs sm:text-sm font-semibold">Overline</span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white text-center">Why Creators Love It</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center">Built to help you grow — at your own pace.</p>
      </div>
      {/* Feature cards slider */}
      <div className="w-full max-w-xs sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1440px] mb-6 sm:mb-10">
        <Slider {...sliderSettings}>
          {features.map((feature, idx) => (
            <div key={idx} className="px-1 sm:px-2">
              <div
                className={`flex items-center gap-2 sm:gap-4 rounded-[12px] sm:rounded-[16px] shadow-md px-4 sm:px-6 py-3 sm:py-4 min-w-[180px] sm:min-w-[220px] max-w-xs bg-[#232323]`}
              >
                <img
                  src={feature.img}
                  alt={feature.text}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#18181b] shadow"
                />
                <span className="text-base sm:text-lg font-semibold text-white">{feature.text}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full max-w-xs sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1440px]">
        <Slider {...sliderSettings}>
          {features.map((feature, idx) => (
            <div key={idx} className="px-1 sm:px-2">
              <div
                className={`flex items-center gap-2 sm:gap-4 rounded-[12px] sm:rounded-[16px] shadow-md px-4 sm:px-6 py-3 sm:py-4 min-w-[180px] sm:min-w-[220px] max-w-xs bg-[#232323]`}
              >
                <img
                  src={feature.img}
                  alt={feature.text}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#18181b] shadow"
                />
                <span className="text-base sm:text-lg font-semibold text-white">{feature.text}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    
    </>
  );
};

export default FeatureBar; 