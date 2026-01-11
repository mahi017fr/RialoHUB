
import React, { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  content: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: 'ABOUT RialoHub',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    content: 'Full report: RialoHub decentralization protocols have reached Phase 3. Our neural prediction nodes are now globally distributed, ensuring maximum uptime and data integrity for all football market participants.'
  },
  {
    id: 2,
    title: 'NEURAL UPGRADE',
    description: 'Experience 40% faster transaction speeds with our latest node optimization patch.',
    content: 'The technical team has deployed a high-throughput update to our prediction engine. This upgrade reduces the "Time to Finality" for prediction settlements, allowing users to rotate their liquidity more efficiently across multiple matches.'
  },
  {
    id: 3,
    title: 'MARKET LIQUIDITY',
    description: 'Protocol-owned liquidity has surpassed 10M USDT, ensuring deep markets for high-stakes analysts.',
    content: 'RialoHub treasury has successfully rebalanced its reserves. We now offer the deepest prediction markets in the decentralized sports niche, with minimal slippage even on large-scale forecasting positions.'
  },
  {
    id: 4,
    title: 'GOVERNANCE V.1',
    description: 'New voting proposals for upcoming league expansions are now live on the dashboard.',
    content: 'Community members can now cast their votes on which minor leagues to integrate next into the Rialo ecosystem. Current leaders include the Dutch Eredivisie and the Portuguese Primeira Liga.'
  }
];

const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const closePopup = () => setSelectedNews(null);

  return (
    <section className="py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Centered Heading with Underline */}
        <div className="flex flex-col items-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl text-white font-light tracking-widest uppercase mb-4">NEWS</h2>
          <div className="w-64 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`bg-[#1a1a1a] border border-teal-900/30 rounded-[2rem] p-8 flex flex-col items-start transition-all hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] group animate-in fade-in slide-in-from-bottom-8 fill-mode-both`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationDuration: '800ms'
              }}
            >
              <h3 className="text-slate-400 text-xl font-light mb-6 tracking-tight group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">
                {item.description}
              </p>
              
              <button 
                onClick={() => setSelectedNews(item)}
                className="px-6 py-2 rounded-full border border-teal-500/50 text-white text-xs font-bold hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* News Detail Popup */}
      {selectedNews && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
            onClick={closePopup}
          ></div>
          
          <div className="relative w-full max-w-xl bg-[#0d0d0d] border border-teal-900/50 rounded-[2.5rem] p-12 overflow-hidden shadow-[0_0_100px_rgba(20,184,166,0.1)] animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <button 
              onClick={closePopup}
              className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white hover:text-black text-white rounded-full transition-all border border-white/10"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-6">
              <h2 className="text-3xl text-white font-light tracking-wider">
                {selectedNews.title}
              </h2>
              <div className="w-16 h-1 bg-amber-500"></div>
              <p className="text-slate-400 leading-relaxed italic">
                {selectedNews.description}
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                {selectedNews.content}
              </p>
              <div className="pt-6">
                <button 
                  onClick={closePopup}
                  className="px-8 py-3 bg-teal-600 text-black font-bold rounded-full hover:bg-teal-500 transition-all uppercase tracking-widest text-xs"
                >
                  Close Access
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsSection;
