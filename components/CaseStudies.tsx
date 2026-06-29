"use client";
import { useRef } from "react";
import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";

const cases = [
  {
    label: "SEO + Web Development",
    title: "BusinessMe.co.nz",
    desc: "Built and ranked NZ's business directory from zero to 5,000+ monthly users. We built it, optimised it, and keep it growing — our own flagship proof-of-concept.",
    href: "/case-studies/businessme/",
    stat: "5,000+ monthly users",
    tag: "Case Study",
  },
  {
    label: "Google Ads",
    title: "Placeholder — coming soon",
    desc: "New client results are being documented. Real numbers, real business, real growth. Check back at launch for the first live client case study.",
    href: "/case-studies/",
    stat: "In progress",
    tag: "Coming Soon",
  },
  {
    label: "Local SEO",
    title: "Placeholder — coming soon",
    desc: "NZ trade business ranking result. Strategy, execution, and documented growth from first audit to page-one placement.",
    href: "/case-studies/",
    stat: "In progress",
    tag: "Coming Soon",
  },
];

export default function CaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (!trackRef.current) return;
    const card = trackRef.current.firstElementChild as HTMLElement;
    if (!card) return;
    const step = card.offsetWidth + 20;
    trackRef.current.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section id="section-work" className="bg-off-white py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-mute block mb-3">Results</span>
            <h2 className="text-[clamp(34px,4.2vw,64px)] font-black uppercase tracking-[-0.02em] leading-none">
              Real Work. <span className="text-accent">Real Results.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("prev")}
              aria-label="Previous case study"
              className="w-12 h-12 rounded-full border border-line bg-paper flex items-center justify-center hover:bg-ink hover:border-ink hover:text-paper transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Next case study"
              className="w-12 h-12 rounded-full border border-line bg-paper flex items-center justify-center hover:bg-ink hover:border-ink hover:text-paper transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll track */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-4 scroll-snap-x [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
          style={{ scrollbarWidth: "none" }}
        >
          {cases.map(({ label, title, desc, href, stat, tag }) => (
            <Link
              key={title}
              href={`${BASE}${href}`}
              className="flex-shrink-0 snap-start flex flex-col gap-4 w-[clamp(280px,42vw,480px)] bg-paper border border-line rounded-2xl p-8 no-underline text-inherit transition-all hover:border-ink hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-ink-mute">{label}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-accent bg-ink px-2.5 py-1 rounded-full">{tag}</span>
              </div>
              <h3 className="text-[clamp(20px,2vw,28px)] font-black uppercase tracking-[-0.02em] leading-tight">{title}</h3>
              <p className="text-sm text-ink-mute leading-relaxed flex-1">{desc}</p>
              <div className="pt-4 border-t border-line flex items-center justify-between">
                <span className="text-2xl font-black text-ink">{stat}</span>
                <span className="text-sm font-semibold text-ink-mute group-hover:text-ink transition-colors">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
