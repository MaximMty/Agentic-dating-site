import React, { useState, useEffect, useRef } from 'react';
import { PersonProfile, DateSimulation, DialogueTurn } from '../types';
import { generateDateSimulation, DATE_VENUES } from '../services/datingEngine';
import { Sparkles, Play, Pause, RotateCcw, FastForward, Heart, Bot, Compass, CheckCircle2, Award, Volume2, VolumeX, Eye, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DateTheaterProps {
  profiles: PersonProfile[];
  initialPerson1?: PersonProfile | null;
  initialPerson2?: PersonProfile | null;
  onViewRankings: (profile: PersonProfile) => void;
}

export const DateTheater: React.FC<DateTheaterProps> = ({
  profiles,
  initialPerson1,
  initialPerson2,
  onViewRankings,
}) => {
  const [person1, setPerson1] = useState<PersonProfile>(
    initialPerson1 || profiles.find(p => p.id === 'marques-brownlee') || profiles[0]
  );
  const [person2, setPerson2] = useState<PersonProfile>(
    initialPerson2 || profiles.find(p => p.id === 'cleo-abram') || profiles[1]
  );

  const [simulation, setSimulation] = useState<DateSimulation | null>(null);
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(2500); // ms per turn
  const [showInnerMonologue, setShowInnerMonologue] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize or re-generate simulation when pair changes
  useEffect(() => {
    if (person1 && person2 && person1.id !== person2.id) {
      const sim = generateDateSimulation(person1, person2);
      setSimulation(sim);
      setCurrentTurnIndex(0);
      setIsPlaying(true);
    }
  }, [person1, person2]);

  // Handle auto-playback
  useEffect(() => {
    if (!isPlaying || !simulation) return;

    if (currentTurnIndex < simulation.turns.length - 1) {
      const timer = setTimeout(() => {
        setCurrentTurnIndex(prev => prev + 1);
        if (soundEnabled) {
          playSoftPop();
        }
      }, playbackSpeed);
      return () => clearTimeout(timer);
    } else if (currentTurnIndex === simulation.turns.length - 1) {
      // Date finished! Trigger celebratory confetti
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
      setIsPlaying(false);
    }
  }, [isPlaying, currentTurnIndex, simulation, playbackSpeed, soundEnabled]);

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentTurnIndex]);

  // Audio effect using Web Audio API
  const playSoftPop = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {
      // ignore
    }
  };

  const currentTurn = simulation?.turns[currentTurnIndex];
  const activeChemistry = currentTurn ? currentTurn.chemistryScore : (simulation?.outcome.matchScore || 75);

  const curatedPairs = [
    { p1: 'marques-brownlee', p2: 'cleo-abram', label: 'Marques & Cleo' },
    { p1: 'sam-altman', p2: 'whitney-wolfe-herd', label: 'Sam & Whitney' },
    { p1: 'pieter-levels', p2: 'sara-dietschy', label: 'Pieter & Sara D.' },
    { p1: 'steven-bartlett', p2: 'grace-beverley', label: 'Steven & Grace' },
    { p1: 'brian-chesky', p2: 'melanie-perkins', label: 'Brian & Melanie' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in pb-12">

      {/* Header & Match Setup */}
      <div className="bg-[#12121A] p-5 sm:p-6 rounded-3xl border border-[#242436] shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-dating-pink animate-pulse"></span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Autonomous Date Simulator
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Watch autonomous agents meet, converse, think internally, and evaluate mutual romantic chemistry.
            </p>
          </div>

          {/* Quick Curated Match Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] text-gray-400 uppercase font-bold mr-1">Curated Dates:</span>
            {curatedPairs.map((cp, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const m1 = profiles.find(p => p.id === cp.p1);
                  const m2 = profiles.find(p => p.id === cp.p2);
                  if (m1 && m2) {
                    setPerson1(m1);
                    setPerson2(m2);
                  }
                }}
                className="px-2.5 py-1 rounded-xl bg-[#1C1C2A] hover:bg-dating-pink/20 hover:text-dating-pink hover:border-dating-pink/40 border border-[#2B2B40] text-xs text-gray-300 font-medium transition-all"
              >
                {cp.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pair Selector Inputs */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
          
          {/* Person 1 Selector */}
          <div className="lg:col-span-2 bg-[#181824] p-3 rounded-2xl border border-[#2B2B40] flex items-center space-x-3">
            <img
              src={person1.avatar}
              alt={person1.name}
              className="w-12 h-12 rounded-xl object-cover border border-dating-pink/40"
            />
            <div className="flex-1 min-w-0">
              <label className="text-[10px] uppercase font-bold text-dating-pink block">Agent 1</label>
              <select
                value={person1.id}
                onChange={(e) => {
                  const found = profiles.find(p => p.id === e.target.value);
                  if (found) setPerson1(found);
                }}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer truncate"
              >
                {profiles.map(p => (
                  <option key={p.id} value={p.id} className="bg-[#181824] text-white" disabled={p.id === person2.id}>
                    {p.name} ({p.analysis.personalityArchetype})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Central Spark Indicator */}
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-dating-pink to-purple-600 flex items-center justify-center text-white shadow-lg shadow-dating-pink/30 animate-pulse">
              <Heart className="w-5 h-5 fill-current" />
            </div>
          </div>

          {/* Person 2 Selector */}
          <div className="lg:col-span-2 bg-[#181824] p-3 rounded-2xl border border-[#2B2B40] flex items-center space-x-3">
            <img
              src={person2.avatar}
              alt={person2.name}
              className="w-12 h-12 rounded-xl object-cover border border-purple-500/40"
            />
            <div className="flex-1 min-w-0">
              <label className="text-[10px] uppercase font-bold text-purple-400 block">Agent 2</label>
              <select
                value={person2.id}
                onChange={(e) => {
                  const found = profiles.find(p => p.id === e.target.value);
                  if (found) setPerson2(found);
                }}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer truncate"
              >
                {profiles.map(p => (
                  <option key={p.id} value={p.id} className="bg-[#181824] text-white" disabled={p.id === person1.id}>
                    {p.name} ({p.analysis.personalityArchetype})
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>

      </div>

      {/* Date Stage Theater */}
      {simulation && (
        <div className="bg-[#0F0F17] rounded-3xl border border-[#242436] shadow-2xl overflow-hidden">
          
          {/* Venue Top Banner & Chemistry Tracker */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#181826] via-[#12121E] to-[#181826] border-b border-[#242436] flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Venue Info */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{simulation.venue.emoji}</span>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-bold text-white text-sm sm:text-base">{simulation.venue.name}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-medium">
                    {simulation.venue.type}
                  </span>
                </div>
                <p className="text-xs text-gray-400 italic">{simulation.venue.description}</p>
              </div>
            </div>

            {/* Dynamic Chemistry Meter */}
            <div className="w-full sm:w-64 bg-[#101018] p-3 rounded-2xl border border-[#2A2A3E]">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-gray-300 flex items-center space-x-1">
                  <Flame className="w-3.5 h-3.5 text-dating-pink" />
                  <span>Real-Time Chemistry</span>
                </span>
                <span className="font-bold text-dating-pink text-sm">{activeChemistry}%</span>
              </div>
              <div className="w-full h-2.5 bg-gray-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-dating-pink via-rose-500 to-dating-purple transition-all duration-700"
                  style={{ width: `${activeChemistry}%` }}
                ></div>
              </div>
            </div>

          </div>

          {/* Dialogue Log Screen */}
          <div className="p-4 sm:p-8 space-y-6 min-h-[420px] max-h-[580px] overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#171728]/40 via-[#0F0F17] to-[#0B0B11]">
            
            {simulation.turns.slice(0, currentTurnIndex + 1).map((turn, idx) => {
              const isAgent1 = turn.speakerId === person1.id;
              const speaker = isAgent1 ? person1 : person2;

              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isAgent1 ? 'items-start' : 'items-end'} space-y-2 animate-fade-in`}
                >
                  {/* Speaker Label */}
                  <div className={`flex items-center space-x-2 ${isAgent1 ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                    <img
                      src={speaker.avatar}
                      alt={speaker.name}
                      className="w-7 h-7 rounded-full object-cover border border-white/20"
                    />
                    <span className="text-xs font-bold text-gray-300">{speaker.name.split(' ')[0]}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1C1C2A] text-gray-400 capitalize">
                      {turn.sentiment}
                    </span>
                  </div>

                  {/* Spoken Message Bubble */}
                  <div
                    className={`max-w-xl p-4 rounded-2xl text-sm leading-relaxed shadow-lg ${
                      isAgent1
                        ? 'bg-[#181828] text-white border border-[#2B2B42] rounded-tl-sm'
                        : 'bg-gradient-to-r from-rose-900/40 to-purple-900/40 text-white border border-rose-500/30 rounded-tr-sm'
                    }`}
                  >
                    {turn.message}
                  </div>

                  {/* Agent Inner Monologue (The Autonomous Agent's Private Reasoning) */}
                  {showInnerMonologue && (
                    <div
                      className={`max-w-md p-2.5 rounded-xl bg-[#09090F]/90 border border-purple-500/30 text-xs text-purple-200/90 flex items-start space-x-2 ${
                        isAgent1 ? 'ml-4' : 'mr-4'
                      }`}
                    >
                      <Bot className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-bold text-purple-400 block mb-0.5">
                          Agent Private Thought:
                        </span>
                        <p className="italic">"{turn.innerMonologue}"</p>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}

            <div ref={chatEndRef} />
          </div>

          {/* Date Finished Banner / Post-Date Verdict */}
          {currentTurnIndex >= simulation.turns.length - 1 && (
            <div className="p-6 bg-gradient-to-b from-[#18182A] to-[#10101C] border-t border-[#2B2B45] animate-fade-in">
              <div className="max-w-3xl mx-auto space-y-4 text-center">
                
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Date Concluded: {simulation.outcome.mutualDecision}</span>
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-dating-pink via-rose-400 to-purple-400">
                    {simulation.outcome.matchScore}% Final Compatibility
                  </span>
                </div>

                <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
                  {simulation.outcome.verdict}
                </p>

                {/* Score Breakdown Radar Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  <div className="p-2.5 rounded-xl bg-[#12121E] border border-white/5">
                    <span className="text-[10px] text-gray-400 uppercase font-semibold block">Values</span>
                    <span className="text-sm font-bold text-rose-400">{simulation.outcome.chemistryBreakdown.values}%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#12121E] border border-white/5">
                    <span className="text-[10px] text-gray-400 uppercase font-semibold block">Lifestyle</span>
                    <span className="text-sm font-bold text-purple-400">{simulation.outcome.chemistryBreakdown.lifestyle}%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#12121E] border border-white/5">
                    <span className="text-[10px] text-gray-400 uppercase font-semibold block">Intellect</span>
                    <span className="text-sm font-bold text-sky-400">{simulation.outcome.chemistryBreakdown.intellect}%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#12121E] border border-white/5">
                    <span className="text-[10px] text-gray-400 uppercase font-semibold block">Energy</span>
                    <span className="text-sm font-bold text-amber-400">{simulation.outcome.chemistryBreakdown.energy}%</span>
                  </div>
                </div>

                {/* Both Agents Post-Date Statements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                  <div className="p-3 rounded-xl bg-[#141420] border border-[#242436] text-xs">
                    <span className="font-bold text-dating-pink text-[11px] block mb-1">
                      {person1.name}'s Agent Debrief:
                    </span>
                    <p className="text-gray-300 italic">{simulation.outcome.agent1Reflection}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#141420] border border-[#242436] text-xs">
                    <span className="font-bold text-purple-400 text-[11px] block mb-1">
                      {person2.name}'s Agent Debrief:
                    </span>
                    <p className="text-gray-300 italic">{simulation.outcome.agent2Reflection}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onViewRankings(person1)}
                    className="px-6 py-2.5 rounded-xl bg-dating-pink/20 hover:bg-dating-pink/30 text-dating-pink border border-dating-pink/40 text-xs font-bold transition-all inline-flex items-center space-x-2"
                  >
                    <Award className="w-4 h-4" />
                    <span>See Where {person2.name.split(' ')[0]} Ranks in {person1.name.split(' ')[0]}'s Top 24 Matches</span>
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* Bottom Interactive Controls */}
          <div className="p-4 bg-[#0A0A10] border-t border-[#242436] flex flex-wrap items-center justify-between gap-3">
            
            {/* Playback Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-dating-pink to-rose-600 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-dating-pink/20 hover:opacity-90"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlaying ? 'Pause Date' : 'Resume Date'}</span>
              </button>

              <button
                onClick={() => {
                  setCurrentTurnIndex(0);
                  setIsPlaying(true);
                }}
                title="Restart Date"
                className="p-2 rounded-xl bg-[#1A1A28] hover:bg-[#252538] text-gray-300 hover:text-white transition-colors border border-white/5"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Speed Switcher */}
              <div className="flex items-center space-x-1 bg-[#141420] p-1 rounded-xl border border-white/5 text-[11px]">
                <button
                  onClick={() => setPlaybackSpeed(3500)}
                  className={`px-2 py-0.5 rounded-lg ${playbackSpeed === 3500 ? 'bg-dating-pink text-white font-bold' : 'text-gray-400'}`}
                >
                  1x
                </button>
                <button
                  onClick={() => setPlaybackSpeed(2000)}
                  className={`px-2 py-0.5 rounded-lg ${playbackSpeed === 2000 ? 'bg-dating-pink text-white font-bold' : 'text-gray-400'}`}
                >
                  1.5x
                </button>
                <button
                  onClick={() => setPlaybackSpeed(1000)}
                  className={`px-2 py-0.5 rounded-lg ${playbackSpeed === 1000 ? 'bg-dating-pink text-white font-bold' : 'text-gray-400'}`}
                >
                  Fast
                </button>
              </div>
            </div>

            {/* View Toggles */}
            <div className="flex items-center space-x-3 text-xs">
              <button
                onClick={() => setShowInnerMonologue(!showInnerMonologue)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border transition-all ${
                  showInnerMonologue
                    ? 'bg-purple-900/30 text-purple-300 border-purple-500/40'
                    : 'bg-[#181824] text-gray-400 border-white/5'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Show Agent Thoughts</span>
              </button>

              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-2 rounded-xl border transition-all ${
                  soundEnabled
                    ? 'bg-[#181824] text-gray-300 border-white/5'
                    : 'bg-rose-950/20 text-gray-500 border-rose-500/20'
                }`}
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
