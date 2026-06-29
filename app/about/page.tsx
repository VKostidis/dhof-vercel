import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";

const BASE = "https://www.digitalhalloffame.com";
const IMG = `${BASE}/wp-content/themes/digital-hall-of-fame/assets/img`;

export const metadata: Metadata = {
  title: "About",
  description:
    "Digital Hall of Fame is a NZ digital consulting firm founded in 2015. Battle-tested since day one — real campaigns, real businesses, real results. Meet the founder.",
  alternates: { canonical: `${BASE}/about/` },
};

const whyReasons = [
  {
    num: "01",
    title: "The Industry Rewards Hype Over Outcomes",
    body: "NZ businesses get burned by agencies who sell rankings that never translate to revenue, lock them into punitive contracts, and report on metrics that have nothing to do with the bottom line. Digital Hall of Fame was founded specifically to reject that model. Every engagement we take is measured against real business outcomes — leads, revenue, and growth — not vanity traffic and ranking reports.",
  },
  {
    num: "02",
    title: "We Run Campaigns on Our Own Brands First",
    body: "We built and operate BusinessMe.co.nz — New Zealand's business directory, currently serving 5,000+ organic users per month. Every tactic we recommend to clients has been tested on our own brands first. We do not pitch strategies we have not personally executed. That is the skin-in-the-game difference that most agencies cannot offer because they have never built anything themselves.",
  },
  {
    num: "03",
    title: "Long-Term Alliances, Not One-Night Stands",
    body: "We do not take on projects. We take on partners. Digital marketing compounds over time — SEO authority builds, ad accounts optimise, websites convert better with data. Short-term engagements produce short-term thinking. Every client we work with is a long-term growth partner. If you want a quick fix, we are probably not the right fit — and we will tell you that honestly.",
  },
  {
    num: "04",
    title: "AI-Integrated from Day One",
    body: "We embedded AI into our workflow before it became a buzzword. Generative AI, automation, and machine-learning tools are not add-ons we bolt on for optics — they are core to how we operate, how we deliver faster results, and how we give clients a compounding efficiency advantage over competitors still doing everything manually.",
  },
];

const howWeOperate = [
  {
    num: "01",
    title: "Brutal Honesty Before the Contract",
    body: "If your current setup is not going to produce results, we tell you before we take your money — not three months into a retainer when the damage is done. We would rather lose the contract than waste both our time. The initial strategy call is a genuine audit, not a sales pitch dressed up as one.",
  },
  {
    num: "02",
    title: "Revenue-Tied Reporting, Not Vanity Metrics",
    body: "Every report we produce ties back to leads, conversions, and revenue impact. We do not send ranking graphs and traffic charts that look impressive but do not connect to your bottom line. If you are spending on digital marketing, you deserve to know if it is making you money.",
  },
  {
    num: "03",
    title: "Strategy Before Tactics",
    body: "We do not pitch SEO packages or Google Ads campaigns before we understand your business, your customers, and your competitive landscape. Every engagement starts with a forensic audit. The tactics follow the strategy — not the other way around. This is the only approach that produces results that compound.",
  },
  {
    num: "04",
    title: "AI-Embedded, Not AI-Sprinkled",
    body: "Generative AI and automation are embedded into how we work — research, content production, campaign analysis, technical audits. This is not a feature we charge extra for. It is how we deliver more, faster, without proportionally increasing your cost. Clients who partner with us get the compounding efficiency advantage of an AI-integrated operation.",
  },
];

const wontDo = [
  {
    title: "Lock You into Punitive Contracts",
    body: "No 12-month lock-ins with exit penalties. No holding your website or ad account hostage if you leave. We keep clients by producing results, not by making it painful to walk away. Fair terms. Transparent scope. Reasonable notice periods.",
  },
  {
    title: "Report Vanity Metrics as Results",
    body: "Impressions, organic traffic, and keyword rankings are inputs, not outcomes. We do not send monthly reports full of green arrows that have no connection to your revenue. If the channel is not producing leads or sales, we say so and change the strategy.",
  },
  {
    title: "Use Black-Hat or Spammy Tactics",
    body: "No private blog networks, no link farms, no keyword stuffing, no fake reviews. These tactics produce short-term results and long-term penalties. We build authority the right way — slowly, ethically, and durably.",
  },
  {
    title: "Take On Every Client Who Enquires",
    body: "We turn down work when it is not a fit. If your budget cannot support the strategy that would actually produce results, or if your product or market is not a good match for our approach, we will tell you honestly.",
  },
  {
    title: "Outsource Without Telling You",
    body: "Some agencies sell you senior expertise and deliver junior contractors. We do not. You know who is working on your account and what they are doing. Transparency about who delivers what is non-negotiable.",
  },
  {
    title: "Operate Without Skin in the Game",
    body: "We do not just manage other people's marketing budgets. We spend our own money building and ranking our own brands. That accountability shapes every recommendation we make. If a tactic is not good enough for our own brands, we will not pitch it to yours.",
  },
];

const built = [
  {
    tag: "Owned Media · BusinessMe.co.nz",
    title: "We Built and Rank New Zealand's Business Directory",
    body: "BusinessMe.co.nz is a NZ business directory we built and operate — currently serving 5,000+ organic users every month across thousands of business listings. We did not acquire it. We built it, ranked it, and grow it using the same SEO and content strategies we execute for clients. It is the most defensible proof we can offer: we produce real organic traffic at scale, on our own brand, with our own money.",
  },
  {
    tag: "Agency + Freelance Background · 10 Years in the Industry",
    title: "Three Years Freelance. Seven Years Across Three Agencies.",
    body: "Before founding Digital Hall of Fame, Vasilios spent three years as a freelance digital marketing consultant, then seven years working across three agencies — gaining deep cross-channel experience in SEO, paid search, content strategy, web development, and client account management. That breadth, earned across real client engagements over a decade, is what makes the consultancy advice here different from someone who has only ever run one channel or worked inside a single agency bubble.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main id="main">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="bg-ink relative overflow-hidden hero-glow hero-grid py-32 md:py-40 text-center">
          <div className="max-w-[860px] mx-auto px-[clamp(24px,5vw,100px)] relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent mb-5">
              About Digital Hall of Fame
            </p>
            <h1 className="text-[clamp(36px,5vw,72px)] font-black uppercase tracking-[-0.025em] leading-[1.0] text-paper mb-6">
              Not an Agency. A Digital Growth Partner with Skin in the Game.
            </h1>
            <p className="text-[clamp(16px,1.2vw,19px)] text-white/65 leading-relaxed max-w-[60ch] mx-auto mb-8">
              Most established businesses have been burned by agencies that over-promise, lock them into contracts, and deliver reports full of metrics that mean nothing. Digital Hall of Fame is the antidote — a digital consulting firm that operates like a partner, not a vendor.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href={`${BASE}/contact/`} className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-ink hover:bg-accent-dk transition-colors no-underline">
                Work With Us
              </Link>
              <a href="#section-founder" className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold border border-white/30 text-paper/80 hover:border-paper hover:text-paper transition-colors no-underline">
                Meet the Team
              </a>
            </div>
          </div>
        </section>

        {/* ── Quick answer + stats ──────────────────────────────────────── */}
        <section className="bg-ink border-t border-white/[0.08] py-16">
          <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 mb-3">
              What is Digital Hall of Fame?
            </p>
            <p className="text-[clamp(15px,1.1vw,17px)] text-white/70 leading-relaxed max-w-[75ch] mb-12">
              Digital Hall of Fame is a NZ-based digital marketing consultancy founded in 2015. We help established NZ and international businesses escape digital mediocrity through SEO, Google Ads, web development, and AI automation. Long-term partnerships only. No vanity metrics. No BS. Results or we are not done.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: "2015", label: "founded — a decade of real campaigns before we pitched you" },
                { num: "50+", label: "collective years in the digital trenches across our team and network" },
                { num: "5,000+", label: "organic users per month on BusinessMe.co.nz — a brand we built and rank ourselves" },
                { num: "NZ + Global", label: "clients across New Zealand and international markets" },
              ].map(({ num, label }) => (
                <div key={num} className="flex flex-col gap-1.5">
                  <span className="text-[clamp(28px,3.5vw,48px)] font-black text-accent leading-none">{num}</span>
                  <span className="text-sm text-white/55 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why we exist ─────────────────────────────────────────────── */}
        <section className="bg-off-white py-20 md:py-28">
          <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">
              Why we exist
            </p>
            <h2 className="text-[clamp(28px,3.5vw,52px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3 max-w-[20ch]">
              Why Does the Digital Marketing Industry Have Such a Reputation Problem?
            </h2>
            <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-14 max-w-[60ch]">
              Because most agencies optimise for retainers, not results. We were built as the antidote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              {whyReasons.map(({ num, title, body }) => (
                <div key={num} className="flex flex-col gap-3">
                  <span className="text-[clamp(36px,3vw,52px)] font-black text-accent/30 leading-none">{num}</span>
                  <h3 className="text-[18px] font-bold text-ink leading-snug">{title}</h3>
                  <p className="text-[15px] text-ink/65 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Founder section ───────────────────────────────────────────── */}
        <section id="section-founder" className="bg-paper py-20 md:py-28">
          <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">
              The team
            </p>
            <h2 className="text-[clamp(28px,3.5vw,52px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3">
              Who is Behind Digital Hall of Fame?
            </h2>
            <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-14 max-w-[60ch]">
              Battle-tested operators who have built real businesses, not just managed client accounts.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
              {/* Photo + meta */}
              <div className="flex flex-col gap-5">
                <div className="rounded-xl overflow-hidden border border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/vasilios-kostidis.webp`}
                    alt="Vasilios Kostidis, Founder of Digital Hall of Fame"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/vkostidis/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink no-underline hover:text-accent transition-colors"
                >
                  LinkedIn →
                </a>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-line text-sm">
                  {[
                    { label: "Education", value: "BCom — IT & Management\nAuckland University of Technology" },
                    { label: "Operating since", value: "2015\nDigital businesses, NZ and international" },
                    { label: "Core disciplines", value: "SEO · Google Ads · Web Dev\nAI Automation · CRO · Strategy" },
                    { label: "Brands operated", value: "BusinessMe.co.nz · Kiwi Clean Home\n3 yrs freelance · 7 yrs across 3 agencies" },
                  ].map(({ label, value }) => (
                    <div key={label} className="col-span-2">
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-ink-mute mb-1">{label}</p>
                      <p className="text-[13px] text-ink/70 leading-snug whitespace-pre-line">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent mb-2">Founder</p>
                <h3 className="text-[clamp(24px,2.5vw,36px)] font-black text-ink mb-6">Vasilios Kostidis</h3>
                <div className="flex flex-col gap-4 text-[15px] text-ink/70 leading-relaxed">
                  <p>
                    Vasilios has been building and marketing digital businesses since 2015 — starting while studying a Bachelor of Commerce in IT and Management at Auckland University of Technology. Not a career marketer who has only ever worked inside agencies. A builder who learned digital marketing by doing it on real businesses with real money on the line.
                  </p>
                  <p>
                    Before Digital Hall of Fame, Vasilios spent three years as a freelance digital marketing consultant before moving agency-side — spending seven years across three agencies developing deep cross-channel fluency in SEO, paid search, web development, content strategy, and client account management. That breadth, earned over a decade of real engagements, is what separates the advice here from someone who has only ever managed one channel or operated inside a single agency.
                  </p>
                  <p>
                    Today he leads Digital Hall of Fame while also operating Kiwi Clean Home — one of Auckland's established residential and commercial cleaning businesses — and BusinessMe.co.nz, New Zealand's business directory serving 5,000+ organic users monthly. Running real businesses alongside the consultancy is not incidental. It is what keeps the advice grounded in commercial reality rather than agency theory.
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="mt-8 bg-ink text-paper rounded-xl p-6 md:p-8 relative">
                  <p className="text-[clamp(14px,1.1vw,16px)] leading-relaxed text-white/80 italic">
                    &ldquo;The reason most agencies fail their clients is simple: they have never run a business themselves. They optimise for impressions and rankings because that is what they can report on without accountability. I built Digital Hall of Fame for business owners who are tired of that — who want a partner who understands the difference between traffic and revenue, and will tell them the truth either way.&rdquo;
                  </p>
                  <footer className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-accent">
                    Vasilios Kostidis, Founder
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ── How we operate ───────────────────────────────────────────── */}
        <section className="bg-off-white py-20 md:py-28">
          <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">
              How we operate
            </p>
            <h2 className="text-[clamp(28px,3.5vw,52px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3 max-w-[22ch]">
              What Does Working with Digital Hall of Fame Actually Look Like?
            </h2>
            <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-14 max-w-[55ch]">
              Values as concrete behaviours, not laminated wall posters.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              {howWeOperate.map(({ num, title, body }) => (
                <div key={num} className="flex flex-col gap-3">
                  <span className="text-[clamp(36px,3vw,52px)] font-black text-accent/30 leading-none">{num}</span>
                  <h3 className="text-[18px] font-bold text-ink leading-snug">{title}</h3>
                  <p className="text-[15px] text-ink/65 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What we won't do ─────────────────────────────────────────── */}
        <section className="bg-paper py-20 md:py-28">
          <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">
              Anti-positioning
            </p>
            <h2 className="text-[clamp(28px,3.5vw,52px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3">
              What We Won&rsquo;t Do
            </h2>
            <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-14 max-w-[55ch]">
              The fastest way to understand what we stand for is to see what we refuse to do.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wontDo.map(({ title, body }) => (
                <div key={title} className="flex flex-col gap-3 p-6 border border-line rounded-xl">
                  <h3 className="text-[16px] font-bold text-ink leading-snug">{title}</h3>
                  <p className="text-[14px] text-ink/60 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What we've built ─────────────────────────────────────────── */}
        <section className="bg-off-white py-20 md:py-28">
          <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">
              Our track record
            </p>
            <h2 className="text-[clamp(28px,3.5vw,52px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3">
              What Have We Actually Built?
            </h2>
            <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-14 max-w-[55ch]">
              Proof you can verify, not case studies we invented for the website.
            </p>
            <div className="flex flex-col gap-8">
              {built.map(({ tag, title, body }) => (
                <div key={title} className="p-8 bg-paper rounded-xl border border-line">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent mb-3">{tag}</p>
                  <h3 className="text-[clamp(18px,1.8vw,24px)] font-bold text-ink mb-3">{title}</h3>
                  <p className="text-[15px] text-ink/65 leading-relaxed max-w-[70ch]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA band ─────────────────────────────────────────────────── */}
        <CtaBand
          variant="ink"
          heading="SEE IF WE ARE A FIT"
          subheading="We do not take on every enquiry. Book a free 30-minute strategy call and we will tell you honestly whether we are the right partner for your business — and what we would attack first if we are."
          primaryLabel="Book a Free Strategy Call"
          primaryHref="/contact/"
          secondaryLabel="See What We Do"
          secondaryHref="/our-services/"
        />
      </main>
    </>
  );
}
