import React from 'react';
import { Heart, MessageCircle, Gift, MoreHorizontal } from 'lucide-react';
import sereneWomanBraidedHair from "../assets/Serene Woman Braided Hair.png"

interface PostCardProps {
  username: string;
  handle: string;
  timeAgo: string;
  content: string;
  imageUrl: string;
  likes: number;
  comments: number;
}

const PostCard: React.FC<PostCardProps> = ({
 
}) => {
  // Convert time format (e.g., "2 days ago" to "2d")
  const formatTime = (time: string) => {
    return time.replace(' days ago', 'd').replace(' day ago', 'd');
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg">
    {/* Header */}
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
          <span className="text-gray-900 font-semibold text-sm">YG</span>
        </div>
        <div>
          <h3 className="font-semibold text-white">YogawithkyaaGH</h3>
          <p className="text-gray-400 text-sm">@yogawithkyaa</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-gray-400">
        <span className="text-sm">2d</span>
        <MoreHorizontal size={20} />
      </div>
    </div>

    {/* Post Content */}
    <div className="px-4 pb-4">
      <p className="text-white mb-4">Join me lets get some stretches in together...</p>
    </div>

    {/* Image */}
    <div className="relative">
      <img 
        src= {sereneWomanBraidedHair} 
        alt="Yoga pose" 
        className="w-full h-80 object-cover"
      />
    </div>

    {/* Footer Actions */}
    <div className="flex items-center justify-between p-4 bg-gray-800">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Heart size={20} className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
          <span className="text-gray-400 text-sm">500</span>
        </div>
        <div className="flex items-center space-x-2">
          <MessageCircle size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
          <span className="text-gray-400 text-sm">47</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-gray-400 hover:text-purple-500 cursor-pointer transition-colors">
        <Gift size={20} />
        <span className="text-sm">Send gift</span>
      </div>
    </div>
  </div>
  );
};

export default PostCard; 