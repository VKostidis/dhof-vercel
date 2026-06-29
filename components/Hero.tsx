import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";

const Sparkle = ({ className, style }: { className: string; style: React.CSSProperties }) => (
  <svg
    className={`absolute pointer-events-none z-0 ${className}`}
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0L13.5 9.5L22.5 11.5L13.5 13.5L12 22.5L10.5 13.5L1.5 11.5L10.5 9.5L12 0Z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="section-hero"
      className="relative flex items-center justify-center text-center bg-ink text-paper overflow-hidden isolate hero-glow hero-grid"
      style={{ minHeight: "calc(100vh - 80px)", maxHeight: "900px", paddingBlock: "4rem" }}
    >
      {/* Sparkles */}
      <Sparkle className="w-12 h-12 text-paper opacity-80 animate-sparkle" style={{ top: "14%", left: "10%" }} />
      <Sparkle className="w-4 h-4 text-paper opacity-40" style={{ top: "22%", right: "14%" }} />
      <Sparkle className="w-8 h-8 text-paper opacity-65 animate-sparkle" style={{ bottom: "18%", left: "18%" }} />
      <Sparkle className="w-4 h-4 text-paper opacity-40 animate-sparkle" style={{ top: "35%", right: "8%" }} />
      <Sparkle className="w-12 h-12 text-paper opacity-80" style={{ bottom: "14%", right: "12%" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-[clamp(24px,5vw,100px)]">
        {/* Alert pill */}
        <div className="inline-flex items-center gap-2 bg-accent text-ink text-[11px] font-black uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-3 mx-auto">
          <span className="w-[7px] h-[7px] bg-ink rounded-full flex-shrink-0 animate-dot-pulse" />
          NZ Business Owners: Read This
        </div>

        {/* Eyebrow */}
        <p className="text-accent text-xs font-semibold uppercase tracking-[0.08em] mb-5">Digital Growth Partner</p>

        {/* H1 */}
        <h1 className="text-[clamp(40px,7vw,96px)] font-black uppercase tracking-[-0.03em] leading-[0.95] text-paper max-w-[22ch] mx-auto">
          Not an Agency. A Digital Growth Partner That{" "}
          <span className="text-accent">Actually Delivers.</span>
        </h1>

        {/* Bullets */}
        <ul className="list-none p-0 mt-5 flex flex-col gap-3 max-w-[52ch] mx-auto text-left">
          {[
            [<><strong className="text-white font-bold">Battle-hardened</strong> — strategies forged in <mark className="bg-accent text-ink px-1 rounded-sm not-italic">real campaigns since 2015</mark>, not textbooks or guesswork.</>, ""],
            [<><strong className="text-white font-bold">AI-powered</strong> — we build competitive advantages your competitors have not even thought of yet.</>, ""],
            [<><strong className="text-white font-bold">Brutally honest</strong> — we tell you what you need to hear, not what keeps the retainer comfortable.</>, ""],
          ].map(([text], i) => (
            <li key={i} className="flex items-start gap-3 text-[clamp(15px,1.1vw,17px)] text-white/80 leading-[1.55]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{text}</span>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link
            href={`${BASE}/contact/`}
            className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-ink border border-accent no-underline hover:bg-accent-dk hover:border-accent-dk transition-all"
          >
            Join the Hall of Fame
          </Link>
          <Link
            href={`${BASE}/contact/`}
            className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-transparent text-paper border border-white/40 no-underline hover:bg-paper hover:text-ink hover:border-paper transition-all"
          >
            30 Min Consultation
          </Link>
        </div>

        {/* Proof badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-7">
          {[
            { icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, text: <>Founded <strong className="font-black text-accent">2015</strong></> },
            { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, text: <><strong className="font-black text-accent">50+</strong> years collective expertise</> },
            { icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>, text: <><strong className="font-black text-accent">5,000+</strong> monthly users on our proprietary business directory</> },
          ].map(({ icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/[0.07] border border-white/[0.12] rounded-full py-[7px] px-4 text-sm text-white/85">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0" aria-hidden="true">
                {icon}
              </svg>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
