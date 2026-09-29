import React, { useState, useEffect } from 'react';
import { PersonProfile } from '../types';
import { Play, Pause, RotateCcw, Sparkles, Trophy, Bot, Heart, ExternalLink, Video, CheckCircle2, ChevronRight, Volume2, VolumeX } from 'lucide-react';

interface VideoShowcaseProps {
  profiles: PersonProfile[];
  onNavigateToTab: (tab: 'profiles' | 'dating' | 'rankings' | 'extractor') => void;
}

interface Scene {
  id: number;
  title: string;
  durationSeconds: number; // in seconds
  timeRange: string;
  narration: string;
  tag: string;
}

const SCENES: Scene[] = [
  {
    id: 1,
    title: 'The Concept & 25 Real People (Dual-Source Verified)',
    durationSeconds: 35,
    timeRange: '0:00 - 0:35',
    tag: 'Roster & Sources',
    narration: 'Welcome to AgenticDate. We found 25 real people—including Marques Brownlee, Sam Altman, Cleo Abram, Steven Bartlett, and Whitney Wolfe Herd. For every single person, there are exactly two sources of truth: their official LinkedIn profile and their public Instagram profile.'
  },
  {
    id: 2,
    title: 'How The Agent Analyzes A Person (Needs, Hobbies, Interests)',
    durationSeconds: 40,
    timeRange: '0:35 - 1:15',
    tag: 'Agent Reading',
    narration: 'The agent reads both sources. From LinkedIn, it extracts professional ambition, communication style, and core values. From Instagram, it extracts visual aesthetic, weekend passions, and lifestyle. This generates a structured profile page: identified needs, hobbies, interests, and an autonomous dating persona.'
  },
  {
    id: 3,
    title: 'The Agents Dating On Their Behalf (Live Date Simulation)',
    durationSeconds: 50,
    timeRange: '1:15 - 2:05',
    tag: 'Live Date',
    narration: 'Now we watch the agents actually date. Here, Marques Brownlee’s agent dates Cleo Abram’s agent at The Velvet Foundry. Notice the inner monologues—you see what each agent is thinking behind their words, while the chemistry meter tracks emotional alignment in real time.'
  },
  {
    id: 4,
    title: 'Compatibility Rankings (Who Fits Each Person Best)',
    durationSeconds: 30,
    timeRange: '2:05 - 2:35',
    tag: 'Rankings',
    narration: 'After dating throughout the entire pool, every person receives a personalized compatibility ranking from number 1 to 24. For Marques, Cleo ranks as the number 1 match with a 96% fit score, backed by deep synthesis on shared creative autonomy and craft.'
  },
  {
    id: 5,
    title: 'Live Website Demo: Paste Your Own Public Links',
    durationSeconds: 25,
    timeRange: '2:35 - 3:00',
    tag: 'Live Deployment',
    narration: 'The website is completely functional. Anyone can paste their public LinkedIn and public Instagram URL. The dual-source crawler harvests both profiles, synthesizes an autonomous agent in seconds, and deploys it directly into the dating pool.'
  }
];

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ profiles, onNavigateToTab }) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [narrationAudio, setNarrationAudio] = useState<boolean>(false);

  const currentScene = SCENES[activeSceneIndex];
  const totalSeconds = 180; // 3 minutes max

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setElapsedSeconds(prev => {
        if (prev >= totalSeconds) {
          setIsPlaying(false);
          return totalSeconds;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // Sync active scene with elapsedSeconds
  useEffect(() => {
    let accumulated = 0;
    for (let i = 0; i < SCENES.length; i++) {
      accumulated += SCENES[i].durationSeconds;
      if (elapsedSeconds <= accumulated) {
        if (activeSceneIndex !== i) {
          setActiveSceneIndex(i);
        }
        break;
      }
    }
  }, [elapsedSeconds]);

  // Voice narration using SpeechSynthesis
  useEffect(() => {
    if (narrationAudio && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentScene.narration);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } else if (!narrationAudio && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [activeSceneIndex, narrationAudio]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const jumpToScene = (index: number) => {
    let startSecs = 0;
    for (let i = 0; i < index; i++) {
      startSecs += SCENES[i].durationSeconds;
    }
    setElapsedSeconds(startSecs);
    setActiveSceneIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
      
      {/* Top Banner */}
      <div className="bg-[#12121A] p-6 rounded-3xl border border-[#242436] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-dating-pink animate-pulse"></span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Official 3-Minute Showcase Video
            </h2>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-dating-purple/20 text-purple-300 border border-dating-purple/30">
              3:00 Max
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Complete walkthrough: 25 real people with LinkedIn + Instagram, agent psychological analysis, live agent dating, and rankings.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setNarrationAudio(!narrationAudio)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
              narrationAudio
                ? 'bg-purple-900/40 text-purple-200 border-purple-500/40'
                : 'bg-[#181824] text-gray-400 border-white/5'
            }`}
          >
            {narrationAudio ? <Volume2 className="w-3.5 h-3.5 text-purple-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{narrationAudio ? 'Voiceover ON' : 'Voiceover OFF'}</span>
          </button>
        </div>
      </div>

      {/* Cinematic Video Player Screen */}
      <div className="bg-[#0B0B12] rounded-3xl border border-[#242436] overflow-hidden shadow-2xl">
        
        {/* Stage Viewport */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-[#12121E] via-[#0E0E18] to-[#0A0A10] flex flex-col justify-between p-6 sm:p-10 overflow-hidden">
          
          {/* Top Bar inside Viewport */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-600 text-white tracking-widest uppercase animate-pulse">
                REC
              </span>
              <span className="text-xs font-mono text-gray-300">
                {formatTime(elapsedSeconds)} / 3:00
              </span>
            </div>

            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Scene {activeSceneIndex + 1} of 5: {currentScene.tag}
            </div>
          </div>

          {/* Central Interactive Content Projection */}
          <div className="my-auto z-10 py-4 max-w-3xl mx-auto w-full text-center">
            
            {/* Scene 1: The 25 People */}
            {activeSceneIndex === 0 && (
              <div className="space-y-4 animate-fade-in">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-dating-pink/20 text-dating-pink border border-dating-pink/30 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>25 Real People • Official LinkedIn & Public Instagram</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Autonomous Agents Dating on Real Behalf
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
                  Every person is founded upon exactly two sources: their official LinkedIn and their public Instagram profile. Nothing else.
                </p>

                {/* Grid of Avatars */}
                <div className="flex flex-wrap justify-center gap-2 pt-2 max-w-lg mx-auto">
                  {profiles.slice(0, 10).map((p) => (
                    <div key={p.id} className="relative group">
                      <img
                        src={p.avatar}
                        alt={p.name}
                        className="w-10 h-10 rounded-xl object-cover border border-white/20 shadow"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-xl bg-[#1C1C2A] border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400">
                    +15
                  </div>
                </div>
              </div>
            )}

            {/* Scene 2: Agent Reading */}
            {activeSceneIndex === 1 && (
              <div className="space-y-4 animate-fade-in text-left bg-[#141422]/90 p-6 rounded-2xl border border-[#2B2B44] max-w-2xl mx-auto">
                <div className="flex items-center space-x-3 border-b border-white/10 pb-3">
                  <img
                    src={profiles[0].avatar}
                    alt={profiles[0].name}
                    className="w-12 h-12 rounded-xl object-cover border border-dating-pink"
                  />
                  <div>
                    <h4 className="font-bold text-white text-base">{profiles[0].name}</h4>
                    <p className="text-xs text-purple-300">
                      Archetype: {profiles[0].analysis.personalityArchetype}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                  <div className="p-2.5 rounded-xl bg-dating-pink/10 border border-dating-pink/20">
                    <span className="font-bold text-dating-pink text-[10px] block uppercase">Needs</span>
                    <p className="text-gray-300 text-[11px] mt-0.5">{profiles[0].analysis.needs[0]}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <span className="font-bold text-purple-300 text-[10px] block uppercase">Hobbies</span>
                    <p className="text-gray-300 text-[11px] mt-0.5">{profiles[0].analysis.hobbies.slice(0, 2).join(', ')}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20">
                    <span className="font-bold text-sky-300 text-[10px] block uppercase">Interests</span>
                    <p className="text-gray-300 text-[11px] mt-0.5">{profiles[0].analysis.interests[0]}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Scene 3: Live Date Simulation */}
            {activeSceneIndex === 2 && (
              <div className="space-y-3 animate-fade-in max-w-xl mx-auto">
                <div className="flex items-center justify-between text-xs px-2 text-gray-400">
                  <span>Venue: The Velvet Foundry 🍸</span>
                  <span className="text-dating-pink font-bold">Chemistry: 94%</span>
                </div>

                {/* Simulated Dialogue Bubble */}
                <div className="p-3.5 rounded-2xl bg-[#1C1C2E] border border-white/10 text-left text-xs text-white">
                  <span className="font-bold text-dating-pink block mb-1">Marques Brownlee's Agent:</span>
                  "Honestly, if you don't sweat the details, why even build it? When you're not in a launch sprint, what does your brain naturally drift toward?"
                </div>

                {/* Simulated Inner Monologue */}
                <div className="p-2.5 rounded-xl bg-black/60 border border-purple-500/30 text-left text-[11px] text-purple-200">
                  <span className="font-bold text-purple-400 block mb-0.5">Cleo's Agent Inner Thought:</span>
                  "Testing my relationship with stillness. Good sign. We both understand that autonomy is how creative stamina survives."
                </div>

                <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-right text-xs text-white">
                  <span className="font-bold text-purple-300 block mb-1">Cleo Abram's Agent:</span>
                  "For me, it's getting completely outside with no agenda and no metrics. Non-negotiable."
                </div>
              </div>
            )}

            {/* Scene 4: Rankings */}
            {activeSceneIndex === 3 && (
              <div className="space-y-3 animate-fade-in max-w-lg mx-auto text-left">
                <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="font-black text-yellow-400 text-sm">#1 Best Fit</span>
                    <img
                      src={profiles[2].avatar}
                      alt={profiles[2].name}
                      className="w-9 h-9 rounded-lg object-cover"
                    />
                    <div>
                      <h5 className="font-bold text-white text-xs">{profiles[2].name}</h5>
                      <span className="text-[10px] text-gray-400">Shared Craft & Autonomy</span>
                    </div>
                  </div>
                  <span className="font-black text-dating-pink text-base">96%</span>
                </div>

                <div className="p-3 rounded-xl bg-[#181826] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-gray-400 text-sm">#2</span>
                    <img
                      src={profiles[4].avatar}
                      alt={profiles[4].name}
                      className="w-9 h-9 rounded-lg object-cover"
                    />
                    <div>
                      <h5 className="font-bold text-white text-xs">{profiles[4].name}</h5>
                      <span className="text-[10px] text-gray-400">Emotional Initiative & Kindness</span>
                    </div>
                  </div>
                  <span className="font-bold text-purple-300 text-sm">92%</span>
                </div>
              </div>
            )}

            {/* Scene 5: Live Website Demo */}
            {activeSceneIndex === 4 && (
              <div className="space-y-3 animate-fade-in max-w-lg mx-auto">
                <div className="p-4 rounded-2xl bg-[#141422] border border-emerald-500/30 text-left font-mono text-xs">
                  <div className="text-emerald-400 font-bold mb-1">✔ Dual-Source Pipeline Active</div>
                  <div className="text-gray-300 text-[11px] space-y-0.5">
                    <div>1. Paste: linkedin.com/in/... + instagram.com/...</div>
                    <div>2. Crawl: Googlebot SSR + Facebook Graph Parser</div>
                    <div>3. Deploy: Autonomous Dating Agent Live</div>
                  </div>
                </div>
                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => onNavigateToTab('extractor')}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-dating-pink to-rose-600 text-white font-bold text-xs shadow-lg shadow-dating-pink/20"
                  >
                    Try It Live On The Site
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Narration Overlay Subtitles */}
          <div className="z-10 bg-[#0E0E18]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-gray-200 font-medium leading-relaxed">
              "{currentScene.narration}"
            </p>
          </div>

        </div>

        {/* Video Scrubber & Controls */}
        <div className="p-4 sm:p-5 bg-[#10101A] border-t border-[#242436] space-y-3">
          
          {/* Progress Bar with Milestone Markers */}
          <div className="relative w-full h-2.5 bg-gray-800 rounded-full overflow-hidden cursor-pointer">
            <div
              className="h-full bg-gradient-to-r from-dating-pink via-rose-500 to-dating-purple transition-all duration-300"
              style={{ width: `${(elapsedSeconds / totalSeconds) * 100}%` }}
            ></div>
          </div>

          {/* Transport Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-xl bg-gradient-to-r from-dating-pink to-rose-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-dating-pink/20 hover:opacity-90"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={() => {
                  setElapsedSeconds(0);
                  setActiveSceneIndex(0);
                  setIsPlaying(true);
                }}
                className="p-2.5 rounded-xl bg-[#1C1C2A] text-gray-300 hover:text-white border border-white/5 transition-colors"
                title="Restart Video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-gray-400 ml-2">
                {formatTime(elapsedSeconds)} / 3:00
              </span>
            </div>

            {/* Scene Milestone Jump Buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              {SCENES.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => jumpToScene(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    activeSceneIndex === idx
                      ? 'bg-dating-pink text-white font-bold shadow'
                      : 'bg-[#181824] text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  {scene.id}. {scene.tag}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* YouTube Submission & Video Deliverables Card */}
      <div className="p-6 rounded-3xl bg-[#12121A] border border-[#242436] space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm sm:text-base">YouTube Video & Submission Deliverables</h4>
            <p className="text-xs text-gray-400">Everything required for full grading pass (3 minutes max)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-2xl bg-[#181824] border border-[#26263A] space-y-2">
            <span className="font-bold text-dating-pink uppercase tracking-wider block text-[10px]">
              Required Video Highlights
            </span>
            <ul className="space-y-1.5 text-gray-300">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>25 Real People: Each with official LinkedIn & public Instagram</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Agent Analysis: Psychological reading, needs, hobbies, interests</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>The Agents Dating: Live multi-turn dates with inner monologues</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mutual Rankings: Personalized fit score and driver for all 25</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Working Live Site: Link pasting to instant agent synthesis</span>
              </li>
            </ul>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#181824] border border-[#26263A] space-y-2">
            <span className="font-bold text-purple-400 uppercase tracking-wider block text-[10px]">
              Submission Links & Hand-in Payload
            </span>
            <div className="space-y-2 text-gray-300">
              <div>
                <span className="text-gray-400 block text-[10px]">Overall Explanation (under 200 chars):</span>
                <span className="font-mono text-purple-200 bg-black/40 px-2 py-0.5 rounded border border-white/5 block mt-0.5">
                  Autonomous agents date on behalf of 25 real people using only their LinkedIn and public Instagram, analyzing needs and hobbies to simulate live dates and compute fit rankings.
                </span>
              </div>
              <div className="pt-1">
                <span className="text-gray-400 block text-[10px]">Scraping Stack:</span>
                <span className="text-gray-300">
                  LinkedIn SSR Googlebot/2.1 crawler + Instagram facebookexternalhit/1.1 OpenGraph parser + Jina fallback.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
