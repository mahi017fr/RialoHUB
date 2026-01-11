
import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (method: string, data?: any) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [authType, setAuthType] = useState<'INITIAL' | 'CREDENTIALS'>('INITIAL');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  if (!isOpen) return null;

  const connectMetamask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsConnecting(true);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          onLogin('WALLET', { address: accounts[0] });
        }
      } catch (error: any) {
        console.error("User rejected the request", error);
        alert(error.message || "Failed to connect wallet.");
      } finally {
        setIsConnecting(false);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
      window.open('https://metamask.io/download/', '_blank');
    }
  };

  const simulateSocialLogin = (platform: string) => {
    setIsConnecting(true);
    // Simulate the OAuth popup behavior
    setTimeout(() => {
      setIsConnecting(false);
      onLogin(platform);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-cyan-500/20 rounded-[2.5rem] p-8 md:p-10 shadow-[0_0_100px_rgba(34,211,238,0.1)] overflow-hidden">
        {/* Decorator */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
        
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-display tracking-[0.1em] text-white uppercase">Sign In</h2>
          <p className="text-[10px] font-medium text-slate-500 mt-2 uppercase tracking-[0.2em]">Protocol Entry Point</p>
        </div>

        {authType === 'INITIAL' ? (
          <div className="space-y-3">
            {/* Social / Direct */}
            <button 
              disabled={isConnecting}
              onClick={() => simulateSocialLogin('GMAIL')}
              className="w-full flex items-center justify-center gap-3 py-3.5 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-all text-sm disabled:opacity-50"
            >
              {isConnecting ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </>
              )}
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button 
                disabled={isConnecting}
                onClick={() => simulateSocialLogin('X')}
                className="flex items-center justify-center gap-2 py-3 bg-[#1DA1F2]/10 border border-[#1DA1F2]/30 text-white font-bold rounded-2xl hover:bg-[#1DA1F2]/20 transition-all text-xs uppercase disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                X Connect
              </button>
              <button 
                disabled={isConnecting}
                onClick={() => simulateSocialLogin('DISCORD')}
                className="flex items-center justify-center gap-2 py-3 bg-[#5865F2]/10 border border-[#5865F2]/30 text-white font-bold rounded-2xl hover:bg-[#5865F2]/20 transition-all text-xs uppercase disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.23 10.23 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                Discord
              </button>
            </div>

            <button 
              onClick={() => setAuthType('CREDENTIALS')}
              className="w-full py-3.5 bg-slate-900 border border-slate-800 text-slate-300 font-bold rounded-2xl hover:border-cyan-500/50 hover:text-white transition-all text-xs uppercase tracking-widest"
            >
              Use Protocol Credentials
            </button>

            <div className="flex items-center gap-4 py-1">
              <div className="h-[1px] flex-1 bg-slate-900"></div>
              <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest">OR LINK CHAIN</span>
              <div className="h-[1px] flex-1 bg-slate-900"></div>
            </div>

            <button 
              disabled={isConnecting}
              onClick={connectMetamask}
              className="w-full flex items-center justify-center gap-3 py-3.5 bg-transparent border-2 border-cyan-500/50 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500 hover:text-black transition-all text-sm uppercase tracking-widest disabled:opacity-50"
            >
              {isConnecting ? (
                <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Connect MetaMask'
              )}
            </button>

            <button 
              onClick={() => onLogin('GUEST')}
              className="w-full py-2 text-slate-600 hover:text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors mt-2"
            >
              Proceed as Guest
            </button>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-500/50 font-medium"
                  placeholder="ID Sequence"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Security Key</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-500/50"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={() => onLogin('CREDENTIALS', { username, password })}
                className="w-full py-4 bg-cyan-500 text-black font-bold rounded-2xl hover:bg-cyan-400 transition-all text-sm uppercase tracking-widest"
              >
                Authorize Session
              </button>
              <button 
                onClick={() => setAuthType('INITIAL')}
                className="w-full py-2 text-slate-500 hover:text-slate-300 text-[10px] font-bold uppercase tracking-widest transition-colors"
              >
                Back to Options
              </button>
            </div>
          </div>
        )}

        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-600 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
