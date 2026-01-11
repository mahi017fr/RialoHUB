
import React, { useState } from 'react';

interface NavbarProps {
  walletAddress: string | null;
  onConnect: () => void;
  balance: number;
  activeTab: 'MATCHES' | 'PROFILE' | 'NEWS' | 'TRADE';
  onTabChange: (tab: 'MATCHES' | 'PROFILE' | 'NEWS' | 'TRADE') => void;
}

const Navbar: React.FC<NavbarProps> = ({ walletAddress, onConnect, balance, activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tab: 'MATCHES' | 'PROFILE' | 'NEWS' | 'TRADE') => {
    onTabChange(tab);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#121212] border-b border-slate-800/30 px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 
            className="text-2xl md:text-3xl font-medium text-white tracking-tight cursor-pointer"
            onClick={() => handleTabClick('MATCHES')}
          >
            RialoHub
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 ml-4">
            <button 
              onClick={() => handleTabClick('MATCHES')}
              className={`text-xs font-bold tracking-widest transition-all ${activeTab === 'MATCHES' ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}
            >
              MARKETS
            </button>
            <button 
              onClick={() => handleTabClick('TRADE')}
              className={`text-xs font-bold tracking-widest transition-all ${activeTab === 'TRADE' ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}
            >
              TRADE
            </button>
            <button 
              onClick={() => handleTabClick('NEWS')}
              className={`text-xs font-bold tracking-widest transition-all ${activeTab === 'NEWS' ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}
            >
              NEWS
            </button>
            <button 
              onClick={() => handleTabClick('PROFILE')}
              className={`text-xs font-bold tracking-widest transition-all ${activeTab === 'PROFILE' ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}
            >
              PROFILE
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          {/* Desktop Balance */}
          {walletAddress && (
            <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 bg-black/40 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-500 font-bold uppercase">WALLET BAL:</span>
              <span className="text-sm text-cyan-400 font-bold">{balance.toLocaleString()} <span className="text-[10px] opacity-60">USDT</span></span>
            </div>
          )}
          
          <button 
            onClick={onConnect}
            className={`px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-bold transition-all border-2 ${
              walletAddress 
                ? 'bg-transparent text-slate-300 border-slate-700 hover:border-slate-500' 
                : 'bg-transparent text-white border-slate-500 hover:border-white uppercase tracking-wider'
            }`}
          >
            {walletAddress ? (
              <span className="tracking-wide">{walletAddress.substring(0, 6)}...</span>
            ) : (
              'CONNECT'
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#121212] border-b border-slate-800 shadow-2xl py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top duration-200">
          {walletAddress && (
            <div className="bg-black/40 border border-slate-800 rounded-2xl p-4 flex flex-col gap-1">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Available Balance</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-cyan-400">{balance.toLocaleString()}</span>
                <span className="text-xs text-cyan-400/60 font-bold">USDT</span>
              </div>
            </div>
          )}

          <button 
            onClick={() => handleTabClick('MATCHES')}
            className={`text-left text-sm font-bold tracking-widest ${activeTab === 'MATCHES' ? 'text-cyan-400' : 'text-slate-300'}`}
          >
            MARKETS
          </button>
          <button 
            onClick={() => handleTabClick('TRADE')}
            className={`text-left text-sm font-bold tracking-widest ${activeTab === 'TRADE' ? 'text-cyan-400' : 'text-slate-300'}`}
          >
            TRADE
          </button>
          <button 
            onClick={() => handleTabClick('NEWS')}
            className={`text-left text-sm font-bold tracking-widest ${activeTab === 'NEWS' ? 'text-cyan-400' : 'text-slate-300'}`}
          >
            NEWS
          </button>
          <button 
            onClick={() => handleTabClick('PROFILE')}
            className={`text-left text-sm font-bold tracking-widest ${activeTab === 'PROFILE' ? 'text-cyan-400' : 'text-slate-300'}`}
          >
            PROFILE
          </button>
          
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-4">
             <button 
              onClick={onConnect}
              className="w-full py-3 bg-white text-black text-[10px] font-bold tracking-widest rounded-xl uppercase"
            >
              {walletAddress ? 'DISCONNECT WALLET' : 'CONNECT WALLET'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
