
import React from 'react';
import { IMAGE_ASSETS } from '../services/imageAssets';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 pt-16 pb-12 px-6 md:px-12 border-t border-teal-900/30">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <img src={IMAGE_ASSETS.LOGO_FULL} alt="Logo" className="w-8 h-8 object-contain" />
            <h2 className="text-white text-2xl font-bold tracking-tight">RialoHub</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Explore Column */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-white font-bold text-lg tracking-wider uppercase">EXPLORE</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:text-white transition-colors cursor-pointer">home</li>
            <li className="hover:text-white transition-colors cursor-pointer">Catagory</li>
            <li className="hover:text-white transition-colors cursor-pointer">predction</li>
            <li className="hover:text-white transition-colors cursor-pointer">Contract</li>
          </ul>
        </div>

        {/* Community Column */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="text-white font-bold text-lg tracking-wider uppercase">COMMUNITY</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:text-white transition-colors cursor-pointer">About Rialo</li>
            <li className="hover:text-white transition-colors cursor-pointer">Docs</li>
            <li className="hover:text-white transition-colors cursor-pointer">Events</li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="text-white font-bold text-lg tracking-wider uppercase">LEGAL</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:text-white transition-colors cursor-pointer">Terms</li>
            <li className="hover:text-white transition-colors cursor-pointer">Privacy</li>
            <li className="hover:text-white transition-colors cursor-pointer">Cookies</li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-slate-500 font-medium">
          © 2026 RialoHub. All rights reserved. Desginer – MAHE
        </p>
        
        {/* Social Icons - Circle Style as per image */}
        <div className="flex items-center gap-4">
          {[
            { id: 'x', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            { id: 'github', path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
            { id: 'telegram', path: 'M11.944 0C5.347 0 0 5.347 0 11.944c0 6.597 5.347 11.944 11.944 11.944 6.597 0 11.944-5.347 11.944-11.944C23.888 5.347 18.541 0 11.944 0zm5.181 8.226c-.161 1.677-.86 5.827-1.216 7.733-.151.808-.447 1.08-.735 1.107-.625.058-1.1-.412-1.706-.81-.948-.624-1.484-1.011-2.404-1.616-1.063-.7-1.107-.944.232-1.341.35-.104 3.213-2.943 3.269-3.177.007-.03-.021-.141-.091-.202-.07-.061-.17-.04-.244-.023-.105.024-1.782 1.133-5.039 3.333-.477.327-.91.488-1.298.479-.428-.01-1.25-.243-1.862-.442-.751-.244-1.348-.373-1.296-.787.027-.216.324-.438.891-.667 3.483-1.517 5.805-2.518 6.965-3.002 3.313-1.381 4.001-1.621 4.451-1.629.099-.002.32.023.463.139.12.098.153.23.167.324.015.097.032.26.018.42z' },
            { id: 'discord', path: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.23 10.23 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z' },
            { id: 'info', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' }
          ].map((icon) => (
            <div 
              key={icon.id}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-teal-500 transition-all cursor-pointer group"
            >
              <svg 
                className="w-5 h-5 text-black group-hover:text-white transition-colors" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d={icon.path} />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
