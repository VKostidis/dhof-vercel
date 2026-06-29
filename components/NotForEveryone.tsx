import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";

const fits = [
  "You run an established business with real revenue and real growth ambitions",
  "You have been burned by agencies that promised the world and delivered a newsletter",
  "You are ready to invest in digital properly, not dabble in $500/month experiments",
  "You want a partner who owns the outcomes, not a vendor who clocks out at 5pm",
  "You can handle brutal honesty about what is actually holding your business back",
  "You are willing to move fast, test hard, and iterate without paralysis",
];

const notFits = [
  "Startups with no revenue looking for a miracle launch on a shoestring",
  "Businesses that need hand-holding and weekly reassurance calls",
  "Anyone who wants the cheapest option, not the most effective one",
  "Brands that need 10 approval layers before a single ad goes live",
];

export default function NotForEveryone() {
  return (
    <section id="section-nfe" className="bg-ink text-paper py-12 md:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
        <div className="flex flex-col items-center text-center gap-3 mb-12 max-w-[760px] mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white/60">Honest screening</span>
          <h2 className="text-[clamp(34px,4.2vw,64px)] font-black uppercase tracking-[-0.02em] leading-none max-w-[22ch]">
            This is <span className="text-accent">Not For Everyone</span>
          </h2>
          <p className="text-[clamp(17px,1.3vw,20px)] text-white/75 max-w-[60ch] leading-[1.55]">
            Brutal honesty: if you don&apos;t fit the profile below, we&apos;re not the right partner. That matters to us and to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          <div>
            <h3 className="text-base font-black uppercase tracking-[0.06em] text-accent mb-5 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              We are built for you if...
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {fits.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/80 leading-relaxed">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-black uppercase tracking-[0.06em] text-white/40 mb-5 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              We are not the right fit if...
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {notFits.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/45 leading-relaxed line-through decoration-white/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5 no-underline" style={{ textDecoration: "none" }} aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span style={{ textDecoration: "none" }} className="no-underline [text-decoration:none]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href={`${BASE}/contact/`}
            className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-ink border border-accent no-underline hover:bg-accent-dk hover:border-accent-dk transition-all"
          >
            Find Out If We Are a Fit →
          </Link>
        </div>
      </div>
    </section>
  );
}
