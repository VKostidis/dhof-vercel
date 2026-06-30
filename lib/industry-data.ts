const BASE = "https://www.digitalhalloffame.com";

export const SEO_STATS = [
  { num: "76%", label: 'of "near me" searchers visit or call a business within 24 hours' },
  { num: "86%", label: "of consumers look up a business on Google Maps before visiting" },
  { num: "Top 3", label: "Google Maps results capture over 75% of all local clicks" },
  { num: "28%", label: "of local searches result in a booking or purchase" },
];

export const ADS_STATS = [
  { num: "65%", label: "of high-intent searches result in a click on one of the top paid ads" },
  { num: "76%", label: 'of "near me" searchers call or visit a business within 24 hours' },
  { num: "40–50%", label: "of commercial-query clicks go to the top 3 paid results on Google" },
  { num: "Days", label: "from launch to calls — Google Ads drives volume almost immediately" },
];

export type IndustryStat = { num: string; label: string };
export type IndustryFeature = { title: string; body: string };
export type IndustryStep = { num: string; title: string; body: string };
export type IndustryCompareRow = { what: string; them: string; us: string };
export type IndustryFaq = { q: string; a: string };
export type IndustryServiceCard = { num: string; title: string; body: string; label: string; href: string };
export type IndustryProblem = { num: string; title: string; body: string };
export type IndustryRelated = { num: string; title: string; body: string; label: string; href: string };
export type IndustryGridCard = { num: string; title: string; desc: string; label: string; href: string };

export type IndustryHub = {
  meta: { title: string; description: string };
  eyebrow: string;
  heroH1: string;
  heroSub: string;
  quickAnswer: string;
  servicesHeading: string;
  servicesSub: string;
  services: IndustryServiceCard[];
  problemsHeading: string;
  problemsSub: string;
  problems: IndustryProblem[];
  related: IndustryRelated[];
  ctaHeading: string;
  ctaSub: string;
  faqHeading: string;
  faqs: IndustryFaq[];
  finalCtaHeading: string;
  finalCtaSub: string;
};

export type IndustrySeoAds = {
  meta: { title: string; description: string };
  eyebrow: string;
  heroH1: string;
  heroSub: string;
  primaryCtaLabel: string;
  quickAnswer: string;
  stats: IndustryStat[];
  featuresHeading: string;
  featuresSub: string;
  features: IndustryFeature[];
  processHeading: string;
  processSub: string;
  process: IndustryStep[];
  compareHeading: string;
  compareSub: string;
  compareRows: IndustryCompareRow[];
  proofTag?: string;
  proofTitle?: string;
  proofBody?: string;
  proofCta?: string;
  proofHref?: string;
  cta1Heading: string;
  cta1Sub: string;
  cta1Primary: string;
  cta1Secondary: string;
  faqHeading: string;
  faqs: IndustryFaq[];
  gridHeading: string;
  gridSub: string;
  gridCards: IndustryGridCard[];
  finalCtaHeading: string;
  finalCtaSub: string;
};

export type IndustryData = {
  slug: string;
  hub: IndustryHub;
  seo: IndustrySeoAds;
  ads: IndustrySeoAds;
};

export const industriesData: Record<string, IndustryData> = {
  "mechanic-marketing": {
    slug: "mechanic-marketing",
    hub: {
      meta: {
        title: "Digital Marketing for Mechanics NZ",
        description: "Fill your workshop with paying jobs. Local SEO, Google Ads, and conversion-focused websites built specifically for NZ mechanic workshops. Outrank the chains.",
      },
      eyebrow: "Digital Marketing for NZ Mechanics",
      heroH1: "DIGITAL MARKETING FOR MECHANICS THAT FILLS YOUR WORKSHOP WITH PAYING JOBS",
      heroSub: "NZ mechanic workshops get buried below Beaurepaires, AutoSuper, and Tony's Tyre on Google while paying thousands for nothing. We run the local SEO, Google Ads, and web presence that puts your workshop in front of Kiwis the moment they need a mechanic.",
      quickAnswer: 'We help NZ mechanic workshops win online by targeting high-intent searches like "mechanic near me", "WoF service [city]", and "car service booking NZ". Through local SEO, Google Ads, and conversion-focused websites, we put your workshop ahead of the chains and independent competitors when it matters most.',
      servicesHeading: "HOW WE FILL YOUR WORKSHOP THROUGH DIGITAL MARKETING",
      servicesSub: "Three channels. Each one engineered for NZ mechanic workshops specifically.",
      services: [
        {
          num: "01",
          title: "SEO for Mechanics",
          body: 'Dominate local search for "mechanic near me", "WoF [city]", and "car service booking NZ". Outrank the chains in your suburb without their marketing budget.',
          label: "Mechanic SEO →",
          href: "/mechanic-marketing/seo/",
        },
        {
          num: "02",
          title: "Google Ads for Mechanics",
          body: 'Capture high-intent bookings the moment someone in your area searches "mechanic near me". Your phone rings before a competitor answers.',
          label: "Mechanic Google Ads →",
          href: "/mechanic-marketing/google-ads/",
        },
        {
          num: "03",
          title: "Website That Converts",
          body: "A mechanic website that loads fast, works perfectly on mobile, and turns visitors into booked jobs. Not just a brochure — a 24/7 sales machine.",
          label: "Web Development →",
          href: `${BASE}/our-services/web-development/`,
        },
      ],
      problemsHeading: "WHY IS YOUR PHONE NOT RINGING AS MUCH AS IT SHOULD?",
      problemsSub: "Most NZ mechanic workshops have the same four problems online. We fix all of them.",
      problems: [
        {
          num: "01",
          title: "The Chains Dominate Google",
          body: "Beaurepaires, AutoSuper, and the franchise networks have dedicated marketing teams and agency retainers. They appear everywhere in local search. Independent workshops cannot match their budget — but they can outmanoeuvre them on local signals, which is exactly what we do.",
        },
        {
          num: "02",
          title: "Your Website Is Losing You Jobs",
          body: "If your site is slow, does not work on mobile, or has no clear call to action, you are losing bookings to competitors with better online presence. Most mechanic sites were built years ago by someone's cousin. Kiwis searching on their phone from a car park need a site that loads instantly and makes it dead easy to call or book.",
        },
        {
          num: "03",
          title: "Word of Mouth Is Not Enough to Grow",
          body: "Referrals are great — but they plateau. Google searches for mechanics happen constantly in your area every day. If you are not capturing that intent with SEO and Google Ads, you are leaving a steady stream of new customers on the table. Your competitors are taking them.",
        },
        {
          num: "04",
          title: "Google Business Profile Left Half-Built",
          body: "Your Google Business Profile is often the first thing a potential customer sees. An incomplete profile with no recent photos, unanswered reviews, or incorrect hours is actively costing you bookings. A fully optimised GBP is the single highest-leverage local SEO asset for a mechanic, and most workshops leave it sitting idle.",
        },
      ],
      related: [
        {
          num: "01",
          title: "Arborist Marketing",
          body: "Emergency search SEO, storm-event Google Ads, NZAA credentials front and centre.",
          label: "Arborist Marketing →",
          href: "/arborist-marketing/",
        },
        {
          num: "02",
          title: "Builder Marketing",
          body: "Project pipeline SEO, suburb-specific pages, Google Ads that produce quote requests.",
          label: "Builder Marketing →",
          href: "/builder-marketing/",
        },
        {
          num: "03",
          title: "Solar Marketing",
          body: "Purchase-intent Google Ads, educational SEO across the full homeowner consideration cycle.",
          label: "Solar Marketing →",
          href: "/solar-marketing/",
        },
      ],
      ctaHeading: "SEE EXACTLY WHAT IS STOPPING YOUR WORKSHOP FROM RANKING",
      ctaSub: "Book a free digital marketing audit. We will review your Google Business Profile, your website, your local search rankings, and your competitors. Then we give you a straight-talking breakdown of exactly what we would fix first, and why. No obligation, no pitch deck.",
      faqHeading: "Questions about mechanic marketing we get asked a lot",
      faqs: [
        {
          q: "How long does digital marketing take to produce results for my workshop?",
          a: "Google Ads drives calls within days of launch. SEO builds momentum over 3 to 6 months with compounding results from there. Most NZ mechanic workshops see measurable increases in booked jobs within the first 90 days when both channels run together.",
        },
        {
          q: "Is digital marketing worth it for a small mechanic workshop?",
          a: "Yes, when it is done correctly. The average car service booking is worth $150 to $500. A Google Ads campaign that costs $30 to acquire that booking is a straightforward return. SEO compounds those returns month over month without increasing cost. The question is not whether you can afford digital marketing. It is whether you can afford to keep handing jobs to competitors who run it.",
        },
        {
          q: "Can you help me rank above Beaurepaires and AutoSuper on Google?",
          a: "Yes. Chains have budget advantages but independent workshops have real advantages they almost never exploit: genuine local presence, personalised service, specific location signals, and authentic customer relationships. We build local SEO strategies that exploit exactly these advantages to outrank the chains in your suburb.",
        },
        {
          q: "What is the difference between SEO and Google Ads for mechanics?",
          a: "Google Ads puts you at the top of search results immediately and you pay per click. SEO builds your organic ranking so you appear for free over time. Ads produce fast results; SEO compounds over time. Running both together — Ads for immediate volume, SEO for long-term cost reduction — is the most effective strategy for a growing NZ workshop.",
        },
        {
          q: "How do you measure the ROI of digital marketing for my workshop?",
          a: "We track calls from Google (Google Ads call extensions, Google Business Profile), form submissions, and online booking requests. Monthly reports show you cost-per-call, cost-per-booking, and estimated revenue impact. If the numbers do not stack up, we tell you and change the strategy.",
        },
      ],
      finalCtaHeading: "READY TO FILL YOUR WORKSHOP THROUGH GOOGLE?",
      finalCtaSub: "Book a free audit and we will show you exactly what is stopping your workshop from dominating local search — and what it would take to fix it.",
    },
    seo: {
      meta: {
        title: "SEO for Mechanics NZ",
        description: "Local SEO for NZ mechanic workshops. Google Business Profile optimisation, WoF keyword targeting, suburb-specific pages. Fill your workshop calendar, not just your analytics.",
      },
      eyebrow: "SEO for Mechanics NZ",
      heroH1: "SEO FOR MECHANICS NZ THAT FILLS YOUR WORKSHOP CALENDAR — NOT JUST YOUR ANALYTICS",
      heroSub: 'When Kiwis need a mechanic, they search Google. Most click one of the first 3 results and call. If your workshop is not there, those jobs go to competitors. We run the local SEO that puts NZ mechanic workshops at the top for "mechanic near me", "WoF [city]", and "car service booking" searches.',
      primaryCtaLabel: "Book a Free SEO Audit",
      quickAnswer: 'SEO for mechanics targets local searches like "WoF service [city]", "mechanic near me", and "car service booking NZ". We optimise your Google Business Profile, build localised pages for your service area, and outrank the chains in your suburb. More calls. More bookings. Less dependence on word of mouth and referrals that plateau.',
      stats: SEO_STATS,
      featuresHeading: "WHAT IS ACTUALLY INCLUDED IN OUR SEO FOR MECHANICS?",
      featuresSub: "No black-box guesswork. Here is exactly what we deliver, and why each piece fills your workshop.",
      features: [
        {
          title: "Google Business Profile Optimisation",
          body: "The single highest-leverage local SEO asset for a mechanic. We optimise every element, manage your review responses, add workshop photos, post service updates, and keep your profile active so Google ranks it in the Map Pack when Kiwis search nearby.",
        },
        {
          title: "Mechanic-Specific Keyword Strategy",
          body: 'We map every search term your customers use — "WoF service [suburb]", "diesel mechanic [city]", "mobile mechanic NZ", "car service booking auckland" — and build a keyword strategy that captures each one with the right content on the right page.',
        },
        {
          title: "On-Page Optimisation",
          body: "Title tags, meta descriptions, heading structure, and content optimised for local mechanic searches on every page. We tell Google exactly what you do, where you are, and why you deserve to rank above the competition in your area.",
        },
        {
          title: "Suburb-Specific Landing Pages",
          body: 'Dedicated pages targeting your specific service areas — "Mechanic Ponsonby", "WoF Station West Auckland", "Car Service Christchurch CBD". Done correctly, this can triple your local search visibility by capturing suburb-level searches your competitors miss entirely.',
        },
        {
          title: "Local Citations + NAP Consistency",
          body: "Consistent name, address, and phone number listings across every relevant NZ directory, trade site, and local business listing. Inconsistent citations are one of the most common reasons mechanic workshops fail to rank in the Map Pack — and one of the most fixable.",
        },
        {
          title: "Transparent Reporting",
          body: "Monthly reports in plain English: Google Business Profile call volume, Map Pack rankings, website organic traffic, and estimated booking impact. No vanity metrics. You see exactly what moved and what we are doing next.",
        },
      ],
      processHeading: "HOW DOES OUR SEO PROCESS FOR MECHANICS ACTUALLY WORK?",
      processSub: "Five stages. Every one tied to calls and bookings, not rankings on a vanity report.",
      process: [
        {
          num: "01",
          title: "Local SEO Audit + Competitor Teardown",
          body: "We audit your Google Business Profile, website, citations, and local Map Pack rankings. We dissect the top 3 mechanics in your service area to map exactly how they rank and where you can beat them. Nothing proceeds without this foundation.",
        },
        {
          num: "02",
          title: "Mechanic Keyword Map + Content Strategy",
          body: 'We map every search term your customers use at every stage — from "mechanic near me" (urgent need) to "WoF service auckland" (researching options) to "car service cost NZ" (comparing prices). A keyword map built specifically for mechanic workshops in your target area, not a generic auto industry template.',
        },
        {
          num: "03",
          title: "Google Business Profile + On-Page Execution",
          body: "We optimise your GBP to the maximum — every field completed, photos added, services listed, posts scheduled. Simultaneously, we fix every on-page SEO element across your site and create localised content that tells Google exactly where you are and who you serve.",
        },
        {
          num: "04",
          title: "Suburb Pages + Citation Building",
          body: "If you serve multiple suburbs or areas, we build dedicated pages for each. We list your workshop consistently across every relevant NZ directory and trade platform. This builds the local authority signals that push you into the Google Map Pack and above organic competitors.",
        },
        {
          num: "05",
          title: "Monthly Reporting + Continuous Optimisation",
          body: "Google Business Profile insights, Search Console data, and GA4 reviewed monthly. We track GBP calls, map rankings, and organic leads — not just traffic. We tell you what moved, what did not, and exactly what we are doing about it.",
        },
      ],
      compareHeading: "WHY IS OUR MECHANIC SEO DIFFERENT FROM OTHER NZ AGENCIES?",
      compareSub: "Most agencies run the same generic local SEO playbook for every trade. We do not.",
      compareRows: [
        { what: "Industry knowledge", them: "Generic local SEO for any trade", us: "Mechanic-specific: WoF terms, suburb pages, GBP for workshops." },
        { what: "Tools", them: "Free tools, whatever saves margin", us: "Ahrefs, SEMrush, Screaming Frog. Named, proven, non-negotiable." },
        { what: "Reporting", them: "Keyword ranking reports with no booking tie", us: "GBP calls, bookings, estimated revenue impact. Tied to what matters." },
        { what: "Proof", them: "Client logos they cannot talk about", us: "We built and rank BusinessMe.co.nz ourselves. 5,000+ organic users/month." },
        { what: "Local strategy", them: "One landing page with suburb names swapped in", us: "Genuine suburb-specific pages with real content and local signals." },
      ],
      proofTag: "Case study",
      proofTitle: "LOCAL SEO IN ACTION: 300% MORE ORGANIC LEADS FOR NZ TRADES",
      proofBody: "Real results from a NZ trades business. No invented numbers, ever.\n\nShamrock needed more leads from local NZ trades search. We ran a forensic SEO audit, rebuilt their keyword strategy around high-intent local search terms, overhauled their on-page content, and built suburb-specific landing pages for their key service areas. Organic lead volume increased 300% within 12 months.",
      proofCta: "Read the Full Case Study",
      proofHref: `${BASE}/case-studies/shamrock/`,
      cta1Heading: "TIRED OF WATCHING COMPETITORS RANK ABOVE YOU WHILE YOUR PHONE SITS QUIET?",
      cta1Sub: "Book a free SEO audit. We will review your Google Business Profile, local rankings, and competitors — then give you a straight-talking breakdown of exactly what we would attack first. No obligation.",
      cta1Primary: "Book a Free SEO Audit",
      cta1Secondary: "Send a Message",
      faqHeading: "Questions about mechanic SEO we get asked a lot",
      faqs: [
        {
          q: "How long does SEO take to work for a mechanic workshop?",
          a: "Google Business Profile and local map improvements typically appear within 60 to 90 days. Organic website rankings build over 3 to 6 months. The compounding effect means results grow month over month — unlike Google Ads which stops the moment you stop paying. Most NZ mechanic workshops see a measurable increase in inbound calls within the first 3 months.",
        },
        {
          q: "Can SEO help me compete with Beaurepaires and AutoSuper on Google?",
          a: "Yes. Chains have marketing budget advantages but independent workshops have real local SEO advantages: specific suburb presence, genuine customer reviews, personalised Google Business Profiles, and authentic local authority signals. We build exactly those signals to outrank the chains in your specific suburb — where their generic nationwide approach falls short.",
        },
        {
          q: "Do I need a new website for SEO to work?",
          a: "Not always. If your site is technically sound and mobile-friendly, we can optimise it for local search. If it is slow, not mobile-responsive, or structurally broken for SEO, that will limit results and we will tell you that honestly. We audit first and recommend only what will actually move the needle for your specific situation.",
        },
        {
          q: "Is local SEO different from regular SEO for a mechanic workshop?",
          a: 'Yes. Local SEO for mechanics prioritises Google Business Profile rankings, Google Map Pack visibility, suburb-specific landing pages, and local citation consistency. A workshop in Ponsonby needs to rank for "mechanic Ponsonby" and "WoF service Auckland CBD" — not just broad national terms. Local search behaviour is different, and the strategy must match it.',
        },
        {
          q: "How much does SEO for a mechanic cost?",
          a: "Pricing is discussed in our initial strategy call, not published online — because the right scope depends on your current visibility, your local competition, and your growth targets. Book a free audit and we will give you a brutally honest recommendation based on what will actually produce results for your situation. If the numbers do not work, we will tell you that too.",
        },
      ],
      gridHeading: "SERVICES THAT WORK BEST ALONGSIDE MECHANIC SEO",
      gridSub: "SEO builds your long-term local authority. These services amplify the results.",
      gridCards: [
        {
          num: "01",
          title: "Google Ads for Mechanics",
          desc: "While SEO builds long-term authority, Google Ads puts you at the top of search results from day one. The two together dominate both paid and organic results.",
          label: "Mechanic Google Ads →",
          href: "/mechanic-marketing/google-ads/",
        },
        {
          num: "02",
          title: "Mechanic Marketing Hub",
          desc: "See the full picture of how we approach digital marketing for NZ mechanic workshops — SEO, Ads, and web development working together.",
          label: "Mechanic Marketing →",
          href: "/mechanic-marketing/",
        },
        {
          num: "03",
          title: "SEO Services",
          desc: "See our full SEO service — including the forensic audits, keyword strategy, and authority building we run for NZ businesses across all industries.",
          label: "SEO Services →",
          href: `${BASE}/our-services/seo/`,
        },
      ],
      finalCtaHeading: "READY TO FILL YOUR WORKSHOP THROUGH GOOGLE SEARCH?",
      finalCtaSub: "Book a free SEO audit. We will review your local rankings, Google Business Profile, and competitors, then give you a straight-talking plan for what we would attack first.",
    },
    ads: {
      meta: {
        title: "Google Ads for Mechanics NZ",
        description: "Google Ads for NZ mechanic workshops. Commercial-intent campaigns, Local Service Ads, negative keyword hygiene. Your phone rings before the competition answers.",
      },
      eyebrow: "Google Ads for Mechanics NZ",
      heroH1: "GOOGLE ADS FOR MECHANICS NZ THAT RINGS YOUR PHONE BEFORE THE COMPETITION ANSWERS",
      heroSub: 'Someone just searched "mechanic near me" or "WoF service Auckland". They need help now. They are going to click one of the first 3 results and call. Are you in those results? If not, that job just went to a competitor. We engineer Google Ads campaigns that put NZ mechanics in front of that search first.',
      primaryCtaLabel: "Book a Free Ads Audit",
      quickAnswer: 'Google Ads for mechanics targets high-intent searches like "mechanic near me", "WoF service [city]", and "car service booking NZ". We build campaigns that capture in-market car owners at the exact moment they need a workshop — no wasted spend on browsers not ready to book, positive return on ad spend or we are not done.',
      stats: ADS_STATS,
      featuresHeading: "WHAT IS ACTUALLY INCLUDED IN OUR GOOGLE ADS FOR MECHANICS?",
      featuresSub: "No set-and-forget campaigns. No vanity metric reports. Here is exactly what we build to make your ads profitable.",
      features: [
        {
          title: "Workshop-Specific Keyword Targeting",
          body: 'We target the exact search terms NZ car owners use when they need a mechanic urgently: "mechanic near me", "WoF service [city]", "brake check auckland", "diesel mechanic [suburb]". Commercial intent only. No broad match spray-and-pray that burns budget on non-bookers.',
        },
        {
          title: "Negative Keyword Hygiene",
          body: '"Free mechanic", "mechanic school", "become a mechanic" — these clicks waste budget. We build comprehensive negative keyword lists from day one so every dollar goes to people who are ready to book a workshop visit, not browsers and researchers.',
        },
        {
          title: "Ad Copy That Forces the Click",
          body: 'Benefit-driven, pattern-interrupting headlines written to stand out from every generic chain ad: "Same-Day WoF Available", "Online Booking — Book in 60 Seconds", "Local Independent Workshop — 5-Star Rated". Written specifically for NZ car owners in your area.',
        },
        {
          title: "Google Local Service Ads",
          body: "LSAs are purpose-built for trade services like mechanic workshops: Google-guaranteed badge, call-direct format, pay-per-lead. We set them up alongside Search campaigns for maximum first-page coverage across both ad formats.",
        },
        {
          title: "Conversion Tracking",
          body: "Every phone call, booking request, and form submission tracked back to the specific keyword and ad that generated it. You see exactly which campaigns are producing bookings and at what cost — not just which ones are generating clicks.",
        },
        {
          title: "A/B Testing + Monthly Reporting",
          body: "Ads, landing pages, and bid strategies tested continuously. Monthly plain-English reports tied to calls and bookings, not impressions and Quality Score graphs. You see cost-per-call, cost-per-booking, and exactly what we are doing next.",
        },
      ],
      processHeading: "HOW DOES OUR GOOGLE ADS PROCESS FOR MECHANICS ACTUALLY WORK?",
      processSub: "Five stages. Every one tied to calls and booked jobs — not clicks on a dashboard.",
      process: [
        {
          num: "01",
          title: "Competitor Intelligence + Account Audit",
          body: "We map what your local mechanic competitors are bidding on and what their ads look like. If you already have a Google Ads account, we audit every campaign for wasted spend — negative keyword gaps, broad match abuse, geographic targeting errors — before we touch anything. We find the waste first, then fix it.",
        },
        {
          num: "02",
          title: "Workshop Keyword Attack Plan",
          body: 'We build your keyword list around commercial buying intent only: "mechanic near me", "WoF service [city]", "car service auckland", "brake check [suburb]". No informational keywords bleeding your budget. Every term mapped to searcher intent and bid accordingly. Comprehensive negative keyword list built before launch.',
        },
        {
          num: "03",
          title: "Ad Creation + Landing Page Review",
          body: "We write multiple high-intent ad variations for each ad group and review your landing page for conversion gaps. A click that does not result in a call or booking is wasted budget — we fix both ends. If your landing page cannot convert the click, we tell you that and help you fix it before we spend your ad budget on it.",
        },
        {
          num: "04",
          title: "Campaign Launch + Conversion Tracking",
          body: "We launch with tight geographic targeting matched to your service area, conversion tracking on every action (calls, bookings, form submissions), and manual bid control to gather data without burning budget in the learning phase.",
        },
        {
          num: "05",
          title: "Weekly Optimisation + Monthly Reporting",
          body: "Weekly bid adjustments, ad rotation analysis, and negative keyword additions. Monthly reporting on calls, bookings, and cost-per-acquisition. We tell you exactly what the ads cost, what they produced, and what we are changing to improve it. If the maths is not working, we tell you that too.",
        },
      ],
      compareHeading: "WHY IS OUR MECHANIC GOOGLE ADS APPROACH DIFFERENT?",
      compareSub: "Most PPC agencies optimise for clicks. We optimise for workshop bookings. There is a big difference in what shows up in your bank account.",
      compareRows: [
        { what: "Focus", them: "Clicks, impressions, and CTR", us: "Workshop calls and booked jobs. Revenue, not metrics." },
        { what: "Keyword approach", them: "Broad match to maximise spend and impressions", us: "Commercial-intent only. Tight negatives from day one." },
        { what: "Local Service Ads", them: "Often missed or not offered", us: "Set up alongside Search campaigns for maximum coverage." },
        { what: "Reporting", them: "CTR and Quality Score graphs", us: "Calls, bookings, and cost-per-booking. Tied to your bottom line." },
        { what: "Proof", them: "Can't discuss campaigns or results", us: "We run Google Ads on our own brands. Real spend, real accountability." },
      ],
      cta1Heading: "SPENDING MONEY ON GOOGLE ADS AND NOT SEEING THE BOOKINGS?",
      cta1Sub: "Book a free Google Ads audit. We will review your current campaigns, identify exactly where budget is bleeding, and give you a straight-talking breakdown of what we would fix first. No obligation.",
      cta1Primary: "Book a Free Ads Audit",
      cta1Secondary: "Send a Message",
      faqHeading: "Questions about mechanic Google Ads we get asked a lot",
      faqs: [
        {
          q: "Is Google Ads worth it for a small mechanic workshop?",
          a: "Yes, when campaigns are engineered correctly. A car service booking is worth $150 to $500. A campaign that costs $25 to $50 to acquire a booking is a straightforward return. Most poorly run mechanic Ads accounts bleed budget on wrong clicks because nobody built proper negative keyword lists or geographic targeting. We fix both before we spend a dollar of yours.",
        },
        {
          q: "How quickly will Google Ads produce calls and bookings?",
          a: "Hours to days from launch. Ads go live and your workshop appears at the top of Google searches in your area almost immediately. The first weeks focus on gathering conversion data — which keywords drive calls, which ads drive bookings. Real optimisation compounds from there. Most NZ mechanic workshops see measurable call volume within two weeks of launch.",
        },
        {
          q: "What budget do I need to start Google Ads for my mechanic business?",
          a: "It depends on your location, local competition level, and booking targets. We give a specific, honest budget recommendation in the initial strategy session based on your situation — not a generic figure that leads to generic campaigns. Book a free audit and we will give you a realistic number for what it would take to make Google Ads work in your specific area.",
        },
        {
          q: "Can Google Ads help me compete with Beaurepaires and AutoSuper?",
          a: "Yes. On Google Ads, budget does not automatically mean better placement — quality score and ad relevance matter significantly. A highly relevant, well-targeted ad from your local workshop often outperforms a generic chain ad even at lower bid levels. We build ads that are hyper-relevant to your specific suburb and services.",
        },
        {
          q: "Should I run Google Ads or focus on SEO first for my workshop?",
          a: "Google Ads produces results immediately — calls and bookings within days of launch. SEO takes 3 to 6 months to build. The most effective strategy is to run Google Ads from day one to generate immediate volume while SEO builds in the background. Over time, as organic rankings grow, you reduce ad spend on keywords you already rank for organically.",
        },
      ],
      gridHeading: "SERVICES THAT WORK BEST ALONGSIDE MECHANIC GOOGLE ADS",
      gridSub: "Google Ads buys immediate visibility. These services make sure you capture every possible booking.",
      gridCards: [
        {
          num: "01",
          title: "SEO for Mechanics",
          desc: "Google Ads puts you at the top immediately. SEO builds the long-term organic presence so you own both paid and organic results in your area.",
          label: "Mechanic SEO →",
          href: "/mechanic-marketing/seo/",
        },
        {
          num: "02",
          title: "Mechanic Marketing Hub",
          desc: "See the full picture of how we approach digital marketing for NZ mechanic workshops — SEO, Google Ads, and web development working together.",
          label: "Mechanic Marketing →",
          href: "/mechanic-marketing/",
        },
        {
          num: "03",
          title: "Google Ads Services",
          desc: "Our full Google Ads service — the forensic audits, keyword strategy, and bid management we run for NZ businesses across all industries.",
          label: "Google Ads Services →",
          href: `${BASE}/our-services/sem/`,
        },
      ],
      finalCtaHeading: "READY TO RING YOUR WORKSHOP PHONE THROUGH GOOGLE?",
      finalCtaSub: "Book a free Google Ads audit and we will show you exactly what a profitable mechanic campaign looks like for your area and budget.",
    },
  },
};
