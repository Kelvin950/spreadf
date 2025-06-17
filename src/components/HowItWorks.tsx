import React from 'react';
import {ChatsCircleIcon ,TipJarIcon , CardsThreeIcon,UserFocusIcon} from "@phosphor-icons/react"

const steps = [
  {
    icon: (
     <UserFocusIcon size={54} weight="fill" color="#034d28" />
    ),
    title: 'Create your page',
    desc: 'Customize it for your content, your audience.'
  },
  {
    icon: (
     <CardsThreeIcon size={54} weight="fill" color="#034d28" />
    ),
    title: 'Share exclusive posts',
    desc: 'From videos to voice notes to behind-the-scenes.'
  },
  {
    icon: (
     <ChatsCircleIcon size={54} weight="fill" color="#034d28" />
    ),
    title: 'Connect with fans',
    desc: 'Real fans, real messages, real feedback.'
  },
  {
    icon: (
      <TipJarIcon size={54} weight="fill" color="#034d28" />
    ),
    title: 'Receive support',
    desc: 'Subscriptions and tips via Mobile Money or card.'
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 sm:py-14 md:py-16 px-2 sm:px-4 bg-[#18181b]">
      <div
        className="w-full max-w-[1344px] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-16 flex flex-col gap-10 sm:gap-16 bg-[#232323]"
        style={{}}
      >
        {/* Section Title */}
        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white text-center">How It Works</h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 text-center font-medium">A simple way to share more — and get something back</p>
        </div>
        {/* Steps */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-6 justify-center items-center">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#18181b] rounded-[18px] sm:rounded-[26px] flex flex-col items-center p-6 sm:p-8 w-full max-w-xs min-h-[220px] sm:min-h-[285px] shadow-sm gap-6 sm:gap-8 border border-[#232323]"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="flex justify-start w-full mb-2 sm:mb-4">{step.icon}</div>
                <h3 className="text-lg sm:text-2xl font-semibold  text-white text-left">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 text-left mt-1 sm:mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 