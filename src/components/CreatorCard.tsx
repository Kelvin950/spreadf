// components/CreatorCard.tsx
import React from 'react';
import type { CreatorCardProps } from '../types';

const CreatorCard: React.FC<CreatorCardProps> = ({ creator }) => (
  <div className=" rounded-xl overflow-hidden hover:bg-gray-750 transition-colors cursor-pointer">
    <div className="aspect-square bg-gradient-to-br from-orange-400 to-pink-500 relative">
      <img 
        src={creator.image} 
        alt={creator.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-white font-semibold text-sm mb-1">{creator.name}</h3>
      <p className="text-gray-400 text-xs">{creator.description}</p>
    </div>
  </div>
);

export default CreatorCard;