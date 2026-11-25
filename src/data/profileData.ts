export interface ProjectSlide {
  src: string;
  caption: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Pitch Deck & Innovation' | 'Growth Strategy & M&A' | 'Business Writing' | 'Consulting Case';
  projectType: string;
  date: string;
  locationOrOrg: string;
  roleOrDeptLabel: string;
  roleOrDeptValue: string;
  summary: string;
  mission?: string;
  vision?: string;
  highlights?: string[];
  tableOfContents?: string[];
  tags: string[];
  heroImage: string;
  externalLinkLabel: string;
  externalLinkUrl: string;
  slides: ProjectSlide[];
  accent: 'crimson' | 'emerald' | 'cyan' | 'amber';
}

export interface ToolkitPillar {
  id: string;
  title: string;
  subtitle?: string;
  icon: 'sparkles' | 'globe' | 'target' | 'calculator' | 'microscope' | 'layers' | 'trending' | 'landmark';
  bullets: string[];
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  category: 'work' | 'education' | 'leadership';
  role: string;
  organization: string;
  subOrganization?: string;
  location: string;
  badge: string;
  description: string;
  highlights: string[];
  logoSrc?: string;
}

export interface CertificationItem {
  id: string;
  category: string;
  title: string;
  issuer: string;
  subtitle: string;
  highlights: string[];
  appliedTo?: string;
  externalLinkLabel?: string;
  externalLinkUrl?: string;
  imageSrc: string;
}

export const PROFILE = {
  fullName: 'Kesav Ram Singh Kishore Singh',
  displayName: 'Kesav Ram Singh',
  tagline: 'Bridging the Realms of Science & Strategy',
  currentRole: 'Strategy Analyst — Competitive Intelligence & New Product Planning',
  currentOrg: 'JUST LABS',
  currentOrgDesc: 'Healthcare Venture Capital · Venture Accelerator & Studio',
  location: 'New York, NY · Brookline, MA',
  degree: 'M.S. in Biotechnology Enterprise & Management',
  school: "Northeastern University — D'Amore-McKim School of Business & College of Science",
  bio: 'Life sciences strategist with expertise in biotech research, consulting, and financial modeling. Passionate about bridging science with strategy, skilled in evaluating therapeutic assets and translating complex clinical data into strategic, investor-grade insights. Adept at supporting innovation and commercialization across the biotech value chain.',
  email: 'kesavon3@gmail.com',
  phone: '+1 857-693-9882',
  address: '45 Boylston St, Brookline, Massachusetts 02445, United States',
  resumeUrl: 'https://drive.google.com/file/d/1GQ6XnQZ7mKo5A8bXi8kPoZGME3lBsWQ_/view?usp=sharing',
  portraitSrc: 'assets/kesav-portrait.jpg',
  heroBannerSrc: 'assets/hero-banner.png',
  northeasternSealSrc: 'assets/northeastern-seal.png',
  gccCampusSrc: 'assets/gcc-campus.png',
};

export const KEY_METRICS = [
  { label: 'Focus', value: 'CI & NPP', detail: 'Platform Evaluation & Asset Strategy' },
  { label: 'Venture Arena', value: 'JUST LABS', detail: 'Healthcare VC & Venture Studio · NYC' },
  { label: 'Financial Rigor', value: 'DCF · rNPV', detail: 'PoS-Adjusted Biotech Valuation & HEOR' },
  { label: 'Academic Core', value: 'M.S. Biotech', detail: "Northeastern · D'Amore-McKim / Science" },
];

export const SCIENCE_PILLARS = [
  'Mechanism of Action (MoA) & Translational Assessment',
  'Pre-Clinical PK/PD, Safety & Toxicology Translation',
  'Clinical Endpoint Evaluation (PFS, ORR, OS)',
  'Antibody Discovery Pipeline (Target ID → Lead Opt.)',
  'Molecule-Enabled & AI Design-Enabled Platforms',
  'VISTA Platform Technology Evaluation',
];

export const STRATEGY_PILLARS = [
  'Competitive Intelligence & New Product Planning (NPP)',
  '3-Statement, DCF & PoS-Adjusted rNPV Modeling',
  'Market Access, Epidemiology Funnels & HTA (NICE/ICER)',
  'HEOR, Budget Impact & QALY Pricing Strategy',
  'Milestone Inflection & Seed → Series B Capital Strategy',
  'M&A, Strategic Alliances & Licensing Exit Modeling',
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'just-labs',
    category: 'work',
    role: 'Strategy Analyst — Competitive Intelligence & New Product Planning',
    organization: 'JUST LABS — Healthcare Venture Capital',
    subOrganization: 'Life Science Analyst (Platform Evaluation & NPP) · Venture Accelerator & Studio',
    location: 'New York, NY',
    badge: 'Current Role',
    description:
      'Evaluating emerging therapeutic platforms and translating preclinical and clinical data into high-conviction venture and commercialization strategies.',
    highlights: [
      'Platform technology evaluation across strategic, technological, and adaptive domains (VISTA)',
      'Competitive intelligence, pipeline benchmarking, and standard-of-care comparator mapping',
      'New Product Planning (NPP), revenue forecasting, and value inflection roadmap design',
    ],
  },
  {
    id: 'ring-therapeutics',
    category: 'work',
    role: 'Antibody Discovery & Translational Research',
    organization: 'Ring Therapeutics',
    subOrganization: 'End-to-End Biologics Discovery Pipeline',
    location: 'Boston / Cambridge, MA',
    badge: 'Wet-Lab & Translational',
    description:
      'Hands-on scientific foundation spanning end-to-end antibody discovery pipeline development — anchoring commercial and investment judgment in real bench science.',
    highlights: [
      'Target Identification through Lead Optimization in antibody discovery',
      'Pre-clinical in vitro / in vivo data translation covering safety, efficacy, and PK/PD profiles',
      'Bridging Mechanism of Action (MoA) differentiation directly with unmet clinical needs',
    ],
  },
  {
    id: 'northeastern',
    category: 'education',
    role: 'Master of Science — Biotechnology Enterprise & Management',
    organization: 'Northeastern University',
    subOrganization: "D'Amore-McKim School of Business / College of Science",
    location: 'Boston, MA',
    badge: 'Graduate Degree',
    description:
      'Interdisciplinary graduate program uniting advanced biotechnology commercialization, corporate M&A strategy, pharmacoeconomics, and venture finance.',
    highlights: [
      'Nano/Biomedical Commercialization — full venture business plan & investor pitch for Enzene Therapeutics',
      'Alliances, Acquisitions & Mergers — healthcare transformation case study on FujiFilm Holdings',
      'Co-founded LaProg medical device venture concept for obstetric labor progression monitoring',
    ],
    logoSrc: 'assets/northeastern-seal.png',
  },
  {
    id: 'gcc',
    category: 'leadership',
    role: 'Life Science Consulting — Research & Strategy Projects',
    organization: 'Graduate Consulting Club (GCC)',
    subOrganization: 'Northeastern University Graduate Consulting',
    location: 'Boston, MA',
    badge: 'Consulting Toolkit',
    description:
      'Applied structured life science strategy frameworks across simulated pharma launches, corporate transformations, and international market expansion cases.',
    highlights: [
      'Pre-commercial launch planning for Phase 2 Asset (TP-04) in Ocular Rosacea',
      'Market access, HTA (NICE/ICER), HEOR, and QALY-threshold pricing frameworks',
      'Cross-industry strategic growth roadmaps including FujiFilm Holdings & Domino’s Pizza Japan',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'laprog',
    slug: 'laprog',
    title: 'LaProg — Medical Devices for Measuring Labor Progression',
    shortTitle: 'LaProg MedTech Venture',
    category: 'Pitch Deck & Innovation',
    projectType: 'Pitch Deck & Innovation',
    date: 'April 2024',
    locationOrOrg: 'Boston, MA',
    roleOrDeptLabel: 'Role',
    roleOrDeptValue: 'Research Projects — Business Development & Co-Founder',
    summary:
      'Targeting healthcare facilities, maternity clinics, and home healthcare users, LaProg emphasizes precision, safety, and ease of use. It stands out through AI-powered diagnostics and cloud connectivity, enhancing accessibility, accuracy, and comfort in prenatal care.',
    mission:
      'LaProg is committed to improving prenatal care by offering innovative and easy-to-use ultrasound technology to expectant mothers and healthcare providers, aiming for universal access to high-standard obstetric care in both hospital and home settings.',
    vision:
      'To redefine prenatal care standards, ensuring all pregnancies benefit from cutting-edge, accessible obstetric technology, fostering safer and more informed pregnancy experiences.',
    tags: ['MedTech', 'AI Diagnostics', 'Obstetric Ultrasound', 'Go-to-Market', 'Pitch Deck'],
    heroImage: 'assets/projects/laprog/hero.png',
    externalLinkLabel: 'Open LaProg Pitch Deck (Google Slides)',
    externalLinkUrl:
      'https://docs.google.com/presentation/d/1tgMJ5sFif6SHIwJy2L-P56BbJOTTNG5W/edit?usp=sharing&ouid=101995442100393751372&rtpof=true&sd=true',
    accent: 'cyan',
    slides: [
      { src: 'assets/projects/laprog/hero.png', caption: 'LaProg — AI-Powered Obstetric Labor Progression Device' },
      { src: 'assets/projects/laprog/slide-01-meet.png', caption: 'Meet LaProg — Product Overview' },
      { src: 'assets/projects/laprog/slide-02-problem.png', caption: 'Problem Statement & Clinical Unmet Need' },
      { src: 'assets/projects/laprog/slide-03-roadmap.png', caption: 'Technology & Innovation Roadmap' },
      { src: 'assets/projects/laprog/slide-04-core-comp.png', caption: 'Core Competencies & Competitive Advantage' },
      { src: 'assets/projects/laprog/slide-05-production.png', caption: 'Production & Manufacturing Plans' },
      { src: 'assets/projects/laprog/slide-06-market.png', caption: 'Market Strategy & Conclusions' },
      { src: 'assets/projects/laprog/slide-07-financials.png', caption: 'Bottom-Line Financial Projections' },
      { src: 'assets/projects/laprog/slide-08-org.png', caption: 'Organization Plan & Leadership' },
      { src: 'assets/projects/laprog/slide-09-summary.png', caption: 'Commercialization Snapshot' },
      { src: 'assets/projects/laprog/logo.png', caption: 'LaProg Brand Identity' },
    ],
  },
  {
    id: 'fujifilm',
    slug: 'fujifilm',
    title: 'FujiFilm Holdings — Growth Strategy & Healthcare Transformation',
    shortTitle: 'FujiFilm Holdings M&A',
    category: 'Growth Strategy & M&A',
    projectType: 'Case Study — Healthcare & Life Science',
    date: 'April 2023',
    locationOrOrg: "D'Amore-McKim School of Business",
    roleOrDeptLabel: 'Focus Area',
    roleOrDeptValue: 'Alliances, Acquisitions & Mergers',
    summary:
      'Deep-dive corporate strategy case analyzing how FUJIFILM leveraged core chemical and imaging competencies alongside disciplined M&A to pivot from legacy photography into a global life sciences and healthcare powerhouse.',
    highlights: [
      'Transformed FUJIFILM from a photography company into a diverse scientific enterprise and healthcare firm',
      'Strategic equation: Acquisitions + Core Competencies = Sustainable Growth',
      'Transformation & Diversification: Systematic expansion into healthcare, biologics CDMO, and medical systems',
      'Enhanced global portfolio through targeted strategic alliances and acquisitions',
    ],
    tags: ['M&A Strategy', 'Corporate Transformation', 'Healthcare Diversification', 'Case Study'],
    heroImage: 'assets/projects/fujifilm/hero.webp',
    externalLinkLabel: 'View FujiFilm Case Study (Canva)',
    externalLinkUrl:
      'https://www.canva.com/design/DAFza9RR_bk/q_NJ3bc8zDiB6hXCmodMCA/view?utm_content=DAFza9RR_bk&utm_campaign=designshare&utm_medium=link&utm_source=editor#1',
    accent: 'emerald',
    slides: [
      { src: 'assets/projects/fujifilm/hero.webp', caption: 'FujiFilm Holdings Strategic Transformation Overview' },
      { src: 'assets/projects/fujifilm/slide-01.png', caption: 'Strategic Pivot & Industry Context' },
      { src: 'assets/projects/fujifilm/slide-02-business.png', caption: 'FujiFilm Business Architecture' },
      { src: 'assets/projects/fujifilm/slide-03-followup.png', caption: 'Post-Acquisition Integration & Follow-Up' },
      { src: 'assets/projects/fujifilm/slide-04-financials.png', caption: 'Financial Value Creation Analysis' },
      { src: 'assets/projects/fujifilm/slide-05-wealth.png', caption: 'Unlocking Long-Term Enterprise Wealth' },
      { src: 'assets/projects/fujifilm/slide-06.png', caption: 'Healthcare Portfolio Expansion' },
      { src: 'assets/projects/fujifilm/slide-07.png', caption: 'M&A Deal Execution Framework' },
      { src: 'assets/projects/fujifilm/slide-08.png', caption: 'Key Strategic Takeaways' },
    ],
  },
  {
    id: 'enzene-pitch',
    slug: 'enzene-pitch',
    title: 'Enzene Therapeutics — Enzyme Replacement for Antibiotic-Resistant Patients',
    shortTitle: 'Enzene Therapeutics Pitch',
    category: 'Pitch Deck & Innovation',
    projectType: 'Pitch Deck — Funding, Market Opportunity & Commercial Assessment',
    date: 'April 2023',
    locationOrOrg: 'Northeastern University',
    roleOrDeptLabel: 'Department',
    roleOrDeptValue: 'Nano / Biomedical Commercialization',
    summary:
      'Over 2.8 million cases and 700,000 deaths occur annually due to rising antibiotic-resistant infections. Enzene Therapeutics introduces novel enzyme XZ105 — an innovative, targeted mechanism designed for sustained effectiveness and transformed patient outcomes.',
    mission:
      'Dedicated to revolutionizing antibiotic resistance, Enzene Therapeutics develops innovative enzyme therapies for effective, sustainable solutions against resistant bacteria.',
    vision:
      'We envision a world where antibiotic resistance is eliminated. Enzene Therapeutics leads in developing enzyme-based alternatives, offering hope to patients globally.',
    tags: ['Antimicrobial Resistance', 'Enzyme XZ105', 'Commercial Assessment', 'Biotech Pitch'],
    heroImage: 'assets/projects/enzene-pitch/hero.png',
    externalLinkLabel: 'Watch Narrated Pitch Deck (VoiceThread)',
    externalLinkUrl:
      'https://northeastern.voicethread.com/myvoice/thread/25542941/151350814/137038349',
    accent: 'crimson',
    slides: [
      { src: 'assets/projects/enzene-pitch/hero.png', caption: 'Novel Enzyme XZ105 — Mechanism of Action' },
      { src: 'assets/projects/enzene-pitch/slide-01.png', caption: 'AMR Clinical Burden & Opportunity' },
      { src: 'assets/projects/enzene-pitch/slide-02.png', caption: 'Enzene Therapeutic Platform' },
      { src: 'assets/projects/enzene-pitch/slide-03.png', caption: 'Scientific Differentiation & MoA' },
      { src: 'assets/projects/enzene-pitch/slide-04.png', caption: 'Target Product Profile & Market Sizing' },
      { src: 'assets/projects/enzene-pitch/slide-05.png', caption: 'Competitive Landscape' },
      { src: 'assets/projects/enzene-pitch/slide-06.png', caption: 'Regulatory & Clinical Pathway' },
      { src: 'assets/projects/enzene-pitch/slide-07.png', caption: 'Commercialization & Pricing Strategy' },
      { src: 'assets/projects/enzene-pitch/slide-08.png', caption: 'IP & Value Inflection' },
      { src: 'assets/projects/enzene-pitch/slide-09.png', caption: 'Funding Ask & Use of Proceeds' },
      { src: 'assets/projects/enzene-pitch/slide-10.png', caption: 'Financial Forecast & Exit Roadmap' },
    ],
  },
  {
    id: 'enzene-writing',
    slug: 'enzene-writing',
    title: 'Enzene Therapeutics — Comprehensive Commercial Business Plan',
    shortTitle: 'Enzene Business Plan',
    category: 'Business Writing',
    projectType: 'Business Planning & Executive Writing',
    date: 'April 2023',
    locationOrOrg: 'Northeastern University',
    roleOrDeptLabel: 'Department',
    roleOrDeptValue: 'Nano / Biomedical Commercialization',
    summary:
      'Investor-ready 8-chapter biotech business plan covering executive strategy, therapeutic product positioning, antimicrobial resistance market dynamics, commercial go-to-market execution, financial plan, and strategic exit pathways.',
    tableOfContents: [
      '1. Executive Summary',
      '2. Products / Services',
      '3. Market Analysis',
      '4. Company Description',
      '5. Organization & Governance',
      '6. Marketing & Sales Strategies',
      '7. Funding Plan + Financials',
      '8. Exit Strategy',
    ],
    tags: ['Business Plan', 'Funding Plan', 'Biotech Commercialization', 'Exit Strategy'],
    heroImage: 'assets/projects/enzene-writing/hero.png',
    externalLinkLabel: 'Read Full Business Plan PDF (OneDrive)',
    externalLinkUrl:
      'https://onedrive.live.com/?cid=7b0a8d014541c2e8&id=7B0A8D014541C2E8!s94fa27274ef84eb2a2e30c4a1c73d87b&resid=7B0A8D014541C2E8!s94fa27274ef84eb2a2e30c4a1c73d87b&ithint=file,pdf&e=uaSZlG&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy83YjBhOGQwMTQ1NDFjMmU4L0VTY24tcFQ0VHJKT291TU1TaHh6MkhzQk9xcS1EUDR0Uk04WjVSLUFMczBZTUE_ZT11YVNabEc',
    accent: 'amber',
    slides: [
      { src: 'assets/projects/enzene-writing/hero.png', caption: 'Enzene Therapeutics — Commercial Business Plan Cover' },
    ],
  },
  {
    id: 'tp04-ocular-rosacea',
    slug: 'tp04-ocular-rosacea',
    title: 'Phase 2 Asset (TP-04) — Ocular Rosacea Pre-Commercial Launch Strategy',
    shortTitle: 'TP-04 Ocular Rosacea Launch',
    category: 'Consulting Case',
    projectType: 'Life Science Strategy Consulting · Simulated Pharma Client',
    date: '2024',
    locationOrOrg: 'Graduate Consulting Club (GCC)',
    roleOrDeptLabel: 'Deliverable',
    roleOrDeptValue: 'Pre-Commercial Launch & Market Access Plan',
    summary:
      'Structured pre-commercial launch planning framework for a Phase 2 ophthalmology asset (TP-04) targeting Ocular Rosacea — integrating epidemiology patient funneling, clinical differentiation, HTA/payer value dossiers, and uptake scenarios.',
    highlights: [
      'Built patient funnel sizing from prevalent & incident pools through diagnosis, treatment access, and eligible cohorts',
      'Mapped clinical differentiation, economic value drivers, and workflow efficiency for ophthalmologists and payers',
      'Designed competitive intelligence tracking, launch sequencing, and QALY / outcomes-based pricing scenarios',
    ],
    tags: ['Phase 2 Launch', 'Ophthalmology', 'Market Access', 'HEOR', 'Pre-Commercial'],
    heroImage: 'assets/tp04-ocular-rosacea.jpg',
    externalLinkLabel: 'Explore Consulting Toolkit Below',
    externalLinkUrl: '#toolkit',
    accent: 'crimson',
    slides: [
      {
        src: 'assets/tp04-ocular-rosacea.jpg',
        caption: 'Phase 2 Asset (TP-04): Ocular Rosacea — Pre-Commercial Launch Planning Approach',
      },
    ],
  },
  {
    id: 'dominos-japan',
    slug: 'dominos-japan',
    title: "Domino's Pizza Japan — Strategic Growth Roadmap",
    shortTitle: "Domino's Japan Growth",
    category: 'Consulting Case',
    projectType: 'Cross-Industry Consulting Case · Food & Retail',
    date: '2024',
    locationOrOrg: 'Graduate Consulting Club (GCC)',
    roleOrDeptLabel: 'Strategic Theme',
    roleOrDeptValue: 'Fortress Today · Expand Tomorrow · Win Always',
    summary:
      'Slicing through strategy: Evaluating fortressing versus aggressive geographic market expansion for Domino’s Japan to optimize unit economics, delivery speed, and sustainable regional market share.',
    highlights: [
      'Comparative financial and operational modeling of Store Fortressing vs. Greenfield Market Expansion',
      'Unit-level delivery optimization and brand density trade-offs across Japanese metro and suburban markets',
      'Phased multi-year strategic roadmap: Fortress today, expand tomorrow, win always',
    ],
    tags: ['Growth Strategy', 'Fortressing', 'Market Expansion', 'GCC Case'],
    heroImage: 'assets/toolkit-slide-case.png',
    externalLinkLabel: "View Domino's Japan Deck (Canva)",
    externalLinkUrl: 'https://www.canva.com/design/DAGj96xbPbQ/KLuu9f1MpgAmYZCkhwYQug/edit',
    accent: 'emerald',
    slides: [
      {
        src: 'assets/toolkit-slide-case.png',
        caption: "Domino's Pizza Japan — Strategic Growth Roadmap",
      },
    ],
  },
];

export const STRATEGY_CONSULTING_PILLARS: ToolkitPillar[] = [
  {
    id: 'value-prop',
    title: 'Value Proposition of Therapeutic Asset',
    subtitle: 'Core Value Drivers',
    icon: 'sparkles',
    bullets: [
      'Clinical Differentiation against standard of care',
      'Economic Benefit & total cost-of-care reduction',
      'Operational and Workflow Efficiency across care settings',
      'Long-term Strategic Benefit for franchise & portfolio',
    ],
    tags: ['TPP', 'Differentiation', 'Franchise Fit'],
  },
  {
    id: 'market-access',
    title: 'Market Access & Reimbursement Model',
    subtitle: 'Payer & Policy Architecture',
    icon: 'globe',
    bullets: [
      'Evidence Generation (Clinical Efficacy & Real-World Value)',
      'Epidemiology Patient Funnel — Prevalent & Incident Pools (Diagnosis → Treatment Access → Eligible Patients)',
      'Health Policy Analysis across US & EU markets',
      'HTA Body Evaluation (NICE, ICER), Value Dossiers & Stakeholder Engagement',
    ],
    tags: ['NICE / ICER', 'US & EU Policy', 'Value Dossiers'],
  },
  {
    id: 'ci-pricing',
    title: 'Competitive Intelligence & Pricing Strategy',
    subtitle: 'Landscape & Launch Dynamics',
    icon: 'target',
    bullets: [
      'Pipeline Analysis, Clinical Trial Progress Monitoring & SOC Comparator mapping',
      'New Entrant Threats — Risk Assessment & Mitigation Planning',
      'Adoption / Uptake Scenarios & Launch Sequence Tracking',
      'Value-Based, Outcomes-Based & QALY-Anchored Pricing Models',
    ],
    tags: ['SOC Mapping', 'Uptake Curves', 'Value Pricing'],
  },
  {
    id: 'heor',
    title: 'HEOR & Economic Modeling',
    subtitle: 'Supporting Economic Sustainability',
    icon: 'calculator',
    bullets: [
      'Cost-Benefit Analysis & Pharmacoeconomic Modeling',
      'Budget Impact Modeling (BIM) for formulary decision-makers',
      'Incremental Cost-Effectiveness Ratio (ICER) calculation',
      'QALY Threshold benchmarking across U.S. & EU payers',
    ],
    tags: ['BIM', 'ICER Ratio', 'QALY Thresholds'],
  },
];

export const SCIENCE_TO_INVESTMENT_PILLARS: ToolkitPillar[] = [
  {
    id: 'sci-assessment',
    title: 'Scientific & Innovation Assessment',
    subtitle: 'Bench-to-Bedside Diligence',
    icon: 'microscope',
    bullets: [
      'Mechanism of Action (MoA): Translational potential & alignment with unmet clinical needs',
      'Pre-Clinical Data Translation: In Vitro / In Vivo safety, efficacy & toxicology endpoints (PK/PD profile)',
      'Clinical Trial Data Translation: Primary & surrogate endpoints (PFS, ORR, OS)',
      'Ring Therapeutics experience: End-to-end antibody discovery pipeline from Target ID to Lead Optimization',
    ],
    tags: ['MoA', 'PK/PD', 'PFS · ORR · OS'],
  },
  {
    id: 'platform-eval',
    title: 'Platform Technology & Program Evaluation',
    subtitle: 'VISTA Framework & Scalability',
    icon: 'layers',
    bullets: [
      'Value Identification across Strategic, Technological, and Adaptive domains (VISTA)',
      'Horizontal Infrastructure business models vs. Vertical Integration strategies',
      'Molecule-Enabled Platforms (Biologics & Chemically Synthesized modalities)',
      'Design-Enabled Platforms (AI-driven screening, predictive modeling, High-Throughput Screening)',
    ],
    tags: ['VISTA', 'AI Screening', 'Modality Risk'],
  },
  {
    id: 'value-inflection',
    title: 'Value Creation & Inflection Planning',
    subtitle: 'Catalyst-Driven Valuation',
    icon: 'trending',
    bullets: [
      'Milestone & Inflection Planning: Pre-clinical Proof of Concept → IND Filing → Phase 2 Efficacy',
      'Integrating Market Access & Pricing insights directly into early asset valuation',
      'Quantifying risk-adjusted Revenue Potential & peak sales forecasting',
      'Translating clinical promise into durable economic value through HEOR',
    ],
    tags: ['PoC → IND → Ph2', 'Peak Sales', 'rNPV'],
  },
  {
    id: 'funding-dynamics',
    title: 'Funding Dynamics & Investment Readiness',
    subtitle: 'Venture Capital & Exit Strategy',
    icon: 'landmark',
    bullets: [
      'Seed → Series B financing strategy anchored around clinical catalysts',
      'Evaluating data strength & IP position against unmet need to assess de-risking potential',
      '10-K annual report analysis for cash runway optimization, burn rate & capital structure',
      'Exit Strategy & ROI Scenario Modeling: M&A or Licensing pathways linking scientific milestones to investor returns',
    ],
    tags: ['Seed → Series B', '10-K Runway', 'M&A / Licensing'],
  },
];

export const INFLECTION_STAGES = [
  {
    stage: '01',
    title: 'Pre-Clinical PoC',
    metric: 'In Vitro / In Vivo · PK/PD',
    capital: 'Seed Financing',
    detail: 'Target validation, MoA clarity, safety/toxicology readout & IP moat establishment.',
  },
  {
    stage: '02',
    title: 'IND Filing',
    metric: 'CMC · GLP Tox · FDA Clearance',
    capital: 'Series A',
    detail: 'Regulatory de-risking and First-in-Human Phase 1 clinical trial initiation.',
  },
  {
    stage: '03',
    title: 'Phase 2 Efficacy',
    metric: 'PFS · ORR · OS Endpoints',
    capital: 'Series B / Catalyst',
    detail: 'Clinical Proof-of-Concept inflection driving major PoS-adjusted rNPV step-up.',
  },
  {
    stage: '04',
    title: 'Commercial / Exit',
    metric: 'HTA · HEOR · Peak Sales',
    capital: 'M&A · Licensing · Launch',
    detail: 'Payer dossier execution, strategic pharma partnering, or acquisition ROI realization.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'finance-cert',
    category: 'Life Science Finance Certification',
    title: 'Company Valuation & Financial Modeling',
    issuer: 'Biotech & Commercial Valuation Specialization',
    subtitle: 'Biotech-Specific Pre-Revenue & Commercial Stage Modeling',
    highlights: [
      '10-K Financial Statement Analysis: Cash burn rate, runway, R&D intensity, share dilution & strategic investment decisions for Moderna and Beam Therapeutics',
      'Built integrated 3-Statement Financial Models, Forecasting, DCF, and PoS-adjusted rNPV catalyst models for biotech assets',
      'Applied commercial-stage valuation framework to Walmart for full-cycle benchmarking',
    ],
    appliedTo: 'Moderna · Beam Therapeutics · Walmart',
    externalLinkLabel: 'Inspect Excel Financial Model (Google Sheets)',
    externalLinkUrl:
      'https://docs.google.com/spreadsheets/d/1a9nWxD-bopheVI_fjMk3DtTmRQ-BBhj1/edit?rtpof=true&sd=true',
    imageSrc: 'assets/cert-finance.png',
  },
  {
    id: 'commercial-cert',
    category: 'Life Science Commercial Strategy Certification',
    title: 'Drug Commercialization — Drug Product Development Management Specialization',
    issuer: 'UC San Diego (Coursera)',
    subtitle: 'End-to-End Biopharma Lifecycle & Commercial Strategy',
    highlights: [
      'Pharmacoeconomics across Drug Development stages & full product lifecycle',
      'Commercial & Corporate Strategy, Strategic Alliances, and M&A across Pharma, Biotech & Academia',
      'Platform Technology & Program Evaluation utilizing VISTA metrics',
      'Business Models, Portfolio Management & Academic-Industry Partnership structures',
      'Biotech Funding Dynamics & capital formation across development milestones',
    ],
    appliedTo: 'Pharma · Biotech · Academic-Industry Partnerships',
    imageSrc: 'assets/cert-commercial.png',
  },
];
