import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import CtaBand from "@/components/CtaBand";

const BASE = "https://www.digitalhalloffame.com";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = servicesData[slug];
  if (!s) return { title: "Service | Digital Hall of Fame" };
  return {
    title: s.meta.title,
    description: s.meta.description,
    alternates: { canonical: `${BASE}/our-services/${slug}/` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = servicesData[slug];
  if (!s) return <main id="main"><p className="p-20 text-center">Service not found.</p></main>;

  const hasPricing = Boolean(s.pricingTiers?.length);

  return (
    <main id="main">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-ink relative overflow-hidden hero-glow hero-grid text-center py-28 md:py-36">
        <div className="max-w-[820px] mx-auto px-[clamp(24px,5vw,100px)] relative z-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent mb-5">{s.eyebrow}</p>
          <h1 className="text-[clamp(32px,4.5vw,64px)] font-black uppercase tracking-[-0.025em] leading-[1.0] text-paper mb-6">
            {s.heroH1}
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-white/65 leading-relaxed max-w-[58ch] mx-auto mb-8">
            {s.heroSub}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={`${BASE}/contact/`}
              className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-accent text-ink hover:bg-accent-dk transition-colors no-underline"
            >
              {s.primaryCtaLabel}
            </Link>
            <a
              href={s.secondaryCtaAnchor}
              className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold border border-white/30 text-paper/80 hover:border-paper hover:text-paper transition-colors no-underline"
            >
              {s.secondaryCtaLabel}
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick answer + stats ─────────────────────────────────────────── */}
      <section className="bg-ink border-t border-white/[0.08] py-16">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 mb-3">First principle</p>
          <p className="text-[clamp(15px,1.1vw,17px)] text-white/70 leading-relaxed max-w-[75ch] mb-12">
            {s.quickAnswer}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {s.stats.map(({ num, label }) => (
              <div key={num} className="flex flex-col gap-1.5">
                <span className="text-[clamp(28px,3.5vw,48px)] font-black text-accent leading-none">{num}</span>
                <span className="text-sm text-white/55 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">What you actually get</p>
          <h2 className="text-[clamp(26px,3vw,48px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3 max-w-[26ch]">
            {s.featuresHeading}
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-14 max-w-[60ch]">{s.featuresSub}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {s.features.map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-3">
                <h3 className="text-[16px] font-bold text-ink">{title}</h3>
                <p className="text-[14px] text-ink/65 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section id="section-process" className="bg-paper py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">Our process</p>
          <h2 className="text-[clamp(26px,3vw,48px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3 max-w-[26ch]">
            {s.processHeading}
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-14 max-w-[60ch]">{s.processSub}</p>
          <div className="flex flex-col gap-8 max-w-[800px]">
            {s.process.map(({ num, title, body }) => (
              <div key={num} className="flex gap-6 items-start">
                <span className="text-[clamp(32px,2.5vw,44px)] font-black text-accent/25 leading-none shrink-0 w-16 text-right">
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

      {/* ── Compare ──────────────────────────────────────────────────────── */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">Why we are different</p>
          <h2 className="text-[clamp(26px,3vw,48px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3 max-w-[28ch]">
            {s.compareHeading}
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-12 max-w-[65ch]">{s.compareSub}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-ink">
                  <th className="text-left py-3 pr-6 font-bold text-ink text-[13px] w-[18%]">What matters</th>
                  <th className="text-left py-3 pr-6 font-bold text-ink/50 text-[13px] w-[41%]">{s.compareThemLabel}</th>
                  <th className="text-left py-3 font-bold text-ink text-[13px] w-[41%]">Digital Hall of Fame</th>
                </tr>
              </thead>
              <tbody>
                {s.compareRows.map(({ what, them, us }) => (
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

      {/* ── Pricing OR Proof ─────────────────────────────────────────────── */}
      {hasPricing ? (
        <section className="bg-paper py-20 md:py-28">
          <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">Transparent pricing</p>
            <h2 className="text-[clamp(26px,3vw,48px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-10 max-w-[28ch]">
              {s.pricingHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {s.pricingTiers!.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl border p-8 flex flex-col gap-4 ${
                    tier.highlighted ? "bg-ink text-paper border-ink" : "bg-off-white border-line"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">Most Popular</span>
                  )}
                  <h3 className={`text-[20px] font-black uppercase ${tier.highlighted ? "text-paper" : "text-ink"}`}>
                    {tier.name}
                  </h3>
                  <div className={`text-[clamp(24px,2.5vw,36px)] font-black leading-none ${tier.highlighted ? "text-accent" : "text-ink"}`}>
                    {tier.price}
                  </div>
                  <p className={`text-[13px] leading-snug ${tier.highlighted ? "text-white/55" : "text-ink/55"}`}>
                    {tier.sub}
                  </p>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-[13px] ${tier.highlighted ? "text-white/75" : "text-ink/70"}`}>
                        <span className={`mt-0.5 shrink-0 ${tier.highlighted ? "text-accent" : "text-accent"}`}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`${BASE}/contact/`}
                    className={`mt-4 inline-flex justify-center items-center px-6 py-3 rounded-full text-sm font-semibold no-underline transition-all ${
                      tier.highlighted
                        ? "bg-accent text-ink hover:bg-accent-dk"
                        : "bg-ink text-paper hover:bg-accent hover:text-ink"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
            {s.pricingNote && (
              <p className="text-[13px] text-ink/50 max-w-[65ch]">{s.pricingNote}</p>
            )}
          </div>
        </section>
      ) : null}

      {/* ── Proof / Case study ───────────────────────────────────────────── */}
      <section className={`py-20 md:py-24 ${hasPricing ? "bg-off-white" : "bg-paper"}`}>
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent mb-4">{s.proofTag}</p>
          <h2 className="text-[clamp(22px,2.5vw,36px)] font-black text-ink mb-4 max-w-[28ch]">{s.proofTitle}</h2>
          <p className="text-[15px] text-ink/65 leading-relaxed max-w-[65ch] mb-6">{s.proofBody}</p>
          {s.proofCta && s.proofHref && (
            <Link
              href={s.proofHref}
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-ink text-paper hover:bg-accent hover:text-ink transition-all no-underline"
            >
              {s.proofCta}
            </Link>
          )}
        </div>
      </section>

      {/* ── CTA band 1 (dark) ────────────────────────────────────────────── */}
      <CtaBand
        variant="ink"
        heading={s.cta1Heading}
        subheading={s.cta1Sub}
        primaryLabel={s.cta1Primary}
        primaryHref="/contact/"
        secondaryLabel={s.cta1Secondary}
        secondaryHref="/contact/"
      />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[860px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">FAQ</p>
          <h2 className="text-[clamp(26px,3vw,44px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-12 max-w-[28ch]">
            {s.faqHeading}
          </h2>
          <div className="flex flex-col divide-y divide-line">
            {s.faqs.map(({ q, a }) => (
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

      {/* ── Industry / Related grid ──────────────────────────────────────── */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute mb-4">
            {s.slug === "seo" || s.slug === "sem" ? "Industry specialisations" : "Related services"}
          </p>
          <h2 className="text-[clamp(26px,3vw,44px)] font-black uppercase tracking-[-0.02em] leading-[1.05] text-ink mb-3 max-w-[28ch]">
            {s.gridHeading}
          </h2>
          <p className="text-[clamp(15px,1.1vw,17px)] text-ink/60 mb-12 max-w-[65ch]">{s.gridSub}</p>
          <div className={`grid gap-4 ${s.gridCards.length > 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-3"}`}>
            {s.gridCards.map(({ num, title, desc, label, href }) => (
              <a
                key={num}
                href={href}
                className="flex flex-col gap-3 p-6 bg-paper rounded-xl border border-line hover:border-ink/30 transition-colors no-underline"
              >
                <span className="text-[11px] font-bold text-ink/30">{num}</span>
                <h3 className="text-[15px] font-bold text-ink leading-snug">{title}</h3>
                <p className="text-[13px] text-ink/60 leading-relaxed flex-1">{desc}</p>
                <span className="text-[13px] font-semibold text-ink mt-1">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA (accent yellow) ────────────────────────────────────── */}
      <CtaBand
        variant="accent"
        heading={s.finalCtaHeading}
        subheading={s.finalCtaSub}
        primaryLabel={s.finalCtaPrimary}
        primaryHref="/contact/"
        secondaryLabel="See All Services"
        secondaryHref="/our-services/"
      />
    </main>
  );
}
