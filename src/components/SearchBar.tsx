import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search for a creator"
        className="w-full max-w-md h-11 px-6 bg-[#2a2a2a] border border-[#4a4b48] rounded-full text-base text-[#93a1b3] placeholder-[#93a1b3] focus:outline-none focus:ring-2 focus:ring-[#393939] transition-all shadow-sm"
      />
    </div>
  );
};

export default SearchBar; 