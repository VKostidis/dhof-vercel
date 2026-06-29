const items = [
  "No Fluff", "Battle-Tested Since 2015", "The AI Advantage", "Brutal Honesty Always",
  "Digital Hall of Fame", "No Filler", "Results Obsessed", "Your Unfair Edge",
  "Partners in Crime", "NZ & Worldwide",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="group bg-accent overflow-hidden py-3 border-t-2 border-b-2 border-ink" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-4 font-black text-[clamp(13px,1.1vw,15px)] uppercase tracking-[0.08em] text-ink whitespace-nowrap">
            {item}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
