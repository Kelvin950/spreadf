// App.tsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DiscoverCreators from '../components/DiscoverCreators';
import ExploreTopics from '../components/ExploreTopics';
import PostCard from '../components/PostCard';
import { creators, topics, categories } from '../data/mockData';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const isNewInterface = searchParams.get('new') === 'true';

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Mock post data
  const mockPost = {
    username: 'YogawithkyaaGH',
    handle: 'yogawithkyaa',
    timeAgo: '2 days ago',
    content: 'Join me lets get some stretches in together...',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80',
    likes: 500,
    comments: 47
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Header 
          onMenuToggle={handleMenuToggle}
          activeCategory={activeCategory}
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          <div className="mx-auto">
            {isNewInterface ? (
              <>
                <DiscoverCreators creators={creators} />
                <ExploreTopics />
              </>
            ) : (
              <div className="flex justify-center">
                <PostCard {...mockPost} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;