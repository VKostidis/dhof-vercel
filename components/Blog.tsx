import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";

const posts = [
  {
    cat: "Actionable Tips",
    title: "Why Your Google Ads Are Burning Money (And How to Stop It)",
    excerpt: "Running Google Ads without the right foundation is just paying Google to feel busy. Here is what we fix first.",
    href: "/blog/",
    date: "Coming soon",
  },
  {
    cat: "SEO",
    title: "Local SEO for NZ Trades: The 2025 Playbook That Actually Ranks",
    excerpt: "Plumbers, electricians, and mechanics: your local search game has the same five holes in it. Here is how to plug them.",
    href: "/blog/",
    date: "Coming soon",
  },
  {
    cat: "AI & Automation",
    title: "The AI Tools That Are Actually Worth Using in 2025 (Tested in Real Campaigns)",
    excerpt: "We run AI inside live client campaigns every day. Here are the tools that moved the needle and the ones that wasted our time.",
    href: "/blog/",
    date: "Coming soon",
  },
];

export default function Blog() {
  return (
    <section id="section-insights" className="bg-paper py-12 md:py-20 lg:py-24 border-t border-line">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-mute block mb-3">From the team</span>
            <h2 className="text-[clamp(34px,4.2vw,64px)] font-black uppercase tracking-[-0.02em] leading-none">
              No-Fluff <span className="text-accent">Insights</span>
            </h2>
          </div>
          <Link
            href={`${BASE}/blog/`}
            className="text-sm font-semibold text-ink-mute no-underline hover:text-ink transition-colors whitespace-nowrap self-start md:self-auto"
          >
            View all posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(({ cat, title, excerpt, href, date }) => (
            <Link
              key={title}
              href={`${BASE}${href}`}
              className="flex flex-col gap-3 no-underline text-inherit group"
            >
              <div className="aspect-[16/9] bg-off-white rounded-xl overflow-hidden flex items-center justify-center border border-line">
                <span className="text-[clamp(28px,3vw,40px)] font-black uppercase text-ink/10">DHOF</span>
              </div>
              <div className="flex items-center justify-between gap-2 mt-1">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">{cat}</span>
                <span className="text-xs text-ink-mute">{date}</span>
              </div>
              <h3 className="text-base font-black uppercase tracking-[-0.01em] leading-snug group-hover:text-accent transition-colors">{title}</h3>
              <p className="text-sm text-ink-mute leading-relaxed flex-1">{excerpt}</p>
              <span className="text-sm font-semibold text-ink group-hover:text-accent transition-colors mt-1">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
