import React, { useState, useMemo } from 'react';
import { PersonProfile, CompatibilityRankItem } from '../types';
import { generateRankingsForPerson } from '../services/datingEngine';
import { Trophy, Sparkles, Heart, Crown, Award, ExternalLink, Flame, Search, Filter } from 'lucide-react';

interface RankingsViewProps {
  profiles: PersonProfile[];
  initialTarget?: PersonProfile | null;
  onSelectPerson: (profile: PersonProfile) => void;
  onWatchDate: (personA: PersonProfile, personB: PersonProfile) => void;
}

export const RankingsView: React.FC<RankingsViewProps> = ({
  profiles,
  initialTarget,
  onSelectPerson,
  onWatchDate,
}) => {
  const [selectedPerson, setSelectedPerson] = useState<PersonProfile>(
    initialTarget || profiles[0]
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Compute rankings for selected person against all other profiles
  const rankings = useMemo(() => {
    return generateRankingsForPerson(selectedPerson, profiles);
  }, [selectedPerson, profiles]);

  // Filter rankings by search query
  const filteredRankings = useMemo(() => {
    if (!searchQuery.trim()) return rankings;
    const q = searchQuery.toLowerCase();
    return rankings.filter(r => {
      const matchProfile = profiles.find(p => p.id === r.targetPersonId);
      if (!matchProfile) return false;
      return (
        matchProfile.name.toLowerCase().includes(q) ||
        matchProfile.analysis.personalityArchetype.toLowerCase().includes(q) ||
        r.primaryDriver.toLowerCase().includes(q)
      );
    });
  }, [rankings, searchQuery, profiles]);

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in pb-12">
      
      {/* Top Banner & Person Selector */}
      <div className="bg-[#12121A] p-5 sm:p-6 rounded-3xl border border-[#242436] shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Compatibility Rankings & Fit Matrix
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              For every person, their autonomous agent evaluated every other agent in the pool to compute personalized rankings from best to worst fit.
            </p>
          </div>

          {/* Quick Jump Dropdown */}
          <div className="w-full md:w-72 bg-[#181824] p-2.5 rounded-2xl border border-[#2A2A3E]">
            <label className="text-[10px] uppercase font-bold text-gray-400 block mb-1">
              Select Person to View Rankings:
            </label>
            <select
              value={selectedPerson.id}
              onChange={(e) => {
                const found = profiles.find(p => p.id === e.target.value);
                if (found) setSelectedPerson(found);
              }}
              className="w-full bg-transparent text-white font-bold text-xs sm:text-sm focus:outline-none cursor-pointer"
            >
              {profiles.map(p => (
                <option key={p.id} value={p.id} className="bg-[#181824] text-white">
                  {p.name} ({p.analysis.personalityArchetype})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Person Card Summary */}
        <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-[#181828] via-[#141422] to-[#181828] border border-[#2B2B44] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <img
              src={selectedPerson.avatar}
              alt={selectedPerson.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-dating-pink/60 shadow-lg"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-lg text-white">{selectedPerson.name}</h3>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-dating-purple/20 text-purple-300 border border-dating-purple/30 font-medium">
                  {selectedPerson.analysis.personalityArchetype}
                </span>
              </div>
              <p className="text-xs text-gray-400">{selectedPerson.title}</p>
              <p className="text-xs text-dating-pink/90 font-medium mt-1">
                Core Need: "{selectedPerson.analysis.needs[0]}"
              </p>
            </div>
          </div>

          <div className="text-right sm:border-l sm:border-white/10 sm:pl-6">
            <span className="text-[10px] uppercase font-bold text-gray-400 block">Agent Pool Size</span>
            <span className="text-2xl font-black text-white">{profiles.length - 1} Candidates</span>
            <span className="text-[11px] text-emerald-400 block font-medium">100% Dual-Source Evaluated</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 flex items-center bg-[#181824] px-3.5 py-2 rounded-xl border border-[#262638]">
          <Search className="w-4 h-4 text-gray-400 mr-2.5" />
          <input
            type="text"
            placeholder={`Search ${selectedPerson.name.split(' ')[0]}'s matches by name, archetype, or driver...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs text-white placeholder-gray-500 focus:outline-none"
          />
        </div>

      </div>

      {/* Rankings Leaderboard Grid */}
      <div className="space-y-3">
        {filteredRankings.map((item) => {
          const matchPerson = profiles.find(p => p.id === item.targetPersonId);
          if (!matchPerson) return null;

          const isTopMatch = item.rank === 1;
          const isTop3 = item.rank <= 3;

          return (
            <div
              key={item.targetPersonId}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 ${
                isTopMatch
                  ? 'bg-gradient-to-r from-[#241A28] via-[#181524] to-[#14121E] border-yellow-500/50 shadow-xl shadow-yellow-500/5 ring-1 ring-yellow-500/30'
                  : isTop3
                  ? 'bg-[#141422] border-dating-pink/30 hover:border-dating-pink/60'
                  : 'bg-[#12121A] border-[#222234] hover:border-white/20'
              }`}
            >
              
              {/* Left Column: Rank Badge + Avatar + Match Info */}
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1">
                
                {/* Rank Number Badge */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-md ${
                    isTopMatch
                      ? 'bg-gradient-to-tr from-amber-400 to-yellow-300 text-black shadow-yellow-500/20'
                      : item.rank === 2
                      ? 'bg-gradient-to-tr from-gray-200 to-gray-400 text-black'
                      : item.rank === 3
                      ? 'bg-gradient-to-tr from-amber-700 to-orange-400 text-white'
                      : 'bg-[#1E1E2E] text-gray-300 border border-white/5'
                  }`}
                >
                  {isTopMatch ? <Crown className="w-5 h-5 fill-current" /> : `#${item.rank}`}
                </div>

                {/* Avatar */}
                <div className="relative shrink-0">
                  <img
                    src={matchPerson.avatar}
                    alt={matchPerson.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border border-white/10"
                  />
                  {isTopMatch && (
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-yellow-400 text-black flex items-center justify-center text-[10px] font-bold shadow">
                      ★
                    </div>
                  )}
                </div>

                {/* Match Details */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h4
                      onClick={() => onSelectPerson(matchPerson)}
                      className="font-bold text-white hover:text-dating-pink transition-colors cursor-pointer text-sm sm:text-base truncate"
                    >
                      {matchPerson.name}
                    </h4>

                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 font-medium">
                      {matchPerson.analysis.personalityArchetype}
                    </span>

                    {isTopMatch && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
                        #1 Best Match
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-400 truncate mt-0.5">{matchPerson.title}</p>

                  {/* Primary Driver */}
                  <div className="flex items-center space-x-1.5 mt-1.5 text-xs text-purple-300 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-dating-pink shrink-0" />
                    <span>{item.primaryDriver}</span>
                  </div>

                  {/* Agent Rationale */}
                  <p className="text-xs text-gray-300 italic mt-1 line-clamp-2 max-w-2xl">
                    "{item.agentRationale}"
                  </p>
                </div>

              </div>

              {/* Right Column: Score Breakdown + Action Button */}
              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-white/5 gap-3 shrink-0">
                
                {/* Score Pill */}
                <div className="text-left lg:text-right">
                  <div className="flex items-center lg:justify-end space-x-1.5">
                    <Flame className="w-4 h-4 text-dating-pink" />
                    <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-dating-pink via-rose-400 to-purple-400">
                      {item.matchScore}%
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase font-semibold">Fit</span>
                  </div>

                  {/* Micro Breakdown Bars */}
                  <div className="flex items-center space-x-1 text-[9px] text-gray-400 mt-0.5">
                    <span>Val {item.breakdown.values}%</span>
                    <span>•</span>
                    <span>Life {item.breakdown.lifestyle}%</span>
                    <span>•</span>
                    <span>Intel {item.breakdown.intellect}%</span>
                  </div>
                </div>

                {/* Watch Date Button */}
                <button
                  onClick={() => onWatchDate(selectedPerson, matchPerson)}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-dating-pink to-rose-600 hover:opacity-90 text-white text-xs font-bold shadow-md shadow-dating-pink/20 transition-all flex items-center space-x-1.5 shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>Watch Date</span>
                </button>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
