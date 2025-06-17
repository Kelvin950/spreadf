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
    <header className="sticky top-0 z-10 bg-black border-b border-gray-800">
      <div className="p-4 lg:p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            ☰
          </button>
          <div className="flex-1 max-w-md mx-auto lg:mx-0 lg:ml-4">
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
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-3 min-w-0">
            {categories.map((category, index) => (
              <CategoryTab
                key={`${category}-${index}`}
                label={category}
                active={activeCategory === category}
                onClick={() => onCategoryChange(category)}
              />
            ))}
          </div>
          <button className="p-2 text-gray-400 hover:text-white transition-colors flex-shrink-0">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;