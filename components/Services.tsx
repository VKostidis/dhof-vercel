import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";

const services = [
  { num: "01", title: "SEO, Dominate Google NZ", href: "/our-services/seo/", desc: "Forensic audits, high-intent keyword strategy, authority building, and Local SEO that puts you at the top of Google where your NZ customers are already searching. No black-box nonsense, transparent reporting tied to real ROI." },
  { num: "02", title: "Google Ads (SEM/PPC), Buying NZ Customers at a Profit", href: "/our-services/sem/", desc: "Stop funding Google's retirement fund with poorly managed campaigns. We build high-intent keyword warfare, irresistible ad copy, and conversion-obsessed landing pages that turn clicks into cash from day one." },
  { num: "03", title: "Web Development, A Website That Actually Sells", href: "/our-services/web-development/", desc: "Your current site is either invisible, embarrassing, or both. We build fast, mobile-perfect, SEO-ready websites engineered to convert, available on a fully managed monthly model so there's no massive upfront hit." },
  { num: "04", title: "Social Media Advertising, Turning Scrolls Into Sales", href: "/our-services/social-media/", desc: "Boosting posts is not a strategy. We build paid social funnels on Facebook, Instagram, and beyond that target your dream buyers, nurture them, and convert them. Measurable, scalable, terrifyingly efficient." },
  { num: "05", title: "Video Marketing, Content That Commands Attention", href: "/our-services/video-production/", desc: "Video is the highest-ROI content format alive. We concept, produce, and deploy video assets designed to stop the scroll, build trust, and drive action for your NZ audience." },
  { num: "06", title: "AI Consultancy, Your Unfair Competitive Edge", href: "/our-services/ai-consultancy/", desc: "While your competitors are still Googling 'what is AI,' we're embedding intelligent automation deep into your marketing and operations. The AI advantage is real, it's here, and it's yours if you move first." },
];

export default function Services() {
  return (
    <section id="section-services" className="bg-ink text-paper py-12 md:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
        <div className="flex flex-col items-center text-center gap-3 mb-8 max-w-[760px] mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white/60">Services</span>
          <h2 className="text-[clamp(34px,4.2vw,64px)] font-black uppercase tracking-[-0.02em] leading-none max-w-[22ch]">
            What Does Digital Hall of Fame <span className="text-accent">Actually Do?</span>
          </h2>
          <p className="text-[clamp(17px,1.3vw,20px)] text-white/75 max-w-[60ch] leading-[1.55]">
            Six battle-tested services. One relentless objective: build you a profit engine.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto mb-14 text-center text-[19px] leading-relaxed text-white/78">
          <p>We don&apos;t scatter-gun. Every service we offer is engineered to move money, not manufacture noise. Whether you need to own Google, turn your website into a 24/7 salesperson, or finally make paid ads pay, we&apos;ve got the firepower.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ num, title, href, desc }) => (
            <Link
              key={num}
              href={`${BASE}${href}`}
              className="flex flex-col gap-3 p-12 bg-ink-soft border border-white/10 rounded-lg no-underline text-inherit min-h-[320px] transition-all hover:border-accent hover:-translate-y-1 group"
            >
              <span className="text-[clamp(40px,4vw,56px)] font-black leading-none tracking-[-0.02em] text-white/20 mb-3 group-hover:text-accent transition-colors">{num}</span>
              <h3 className="text-[clamp(16px,1.4vw,20px)] font-black uppercase tracking-[-0.02em] leading-[1.25] text-paper m-0">{title}</h3>
              <p className="text-base leading-relaxed text-white/70 m-0 flex-1">{desc}</p>
              <span className="mt-auto pt-4 text-sm font-bold text-accent uppercase tracking-wide">Learn more →</span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href={`${BASE}/contact/`}
            className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-ink border border-accent no-underline hover:bg-accent-dk hover:border-accent-dk transition-all"
          >
            Get Your Free Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
