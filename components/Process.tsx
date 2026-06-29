import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";

const steps = [
  { num: "01", title: "Forensic Discovery", desc: "We dig into your business, market, competitors, and current digital footprint. Not a 15-minute intake form, a proper deep dive. This is where most agencies get lazy." },
  { num: "02", title: "Strategic Attack Plan", desc: "Based on discovery, we build a custom roadmap. No copy-paste packages. Every tactic chosen to close the gap between where you are and where you should be." },
  { num: "03", title: "Aggressive Execution", desc: "We deploy the plan with speed and precision. Campaigns live, content in market, code shipped, systems integrated. This is where the promises become reality." },
  { num: "04", title: "Relentless Optimisation", desc: "Every week we analyse, test, and iterate. Not reactive fire-fighting, proactive improvement. We don't stop until the numbers say so." },
];

export default function Process() {
  return (
    <section id="section-process" className="py-12 md:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-16">
          <div className="max-w-[560px]">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-mute block mb-3">Our process</span>
            <h2 className="text-[clamp(34px,4.2vw,64px)] font-black uppercase tracking-[-0.02em] leading-none">
              How We Actually <span className="text-accent">Win For You</span>
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center bg-ink text-paper p-8 rounded-2xl text-center min-w-[180px] self-start">
            <span className="text-[clamp(40px,5vw,72px)] font-black leading-none tracking-[-0.03em] text-accent">7</span>
            <span className="text-sm text-white/60 font-medium mt-1">days to first<br />live campaign</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map(({ num, title, desc }) => (
            <div key={num} className="flex flex-col gap-3 p-10 border border-line rounded-2xl">
              <span className="text-[clamp(40px,4vw,64px)] font-black leading-none tracking-[-0.03em] text-accent">{num}</span>
              <h3 className="text-[clamp(20px,1.8vw,28px)] font-black uppercase tracking-[-0.02em] leading-[1.1]">{title}</h3>
              <p className="text-base text-ink-mute leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href={`${BASE}/contact/`}
            className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-ink text-paper border border-ink no-underline hover:bg-accent hover:text-ink hover:border-accent transition-all"
          >
            Start Your Strategy Now
          </Link>
        </div>
      </div>
    </section>
  );
}
