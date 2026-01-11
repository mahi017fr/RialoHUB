
import React from 'react';
import { MOCK_LEADERBOARD } from '../services/mockData';

const Leaderboard: React.FC = () => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-slate-700 bg-slate-900/40">
        <h2 className="text-lg font-display tracking-wide text-white">TOP PROPHETS</h2>
        <p className="text-xs text-slate-500">Global rankings based on prediction accuracy</p>
      </div>
      <div className="divide-y divide-slate-700/50">
        {MOCK_LEADERBOARD.map((user, idx) => (
          <div key={user.address} className="p-4 flex items-center justify-between hover:bg-slate-700/20 transition-colors">
            <div className="flex items-center gap-4">
              <span className={`text-xl font-display w-6 ${idx === 0 ? 'text-yellow-500' : idx === 1 ? 'text-slate-300' : idx === 2 ? 'text-amber-600' : 'text-slate-600'}`}>
                #{idx + 1}
              </span>
              <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full border border-slate-600" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-200">{user.address}</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase">{user.totalPoints} PTS</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-display text-indigo-400">{user.accuracy}%</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase">Accuracy</div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-indigo-600/10 text-center">
        <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors">VIEW FULL LEADERBOARD →</button>
      </div>
    </div>
  );
};

export default Leaderboard;
