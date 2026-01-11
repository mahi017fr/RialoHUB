
import React, { useState } from 'react';
import { Prediction } from '../types';
import { MOCK_MATCHES } from '../services/mockData';

interface ProfileProps {
  predictions: Prediction[];
  balance: number;
  onDeposit?: (amount: number) => void;
}

const Profile: React.FC<ProfileProps> = ({ predictions, balance, onDeposit }) => {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState<number>(100);

  const findMatch = (id: string) => MOCK_MATCHES.find(m => m.id === id);

  const handleDepositSubmit = () => {
    if (onDeposit) {
      onDeposit(depositAmount);
      setIsDepositModalOpen(false);
    } else {
      // Fallback for demo if prop not passed yet
      alert(`Demo: ${depositAmount} USDT added to sequence.`);
      setIsDepositModalOpen(false);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Profile Card */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative bg-black border border-white/5 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start relative z-10">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 via-transparent to-rose-500 rounded-[2.5rem] animate-pulse opacity-20"></div>
              <div className="relative w-40 h-40 rounded-[2.5rem] border border-white/10 shadow-2xl bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                <svg className="w-24 h-24 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-black border border-cyan-500/50 p-2.5 rounded-2xl shadow-lg">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <h2 className="text-4xl md:text-5xl font-display text-white tracking-widest uppercase cyber-glow-text">
                  USER01
                </h2>
                <span className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[9px] font-black uppercase tracking-widest rounded-full mx-auto lg:mx-0">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Online
                </span>
              </div>
              
              <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.3em] mb-8">
                0x4eC9...f82D <span className="text-white/10 mx-2">|</span> VERIFIED NODE
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Win Rate</p>
                  <p className="text-2xl font-display text-white">74.2%</p>
                </div>
                
                {/* Balance Card with Deposit Action */}
                <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl hover:bg-cyan-500/10 transition-all relative group/bal overflow-hidden">
                  <p className="text-[10px] text-cyan-500/70 font-bold uppercase tracking-widest mb-1">Balance</p>
                  <p className="text-2xl font-display text-cyan-400">{balance.toLocaleString()} <span className="text-[10px] opacity-50 uppercase">USDT</span></p>
                  <button 
                    onClick={() => setIsDepositModalOpen(true)}
                    className="mt-3 w-full py-1.5 bg-cyan-500 text-black text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-white transition-colors"
                  >
                    + Deposit
                  </button>
                </div>

                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">XP Level</p>
                  <p className="text-2xl font-display text-purple-400">LVL 24</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Global Rank</p>
                  <p className="text-2xl font-display text-amber-500">#142</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connectivity & Socials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black border border-white/5 p-6 rounded-[2rem] flex items-center justify-between group hover:border-cyan-500/30 transition-all">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase">X Account</p>
              <p className="text-[10px] text-slate-500 font-mono">@rialo_pro</p>
            </div>
          </div>
          <button className="text-[10px] font-bold text-cyan-400 hover:text-white transition-colors uppercase tracking-widest">Update</button>
        </div>

        <div className="bg-black border border-white/5 p-6 rounded-[2rem] flex items-center justify-between group hover:border-indigo-500/30 transition-all">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.23 10.23 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase">Discord</p>
              <p className="text-[10px] text-slate-500 font-mono">Linked</p>
            </div>
          </div>
          <button className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Manage</button>
        </div>

        <div className="bg-black border border-white/5 p-6 rounded-[2rem] flex items-center justify-between group hover:border-orange-500/30 transition-all">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase">EVM Wallet</p>
              <p className="text-[10px] text-slate-500 font-mono">0x4e...f82D</p>
            </div>
          </div>
          <button className="text-[10px] font-bold text-orange-400 hover:text-white transition-colors uppercase tracking-widest">Switch</button>
        </div>
      </div>

      {/* Prediction History / Logs */}
      <div className="bg-[#050505] border border-white/5 rounded-[2.5rem] overflow-hidden">
        <div className="px-8 py-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center bg-white/[0.02] gap-4">
          <div>
            <h3 className="text-xl font-display tracking-[0.2em] text-white uppercase">OPERATIONAL_LOGS</h3>
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Real-time ledger entries</p>
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {predictions.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center gap-4">
              <svg className="w-12 h-12 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.3em]">NO ACTIVE DATA FOUND</p>
            </div>
          ) : (
            predictions.map((p) => {
              const match = findMatch(p.matchId);
              return (
                <div key={p.id} className="p-8 hover:bg-white/[0.02] transition-all flex flex-col md:flex-row items-center gap-8 group">
                  <div className="flex items-center gap-6 flex-1 w-full">
                    <div className="flex -space-x-3">
                      <img src={match?.homeTeam.logo} className="w-10 h-10 object-contain p-1.5 bg-white/5 rounded-xl border border-white/10" alt="" />
                      <img src={match?.awayTeam.logo} className="w-10 h-10 object-contain p-1.5 bg-white/5 rounded-xl border border-white/10" alt="" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold uppercase tracking-tight">{match?.homeTeam.name} vs {match?.awayTeam.name}</p>
                      <p className="text-[9px] text-slate-500 font-mono italic">#{p.id.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-8 w-full md:w-auto text-center md:text-left">
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase mb-1">Position</p>
                      <span className="text-xs text-cyan-400 font-black uppercase">{p.choice}</span>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase mb-1">Stake</p>
                      <span className="text-xs text-white font-black uppercase">{p.amount} USDT</span>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase mb-1">Status</p>
                      <span className={`text-[9px] px-2 py-0.5 rounded-md font-black uppercase tracking-tighter ${
                        p.status === 'PENDING' ? 'text-amber-500 bg-amber-500/10' : 'text-green-500 bg-green-500/10'
                      }`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Deposit Modal */}
      {isDepositModalOpen && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsDepositModalOpen(false)}></div>
          <div className="relative w-full max-w-sm bg-[#0d0d0d] border border-cyan-500/30 rounded-[2.5rem] p-10 shadow-2xl animate-in zoom-in-95 duration-200">
            <h3 className="text-2xl font-display text-white tracking-widest uppercase mb-6 text-center">Protocol Deposit</h3>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Amount (USDT)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="w-full bg-black border border-slate-800 rounded-2xl px-5 py-4 text-white text-lg font-mono outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-cyan-500 font-black text-xs">USDT</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {[50, 100, 500].map(val => (
                  <button 
                    key={val} 
                    onClick={() => setDepositAmount(val)}
                    className="py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-white hover:bg-white/10 transition-colors"
                  >
                    {val}
                  </button>
                ))}
              </div>

              <button 
                onClick={handleDepositSubmit}
                className="w-full py-4 bg-cyan-500 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                Confirm Allocation
              </button>
              <button 
                onClick={() => setIsDepositModalOpen(false)}
                className="w-full py-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-center pt-8">
        <button className="flex items-center gap-2 px-6 py-3 border border-rose-500/20 text-rose-500/60 hover:text-rose-500 hover:bg-rose-500/5 rounded-2xl transition-all text-[10px] font-bold uppercase tracking-[0.3em]">
          Terminate Session
        </button>
      </div>
    </div>
  );
};

export default Profile;
