// components/Sidebar.tsx
import React from 'react';
import { Home, Compass, BookOpen, MessageSquare, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import type { SidebarProps } from '../types'; 

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 z-30 w-64 bg-[#18181b] transform transition-transform duration-300 ease-in-out h-screen ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:min-h-screen`}>
        <div className="flex flex-col h-full">
          <div className="p-6">
            <h1 className="text-xl font-bold text-white">fanslink</h1>
          </div>
          
          <nav className="flex-1 px-4 space-y-2">
            <Link to="/home">
              <SidebarItem icon={<Home className="w-5 h-5" />} label="Home" active={isActive('/home')} />
            </Link>
            <Link to="/explore">
              <SidebarItem icon={<Compass className="w-5 h-5" />} label="Explore" active={isActive('/explore')} />
            </Link>
            <Link to="/subscriptions">
              <SidebarItem icon={<BookOpen className="w-5 h-5" />} label="My subscriptions" active={isActive('/subscriptions')} />
            </Link>
            <Link to="/messages">
              <SidebarItem icon={<MessageSquare className="w-5 h-5" />} label="Messages" active={isActive('/messages')} />
            </Link>
            <Link to="/settings">
              <SidebarItem icon={<Settings className="w-5 h-5" />} label="Settings" active={isActive('/settings')} />
            </Link>
          </nav>
          
          {/* User Profile */}
          <div className="p-6 border-t border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
              <div>
                <p className="text-white text-sm font-medium">Kelvin Bolden</p>
                <p className="text-gray-400 text-xs">Subscriber</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;