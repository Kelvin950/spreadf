// components/Header.tsx
import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import CategoryTab from './CategoryTab';
import type { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ 
  onMenuToggle, 
  activeCategory, 
  categories, 
  onCategoryChange 
}) => {
  return (
    <header className=" p-4 lg:p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 text-gray-400 hover:text-white"
        >
          ☰
        </button>
        <div className="flex-1 max-w-md mx-4 lg:mx-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for a creator"
              className="w-full bg-gray-800 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category, index) => (
          <CategoryTab
            key={`${category}-${index}`}
            label={category}
            active={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          />
        ))}
        <button className="p-2 text-gray-400 hover:text-white ml-2">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;