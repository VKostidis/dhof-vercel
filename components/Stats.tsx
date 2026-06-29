const stats = [
  { num: "12+", label: "Years in the digital trenches" },
  { num: "50+", label: "Collective years of expertise across the team" },
  { num: "5,000+", label: "Monthly users on our own digital property" },
  { num: "6", label: "Battle-tested services, one obsession: your ROI" },
];

export default function Stats() {
  return (
    <section id="section-stats" className="bg-ink py-24 border-t border-b border-white/[0.08]">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 mb-5">
        The numbers don&apos;t lie
      </p>
      <div className="flex justify-end px-[clamp(24px,5vw,100px)] mb-3">
        <span className="font-[cursive] text-[clamp(13px,1.1vw,16px)] text-ink rotate-[-2deg] inline-block text-ink-mute italic">
          Battle-tested since day one ↙
        </span>
      </div>
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map(({ num, label }) => (
          <div key={num} className="flex flex-col gap-1">
            <span className="text-[clamp(36px,4vw,56px)] font-black text-accent leading-none">{num}</span>
            <span className="text-sm text-white/60 leading-snug max-w-[20ch] mx-auto">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
