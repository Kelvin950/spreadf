import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SubscriptionProfileCard from '../components/SubscriptionProfileCard';

const BlankPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'Popular', 'New', 'Trending'];

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        <Header 
          onMenuToggle={handleMenuToggle}
          activeCategory={activeCategory}
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />

        {/* Main Content Area */}
        <main className="p-4 lg:p-6">
          <SubscriptionProfileCard />
        </main>
      </div>
    </div>
  );
};

export default BlankPage; 