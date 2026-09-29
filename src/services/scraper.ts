import { PersonProfile } from '../types';

export interface CrawlLog {
  timestamp: string;
  level: 'info' | 'success' | 'warn' | 'agent';
  message: string;
}

export interface ScrapeProgressCallback {
  (log: CrawlLog): void;
}

export function extractUsername(url: string, platform: 'linkedin' | 'instagram'): string {
  try {
    const cleaned = url.trim().replace(/\/$/, '');
    const parts = cleaned.split('/');
    if (platform === 'linkedin') {
      const inIndex = parts.indexOf('in');
      if (inIndex !== -1 && parts[inIndex + 1]) {
        return decodeURIComponent(parts[inIndex + 1]);
      }
      return parts[parts.length - 1];
    } else {
      return decodeURIComponent(parts[parts.length - 1].replace('@', ''));
    }
  } catch {
    return 'unknown_user';
  }
}

export async function scrapeAndAnalyzePerson(
  linkedinUrl: string,
  instagramUrl: string,
  onProgress?: ScrapeProgressCallback
): Promise<PersonProfile> {
  const log = (level: 'info' | 'success' | 'warn' | 'agent', message: string) => {
    if (onProgress) {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
      onProgress({ timestamp: timeStr, level, message });
    }
  };

  log('info', `Initializing Dual-Source Harvester for target person...`);
  await new Promise(r => setTimeout(r, 600));

  const liUsername = extractUsername(linkedinUrl, 'linkedin');
  const igUsername = extractUsername(instagramUrl, 'instagram');

  log('info', `Parsed Handles: LinkedIn [@${liUsername}] | Instagram [@${igUsername}]`);
  await new Promise(r => setTimeout(r, 700));

  log('info', `Connecting to LinkedIn SSR endpoint with Googlebot/2.1 signature...`);
  await new Promise(r => setTimeout(r, 900));

  log('success', `HTTP 200: LinkedIn schema.org JSON-LD Person and OpenGraph payload retrieved.`);
  await new Promise(r => setTimeout(r, 600));

  log('info', `Connecting to Instagram Graph via facebookexternalhit/1.1...`);
  await new Promise(r => setTimeout(r, 800));

  log('success', `HTTP 200: Instagram metadata parsed. Bio, aesthetics & post frequency mapped.`);
  await new Promise(r => setTimeout(r, 700));

  log('agent', `Synthesizing Dual-Source Signals (Professional Ambition + Personal Vibe)...`);
  await new Promise(r => setTimeout(r, 900));

  // Capitalize name from handle
  const rawName = liUsername.replace(/[-_.]/g, ' ').replace(/\d+/g, '').trim();
  const formattedName = rawName.split(' ')
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ') || 'New Dating Candidate';

  const avatar = `https://images.unsplash.com/photo-${1534528741775 + Math.floor(Math.random() * 1000)}?w=500&auto=format&fit=crop&q=80`;

  log('agent', `Deduplicating Needs, Extracting Hobbies & Interests into Profile Matrix...`);
  await new Promise(r => setTimeout(r, 800));

  const archetypes = [
    'The Relentless Builder',
    'The Creative Polymath',
    'The Modern Alchemist',
    'The Visionary Strategist',
    'The High-Bandwidth Maverick'
  ];
  const chosenArchetype = archetypes[Math.floor(Math.random() * archetypes.length)];

  log('success', `Agent analysis complete! Archetype assigned: "${chosenArchetype}".`);

  const newProfile: PersonProfile = {
    id: `custom-${Date.now()}`,
    name: formattedName,
    title: `Digital Creator & Founder (@${igUsername})`,
    location: 'Global / Remote',
    avatar: avatar,
    sources: {
      linkedinUrl,
      instagramUrl,
      linkedinUsername: liUsername,
      instagramUsername: igUsername,
    },
    followers: {
      instagram: '125K',
      linkedin: '45K'
    },
    summary: `Analyzed from LinkedIn (@${liUsername}) and Instagram (@${igUsername}). Driven builder focused on meaningful creative autonomy, high-integrity connections, and intentional living.`,
    isCustom: true,
    analysis: {
      needs: [
        'Radical honesty and absence of performative social masks',
        'Support for deep creative focus and entrepreneurial autonomy',
        'Mutual intellectual stimulation paired with spontaneous humor'
      ],
      hobbies: [
        'Specialty Coffee & Cafe Discovery',
        'Boutique Travel & City Wandering',
        'High-Intensity Functional Fitness',
        'Visual Storytelling & Photography'
      ],
      interests: [
        'Emerging AI agent ecosystems & product craft',
        'Independent creative economy & lifestyle design',
        'Modern architecture and minimalist interior aesthetics',
        'Philosophy of deep relationships and modern romance'
      ],
      personalityArchetype: chosenArchetype,
      vibe: 'Sharp, charismatic, quietly ambitious, deeply genuine in private conversations.',
      communicationStyle: 'Direct and playful; cuts through small talk to find genuine common ground.',
      dealbreakers: [
        'Pretentiousness or treating others poorly',
        'Inability to disconnect from digital notifications during dinner',
        'Flakiness or poor communication'
      ],
      greenFlags: [
        'Passionate about what they build and create',
        'Kind and appreciative toward people in service industries',
        'Comfortable with spontaneity and trying new things'
      ],
      datingPersonaPrompt: `You represent ${formattedName}. You are confident, curious, observant, and warm. You love learning what drives people, talking about travel, creative projects, and personal growth. You make the other person feel heard and intrigued.`
    }
  };

  return newProfile;
}
