import React, { useState } from 'react';
import { PersonProfile } from './types';
import { INITIAL_PROFILES } from './data/profiles';
import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { ProfileModal } from './components/ProfileModal';
import { DateTheater } from './components/DateTheater';
import { RankingsView } from './components/RankingsView';
import { LiveExtractor } from './components/LiveExtractor';
import { VideoShowcase } from './components/VideoShowcase';
import { TechnicalDocsModal } from './components/TechnicalDocsModal';
import { Search, Sparkles, Trophy, Users, HeartHandshake, Bot, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function App() {
  const [profiles, setProfiles] = useState<PersonProfile[]>(INITIAL_PROFILES);
  const [activeTab, setActiveTab] = useState<'profiles' | 'dating' | 'rankings' | 'extractor' | 'video' | 'docs'>('profiles');
  const [selectedProfile, setSelectedProfile] = useState<PersonProfile | null>(null);
  
  // Date theater pair state
  const [datingPair, setDatingPair] = useState<{ p1: PersonProfile; p2: PersonProfile }>({
    p1: INITIAL_PROFILES[0], // Marques Brownlee
    p2: INITIAL_PROFILES[2], // Cleo Abram
  });

  // Target person for rankings tab
  const [rankingTarget, setRankingTarget] = useState<PersonProfile>(INITIAL_PROFILES[0]);

  // Search filter for profiles tab
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [archetypeFilter, setArchetypeFilter] = useState<string>('all');

  // Handle agent deployment from LiveExtractor
  const handleAgentCreated = (newProfile: PersonProfile) => {
    setProfiles(prev => [newProfile, ...prev]);
    setSelectedProfile(newProfile);
  };

  // Trigger date between two agents
  const handleDateWith = (person: PersonProfile) => {
    // Pick another person who is not this person
    const other = profiles.find(p => p.id !== person.id) || profiles[0];
    setDatingPair({ p1: person, p2: other });
    setActiveTab('dating');
  };

  const handleWatchPairDate = (p1: PersonProfile, p2: PersonProfile) => {
    setDatingPair({ p1, p2 });
    setActiveTab('dating');
  };

  const handleViewRankings = (person: PersonProfile) => {
    setRankingTarget(person);
    setActiveTab('rankings');
  };

  // Filter profiles
  const filteredProfiles = profiles.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.analysis.personalityArchetype.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.analysis.hobbies.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesArchetype = archetypeFilter === 'all' || p.analysis.personalityArchetype === archetypeFilter;
    return matchesSearch && matchesArchetype;
  });

  const archetypes = Array.from(new Set(profiles.map(p => p.analysis.personalityArchetype)));

  return (
    <div className="min-h-screen bg-[#090A0F] text-gray-100 flex flex-col selection:bg-dating-pink selection:text-white">
      
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        profileCount={profiles.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* TAB 1: 25 PROFILES EXPLORER */}
        {activeTab === 'profiles' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Hero Banner */}
            <div className="relative rounded-3xl bg-gradient-to-r from-[#171324] via-[#12121E] to-[#1E1122] border border-[#2B233C] p-6 sm:p-10 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 rounded-full bg-dating-pink/10 blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 rounded-full bg-dating-purple/10 blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-dating-pink/15 border border-dating-pink/30 text-dating-pink text-xs font-bold uppercase tracking-wider mb-3">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Agentic Dating • 25 Real People Found</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Agents Date On <span className="gradient-text">Your Behalf</span>.
                </h1>

                <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
                  Every person is founded upon exactly two sources: their official LinkedIn and their public Instagram.
                  The agent reads both, models their psychological needs and passions, dates other agents on their behalf, and computes personalized rankings.
                </p>

                {/* Quick Stats Pill */}
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                    <Users className="w-4 h-4 text-dating-pink" />
                    <span className="font-semibold text-white">{profiles.length} Verified Real People</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <span className="font-semibold text-white">100% Dual-Source (LI + IG)</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="font-semibold text-white">300+ Dates Simulated</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveTab('dating')}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-dating-pink to-rose-600 hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-dating-pink/25 flex items-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Watch Agents Date Now</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('video')}
                    className="px-5 py-2.5 rounded-xl bg-[#1C1C2A] hover:bg-[#252538] text-purple-300 font-semibold text-xs border border-purple-500/30 flex items-center space-x-2"
                  >
                    <span>Play 3-Min Showcase Video</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('extractor')}
                    className="px-5 py-2.5 rounded-xl bg-[#1C1C2A] hover:bg-[#252538] text-emerald-300 font-semibold text-xs border border-emerald-500/30 flex items-center space-x-2"
                  >
                    <span>Paste Custom Links</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#12121A] p-4 rounded-2xl border border-[#242436]">
              
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search 25 people by name, hobby, title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#181824] border border-[#262638] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-dating-pink transition-colors"
                />
              </div>

              {/* Archetype Filter */}
              <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                <span className="text-[11px] text-gray-400 uppercase font-bold shrink-0">Archetype:</span>
                <button
                  onClick={() => setArchetypeFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                    archetypeFilter === 'all'
                      ? 'bg-dating-pink text-white shadow'
                      : 'bg-[#181824] text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  All ({profiles.length})
                </button>
                {archetypes.slice(0, 4).map((arch) => (
                  <button
                    key={arch}
                    onClick={() => setArchetypeFilter(arch)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                      archetypeFilter === arch
                        ? 'bg-dating-pink text-white shadow'
                        : 'bg-[#181824] text-gray-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {arch}
                  </button>
                ))}
              </div>

            </div>

            {/* 25 Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProfiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  onSelect={(p) => setSelectedProfile(p)}
                  onDateWith={handleDateWith}
                  onViewRankings={handleViewRankings}
                />
              ))}
            </div>

          </div>
        )}

        {/* TAB 2: DATE THEATER */}
        {activeTab === 'dating' && (
          <DateTheater
            profiles={profiles}
            initialPerson1={datingPair.p1}
            initialPerson2={datingPair.p2}
            onViewRankings={handleViewRankings}
          />
        )}

        {/* TAB 3: RANKINGS VIEW */}
        {activeTab === 'rankings' && (
          <RankingsView
            profiles={profiles}
            initialTarget={rankingTarget}
            onSelectPerson={(p) => setSelectedProfile(p)}
            onWatchDate={handleWatchPairDate}
          />
        )}

        {/* TAB 4: LIVE EXTRACTOR */}
        {activeTab === 'extractor' && (
          <LiveExtractor
            onAgentCreated={handleAgentCreated}
            onOpenProfile={(p) => setSelectedProfile(p)}
          />
        )}

        {/* TAB 5: 3-MINUTE VIDEO SHOWCASE */}
        {activeTab === 'video' && (
          <VideoShowcase
            profiles={profiles}
            onNavigateToTab={(tab) => setActiveTab(tab)}
          />
        )}

        {/* TAB 6: TECHNICAL DOCS */}
        {activeTab === 'docs' && (
          <TechnicalDocsModal />
        )}

      </main>

      {/* Global Profile Page Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
        onDateWith={handleDateWith}
        onViewRankings={handleViewRankings}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-[#1C1C2A] bg-[#0A0A0F] py-8 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>AgenticDate Platform • Autonomous Agents Dating On Behalf Of Real People</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Two Sources Only: LinkedIn + Instagram</span>
            <span>•</span>
            <button onClick={() => setActiveTab('docs')} className="text-dating-pink hover:underline">
              Technical Stack Specs
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
