// components/TopicCard.tsx
import React from 'react';
import type { TopicCardProps } from '../types';

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => (
  <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors cursor-pointer">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
        <span className="text-lg">{topic.icon}</span>
      </div>
      <span className="text-white text-sm font-medium">{topic.title}</span>
    </div>
  </div>
);

export default TopicCard;