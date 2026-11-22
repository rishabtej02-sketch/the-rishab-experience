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
  status: "cv" | "brief";
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
      "Connecting people, processes, and AI to make a growing creative agency work better.",
    role: "Founders Office · Summer internship",
    problem:
      "Publishing, reporting, and comment moderation were consuming time that a creative team could spend on its work. The challenge extended beyond individual tasks to the way the agency was organized.",
    approach: [
      {
        title: "Start with the system",
        body: "Ran a seven-dimension maturity assessment, with a recorded baseline of 1.3/5. Restructured a flat, MD-centric organization into a six-level hierarchy with pod-based content teams.",
      },
      {
        title: "Make the process repeatable",
        body: "Authored a Policy & Operations Guideline Book containing more than 15 SOPs and designed a 30-day automation roadmap adopted as the agency’s operations playbook.",
      },
      {
        title: "Build tools around real work",
        body: "Built four automation operations systems, including a content calendar and Instagram/YouTube insights workflows. Built Meta Publisher and Comment Manager using the Meta Graph API and Claude.",
      },
      {
        title: "Connect operations and delivery",
        body: "Shipped NarrativeX Tracker, an internal workforce platform covering attendance, activity monitoring, and payroll for approximately 40 employees, deployed on Vercel.",
      },
    ],
    tools: [
      "Meta Graph API",
      "Claude",
      "Vercel",
      "Process mapping",
      "SOP design",
      "Automation",
    ],
    outcomes: [
      { value: "~90%", label: "less weekly reporting effort" },
      { value: "~60%", label: "less time per published post" },
      { value: "30+", label: "client brands supported by Meta Publisher" },
    ],
    takeaway:
      "The useful part of automation is the time it gives people back. The tools and the operating model need to improve together.",
    source:
      "Supplied technical, nontechnical, and technomanagerial CVs. Figures are CV-reported estimates, not independently audited results.",
    status: "cv",
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
      "NarrativeX’s CV-reported outcomes include approximately 90% less weekly reporting effort.",
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
    text: "Exhibition branding, website revamp ideation, and lead generation identifying 50+ distributor prospects to support global expansion.",
  },
  {
    company: "MetaLabs Services LLP",
    role: "Marketing Research and Analyst",
    date: "Dec 2023–Jun 2024",
    text: "Prompt engineering at Write Genius, 10 GrabOn startup case studies, LinkedIn outreach, and research across 10+ SaaS categories.",
  },
  {
    company: "Actualize Tech Private Limited",
    role: "Market Research Intern",
    date: "Jun–Sep 2023",
    text: "20+ personalized email campaigns for US and Canadian stores; Excel-based analysis supporting a reported 15% improvement in email open rates and campaign efficiency.",
  },
];
