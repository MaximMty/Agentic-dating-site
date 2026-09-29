import React from 'react';
import { PersonProfile } from '../types';
import { ExternalLink, Sparkles, Heart, Compass, CheckCircle2 } from 'lucide-react';

interface ProfileCardProps {
  profile: PersonProfile;
  onSelect: (profile: PersonProfile) => void;
  onDateWith: (profile: PersonProfile) => void;
  onViewRankings: (profile: PersonProfile) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onSelect, onDateWith, onViewRankings }) => {
  return (
    <div className="bg-[#12121A] rounded-2xl border border-[#242436] hover:border-dating-pink/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-dating-pink/10">
      
      {/* Top Banner / Avatar Area */}
      <div>
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-[#1C1C2A] to-[#12121A]">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-transparent to-transparent"></div>

          {/* Archetype Badge */}
          <div className="absolute top-3 left-3 bg-[#0A0A0F]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-semibold text-purple-300 flex items-center space-x-1">
            <Compass className="w-3 h-3 text-dating-pink" />
            <span>{profile.analysis.personalityArchetype}</span>
          </div>

          {/* Official Source Verified Links */}
          <div className="absolute top-3 right-3 flex items-center space-x-1.5">
            <a
              href={profile.sources.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="Official LinkedIn Public Profile"
              className="w-7 h-7 rounded-full bg-[#0077B5]/80 hover:bg-[#0077B5] backdrop-blur-md flex items-center justify-center text-white text-xs font-bold transition-all shadow hover:scale-110"
            >
              in
            </a>
            <a
              href={profile.sources.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="Official Public Instagram Profile"
              className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 backdrop-blur-md flex items-center justify-center text-white text-[10px] font-bold transition-all shadow hover:scale-110"
            >
              IG
            </a>
          </div>

          {/* Custom Tag if created by user */}
          {profile.isCustom && (
            <div className="absolute bottom-2 left-3 bg-emerald-500/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow">
              Live Custom Agent
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-lg text-white group-hover:text-dating-pink transition-colors flex items-center space-x-1.5">
                <span>{profile.name}</span>
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
              </h3>
              <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{profile.title}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{profile.location}</p>
            </div>
          </div>

          {/* Agent Analysis: Core Need Highlight */}
          <div className="mt-4 p-3 rounded-xl bg-[#181824] border border-[#242436] text-xs">
            <span className="text-[10px] font-semibold text-dating-pink uppercase tracking-wider block mb-1">
              Agent Identified Core Need:
            </span>
            <p className="text-gray-300 italic line-clamp-2">
              "{profile.analysis.needs[0]}"
            </p>
          </div>

          {/* Hobbies Badges */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {profile.analysis.hobbies.slice(0, 3).map((hobby, i) => (
              <span
                key={i}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-[#202030] text-gray-300 border border-white/5"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2 mt-2">
        <button
          onClick={() => onSelect(profile)}
          className="w-full py-2 px-3 rounded-xl bg-[#1C1C2A] hover:bg-[#252538] text-white text-xs font-semibold border border-[#2B2B40] transition-colors flex items-center justify-center space-x-1"
        >
          <span>Profile Page</span>
        </button>
        <button
          onClick={() => onDateWith(profile)}
          className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-dating-pink to-rose-600 hover:from-rose-500 hover:to-dating-pink text-white text-xs font-semibold shadow-md shadow-dating-pink/20 transition-all flex items-center justify-center space-x-1"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          <span>Watch Dates</span>
        </button>
      </div>

    </div>
  );
};
