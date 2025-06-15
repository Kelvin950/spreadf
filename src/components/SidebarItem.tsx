// components/SidebarItem.tsx
import React from 'react';
import type { SidebarItemProps } from '../types';

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active = false }) => (
  <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
    active ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
  }`}>
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default SidebarItem;