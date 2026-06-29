export default function Manifesto() {
  return (
    <section id="section-manifesto" className="bg-accent py-24 text-center" aria-label="Brand statement">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
        <p className="text-[clamp(28px,4vw,56px)] font-black uppercase tracking-[-0.02em] leading-[1.1] text-ink max-w-[860px] mx-auto">
          We have been winning online since 2015. Not hypothetically. Not on demo accounts. Actually
          winning, for real businesses, with real money on the line.
        </p>
        <p className="mt-5 text-base font-semibold italic text-ink/65 tracking-wide">
          &mdash; The DHOF team. Battle-tested since 2015.
        </p>
        <p className="mt-6 text-[clamp(18px,1.5vw,22px)] font-black uppercase tracking-[-0.02em] text-ink">
          Results or death. No other outcome is acceptable.
        </p>
      </div>
    </section>
  );
}
