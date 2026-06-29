import type { Metadata } from "next";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import TrustedBy from "@/components/TrustedBy";
import CtaBand from "@/components/CtaBand";

const BASE = "https://www.digitalhalloffame.com";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Six battle-tested digital marketing services for NZ businesses. SEO, Google Ads, Web Development, Social Media, Video Production, AI Automation. One profit-first obsession.",
  alternates: { canonical: `${BASE}/our-services/` },
};

const services = [
  { num: "01", title: "Search Engine Optimisation", body: "Forensic audits, high-intent keyword strategy, authority building, and Local SEO that puts you at the top of Google where your NZ customers are already searching. Transparent reporting tied to real ROI, not vanity rankings.", href: "/our-services/seo/" },
  { num: "02", title: "Google Ads (SEM/PPC)", body: "Stop funding Google's retirement fund with poorly managed campaigns. High-intent keyword warfare, irresistible ad copy, and conversion-obsessed landing pages that turn clicks into cash from day one.", href: "/our-services/sem/" },
  { num: "03", title: "Web Development", body: "Your current site is either invisible, embarrassing, or both. Fast, mobile-perfect, SEO-ready websites engineered to convert, available on a fully managed monthly model so there is no massive upfront hit.", href: "/our-services/web-development/" },
  { num: "04", title: "Social Media Advertising", body: "Boosting posts is not a strategy. Paid social funnels on Facebook, Instagram, and beyond that target your ideal buyers, nurture them, and convert them. Measurable, scalable, terrifyingly efficient.", href: "/our-services/social-media/" },
  { num: "05", title: "Video Production", body: "Video is the highest-ROI content format alive. We concept, produce, and deploy video assets designed to stop the scroll, build trust, and drive action for your NZ audience. Idea to impact, handled.", href: "/our-services/video-production/" },
  { num: "06", title: "AI Automation & Consultancy", body: "While your competitors are still Googling \"what is AI\", we embed intelligent automation deep into your marketing and operations. The AI advantage is real, it is here, and it is yours if you move first.", href: "/our-services/ai-consultancy/" },
];

const compareRows = [
  { what: "Reporting", them: "Monthly PDF, lots of graphs, unclear ROI", us: "Revenue-tied reporting. Every metric linked to a real business outcome." },
  { what: "Agreements", them: "Punitive lock-ins, exit penalties, auto-renewing clauses", us: "Clear, fair terms. You know exactly what you are signing before you sign it." },
  { what: "Team", them: "Senior pitch, junior execution. Your account rotates every 6 months.", us: "50+ collective years across the team. Senior-led, every client." },
  { what: "Strategy", them: "Off-the-shelf package matched to your budget, not your problem", us: "Forensic audit first. Custom attack plan. Nothing pre-packaged." },
  { what: "Tools", them: "Free tools, agency reseller accounts, whatever saves margin", us: "Ahrefs, SEMrush, Screaming Frog. Named, proven, non-negotiable." },
  { what: "Proof", them: "Client logos they cannot talk about. Vague results.", us: "Live case studies. We built BusinessMe.co.nz ourselves. 5,000+ users/month." },
  { what: "Honesty", them: "\"We're confident we can hit those numbers.\" (We will see.)", us: "If we cannot deliver a real return for your business, we will tell you before you spend a dollar." },
];

const weekOne = [
  { num: "01", title: "Day 1–2: Forensic Audit", body: "We tear apart your current digital presence — website speed, SEO health, Google Ads account, competitor positioning, keyword gaps. We use Ahrefs, SEMrush, Screaming Frog, and GA4. Nothing is hidden from you." },
  { num: "02", title: "Day 3: Strategy Session", body: "Brutal honesty time. We present what is broken, what is being left on the table, and exactly which levers, if pulled, will move the revenue needle fastest. You get clarity, not jargon." },
  { num: "03", title: "Day 4–5: Priority Roadmap Delivered", body: "A lean, no-fluff action plan. The highest-leveraged activities go first. No bloated 60-page strategy decks that gather dust, just the work that matters, sequenced intelligently." },
  { num: "04", title: "Week 2+: Execution Begins", body: "We build, launch, test, and optimise. You get regular plain-English updates tied to metrics that matter: leads, conversions, revenue impact. Not impressions. Not brand lift." },
];

const whyDhof = [
  { num: "01", title: "We Lead With Brutal Honesty", body: "If your industry search volume does not justify a $3K/month Google Ads budget, we will tell you. If your website is the real problem, not your ads, we will tell you. No upsell for upsell's sake." },
  { num: "02", title: "AI-Integrated From the Ground Up", body: "Not as a buzzword. AI-integrated workflows make our research sharper, content faster, and campaign analysis deeper. That is the AI advantage, built into everything we deliver." },
  { num: "03", title: "Skin in the Game", body: "BusinessMe.co.nz, NZ's business directory, attracting 5,000+ users per month across thousands of listings. We did not borrow that case study. We built it, we rank it, we grow it." },
  { num: "04", title: "Battle-Tested Since 2015", body: "The founder has been operating in the digital trenches for over a decade. With 50+ collective years across the team, what we deploy is proven, not theoretical. No first-year-agency experimentation on your budget." },
  { num: "05", title: "We Are Selective", body: "Ten clients we are genuinely invested in beats a hundred we are indifferent to. If we do not think we can deliver a real return for your business, we will tell you in the strategy call before you spend a dollar." },
];

const notForYou = [
  "You are hunting for the cheapest quote in the room",
  "You want to \"just post on social media\" without a real strategy",
  "You need a 12-month discovery phase before anything moves",
  "You measure success in followers, likes, and impressions",
  "You are not willing to have a brutally honest conversation",
];

const builtForYou = [
  "You are an established NZ business done with mediocre agency results",
  "You have been burned before and want brutal honesty above all else",
  "You measure success in pipeline, leads, and revenue",
  "You want a long-term growth partner, not a one-off project",
  "You are ready to move fast when you see a real opportunity",
];

const faqs = [
  { q: "What does a digital marketing agency actually do?", a: "A digital marketing agency drives leads, sales, and growth for businesses online through SEO, paid ads, web development, social media, content, and AI strategy. A good agency does not just run campaigns, it builds measurable profit engines. At Digital Hall of Fame, every service is tied to a real business outcome, not vanity metrics." },
  { q: "How do I choose a digital marketing agency in NZ?", a: "Look for transparent reporting, proven results they can point to, and no punitive lock-in contracts. Ask whether they use professional tools like Ahrefs and SEMrush or just free alternatives. Ask how they measure success. If they lead with rankings and follower counts rather than leads and revenue, keep looking." },
  { q: "How much does a digital marketing agency cost in NZ?", a: "Pricing depends on your goals, competitive landscape, and scope of services. We do not publish rates because a quote without context is meaningless. Our positioning is accessible-premium: serious enough to filter tyre-kickers, accessible enough for an established NZ SME. Book a strategy call and we will give you a straight number." },
  { q: "Can one agency handle all my digital marketing?", a: "Yes, and for most established businesses it is the smarter move. A full-service agency ensures your SEO, paid ads, website, and content all work from the same strategy rather than pulling in different directions. Digital Hall of Fame operates as a full-service partner, a long-term ally, not a series of disconnected vendors." },
  { q: "Is it worth hiring a digital marketing agency?", a: "Yes, but only the right one. The wrong agency burns your budget and delivers PDFs full of vanity metrics. The right one builds a predictable profit engine. At DHOF, we only take on clients we genuinely believe we can deliver a real return for. If the numbers will not work for your business, we will tell you before you spend a dollar." },
  { q: "How long before I see results from digital marketing?", a: "Depends on the channel. Google Ads can drive traffic within hours of launch. SEO is a longer game: meaningful movement in 3 to 6 months, significant results at 6 to 12 months. Web development improvements can lift conversion rates almost immediately. We set honest expectations from day one and report on real metrics, not vanity numbers." },
  { q: "Do you work with businesses outside Auckland?", a: "Yes. We are NZ-based and serve clients across the country and internationally. Digital marketing does not care about geography. If you are an established business serious about growth, we can fight for you regardless of where you operate." },
  { q: "How do I know if my current digital marketing is working?", a: "If you cannot directly link your marketing spend to leads, sales, or revenue growth, it is probably not working. Telltale signs: high ad spend with low conversions, Google rankings stuck on page two, a website that looks fine but generates nothing. Book a strategy call and we will run a forensic audit on what is actually happening under the hood." },
];

export default function OurServicesPage() {
  return (
    <main id="main">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-ink relative overflow-hidden hero-glow hero-grid text-center py-28 md:py-36">
        <div className="max-w-[800px] mx-auto px-[clamp(24px,5vw,100px)] relative z-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent mb-5">
            Digital Growth Partner
          </p>
          <h1 className="text-[clamp(36px,5vw,72px)] font-black uppercase tracking-[-0.025em] leading-[1.0] text-paper mb-6">
            Six Battle-Tested Services. One Obsession.
          </h1>
          <p className="text-[clamp(16px,1.2vw,19px)] text-white/65 leading-relaxed max-w-[58ch] mx-auto mb-8">
            Most NZ agencies sell packages. We build profit engines. Every service we offer is engineered to move real money, not manufacture noise. Pick your weapon.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={`${BASE}/contact/`} className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-ink hover:bg-accent-dk transition-colors no-underline">
              Book a Free Strategy Call
            </Link>
            <a href="#section-services" className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold border border-white/30 text-paper/80 hover:border-paper hover:text-paper transition-colors no-underline">
              See All Services
            </a>
          </div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────────────── */}
      <Marquee />

      {/* ── Trusted by ────────────────────────────────────────────────── */}
      <TrustedBy />

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section className="bg-ink py-20 border-t border-b border-white/[0.08]">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 mb-10">
          The numbers do not lie
        </p>
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "2015", label: "Battle-tested since day one" },
            { num: "50+", label: "Collective years across the team" },
            { num: "6", label: "Specialist services, one profit-first strategy" },
            { num: "5K+", label: "Monthly users on our own digital property" },
          ].map(({ num, label }) => (
            <div key={num} className="flex flex-col gap-1">
              <span className="text-[clamp(36px,4vw,56px)] font-black text-accent leading-none">{num}</span>
              <span className="text-sm text-white/60 leading-snug max-w-[20ch] mx-auto">{label}</span>
            </div>
          ))}
        </div>
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)] mt-10">
          <p className="text-[clamp(15px,1.1vw,17px)] text-white/60 leading-relaxed max-w-[72ch]">
            Digital Hall of Fame is a digital consulting firm built for businesses that are done with agencies that do not deliver. SEO, Google Ads, web development, social media, video, and AI strategy — each tied to a real business outcome, not vanity metrics. Operating since 2015.
          </p>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────────────────── */}
      <section id="section-services" className="bg-ink border-t border-white/[0.08] py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 mb-4">The full arsenal</p>
          <h2 className="text-[clamp(28px,3.5vw,52px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-paper mb-3 max-w-[24ch]">
            What Does Digital Hall of Fame Actually Do?
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-white/60 mb-14 max-w-[60ch]">
            Six services. Every one built to generate a return you can point to. No fluff, no filler, no BS.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {services.map(({ num, title, body, href }) => (
              <Link
                key={num}
                href={`${BASE}${href}`}
                className="flex flex-col gap-4 p-8 bg-ink hover:bg-ink-soft transition-colors no-underline group"
              >
                <span className="text-[11px] font-bold text-white/30">{num}</span>
                <h3 className="text-[17px] font-bold text-paper leading-snug group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-[13px] text-white/55 leading-relaxed flex-1">{body}</p>
                <span className="text-[13px] font-semibold text-accent mt-1">Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/contact/`} className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-ink hover:bg-accent-dk transition-colors no-underline">
              Get Your Free Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Compare ───────────────────────────────────────────────────── */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">Honest comparison</p>
          <h2 className="text-[clamp(28px,3.5vw,52px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3 max-w-[24ch]">
            Why Do Businesses Choose Us Over Other NZ Agencies?
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-12 max-w-[55ch]">
            We will let the comparison speak for itself.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-ink">
                  <th className="text-left py-3 pr-6 font-bold text-ink text-[13px] w-[15%]">What matters</th>
                  <th className="text-left py-3 pr-6 font-bold text-ink/50 text-[13px] w-[42.5%]">Typical NZ agency</th>
                  <th className="text-left py-3 font-bold text-ink text-[13px] w-[42.5%]">Digital Hall of Fame</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(({ what, them, us }) => (
                  <tr key={what} className="border-b border-line">
                    <td className="py-4 pr-6 font-semibold text-ink text-[13px] align-top">{what}</td>
                    <td className="py-4 pr-6 text-ink/55 text-[13px] leading-relaxed align-top">
                      <span className="text-red-500 mr-1.5">×</span>{them}
                    </td>
                    <td className="py-4 text-ink/80 text-[13px] leading-relaxed align-top">
                      <span className="text-accent mr-1.5 font-bold">✓</span>{us}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Week one ──────────────────────────────────────────────────── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">How we engage</p>
          <h2 className="text-[clamp(28px,3.5vw,52px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3 max-w-[22ch]">
            What Does Week One Actually Look Like?
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-14 max-w-[60ch]">
            No 90-day onboarding odyssey. No discovery phase that lasts forever. Here is exactly what we attack, and when.
          </p>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[clamp(48px,5vw,80px)] font-black text-accent leading-none">7</span>
            <span className="text-[clamp(13px,1vw,16px)] text-ink/50 max-w-[20ch] leading-snug">Average days from first call to live campaign</span>
          </div>
          <div className="flex flex-col gap-8 max-w-[720px]">
            {weekOne.map(({ num, title, body }) => (
              <div key={num} className="flex gap-6 items-start">
                <span className="text-[clamp(32px,2.5vw,44px)] font-black text-accent/25 leading-none shrink-0 w-14 text-right">{num}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-bold text-ink uppercase tracking-tight">{title}</h3>
                  <p className="text-[14px] text-ink/65 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Not your typical ──────────────────────────────────────────── */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">Why DHOF</p>
          <h2 className="text-[clamp(28px,3.5vw,52px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3 max-w-[22ch]">
            Not Your Typical Digital Partner
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-14 max-w-[65ch]">
            Most NZ agencies say the same beige things: passionate team, holistic solutions, world-class results. Here is what we actually do differently.
          </p>
          <div className="flex flex-col gap-8 max-w-[800px]">
            {whyDhof.map(({ num, title, body }) => (
              <div key={num} className="flex gap-6 items-start">
                <span className="text-[clamp(32px,2.5vw,44px)] font-black text-accent/25 leading-none shrink-0 w-14 text-right">{num}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-bold text-ink">{title}</h3>
                  <p className="text-[14px] text-ink/65 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href={`${BASE}/contact/`} className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-ink text-paper hover:bg-accent hover:text-ink transition-all no-underline">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Not for everyone ──────────────────────────────────────────── */}
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 mb-4">Be honest with yourself</p>
          <h2 className="text-[clamp(28px,3.5vw,52px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-paper mb-3 max-w-[22ch]">
            Honestly, We Are{" "}
            <span className="text-accent">Not for Everyone.</span>
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-white/60 mb-4 max-w-[60ch]">
            We filter our clients as hard as they filter us. That is how we keep our results sharp and our partnerships long.
          </p>
          <p className="text-[clamp(14px,1vw,16px)] text-white/45 mb-12 max-w-[55ch]">
            Still reading? Good. That means you are probably one of us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-red-400 mb-5">Not for you if…</h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-white/65">
                    <span className="text-red-400 shrink-0 mt-0.5">×</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-accent mb-5">Built for you if…</h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-4">
                {builtForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-white/65">
                    <span className="text-accent shrink-0 mt-0.5">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials placeholder ───────────────────────────────────── */}
      <section className="bg-paper py-20 md:py-24">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">Client Results</p>
          <h2 className="text-[clamp(28px,3.5vw,52px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3">
            What Our Clients Say
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-12 max-w-[60ch]">
            First client results are dropping. Real names, real businesses, real outcomes. No invented testimonials, ever.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Testimonial incoming", "Testimonial incoming", "Testimonial incoming"].map((t, i) => (
              <div key={i} className="p-8 rounded-xl border-2 border-dashed border-line flex items-center justify-center">
                <p className="text-[14px] text-ink/30 font-medium">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ──────────────────────────────────────────────────── */}
      <CtaBand
        variant="ink"
        heading="Ready to Stop Leaving Money on the Table?"
        subheading="Book a free strategy call. We will tear apart your current digital presence, find the biggest revenue leaks, and give you a straight-talking breakdown of what we would attack first, and why. This is not a pitch. No deck. No pre-packaged solutions. Just brutal honesty about your actual situation, on the house."
        primaryLabel="Book a Free Call"
        primaryHref="/contact/"
        secondaryLabel="If not now, then when?"
        secondaryHref="/contact/"
      />

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[860px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">FAQ</p>
          <h2 className="text-[clamp(26px,3vw,44px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-12 max-w-[30ch]">
            Questions Worth Asking Before You Hire Any Digital Agency
          </h2>
          <div className="flex flex-col divide-y divide-line">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="text-[15px] font-semibold text-ink leading-snug">{q}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center text-ink/50 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-4 text-[14px] text-ink/65 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA (accent) ────────────────────────────────────────── */}
      <CtaBand
        variant="accent"
        heading="You Have Read This Far. You Already Know the Answer."
        subheading="Book a free 30-minute strategy session. No pitch deck. No obligation. We will tell you what is actually broken, and what it would take to make it work."
        primaryLabel="Book the Damn Call"
        primaryHref="/contact/"
        secondaryLabel="Send a Message"
        secondaryHref="/contact/"
      />
    </main>
  );
}
