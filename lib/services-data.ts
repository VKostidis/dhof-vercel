const BASE = "https://www.digitalhalloffame.com";

export type ServiceStat = { num: string; label: string };
export type Feature = { title: string; body: string };
export type Step = { num: string; title: string; body: string };
export type CompareRow = { what: string; them: string; us: string };
export type FaqItem = { q: string; a: string };
export type PricingTier = { name: string; price: string; sub: string; features: string[]; cta: string; highlighted?: boolean };
export type GridCard = { num: string; title: string; desc: string; label: string; href: string };

export type ServiceData = {
  slug: string;
  meta: { title: string; description: string };
  eyebrow: string;
  heroH1: string;
  heroSub: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryCtaAnchor: string;
  quickAnswer: string;
  stats: ServiceStat[];
  featuresHeading: string;
  featuresSub: string;
  features: Feature[];
  processHeading: string;
  processSub: string;
  process: Step[];
  compareHeading: string;
  compareSub: string;
  compareThemLabel: string;
  compareRows: CompareRow[];
  // Proof section
  proofTag: string;
  proofTitle: string;
  proofBody: string;
  proofCta?: string;
  proofHref?: string;
  // Pricing (SEO + SEM only)
  pricingHeading?: string;
  pricingNote?: string;
  pricingTiers?: PricingTier[];
  // CTA band 1
  cta1Heading: string;
  cta1Sub: string;
  cta1Primary: string;
  cta1Secondary: string;
  // FAQ
  faqHeading: string;
  faqs: FaqItem[];
  // Bottom grid
  gridHeading: string;
  gridSub: string;
  gridCards: GridCard[];
  // Final CTA band (accent)
  finalCtaHeading: string;
  finalCtaSub: string;
  finalCtaPrimary: string;
};

export const servicesData: Record<string, ServiceData> = {
  seo: {
    slug: "seo",
    meta: {
      title: "Local SEO Services from $1,500/mo | Digital Hall of Fame",
      description: "Forensic SEO audits, high-intent keyword strategy, authority building, and Local SEO for NZ businesses. Transparent reporting tied to leads and revenue, not vanity rankings.",
    },
    eyebrow: "Search Engine Optimisation",
    heroH1: "Stop Being Invisible on Google While Your Competitors Take Your Customers",
    heroSub: "Your competitors are ranking for the searches your customers make every day. We fix that. Forensic audits, high-intent keyword strategy, and authority building that puts NZ businesses at the top and keeps them there.",
    primaryCtaLabel: "Book a Free SEO Audit",
    secondaryCtaLabel: "How It Works",
    secondaryCtaAnchor: "#section-process",
    quickAnswer: "Digital Hall of Fame's SEO service starts with a forensic audit of your site, competitors, and keyword gaps using Ahrefs, SEMrush, and Screaming Frog. We then build and execute a custom strategy. Every deliverable is tied to organic leads and revenue, not vanity rankings.",
    stats: [
      { num: "53%", label: "of all trackable web traffic comes from organic search" },
      { num: "0.67%", label: "of searchers ever click a result on Google page 2" },
      { num: "97%", label: "of websites receive zero organic traffic from Google" },
      { num: "68%", label: "of all organic clicks go to the top 3 results" },
    ],
    featuresHeading: "What Is Actually Included in Our SEO Service?",
    featuresSub: "No black-box guesswork. Here is exactly what we deliver, and why each piece matters.",
    features: [
      { title: "Forensic SEO Audit", body: "We tear apart your site with Ahrefs, SEMrush, and Screaming Frog. Technical health, crawlability, site speed, on-page signals, internal linking, and competitor gap analysis. Nothing hidden, nothing glossed over." },
      { title: "High-Intent Keyword Strategy", body: "We do not chase generic rankings. We find the exact search terms your ideal NZ customers type when they are ready to buy, then build a content and on-page strategy around capturing them." },
      { title: "On-Page Optimisation", body: "Title tags, meta descriptions, heading structure, internal linking, content depth, and schema markup. Every page on your site is engineered to tell Google exactly what it is and why it deserves to rank." },
      { title: "Authority & Link Building", body: "Ethical, high-authority backlinks from relevant NZ and international sources. No link farms, no PBNs. Real editorial placements that build domain authority and send Google the right trust signals." },
      { title: "Local SEO for NZ", body: "Google Business Profile optimisation and management, localised landing pages for your key service areas, and NZ-specific citation building. Designed to dominate local searches from Auckland to Invercargill." },
      { title: "Transparent Reporting", body: "Monthly reports in plain English tied to leads, conversions, and revenue impact. No vanity metrics. No impressions graphs. You see exactly what moved and what we are doing next, and why." },
    ],
    processHeading: "How Does Our SEO Process Actually Work?",
    processSub: "Six stages. Every one tied to results. No 90-day discovery phases, no strategy decks that gather dust.",
    process: [
      { num: "01", title: "Forensic Audit + Competitor Analysis", body: "We run your site through Ahrefs, SEMrush, and Screaming Frog. We dissect your top competitors. We map exactly where you are losing ground and why. This is the foundation every decision is built on." },
      { num: "02", title: "High-Intent Keyword Research + On-Page Excellence", body: "We identify the search terms with real buying intent in your NZ market. Then we optimise every title tag, heading, meta description, and content block on your site to capture them." },
      { num: "03", title: "Information Architecture Refinement", body: "A logical, crawlable site structure is not optional for SEO. We rebuild your internal linking, URL structure, and page hierarchy so both users and Googlebot can navigate it without friction." },
      { num: "04", title: "Authority Building + Strategic Link Acquisition", body: "We build high-quality, relevant backlinks from reputable NZ and international sources. Every link placement is strategic, ethical, and designed to move your domain authority in the right direction." },
      { num: "05", title: "Local NZ Market Leadership", body: "Google Business Profile optimisation, localised content, and NZ-specific citation building. Whether you serve Auckland, Wellington, Christchurch, or all of Aotearoa, we make sure local searchers find you first." },
      { num: "06", title: "Tracking, Reporting + Continuous Optimisation", body: "Google Search Console, GA4, and monthly plain-English reports tied to your actual business metrics. We do not stop at ranking, we optimise for clicks, leads, and conversions. Then we do it again." },
    ],
    compareHeading: "Why Is Our SEO Different from Other NZ Agencies?",
    compareSub: "Most SEO agencies hide behind jargon, tie you into punitive long-term agreements, and report on rankings that never translate to revenue. We do not.",
    compareThemLabel: "Typical SEO agency",
    compareRows: [
      { what: "Tools", them: "Free tools, whatever saves margin", us: "Ahrefs, SEMrush, Screaming Frog. Named, proven, non-negotiable." },
      { what: "Reporting", them: "Ranking reports and traffic graphs with no revenue tie", us: "Leads and conversions. Every metric tied to a real business outcome." },
      { what: "Strategy", them: "Off-the-shelf package, same for every client", us: "Forensic audit first. Custom keyword map and attack plan per client." },
      { what: "Proof", them: "Client logos they cannot talk about", us: "We built and rank BusinessMe.co.nz ourselves. 5,000+ organic users/month." },
      { what: "Agreements", them: "Punitive 12-month lock-ins with exit penalties", us: "Clear, fair terms. Transparent scope, reasonable notice, no nasty surprises." },
    ],
    pricingHeading: "Local SEO Packages — From $1,500/mo",
    pricingNote: "All packages include a forensic audit before work begins. No lock-in contracts — month to month. Minimum 3-month commitment recommended for meaningful results.",
    pricingTiers: [
      {
        name: "Local",
        price: "$1,500/mo",
        sub: "Single location · low-to-mid competition",
        features: ["Google Business Profile optimisation", "Local keyword strategy", "On-page optimisation", "Citation building", "Monthly reporting"],
        cta: "Get Started",
      },
      {
        name: "Growth",
        price: "$2,500/mo",
        sub: "Single location · competitive market",
        features: ["Everything in Local", "Suburb-specific landing pages", "Content marketing", "Authority and link building", "Fortnightly reporting calls"],
        cta: "Get Started",
        highlighted: true,
      },
      {
        name: "Multi-Location",
        price: "Custom/mo",
        sub: "Multiple locations or highly competitive",
        features: ["Everything in Growth", "Multi-location strategy", "Dedicated location pages", "Weekly reporting + live dashboard", "Quoted based on scope"],
        cta: "Get a Quote",
      },
    ],
    proofTag: "Case study · Shamrock",
    proofTitle: "SEO in Action: 300% More Organic Leads",
    proofBody: "Shamrock needed more leads from local NZ trades search. We ran a forensic SEO audit, rebuilt their keyword strategy around high-intent local search terms, and overhauled their on-page content. Organic lead volume increased 300% within 12 months.",
    proofCta: "Read the Full Case Study",
    proofHref: `${BASE}/case-studies/shamrock/`,
    cta1Heading: "Tired of Your Competitors Hogging the Top Spots?",
    cta1Sub: "Book a free SEO audit. We will review your current rankings, identify your biggest keyword gaps, and give you a straight-talking breakdown of exactly what we would attack first, and why. No obligation.",
    cta1Primary: "Book a Free SEO Audit",
    cta1Secondary: "Send a Message",
    faqHeading: "Questions About SEO We Get Asked a Lot",
    faqs: [
      { q: "How long does SEO take to show results in NZ?", a: "SEO is a marathon, not a sprint. You will typically see meaningful movement within 3 to 6 months, with significant results building over 6 to 12 months as your authority grows. Anyone promising instant page-one results is not being truthful. The payoff is lasting, compounding, and far higher ROI than paid ads over time." },
      { q: "Is SEO still worth it with Google Ads and AI Overviews dominating the page?", a: "Yes. Organic search still drives 53% of all trackable web traffic. AI Overviews pull directly from well-optimised organic content, so strong SEO now feeds both the traditional results and the AI layer. Ads stop working the moment you stop paying. SEO builds lasting authority that compounds over time." },
      { q: "What makes your SEO approach different from other NZ agencies?", a: "We tie every metric to revenue, not vanity rankings. We use Ahrefs, SEMrush, and Screaming Frog on every engagement. Our reporting is plain English, tied to leads and conversions. And we have skin in the game: we built and rank BusinessMe.co.nz ourselves, generating 5,000+ organic users per month. That is proof you cannot fake." },
      { q: "Is ongoing SEO necessary or is it a one-time fix?", a: "Think of SEO like fitness, not surgery. Google updates its algorithm hundreds of times per year. Competitors adapt. Content needs refreshing. A one-time audit gets you moving; ongoing SEO keeps you ahead. We structure engagements with clear monthly deliverables tied to your growth targets, not open-ended retainers." },
      { q: "Do you do local SEO for specific NZ cities like Auckland or Wellington?", a: "Yes. Local SEO is a core part of our offering for businesses with geographic service areas. We optimise your Google Business Profile, build localised landing pages for your key service areas, and target the high-intent local search terms your customers actually use. We have worked across Auckland, Wellington, Christchurch, and nationwide." },
    ],
    gridHeading: "SEO Built for Your Specific Industry",
    gridSub: "We run dedicated SEO playbooks for nine NZ industries — with buyer language, keyword strategy, and content built around how your specific clients actually search.",
    gridCards: [
      { num: "01", title: "SEO for Mechanics", desc: "WoF searches, Google Maps, suburb pages that outrank the chains.", label: "Mechanic SEO →", href: `${BASE}/mechanic-marketing/seo/` },
      { num: "02", title: "SEO for Accountants", desc: "Xero accountant searches, educational content, long-tail where banks cannot compete.", label: "Accountant SEO →", href: `${BASE}/accountant-marketing/seo/` },
      { num: "03", title: "SEO for Arborists", desc: "Emergency search, commercial tender positioning, storm-event ranking.", label: "Arborist SEO →", href: `${BASE}/arborist-marketing/seo/` },
      { num: "04", title: "SEO for Builders", desc: "Project portfolio pages, suburb-specific landing pages, LBP credential content.", label: "Builder SEO →", href: `${BASE}/builder-marketing/seo/` },
      { num: "05", title: "SEO for Cosmetic Clinics", desc: "Treatment-specific pages, practitioner credentials, systematic review strategy.", label: "Clinic SEO →", href: `${BASE}/cosmetic-clinic-marketing/seo/` },
      { num: "06", title: "SEO for Mortgage Brokers", desc: "First home buyer content, refinancer searches, long-tail where banks cannot win.", label: "Broker SEO →", href: `${BASE}/mortgage-broker-marketing/seo/` },
      { num: "07", title: "SEO for Lawyers", desc: "Practice-area pages, educational authority content, Law Society-compliant copy.", label: "Lawyer SEO →", href: `${BASE}/lawyer-marketing/seo/` },
      { num: "08", title: "SEO for Dentists", desc: "GBP dominance, treatment pages, suburb ranking, review strategy.", label: "Dentist SEO →", href: `${BASE}/dentist-marketing/seo/` },
      { num: "09", title: "SEO for Solar Installers", desc: "Educational consideration-cycle content, city pages, purchase-intent ranking.", label: "Solar SEO →", href: `${BASE}/solar-marketing/seo/` },
    ],
    finalCtaHeading: "Ready to Start Owning Google NZ?",
    finalCtaSub: "Book a free, no-obligation SEO audit. We will review your rankings, map your biggest keyword opportunities, and give you a straight-talking plan for what we would attack first.",
    finalCtaPrimary: "Book a Free Audit",
  },

  sem: {
    slug: "sem",
    meta: {
      title: "Google Ads Management | Digital Hall of Fame",
      description: "High-intent Google Ads campaigns engineered to buy NZ customers at a profit. Forensic audits, conversion-focused landing pages, relentless A/B testing. Positive ROAS or we are not done.",
    },
    eyebrow: "Google Ads (SEM / PPC)",
    heroH1: "Stop Burning Budget on Ads That Don't Convert. Start Buying Customers at a Profit.",
    heroSub: "When someone in NZ types \"need a [your service] now\" — are you at the top? The top 3 paid ads capture 40 to 50% of commercial clicks. We engineer campaigns that buy customers at a profit, not clicks at a loss.",
    primaryCtaLabel: "Book a Free Ads Audit",
    secondaryCtaLabel: "How It Works",
    secondaryCtaAnchor: "#section-process",
    quickAnswer: "Digital Hall of Fame's Google Ads service starts with a forensic account audit and competitor intelligence report. We build keyword attack plans targeting high-intent NZ buyers, write ad copy engineered to force the click, and optimise landing pages to convert that click into a sale. Every metric is tied to revenue. Positive ROAS or we are not done.",
    stats: [
      { num: "40-50%", label: "of commercial-query clicks go to the top 3 paid results" },
      { num: "200%", label: "average ROI for correctly managed Google Ads campaigns" },
      { num: "65%", label: "of people click on ads when they are actively ready to buy" },
      { num: "$8", label: "average return for every $1 spent on Google Ads globally" },
    ],
    featuresHeading: "What Is Actually Included in Our Google Ads Service?",
    featuresSub: "No \"set and forget\" campaigns. No vanity metric reports. Here is exactly what we do to make your ads profitable.",
    features: [
      { title: "Forensic Account Audit", body: "We tear apart your existing campaigns or build from scratch with full competitor intelligence. We find wasted spend, map the opportunity, and establish the baseline we are beating." },
      { title: "High-Intent Keyword Warfare", body: "Money phrases only. We target search terms with real commercial intent from your NZ buyers. No broad match spray-and-pray. Negative keyword lists built from day one to stop budget bleeding." },
      { title: "Ad Copy That Forces the Click", body: "Benefit-driven, pattern-interrupting headlines that stand out from every generic competitor. Ad copy that matches exactly what your buyer is thinking at the moment they are ready to act." },
      { title: "Conversion-Focused Landing Pages", body: "A click that does not convert is wasted budget. We leverage our web development expertise to build or optimise landing pages that are engineered to close, not just look good." },
      { title: "Strategic Bid Management", body: "Manual bidding discipline combined with AI-assisted Target ROAS and Maximize Conversions when data supports it. Every dollar placed for maximum return, not maximum spend." },
      { title: "Relentless A/B Testing + Reporting", body: "Creatives, audiences, keywords, landing pages — tested constantly. Monthly plain-English reports tied to leads, sales, and ROAS. Not impressions graphs that have nothing to do with your revenue." },
    ],
    processHeading: "How Does Our Google Ads Process Actually Work?",
    processSub: "Five stages. Every one tied to profitable outcomes. No months of \"setup\" with nothing to show for it.",
    process: [
      { num: "01", title: "Forensic Account Audit + Competitor Intelligence", body: "We dissect your current campaigns and tear apart your competitors'. We expose exactly where budget is bleeding, what your competitors are bidding on, and where the profitable gaps are." },
      { num: "02", title: "High-Intent Keyword Warfare + Irresistible Ad Creation", body: "We build keyword lists around commercial intent, not search volume vanity. We write multiple ad variations engineered to outperform every generic competitor headline your buyers see. Then we test them." },
      { num: "03", title: "Conversion-Obsessed Landing Page Optimisation", body: "Your landing page is where money is made or lost. We build or overhaul them to match your ad's promise exactly, remove friction, and drive the specific action that makes your business money." },
      { num: "04", title: "Strategic Campaign Structure + Bid Management", body: "Campaigns structured for clean data and fast learning. Bidding strategy matched to your goals — manual control where it matters, automated bidding where data supports it. Never set-and-forget." },
      { num: "05", title: "Relentless A/B Testing + Data Analysis", body: "Every variable tested. CPA driven down. ROAS scaled up. Monthly reporting in plain English with zero vanity metrics. We tell you exactly what worked, what did not, and what we are doing about it." },
    ],
    compareHeading: "Why Is Our Google Ads Approach Different from Other NZ Agencies?",
    compareSub: "Most PPC agencies optimise for clicks. We optimise for customers. There is a big difference in what shows up in your bank account.",
    compareThemLabel: "Typical PPC agency",
    compareRows: [
      { what: "Focus", them: "Clicks, impressions, and CTR", us: "Customers, leads, and profitable ROAS." },
      { what: "Strategy", them: "Generic campaign template for every client", us: "Forensic audit first. Custom keyword attack plan per client." },
      { what: "Landing pages", them: "Send traffic to your homepage and hope", us: "Dedicated conversion-focused landing pages per campaign." },
      { what: "Reporting", them: "Impressions and Quality Score graphs", us: "Leads, sales, and ROAS. Every metric tied to your bottom line." },
      { what: "Transparency", them: "Black-box \"trust us\" reporting", us: "Full campaign access. Plain English. Zero excuses." },
    ],
    pricingHeading: "Three Tiers. One Approach. Pricing Based on Your Scope.",
    pricingNote: "All packages quoted based on your ad spend, market, and goals. No lock-in contracts — month to month.",
    pricingTiers: [
      {
        name: "Starter",
        price: "Get a Quote",
        sub: "Local & single service · Best for businesses new to Google Ads",
        features: ["Forensic account audit", "Campaign setup and management", "Conversion tracking setup", "Weekly bid optimisation", "Monthly plain-English reporting"],
        cta: "Get a Quote",
      },
      {
        name: "Growth",
        price: "Get a Quote",
        sub: "Multi-campaign & competitive · Best for established businesses scaling up",
        features: ["Everything in Starter", "Multiple campaign types", "Competitor intelligence reporting", "Landing page conversion review", "Fortnightly performance calls"],
        cta: "Get a Quote",
        highlighted: true,
      },
      {
        name: "Scale",
        price: "Get a Quote",
        sub: "High-volume & multi-channel · Best for businesses with serious ad budgets",
        features: ["Everything in Growth", "Multi-channel campaign strategy", "Dedicated account lead", "Weekly calls + live dashboard", "Custom reporting tied to your KPIs"],
        cta: "Get a Quote",
      },
    ],
    proofTag: "SEM / PPC · NZ Client Portfolio",
    proofTitle: "Client Case Studies Coming Soon",
    proofBody: "We are documenting results from our current NZ Google Ads client base. In the meantime, book a free strategy call and we will walk you through exactly what we have achieved for NZ businesses in your industry, including the account audits, the waste we found, and the ROAS we built. No invented figures. Ever.",
    proofCta: "Book a Strategy Call",
    proofHref: `${BASE}/contact/`,
    cta1Heading: "Spending Money on Google Ads and Getting Nothing Back?",
    cta1Sub: "Book a free Google Ads audit. We will review your current campaigns, identify exactly where budget is bleeding, and give you a straight-talking breakdown of what we would fix first. No obligation.",
    cta1Primary: "Book a Free Ads Audit",
    cta1Secondary: "Send a Message",
    faqHeading: "Questions About Google Ads We Get Asked a Lot",
    faqs: [
      { q: "Is Google Ads too expensive for a small NZ business?", a: "Only when amateurs run it. Poorly managed campaigns burn budget on the wrong clicks from the wrong people. Engineered properly, Google Ads is a profitable investment, not an expense. The question is not whether you can afford it. It is whether you can afford to hand the top of Google to your competitors while they run it." },
      { q: "How quickly will I see results from Google Ads?", a: "Hours to days from launch. Ads go live and start driving qualified traffic almost immediately. The first weeks are about gathering conversion data. Real optimisation — driving down CPA and scaling what works — compounds over weeks two through eight. You will see movement fast, and you will see it compounding from there." },
      { q: "What makes Digital Hall of Fame different from past PPC agencies I have tried?", a: "We are obsessed with ROI, not impressions. We report on leads, sales, and ROAS, not CTR and Quality Score graphs that have nothing to do with your revenue. We have been running campaigns since 2015. We do not make excuses. If something is not working, we say so and we fix it." },
      { q: "What budget do I need to start with Google Ads in NZ?", a: "It depends on your industry, goals, and how competitive your search terms are. We do not give a generic number because that would be dishonest. We give a brutally honest recommendation in the initial strategy session. If the maths does not work for your situation, we will tell you that too." },
      { q: "Do you manage Google Ads only, or other paid platforms as well?", a: "Our SEM service focuses on Google Search and Shopping campaigns where commercial buying intent is highest. For Meta, Instagram, LinkedIn, and TikTok paid campaigns, see our Social Media Advertising service. Running both together is a powerful combination we can build and manage for you." },
    ],
    gridHeading: "Google Ads Built for Your Specific Industry",
    gridSub: "We run dedicated Google Ads playbooks for nine NZ industries — with buyer-type campaigns, industry-specific ad copy, and landing pages built around how your clients actually search and convert.",
    gridCards: [
      { num: "01", title: "Google Ads for Mechanics", desc: "WoF and \"mechanic near me\" campaigns. Local Service Ads. Booking-focused landing pages.", label: "Mechanic Google Ads →", href: `${BASE}/mechanic-marketing/google-ads/` },
      { num: "02", title: "Google Ads for Accountants", desc: "Buyer-type campaigns for first home clients, high-LTV targeting, service-specific pages.", label: "Accountant Google Ads →", href: `${BASE}/accountant-marketing/google-ads/` },
      { num: "03", title: "Google Ads for Arborists", desc: "Emergency, residential, and commercial campaigns. Storm-event budget scaling.", label: "Arborist Google Ads →", href: `${BASE}/arborist-marketing/google-ads/` },
      { num: "04", title: "Google Ads for Builders", desc: "Project-type campaigns, LBP credential copy, portfolio landing pages per project category.", label: "Builder Google Ads →", href: `${BASE}/builder-marketing/google-ads/` },
      { num: "05", title: "Google Ads for Cosmetic Clinics", desc: "Treatment-specific campaigns, trust-led credential copy, consultation booking landing pages.", label: "Clinic Google Ads →", href: `${BASE}/cosmetic-clinic-marketing/google-ads/` },
      { num: "06", title: "Google Ads for Mortgage Brokers", desc: "Buyer-type campaigns — first home buyers, refinancers, investors, self-employed.", label: "Broker Google Ads →", href: `${BASE}/mortgage-broker-marketing/google-ads/` },
      { num: "07", title: "Google Ads for Lawyers", desc: "Practice-area campaigns, decision-stage keyword targeting, Law Society-compliant copy.", label: "Lawyer Google Ads →", href: `${BASE}/lawyer-marketing/google-ads/` },
      { num: "08", title: "Google Ads for Dentists", desc: "Emergency, new patient, and cosmetic campaigns. Local Service Ads. Booking-focused landing pages.", label: "Dentist Google Ads →", href: `${BASE}/dentist-marketing/google-ads/` },
      { num: "09", title: "Google Ads for Solar Installers", desc: "Purchase-intent targeting, qualifying copy, remarketing across the 2–6 month consideration cycle.", label: "Solar Google Ads →", href: `${BASE}/solar-marketing/google-ads/` },
    ],
    finalCtaHeading: "Ready to Buy NZ Customers at a Profit?",
    finalCtaSub: "Book a free Google Ads audit. We will review your current account or walk you through exactly what a profitable campaign looks like for your business and budget.",
    finalCtaPrimary: "Book a Free Ads Audit",
  },

  "web-development": {
    slug: "web-development",
    meta: {
      title: "Web Development NZ | Digital Hall of Fame",
      description: "Fast, mobile-perfect, SEO-ready websites on a fully managed monthly subscription. No upfront cost, no tech headaches — a conversion machine built and managed by us.",
    },
    eyebrow: "Web Development",
    heroH1: "Your Website Is Costing You Customers Every Single Day",
    heroSub: "40% of visitors abandon a site that takes more than 3 seconds to load. If your website looks outdated, breaks on mobile, or confuses visitors, your competitors are collecting the leads it repels. We fix that, permanently, for one predictable monthly fee.",
    primaryCtaLabel: "Book a Free Strategy Call",
    secondaryCtaLabel: "How It Works",
    secondaryCtaAnchor: "#section-process",
    quickAnswer: "Digital Hall of Fame's web development service runs on a \"Website That Wins\" subscription model. One predictable monthly fee covers a professionally built, conversion-focused website plus ongoing hosting, security, software updates, and performance monitoring. No upfront cost. No tech headaches. No excuses for a site that does not perform.",
    stats: [
      { num: "40%", label: "of visitors abandon sites that take more than 3 seconds to load" },
      { num: "53%", label: "of mobile users bounce from sites not optimised for their device" },
      { num: "7%", label: "drop in conversions for every 1 second of loading delay" },
      { num: "75%", label: "of users judge business credibility based on website design alone" },
    ],
    featuresHeading: "What Is Actually Included in Our Web Development Service?",
    featuresSub: "Not a brochure site dropped on a server and forgotten. A fully managed conversion machine, built and maintained by us.",
    features: [
      { title: "Strategy + Design Brief", body: "We start by understanding your business, your ideal customer, and your conversion goals. No cookie-cutter templates. A design framework built around results, not aesthetics for aesthetics' sake." },
      { title: "Professional Build + Launch", body: "Fast, mobile-perfect, and SEO-ready from day one. Built on proven high-converting frameworks, customised for your brand and customers. Launched properly, not rushed and broken." },
      { title: "NZ-Based Hosting + Security", body: "Your site lives on fast, reliable NZ-hosted infrastructure. SSL, daily backups, malware scanning, and security patching are handled. You never think about it. It just works." },
      { title: "Software + Performance Updates", body: "CMS, plugins, and performance kept current and optimised. No version conflicts, no speed decay over time, no security gaps from outdated software. Handled as part of the subscription." },
      { title: "Minor Content Updates", body: "New service added, price updated, team photo changed. Included. No ticket queues, no extra invoices, no waiting three weeks for a 10-minute job. We are your in-house web team." },
      { title: "Ongoing Strategy + Consultancy", body: "We are not just your developer. Monthly check-ins on performance, UX, and conversion opportunities. We stay invested in your growth, not just your uptime." },
    ],
    processHeading: "How Does Our Web Development Process Actually Work?",
    processSub: "Three stages. Clear milestones. No disappearing acts, no scope-creep surprises, no 6-month waits for a mediocre result.",
    process: [
      { num: "01", title: "No-BS Strategy + Design Kick-Off", body: "We go deep on your business, your customers, and what converting them looks like. We present a results-focused design framework. You approve it before we build a single page. No surprises, no revisions after the fact." },
      { num: "02", title: "Rapid Professional Build + Launch", body: "Typically 2 to 4 weeks from kick-off to live. Mobile-perfect, fast-loading, SEO-ready from the first page. We do not launch something we would not be proud to put our name on, and we do not keep you waiting for it either." },
      { num: "03", title: "All-Inclusive Management + Optimisation", body: "Hosting, security, updates, minor content changes, performance monitoring, and monthly strategy check-ins. Your subscription covers it all. This is a living asset, not a brochure that gathers dust. We keep it sharp." },
    ],
    compareHeading: "Why Is Our Web Development Different from Other NZ Agencies?",
    compareSub: "Most web agencies build you something, invoice you, and disappear. We build you something, and then stay to make sure it actually performs.",
    compareThemLabel: "Typical web agency",
    compareRows: [
      { what: "Cost model", them: "Large upfront invoice, then you are on your own", us: "Predictable monthly fee. No upfront hit. Fully inclusive." },
      { what: "Design focus", them: "Looks good in portfolio screenshots", us: "Built for conversion: leads, calls, and sales." },
      { what: "Ongoing support", them: "\"That will be an extra invoice\"", us: "Hosting, security, updates, and content changes included." },
      { what: "After launch", them: "Launches and gathers dust", us: "Monthly optimisation, performance reviews, and strategy input." },
      { what: "Proof", them: "Portfolio sites they no longer manage", us: "We built and operate BusinessMe.co.nz ourselves. We eat our own cooking." },
    ],
    proofTag: "Web Development · BusinessMe.co.nz",
    proofTitle: "NZ Business Directory: Built and Operated by DHOF",
    proofBody: "We designed, built, and launched BusinessMe.co.nz from the ground up. Conversion-focused architecture, fast load times, and built for SEO from day one. It now serves 5,000+ users monthly across thousands of NZ business listings. This is not a portfolio piece. It is a live business we run ourselves. That is the standard we hold ourselves to on every build.",
    proofCta: "View the Case Study",
    proofHref: `${BASE}/case-studies/businessme/`,
    cta1Heading: "Is Your Website an Asset or an Embarrassment?",
    cta1Sub: "Book a free strategy call. We will review your current site, identify exactly what is costing you customers, and give you a straight-talking plan for what we would do first. No obligation, no sales pitch theatre.",
    cta1Primary: "Book a Free Strategy Call",
    cta1Secondary: "Send a Message",
    faqHeading: "Questions About Web Development We Get Asked a Lot",
    faqs: [
      { q: "What is the catch with a monthly website subscription?", a: "No catch. You get a professionally built, conversion-focused website on a proven framework, customised for your brand, plus fully managed hosting, security, software updates, and support for one predictable monthly fee. No surprise invoices. Pricing is discussed live in a strategy call." },
      { q: "Do I own the website if I stop the subscription?", a: "This is a managed service model, not a traditional build-and-hand-over arrangement. The site as hosted and managed by Digital Hall of Fame is no longer active under the subscription if you cancel. Buyout or migration is discussed at that point. We are transparent about this upfront." },
      { q: "Can I get a fully custom design or complex bespoke functionality?", a: "The subscription uses proven, high-converting frameworks customised with your branding, content, and structure. Extensive bespoke development outside this scope is quoted separately as a project. For most established NZ businesses, a well-executed proven framework outperforms a bespoke build at twice the cost." },
      { q: "Is this better than just building it myself on Wix or Squarespace?", a: "With Wix you get a template and an afternoon of frustration. With us you get conversion strategy, professional setup, SEO-readiness from day one, ongoing technical management, security hardening, and a team invested in your results. The platform is the least important part. Strategy and execution are everything." },
      { q: "How long does it take to get a new site live?", a: "Typically 2 to 4 weeks from strategy kick-off to launch, depending on content availability and approval speed. We move fast and set clear milestones from day one. You will always know where things stand." },
    ],
    gridHeading: "Services That Work Best Alongside Web Development",
    gridSub: "A high-converting website is the foundation. These services drive the traffic that fills it.",
    gridCards: [
      { num: "01", title: "Search Engine Optimisation", desc: "A fast, well-built site is the foundation SEO needs to work. We build both and run both, so nothing falls through the gap.", label: "Explore SEO →", href: `${BASE}/our-services/seo/` },
      { num: "02", title: "Google Ads (SEM/PPC)", desc: "Google Ads traffic is only as good as the landing page it hits. We build the page and run the campaigns together for maximum ROAS.", label: "Explore Google Ads →", href: `${BASE}/our-services/sem/` },
      { num: "03", title: "AI Automation", desc: "AI tools can automate lead follow-up, booking, and reporting directly from your website. We build the site and integrate the automation.", label: "Explore AI Automation →", href: `${BASE}/our-services/ai-consultancy/` },
    ],
    finalCtaHeading: "Ready for a Website That Actually Sells?",
    finalCtaSub: "Book a free strategy call. We will review what you have, show you what is costing you, and walk you through exactly what a high-converting site looks like for your business.",
    finalCtaPrimary: "Book a Free Strategy Call",
  },

  "social-media": {
    slug: "social-media",
    meta: {
      title: "Social Media Advertising NZ | Digital Hall of Fame",
      description: "Precision paid social funnels on Facebook, Instagram, LinkedIn, and TikTok. Psychographic targeting, scroll-stopping creative, full-funnel strategy. ROI-obsessed, not follower-count-obsessed.",
    },
    eyebrow: "Social Media Advertising",
    heroH1: "Your Customers Are Scrolling Right Now. They Just Haven't Seen Your Offer Yet.",
    heroSub: "Facebook, Instagram, LinkedIn, TikTok. The platforms where your NZ customers spend hours every day. Most businesses waste money boosting posts to nobody. We engineer precision funnels that turn scrolls into sales.",
    primaryCtaLabel: "Book a Free Strategy Call",
    secondaryCtaLabel: "How It Works",
    secondaryCtaAnchor: "#section-process",
    quickAnswer: "Digital Hall of Fame's social media advertising service builds full-funnel paid campaigns across Facebook, Instagram, LinkedIn, and TikTok. We start with a psychographic deep dive to understand your ideal NZ buyers, engineer scroll-stopping creative that demands attention, and optimise relentlessly for leads, sales, and ROAS. No boosted posts. No vanity metrics. No brand awareness hand-waving.",
    stats: [
      { num: "<5%", label: "average organic reach for business pages on Facebook" },
      { num: "3.05B", label: "monthly active users on Facebook — your customers are there" },
      { num: "9.21%", label: "average conversion rate for well-run Facebook ad campaigns" },
      { num: "3x", label: "more leads generated by businesses using paid social vs organic only" },
    ],
    featuresHeading: "What Is Actually Included in Our Social Media Advertising Service?",
    featuresSub: "Not boosted posts. Not generic creatives. A precision-engineered paid social system built to generate real leads and sales for your NZ business.",
    features: [
      { title: "Psychographic Audience Deep Dive", body: "We go beyond demographics. We build audience profiles from your best existing customers and clone them across platforms. The right message reaches the right person at the right time." },
      { title: "Scroll-Stopping Creative Production", body: "Static, video, carousel, story — whatever format stops the thumb. We write the copy, brief the creative, test multiple variations, and replace what does not perform. Boring ads are not an option." },
      { title: "Multi-Platform Campaign Architecture", body: "Facebook, Instagram, LinkedIn, TikTok — matched to where your NZ buyers actually spend their time and what stage of the buying journey they are at. Not every platform for every business." },
      { title: "Full-Funnel Strategy + Mapping", body: "Top-of-funnel awareness, mid-funnel retargeting, bottom-of-funnel conversion. Not just clicks — a systemised approach designed to turn cold strangers into paying customers." },
      { title: "Relentless A/B Testing + CRO", body: "Creatives, audiences, headlines, CTAs, landing pages — tested constantly. CPA goes down. ROAS goes up. Every iteration is data-driven, not gut-feel guesswork." },
      { title: "Transparent ROI Reporting", body: "Leads, sales, CPA, and ROAS in plain English. Not reach. Not impressions. Not engagement rate. What actually moved your business forward and what we are doing next." },
    ],
    processHeading: "How Does Our Social Media Advertising Process Actually Work?",
    processSub: "Five stages. Built for profitable outcomes, not follower counts and vanity metrics.",
    process: [
      { num: "01", title: "Psychographic Deep Dive + Audience Cloning", body: "We go beyond age and gender. We map your best existing customers by behaviour, interests, and intent, then build lookalike audiences across platforms that clone those exact buyer profiles. The precision here is what separates profitable campaigns from money pits." },
      { num: "02", title: "Scroll-Stopping Creative + Irresistible Offer Engineering", body: "Your ad has 1.7 seconds to stop a scroll. We engineer copy, visuals, and offers that demand attention. Multiple creative variations built and ready to test from day one." },
      { num: "03", title: "Multi-Platform Campaign Architecture + Funnel Mapping", body: "Campaigns structured across the right platforms for your audience and goals, with clear funnel stages from cold traffic awareness through to retargeting and conversion. Every stage serves a purpose." },
      { num: "04", title: "Relentless A/B Testing + Conversion Rate Optimisation", body: "Creative fatigue kills campaigns. We test constantly, replace what stops working, and double down on what performs. Landing pages, CTAs, audiences, and offers are all in scope." },
      { num: "05", title: "Transparent Reporting + ROI Obsession", body: "Monthly plain-English reports covering leads, sales, CPA, and ROAS. We tell you exactly what worked, what we killed, and what we are scaling. No black boxes, no excuses." },
    ],
    compareHeading: "Why Is Our Social Media Advertising Different from Other NZ Agencies?",
    compareSub: "Most agencies run social ads for vanity metrics. We run them for revenue. Here is the difference in practice.",
    compareThemLabel: "Typical social media agency",
    compareRows: [
      { what: "Targeting", them: "Demographics and broad interest categories", us: "Psychographic profiling and lookalike cloning from your best customers." },
      { what: "Creative", them: "Stock images and copy-pasted generic ad text", us: "Scroll-stopping creative engineered for your specific offer and audience." },
      { what: "Strategy", them: "Boost posts, run one campaign, call it done", us: "Full-funnel architecture: awareness, retargeting, conversion. A system." },
      { what: "Reporting", them: "Likes, follows, reach, and engagement rate", us: "Leads, sales, CPA, and ROAS. Revenue metrics only." },
      { what: "Approach", them: "One-off campaigns, no iteration", us: "Continuous testing, learning, and scaling what works." },
    ],
    proofTag: "Social Media · NZ Client Portfolio",
    proofTitle: "Client Case Studies Coming Soon",
    proofBody: "We are documenting paid social results from our current NZ client base. Book a strategy call and we will walk you through what we have achieved for NZ businesses in your vertical, including the audience strategies, creative approaches, and ROAS outcomes we have built. Real numbers, no invented case studies.",
    proofCta: "Book a Strategy Call",
    proofHref: `${BASE}/contact/`,
    cta1Heading: "Tired of Pouring Money into Ads That Don't Convert?",
    cta1Sub: "Book a free paid social strategy call. We will audit your current approach, identify exactly what is wasting your budget, and give you a straight-talking plan for what a profitable campaign looks like for your business.",
    cta1Primary: "Book a Free Strategy Call",
    cta1Secondary: "Send a Message",
    faqHeading: "Questions About Social Media Advertising We Get Asked a Lot",
    faqs: [
      { q: "Is social media advertising just for brand awareness, or can it drive actual sales?", a: "Paid social is a direct response tool when done right. The businesses that tell you social media only builds awareness are the ones running it badly. With a strategic funnel, precision audience targeting, and an irresistible offer, social media advertising generates qualified leads and sales, not fuzzy awareness numbers." },
      { q: "I boosted posts before and it did not work. How is this different?", a: "Boosting posts is throwing darts blindfolded. We run precision-engineered campaigns with psychographic audience targeting built from your best customers, scroll-stopping creative tested against multiple variations, full-funnel retargeting, and conversion-focused landing pages. The difference is the difference between a garage sale and a systemised sales machine." },
      { q: "Which platform is best for my NZ business?", a: "It depends on where your ideal customers spend time and what your offer looks like. Facebook and Instagram work well for most NZ local service and consumer businesses. LinkedIn is powerful for B2B. TikTok is exceptional for younger demographics. We recommend the right platform mix in the strategy session based on your specific business." },
      { q: "What budget do I need for paid social advertising?", a: "No magic number. It depends on your industry, goals, and competition. Our focus is always on building a positive ROAS so your spend is an investment, not a cost. We give a brutally honest budget recommendation in the strategy session and will tell you straight if we think the numbers do not add up for your situation." },
      { q: "Do you create the ad creative, or do I need to provide it?", a: "We handle it. Copywriting, creative direction, and where video is needed, we coordinate production. You are not left trying to make a Facebook ad in Canva at 11pm. We build the creative, test it across variations, and iterate based on performance data. You approve, we execute." },
    ],
    gridHeading: "Services That Work Best Alongside Social Media Advertising",
    gridSub: "Paid social captures demand and retargets visitors. These services amplify every dollar you spend.",
    gridCards: [
      { num: "01", title: "Google Ads (SEM/PPC)", desc: "Google captures active buyers searching right now. Social creates and captures demand. Together they dominate the full funnel from awareness to conversion.", label: "Explore Google Ads →", href: `${BASE}/our-services/sem/` },
      { num: "02", title: "Video Production", desc: "Video ads consistently outperform static across every paid social platform. Professional video creative is the fuel that makes a paid social engine run.", label: "Explore Video Production →", href: `${BASE}/our-services/video-production/` },
      { num: "03", title: "Search Engine Optimisation", desc: "Paid social drives traffic. SEO ensures that when those visitors search for you later, you are there organically as well. Both together own the customer journey.", label: "Explore SEO →", href: `${BASE}/our-services/seo/` },
    ],
    finalCtaHeading: "Ready to Turn Your Social Media into a Sales Machine?",
    finalCtaSub: "Book a free strategy call. We will audit your current approach, map the audience and funnel opportunity, and show you exactly what profitable paid social looks like for your business.",
    finalCtaPrimary: "Book a Free Strategy Call",
  },

  "video-production": {
    slug: "video-production",
    meta: {
      title: "Video Production & Content Creation NZ | Digital Hall of Fame",
      description: "Strategy-first video production and content creation for NZ businesses. Brand films, ads, social content — built to stop the scroll, build trust, and convert viewers into customers.",
    },
    eyebrow: "Video Production & Creation",
    heroH1: "Most NZ Business Content Is Forgettable. Yours Does Not Have to Be.",
    heroSub: "88% of people say a brand's video convinced them to buy. Yet most NZ business content is forgettable. We create video-led content with a purpose: build trust, dominate feeds, and convert viewers into customers. Strategy first. Production second.",
    primaryCtaLabel: "Book a Free Strategy Call",
    secondaryCtaLabel: "How It Works",
    secondaryCtaAnchor: "#section-process",
    quickAnswer: "Digital Hall of Fame's video and content creation service covers everything from strategy and scripting to shooting, editing, and multi-platform distribution. We start by uncovering your brand story and mapping your ideal customer's journey. Every piece of content is tied to a specific business objective. Not views. Not followers. Leads, inquiries, and sales.",
    stats: [
      { num: "88%", label: "of people say a brand's video convinced them to buy a product or service" },
      { num: "49%", label: "faster year-on-year revenue growth for businesses using video content" },
      { num: "53x", label: "more likely to reach Google page 1 if your page includes video" },
      { num: "72%", label: "of customers prefer learning about a product or service through video" },
    ],
    featuresHeading: "What Is Actually Included in Our Video and Content Service?",
    featuresSub: "Not a one-off shoot and a hard drive of files. A complete content engine, from strategy through to distribution and performance tracking.",
    features: [
      { title: "Brand Story + Content Discovery", body: "We find your story, nail your value proposition, and map your ideal customer's real problems. Every piece of content starts with this foundation. Without it, you are producing noise." },
      { title: "Strategic Blueprint + Editorial Calendar", body: "A content strategy tied to your business goals. Themes, formats, channels, and a publishing rhythm that builds momentum. No more random acts of content with no plan and no purpose." },
      { title: "Professional Video Production", body: "Scripting, filming, editing, and motion graphics. Production quality that reflects your brand and builds trust. Formats: brand films, testimonials, explainers, service showcases, and ads." },
      { title: "Social Content + Brand Assets", body: "Thumbnails, graphics, short-form cuts, and repurposed content for Instagram, LinkedIn, Facebook, and TikTok. Every asset built to your brand standards and ready to publish." },
      { title: "Multi-Platform Atomisation", body: "One pillar content piece becomes ten. Clips, audiograms, quote graphics, blog posts, email sequences. One shoot, maximum reach across every platform where your audience lives." },
      { title: "Performance Tracking + Iteration", body: "Views, engagement, and most importantly, leads and sales generated from content. Content that does not perform gets replaced. Content that works gets scaled. Always forward." },
    ],
    processHeading: "How Does Our Video and Content Process Actually Work?",
    processSub: "Five stages. Strategy-first, results-last. Every piece of content exists for a reason.",
    process: [
      { num: "01", title: "Brand Story + Content Goldmine Discovery", body: "We dig into your story, your unique value, and the specific problems your ideal customers are desperate to solve. This is the raw material for every piece of content we produce. The businesses with the best content did not luck into it — they did this work first." },
      { num: "02", title: "Strategic Blueprint + Editorial Calendar", body: "A content plan with clear themes, formats, channels, and publishing cadence. Tied directly to your business goals and your buyers' journey. No random acts of content. Every post, video, and asset serves a purpose." },
      { num: "03", title: "High-Impact Creative Production", body: "Scripting, filming, editing, design, copywriting. We handle the full production cycle. You bring the business expertise and approve the output. We handle every creative and technical detail between brief and delivery." },
      { num: "04", title: "Multi-Platform Atomisation + Distribution", body: "We take your pillar content and repurpose it across every platform where your audience lives. One brand film becomes reels, YouTube clips, LinkedIn posts, email sequences, and blog content. Maximum reach from every production." },
      { num: "05", title: "Performance Tracking + Iteration", body: "We track what matters: leads generated, inquiries, and sales attributed to content. Engagement and views tell us what is connecting. Revenue data tells us what to scale. Content that does not move the needle gets replaced, fast." },
    ],
    compareHeading: "Why Is Our Content Approach Different from Other NZ Agencies?",
    compareSub: "Most content agencies measure success in views and engagement. We measure it in leads and sales.",
    compareThemLabel: "Typical content agency",
    compareRows: [
      { what: "Strategy", them: "Random content posted to stay active", us: "Every piece tied to a specific business goal and buyer journey stage." },
      { what: "Production", them: "Expensive one-off shoots with no follow-through", us: "Repeatable, scalable production built around your brand story." },
      { what: "Distribution", them: "Post once and move on", us: "Multi-platform atomisation — maximum reach from every piece produced." },
      { what: "Measurement", them: "Views, likes, and follower count", us: "Leads, inquiries, and revenue generated from content." },
      { what: "Ongoing", them: "Deliver and disappear", us: "Iterate and scale based on what the data shows is working." },
    ],
    proofTag: "Video + Content · NZ Client Portfolio",
    proofTitle: "Client Case Studies Coming Soon",
    proofBody: "We are documenting content and video results from our current NZ client base. Book a free strategy call and we will walk you through the content strategies, formats, and business outcomes we have built for NZ businesses in your industry. Real work, real results, no invented figures.",
    proofCta: "Book a Strategy Call",
    proofHref: `${BASE}/contact/`,
    cta1Heading: "Is Your Content Invisible, Boring, or Just Not Converting?",
    cta1Sub: "Book a free content strategy call. We will review your current content, identify exactly where you are losing attention and leads, and give you a straight-talking plan for what a content engine actually looks like for your business.",
    cta1Primary: "Book a Free Strategy Call",
    cta1Secondary: "Send a Message",
    faqHeading: "Questions About Video Production and Content We Get Asked a Lot",
    faqs: [
      { q: "Does professional video production have to be expensive for a NZ business?", a: "Hollywood production is expensive. Effective business video does not have to be. The goal is not cinematic perfection — it is authentic content that builds trust and converts. We create smart, strategic video that delivers ROI for NZ businesses. The cost of not doing video is often far greater than the cost of doing it properly." },
      { q: "I am not natural on camera. Can video still work for my business?", a: "Yes. There are formats that do not require you on camera at all: voiceover with b-roll, animated explainers, customer testimonials, product or service demos. Where you do appear, we coach you. The goal is authentic connection with your audience, not an Oscar-winning performance." },
      { q: "How much time do I need to commit to the process?", a: "Initial strategy, brand discovery, and approvals at key milestones require your input. The heavy lifting — scripting, shooting logistics, editing, design, and distribution setup — we handle. The process is built to run with minimal disruption to how you actually run your business." },
      { q: "What content formats get results in my specific industry?", a: "We build a custom content plan from the strategy phase based on your specific business, industry, and ideal customer. There is no cookie-cutter answer. A trades business needs different content to a professional services firm. We figure out what moves the needle for your situation before producing a single frame." },
      { q: "Do you handle social media content as well, or is it just video?", a: "Both. Our service covers video production and the full content ecosystem that surrounds it: social graphics, short-form clips, thumbnails, brand assets, captions, and editorial strategy. We produce the pillar content and atomise it across every platform where your audience lives." },
    ],
    gridHeading: "Services That Work Best Alongside Video and Content",
    gridSub: "Great content deserves an audience. These services make sure it finds one.",
    gridCards: [
      { num: "01", title: "Social Media Advertising", desc: "Video content is the fuel. Paid social is the engine. We produce the creative and run the paid campaigns to put it in front of exactly the right NZ buyers.", label: "Explore Social Media →", href: `${BASE}/our-services/social-media/` },
      { num: "02", title: "Search Engine Optimisation", desc: "Video and written content are SEO assets. Pages with video rank significantly higher on Google. We build content that performs in search, not just on social.", label: "Explore SEO →", href: `${BASE}/our-services/seo/` },
      { num: "03", title: "AI Automation", desc: "AI accelerates content production: scripting assistance, repurposing workflows, and distribution automation. We embed it into your content engine to produce more, faster.", label: "Explore AI Automation →", href: `${BASE}/our-services/ai-consultancy/` },
    ],
    finalCtaHeading: "Ready to Build a Content Engine That Works for You?",
    finalCtaSub: "Book a free content strategy call. We will map your brand story, identify your biggest content opportunities, and show you exactly what a content engine that generates leads looks like for your business.",
    finalCtaPrimary: "Book a Free Strategy Call",
  },

  "ai-consultancy": {
    slug: "ai-consultancy",
    meta: {
      title: "AI Automation & Consultancy NZ | Digital Hall of Fame",
      description: "Practical AI automation for NZ businesses. Workflow audit, custom AI solution design, done-for-you implementation, and team training. Reclaim hundreds of hours. Real efficiency, real competitive edge.",
    },
    eyebrow: "AI Automation & Consultancy",
    heroH1: "Your Team Is Drowning in Work That Should Be Automated by Now.",
    heroSub: "You can automate up to 45% of the paid work in your business with AI tools available right now. Repetitive tasks, data entry, reporting, customer follow-up, content production. We identify, implement, and train your team. No sci-fi hype. Real efficiency gains, real cost savings, real competitive edge.",
    primaryCtaLabel: "Book a Free AI Audit",
    secondaryCtaLabel: "How It Works",
    secondaryCtaAnchor: "#section-process",
    quickAnswer: "Digital Hall of Fame's AI automation service starts with an AI Opportunity Audit of your business workflows. We identify the highest-impact areas for automation, design and implement custom AI solutions, and train your team to use them confidently. The goal: reclaim hundreds of hours, cut operational costs, and give your business a terrifying competitive advantage over competitors still doing everything manually.",
    stats: [
      { num: "45%", label: "of paid work activities can be automated with AI tools available today" },
      { num: "15-20%", label: "reduction in operational costs achievable through AI automation" },
      { num: "80%", label: "of executives report AI significantly improves team productivity" },
      { num: "3x", label: "faster decision making reported by businesses using AI-driven data insights" },
    ],
    featuresHeading: "What Is Actually Included in Our AI Automation Service?",
    featuresSub: "Not a ChatGPT tips PDF. Not a generic AI workshop. A practical implementation service that actually changes how your business operates.",
    features: [
      { title: "AI Opportunity Audit", body: "We dissect your workflows and identify the highest-impact areas for automation. Specific, actionable opportunities ranked by ROI and implementation complexity. This is the map. Everything else follows from it." },
      { title: "Custom AI Solution Design", body: "We select the right tools for your business. Off-the-shelf where it works, lightly customised where it does not. No overengineering. No tools that look impressive but gather dust because nobody uses them." },
      { title: "Done-For-You Implementation", body: "We handle the technical heavy lifting. Setup, integration with your existing systems, and a transition that does not disrupt your team or your operations. You do not need to understand the plumbing to benefit from running water." },
      { title: "Team Empowerment + Training", body: "Tools without adoption are wasted investment. We train your team in plain English, measure adoption, and make sure the capability actually sticks. The goal is your team confidently using AI daily, not just after a one-day workshop." },
      { title: "Marketing + Sales Automation", body: "AI-powered content production, lead nurturing sequences, CRM automation, and reporting. Your marketing and sales engine runs faster, smarter, and with less manual intervention." },
      { title: "Ongoing Optimisation + Monitoring", body: "The AI landscape moves fast. We monitor performance, identify new automation opportunities as they emerge, and keep your business ahead of the competitors who are still catching up to where you are now." },
    ],
    processHeading: "How Does Our AI Automation Process Actually Work?",
    processSub: "Five stages. Practical from day one. Measurable ROI from week one.",
    process: [
      { num: "01", title: "AI Opportunity Audit + Workflow Dissection", body: "We map your current workflows end to end and identify every point where AI can eliminate manual effort, reduce errors, or accelerate output. We prioritise by ROI and implementation speed. You will know exactly what to automate first and why before we touch a single tool." },
      { num: "02", title: "Custom AI Solution Design + Tool Selection", body: "We match the right tools to your specific opportunities. The market is flooded with AI tools, most of which are either not ready for business use or are duplicating tools you already have. We cut through the noise and select what is genuinely right for your situation." },
      { num: "03", title: "Done-For-You Implementation + Integration", body: "We build and integrate the automation. Connections to your CRM, your website, your email platform, your reporting stack. Everything configured and tested before your team touches it. A smooth handover, not a 'here is the login, good luck.'" },
      { num: "04", title: "Team Empowerment + Training", body: "Plain-English training tailored to your team's actual roles and workflows. Not a generic AI overview. Specific instruction on the tools they will use daily. We measure adoption, not just attendance at a training session." },
      { num: "05", title: "Ongoing Optimisation + AI Advantage Monitoring", body: "The AI landscape changes every month. We track your automation performance, identify the next high-value opportunities, and keep your implementation current. Your competitive edge compounds as your competitors scramble to catch up." },
    ],
    compareHeading: "Why Is Our AI Approach Different from Other NZ Consultants?",
    compareSub: "Most AI consultants sell you a vision. We sell you a working implementation. The difference shows up in your operations from week one.",
    compareThemLabel: "Typical AI consultant",
    compareRows: [
      { what: "Approach", them: "Generic ChatGPT tips and AI strategy decks", us: "Custom audit, tailored solution design, full implementation." },
      { what: "Scope", them: "Marketing automation only, siloed from operations", us: "Whole business: operations, marketing, sales, reporting." },
      { what: "Training", them: "Here are the tools, attend this workshop", us: "Role-specific training in plain English. Adoption measured." },
      { what: "Proof", them: "Demo accounts and theoretical case studies", us: "We run AI automation across our own operations and client campaigns." },
      { what: "Mindset", them: "Replace your team with AI", us: "Augment your humans. Free them for high-value work." },
    ],
    proofTag: "AI Automation · BusinessMe.co.nz + DHOF",
    proofTitle: "AI-Integrated Operations Across Our Own Brand Portfolio",
    proofBody: "We run AI automation across content production, reporting, lead nurturing, and operational workflows for Digital Hall of Fame and BusinessMe.co.nz. Every tool we recommend to clients is a tool we run ourselves. We have earned our opinion through deployment, not theory. Book a call and we will show you exactly what that looks like in practice.",
    proofCta: "Book a Strategy Call",
    proofHref: `${BASE}/contact/`,
    cta1Heading: "Drowning in Repetitive Tasks While Your Competitors Automate?",
    cta1Sub: "Book a free AI Opportunity Audit. We will map your workflows, identify your biggest automation wins, and give you a straight-talking plan for where AI would make the biggest immediate difference in your business. No obligation.",
    cta1Primary: "Book a Free AI Audit",
    cta1Secondary: "Send a Message",
    faqHeading: "Questions About AI Automation We Get Asked a Lot",
    faqs: [
      { q: "Is AI automation only for large tech companies with big budgets?", a: "No. Many of the most powerful AI tools are affordable, practical, and built specifically for established small and medium businesses. You do not need a data science team or a Silicon Valley budget. You need someone who knows which tools are worth using, how to implement them correctly, and how to train your team to use them with confidence." },
      { q: "Will AI automation replace our staff?", a: "AI augments humans, it does not replace them. The goal is to automate the tedious, repetitive work that drains your team's time — data entry, report generation, routine follow-up sequences, scheduling. This frees your people for the strategic, creative, and relationship-driven work that actually requires a human. Your team becomes more valuable, not redundant." },
      { q: "Our business is not tech-savvy. Can we actually use AI tools?", a: "That is exactly the situation we are built for. We handle all technical complexity — tool selection, implementation, integration with your existing systems. We then train your team in plain English with role-specific instructions, not a generic AI overview. Adoption and outcomes are how we measure success, not how impressive the implementation looks." },
      { q: "What results can we realistically expect, and how fast?", a: "Time savings and error reduction from workflow automation are typically visible within the first few weeks after implementation. Marketing efficiency and data-driven improvements compound over the first few months. We prioritise quick-win automations first so you see ROI fast, then build toward the higher-impact longer-horizon changes." },
      { q: "What types of tasks can actually be automated for a NZ business?", a: "Common high-impact automations include: lead follow-up sequences, appointment reminders, customer onboarding, invoice and quote generation, social media scheduling, reporting compilation, internal communications routing, and AI-assisted content production. We identify your specific highest-value opportunities in the initial AI Opportunity Audit." },
    ],
    gridHeading: "Services That Work Best Alongside AI Automation",
    gridSub: "AI makes every marketing channel faster and smarter. These are the channels where the gains are biggest.",
    gridCards: [
      { num: "01", title: "Search Engine Optimisation", desc: "AI tools accelerate content production, keyword clustering, and technical audits. We embed AI into your SEO workflow for compounding efficiency gains across every month.", label: "Explore SEO →", href: `${BASE}/our-services/seo/` },
      { num: "02", title: "Google Ads (SEM/PPC)", desc: "AI-powered bidding, ad copy generation, and performance analysis make Google Ads campaigns more profitable with less manual management overhead.", label: "Explore Google Ads →", href: `${BASE}/our-services/sem/` },
      { num: "03", title: "Web Development", desc: "AI-powered lead capture, chat, booking, and customer follow-up integrated directly into your website. Your site becomes an automated sales tool, not a brochure.", label: "Explore Web Development →", href: `${BASE}/our-services/web-development/` },
    ],
    finalCtaHeading: "Ready to Give Your Business an Unfair AI Advantage?",
    finalCtaSub: "Book a free AI Opportunity Audit. We will map your workflows, identify your biggest automation opportunities, and show you exactly what your competitive edge looks like when we are done.",
    finalCtaPrimary: "Book a Free AI Audit",
  },
};
