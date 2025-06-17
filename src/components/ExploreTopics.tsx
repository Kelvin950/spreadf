import React from 'react';
import { MicrophoneStage, Headphones, CoatHanger, GameController, Code } from "@phosphor-icons/react";

const topics = [
  {
    title: "Podcasts & shows",
    icon: <MicrophoneStage size={50} weight="fill" color="#e55225" />,
    gradient: "from-[#f86134]/90 to-[#f97148]"
  },
  {
    title: "Music",
    icon: <Headphones size={50} weight="fill" color="#cf237f" />,
    gradient: "from-[#d9377f]/90 to-[#df5e97]"
  },
  {
    title: "Fashion",
    icon: <CoatHanger size={50} weight="fill" color="#43456a" />,
    gradient: "from-[#47456a]/90 to-[#6563be]"
  },
  {
    title: "Gaming",
    icon: <GameController size={50} weight="fill" color="#0d80b9" />,
    gradient: "from-[#0b80b9]/90 to-[#61c2c9]"
  },
  {
    title: "Coding",
    icon: <Code size={50} weight="fill" color="#3f440c" />,
    gradient: "from-[#44490c]/90 to-[#737b1e]"
  } ,
  {
    title: "Coding",
    icon: <Code size={50} weight="fill" color="#3f440c" />,
    gradient: "from-[#44490c]/90 to-[#737b1e]"
  }
];

const ExploreTopics: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className=" mx-auto">
      <h2 className="text-xl font-semibold text-white text-left mb-6">Explore Topics</h2>
        
        <div className="flex flex-wrap gap-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`w-[214px] h-[56px] rounded-lg flex items-center justify-between px-4 bg-gradient-to-br ${topic.gradient} shadow-[0_1px_2px_rgba(17,24,39,0.12),0_0_1px_rgba(17,24,39,0.08)]`}
            >
              <span className="text-white font-medium text-base">{topic.title}</span>
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                {topic.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreTopics;