import React from 'react';

const footerLinks = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'How it works', 'FAQ', 'Blog', 'Contact', 'Support', 'Careers']
  },
  {
    heading: 'Company',
    links: ['About', 'Team', 'Press', 'Partners', 'Affiliates', 'Media kit', 'Newsletter']
  },
  {
    heading: 'Resources',
    links: ['Docs', 'API', 'Community', 'Guides']
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#18181b] pt-10 sm:pt-20 pb-6 sm:pb-8 px-2 sm:px-4">
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto flex flex-col gap-8 sm:gap-16">
        {/* Top Content */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-8 justify-between">
          {/* Link Blocks */}
          <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:gap-8">
            {footerLinks.map((block, idx) => (
              <div key={idx} className="min-w-[140px] sm:min-w-[180px] flex-1">
                <h4 className="text-white text-base sm:text-lg font-semibold mb-2 sm:mb-4">{block.heading}</h4>
                <ul className="flex flex-col gap-2 sm:gap-3">
                  {block.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-300 hover:text-[#b7e97b] text-sm sm:text-base transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Logo/Company Block */}
          <div className="flex flex-col items-start gap-2 sm:gap-4 min-w-[140px] sm:min-w-[180px] mt-6 md:mt-0">
            <div className="flex items-center gap-2">
              {/* Placeholder for logo */}
              <span className="text-xl sm:text-2xl font-bold text-white">Fanslink</span>
            </div>
            <span className="text-gray-300 text-sm sm:text-base">Build your community, own your future.</span>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-px bg-[#232323] opacity-60" />
        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm">
            <a href="#" className="hover:text-[#b7e97b] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#b7e97b] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#b7e97b] transition-colors">Security</a>
            <a href="#" className="hover:text-[#b7e97b] transition-colors">Sitemap</a>
          </div>
          <span className="text-gray-400 text-xs sm:text-sm">© 2024 Fanslink. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 