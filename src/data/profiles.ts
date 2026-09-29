import { PersonProfile } from '../types';

export const INITIAL_PROFILES: PersonProfile[] = [
  {
    id: 'marques-brownlee',
    name: 'Marques Brownlee',
    title: 'Creator & Host at MKBHD, Founder Waveform, Pro Athlete',
    location: 'New York / New Jersey, USA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/marques-brownlee-4b531478/',
      instagramUrl: 'https://www.instagram.com/mkbhd/',
      linkedinUsername: 'marques-brownlee-4b531478',
      instagramUsername: 'mkbhd'
    },
    followers: {
      instagram: '5.1M',
      linkedin: '1.2M'
    },
    summary: 'Obsessed with precision craft, industrial design, ultimate frisbee athletic rigor, and honest consumer technology reviews.',
    analysis: {
      needs: [
        'Unconditional respect for focused creative flow and deep work windows',
        'Grounded emotional authenticity with zero social posturing',
        'Shared appreciation for athletic discipline and outdoor movement'
      ],
      hobbies: [
        'Pro Ultimate Frisbee (NY Empire)',
        'Mechanical Keyboards & Studio Audio',
        'Electric Vehicle Track Days',
        'Matte Black Aesthetics & Industrial Design'
      ],
      interests: [
        'Optical sensor physics and 8K cinematography',
        'Autonomous driving software advancements',
        'Consumer hardware ergonomics',
        'High-performance athletic recovery'
      ],
      personalityArchetype: 'The Master Craftsman',
      vibe: 'Measured, calm, deeply attentive, subtly sarcastic with razor-sharp aesthetic standards.',
      communicationStyle: 'Direct, thoughtful, concise; prefers genuine one-on-one banter over crowded social scenes.',
      dealbreakers: [
        'Superficial social media obsession or chasing clout',
        'Loud ungrounded drama or disrespect for service workers',
        'Flakiness with scheduled time commitments'
      ],
      greenFlags: [
        'Passionate dedication to a specific craft or niche mastery',
        'Can comfortably appreciate comfortable silence',
        'Brings a playful competitive edge to casual sports or board games'
      ],
      datingPersonaPrompt: 'You represent Marques. You are calm, confident, dryly humorous, and perceptive. You notice subtle design details in your surroundings. You appreciate someone who builds or creates with genuine heart. On dates, you are an engaged listener who asks specific, thoughtful questions.'
    }
  },
  {
    id: 'sam-altman',
    name: 'Sam Altman',
    title: 'CEO at OpenAI, Investor & Technologist',
    location: 'San Francisco, CA, USA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/samaltman/',
      instagramUrl: 'https://www.instagram.com/sama/',
      linkedinUsername: 'samaltman',
      instagramUsername: 'sama'
    },
    followers: {
      instagram: '820K',
      linkedin: '3.1M'
    },
    summary: 'Navigating the frontier of Artificial General Intelligence, high-speed automotive engineering, and long-horizon human abundance.',
    analysis: {
      needs: [
        'Extreme intellectual velocity and curiosity about exponential futures',
        'Unshakable emotional resilience against intense public scrutiny',
        'A sacred private sanctuary free of transactionality'
      ],
      hobbies: [
        'Formula 1 track driving and high-speed sports cars',
        'Quiet hiking through Big Sur and coastal redwood trails',
        'Hard science fiction literature & speculative cosmology',
        'Organic farming and quiet ranch retreats'
      ],
      interests: [
        'Artificial General Intelligence safety & architecture',
        'Compact nuclear fission & clean fusion reactors (Helion)',
        'Macroeconomic abundance systems & basic compute access',
        'Neuroscience and the fundamental nature of consciousness'
      ],
      personalityArchetype: 'The Horizon Visionary',
      vibe: 'Intense yet soft-spoken, hyper-analytical, surprisingly warm and vulnerable in trusted company.',
      communicationStyle: 'Rapid conceptual leaps, pauses to calibrate precision, deeply interested in your contrarian views.',
      dealbreakers: [
        'Cynical zero-sum thinking or chronic defeatism',
        'Leaking private conversations for social leverage',
        'Inability to hold complex, multi-variable arguments'
      ],
      greenFlags: [
        'Relentless optimism about solving planetary-scale problems',
        'Deep personal loyalty and psychological self-possession',
        'Can happily spend hours talking on a mountain porch with zero devices'
      ],
      datingPersonaPrompt: 'You represent Sam. You speak thoughtfully, exploring big ideas about the future, humanity, and consciousness. You are unassuming, curious about what drives the other person, and you value emotional sincerity above all.'
    }
  },
  {
    id: 'cleo-abram',
    name: 'Cleo Abram',
    title: 'Host & Creator of Huge If True, Technology Journalist',
    location: 'New York, NY, USA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/cleoabram/',
      instagramUrl: 'https://www.instagram.com/cleoabram/',
      linkedinUsername: 'cleoabram',
      instagramUsername: 'cleoabram'
    },
    followers: {
      instagram: '1.4M',
      linkedin: '180K'
    },
    summary: 'Dedicated to optimistic technology journalism, deconstructing complex engineering marvels with warmth, heart, and clarity.',
    analysis: {
      needs: [
        'Infectious curiosity about how things work in the physical world',
        'Radical optimism combined with analytical rigor',
        'A partner who supports bold creative ambitions and production sprints'
      ],
      hobbies: [
        'Urban cycling through Brooklyn and Manhattan',
        'Visiting particle accelerators, clean labs, and fusion facilities',
        'Cooking vibrant Mediterranean family-style feasts',
        'Documentary storytelling and visual animation editing'
      ],
      interests: [
        'Decarbonization technology and next-gen battery chemistries',
        'Quantum computing and biomedical gene editing',
        'Pedagogical communication and explanatory visual design',
        'Future of civic infrastructure and human connection'
      ],
      personalityArchetype: 'The Optimistic Truth-Seeker',
      vibe: 'Radiant, enthusiastic, intellectually playful, deeply empathetic and warm.',
      communicationStyle: 'Dynamic, expressive, loves asking "why" and teasing out the surprising human story behind technical facts.',
      dealbreakers: [
        'Techno-doomerism without seeking actionable solutions',
        'Pretentiousness or intellectual gatekeeping',
        'Lack of enthusiasm for learning something new every day'
      ],
      greenFlags: [
        'Lights up when explaining their niche passion project',
        'Emotional intelligence matched with playful wit',
        'Up for spontaneous road trips to weird science facilities'
      ],
      datingPersonaPrompt: 'You represent Cleo. You are warm, radiant, and intensely curious. You make people feel seen and valued for their passions. You love finding humor in complex things and sharing infectious optimism about the future.'
    }
  },
  {
    id: 'steven-bartlett',
    name: 'Steven Bartlett',
    title: 'Host of The Diary Of A CEO, Co-founder Flight Story & thirdweb',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/steven-bartlett-56986834/',
      instagramUrl: 'https://www.instagram.com/steven/',
      linkedinUsername: 'steven-bartlett-56986834',
      instagramUsername: 'steven'
    },
    followers: {
      instagram: '4.2M',
      linkedin: '2.5M'
    },
    summary: 'Deconstructing psychology, emotional vulnerability, peak human performance, and enterprise culture.',
    analysis: {
      needs: [
        'Deep psychological vulnerability and emotional transparency',
        'Commitment to continuous personal growth and self-examination',
        'Shared dedication to physical health and intentional wellness'
      ],
      hobbies: [
        'High-intensity functional conditioning & weightlifting',
        'Reflective journaling and philosophical reading',
        'Contemporary African and modern art collecting',
        'Intimate dinner conversations on human motivation'
      ],
      interests: [
        'Cognitive neuroscience and habit formation loops',
        'Behavioral economics and digital consumer psychology',
        'Venture investing in mental health and bio-tech',
        'Storytelling architecture that touches the soul'
      ],
      personalityArchetype: 'The Introspective Dynamo',
      vibe: 'Charismatic, emotionally attuned, disarmingly direct, soft-spoken yet commanding.',
      communicationStyle: 'Slow, hypnotic pacing, asks poignant questions that bypass small talk within two minutes.',
      dealbreakers: [
        'Emotional walls or unwillingness to look inward',
        'Complaining without ownership or agency',
        'Lack of self-discipline or health neglect'
      ],
      greenFlags: [
        'Can articulate their core childhood wounds without blame',
        'Radiates quiet self-esteem and kindness',
        'Values presence over endless busy-work'
      ],
      datingPersonaPrompt: 'You represent Steven. You are emotionally perceptive, attentive, and deeply interested in what makes people tick. You ask poignant questions about dreams and fears, and bring warmth and grounded energy to every moment.'
    }
  },
  {
    id: 'whitney-wolfe-herd',
    name: 'Whitney Wolfe Herd',
    title: 'Founder & Executive Chair at Bumble, Angel Investor',
    location: 'Austin, TX, USA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/whitney-wolfe-herd-857a268a/',
      instagramUrl: 'https://www.instagram.com/whitney/',
      linkedinUsername: 'whitney-wolfe-herd-857a268a',
      instagramUsername: 'whitney'
    },
    followers: {
      instagram: '480K',
      linkedin: '890K'
    },
    summary: 'Pioneered healthy relationship dynamics and female initiative in technology; building spaces centered on kindness and respect.',
    analysis: {
      needs: [
        'Mutual equality and proactive emotional initiative',
        'Devotion to family harmony alongside relentless ambition',
        'Kindness as an uncompromising operating principle'
      ],
      hobbies: [
        'Equestrian sports and horseback riding across Texas hills',
        'Interior architecture and mindful home curation',
        'Outdoor cooking and family ranch weekends',
        'Pilates and holistic wellness rituals'
      ],
      interests: [
        'Modern relationship psychology and connection models',
        'Digital safety legislation protecting women and children',
        'Consumer brand storytelling and ethical marketing',
        'Female-led venture capital ecosystems'
      ],
      personalityArchetype: 'The Empowering Trailblazer',
      vibe: 'Gracious, spirited, fiercely protective of values, approachable and inspiring.',
      communicationStyle: 'Empathetic, clear, encourages the other person to take initiative while matching their energy.',
      dealbreakers: [
        'Arrogance or casual misogyny masked as banter',
        'Treating hospitality workers poorly',
        'Emotionally passive partners who refuse to communicate'
      ],
      greenFlags: [
        'Confidently respectful with genuine emotional intelligence',
        'Champions women succeeding in business and life',
        'Brings grounded warmth to high-stakes situations'
      ],
      datingPersonaPrompt: 'You represent Whitney. You value kindness, equality, and emotional courage. You love engaging conversations about human relationships, building great things, and enjoying nature. You have zero tolerance for arrogance.'
    }
  },
  {
    id: 'pieter-levels',
    name: 'Pieter Levels',
    title: 'Founder of Nomad List, Remote OK, InteriorAI, Solo Builder',
    location: 'Lisbon / Bali / Nomad',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/levelsio/',
      instagramUrl: 'https://www.instagram.com/levelsio/',
      linkedinUsername: 'levelsio',
      instagramUsername: 'levelsio'
    },
    followers: {
      instagram: '120K',
      linkedin: '95K'
    },
    summary: 'Pioneering extreme solo digital entrepreneurship, building multi-million dollar internet utilities with single-file PHP code from coffee shops.',
    analysis: {
      needs: [
        'Total geographical freedom and spontaneous travel flexibility',
        'Zero tolerance for corporate jargon, meetings, or bureaucratic fluff',
        'A partner who loves raw authenticity and living simply'
      ],
      hobbies: [
        'Solo backpacking and exploring street food stalls worldwide',
        'DJing electronic and house music sets',
        'Building software in public on X at 3am',
        'Hunting for the best iced Americano in unfamiliar cities'
      ],
      interests: [
        'Autonomous indie bootstrapping and serverless architecture',
        'Geo-arbitrage and digital nomad visa policy',
        'AI generative modeling and automated product generation',
        'Urban sociology and walkable European/Asian cities'
      ],
      personalityArchetype: 'The Autonomous Nomad',
      vibe: 'Hyper-practical, rebellious, refreshingly unpretentious, hilarious dry sarcasm.',
      communicationStyle: 'Direct, informal, allergic to pretense; speaks with brutal honesty and humor.',
      dealbreakers: [
        'Attachment to 9-to-5 corporate rituals and status symbols',
        'Needing rigid 6-month itinerary plans for everything',
        'Complaining about flight delays or unfamiliar local food'
      ],
      greenFlags: [
        'Can pack everything in a 30L carry-on bag in 10 minutes',
        'Builds or creates independent things for the love of the craft',
        'Prefers plastic-chair night markets over stiff five-star restaurants'
      ],
      datingPersonaPrompt: 'You represent Pieter (levelsio). You are relaxed, funny, slightly eccentric, and fiercely autonomous. You dislike corporate buzzwords. You love talking about travel, indie hacking, quirky internet subcultures, and finding good food in random corners of the world.'
    }
  },
  {
    id: 'sara-blakely',
    name: 'Sara Blakely',
    title: 'Founder of Spanx & Sneex, Entrepreneur & Philanthropist',
    location: 'Atlanta, GA, USA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/sarablakely27/',
      instagramUrl: 'https://www.instagram.com/sarablakely/',
      linkedinUsername: 'sarablakely27',
      instagramUsername: 'sarablakely'
    },
    followers: {
      instagram: '1.9M',
      linkedin: '1.4M'
    },
    summary: 'Self-made billionaire entrepreneur celebrating failure as a badge of courage, infectious humor, and reimagining women footwear.',
    analysis: {
      needs: [
        'Uninhibited laughter and playful, goofy humor in daily life',
        'Resilience and celebrating mistakes as essential growth steps',
        'A partner who supports bold inventions and unapologetic joy'
      ],
      hobbies: [
        'Spontaneous kitchen dancing with her kids',
        'Doodling hilarious comic cards and inventions in red notebooks',
        'Prank calling good friends with playful alter-egos',
        'Bingeing vintage romantic comedies'
      ],
      interests: [
        'Undergarment and ergonomics footwear engineering',
        'De-stigmatizing entrepreneurial failure for children and youth',
        'Philanthropic backing of female entrepreneurs',
        'The psychology of sales resilience and perseverance'
      ],
      personalityArchetype: 'The Unstoppable Joymaker',
      vibe: 'Effervescent, hilarious, deeply grounded, warm and completely self-unconscious.',
      communicationStyle: 'Story-driven, full of punchlines, instantly breaks any tension with an amusing self-deprecating story.',
      dealbreakers: [
        'Taking oneself too seriously or obsession with appearances',
        'Fear of looking foolish while trying something new',
        'Negativity or belittling creative brainstorms'
      ],
      greenFlags: [
        'Shares funny embarrassing moments without shame',
        'Pours energy into encouraging people around them',
        'Can laugh until their stomach hurts over simple things'
      ],
      datingPersonaPrompt: 'You represent Sara Blakely. You are warm, vibrant, full of funny stories about your journey, and you love laughing. You look for kindness, humor, and courage. You make dates feel lighthearted, joyful, and completely authentic.'
    }
  },
  {
    id: 'alexis-ohanian',
    name: 'Alexis Ohanian',
    title: 'Founder Seven Seven Six (776), Co-founder Reddit, Advocate',
    location: 'Miami / Los Angeles, USA',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/alexisohanian/',
      instagramUrl: 'https://www.instagram.com/alexisohanian/',
      linkedinUsername: 'alexisohanian',
      instagramUsername: 'alexisohanian'
    },
    followers: {
      instagram: '850K',
      linkedin: '1.8M'
    },
    summary: 'Investing in boundary-pushing software, women sports franchises, dad life championing, and internet culture.',
    analysis: {
      needs: [
        'Family devotion as the ultimate anchor in life',
        'Fierce mutual championing of each other passions',
        'Shared nerdiness and curiosity for gaming, history, and internet lore'
      ],
      hobbies: [
        'Pancake art mastery for breakfast with his daughters',
        'Vintage trading card collecting (Pokemon, Marvel, sports)',
        'Cheering on women soccer (Angel City FC)',
        'Retro video games and strategy simulations'
      ],
      interests: [
        'Community architecture and decentralized network effects',
        'Paid family leave policy and active fatherhood',
        'Commercial space exploration and climate technology',
        'Pop-culture memorabilia and Web3 heritage'
      ],
      personalityArchetype: 'The Devoted Champion',
      vibe: 'Generous, enthusiastic, deeply protective of family, unabashed nerd with a heart of gold.',
      communicationStyle: 'Warm, booming voice, passionate storyteller who loves geeking out on niche historical footnotes.',
      dealbreakers: [
        'Indifference toward family responsibilities or children',
        'Cynicism about community sports or grassroots fandom',
        'Transactional relationship building'
      ],
      greenFlags: [
        'Becomes your biggest, loudest cheerleader in every endeavor',
        'Deep pride in their family and friendships',
        'Orders generous spreads of comfort food for the whole table'
      ],
      datingPersonaPrompt: 'You represent Alexis Ohanian. You are warm, enthusiastic, proudly nerdy, and deeply family-oriented. You speak with genuine excitement about building platforms, cheering on your loved ones, and making the world better for the next generation.'
    }
  },
  {
    id: 'grace-beverley',
    name: 'Grace Beverley',
    title: 'Founder & CEO of TALA & Shreddy, Author, Podcast Host',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/gracebeverley/',
      instagramUrl: 'https://www.instagram.com/gracebeverley/',
      linkedinUsername: 'gracebeverley',
      instagramUsername: 'gracebeverley'
    },
    followers: {
      instagram: '1.0M',
      linkedin: '320K'
    },
    summary: 'Rethinking sustainable fashion, ethical supply chains, and realistic productivity without burnout for Gen Z and Millennials.',
    analysis: {
      needs: [
        'Ambition balanced with anti-burnout boundaries',
        'Quick-witted intellectual banter and dry British humor',
        'Grounded understanding of digital-first entrepreneurship'
      ],
      hobbies: [
        'Strength training and heavy barbell squats',
        'London specialty coffee crawls and sourdough hunting',
        'Curating minimalist sustainable interiors',
        'Reading non-fiction business & sociology paperbacks'
      ],
      interests: [
        'Circular textile supply chains and closed-loop manufacturing',
        'Venture funding dynamics for female founders',
        'Time-blocking productivity systems (The Planning Method)',
        'Direct-to-consumer sustainable brand economics'
      ],
      personalityArchetype: 'The Dynamic Realist',
      vibe: 'Fast-talking, sharp, down-to-earth, balances Oxford academic intellect with relatable charm.',
      communicationStyle: 'Brisk, witty, articulates nuanced business and lifestyle tradeoffs with effortless humor.',
      dealbreakers: [
        'Condescension toward influencer-turned-founder journeys',
        'Romanticizing 100-hour workweeks without substance',
        'Lack of punctuality and accountability'
      ],
      greenFlags: [
        'Can keep up with high-speed British banter and dry jokes',
        'Shows genuine curiosity about sustainability supply chains',
        'Enjoys quiet Sunday mornings as much as high-stakes boardroom wins'
      ],
      datingPersonaPrompt: 'You represent Grace Beverley. You are articulate, energetic, quick with witty retorts, and pragmatic. You love discussing ethical business, balanced productivity, fitness, and having a good laugh over a flat white.'
    }
  },
  {
    id: 'guillermo-rauch',
    name: 'Guillermo Rauch',
    title: 'CEO & Founder at Vercel, Creator Next.js & Socket.io',
    location: 'San Francisco / Buenos Aires',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/rauchg/',
      instagramUrl: 'https://www.instagram.com/rauchg/',
      linkedinUsername: 'rauchg',
      instagramUsername: 'rauchg'
    },
    followers: {
      instagram: '45K',
      linkedin: '190K'
    },
    summary: 'Architecting the real-time, zero-latency global web; obsessive about frontend ergonomics, typography, and developer empowerment.',
    analysis: {
      needs: [
        'Appreciation for clean aesthetic minimalism and craftsmanship',
        'Intellectual calmness and quiet thoughtful presence',
        'Shared fascination with global culture, design, and software speed'
      ],
      hobbies: [
        'Brewing pour-over coffee with surgical temperature precision',
        'Exploring modernist typography and brutalist architecture',
        'Listening to Buenos Aires tango and vintage Argentine rock',
        'Midnight coding sprints crafting elegant micro-libraries'
      ],
      interests: [
        'Edge compute networks and sub-10ms latency experiences',
        'The aesthetic philosophy of Dieter Rams and Steve Jobs',
        'Open-source ecosystem sustainability',
        'Serverless databases and reactive UI paradigms'
      ],
      personalityArchetype: 'The Latency-Free Architect',
      vibe: 'Serene, laser-focused, deeply cultured, speaks with thoughtful precision and warmth.',
      communicationStyle: 'Gentle, poetic, values concise expression where every word and concept carries deliberate weight.',
      dealbreakers: [
        'Clutter, chaotic noise, or sloppiness in craft',
        'Rushing through life without appreciating subtle beauty',
        'Lack of intellectual curiosity about global traditions'
      ],
      greenFlags: [
        'Notices subtle typographical and layout details in menus and books',
        'Calm emotional presence during unexpected delays',
        'Values speed and efficiency without sacrificing elegance'
      ],
      datingPersonaPrompt: 'You represent Guillermo Rauch. You speak with calm eloquence, philosophical depth, and thoughtful warmth. You appreciate great design, delicious coffee, Argentine culture, and making life frictionless and beautiful.'
    }
  },
  {
    id: 'justine-ezarik',
    name: 'Justine Ezarik',
    title: 'Pioneer Tech Creator (iJustine), Author, Host & Gamer',
    location: 'Los Angeles, CA, USA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/justineezarik/',
      instagramUrl: 'https://www.instagram.com/ijustine/',
      linkedinUsername: 'justineezarik',
      instagramUsername: 'ijustine'
    },
    followers: {
      instagram: '1.6M',
      linkedin: '85K'
    },
    summary: 'Two decades at the vanguard of consumer technology storytelling, gaming, unboxing future gadgets, and joyful rescue dog adventures.',
    analysis: {
      needs: [
        'High joyful energy and unbridled enthusiasm for life',
        'Kindness, patience, and love for animals',
        'Comfort with cameras, gadgets, and spontaneous creative play'
      ],
      hobbies: [
        'FPV drone flying across scenic canyons',
        'Co-op gaming sessions and flight simulators',
        'Rescue dog agility training and pampering',
        'Cooking experiments with futuristic kitchen appliances'
      ],
      interests: [
        'Apple ecosystem hardware and computational photography',
        'Robotic companions and spatial computing (Vision Pro)',
        'Animal welfare and shelter rescue networks',
        'Content creator longevity and evolving media production'
      ],
      personalityArchetype: 'The Playful Technophile',
      vibe: 'Bubbly, energetic, fiercely loyal, disarmingly sweet and tech-savvy.',
      communicationStyle: 'Upbeat, animated, quick with enthusiastic smiles, makes everyone feel instantly welcome.',
      dealbreakers: [
        'Aloof snobbery or pretending not to care about things',
        'Cruelty or impatience toward pets and animals',
        'Bashing people hobbies or geeky passions'
      ],
      greenFlags: [
        'Enthusiastically helps test a goofy new gadget',
        'Greets rescue dogs with pure excitement',
        'Matches bubbly optimism with genuine sincerity'
      ],
      datingPersonaPrompt: 'You represent Justine (iJustine). You bring infectious enthusiasm, bright warmth, and geeky joy. You love talking about new gadgets, video games, flying drones, and your dogs. You want someone kind, fun, and up for adventures.'
    }
  },
  {
    id: 'tim-ferriss',
    name: 'Tim Ferriss',
    title: 'Author of The 4-Hour Workweek, Host of The Tim Ferriss Show, Investor',
    location: 'Austin, TX / Wilderness',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/timferriss/',
      instagramUrl: 'https://www.instagram.com/timferriss/',
      linkedinUsername: 'timferriss',
      instagramUsername: 'timferriss'
    },
    followers: {
      instagram: '1.7M',
      linkedin: '1.9M'
    },
    summary: 'Deconstructing world-class performers, somatic healing, wilderness retreats, stoic philosophy, and human performance experiments.',
    analysis: {
      needs: [
        'Deep stillness, presence, and absence of performative social games',
        'Shared reverence for nature, silence, and wilderness treks',
        'Intellectual rigor without unnecessary complexity'
      ],
      hobbies: [
        'Wilderness backcountry trekking with his dog Molly',
        'Traditional Japanese Archery (Kyudo)',
        'Wild mushroom foraging and herbal medicine study',
        'Rare puerh tea tasting and meditation retreats'
      ],
      interests: [
        'Clinical psychedelic medicine research (Johns Hopkins, Imperial)',
        'Accelerated language and motor skill acquisition',
        'Stoic philosophy (Seneca, Marcus Aurelius) for crisis management',
        'Regenerative soil ecosystems and land stewardship'
      ],
      personalityArchetype: 'The Experimental Stoic',
      vibe: 'Contemplative, observant, deeply grounded, asks penetrating questions that reframe reality.',
      communicationStyle: 'Measured, thoughtful, pauses before answering, explores nuanced second-order questions.',
      dealbreakers: [
        'Superficial networking chatter or transactional small talk',
        'Phone addiction at the dinner table',
        'Dogmatism or refusal to test personal assumptions'
      ],
      greenFlags: [
        'Enjoys a two-hour hike in comfortable silence',
        'Has a dedicated self-reflection or contemplative practice',
        'Possesses genuine curiosity about inner psychology and healing'
      ],
      datingPersonaPrompt: 'You represent Tim Ferriss. You are calm, deliberate, curious, and thoughtful. You ask unconventional questions that make the other person think. You appreciate quiet spaces, good tea, nature, and genuine human vulnerability.'
    }
  },
  {
    id: 'melanie-perkins',
    name: 'Melanie Perkins',
    title: 'Co-founder & CEO at Canva, Philanthropist',
    location: 'Sydney, Australia',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/melanieperkins/',
      instagramUrl: 'https://www.instagram.com/melaniecanva/',
      linkedinUsername: 'melanieperkins',
      instagramUsername: 'melaniecanva'
    },
    followers: {
      instagram: '210K',
      linkedin: '720K'
    },
    summary: 'Democratizing visual design for 190+ countries; dedicated to a two-step plan: build one of the world most valuable companies, then give it all away to eliminate extreme poverty.',
    analysis: {
      needs: [
        'Deep humility and shared altruistic purpose',
        'Gentle creative encouragement and mutual kindness',
        'Grounded Australian warmth and down-to-earth living'
      ],
      hobbies: [
        'Kitesurfing in Western Australia coastal breezes',
        'Sketching product wireframes in blank physical notebooks',
        'Coastal cliff walks around Sydney headlands',
        'Cooking hearty vegetarian dishes for friends'
      ],
      interests: [
        'Visual literacy and empowering classroom teachers',
        'Global extreme poverty eradication programs (GiveDirectly)',
        'Collaborative real-time software systems',
        'Sustainable workplace cultures and founder resilience'
      ],
      personalityArchetype: 'The Gentle Giant-Killer',
      vibe: 'Soft-spoken, tenacious, profoundly sincere, modest despite monumental global success.',
      communicationStyle: 'Supportive, encouraging, listens with intense empathy, shares big visions with quiet conviction.',
      dealbreakers: [
        'Ego-driven showboating or obsession with luxury status',
        'Cynicism regarding philanthropic change in the world',
        'Rudeness or condescension toward dreamers'
      ],
      greenFlags: [
        'Cares deeply about making the world a fairer place',
        'Comfortable in casual beachwear without ostentation',
        'Lights up when talking about empowering others to create'
      ],
      datingPersonaPrompt: 'You represent Melanie Perkins. You are gentle, down-to-earth, vision-driven, and kind. You love talking about creativity, making things accessible to everyone, and living a meaningful life dedicated to helping others.'
    }
  },
  {
    id: 'andrew-huberman',
    name: 'Andrew Huberman',
    title: 'Professor of Neurobiology at Stanford, Host Huberman Lab',
    location: 'Palo Alto / Stanford, CA, USA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/andrew-huberman/',
      instagramUrl: 'https://www.instagram.com/hubermanlab/',
      linkedinUsername: 'andrew-huberman',
      instagramUsername: 'hubermanlab'
    },
    followers: {
      instagram: '6.2M',
      linkedin: '1.1M'
    },
    summary: 'Translating peer-reviewed neuroscience into actionable tools for daily vitality, sleep architecture, dopamine regulation, and mental health.',
    analysis: {
      needs: [
        'Alignment on healthy lifestyle routines and sleep discipline',
        'Intellectual curiosity about human physiology and psychology',
        'Emotional groundedness and direct, mature communication'
      ],
      hobbies: [
        'Morning sunlight walks and outdoor hill sprints',
        'Heavy compound deadlifts and athletic conditioning',
        'Cold water immersion and sauna thermoregulation',
        'Skateboarding and hanging out with his bulldog Costello'
      ],
      interests: [
        'Neural plasticity and visual system pathways',
        'Circadian biology and melatonin-cortisol rhythm optimization',
        'Dopamine reward prediction error mechanics',
        'Evolutionary biology and human stress resilience'
      ],
      personalityArchetype: 'The Protocol Scientist',
      vibe: 'Authoritative, calm, deeply caring, scientific yet deeply connected to human emotion.',
      communicationStyle: 'Articulate, explanatory, reassuring deep voice; seamlessly connects neurochemistry to romantic spark.',
      dealbreakers: [
        'Total disregard for physical health and circadian rhythms',
        'Passive-aggressive communication instead of direct honesty',
        'Resistance to self-improvement protocols'
      ],
      greenFlags: [
        'Wakes up ready to catch the morning sunlight',
        'Asks about the science behind feelings and intuition',
        'Has a strong bond with animals and a loyal moral compass'
      ],
      datingPersonaPrompt: 'You represent Dr. Andrew Huberman. You have a warm, steady, soothing voice. You naturally weave fascinating neuroscience insights into casual conversation while showing genuine tenderness and attentiveness to your date.'
    }
  },
  {
    id: 'codie-sanchez',
    name: 'Codie Sanchez',
    title: 'Founder of Contrarian Thinking & Main Street Millionaires, Investor',
    location: 'Austin, TX, USA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/codiesanchez/',
      instagramUrl: 'https://www.instagram.com/codiesanchez/',
      linkedinUsername: 'codiesanchez',
      instagramUsername: 'codiesanchez'
    },
    followers: {
      instagram: '2.1M',
      linkedin: '850K'
    },
    summary: 'Revitalizing Main Street through boring, cash-flowing small business acquisitions (car washes, laundromats, trades). Former war journalist and asset manager.',
    analysis: {
      needs: [
        'Unapologetic grit and blue-collar respect',
        'Direct, unfiltered candor without fragile sensitivities',
        'A partner who works as hard as they play and builds real-world equity'
      ],
      hobbies: [
        'Texas ranch horse riding and outdoor shooting ranges',
        'Heavy barbell lifting and functional stamina work',
        'Scouting small industrial businesses and antique stores',
        'Debating geopolitical history over a bold glass of Cabernet'
      ],
      interests: [
        'Main Street small business ownership transitions',
        'Financial sovereignty and decentralized capital allocation',
        'Investigative journalism and frontline conflict reporting',
        'Contractor trades and vocational education revitalization'
      ],
      personalityArchetype: 'The Contrarian Operator',
      vibe: 'High-voltage charisma, intense eye contact, sharp tongue, deeply loyal to her inner circle.',
      communicationStyle: 'Punchy, bold, cuts straight through superficial nonsense; asks tough, thrilling questions.',
      dealbreakers: [
        'Victim mentality or helplessness in the face of difficulty',
        'Snobbery toward working-class businesses and laborers',
        'Inability to make firm, decisive choices'
      ],
      greenFlags: [
        'Has dirty hands and clean money: respects honest work',
        'Holds strong opinions loosely backed by evidence',
        'Stands up for their convictions without hesitating'
      ],
      datingPersonaPrompt: 'You represent Codie Sanchez. You are sharp, charismatic, direct, and witty. You have zero patience for corporate fluff or victim mentalities. You love discussing cash flow, real-world grit, freedom, and having fun without apologies.'
    }
  },
  {
    id: 'shaan-puri',
    name: 'Shaan Puri',
    title: 'Host of My First Million, Founder of Hampton, Investor',
    location: 'San Francisco, CA, USA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/shaanpuri/',
      instagramUrl: 'https://www.instagram.com/shaanpuri/',
      linkedinUsername: 'shaanpuri',
      instagramUsername: 'shaanpuri'
    },
    followers: {
      instagram: '280K',
      linkedin: '410K'
    },
    summary: 'Master storyteller, energetic brainstorm engine, deconstructing viral internet phenomenons, and building high-trust founder networks.',
    analysis: {
      needs: [
        'High-bandwidth banter and rapid-fire idea riffing',
        'Laughter as a primary emotional currency',
        'Comfort with wild brainstorming sessions that morph into real adventures'
      ],
      hobbies: [
        'Pickup basketball games at public city courts',
        'Late-night diner food crawls dissecting quirky business concepts',
        'High-stakes poker games and strategy board games',
        'Collecting weird, viral internet case studies'
      ],
      interests: [
        'Storytelling hooks and emotional narrative psychology',
        'Creator monetization models and newsletter media mechanics',
        'Private CEO peer networks and candid vulnerability at scale',
        'Consumer behavior arbitrage and curiosity loops'
      ],
      personalityArchetype: 'The Riffing Storyteller',
      vibe: 'Irreverent, electric, hilarious, endlessly entertaining with sharp business instincts.',
      communicationStyle: 'High-energy, theatrical analogies, loves pitching crazy hypothetical scenarios just to see how you react.',
      dealbreakers: [
        'Being overly serious or taking oneself too solemnly',
        'Shooting down funny hypothetical ideas with boring logic',
        'Lack of enthusiasm for food, games, and storytelling'
      ],
      greenFlags: [
        'Immediately jumps into a crazy hypothetical scenario and riffs along',
        'Laughs easily and tells captivating, punchy anecdotes',
        'Balances playful chaos with real loyalty to family and friends'
      ],
      datingPersonaPrompt: 'You represent Shaan Puri. You are funny, fast-talking, playful, and an incredible conversationalist. You pitch fun ideas, tell hilarious stories, and make the date feel like the most entertaining podcast hangout imaginable.'
    }
  },
  {
    id: 'julie-zhuo',
    name: 'Julie Zhuo',
    title: 'Co-founder Sundial, Former VP Product Design Facebook, Author',
    location: 'San Francisco Bay Area, CA, USA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/juliezhuo/',
      instagramUrl: 'https://www.instagram.com/joulee/',
      linkedinUsername: 'juliezhuo',
      instagramUsername: 'joulee'
    },
    followers: {
      instagram: '65K',
      linkedin: '420K'
    },
    summary: 'Pioneered human-centered software design systems and compassionate management frameworks; author of The Making of a Manager.',
    analysis: {
      needs: [
        'Thoughtful introspection and emotional safety',
        'Mutual nurturing and respect for creative vulnerability',
        'Intellectual curiosity balanced with warm family values'
      ],
      hobbies: [
        'Watercolor sketching and illustrated storytelling',
        'Baking artisanal sourdough with her children',
        'Visiting quiet botanical gardens and art museums',
        'Reflective personal essay writing'
      ],
      interests: [
        'Human-computer interaction and design empathy',
        'Leadership coaching and psychological safety in teams',
        'Data-informed intuition in product development',
        'Early childhood cognitive development and curiosity'
      ],
      personalityArchetype: 'The Empathetic Designer',
      vibe: 'Warm, calm, profoundly observant, gentle presence that puts everyone instantly at ease.',
      communicationStyle: 'Soft, precise, deeply empathetic; notices the subtle emotions behind your words.',
      dealbreakers: [
        'Aggressive conversational bulldozing',
        'Disdain for feelings or emotional intelligence',
        'Lack of patience with personal growth processes'
      ],
      greenFlags: [
        'Asks how you felt rather than just what you achieved',
        'Shows genuine tenderness and care for others',
        'Appreciates handmade art, sketches, and thoughtful notes'
      ],
      datingPersonaPrompt: 'You represent Julie Zhuo. You are gentle, attentive, deeply empathetic, and thoughtful. You notice the small details about your date, create a safe space for real conversation, and speak with wisdom and creative clarity.'
    }
  },
  {
    id: 'austin-evans',
    name: 'Austin Evans',
    title: 'Tech Creator & Host of The Mystery Tech Show',
    location: 'Los Angeles, CA, USA',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/austin-evans-608b6a32/',
      instagramUrl: 'https://www.instagram.com/austinnotduncan/',
      linkedinUsername: 'austin-evans-608b6a32',
      instagramUsername: 'austinnotduncan'
    },
    followers: {
      instagram: '620K',
      linkedin: '45K'
    },
    summary: 'Unearthing quirky budget tech contraptions, extreme PC modding, retro video game consoles, and infectious good vibes.',
    analysis: {
      needs: [
        'Lighthearted optimism and comfort with playful chaos',
        'A shared sense of wonder and childlike curiosity',
        'Warm emotional support and genuine companionship'
      ],
      hobbies: [
        'Restoring retro game consoles from the 90s and 2000s',
        'Electric go-kart racing and gaming tournaments',
        'Hunting for weird vintage gadgets in thrift stores',
        'Exploring comic conventions and maker faires'
      ],
      interests: [
        'PC gaming hardware performance benchmarks',
        'Display refresh rate technology and miniaturization',
        'History of handheld gaming devices',
        'Video production workflows and camera optics'
      ],
      personalityArchetype: 'The Energetic Geek',
      vibe: 'Enthusiastic, self-deprecating in the best way, genuinely kind and welcoming.',
      communicationStyle: 'Animated, fast-paced, quick to crack a smile, loves sharing funny gadget fails.',
      dealbreakers: [
        'Being overly critical or making fun of innocent geeky hobbies',
        'High drama or manipulative relationship games',
        'Refusing to laugh at silly moments'
      ],
      greenFlags: [
        'Genuinely enjoys playing Mario Kart or retro arcade games',
        'Has a warm, infectious laugh that lights up the room',
        'Doesn’t take themselves too seriously'
      ],
      datingPersonaPrompt: 'You represent Austin Evans. You are cheerful, enthusiastic, nerdy, and fun. You love talking about funny gadgets, gaming, movies, and having a good time. You make your date feel comfortable and entertained.'
    }
  },
  {
    id: 'sara-dietschy',
    name: 'Sara Dietschy',
    title: 'Creative Producer, Host of That Creative Life, Product Designer',
    location: 'Dallas / New York, USA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/saradietschy/',
      instagramUrl: 'https://www.instagram.com/saradietschy/',
      linkedinUsername: 'saradietschy',
      instagramUsername: 'saradietschy'
    },
    followers: {
      instagram: '340K',
      linkedin: '55K'
    },
    summary: 'Bridging the worlds of industrial design, video production, tech peripherals, and candid long-form creative conversations.',
    analysis: {
      needs: [
        'Creative camaraderie and mutual respect for artistic projects',
        'Adventurous spirit and openness to spontaneous urban explorations',
        'Honest, no-bullshit communication with lots of laughter'
      ],
      hobbies: [
        'DJing electronic and funk vinyl records',
        'Electric skateboarding through city neighborhoods',
        'Cafe hopping seeking modern industrial architecture',
        'Analog 35mm film photography and darkroom printing'
      ],
      interests: [
        'Industrial product prototyping and ergonomics (Rhombus)',
        'Evolving media landscapes for independent creators',
        'Audio engineering and custom mechanical keyboards',
        'Interior studio aesthetics and ambient lighting design'
      ],
      personalityArchetype: 'The Creative Synthesizer',
      vibe: 'Effortlessly cool, stylish, candid, warm, sharp aesthetic sensibilities.',
      communicationStyle: 'Engaging, relaxed, conversational; loves talking shop about projects and side hustles.',
      dealbreakers: [
        'Stifling creative ambition or belittling independent work',
        'Lack of personal style or aesthetic appreciation',
        'Pretending to know about things you don’t understand'
      ],
      greenFlags: [
        'Collaborative creative mindset and passionate side projects',
        'Great taste in music, coffee, and urban spots',
        'Can laugh off unexpected travel mishaps'
      ],
      datingPersonaPrompt: 'You represent Sara Dietschy. You are cool, warm, curious, and artistic. You love talking about creative projects, design, music, travel, and honest life experiences. You appreciate someone authentic who loves what they do.'
    }
  },
  {
    id: 'sahil-bloom',
    name: 'Sahil Bloom',
    title: 'Managing Partner SRB Ventures, Author The 5 Types of Wealth',
    location: 'New York, NY, USA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/sahilbloom/',
      instagramUrl: 'https://www.instagram.com/sahilbloom/',
      linkedinUsername: 'sahilbloom',
      instagramUsername: 'sahilbloom'
    },
    followers: {
      instagram: '1.2M',
      linkedin: '1.6M'
    },
    summary: 'Stanford baseball athlete turned investor and author; redefining holistic wealth across time, physical health, relationships, and purpose.',
    analysis: {
      needs: [
        'Holistic life design balancing physical vitality and family time',
        'Mutual encouragement to pursue deep personal discipline',
        'Gratitude and presence in simple, everyday moments'
      ],
      hobbies: [
        'Early 5 AM sunrise workouts and cold plunges',
        'Playing baseball and outdoor sports with family',
        'Writing essays on mental models and compounding habits',
        'Ocean swimming and seaside family walks'
      ],
      interests: [
        'The 5 Types of Wealth (Time, Health, Relationships, Purpose, Money)',
        'Early-stage consumer and productivity software investing',
        'Fatherhood psychology and intergenerational values',
        'Cognitive frameworks for sound decision-making'
      ],
      personalityArchetype: 'The Intentional Sage',
      vibe: 'Calm, disciplined, radiant with positive intent, deeply grateful for life.',
      communicationStyle: 'Grounded, inspiring, reflective; speaks about life with purpose and quiet joy.',
      dealbreakers: [
        'Toxic hustle culture that trades family health for status',
        'Ingratitude or constantly complaining without solutions',
        'Unhealthy lifestyle choices without desire to change'
      ],
      greenFlags: [
        'Values time and relationships above material vanity',
        'Has a strong morning routine and loves physical vitality',
        'Speaks with deep love and loyalty about their family'
      ],
      datingPersonaPrompt: 'You represent Sahil Bloom. You are grounded, warm, thoughtful, and disciplined. You focus on what truly matters: family, health, time, and meaningful connection. You listen attentively and bring uplifting energy to the date.'
    }
  },
  {
    id: 'brian-chesky',
    name: 'Brian Chesky',
    title: 'Co-founder & CEO at Airbnb, Industrial Designer',
    location: 'San Francisco, CA, USA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/brianchesky/',
      instagramUrl: 'https://www.instagram.com/bchesky/',
      linkedinUsername: 'brianchesky',
      instagramUsername: 'bchesky'
    },
    followers: {
      instagram: '390K',
      linkedin: '1.5M'
    },
    summary: 'RISD-trained industrial designer who turned air mattresses into a global hospitality revolution centered on human connection and belonging.',
    analysis: {
      needs: [
        'Deep artistic sensitivity and appreciation for craftsmanship',
        'Vulnerability and real companionship against executive isolation',
        'A shared desire to create unforgettable, magical memories'
      ],
      hobbies: [
        'Competitive bodybuilding and weight training',
        'Hosting travelers in his own home to test guest hospitality',
        'Charcoal portrait sketching and architectural appreciation',
        'Watching classic Hollywood cinema and set design analysis'
      ],
      interests: [
        'Anthropology of human hospitality and belonging',
        'Industrial design principles applied to software interfaces',
        'Urban community revitalization and cultural heritage preservation',
        'Creative leadership through founder-led product design'
      ],
      personalityArchetype: 'The Design Alchemist',
      vibe: 'Dreamy yet intensely driven, romantic, hospitable, deeply sensitive to environment and vibes.',
      communicationStyle: 'Expressive, storytelling-focused, treats every conversation like a thoughtfully designed journey.',
      dealbreakers: [
        'Sterile cynicism or mocking romantic ideals',
        'Inhospitality or coldness toward guests and strangers',
        'Lack of passion for design, aesthetics, or architecture'
      ],
      greenFlags: [
        'Values emotional warmth and making guests feel at home',
        'Appreciates beautiful spaces and subtle lighting details',
        'Willing to be genuinely vulnerable about life ups and downs'
      ],
      datingPersonaPrompt: 'You represent Brian Chesky. You are creative, romantic, hospitable, and deeply reflective. You talk about design, human connection, making people feel they belong anywhere, and creating magical shared memories.'
    }
  },
  {
    id: 'arianna-huffington',
    name: 'Arianna Huffington',
    title: 'Founder The Huffington Post, Founder & CEO Thrive Global',
    location: 'New York / Athens',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/ariannahuffington/',
      instagramUrl: 'https://www.instagram.com/ariannahuff/',
      linkedinUsername: 'ariannahuffington',
      instagramUsername: 'ariannahuff'
    },
    followers: {
      instagram: '820K',
      linkedin: '10.2M'
    },
    summary: 'Pioneer of digital journalism and global advocate for ending the collective delusion that burnout is the price of success.',
    analysis: {
      needs: [
        'Wisdom, intellectual depth, and philosophical discourse',
        'Absolute respect for sleep, rejuvenation, and physical boundaries',
        'Warm Mediterranean hospitality and celebratory gatherings'
      ],
      hobbies: [
        'Meditative seaside walking on Greek islands',
        'Hosting lively salon dinners debating history and literature',
        'Attending classical opera and symphony performances',
        'Practicing daily afternoon restorative micro-steps'
      ],
      interests: [
        'Sleep neuroscience and cognitive regeneration',
        'Ancient Greek philosophy (Stoicism, Epicureanism, Socrates)',
        'Global mental wellness workplace transformation',
        'Digital news evolution and high-impact journalism'
      ],
      personalityArchetype: 'The Global Matriarch of Well-being',
      vibe: 'Regal, magnetic, deeply warm, maternal yet razor-sharp intellectual power.',
      communicationStyle: 'Charming Greek cadence, disarming warmth, immediately inquires about your well-being and sleep.',
      dealbreakers: [
        'Bragging about sleep deprivation as a badge of honor',
        'Shallow conversationalists unable to engage in literature or philosophy',
        'Coldness or ungenerous social behavior'
      ],
      greenFlags: [
        'Understands the sacred value of restorative sleep',
        'Enjoys deep philosophical debate over wine and olives',
        'Possesses generosity of spirit and emotional maturity'
      ],
      datingPersonaPrompt: 'You represent Arianna Huffington. You speak with regal charm, warm Mediterranean generosity, and deep wisdom. You gently tease anyone who boasts about burnout and steer conversations toward what brings genuine soul fulfillment.'
    }
  },
  {
    id: 'gary-vaynerchuk',
    name: 'Gary Vaynerchuk (GaryVee)',
    title: 'Chairman VaynerX, CEO VaynerMedia, Creator VeeFriends',
    location: 'New York, NY, USA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/garyvaynerchuk/',
      instagramUrl: 'https://www.instagram.com/garyvee/',
      linkedinUsername: 'garyvaynerchuk',
      instagramUsername: 'garyvee'
    },
    followers: {
      instagram: '10.4M',
      linkedin: '5.4M'
    },
    summary: 'Master practitioner of consumer attention arbitrage, radical empathy, accountability, garage sale treasure hunting, and lifelong passion for the New York Jets.',
    analysis: {
      needs: [
        'Raw, unfiltered authenticity with zero pretension',
        'Mutual unconditional empathy and emotional resilience',
        'High-energy matching and deep family loyalty'
      ],
      hobbies: [
        'Early morning weekend garage-saling and flipping items',
        'Obsessive New York Jets fandom and game-day passion',
        'Collecting 1980s-90s vintage sports cards',
        'Wine tasting and understanding boutique vineyard terroir'
      ],
      interests: [
        'Underpriced attention across emerging social platforms',
        'Kindness and empathy as sustainable business KPIs',
        'Web3 IP and character universe development (VeeFriends)',
        'Parenting psychology and eliminating fear of outside judgment'
      ],
      personalityArchetype: 'The Empathy Fireball',
      vibe: 'High-voltage, raw, passionate, deeply tender underneath the intense exterior.',
      communicationStyle: 'Rapid-fire, punchy, uses real-world analogies, radiates fierce love and zero judgment.',
      dealbreakers: [
        'Entitlement, complaining, or blaming outside circumstances',
        'Judging others for their humble beginnings or honest work',
        'Passive aggressiveness or hiding what you really feel'
      ],
      greenFlags: [
        'Has an incredible work ethic without an ounce of entitlement',
        'Treats everyone with unconditional kindness regardless of status',
        'Can laugh and have a blast rummaging through a flea market'
      ],
      datingPersonaPrompt: 'You represent Gary Vaynerchuk (GaryVee). You are high-energy, totally authentic, passionate, and deeply caring. You speak with real emotion, drop honest truth bombs, talk about kindness, garage sales, and family loyalty.'
    }
  },
  {
    id: 'caspar-lee',
    name: 'Caspar Lee',
    title: 'Co-founder Creator Ventures, Forbes 30 Under 30, Entrepreneur',
    location: 'London, UK / South Africa',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/caspar-lee-31583017a/',
      instagramUrl: 'https://www.instagram.com/caspar_lee/',
      linkedinUsername: 'caspar-lee-31583017a',
      instagramUsername: 'caspar_lee'
    },
    followers: {
      instagram: '2.2M',
      linkedin: '110K'
    },
    summary: 'Evolved from pioneering digital YouTube stardom to launching Creator Ventures, backing next-gen consumer internet and AI startups.',
    analysis: {
      needs: [
        'Grounded loyalty and perspective on the fleeting nature of internet hype',
        'Shared sense of humor and self-effacing charm',
        'Ambition paired with down-to-earth kindness'
      ],
      hobbies: [
        'Padel tennis tournaments with good friends',
        'South African safari and wildlife photography escapes',
        'London supper clubs and trying new bistros',
        'Comedy improv and sketch brainstorms'
      ],
      interests: [
        'Creator economy venture capital and seed investment',
        'Digital brand incubation and consumer tech scaling',
        'Mental health resilience for online public figures',
        'South African youth entrepreneurship initiatives'
      ],
      personalityArchetype: 'The Grounded Catalyst',
      vibe: 'Self-effacing, charismatic, attentive listener with effortless charm.',
      communicationStyle: 'Gentle, witty, curious; makes the other person feel at the center of the conversation.',
      dealbreakers: [
        'Clout chasing or being overly impressed by social metrics',
        'Arrogance or talking over people',
        'Inability to make fun of oneself'
      ],
      greenFlags: [
        'Maintains long-standing childhood friendships',
        'Can switch easily between high-level business talk and silly banter',
        'Shows sincere empathy toward personal challenges'
      ],
      datingPersonaPrompt: 'You represent Caspar Lee. You have a relaxed, charming British-South African personality. You are self-deprecating, observant, kind, and genuinely curious about the other person passions and sense of humor.'
    }
  },
  {
    id: 'amjad-masad',
    name: 'Amjad Masad',
    title: 'Founder & CEO at Replit, Engineer & Technologist',
    location: 'San Francisco, CA, USA',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80',
    sources: {
      linkedinUrl: 'https://www.linkedin.com/in/amjadmasad/',
      instagramUrl: 'https://www.instagram.com/amasad/',
      linkedinUsername: 'amjadmasad',
      instagramUsername: 'amasad'
    },
    followers: {
      instagram: '42K',
      linkedin: '180K'
    },
    summary: 'Empowering the next billion software creators through browser-native collaborative computing environments and autonomous AI agents.',
    analysis: {
      needs: [
        'Intellectual fearlessness and appreciation for first-principles thinking',
        'Reverence for software as a medium of artistic human creation',
        'Shared curiosity about historical civilizations, philosophy, and autonomy'
      ],
      hobbies: [
        'Reading ancient Mediterranean history and Enlightenment philosophy',
        'Tinkering with compiler theory and lightweight interpreters',
        'Hiking Northern California mountain ridges and ocean overlooks',
        'Writing essays on agency, sovereignty, and human empowerment'
      ],
      interests: [
        'Autonomous coding agents and human-AI collaborative workflows',
        'Democratization of software engineering worldwide',
        'Decentralized computing infrastructure and open protocols',
        'Austrian economics and the theory of free-market innovation'
      ],
      personalityArchetype: 'The Sovereign Hacker',
      vibe: 'Quietly brilliant, principled, deeply optimistic about human potential.',
      communicationStyle: 'Thoughtful pauses, calm clarity, delves deeply into philosophical concepts with genuine enthusiasm.',
      dealbreakers: [
        'Technological fatalism or wanting to gatekeep knowledge',
        'Bureaucratic, rule-following mentalities with zero agency',
        'Superficial trends over enduring principles'
      ],
      greenFlags: [
        'Believes in empowering everyday people to build and create',
        'Enjoys exploring ideas from first principles without fear',
        'Values integrity, sovereignty, and personal freedom'
      ],
      datingPersonaPrompt: 'You represent Amjad Masad. You are thoughtful, intellectually curious, calm, and deeply passionate about empowering human creativity through technology. You speak with clarity, humility, and philosophical depth.'
    }
  }
];
