import { PersonProfile, DateSimulation, DialogueTurn, CompatibilityRankItem } from '../types';

export const DATE_VENUES = [
  {
    name: 'The Velvet Foundry',
    type: 'Hidden SoHo Speakeasy',
    description: 'Dim amber lighting, bespoke cocktails, quiet vinyl jazz humming in the background.',
    emoji: '🍸'
  },
  {
    name: 'Komorebi Roastery',
    type: 'Minimalist Japanese Matcha & Coffee House',
    description: 'Clean cedar tables, handcrafted ceramics, sunlight streaming through bamboo blinds.',
    emoji: '🍵'
  },
  {
    name: 'Aetheria Observatory',
    type: 'Rooftop Botanical Skyline Lounge',
    description: 'Panoramic city skyline views at dusk, lush flora, gentle ambient electronic soundscapes.',
    emoji: '✨'
  },
  {
    name: 'Archive 1984',
    type: 'Curated Indie Art & Rare Book Gallery',
    description: 'Surrounded by rare photography monographs, industrial design sketches, and quiet corners.',
    emoji: '📚'
  }
];

export function calculateCompatibility(personA: PersonProfile, personB: PersonProfile): {
  matchScore: number;
  primaryDriver: string;
  agentRationale: string;
  breakdown: { values: number; lifestyle: number; intellect: number; energy: number; };
  bestMomentQuote: string;
} {
  // Deterministic seed based on ids
  const combined = [personA.id, personB.id].sort().join(':');
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = (hash << 5) - hash + combined.charCodeAt(i);
    hash |= 0;
  }
  const normalized = Math.abs(hash);

  // Check shared hobbies
  const hobbiesA = new Set(personA.analysis.hobbies.map(h => h.toLowerCase()));
  let sharedHobbyCount = 0;
  for (const h of personB.analysis.hobbies) {
    if (hobbiesA.has(h.toLowerCase()) || hobbiesA.has(h.split(' ')[0].toLowerCase())) {
      sharedHobbyCount++;
    }
  }

  // Calculate scores
  const baseValues = 75 + (normalized % 22);
  const baseLifestyle = 72 + ((normalized >> 2) % 24);
  const baseIntellect = 80 + ((normalized >> 4) % 18);
  const baseEnergy = 70 + ((normalized >> 6) % 26);

  const values = Math.min(99, Math.max(68, baseValues));
  const lifestyle = Math.min(98, Math.max(65, baseLifestyle));
  const intellect = Math.min(99, Math.max(74, baseIntellect));
  const energy = Math.min(98, Math.max(64, baseEnergy));

  const matchScore = Math.round((values * 0.3) + (lifestyle * 0.25) + (intellect * 0.25) + (energy * 0.2));

  // Determine drivers and rationales
  const drivers = [
    `Complementary creative ambition and deep craft respect`,
    `Shared reverence for autonomy and intellectual velocity`,
    `High emotional attunement and mutual groundedness`,
    `Uncompromising authenticity and rapid-fire wit`,
    `Harmonious balance of intensity and playful humor`
  ];
  const primaryDriver = drivers[normalized % drivers.length];

  const rationales = [
    `Both agents identified a rare equilibrium: ${personA.name}'s focus on ${personA.analysis.hobbies[0] || 'craft'} resonates seamlessly with ${personB.name}'s drive for ${personB.analysis.interests[0] || 'innovation'}. Neither feels the need to perform.`,
    `In simulation, their conversation bypassed trivialities immediately. ${personA.name}'s need for "${personA.analysis.needs[0]}" was intuitively honored by ${personB.name}'s communication style.`,
    `Exceptional intellectual and lifestyle resonance. Both value independent creative sovereignty, allowing them to support each other's relentless output while providing emotional stillness.`,
    `A vibrant energetic match: mutual curiosity sparked during debates on modern culture and personal growth, with neither ego attempting to dominate the interaction.`
  ];
  const agentRationale = rationales[normalized % rationales.length];

  const quotes = [
    `"The moment you mentioned wanting to build something that lasts without the noise, I knew this wasn't an ordinary date."`,
    `"Most people ask what you do. You asked what I look forward to when I wake up at 6am."`,
    `"I thought I was the only person who cared about this level of detail. It is deeply refreshing to be understood."`,
    `"You have this quiet confidence where you don't need to prove anything. That's the rarest trait in the room."`
  ];
  const bestMomentQuote = quotes[normalized % quotes.length];

  return {
    matchScore,
    primaryDriver,
    agentRationale,
    breakdown: { values, lifestyle, intellect, energy },
    bestMomentQuote
  };
}

export function generateRankingsForPerson(target: PersonProfile, allProfiles: PersonProfile[]): CompatibilityRankItem[] {
  const others = allProfiles.filter(p => p.id !== target.id);
  const ranked = others.map(other => {
    const comp = calculateCompatibility(target, other);
    return {
      targetPersonId: other.id,
      rank: 0,
      matchScore: comp.matchScore,
      primaryDriver: comp.primaryDriver,
      agentRationale: comp.agentRationale,
      breakdown: comp.breakdown,
      bestMomentQuote: comp.bestMomentQuote
    };
  });

  // Sort descending by matchScore
  ranked.sort((a, b) => b.matchScore - a.matchScore);

  // Assign ranks 1 to N
  ranked.forEach((item, index) => {
    item.rank = index + 1;
  });

  return ranked;
}

export function generateDateSimulation(personA: PersonProfile, personB: PersonProfile): DateSimulation {
  const combined = [personA.id, personB.id].sort().join(':');
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = (hash << 5) - hash + combined.charCodeAt(i);
    hash |= 0;
  }
  const normalized = Math.abs(hash);
  const venue = DATE_VENUES[normalized % DATE_VENUES.length];

  const comp = calculateCompatibility(personA, personB);

  // Synthesize dynamic 6-turn date
  const turns: DialogueTurn[] = [
    {
      speakerId: personA.id,
      speakerName: personA.name,
      message: `Hey ${personB.name.split(' ')[0]}. Great to meet you in person. This venue has an incredible feel to it—quiet enough that we don't have to shout over generic lounge music.`,
      innerMonologue: `Checking for posture and eye contact. They seem present, not glued to their phone. Let's see if their real-world presence matches their public profile.`,
      chemistryScore: 68,
      sentiment: 'curious'
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      message: `Right? I noticed the lighting immediately—warm incandescent tones, zero harsh fluorescents. I was reading up on how you approach ${personA.analysis.hobbies[0] || 'your craft'}. It's rare to see someone that obsessed with the micro-details.`,
      innerMonologue: `They noticed the environment right away. Good sign. They actually did their homework on what I care about instead of leading with small talk.`,
      chemistryScore: 76,
      sentiment: 'thoughtful'
    },
    {
      speakerId: personA.id,
      speakerName: personA.name,
      message: `Honestly, if you don't sweat the details, why even build it? But I'm curious: when you're not in the middle of a massive launch or project, what does your brain naturally drift toward? Where do you go to recharge?`,
      innerMonologue: `Testing their relationship with stillness. Can they handle downtime without panicking, or are they trapped in chronic output mode?`,
      chemistryScore: 83,
      sentiment: 'curious'
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      message: `For me, it's ${personB.analysis.hobbies[1] || personB.analysis.hobbies[0] || 'getting outside and clearing my head'}. No agenda, no metrics. Just total disconnect. Most people look at me like I'm crazy when I disappear for two days without Slack, but it's non-negotiable.`,
      innerMonologue: `Big test here: are they going to judge the need for solitude, or do they understand that autonomy is how creative stamina survives?`,
      chemistryScore: 89,
      sentiment: 'spark'
    },
    {
      speakerId: personA.id,
      speakerName: personA.name,
      message: `Non-negotiable boundaries are the single most attractive quality. The world tries to commoditize everyone's attention 24/7. Having a partner who respects that sanctuary changes everything.`,
      innerMonologue: `Mutual boundary alignment confirmed. That's usually where 90% of friction happens. We're operating on the exact same frequency.`,
      chemistryScore: 94,
      sentiment: 'spark'
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      message: `Completely. You know, I expected this date to be interesting, but I didn't expect to feel this relaxed this fast. Let's finish these drinks and go for a walk outside—I want to hear your contrarian take on ${personB.analysis.interests[0] || 'where this world is headed'}.`,
      innerMonologue: `Authentic spark detected. No defensive walls, zero games. Definitely locking in date two.`,
      chemistryScore: comp.matchScore,
      sentiment: 'flirty'
    }
  ];

  return {
    id: `date-${personA.id}-${personB.id}`,
    person1Id: personA.id,
    person2Id: personB.id,
    venue,
    turns,
    outcome: {
      matchScore: comp.matchScore,
      verdict: comp.agentRationale,
      mutualDecision: comp.matchScore >= 85 ? 'Second Date Planned' : 'Great Connection / Exploring',
      agent1Reflection: `${personA.name}'s Agent: "Deep respect for ${personB.name}'s boundaries and craft. Zero friction, instant mutual understanding."`,
      agent2Reflection: `${personB.name}'s Agent: "One of the most effortless conversations in the dating pool. Both intellectual and energetic sparks are firing."`,
      chemistryBreakdown: comp.breakdown
    }
  };
}
