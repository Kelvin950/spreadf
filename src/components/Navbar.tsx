import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center bg-[#18181b] py-4 px-2 shadow-none">
      <div className="w-full max-w-[1216px] h-[78px] flex items-center rounded-[555px] bg-[#18181b] mx-auto px-2 md:px-6 relative" style={{ boxShadow: '0 0 0 1.5px #232323' }}>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full text-gray-200 focus:outline-none absolute left-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" d="M4 8h16M4 16h16"/></svg>
          )}
        </button>
        {/* Left: Secondary actions (hidden on mobile) */}
        <div className="hidden md:flex gap-2 md:gap-8 items-center">
          <button className="px-6 h-12 rounded-full text-gray-200 bg-transparent border-none font-medium text-base hover:bg-[#232323] transition-colors">Explore creators</button>
          <button className="px-6 h-12 rounded-full text-gray-200 bg-transparent border-none font-medium text-base hover:bg-[#232323] transition-colors">Start earning</button>
        </div>
        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <span className="text-[32px] md:text-[40px] font-bold text-white tracking-tight" style={{ fontFamily: 'inherit' }}>fanslink</span>
        </div>
        {/* Right: Primary actions (hidden on mobile) */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="px-6 h-12 rounded-full border-2 border-gray-400 text-gray-200 bg-transparent font-medium text-base hover:bg-[#232323] transition-colors">Login</button>
          <button className="flex items-center px-6 h-12 rounded-full bg-white text-[#18181b] font-medium text-base hover:bg-gray-200 transition-colors">
            Get started
            <svg className="ml-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7L9 13L15 7" stroke="#18181b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-[#232323] rounded-b-2xl shadow-lg z-50 flex flex-col items-center py-6 gap-4 md:hidden animate-fade-in">
            <button className="w-11/12 px-6 h-12 rounded-full text-gray-200 bg-transparent border-none font-medium text-base hover:bg-[#292929] transition-colors">Explore creators</button>
            <button className="w-11/12 px-6 h-12 rounded-full text-gray-200 bg-transparent border-none font-medium text-base hover:bg-[#292929] transition-colors">Start earning</button>
            <button className="w-11/12 px-6 h-12 rounded-full border-2 border-gray-400 text-gray-200 bg-transparent font-medium text-base hover:bg-[#292929] transition-colors">Login</button>
            <button className="w-11/12 flex items-center px-6 h-12 rounded-full bg-white text-[#18181b] font-medium text-base hover:bg-gray-200 transition-colors">
              Get started
              <svg className="ml-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7L9 13L15 7" stroke="#18181b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 