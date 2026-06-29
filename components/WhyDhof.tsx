import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";

const feats = [
  {
    num: "01",
    title: "We lead with brutal honesty",
    desc: "If your industry's search volume doesn't justify a $3K/month Google Ads budget, we'll tell you. If your website is the real problem, not your ads, we'll tell you. No upsell for upsell's sake.",
  },
  {
    num: "02",
    title: "We weaponise AI for real",
    desc: "Not as a buzzword. AI-integrated workflows make our research sharper, content faster, campaign analysis deeper. That's the AI advantage, built into everything we deliver.",
  },
  {
    num: "03",
    title: "Battle-tested since 2015",
    desc: "The founder has been operating in the digital trenches for over a decade. With 50+ collective years across our team and contractor network, what we deploy is proven, not theoretical.",
  },
  {
    num: "04",
    title: "We built our own asset",
    desc: "BusinessMe.co.nz, NZ's business directory, attracting 5,000+ users per month across thousands of listings. We didn't borrow that case study. We built it, we rank it, we grow it.",
  },
  {
    num: "05",
    title: "We're selective",
    desc: "10 clients we're genuinely invested in beats 100 we're indifferent to. If we don't think we can deliver a disgusting return for your business, we'll tell you that in the strategy call.",
  },
];

export default function WhyDhof() {
  return (
    <section id="section-why-us" className="py-12 md:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
        <div className="flex flex-col items-center text-center gap-3 mb-16 max-w-[760px] mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-mute">Why DHOF</span>
          <h2 className="text-[clamp(34px,4.2vw,64px)] font-black uppercase tracking-[-0.02em] leading-none max-w-[22ch]">
            Why <span className="text-accent">DHOF</span>, not the other NZ agencies
          </h2>
          <p className="text-[clamp(17px,1.3vw,20px)] text-ink-mute max-w-[60ch] leading-[1.55]">
            Most NZ agencies say the same beige things: &lsquo;passionate team&rsquo;, &lsquo;holistic solutions&rsquo;, &lsquo;world-class results&rsquo;. Here&apos;s what we do differently.
          </p>
        </div>

        <div className="flex flex-col max-w-[900px] mx-auto">
          {feats.map(({ num, title, desc }) => (
            <div key={num} className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-14 py-8 sm:py-8 border-t border-line last:border-b">
              <span className="text-[clamp(48px,5vw,80px)] font-black leading-none tracking-[-0.03em] text-accent">{num}</span>
              <div>
                <h3 className="text-[clamp(24px,2.5vw,36px)] font-black uppercase tracking-[-0.02em] leading-[1.05] mb-3">{title}</h3>
                <p className="text-[19px] text-ink-mute leading-relaxed max-w-[60ch]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href={`${BASE}/contact/`}
            className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-ink text-paper border border-ink no-underline hover:bg-accent hover:text-ink hover:border-accent transition-all"
          >
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
