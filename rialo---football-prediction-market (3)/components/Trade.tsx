
import React, { useState, useEffect } from 'react';

interface TradeProps {
  balance: number;
  onSwap: (fromAsset: string, toAsset: string, fromAmount: number, toAmount: number) => void;
}

const TOKENS = [
  { id: 'USDT', name: 'Tether USD', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=040', rate: 1, color: 'text-green-500' },
  { id: 'ETH', name: 'Ethereum', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040', rate: 2800, color: 'text-blue-400' },
  { id: 'SOL', name: 'Wrapped Solana', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=040', rate: 145, color: 'text-purple-400' },
  { id: 'SUI', name: 'Wrapped Sui', icon: 'https://cryptologos.cc/logos/sui-sui-logo.png?v=040', rate: 3.2, color: 'text-cyan-400' },
  { id: 'MON', name: 'Monad (Testnet)', icon: 'https://cryptologos.cc/logos/monero-xmr-logo.png?v=040', rate: 1.5, color: 'text-orange-400' },
];

const Trade: React.FC<TradeProps> = ({ balance, onSwap }) => {
  const [fromToken, setFromToken] = useState(TOKENS[0]);
  const [toToken, setToToken] = useState(TOKENS[1]);
  const [amount, setAmount] = useState<string>('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [slippage, setSlippage] = useState<number>(0.5);
  const [showSettings, setShowSettings] = useState(false);

  const numAmount = Number(amount) || 0;
  const estimatedOutput = (numAmount * fromToken.rate) / toToken.rate;
  const isInsufficient = numAmount > balance && fromToken.id === 'USDT';

  const handleMax = () => {
    if (fromToken.id === 'USDT') {
      setAmount(balance.toString());
    }
  };

  const handleSwap = () => {
    if (!amount || numAmount <= 0 || isInsufficient) return;

    setIsSwapping(true);
    // Simulate smart contract execution
    setTimeout(() => {
      onSwap(fromToken.id, toToken.id, numAmount, estimatedOutput);
      setIsSwapping(false);
      setAmount('');
      // Toast notification would go here in a real app
    }, 2400);
  };

  const flipTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  return (
    <div className="max-w-lg mx-auto py-10 px-4 animate-in fade-in zoom-in-95 duration-700">
      {/* Swap Container */}
      <div className="relative group">
        {/* Animated Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-[3rem] blur-2xl group-hover:opacity-100 transition duration-1000 opacity-50"></div>
        
        <div className="relative bg-[#050505] border border-white/10 rounded-[2.5rem] p-6 md:p-8 shadow-2xl backdrop-blur-3xl overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-display text-white tracking-[0.2em] uppercase">SWAP</h2>
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">Aggregated Liquidity • ETH Mainnet</p>
            </div>
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>

          {/* Settings Dropdown */}
          {showSettings && (
            <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-2xl animate-in slide-in-from-top-2">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Slippage Tolerance</span>
                <span className="text-[10px] font-mono text-cyan-400">{slippage}%</span>
              </div>
              <div className="flex gap-2">
                {[0.1, 0.5, 1.0].map(s => (
                  <button 
                    key={s}
                    onClick={() => setSlippage(s)}
                    className={`flex-1 py-2 rounded-lg text-[10px] font-black transition-all ${slippage === s ? 'bg-cyan-500 text-black' : 'bg-white/5 text-slate-400 border border-white/5 hover:border-white/20'}`}
                  >
                    {s}%
                  </button>
                ))}
                <div className="flex-1 bg-white/5 rounded-lg border border-white/5 px-2 flex items-center">
                  <input type="text" placeholder="Custom" className="bg-transparent w-full text-[10px] text-right outline-none text-white" />
                </div>
              </div>
            </div>
          )}

          {/* Input Panel */}
          <div className="space-y-1 relative">
            <div className="p-5 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:bg-white/[0.05] transition-colors group/input">
              <div className="flex justify-between mb-3">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Sell</span>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Balance: {balance.toLocaleString()}</span>
                  <button onClick={handleMax} className="text-[10px] font-black text-cyan-500 hover:text-white uppercase transition-colors">Max</button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <input 
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="bg-transparent text-4xl font-display text-white outline-none w-full placeholder:text-white/10"
                />
                <button className="flex items-center gap-2 bg-black border border-white/10 pl-2 pr-4 py-2 rounded-2xl hover:border-cyan-500/50 transition-all shadow-xl">
                  <img src={fromToken.icon} className="w-7 h-7 rounded-full shadow-lg" alt="" />
                  <span className="text-sm font-black text-white">{fromToken.id}</span>
                  <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" /></svg>
                </button>
              </div>
            </div>

            {/* Switch Button Absolute */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-20">
              <button 
                onClick={flipTokens}
                className="p-3 bg-black border-4 border-[#050505] rounded-2xl text-cyan-400 hover:text-white hover:rotate-180 transition-all duration-500 shadow-2xl group/flip"
              >
                <div className="absolute inset-0 bg-cyan-500/20 blur-lg opacity-0 group-hover/flip:opacity-100 transition-opacity"></div>
                <svg className="w-5 h-5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            <div className="p-5 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:bg-white/[0.05] transition-colors">
              <div className="flex justify-between mb-3">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Buy (Estimated)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className={`text-4xl font-display w-full ${amount ? 'text-white' : 'text-white/10'}`}>
                  {amount ? estimatedOutput.toFixed(4) : '0.00'}
                </div>
                <select 
                  value={toToken.id}
                  onChange={(e) => setToToken(TOKENS.find(t => t.id === e.target.value) || TOKENS[1])}
                  className="bg-black border border-white/10 pl-2 pr-4 py-2 rounded-2xl text-sm font-black text-white outline-none focus:border-cyan-500/50 appearance-none cursor-pointer"
                >
                  {TOKENS.map(t => (
                    <option key={t.id} value={t.id}>{t.id}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Info Details */}
          {amount && (
            <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                <span className="text-slate-500">Price Rate</span>
                <span className="text-white">1 {fromToken.id} = {(fromToken.rate / toToken.rate).toFixed(6)} {toToken.id}</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                <span className="text-slate-500">Price Impact</span>
                <span className="text-green-400">&lt; 0.01%</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                <span className="text-slate-500">Route</span>
                <span className="text-white font-mono flex items-center gap-1">
                  {fromToken.id} <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="4"/></svg> ETH <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="4"/></svg> {toToken.id}
                </span>
              </div>
            </div>
          )}

          {/* Action Button */}
          <button 
            onClick={handleSwap}
            disabled={isSwapping || !amount || numAmount <= 0 || isInsufficient}
            className={`w-full mt-8 py-5 rounded-[1.8rem] font-black uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl ${
              isInsufficient 
                ? 'bg-red-500/10 text-red-500 border border-red-500/20 cursor-not-allowed'
                : 'bg-cyan-500 hover:bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
          >
            {isSwapping ? (
              <>
                <div className="w-5 h-5 border-3 border-black border-t-transparent rounded-full animate-spin"></div>
                Mining Transaction...
              </>
            ) : isInsufficient ? (
              'Insufficient Balance'
            ) : !amount ? (
              'Enter Amount'
            ) : (
              'Confirm Swap'
            )}
          </button>
        </div>
      </div>
      
      {/* Footer Disclaimer */}
      <div className="mt-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mb-2"></div>
             <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Network Secure</span>
          </div>
          <div className="h-8 w-px bg-white/5"></div>
          <div className="flex flex-col items-center">
             <div className="w-2 h-2 rounded-full bg-cyan-500 mb-2"></div>
             <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Low Impact</span>
          </div>
        </div>
        
        <p className="max-w-xs text-center text-[9px] text-slate-700 font-bold leading-relaxed uppercase tracking-tighter">
          Trading involves high risk. Assets are wrapped on the Ethereum L2 network for execution.
        </p>
      </div>
    </div>
  );
};

export default Trade;
