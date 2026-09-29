import React from 'react';
import { HeartHandshake, Users, Sparkles, Trophy, PlusCircle, Video, Code, ExternalLink } from 'lucide-react';

interface HeaderProps {
  activeTab: 'profiles' | 'dating' | 'rankings' | 'extractor' | 'video' | 'docs';
  setActiveTab: (tab: 'profiles' | 'dating' | 'rankings' | 'extractor' | 'video' | 'docs') => void;
  profileCount: number;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, profileCount }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#242436]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('profiles')}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-dating-pink via-rose-500 to-dating-purple flex items-center justify-center shadow-lg shadow-dating-pink/20">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-xl tracking-tight text-white">Agentic<span className="text-dating-pink">Date</span></span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-dating-purple/20 text-purple-300 border border-dating-purple/30">
                  AI Autonomous Dating
                </span>
              </div>
              <p className="text-xs text-gray-400">Agents Date On Your Behalf • Dual-Source Verified</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#12121A] p-1.5 rounded-2xl border border-[#242436]">
            <button
              onClick={() => setActiveTab('profiles')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'profiles'
                  ? 'bg-gradient-to-r from-dating-pink to-rose-600 text-white shadow-md shadow-dating-pink/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>25 Profiles ({profileCount})</span>
            </button>

            <button
              onClick={() => setActiveTab('dating')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'dating'
                  ? 'bg-gradient-to-r from-dating-pink to-rose-600 text-white shadow-md shadow-dating-pink/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Date Theater</span>
            </button>

            <button
              onClick={() => setActiveTab('rankings')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'rankings'
                  ? 'bg-gradient-to-r from-dating-pink to-rose-600 text-white shadow-md shadow-dating-pink/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span>Rankings</span>
            </button>

            <button
              onClick={() => setActiveTab('extractor')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'extractor'
                  ? 'bg-gradient-to-r from-dating-pink to-rose-600 text-white shadow-md shadow-dating-pink/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <PlusCircle className="w-4 h-4 text-emerald-400" />
              <span>Deploy Agent</span>
            </button>

            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'video'
                  ? 'bg-gradient-to-r from-dating-purple to-indigo-600 text-white shadow-md shadow-purple-500/20 ring-1 ring-purple-400/50'
                  : 'text-purple-300 hover:text-white hover:bg-purple-500/10'
              }`}
            >
              <Video className="w-4 h-4 text-dating-pink animate-pulse" />
              <span>3-Min Demo Video</span>
            </button>

            <button
              onClick={() => setActiveTab('docs')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'docs'
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Tech Stack</span>
            </button>
          </nav>

          {/* Verification Badge */}
          <div className="hidden lg:flex items-center space-x-3 text-xs">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium">Dual-Source Harvester Live</span>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Tab Bar */}
      <div className="md:hidden flex items-center justify-around py-2.5 px-2 bg-[#12121A] border-t border-[#242436] text-[11px] overflow-x-auto">
        <button
          onClick={() => setActiveTab('profiles')}
          className={`px-2 py-1 rounded-lg ${activeTab === 'profiles' ? 'text-dating-pink font-bold' : 'text-gray-400'}`}
        >
          Profiles
        </button>
        <button
          onClick={() => setActiveTab('dating')}
          className={`px-2 py-1 rounded-lg ${activeTab === 'dating' ? 'text-dating-pink font-bold' : 'text-gray-400'}`}
        >
          Dates
        </button>
        <button
          onClick={() => setActiveTab('rankings')}
          className={`px-2 py-1 rounded-lg ${activeTab === 'rankings' ? 'text-dating-pink font-bold' : 'text-gray-400'}`}
        >
          Rankings
        </button>
        <button
          onClick={() => setActiveTab('extractor')}
          className={`px-2 py-1 rounded-lg ${activeTab === 'extractor' ? 'text-dating-pink font-bold' : 'text-gray-400'}`}
        >
          Deploy
        </button>
        <button
          onClick={() => setActiveTab('video')}
          className={`px-2 py-1 rounded-lg ${activeTab === 'video' ? 'text-purple-400 font-bold' : 'text-gray-400'}`}
        >
          Video (3m)
        </button>
        <button
          onClick={() => setActiveTab('docs')}
          className={`px-2 py-1 rounded-lg ${activeTab === 'docs' ? 'text-white font-bold' : 'text-gray-400'}`}
        >
          Stack
        </button>
      </div>
    </header>
  );
};
