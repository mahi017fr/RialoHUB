
import React, { useState } from 'react';
import { Match, PredictionChoice } from '../types';

interface MatchCardProps {
  match: Match;
  onPredict: (matchId: string, choice: PredictionChoice, amount: number) => void;
  disabled: boolean;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, onPredict, disabled }) => {
  const [betAmount, setBetAmount] = useState<number>(10);
  
  // Mocking "Most Voted" logic for UI demonstration
  const mockVotes = {
    home: 45,
    draw: 20,
    away: 35
  };

  const getShortName = (name: string) => name.substring(0, 3).toUpperCase();

  const handlePredictClick = (choice: PredictionChoice) => {
    if (betAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    onPredict(match.id, choice, betAmount);
  };

  return (
    <div className="bg-black border border-cyan-900/40 rounded-[2.5rem] p-8 flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500/50 hover:shadow-[0_0_80px_rgba(34,211,238,0.1)] relative group cursor-default">
      {/* Match Header Info */}
      <div className="text-left w-full mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-white text-[11px] font-bold tracking-tight uppercase leading-none">
              {match.homeTeam.name} VS {match.awayTeam.name}
            </h4>
            <p className="text-white/60 text-[10px] font-bold mt-1 uppercase tracking-wider">
              {match.league} - {new Date(match.kickOff).toLocaleDateString('en-GB')}
            </p>
          </div>
          <div className="bg-cyan-500/10 border border-cyan-500/30 px-2 py-1 rounded text-[9px] text-cyan-400 font-bold group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-500">
            LIVE MARKET
          </div>
        </div>
      </div>

      {/* Versus Section */}
      <div className="flex items-center justify-between w-full mb-8 relative px-2">
        <div className="w-2/5 flex flex-col items-center gap-2 group-hover:translate-y-[-4px] transition-transform duration-500">
          <img 
            src={match.homeTeam.logo} 
            alt={match.homeTeam.name} 
            className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all" 
          />
          <span className="text-[10px] text-slate-400 font-bold uppercase">{getShortName(match.homeTeam.name)}</span>
        </div>
        
        <div className="flex-none w-1/5 flex items-center justify-center">
          <span className="text-4xl font-display italic text-rose-600/90 select-none group-hover:scale-110 transition-transform duration-500">Vs</span>
        </div>

        <div className="w-2/5 flex flex-col items-center gap-2 group-hover:translate-y-[-4px] transition-transform duration-500">
          <img 
            src={match.awayTeam.logo} 
            alt={match.awayTeam.name} 
            className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all" 
          />
          <span className="text-[10px] text-slate-400 font-bold uppercase">{getShortName(match.awayTeam.name)}</span>
        </div>
      </div>

      {/* Vote / Sentiment Bar */}
      <div className="w-full mb-8">
        <div className="flex justify-between text-[9px] font-bold text-slate-500 mb-2 uppercase tracking-tighter">
          <span className="group-hover:text-slate-300 transition-colors">{mockVotes.home}% Voted Home</span>
          <span className="group-hover:text-slate-300 transition-colors">{mockVotes.draw}% Draw</span>
          <span className="group-hover:text-slate-300 transition-colors">{mockVotes.away}% Away</span>
        </div>
        <div className="w-full h-1.5 bg-slate-900 rounded-full flex overflow-hidden group-hover:h-2 transition-all duration-500">
          <div style={{ width: `${mockVotes.home}%` }} className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
          <div style={{ width: `${mockVotes.draw}%` }} className="h-full bg-slate-600"></div>
          <div style={{ width: `${mockVotes.away}%` }} className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        </div>
        {mockVotes.home > mockVotes.away && mockVotes.home > mockVotes.draw && (
          <p className="text-center text-[9px] text-red-500 font-bold mt-2 uppercase tracking-widest group-hover:animate-pulse">Most Voted: {match.homeTeam.name}</p>
        )}
      </div>

      {/* Bet Amount Input */}
      <div className="w-full mb-6">
        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block group-hover:text-cyan-500/80 transition-colors">Prediction Amount (USDT)</label>
        <div className="relative">
          <input 
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white font-mono text-sm outline-none focus:border-cyan-500/50 transition-all group-hover:bg-slate-900"
            placeholder="Enter amount..."
            min="1"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-cyan-500">USDT</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 w-full">
        <button 
          onClick={() => handlePredictClick('HOME')}
          disabled={disabled}
          className="flex-1 bg-red-700 hover:bg-red-600 text-white font-black py-4 rounded-xl text-[10px] transition-all uppercase tracking-tighter disabled:opacity-30 disabled:cursor-not-allowed border-b-4 border-red-900 active:border-b-0 active:translate-y-1"
        >
          Win (1)
        </button>
        <button 
          onClick={() => handlePredictClick('DRAW')}
          disabled={disabled}
          className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-black py-4 rounded-xl text-[10px] transition-all uppercase tracking-tighter disabled:opacity-30 disabled:cursor-not-allowed border-b-4 border-slate-950 active:border-b-0 active:translate-y-1"
        >
          Draw (X)
        </button>
        <button 
          onClick={() => handlePredictClick('AWAY')}
          disabled={disabled}
          className="flex-1 bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded-xl text-[10px] transition-all uppercase tracking-tighter disabled:opacity-30 disabled:cursor-not-allowed border-b-4 border-green-900 active:border-b-0 active:translate-y-1"
        >
          Win (2)
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
