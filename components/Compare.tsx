const rows = [
  { label: "Reporting", bad: "Monthly PDF, lots of graphs, unclear ROI", good: "Revenue-tied reporting. Every metric tied to a real outcome." },
  { label: "Agreements", bad: "Punitive lock-ins, exit penalties, auto-renewing clauses", good: "Clear, fair terms. You know exactly what you are signing before you sign it." },
  { label: "Team", bad: "Senior pitch, junior execution. Your account rotates.", good: "50+ collective years across the team. Senior-led, every client." },
  { label: "Strategy", bad: "Off-the-shelf package matched to your budget", good: "Forensic audit first. Custom attack plan. Nothing pre-packaged." },
  { label: "Tools", bad: "Free tools, agency reseller accounts, whatever saves margin", good: "Ahrefs, SEMrush, Screaming Frog. Named, proven, non-negotiable." },
  { label: "Proof", bad: "Client logos they cannot talk about. Vague results.", good: "Live case studies. We built BusinessMe.co.nz ourselves. 5,000+ users/month." },
  { label: "Honesty", bad: '"We\'re confident we can hit those numbers." (We\'ll see.)', good: "If we cannot deliver a real return for your business, we will tell you before you spend a dollar." },
];

export default function Compare() {
  return (
    <section id="section-compare" className="bg-off-white py-12 md:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
        <div className="flex flex-col items-center text-center gap-3 mb-8 max-w-[760px] mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-mute">Honest comparison</span>
          <h2 className="text-[clamp(34px,4.2vw,64px)] font-black uppercase tracking-[-0.02em] leading-none max-w-[22ch]">
            Why Do Businesses Choose Us Over Other Agencies?
          </h2>
          <p className="text-[clamp(17px,1.3vw,20px)] text-ink-mute max-w-[60ch] leading-[1.55]">We will let the comparison speak for itself.</p>
        </div>

        <div className="flex justify-end mb-6">
          <span className="font-[cursive] italic text-[clamp(13px,1.1vw,16px)] text-ink -rotate-[2deg] inline-block">
            Most clients switch after seeing this ↗
          </span>
        </div>

        <div className="overflow-x-auto mt-8">
          <table className="w-full border-collapse text-base">
            <thead>
              <tr>
                <th className="text-left p-4 text-xs font-bold uppercase tracking-[0.08em] text-ink border-b-2 border-ink">What matters</th>
                <th className="text-left p-4 text-xs font-bold uppercase tracking-[0.08em] text-ink border-b-2 border-ink hidden md:table-cell">Typical NZ agency</th>
                <th className="text-left p-4 text-xs font-bold uppercase tracking-[0.08em] text-accent bg-ink border-b-2 border-ink">Digital Hall of Fame</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ label, bad, good }) => (
                <tr key={label} className="hover:bg-white/60 transition-colors">
                  <td className="p-4 font-semibold text-ink border-b border-line whitespace-nowrap align-top">{label}</td>
                  <td className="p-4 text-ink-mute border-b border-line align-top hidden md:table-cell">
                    <span className="text-ink/30 font-bold mr-1.5">×</span>{bad}
                  </td>
                  <td className="p-4 font-medium text-ink border-b border-line align-top">
                    <span className="text-accent font-black mr-1.5">✓</span>{good}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
