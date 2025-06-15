// components/DiscoverCreators.tsx
import React from 'react';
import CreatorCard from './CreatorCard';
import type { Creator } from '../types';

interface DiscoverCreatorsProps {
  creators: Creator[];
}

const DiscoverCreators: React.FC<DiscoverCreatorsProps> = ({ creators }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-6">Discover creators</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </section>
  );
};

export default DiscoverCreators;