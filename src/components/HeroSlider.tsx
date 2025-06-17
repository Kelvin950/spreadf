import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const creators = [
  {
    name: 'Charles T.',
    description: 'Travel vlogger & content creator',
    image: 'https://i.pinimg.com/736x/59/80/6c/59806c803ec7a231334acc243436e04a.jpg',
    bg: 'bg-[#e9c87e]/80',
    text: 'text-[#7a5610]',
    desc: 'text-[#876b2d]'
  },
  {
    name: 'Charles T.',
    description: 'Travel vlogger & content creator',
    image: 'https://s.yimg.com/ny/api/res/1.2/rSZ2eCR6_rVOGxXLDFJScQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTE0NDA-/https://media.zenfs.com/en/the_root_754/5d34207c4f45b48179d0e2df49fb9345',
    bg: 'bg-[#e9c87e]/80',
    text: 'text-[#7a5610]',
    desc: 'text-[#876b2d]'
  },
  {
    name: 'Amarae',
    description: 'Musician, songwriter & producer',
    image:'https://ichef.bbci.co.uk/images/ic/480xn/p0j5q1jb.jpg.webp',
    bg: 'bg-[#e19fb9]/70',
    text: 'text-[#480b0c]',
    desc: 'text-[#692224]'
  },
  {
    name: 'Julian K.',
    description: 'Fitness instructor & content creator',
    image: 'https://i.pinimg.com/736x/dc/d8/e0/dcd8e0612a43c027caca95998e0db081.jpg',
    bg: 'bg-[#594d1a]/90',
    text: 'text-[#e9d7c8]',
    desc: 'text-[#d8bda8]'
  },
  {
    name: 'Kelvin A.',
    description: 'Software developer & tech content creator',
    image: 'https://ichef.bbci.co.uk/images/ic/480xn/p0j5q1jb.jpg.webp',
    bg: 'bg-[#aba1a1]/80',
    text: 'text-[#302f2f]',
    desc: 'text-[#4d4a4a]'
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
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

const HeroSlider: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-8 px-2">
      <div className="w-full">
        <Slider {...sliderSettings}>
          {creators.map((creator, idx) => (
            <div key={idx}>
              <div
                className={
                  `max-w-[346px] w-full h-[500px] rounded-[32px] ` +
                  `bg-white/10 backdrop-blur-md shadow-2xl mx-auto ` +
                  `flex flex-col justify-end transition-transform duration-300 hover:scale-106 hover:shadow-2xl border border-none overflow-hidden`
                }
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
              >
                <div className="relative w-full h-full flex-1 flex items-center justify-center">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <h3 className="text-3xl font-bold text-white drop-shadow-md tracking-tight mb-1">{creator.name}</h3>
                    <p className="text-lg text-white/90 font-bold drop-shadow mb-0">{creator.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider; 