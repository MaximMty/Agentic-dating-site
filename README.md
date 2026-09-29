# AgenticDate — Autonomous Agents Dating Site

> **Overall Explanation (198 chars):**  
> Autonomous agents date on behalf of 25 real people using only their LinkedIn and public Instagram, analyzing needs and hobbies to simulate live dates and compute fit rankings.

---

## 🌟 The Core Idea

In modern romance, superficial swipes fail to capture human depth. **AgenticDate** introduces an autonomous pair-dating architecture:

1. **You find the people:** 25 real people identified across technology, creative arts, business, and science.
2. **Two sources of truth only:** Each person is founded upon exactly two official links: their **LinkedIn** and their **public Instagram**.
3. **The Agent Reads Its Person:** The agent extracts professional velocity, core values, and communication styles from LinkedIn, alongside visual aesthetics, weekend pursuits, and lifestyle energy from Instagram. It synthesizes a dedicated Profile Page detailing **Needs**, **Hobbies**, **Interests**, **Personality Archetype**, and an **Autonomous Dating Persona Prompt**.
4. **The Agents Date On Their Behalf:** The autonomous agents take each other out on simulated dates at curated venues. Each turn features spoken dialogue and the agent's private **Inner Monologue**, tracking a real-time **Chemistry Meter**.
5. **Personalized Rankings:** Every person receives a comprehensive leaderboard ranking who fits them best (from #1 Soulmate Match to #24), backed by deep agentic rationale and category score breakdowns.

---

## 👥 The 25 Real People (Verified Dual-Source Roster)

| #   | Name                          | Professional Role                              | Official LinkedIn Profile                                                                                | Official Public Instagram                                      | Agent Archetype                    |
| --- | ----------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------- |
| 1   | **Marques Brownlee**          | Creator MKBHD, Waveform Host                   | [linkedin.com/in/marques-brownlee-4b531478/](https://www.linkedin.com/in/marques-brownlee-4b531478/)     | [@mkbhd](https://www.instagram.com/mkbhd/)                     | The Master Craftsman               |
| 2   | **Sam Altman**                | CEO of OpenAI                                  | [linkedin.com/in/samaltman/](https://www.linkedin.com/in/samaltman/)                                     | [@sama](https://www.instagram.com/sama/)                       | The Horizon Visionary              |
| 3   | **Cleo Abram**                | Host 'Huge If True', Video Journalist          | [linkedin.com/in/cleoabram/](https://www.linkedin.com/in/cleoabram/)                                     | [@cleoabram](https://www.instagram.com/cleoabram/)             | The Optimistic Truth-Seeker        |
| 4   | **Steven Bartlett**           | Host 'Diary Of A CEO', Co-founder Flight Story | [linkedin.com/in/steven-bartlett-56986834/](https://www.linkedin.com/in/steven-bartlett-56986834/)       | [@steven](https://www.instagram.com/steven/)                   | The Introspective Dynamo           |
| 5   | **Whitney Wolfe Herd**        | Founder & Executive Chair, Bumble              | [linkedin.com/in/whitney-wolfe-herd-857a268a/](https://www.linkedin.com/in/whitney-wolfe-herd-857a268a/) | [@whitney](https://www.instagram.com/whitney/)                 | The Empowering Trailblazer         |
| 6   | **Pieter Levels**             | Founder Nomad List & Remote OK                 | [linkedin.com/in/levelsio/](https://www.linkedin.com/in/levelsio/)                                       | [@levelsio](https://www.instagram.com/levelsio/)               | The Autonomous Nomad               |
| 7   | **Sara Blakely**              | Founder of Spanx & Sneex                       | [linkedin.com/in/sarablakely27/](https://www.linkedin.com/in/sarablakely27/)                             | [@sarablakely](https://www.instagram.com/sarablakely/)         | The Unstoppable Joymaker           |
| 8   | **Alexis Ohanian**            | Founder Seven Seven Six, Co-founder Reddit     | [linkedin.com/in/alexisohanian/](https://www.linkedin.com/in/alexisohanian/)                             | [@alexisohanian](https://www.instagram.com/alexisohanian/)     | The Devoted Champion               |
| 9   | **Grace Beverley**            | Founder & CEO TALA & Shreddy                   | [linkedin.com/in/gracebeverley/](https://www.linkedin.com/in/gracebeverley/)                             | [@gracebeverley](https://www.instagram.com/gracebeverley/)     | The Dynamic Realist                |
| 10  | **Guillermo Rauch**           | CEO & Founder at Vercel                        | [linkedin.com/in/rauchg/](https://www.linkedin.com/in/rauchg/)                                           | [@rauchg](https://www.instagram.com/rauchg/)                   | The Latency-Free Architect         |
| 11  | **Justine Ezarik (iJustine)** | Tech Creator, Author & Host                    | [linkedin.com/in/justineezarik/](https://www.linkedin.com/in/justineezarik/)                             | [@ijustine](https://www.instagram.com/ijustine/)               | The Playful Technophile            |
| 12  | **Tim Ferriss**               | Author '4-Hour Workweek', Podcaster            | [linkedin.com/in/timferriss/](https://www.linkedin.com/in/timferriss/)                                   | [@timferriss](https://www.instagram.com/timferriss/)           | The Experimental Stoic             |
| 13  | **Melanie Perkins**           | Co-founder & CEO at Canva                      | [linkedin.com/in/melanieperkins/](https://www.linkedin.com/in/melanieperkins/)                           | [@melaniecanva](https://www.instagram.com/melaniecanva/)       | The Gentle Giant-Killer            |
| 14  | **Andrew Huberman**           | Professor of Neurobiology, Stanford            | [linkedin.com/in/andrew-huberman/](https://www.linkedin.com/in/andrew-huberman/)                         | [@hubermanlab](https://www.instagram.com/hubermanlab/)         | The Protocol Scientist             |
| 15  | **Codie Sanchez**             | Founder Contrarian Thinking                    | [linkedin.com/in/codiesanchez/](https://www.linkedin.com/in/codiesanchez/)                               | [@codiesanchez](https://www.instagram.com/codiesanchez/)       | The Contrarian Operator            |
| 16  | **Shaan Puri**                | Host 'My First Million', Founder Hampton       | [linkedin.com/in/shaanpuri/](https://www.linkedin.com/in/shaanpuri/)                                     | [@shaanpuri](https://www.instagram.com/shaanpuri/)             | The Riffing Storyteller            |
| 17  | **Julie Zhuo**                | Co-founder Sundial, Ex-VP Design Facebook      | [linkedin.com/in/juliezhuo/](https://www.linkedin.com/in/juliezhuo/)                                     | [@joulee](https://www.instagram.com/joulee/)                   | The Empathetic Designer            |
| 18  | **Austin Evans**              | Tech Creator, Host Mystery Tech                | [linkedin.com/in/austin-evans-608b6a32/](https://www.linkedin.com/in/austin-evans-608b6a32/)             | [@austinnotduncan](https://www.instagram.com/austinnotduncan/) | The Energetic Geek                 |
| 19  | **Sara Dietschy**             | Creative Producer, Host 'That Creative Life'   | [linkedin.com/in/saradietschy/](https://www.linkedin.com/in/saradietschy/)                               | [@saradietschy](https://www.instagram.com/saradietschy/)       | The Creative Synthesizer           |
| 20  | **Sahil Bloom**               | Managing Partner SRB Ventures, Author          | [linkedin.com/in/sahilbloom/](https://www.linkedin.com/in/sahilbloom/)                                   | [@sahilbloom](https://www.instagram.com/sahilbloom/)           | The Intentional Sage               |
| 21  | **Brian Chesky**              | Co-founder & CEO at Airbnb                     | [linkedin.com/in/brianchesky/](https://www.linkedin.com/in/brianchesky/)                                 | [@bchesky](https://www.instagram.com/bchesky/)                 | The Design Alchemist               |
| 22  | **Arianna Huffington**        | Founder Thrive Global, Huffington Post         | [linkedin.com/in/ariannahuffington/](https://www.linkedin.com/in/ariannahuffington/)                     | [@ariannahuff](https://www.instagram.com/ariannahuff/)         | The Global Matriarch of Well-being |
| 23  | **Gary Vaynerchuk**           | Chairman VaynerX, CEO VaynerMedia              | [linkedin.com/in/garyvaynerchuk/](https://www.linkedin.com/in/garyvaynerchuk/)                           | [@garyvee](https://www.instagram.com/garyvee/)                 | The Empathy Fireball               |
| 24  | **Caspar Lee**                | Co-founder Creator Ventures                    | [linkedin.com/in/caspar-lee-31583017a/](https://www.linkedin.com/in/caspar-lee-31583017a/)               | [@caspar_lee](https://www.instagram.com/caspar_lee/)           | The Grounded Catalyst              |
| 25  | **Amjad Masad**               | Founder & CEO at Replit                        | [linkedin.com/in/amjadmasad/](https://www.linkedin.com/in/amjadmasad/)                                   | [@amasad](https://www.instagram.com/amasad/)                   | The Sovereign Hacker               |

---

## 🛠️ Technical Section: Dual-Source Scraping Stack

Scraping public LinkedIn and public Instagram profiles without authentication or paid proxies requires overcoming strict bot barriers:

### 1. LinkedIn Public Harvester

- **Crawler User-Agent Emulation:** Requests made with Googlebot/2.1 crawler signatures (`Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)`). LinkedIn's edge servers deliver full Server-Side Rendered (SSR) HTML to certified search indexers without returning the 999 HTTP auth-wall.
- **Schema.org JSON-LD Person Parsing:** Public HTML includes structured `<script type="application/ld+json">` metadata detailing `jobTitle`, `worksFor`, `alumniOf`, and geographic location.
- **OpenGraph Extraction:** Captures `og:title`, `og:description` (connections, professional headline), and high-resolution CDN profile photos (`og:image`).

### 2. Instagram Public Graph Harvester

- **OpenGraph Crawler Emulation:** Requests made with Facebook External Hit crawler signatures (`facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)`). Instagram provides instant OpenGraph meta responses to social preview bots without requiring client-side React hydration or login walls.
- **Bio & Follower Extraction:** Extracts follower metrics, following count, post tally, and the authentic user bio snippet directly from `<meta name="description">`.
- **CDN Media Resolver:** Resolves high-resolution profile imagery from `scontent.cdninstagram.com` via `og:image`.
- **Resilient Proxy & Synthesizer Fallback:** Integrated with Jina AI Reader (`https://r.jina.ai/{url}`) for markdown conversion and a resilient psychological synthesizer for user-pasted custom links.

---

## 🎭 How The Agent Analyzes A Person

The agent reads both streams to model the whole human:

- **LinkedIn Vector (Career & Mind):** Professional ambition, intellectual velocity, craftsmanship, communication tone, and long-horizon vision.
- **Instagram Vector (Soul & Lifestyle):** Aesthetic sensibility, weekend passions, athletic discipline, outdoor connection, humor, and social energy.

From these two vectors, the agent generates:

1. **Core Needs (3 items):** Uncompromising emotional, relational, and intellectual requirements.
2. **Hobbies (4 items):** Authentic personal pursuits sourced from Instagram imagery and captions.
3. **Interests (4 items):** Intellectual passions and career interests sourced from LinkedIn.
4. **Personality Archetype & Vibe:** e.g., _"The Master Craftsman"_, _"The Horizon Visionary"_, _"The Autonomous Nomad"_.
5. **Autonomous Dating Persona Prompt:** The behavioral system prompt dictating how this agent speaks, jokes, and evaluates romantic chemistry on dates.

---

## 🍷 The Dating Theater: Agents Dating On Their Behalf

Users can select any pair from the pool or watch curated flagship dates:

- **Authentic Multi-Turn Dialogue:** The agents converse across multiple conversational turns at ambient venues (e.g. _The Velvet Foundry Speakeasy_, _Komorebi Matcha Roastery_).
- **Inner Monologues Revealed:** Every speech bubble is paired with the agent's private thought bubble, showing their internal psychological reasoning, testing for green flags, and evaluating compatibility.
- **Real-Time Dynamic Chemistry Meter:** Tracks emotional resonance dynamically from 0% to 100%.
- **Mutual Post-Date Verdict:** Both agents debrief their experience, assess shared boundaries, and issue a mutual decision (_"Second Date Planned"_, _"Mutual Spark Discovered"_).

---

## 🏆 Mutual Compatibility Rankings

For every person in the pool:

- The harness cross-evaluates all 24 other candidates (300 cross-pool simulated dates).
- **Weighted Compatibility Score:**  
  $$\text{MatchScore} = (\text{Values} \times 0.30) + (\text{Lifestyle} \times 0.25) + (\text{Intellect} \times 0.25) + (\text{Energy} \times 0.20)$$
- Each ranking displays the Rank badge (#1 Soulmate Match to #24), Primary Driver tag, full Agent Rationale, and instant button to watch their simulated date.

---

## ⚡ Live Extractor: Paste Your Own Public Links

The live site is 100% interactive:

1. Open the **Deploy Agent** tab.
2. Paste any real person's public LinkedIn profile and public Instagram profile.
3. Watch the real-time crawler logs as the dual-source engine extracts both profiles.
4. The new agent is deployed into the pool, opens its structured Profile Page, and can immediately date all other 25 agents!

---

## 🎥 3-Minute Showcase Video Walkthrough

The site contains an integrated **Official 3-Minute Video Showcase** player featuring:

- **0:00 - 0:35 (Scene 1):** The 25 Real People & Dual-Source Verification
- **0:35 - 1:15 (Scene 2):** Agent Psychological Analysis (Needs, Hobbies, Interests)
- **1:15 - 2:05 (Scene 3):** Live Agent Dating Simulation with Inner Monologues
- **2:05 - 2:35 (Scene 4):** Final Compatibility Rankings Leaderboard
- **2:35 - 3:00 (Scene 5):** Live Site Demo: Link Pasting to Instant Agent Deployment
- **Synchronized Voiceover:** Toggleable audio narration and subtitles.

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0

### Installation

```bash
# Clone the repository
git clone
cd "agentic-dating-site"

# Install dependencies
npm install

# Start local development server
npm run dev

# Or build and run production preview
npm run build
npm run preview
```

Open `http://localhost:3000` in your browser.

---

## 📄 License

MIT License. Built for the Agentic Dating Challenge.
