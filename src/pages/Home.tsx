// App.tsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DiscoverCreators from '../components/DiscoverCreators';
import ExploreTopics from '../components/ExploreTopics';
import { creators, topics, categories } from '../data/mockData';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <DiscoverCreators creators={creators} />
          <ExploreTopics topics={topics} />
        </main>
      </div>
    </div>
  );
};

export default Home;