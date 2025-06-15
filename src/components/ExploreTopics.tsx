import React from 'react';
import TopicCard from './TopicCard';
import type { Topic } from '../types';

interface ExploreTopicsProps {
  topics: Topic[];
}

const ExploreTopics: React.FC<ExploreTopicsProps> = ({ topics }) => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-6">Explore topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </section>
  );
};

export default ExploreTopics;