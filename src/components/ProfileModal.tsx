import React from 'react';
import { PersonProfile } from '../types';
import { X, ExternalLink, Heart, Sparkles, CheckCircle, ShieldAlert, Award, Bot, MessageSquare, Compass, Activity } from 'lucide-react';

interface ProfileModalProps {
  profile: PersonProfile | null;
  onClose: () => void;
  onDateWith: (profile: PersonProfile) => void;
  onViewRankings: (profile: PersonProfile) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ profile, onClose, onDateWith, onViewRankings }) => {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#101018] rounded-3xl border border-[#242436] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#181824]/80 hover:bg-[#252538] text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-all shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Section */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-b from-[#1C1C2C] to-[#101018] border-b border-[#242436]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover border-2 border-dating-pink/50 shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-tr from-dating-pink to-purple-600 rounded-full p-2 border-2 border-[#101018] shadow">
                <Bot className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">{profile.name}</h1>
                <span className="px-3 py-1 rounded-full bg-dating-purple/20 border border-dating-purple/30 text-purple-300 text-xs font-semibold flex items-center space-x-1">
                  <Compass className="w-3.5 h-3.5 text-dating-pink" />
                  <span>{profile.analysis.personalityArchetype}</span>
                </span>
              </div>

              <p className="text-sm text-gray-300 font-medium mt-1">{profile.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{profile.location}</p>

              {/* The Exactly Two Official Sources Required by Prompt */}
              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  The Two Verified Sources:
                </span>

                <a
                  href={profile.sources.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#0077B5]/20 hover:bg-[#0077B5]/30 text-[#00A0DC] border border-[#0077B5]/40 text-xs font-semibold transition-all hover:scale-105"
                >
                  <span className="font-bold">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={profile.sources.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-pink-500/15 hover:bg-pink-500/25 text-pink-400 border border-pink-500/40 text-xs font-semibold transition-all hover:scale-105"
                >
                  <span className="font-bold">Instagram</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Analysis Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">

          {/* Agent Reading Summary */}
          <div className="p-4 rounded-2xl bg-[#141420] border border-[#242436]">
            <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider flex items-center space-x-1.5 mb-2">
              <Bot className="w-4 h-4 text-dating-pink" />
              <span>Agent Synthesis & Vibe Analysis</span>
            </h4>
            <p className="text-sm text-gray-200 leading-relaxed italic">
              "{profile.analysis.vibe}"
            </p>
            <div className="mt-2 text-xs text-gray-400">
              <span className="text-gray-300 font-semibold">Communication Style: </span>
              {profile.analysis.communicationStyle}
            </div>
          </div>

          {/* Grid: Needs, Hobbies, Interests */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* 1. Core Needs */}
            <div className="p-4 rounded-2xl bg-[#161624] border border-[#26263A] flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase font-bold text-dating-pink tracking-wider flex items-center space-x-1.5 mb-3">
                  <Heart className="w-4 h-4" />
                  <span>Agent-Identified Needs</span>
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {profile.analysis.needs.map((need, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-dating-pink font-bold">•</span>
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-3 text-[10px] text-gray-500 pt-2 border-t border-white/5">
                Extracted from personal reflections & lifestyle constraints.
              </p>
            </div>

            {/* 2. Hobbies */}
            <div className="p-4 rounded-2xl bg-[#161624] border border-[#26263A] flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase font-bold text-purple-400 tracking-wider flex items-center space-x-1.5 mb-3">
                  <Activity className="w-4 h-4" />
                  <span>Hobbies & Passions</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {profile.analysis.hobbies.map((hobby, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#202034] text-xs text-purple-200 border border-purple-500/20"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-[10px] text-gray-500 pt-2 border-t border-white/5">
                Sourced from Instagram imagery, captions, and weekend pursuits.
              </p>
            </div>

            {/* 3. Interests & Values */}
            <div className="p-4 rounded-2xl bg-[#161624] border border-[#26263A] flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase font-bold text-sky-400 tracking-wider flex items-center space-x-1.5 mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Interests & Intellect</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {profile.analysis.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#182030] text-xs text-sky-200 border border-sky-500/20"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-[10px] text-gray-500 pt-2 border-t border-white/5">
                Sourced from LinkedIn career history and intellectual projects.
              </p>
            </div>

          </div>

          {/* Green Flags & Dealbreakers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
              <h5 className="text-xs uppercase font-bold text-emerald-400 tracking-wider flex items-center space-x-1.5 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span>Agent Dating Green Flags</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-emerald-200/90">
                {profile.analysis.greenFlags.map((flag, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20">
              <h5 className="text-xs uppercase font-bold text-rose-400 tracking-wider flex items-center space-x-1.5 mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Agent Dealbreakers</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-rose-200/90">
                {profile.analysis.dealbreakers.map((deal, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                    <span>{deal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The Agent's System Prompt (How it dates on their behalf) */}
          <div className="p-4 rounded-2xl bg-[#0D0D14] border border-[#242436]">
            <h5 className="text-xs uppercase font-bold text-amber-300 tracking-wider flex items-center space-x-1.5 mb-1.5">
              <Bot className="w-4 h-4" />
              <span>Autonomous Dating Agent System Prompt</span>
            </h5>
            <p className="text-[11px] text-gray-400 mb-2">
              The behavioral instructions driving this agent during date simulations:
            </p>
            <div className="p-3 rounded-xl bg-black/60 font-mono text-xs text-gray-300 border border-white/5">
              {profile.analysis.datingPersonaPrompt}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#0E0E16] border-t border-[#242436] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onViewRankings(profile);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1C1C2A] hover:bg-[#252538] text-white text-xs font-semibold border border-[#2B2B40] transition-colors flex items-center justify-center space-x-2"
          >
            <Award className="w-4 h-4 text-yellow-400" />
            <span>See {profile.name.split(' ')[0]}'s Match Rankings</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onDateWith(profile);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-dating-pink via-rose-500 to-dating-purple hover:opacity-95 text-white text-xs font-bold shadow-lg shadow-dating-pink/25 transition-all flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Watch This Agent Go On Dates</span>
          </button>
        </div>

      </div>
    </div>
  );
};
