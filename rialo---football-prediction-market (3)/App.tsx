
import React, { useState, useEffect } from 'react';
import { Match, Prediction, PredictionChoice } from './types';
import { MOCK_MATCHES } from './services/mockData';
import { IMAGE_ASSETS } from './services/imageAssets';
import Navbar from './components/Navbar';
import MatchCard from './components/MatchCard';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import Trade from './components/Trade';
import Footer from './components/Footer';
import About from './components/About';
import NewsSection from './components/NewsSection';
import AuthModal from './components/AuthModal';

const App: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [loginMethod, setLoginMethod] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(1000);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [activeTab, setActiveTab] = useState<'MATCHES' | 'PROFILE' | 'NEWS' | 'TRADE'>('MATCHES');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [holdings, setHoldings] = useState<Record<string, number>>({ USDT: 1000, ETH: 0, SOL: 0, SUI: 0, MON: 0 });

  // Listen for Metamask account changes
  useEffect(() => {
    // Fixed: check for ethereum on window safely
    const eth = window.ethereum;
    if (eth && typeof eth.on === 'function') {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress(null);
        }
      };

      eth.on('accountsChanged', handleAccountsChanged);
      return () => {
        if (eth.removeListener) {
          eth.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }
  }, []);

  const handleLogin = (method: string, data?: any) => {
    setLoginMethod(method);
    if (method === 'WALLET') {
      setWalletAddress(data?.address || '0xConnectedWallet');
    } else if (method === 'GUEST') {
      setWalletAddress('GUEST USER');
    } else if (method === 'GMAIL') {
      setWalletAddress('rialo.user@gmail.com');
    } else if (method === 'X') {
      setWalletAddress('@rialo_pro');
    } else if (method === 'DISCORD') {
      setWalletAddress('rialo_champ#001');
    } else {
      setWalletAddress(data?.username || 'CREDENTIALS USER');
    }
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setWalletAddress(null);
    setLoginMethod(null);
  };

  const handlePredict = (matchId: string, choice: PredictionChoice, amount: number) => {
    if (!walletAddress) {
      setIsAuthModalOpen(true);
      return;
    }
    if (amount > balance) {
      alert("Insufficient USDT units.");
      return;
    }

    const newPrediction: Prediction = {
      id: Math.random().toString(36).substr(2, 9),
      matchId,
      choice,
      amount,
      timestamp: Date.now(),
      status: 'PENDING'
    };

    setPredictions(prev => [newPrediction, ...prev]);
    setBalance(prev => prev - amount);
    setHoldings(prev => ({ ...prev, USDT: prev.USDT - amount }));
  };

  const handleDeposit = (amount: number) => {
    setBalance(prev => prev + amount);
    setHoldings(prev => ({ ...prev, USDT: prev.USDT + amount }));
  };

  const handleSwap = (from: string, to: string, fromAmt: number, toAmt: number) => {
    if (from === 'USDT') {
      setBalance(prev => prev - fromAmt);
    }
    if (to === 'USDT') {
      setBalance(prev => prev + toAmt);
    }
    setHoldings(prev => ({
      ...prev,
      [from]: (prev[from] || 0) - fromAmt,
      [to]: (prev[to] || 0) + toAmt
    }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'MATCHES':
        return (
          <>
            <section className="relative h-[600px] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
              <div className="absolute inset-0 z-0">
                <img src={IMAGE_ASSETS.HERO_BLOCKCHAIN} alt="BG" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
              </div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight drop-shadow-2xl">
                  Your call. Your prediction
                </h2>
                <p className="text-slate-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-semibold drop-shadow-lg">
                  Decentralized football forecasting powered by real-time data and neural node analysis.
                </p>
                <button onClick={() => setIsAuthModalOpen(true)} className="px-10 py-3 rounded-full border-2 border-cyan-500/50 text-white font-bold hover:bg-white hover:text-black transition-all shadow-xl">
                  {walletAddress ? 'Active Session' : 'Get Started'}
                </button>
              </div>
            </section>
            <main className="max-w-[1400px] mx-auto px-6 py-10">
              <div className="mb-16 max-w-6xl mx-auto">
                <div className="relative flex items-center bg-black border border-cyan-500/30 rounded-full overflow-hidden">
                  <input type="text" placeholder="Search matches..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-transparent px-8 py-4 text-slate-300 outline-none" />
                  <button className="bg-cyan-500 p-4 px-6"><svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {MOCK_MATCHES.filter(m => m.homeTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.awayTeam.name.toLowerCase().includes(searchQuery.toLowerCase())).map(match => (
                  <MatchCard key={match.id} match={match} onPredict={handlePredict} disabled={!walletAddress} />
                ))}
              </div>
              <About />
              <div className="mt-20"><NewsSection /></div>
            </main>
          </>
        );
      case 'TRADE':
        return (
          <main className="max-w-[1400px] mx-auto px-6 py-20 min-h-[70vh]">
            <Trade balance={balance} onSwap={handleSwap} />
          </main>
        );
      case 'NEWS':
        return (
          <main className="max-w-[1400px] mx-auto px-6 py-20 min-h-[70vh]">
            <NewsSection />
          </main>
        );
      case 'PROFILE':
        return (
          <main className="max-w-[1400px] mx-auto px-6 py-20 min-h-[70vh]">
            <Profile predictions={predictions} balance={balance} onDeposit={handleDeposit} />
          </main>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-black bg-black">
      <Navbar walletAddress={walletAddress} onConnect={() => walletAddress ? logout() : setIsAuthModalOpen(true)} balance={balance} activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} onLogin={handleLogin} />
      {!walletAddress && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 z-[100]">
          <div className="bg-black/90 border border-cyan-500/50 p-6 rounded-2xl shadow-xl backdrop-blur-md">
            <div className="text-center">
              <h4 className="font-display text-xl text-white tracking-widest mb-1 uppercase">Connect to predict now!</h4>
              <p className="text-[10px] font-mono text-slate-500">INITIALIZE SESSION TO PREDICT</p>
            </div>
            <button onClick={() => setIsAuthModalOpen(true)} className="w-full mt-4 py-3 bg-cyan-500 text-black font-bold tracking-widest rounded-full hover:bg-cyan-400">CONNECT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
