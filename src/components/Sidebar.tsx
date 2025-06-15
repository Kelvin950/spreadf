// components/Sidebar.tsx
import React from 'react';
import { Home, Compass, BookOpen, MessageSquare, Settings } from 'lucide-react';
import SidebarItem from './SidebarItem';
import type { SidebarProps } from '../types'; 

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
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
      <div className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-[#18181b] transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="p-6">
          <h1 className="text-xl font-bold text-white mb-8">fanslink</h1>
          <nav className="space-y-2">
            <SidebarItem icon={<Home className="w-5 h-5" />} label="Home" active />
            <SidebarItem icon={<Compass className="w-5 h-5" />} label="Explore" />
            <SidebarItem icon={<BookOpen className="w-5 h-5" />} label="My subscriptions" />
            <SidebarItem icon={<MessageSquare className="w-5 h-5" />} label="Messages" />
            <SidebarItem icon={<Settings className="w-5 h-5" />} label="Settings" />
          </nav>
        </div>
        
        {/* User Profile */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
            <div>
              <p className="text-white text-sm font-medium">Kelvin Bolden</p>
              <p className="text-gray-400 text-xs">Subscriber</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;