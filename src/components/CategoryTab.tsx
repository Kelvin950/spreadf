// components/CategoryTab.tsx
import React from 'react';
import type { CategoryTabProps } from '../types';

const CategoryTab: React.FC<CategoryTabProps> = ({ label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
      active 
        ? 'bg-white text-black' 
        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
    }`}
  >
    {label}
  </button>
);

export default CategoryTab;