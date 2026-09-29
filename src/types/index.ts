export interface SocialSources {
  linkedinUrl: string;
  instagramUrl: string;
  linkedinUsername?: string;
  instagramUsername?: string;
}

export interface AgentAnalysis {
  needs: string[];
  hobbies: string[];
  interests: string[];
  personalityArchetype: string;
  vibe: string;
  communicationStyle: string;
  dealbreakers: string[];
  greenFlags: string[];
  datingPersonaPrompt: string;
}

export interface PersonProfile {
  id: string;
  name: string;
  title: string;
  location: string;
  avatar: string;
  sources: SocialSources;
  followers?: {
    instagram?: string;
    linkedin?: string;
  };
  summary: string;
  analysis: AgentAnalysis;
  isCustom?: boolean;
}

export interface DialogueTurn {
  speakerId: string;
  speakerName: string;
  message: string;
  innerMonologue: string;
  chemistryScore: number; // 0 - 100
  sentiment: 'curious' | 'flirty' | 'amused' | 'thoughtful' | 'spark';
}

export interface DateSimulation {
  id: string;
  person1Id: string;
  person2Id: string;
  venue: {
    name: string;
    type: string;
    description: string;
    emoji: string;
  };
  turns: DialogueTurn[];
  outcome: {
    matchScore: number;
    verdict: string;
    mutualDecision: 'Second Date Planned' | 'Great Connection / Exploring' | 'Better As Friends' | 'Spark Discovered';
    agent1Reflection: string;
    agent2Reflection: string;
    chemistryBreakdown: {
      values: number;
      lifestyle: number;
      intellect: number;
      energy: number;
    };
  };
}

export interface CompatibilityRankItem {
  targetPersonId: string;
  rank: number;
  matchScore: number;
  primaryDriver: string;
  agentRationale: string;
  breakdown: {
    values: number;
    lifestyle: number;
    intellect: number;
    energy: number;
  };
  bestMomentQuote: string;
}

export interface PersonRankings {
  personId: string;
  rankings: CompatibilityRankItem[];
}
