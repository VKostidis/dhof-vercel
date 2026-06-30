import type { Metadata } from "next";
import Link from "next/link";
import { industriesData } from "@/lib/industry-data";
import CtaBand from "@/components/CtaBand";

const BASE = "https://www.digitalhalloffame.com";

export function generateStaticParams() {
  return Object.keys(industriesData).map((industry) => ({ industry }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const d = industriesData[industry];
  if (!d) return { title: "Industry | Digital Hall of Fame" };
  return {
    title: d.hub.meta.title,
    description: d.hub.meta.description,
    alternates: { canonical: `${BASE}/${industry}/` },
  };
}

export default async function IndustryHubPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const d = industriesData[industry];
  if (!d) return <main id="main"><p className="p-20 text-center">Page not found.</p></main>;

  const h = d.hub;

  return (
    <main id="main">
      {/* ── Hero ── */}
      <section className="bg-ink relative overflow-hidden hero-glow hero-grid text-center py-28 md:py-36">
        <div className="max-w-[820px] mx-auto px-[clamp(24px,5vw,100px)] relative z-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent mb-5">{h.eyebrow}</p>
          <h1 className="text-[clamp(32px,4.5vw,64px)] font-black uppercase tracking-[-0.025em] leading-[1.0] text-paper mb-6">
            {h.heroH1}
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-white/65 leading-relaxed max-w-[58ch] mx-auto mb-8">
            {h.heroSub}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-ink hover:bg-accent-dk transition-colors no-underline"
            >
              Book a Free Audit
            </Link>
            <a
              href="#section-services"
              className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold border border-white/30 text-paper/80 hover:border-paper hover:text-paper transition-colors no-underline"
            >
              See Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick answer ── */}
      <section className="bg-ink border-t border-white/[0.08] py-16">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 mb-3">What we do</p>
          <p className="text-[clamp(15px,1.1vw,17px)] text-white/70 leading-relaxed max-w-[75ch]">
            {h.quickAnswer}
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="section-services" className="bg-off-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">Our services</p>
          <h2 className="text-[clamp(26px,3vw,48px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3 max-w-[26ch]">
            {h.servicesHeading}
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-14 max-w-[60ch]">{h.servicesSub}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {h.services.map(({ num, title, body, label, href }) => (
              <a
                key={num}
                href={href}
                className="flex flex-col gap-3 p-8 bg-paper rounded-xl border border-line hover:border-ink/30 transition-colors no-underline"
              >
                <span className="text-[11px] font-bold text-ink/30">{num}</span>
                <h3 className="text-[17px] font-bold text-ink leading-snug">{title}</h3>
                <p className="text-[14px] text-ink/65 leading-relaxed flex-1">{body}</p>
                <span className="text-[13px] font-semibold text-ink mt-2">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">The real problem</p>
          <h2 className="text-[clamp(26px,3vw,48px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3 max-w-[26ch]">
            {h.problemsHeading}
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-14 max-w-[60ch]">{h.problemsSub}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {h.problems.map(({ num, title, body }) => (
              <div key={num} className="flex gap-5">
                <span className="text-[clamp(28px,2.5vw,40px)] font-black text-accent/20 leading-none shrink-0 w-10 text-right">
                  {num}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-bold text-ink uppercase tracking-tight">{title}</h3>
                  <p className="text-[14px] text-ink/65 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related industries ── */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">Related industries</p>
          <h2 className="text-[clamp(26px,3vw,44px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-14 max-w-[26ch]">
            OTHER TRADE INDUSTRIES WE SPECIALISE IN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {h.related.map(({ num, title, body, label, href }) => (
              <a
                key={num}
                href={href}
                className="flex flex-col gap-3 p-6 bg-paper rounded-xl border border-line hover:border-ink/30 transition-colors no-underline"
              >
                <span className="text-[11px] font-bold text-ink/30">{num}</span>
                <h3 className="text-[15px] font-bold text-ink leading-snug">{title}</h3>
                <p className="text-[13px] text-ink/60 leading-relaxed flex-1">{body}</p>
                <span className="text-[13px] font-semibold text-ink mt-1">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <CtaBand
        variant="ink"
        heading={h.ctaHeading}
        subheading={h.ctaSub}
        primaryLabel="Book a Free Audit"
        primaryHref="/contact/"
        secondaryLabel="Send a Message"
        secondaryHref="/contact/"
      />

      {/* ── FAQ ── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[860px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">FAQ</p>
          <h2 className="text-[clamp(26px,3vw,44px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-12 max-w-[28ch]">
            {h.faqHeading}
          </h2>
          <div className="flex flex-col divide-y divide-line">
            {h.faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="text-[15px] font-semibold text-ink leading-snug">{q}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center text-ink/50 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] text-ink/65 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CtaBand
        variant="accent"
        heading={h.finalCtaHeading}
        subheading={h.finalCtaSub}
        primaryLabel="Book a Free Audit"
        primaryHref="/contact/"
        secondaryLabel="See All Services"
        secondaryHref="/our-services/"
      />
    </main>
  );
}
