export const person = {
  name: "G. Rishab Tej",
  headline: "I turn ideas into things that work.",
  summary:
    "An engineer by training. A builder by instinct. I connect business, technology, and people to turn an interesting problem into something useful.",
  email: "",
  linkedin: "https://www.linkedin.com/in/rishab-tej-2b7085219/",
  github: "https://github.com/rishabtej02-sketch",
  education: [
    {
      title: "MBA · Digital Transformation",
      institution: "SBM, NMIMS Mumbai",
      years: "2025–2027",
    },
    {
      title: "B.Tech · Computer Science & Engineering",
      institution: "Vignana Bharathi Institute of Technology",
      years: "2020–2024",
    },
  ],
};

type EvidenceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  caption: string;
};

type EvidenceLink = {
  href: string;
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  name: string;
  title: string;
  category: string;
  theme: string;
  year: string;
  summary: string;
  role: string;
  problem: string;
  approach: { title: string; body: string }[];
  tools: string[];
  outcomes: { value: string; label: string }[];
  takeaway: string;
  source: string;
  status: "cv" | "brief" | "documented";
  evidence?: {
    images?: EvidenceImage[];
    links?: EvidenceLink[];
  };
};

export const projects: Project[] = [
  {
    slug: "narrativex",
    name: "NarrativeX Media",
    title: "Less busywork. More possibility.",
    category: "AI + OPERATIONS",
    theme: "narrativex",
    year: "MAR—JUN 2026",
    summary:
      "Redesigned how a creative agency planned, published, and reported on client work, then built the tools to support it.",
    role: "Founders Office · Summer internship",
    problem:
      "Publishing, reporting, and comment moderation were consuming time that a creative team could spend on its work. The challenge extended beyond individual tasks to the way the agency was organized.",
    approach: [
      {
        title: "Start with the system",
        body: "Assessed seven areas of agency operations and recorded a baseline of 1.3/5. Designed a six-level structure with small content teams so writers, editors, and social media managers had clear ownership and escalation paths.",
      },
      {
        title: "Make the process repeatable",
        body: "Wrote a Policy & Operations Guideline Book with 15+ SOPs covering roles, shoot preparation, file handoffs, editing, and client approvals. Sequenced the work in a 30-day automation roadmap.",
      },
      {
        title: "Automate planning and reporting",
        body: "Built a content calendar that notified assignees and created review events, a daily work-update tracker, separate Instagram and YouTube reporting workflows, and a master workbook sync.",
      },
      {
        title: "Support publishing and moderation",
        body: "Built Meta Publisher v2 for drafting brand-specific captions, scheduling Instagram and Facebook posts, and reviewing publish failures. Built a Comment Manager inbox where social media managers could review, edit, and approve AI-drafted replies.",
      },
      {
        title: "Build workforce and client-facing tools",
        body: "Built NarrativeX Tracker, a web app and Windows desktop agent for attendance, activity reports, and payroll. Delivered an agency website, a doctor-discovery website with an appointment enquiry flow, and a Shopify storefront for Theekaa with 54 imported products across four collections.",
      },
    ],
    tools: [
      "Meta Graph API",
      "Claude",
      "Google Apps Script",
      "Next.js",
      "Supabase",
      "Electron",
      "Shopify",
    ],
    outcomes: [
      { value: "15+", label: "SOPs documented" },
      { value: "5", label: "planning and reporting automations, including the master sync" },
      { value: "3", label: "web and commerce builds delivered" },
    ],
    takeaway:
      "The tools worked best when each review, approval, and handoff already had a clear owner.",
    source:
      "Deliverables are documented in the internship report, automation overview, and Tracker handover. Screenshots show the interfaces at the time of the report.",
    status: "documented",
    evidence: {
      images: [
        {
          src: "/evidence/narrativex/meta-publisher.webp",
          alt: "Meta Publisher overview showing publishing states, recent posts, and failed publishes",
          width: 1100,
          height: 523,
          title: "Meta Publisher",
          caption: "Publishing overview with a failure log. Client names and counts are redacted. Internship report, Figure 4.",
        },
        {
          src: "/evidence/narrativex/comment-manager.webp",
          alt: "Comment Manager approval queue with AI Draft labels and Approve, Edit, and Reject controls",
          width: 689,
          height: 440,
          title: "Comment Manager",
          caption: "The moderation inbox shows where a manager reviews an AI draft before replying. Account and comment details are redacted. Internship report, Figure 5.",
        },
        {
          src: "/evidence/narrativex/workforce-tracker.webp",
          alt: "NarrativeX Tracker admin interface with attendance, payroll, and reporting navigation",
          width: 1100,
          height: 549,
          title: "NarrativeX Tracker",
          caption: "The admin dashboard connects attendance, reports, and payroll. Workforce figures are redacted. Internship report, Figure 6.",
        },
        {
          src: "/evidence/narrativex/instagram-insights.webp",
          alt: "Instagram insights spreadsheet with post metadata and publishing fields",
          width: 1058,
          height: 347,
          title: "Instagram Insights Tracker",
          caption: "The reporting workbook brings post metadata and content into one view. Client data is redacted. Internship report, Figure 1.",
        },
        {
          src: "/evidence/narrativex/theekaa-store.webp",
          alt: "Theekaa Shopify storefront showing the sweets and snacks collections",
          width: 530,
          height: 530,
          title: "Theekaa storefront",
          caption: "The storefront build showing how products were grouped into collections. Internship report, Figure 8.",
        },
      ],
      links: [
        {
          href: "https://narrativexhealthcare.in/",
          label: "NarrativeX Healthcare",
          detail: "Public doctor-discovery website.",
        },
        {
          href: "https://github.com/narrativexmedia-commits/narrativex-tracker",
          label: "NarrativeX Tracker source",
          detail: "Web application repository and implementation history.",
        },
      ],
    },
  },
  {
    slug: "rockwell",
    name: "Rockwell Industries Limited",
    title: "Taking a refrigeration brand to market.",
    category: "B2B MARKETING + RESEARCH",
    theme: "rockwell",
    year: "DEC 2024—APR 2025",
    summary:
      "Supported exhibition branding and website planning, and researched distributor prospects for international expansion.",
    role: "Marketing Intern",
    problem:
      "Rockwell was refreshing how it presented its commercial refrigeration business while exploring new markets. The marketing team needed exhibit and website ideas that aligned with the rebrand, alongside research it could use to identify potential distributors.",
    approach: [
      {
        title: "Support the exhibition experience",
        body: "Contributed to exhibition branding and event-design planning with the marketing team. The work supported how Rockwell presented its products and brand to a trade audience.",
      },
      {
        title: "Explore what the website should communicate",
        body: "Contributed ideas for the website revamp as part of the same rebrand, working with the team across physical and digital customer touchpoints.",
      },
      {
        title: "Research routes into new markets",
        body: "Researched potential distributor networks and developed prospect profiles to support lead generation and market-entry work. The employer’s completion certificate records 50+ distributor prospects identified during the internship.",
      },
    ],
    tools: ["B2B marketing", "Exhibition branding", "Market-entry research", "Distributor prospecting"],
    outcomes: [
      { value: "50+", label: "distributor prospects identified, documented by Rockwell" },
      { value: "150+", label: "prospect profiles reported in my LinkedIn experience" },
      { value: "Dec–Apr", label: "internship completed, 20 Dec 2024 to 26 Apr 2025" },
    ],
    takeaway:
      "The internship showed me how brand presentation and distributor research contribute to the same expansion effort.",
    source:
      "Rockwell’s completion certificate confirms the internship dates and scope and documents the distributor count. The prospect-profile count comes from my LinkedIn experience.",
    status: "documented",
    evidence: {
      images: [
        {
          src: "/evidence/rockwell/internship-certificate.webp",
          alt: "Excerpt of Rockwell’s internship completion certificate naming Rishab Tej, his dates, and his marketing and distributor research contributions",
          width: 686,
          height: 362,
          title: "Internship completion certificate",
          caption: "Excerpt confirming the role, dates, and contributions to branding, website ideation, and distributor research.",
        },
      ],
      links: [
        {
          href: "https://www.linkedin.com/posts/rockwell-industries-ltd._aahar2025-rockwellindustries-nextgencoolingsolutions-activity-7303604771490316288-Ho-C",
          label: "Rockwell at AAHAR 2025",
          detail: "The company’s public exhibition post from the internship period.",
        },
        {
          href: "https://www.linkedin.com/in/rishab-tej-2b7085219/details/experience/",
          label: "LinkedIn experience",
          detail: "My Rockwell role and reported prospect-profile count.",
        },
      ],
    },
  },
  {
    slug: "metalabs",
    name: "MetaLabs Services LLP",
    title: "Research across four products.",
    category: "MARKET RESEARCH + CONTENT",
    theme: "metalabs",
    year: "DEC 2023—JUN 2024",
    summary:
      "Worked on AI writing prompts, startup case studies, B2B prospecting, and SaaS research across four brand assignments.",
    role: "Marketing Research and Analyst Intern",
    problem:
      "The internship spanned brands with different marketing needs. WriteGenius needed prompts for editorial content, GrabOn needed startup stories, SellersCommerce needed prospect research, and Alternatives.co needed comparisons across software categories.",
    approach: [
      {
        title: "WriteGenius · Prompt engineering",
        body: "Crafted prompts for blog elements in the long-form writing product and used market insights to support account-based marketing.",
      },
      {
        title: "GrabOn · Startup research and case studies",
        body: "Identified 10 startups and wrote case studies for GrabOn’s LinkedIn audience, framing what the companies did and what made their ideas worth covering.",
      },
      {
        title: "SellersCommerce · B2B prospecting",
        body: "Identified key decision-makers at potential customer companies and sent LinkedIn connection requests to support targeted outreach.",
      },
      {
        title: "Alternatives.co · SaaS market research",
        body: "Researched products across more than 10 SaaS categories, looking at market trends, competitors, and user needs to inform the platform’s coverage.",
      },
    ],
    tools: ["Prompt engineering", "Case study writing", "LinkedIn prospecting", "SaaS research"],
    outcomes: [
      { value: "4", label: "brand assignments documented in my experience" },
      { value: "10", label: "startup case studies developed for GrabOn" },
      { value: "10+", label: "SaaS categories researched for Alternatives.co" },
    ],
    takeaway:
      "The same research habits served different outputs: a sharper prompt, a readable company story, a prospect list, or a product comparison.",
    source:
      "The MetaLabs completion record covers 26 December 2023 to 7 June 2024. The four brand assignments are described in my LinkedIn experience and internship records.",
    status: "documented",
    evidence: {
      links: [
        {
          href: "https://www.linkedin.com/in/rishab-tej-2b7085219/details/experience/",
          label: "LinkedIn experience",
          detail: "My WriteGenius, GrabOn, SellersCommerce, and Alternatives.co assignments.",
        },
        {
          href: "https://www.linkedin.com/company/grabon/",
          label: "GrabOn on LinkedIn",
          detail: "The publication channel for the startup case-study work.",
        },
        {
          href: "https://alternatives.co/",
          label: "Alternatives.co",
          detail: "The software discovery platform where the SaaS research was applied.",
        },
      ],
    },
  },
  {
    slug: "hyderabad-pickleball",
    name: "Hyderabad Pickleball Association",
    title: "A sport becomes a community.",
    category: "COMMUNITY + EXPERIENCE",
    theme: "pickleball",
    year: "COMMUNITY BUILDING",
    summary:
      "Bringing people onto the court through partnerships, tournaments, and shared experiences.",
    role: "Community co-building, partnerships & event operations",
    problem:
      "A growing sport needs more than awareness. It needs opportunities for people to play, meet, and return. This work brings community development and event execution into the same conversation.",
    approach: [
      {
        title: "Create reasons to participate",
        body: "Contributed to co-building a sports community with Hyderabad Pickleball Association, connecting an interest in pickleball with community engagement.",
      },
      {
        title: "Bring partners into the picture",
        body: "Worked on developing partnerships to support the community and its activities. Partner names and commercial details are not included in the supplied materials.",
      },
      {
        title: "Make the experience happen",
        body: "Helped organize tournaments and drive engagement. The focus of this portfolio overview is the connection between community, partnerships, and event operations.",
      },
    ],
    tools: [
      "Community engagement",
      "Partnership development",
      "Tournament operations",
    ],
    outcomes: [
      { value: "People", label: "community co-building" },
      { value: "Partners", label: "relationship development" },
      { value: "Play", label: "tournament organization" },
    ],
    takeaway:
      "A community is built in the experience people have together, on and off the court.",
    source:
      "Based on the supplied project brief. Dates, event names, exact role title, and quantitative outcomes are awaiting confirmation.",
    status: "brief",
  },
  {
    slug: "creative-scoring",
    name: "AI Creative Scoring System",
    title: "Before the spend, a better signal.",
    category: "MACHINE LEARNING + ADS",
    theme: "scoring",
    year: "ACADEMIC PROJECT",
    summary:
      "A pre-flight scoring tool that helps marketers examine creative before committing media spend.",
    role: "Academic project · NMIMS Mumbai",
    problem:
      "Media allocation decisions often happen before a creative’s weaknesses are clear. This project explored whether visual, text, and metadata signals could support better pre-launch diagnosis.",
    approach: [
      {
        title: "Look at the creative from several angles",
        body: "Built a pre-spend ad scoring tool trained on 13,000 YouTube ads. The model combines CLIP visual features, TF-IDF title features, and metadata with LightGBM.",
      },
      {
        title: "Make the signal interpretable",
        body: "Used CNN Grad-CAM to support diagnosis of weak creatives before launch. The intent was to make visual attention patterns inspectable alongside the score.",
      },
      {
        title: "Test beyond the training context",
        body: "The technical CV reports validation on 32,000 scraped Meta and Google ads. Accuracy, lift, error metrics, and deployment details were not provided; no performance guarantee is claimed here.",
      },
    ],
    tools: [
      "Python",
      "CLIP",
      "LightGBM",
      "TF-IDF",
      "CNN Grad-CAM",
      "Machine learning",
    ],
    outcomes: [
      { value: "13K", label: "YouTube ads used for training" },
      { value: "32K", label: "Meta & Google ads used for validation" },
      { value: "3", label: "input types: visuals, titles, metadata" },
    ],
    takeaway:
      "A useful model helps someone make a decision. A score becomes more useful when its signals can be examined.",
    source:
      "Supplied technical CV, “Pre-Flight Creative Scoring System.” Dataset sizes are reported in the CV; predictive performance was not supplied.",
    status: "cv",
  },
  {
    slug: "next-step-hr",
    name: "Next Step HR",
    title: "From industry noise to useful content.",
    category: "RESEARCH + B2B MARKETING",
    theme: "nextstep",
    year: "CONTENT SYSTEMS",
    summary:
      "Connecting industry research, employer-focused marketing, and news-to-content automation.",
    role: "B2B content strategy, research & workflow development",
    problem:
      "Employer-focused communication needs relevance and a consistent point of view. The work connects industry research with a repeatable approach to B2B content.",
    approach: [
      {
        title: "Begin with the audience",
        body: "Worked on employer-focused marketing and B2B content strategy for Next Step HR, using industry research as the starting point for communication.",
      },
      {
        title: "Connect news and content",
        body: "Worked on automated news-to-content workflows. This overview represents the research-to-content concept; internal prompts, sources, and operational materials are not published.",
      },
      {
        title: "Keep the message useful",
        body: "The portfolio brief identifies research-led content and marketing as the scope. Specific campaign deliverables and measured outcomes remain to be documented.",
      },
    ],
    tools: ["Industry research", "B2B content strategy", "Content workflows"],
    outcomes: [
      { value: "Research", label: "industry-led inputs" },
      { value: "Relevance", label: "employer-focused messaging" },
      { value: "Repeatability", label: "news-to-content workflows" },
    ],
    takeaway:
      "The value is in translating an industry development into something an employer can use.",
    source:
      "Based on the supplied project brief. Dates, platform details, formal role title, and campaign results are awaiting confirmation.",
    status: "brief",
  },
  {
    slug: "austridge",
    name: "Austridge Group",
    title: "Connecting the moving parts.",
    category: "OPERATIONS + DIGITAL",
    theme: "austridge",
    year: "BUSINESS OPERATIONS",
    summary:
      "Working across recruitment, communication, business coordination, and website initiatives.",
    role: "Recruitment operations & digital communication",
    problem:
      "Recruitment operations involve people, communication, and coordination across multiple moving parts. This work sits at that intersection, with a parallel focus on digital presence.",
    approach: [
      {
        title: "Work across the handoffs",
        body: "Contributed to recruitment operations and business coordination at Austridge Group, as described in the supplied portfolio brief.",
      },
      {
        title: "Support clearer communication",
        body: "Worked on digital communication alongside operational responsibilities. Confidential candidate information and company materials are excluded from this overview.",
      },
      {
        title: "Develop the digital presence",
        body: "Participated in website development initiatives. The supplied brief does not specify the technology stack, launch status, or attributable results.",
      },
    ],
    tools: [
      "Recruitment operations",
      "Business coordination",
      "Digital communication",
      "Website development",
    ],
    outcomes: [
      { value: "People", label: "recruitment operations" },
      { value: "Clarity", label: "digital communication" },
      { value: "Presence", label: "website initiatives" },
    ],
    takeaway:
      "Execution often means connecting the handoffs that sit between individual tasks.",
    source:
      "Based on the supplied project brief. Employment dates, formal title, tools, and measurable outcomes are awaiting confirmation.",
    status: "brief",
  },
];

export const disciplines = [
  {
    name: "Strategy",
    phrase: "Find the problem worth solving.",
    text: "From a seven-dimension agency maturity assessment to an elder-care product roadmap, I translate an open question into a clear direction.",
    tags: ["Research", "Product thinking", "Business models"],
    example: "NarrativeX Media",
    slug: "narrativex",
  },
  {
    name: "Marketing",
    phrase: "Make the useful thing resonate.",
    text: "Research-led B2B content, creative diagnostics, and audience-focused communication connect what a business does with what people need.",
    tags: ["B2B content", "Market research", "Creative analytics"],
    example: "Next Step HR",
    slug: "next-step-hr",
  },
  {
    name: "Technology",
    phrase: "Build a better way to work.",
    text: "I use automation, data, and internal tools to turn repetitive work into systems that teams can actually use.",
    tags: ["AI workflows", "Python & SQL", "Internal tools"],
    example: "AI Creative Scoring System",
    slug: "creative-scoring",
  },
  {
    name: "Execution",
    phrase: "Close the gap between idea and reality.",
    text: "SOPs, partnerships, live events, and team coordination: the details that turn a plan into an experience.",
    tags: ["Operations", "Partnerships", "Events"],
    example: "Hyderabad Pickleball Association",
    slug: "hyderabad-pickleball",
  },
];

export const process = [
  {
    name: "Understand",
    question: "What is really getting in the way?",
    text: "Start with the people doing the work. Map the friction before deciding what to build.",
    example:
      "At NarrativeX, a seven-dimension maturity assessment established the starting point.",
    slug: "narrativex",
  },
  {
    name: "Research",
    question: "What do we know, and what are we assuming?",
    text: "Combine context, data, and the audience’s perspective. Make the unanswered questions visible.",
    example:
      "At Next Step HR, industry research informs employer-focused B2B content.",
    slug: "next-step-hr",
  },
  {
    name: "Experiment",
    question: "What is the smallest useful way to test it?",
    text: "Make a hypothesis tangible. A model, a prototype, or a new workflow can reveal what a plan cannot.",
    example:
      "Creative scoring combines visual, text, and metadata signals to explore pre-launch diagnosis.",
    slug: "creative-scoring",
  },
  {
    name: "Build",
    question: "How does this become part of everyday work?",
    text: "Connect the tool to the process. Make responsibilities, handoffs, and the next step clear.",
    example:
      "Meta Publisher connects AI captions with publishing through the Meta Graph API.",
    slug: "narrativex",
  },
  {
    name: "Measure",
    question: "Did it make something meaningfully better?",
    text: "Look for a useful change in the real world. Keep the distinction between measured results and assumptions clear.",
    example:
      "NarrativeX’s reporting dashboards brought reach, views, and engagement into a shared view for each account.",
    slug: "narrativex",
  },
];

export const experience = [
  {
    company: "NarrativeX Media Pvt. Ltd.",
    role: "Founders Office · Summer internship",
    date: "Mar–Jun 2026",
    text: "Agency operations, AI-enabled publishing, reporting automation, and internal tools.",
  },
  {
    company: "Rockwell Industries Limited",
    role: "Marketing Internship",
    date: "Dec 2024–Apr 2025",
    text: "Supported exhibition branding, event planning, and website revamp ideation. Rockwell documented 50+ distributor prospects identified for international expansion.",
    slug: "rockwell",
  },
  {
    company: "MetaLabs Services LLP",
    role: "Marketing Research and Analyst",
    date: "Dec 2023–Jun 2024",
    text: "Built writing prompts at WriteGenius, developed 10 GrabOn startup case studies, identified decision-makers for SellersCommerce, and researched 10+ SaaS categories for Alternatives.co.",
    slug: "metalabs",
  },
  {
    company: "Actualize Tech Private Limited",
    role: "Market Research Intern",
    date: "Jun–Sep 2023",
    text: "20+ personalized email campaigns for US and Canadian stores; Excel-based analysis supporting a reported 15% improvement in email open rates and campaign efficiency.",
  },
];

export const volunteering: {
  role: string;
  organization: string;
  date: string;
  text: string;
  evidence?: EvidenceLink;
}[] = [
  {
    role: "Media and PR Lead",
    organization: "Street Cause",
    date: "Jan–Apr 2023",
    text: "Secured partnerships with Tamada Media, Telangana Today, and Fever FM and supported publicity for Street Cause’s Armaan Malik fundraising concert in Hyderabad.",
    evidence: {
      href: "https://telanganatoday.com/hyderabad-armaan-malik-to-star-in-concert-organized-by-street-cause-on-april-8",
      label: "Telangana Today’s concert coverage",
      detail: "Event coverage",
    },
  },
  {
    role: "Divisional President",
    organization: "Street Cause · VBIT",
    date: "Jun 2021–Jun 2022",
    text: "Led a division of 150+ volunteers. Organized Congregate 5.0, led the Bailsout 2.0 fundraiser that raised over ₹3 lakh, and coordinated four welfare projects in the village the division adopted.",
    evidence: {
      href: "https://telugu.asianetnews.com/telangana/street-cause-vbit-successfully-conducted-congregate-that-is-youth-assembly-r9lpff",
      label: "Congregate coverage",
      detail: "Event coverage",
    },
  },
  {
    role: "Chief of Staff and Bangalore chapter founding member",
    organization: "Street Cause",
    date: "Jun 2021–Jun 2022",
    text: "Oversaw fundraising, finance, and legal compliance, initiated the 80G certification process, and helped establish the Bangalore chapter.",
  },
  {
    role: "Director",
    organization: "Hyderabad Youth Assembly",
    date: "Jun 2021–Jun 2022",
    text: "Progressed from organizing committee member to director and contributed to planning and running the assembly.",
    evidence: {
      href: "https://hya.streetcause.org/home",
      label: "Hyderabad Youth Assembly",
      detail: "Organization website",
    },
  },
  {
    role: "Volunteer",
    organization: "Street Cause",
    date: "Dec 2020–Jun 2021",
    text: "Volunteered for RFC 7.0 during the pandemic and sold more than 200 event passes, raising approximately ₹20,000.",
  },
];
