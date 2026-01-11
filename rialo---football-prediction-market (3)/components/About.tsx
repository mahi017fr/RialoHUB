
import React from 'react';
import { IMAGE_ASSETS } from '../services/imageAssets';

const About: React.FC = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12 overflow-hidden border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Logo Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
            {/* Ambient background glow to make the logo pop on black */}
            <div className="absolute w-[60%] h-[60%] bg-white/5 blur-[100px] rounded-full"></div>
            
            <img 
              src={IMAGE_ASSETS.LOGO_FULL} 
              alt="RialoHub Logo" 
              className="relative w-full h-auto max-h-[450px] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-1000 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Side: Content and Stats */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight uppercase">
            ABOUT RialoHub
          </h2>
          
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-12 max-w-xl font-light">
            RialoHub is the premier decentralized forecasting protocol designed specifically for the global football ecosystem. We bridge the gap between technical data analysis and web3 liquidity, providing a transparent playground for sports analysts.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="group">
              <div className="text-6xl md:text-7xl font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors">10+</div>
              <div className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase">DAILY MARKETS</div>
            </div>
            <div className="group">
              <div className="text-6xl md:text-7xl font-medium text-white mb-2 group-hover:text-amber-500 transition-colors">10k+</div>
              <div className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase">REWARD POOL</div>
            </div>
          </div>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-12 max-w-xl italic border-l-2 border-slate-800 pl-6">
            "Utilizing high-performance neural networks and immutable smart contracts, our users benefit from transparent odds and instant settlement in USDT units."
          </p>

          <button 
            className="px-12 py-4 rounded-full border border-slate-700 bg-transparent text-white font-bold hover:bg-white hover:text-black hover:border-white transition-all duration-500 tracking-[0.2em] uppercase text-xs"
          >
            LEARN MORE >>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
