export const person = {
  name: "G. Rishab Tej",
  headline: "I turn ideas into things that work.",
  summary:
    "An engineer by training. A builder by instinct. I connect business, technology, and people to turn an interesting problem into something useful.",
  email: "rishabtej02@gmail.com",
  phone: "+918309770934",
  phoneLabel: "+91 83097 70934",
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

type EvidenceVideo = {
  src: string;
  poster: string;
  width: number;
  height: number;
  description: string;
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
  status: "cv" | "brief" | "documented" | "repository";
  evidence?: {
    images?: EvidenceImage[];
    links?: EvidenceLink[];
    video?: EvidenceVideo;
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
        body: "Built NarrativeX Tracker, a web app and Windows desktop agent for attendance, activity reports, and payroll. I also built the NarrativeX Media agency website at narrativexmedia.in, a separate doctor-discovery site with an appointment enquiry flow, and a Shopify storefront for Theekaa with 54 products across four collections.",
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
    title: "Pre-Flight Creative Scoring",
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
        title: "Define what it means to outperform",
        body: "Labeled YouTube videos by whether they beat the trailing view-count median for earlier uploads from the same channel and format. The LightGBM model combines CLIP image embeddings, TF-IDF title features, computer-vision features, and upload-time metadata.",
      },
      {
        title: "Compare drafts and inspect a visual response",
        body: "Built a Streamlit app to compare drafts, show scores and reference percentiles, and suggest a budget split for testing. Grad-CAM shows where a separate CNN responded to a thumbnail, alongside platform checks and comparable examples.",
      },
      {
        title: "Evaluate on newer YouTube uploads",
        body: "Trained on 9,548 eligible YouTube videos and evaluated on 2,387 newer uploads. The saved evaluation reports raw ROC AUC of 0.6154 and calibrated ROC AUC of 0.6094. I also ran the scorer on a separate, unlabeled Meta and Google corpus to compare score distributions across platforms.",
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
      { value: "9,548", label: "YouTube videos used for training" },
      { value: "0.615", label: "raw ROC AUC on 2,387 newer YouTube videos" },
      { value: "29,405", label: "unlabeled Meta and Google creatives scored for comparison" },
    ],
    takeaway:
      "A useful model helps someone make a decision. A score becomes more useful when its signals can be examined.",
    source:
      "Training counts and metrics come from the repository’s saved evaluations. The Meta and Google count is from the saved scored corpus.",
    status: "repository",
    evidence: {
      video: {
        src: "/evidence/creative-scoring/preflight-demo.mp4",
        poster: "/evidence/creative-scoring/demo-poster.webp",
        width: 1600,
        height: 758,
        description: "Silent screen recording. I select a YouTube brand pool, set the budget and allocation preferences, add titles to three example ads, and start the scoring run.",
      },
      images: [
        {
          src: "/evidence/creative-scoring/creative-context.webp",
          alt: "Pre-Flight Creative Scoring interface with platform, brand pool, budget, and allocation controls",
          width: 1440,
          height: 682,
          title: "Set the scoring context",
          caption: "Choose a platform and brand pool before setting the test budget and allocation preferences.",
        },
        {
          src: "/evidence/creative-scoring/draft-comparison.webp",
          alt: "Three draft food-delivery ads side by side, with a title field for each and a Score creatives button",
          width: 1440,
          height: 682,
          title: "Compare three draft ads",
          caption: "Upload example creatives and enter the title for each before requesting scores.",
        },
        {
          src: "/evidence/creative-scoring/score-distribution.webp",
          alt: "Histogram showing a wider YouTube score distribution and narrower Meta and Google score distributions",
          width: 1440,
          height: 880,
          title: "Score distributions across platforms",
          caption: "The same scorer produced a narrower range on Meta and Google creatives. Those datasets are unlabeled and used for cross-platform comparison.",
        },
        {
          src: "/evidence/creative-scoring/gradcam-examples.webp",
          alt: "Grad-CAM overlays highlight areas of eight example YouTube thumbnails that drew a response from the CNN",
          width: 1300,
          height: 620,
          title: "Grad-CAM thumbnail examples",
          caption: "Warm colors show where the separate CNN responded most strongly. The examples come from the project’s saved visualization.",
        },
      ],
      links: [
        {
          href: "https://github.com/rishabtej02-sketch/creative-scoring",
          label: "Creative Scoring source",
          detail: "Streamlit application, feature extraction, and model training code.",
        },
        {
          href: "https://github.com/rishabtej02-sketch/creative-scoring/blob/main/data/calibration_report.csv",
          label: "Saved evaluation results",
          detail: "Raw and calibrated metrics on held-out YouTube uploads.",
        },
      ],
    },
  },
  {
    slug: "next-step-hr",
    name: "Next Step HR",
    title: "Research and campaigns for employer acquisition.",
    category: "RESEARCH + B2B MARKETING",
    theme: "nextstep",
    year: "FROM AUG 2026",
    summary:
      "Built a funding-news tracker, researched employer prospects, and ran and reviewed Meta campaigns for a recruitment consultancy.",
    role: "Marketing Consultant – Performance Marketing & Lead Generation",
    problem:
      "Next Step HR wanted to generate more enquiries from companies hiring mid-senior and senior talent. The corporate project combined employer research, campaign testing, and lead tracking so business development could see where an enquiry came from and follow up.",
    approach: [
      {
        title: "Build a funding-news tracker",
        body: "I built a Google Apps Script tracker that pulled funding stories from Inc42, Entrackr, and YourStory, filtered and deduplicated the items, and prepared a daily digest. I added company-name extraction and LinkedIn lookup links, then turned the resulting company list into a prospecting worklist.",
      },
      {
        title: "Research employers and decision-makers",
        body: "I used the worklist to research recently funded companies and identify potential contacts. I evaluated Apollo.io for company and decision-maker data and coordinated Zoho demos for tracking prospects and follow-ups. A later verification workflow was configured to use LinkedIn Jobs and official careers pages to check whether vacancies were open.",
      },
      {
        title: "Turn industry signals into editorial briefs",
        body: "For Next Step Signals, I researched hiring developments, attached original sources, and added employer outreach angles to the team's post ideas. The broader editorial workflow used a Sheets news collector and a separate review step to check source facts before drafting ideas for The Hiring Brief and MythBuster Monday.",
      },
      {
        title: "Test campaigns and diagnose delivery",
        body: "I set up an employer-facing Meta engagement campaign and rebuilt it when some placements failed to deliver. In separate candidate recruitment campaigns, I tested broad and narrow audiences and paused ad sets when the responses did not match the role.",
      },
      {
        title: "Review performance and plan the handoff",
        body: "I reviewed six posts and five paid ads using Instagram insights and Meta Ads Manager, comparing engagement, landing-page activity, and candidate responses by campaign objective. The employer project also scoped source attribution and an enquiry handoff to business development.",
      },
    ],
    tools: [
      "Google Apps Script",
      "Google Sheets",
      "RSS",
      "Meta Ads Manager",
      "LinkedIn research",
      "Apollo.io evaluation",
    ],
    outcomes: [
      { value: "3", label: "funding sources in the original RSS tracker" },
      { value: "6 + 5", label: "posts and paid ads reviewed, 8 Sep–11 Oct 2026" },
      { value: "90 days", label: "scope of the NMIMS corporate project" },
    ],
    takeaway:
      "Funding news was most useful when it pointed to a company worth researching. For campaigns, the objective determined which results were worth comparing.",
    source:
      "Role and project scope come from the offer and employer brief. Workflow details and review counts come from my work log, research trackers, and September–October performance review.",
    status: "documented",
    evidence: {
      links: [
        {
          href: "https://www.linkedin.com/company/nextstephruae/",
          label: "Next Step HR on LinkedIn",
          detail: "The consultancy’s public recruitment and employer-facing channel.",
        },
        {
          href: person.linkedin,
          label: "My Next Step HR experience",
          detail: "Public role and scope for the performance marketing and lead generation project.",
        },
      ],
    },
  },
  {
    slug: "austridge",
    name: "The Austridge Group",
    title: "Restructuring Austridge’s website.",
    category: "OPERATIONS + DIGITAL",
    theme: "austridge",
    year: "NOV 2026 · WEBSITE PROJECT",
    summary:
      "Planned the move from six to four website service categories and coordinated how TAG Staffing and BRIO Projects appeared on the group site.",
    role: "Website strategy, content & agency coordination",
    problem:
      "The group’s website needed to explain what a client could hire it for and where its specialist businesses fit. The existing service categories overlapped, so visitors needed a clearer route to staffing, facilities, construction, or managed operations.",
    approach: [
      {
        title: "Consolidate six service categories into four",
        body: "I presented the revised structure to leadership and the web agency. It organized the site around Labour Hire & Recruitment, Facilities Management, Construction Management, and Managed Services. I shared rewritten service content and mapped the homepage cards and navigation. General project and event delivery sat within Managed Services, where the content plan also proposed digital and systems support.",
      },
      {
        title: "Give TAG Staffing a clear place on the site",
        body: "I specified how to introduce TAG Staffing within Labour Hire & Recruitment, including how the brand should appear alongside the service label. That gave employers one clear route into staffing while keeping the group’s navigation organized around client needs.",
      },
      {
        title: "Coordinate the handoff to BRIO Projects",
        body: "I coordinated the decision to keep a construction overview on the group site and give visitors a link to BRIO Projects for specialist detail. I prepared the content and routing instructions with leadership. The web agency implemented the site changes.",
      },
      {
        title: "Support driver recruitment",
        body: "My wider operations work covered candidate screening and interview coordination for the driver recruitment pipeline. The website brief also proposed a homepage introduction to the Transit Pathway Victoria partnership, with a link for visitors who wanted to explore it.",
      },
    ],
    tools: [
      "Website content strategy",
      "Service navigation",
      "Agency coordination",
      "Recruitment operations",
    ],
    outcomes: [
      { value: "6 → 4", label: "service categories consolidated on the group site" },
      { value: "TAG", label: "staffing positioned within Labour Hire & Recruitment" },
      { value: "BRIO", label: "construction overview with a path to the specialist site" },
    ],
    takeaway:
      "The service structure gave visitors a clear starting point and the web agency a concrete plan to implement.",
    source:
      "The public website shows the service structure. November website records document my content and coordination contribution. Recruitment scope comes from my portfolio brief.",
    status: "documented",
    evidence: {
      links: [
        {
          href: "https://theaustridgegroup.com.au/index.php",
          label: "The Austridge Group website",
          detail: "The live homepage and four-service navigation.",
        },
        {
          href: "https://theaustridgegroup.com.au/labour-hire.php",
          label: "Labour Hire & Recruitment",
          detail: "The service page for staffing, recruitment, and workforce solutions.",
        },
        {
          href: "https://theaustridgegroup.com.au/construction-management.php",
          label: "Construction Management",
          detail: "The group’s construction overview and its introduction to BRIO Projects.",
        },
        {
          href: "https://theaustridgegroup.com.au/managed-services.php",
          label: "Managed Services",
          detail: "The public page showing how project delivery, event delivery, and outsourced operations are grouped.",
        },
        {
          href: "https://brioprojects.com.au/",
          label: "BRIO Projects",
          detail: "The specialist site linked from the group’s construction page.",
        },
      ],
    },
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
      "At Next Step HR, a funding-news tracker turned sourced stories into a worklist of companies to research.",
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
    company: "Next Step HR",
    role: "Marketing Consultant – Performance Marketing & Lead Generation",
    date: "From Aug 2026",
    text: "Built a funding-news tracker, researched employer prospects, and reviewed Meta campaigns during a 90-day NMIMS corporate project.",
    slug: "next-step-hr",
  },
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
