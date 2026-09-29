import React from 'react';
import { Code, Terminal, Bot, Sparkles, Layers, ShieldCheck, Database, Cpu } from 'lucide-react';

export const TechnicalDocsModal: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
      
      {/* Title */}
      <div className="bg-[#12121A] p-6 sm:p-8 rounded-3xl border border-[#242436] shadow-xl">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-dating-purple to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Technical Architecture & Scraping Stack
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              In-depth specification of the scraping pipeline, agentic persona synthesis, and compatibility ranking matrix.
            </p>
          </div>
        </div>
      </div>

      {/* 1. Scraping Tech Stack Section */}
      <div className="bg-[#101018] p-6 sm:p-8 rounded-3xl border border-[#242436] shadow-xl space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
          <Terminal className="w-5 h-5 text-dating-pink" />
          <span>1. Scraping Instagram & LinkedIn: The Dual-Source Pipeline</span>
        </h3>
        
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          Both LinkedIn and Instagram enforce strict anti-scraping measures, login barriers, and rate-limiting. Our system uses a resilient, zero-credential multi-tier architecture to extract rich, authentic profile data from both platforms without requiring session cookies or credentials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          
          {/* LinkedIn Scraper */}
          <div className="p-4 rounded-2xl bg-[#141422] border border-[#2B2B44] space-y-2.5">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded bg-[#0077B5] text-white flex items-center justify-center text-xs font-bold">in</span>
              <h4 className="font-bold text-white text-sm">LinkedIn Public Harvester</h4>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li>
                <strong className="text-gray-100">• User-Agent Emulation: </strong> 
                Uses Googlebot/2.1 crawler signatures (<code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)</code>) which bypasses the LinkedIn 999 login wall on public URLs.
              </li>
              <li>
                <strong className="text-gray-100">• Schema.org JSON-LD Extraction: </strong>
                Parses embedded <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">&lt;script type="application/ld+json"&gt;</code> Person markup for exact structured job titles, locations, and affiliations.
              </li>
              <li>
                <strong className="text-gray-100">• OpenGraph Meta: </strong>
                Extracts <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">og:title</code>, <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">og:description</code>, and high-res CDN profile photos (<code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">og:image</code>).
              </li>
            </ul>
          </div>

          {/* Instagram Scraper */}
          <div className="p-4 rounded-2xl bg-[#141422] border border-[#2B2B44] space-y-2.5">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded bg-gradient-to-tr from-amber-500 to-pink-500 text-white flex items-center justify-center text-xs font-bold">IG</span>
              <h4 className="font-bold text-white text-sm">Instagram Public Graph Harvester</h4>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li>
                <strong className="text-gray-100">• OpenGraph Bot Emulation: </strong>
                Uses Facebook External Hit (<code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">facebookexternalhit/1.1</code>). Instagram serves full OpenGraph headers to Facebook crawlers without JavaScript execution walls.
              </li>
              <li>
                <strong className="text-gray-100">• Bio & Followers Parsing: </strong>
                Extracts follower counts, following stats, post counts, and the user's authentic bio directly from <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">&lt;meta name="description"&gt;</code>.
              </li>
              <li>
                <strong className="text-gray-100">• Image CDN Resolver: </strong>
                Captures the authentic Instagram CDN profile photo (<code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">scontent.cdninstagram.com</code>) from <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">og:image</code>.
              </li>
            </ul>
          </div>

        </div>

        <div className="p-3.5 rounded-2xl bg-[#161626] border border-white/5 text-xs text-gray-300 flex items-start space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Resilient Proxy & Fallback: </strong>
            In addition to direct SSR headers, the harvester connects to the Jina AI Reader (<code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">https://r.jina.ai/</code>) and an intelligent profile synthesizer to ensure 100% uptime when users paste custom links on the live site.
          </div>
        </div>
      </div>

      {/* 2. Agent Persona Synthesis */}
      <div className="bg-[#101018] p-6 sm:p-8 rounded-3xl border border-[#242436] shadow-xl space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
          <Bot className="w-5 h-5 text-purple-400" />
          <span>2. Psychological Agent Persona Synthesis</span>
        </h3>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          The agent reads both streams to model the whole human:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-[#141420] border border-white/5">
            <span className="font-bold text-dating-pink block mb-1">LinkedIn Signal</span>
            <p className="text-gray-300">
              Professional velocity, cognitive rigor, core career achievements, communication tone, and intellectual ambition.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#141420] border border-white/5">
            <span className="font-bold text-purple-400 block mb-1">Instagram Signal</span>
            <p className="text-gray-300">
              Visual aesthetic, weekend pursuits, outdoor passions, athletic habits, humor style, and social energy.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#141420] border border-white/5">
            <span className="font-bold text-emerald-400 block mb-1">Agent Synthesis</span>
            <p className="text-gray-300">
              Generates 3 Core Needs, 4 Hobbies, 4 Interests, Personality Archetype, Dealbreakers, Green Flags, and Date Persona.
            </p>
          </div>
        </div>
      </div>

      {/* 3. The Dating Simulation & Compatibility Engine */}
      <div className="bg-[#101018] p-6 sm:p-8 rounded-3xl border border-[#242436] shadow-xl space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span>3. Autonomous Dating Simulation & Ranking Engine</span>
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-gray-300">
          <p>
            When two agents date, they converse across multiple communicative turns at a venue chosen to match their mutual vibe. Each turn exposes:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-gray-300 text-xs">
            <li><strong>Spoken Dialogue:</strong> Authentic conversational banter tailored to both personas.</li>
            <li><strong>Inner Monologue:</strong> The agent's private internal psychological reasoning evaluating the partner's signals.</li>
            <li><strong>Dynamic Chemistry Gauge:</strong> Real-time trajectory shifting as boundaries, humor, and values align.</li>
            <li><strong>Mutual Decision & Debrief:</strong> Post-date evaluation stating if they schedule a second date.</li>
          </ul>

          <div className="p-4 rounded-2xl bg-[#161628] border border-white/10 mt-3">
            <span className="font-bold text-white text-xs block mb-1">Weighted Compatibility Formula:</span>
            <code className="text-xs text-dating-pink font-mono block">
              MatchScore = (Values * 0.30) + (Lifestyle * 0.25) + (Intellect * 0.25) + (Energy * 0.20)
            </code>
            <p className="text-[11px] text-gray-400 mt-2">
              For all 25 people, the harness simulates 300 cross-pool dates to generate personalized leaderboard rankings from #1 down to #24.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
