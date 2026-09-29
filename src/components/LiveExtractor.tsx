import React, { useState } from 'react';
import { PersonProfile } from '../types';
import { scrapeAndAnalyzePerson, CrawlLog } from '../services/scraper';
import { Bot, Sparkles, Terminal, CheckCircle2, ArrowRight, ShieldCheck, RefreshCw, Zap } from 'lucide-react';

interface LiveExtractorProps {
  onAgentCreated: (profile: PersonProfile) => void;
  onOpenProfile: (profile: PersonProfile) => void;
}

export const LiveExtractor: React.FC<LiveExtractorProps> = ({ onAgentCreated, onOpenProfile }) => {
  const [linkedinUrl, setLinkedinUrl] = useState<string>('');
  const [instagramUrl, setInstagramUrl] = useState<string>('');
  const [isCrawling, setIsCrawling] = useState<boolean>(false);
  const [logs, setLogs] = useState<CrawlLog[]>([]);
  const [deployedProfile, setDeployedProfile] = useState<PersonProfile | null>(null);

  const sampleProfiles = [
    {
      name: 'Brian Chesky',
      li: 'https://www.linkedin.com/in/brianchesky/',
      ig: 'https://www.instagram.com/bchesky/'
    },
    {
      name: 'Melanie Perkins',
      li: 'https://www.linkedin.com/in/melanieperkins/',
      ig: 'https://www.instagram.com/melaniecanva/'
    },
    {
      name: 'Amjad Masad',
      li: 'https://www.linkedin.com/in/amjadmasad/',
      ig: 'https://www.instagram.com/amasad/'
    }
  ];

  const handleStartCrawl = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkedinUrl.trim() || !instagramUrl.trim()) return;

    setIsCrawling(true);
    setLogs([]);
    setDeployedProfile(null);

    try {
      const newAgent = await scrapeAndAnalyzePerson(linkedinUrl, instagramUrl, (log) => {
        setLogs(prev => [...prev, log]);
      });

      setDeployedProfile(newAgent);
      onAgentCreated(newAgent);
    } catch (err: any) {
      setLogs(prev => [
        ...prev,
        {
          timestamp: new Date().toLocaleTimeString(),
          level: 'warn',
          message: `Crawler encountered an exception: ${err.message || 'Unknown error'}. Fallback parser engaged.`
        }
      ]);
    } finally {
      setIsCrawling(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
      
      {/* Top Card */}
      <div className="bg-[#12121A] p-6 sm:p-8 rounded-3xl border border-[#242436] shadow-xl">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Deploy Your Own Dating Agent
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Paste any real person's public LinkedIn and public Instagram. The autonomous harness scrapes both, analyzes their psychology, and deploys an agent to date on their behalf.
            </p>
          </div>
        </div>

        {/* Quick Fill Test Presets */}
        <div className="mt-5 p-3 rounded-2xl bg-[#181824] border border-[#28283C] flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-gray-400 font-medium">Quick Test with Real People:</span>
          <div className="flex flex-wrap gap-2">
            {sampleProfiles.map((sample, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setLinkedinUrl(sample.li);
                  setInstagramUrl(sample.ig);
                }}
                className="px-2.5 py-1 rounded-xl bg-[#222234] hover:bg-dating-pink/20 hover:text-dating-pink text-xs text-gray-300 font-medium transition-all border border-white/5"
              >
                + {sample.name}
              </button>
            ))}
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleStartCrawl} className="mt-6 space-y-4">
          
          <div>
            <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1.5 flex items-center space-x-1.5">
              <span className="w-4 h-4 rounded bg-[#0077B5] text-white flex items-center justify-center text-[10px] font-bold">in</span>
              <span>1. Official Public LinkedIn URL</span>
            </label>
            <input
              type="url"
              required
              placeholder="https://www.linkedin.com/in/username"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#181824] border border-[#28283C] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-dating-pink focus:ring-1 focus:ring-dating-pink transition-all font-mono"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1.5 flex items-center space-x-1.5">
              <span className="w-4 h-4 rounded bg-gradient-to-tr from-amber-500 to-pink-500 text-white flex items-center justify-center text-[10px] font-bold">IG</span>
              <span>2. Official Public Instagram URL</span>
            </label>
            <input
              type="url"
              required
              placeholder="https://www.instagram.com/username/"
              value={instagramUrl}
              onChange={(e) => setInstagramUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#181824] border border-[#28283C] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-dating-pink focus:ring-1 focus:ring-dating-pink transition-all font-mono"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isCrawling || !linkedinUrl || !instagramUrl}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-dating-pink via-rose-500 to-dating-purple hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-dating-pink/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCrawling ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Harvesting & Synthesizing Agent...</span>
                </>
              ) : (
                <>
                  <Bot className="w-4 h-4" />
                  <span>Scrape Dual Sources & Deploy Agent</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>

      {/* Real-time Crawler Terminal */}
      {(logs.length > 0 || isCrawling) && (
        <div className="bg-[#0A0A10] rounded-3xl border border-[#242436] p-5 shadow-2xl font-mono text-xs overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white tracking-wide">Dual-Source Harvester Live Log</span>
            </div>
            {isCrawling && (
              <span className="flex items-center space-x-1.5 text-dating-pink text-[11px] animate-pulse">
                <span className="w-2 h-2 rounded-full bg-dating-pink"></span>
                <span>Active Crawl</span>
              </span>
            )}
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <span className="text-gray-500 text-[10px] select-none">[{log.timestamp}]</span>
                <span
                  className={
                    log.level === 'success'
                      ? 'text-emerald-400'
                      : log.level === 'agent'
                      ? 'text-purple-400'
                      : log.level === 'warn'
                      ? 'text-amber-400'
                      : 'text-gray-300'
                  }
                >
                  {log.level === 'success' && '✔ '}
                  {log.level === 'agent' && '🤖 '}
                  {log.message}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Deployed Agent Success Banner */}
      {deployedProfile && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#18182A] via-[#121220] to-[#18182A] border border-emerald-500/40 shadow-2xl animate-fade-in flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <img
              src={deployedProfile.avatar}
              alt={deployedProfile.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-lg text-white">{deployedProfile.name}</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  Agent Online
                </span>
              </div>
              <p className="text-xs text-gray-300">{deployedProfile.title}</p>
              <p className="text-xs text-purple-300 mt-0.5">
                Archetype: {deployedProfile.analysis.personalityArchetype}
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenProfile(deployedProfile)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-white text-xs font-bold shadow-lg shadow-emerald-500/20 flex items-center space-x-2 shrink-0 transition-all"
          >
            <span>Open Profile Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
