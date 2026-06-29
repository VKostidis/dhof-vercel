"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";
const LOGO = `${BASE}/wp-content/themes/digital-hall-of-fame/assets/img/logo.webp`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const linkCls = scrolled
    ? "text-white/80 hover:text-white"
    : "text-ink hover:text-ink-mute";

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:bg-accent focus:text-ink focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-[60] transition-colors duration-200 ${
          scrolled ? "bg-ink border-b border-white/10" : "bg-paper border-b border-line"
        }`}
      >
        <div
          className="flex items-center justify-between gap-6"
          style={{ paddingInline: "clamp(24px, 3vw, 56px)", maxWidth: 1600, margin: "0 auto" }}
        >
          {/* Logo — plain img avoids next/image height-class conflicts */}
          <Link href={`${BASE}/`} aria-label="Digital Hall of Fame — home" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO}
              alt="Digital Hall of Fame"
              style={{ height: 100, width: "auto", display: "block" }}
              fetchPriority="high"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  href={`${BASE}/our-services/`}
                  className={`text-[15px] font-medium no-underline whitespace-nowrap transition-colors ${linkCls}`}
                >
                  Services
                </Link>
                <button
                  onClick={() => setDropOpen((v) => !v)}
                  className="p-0.5 bg-transparent border-0 cursor-pointer flex items-center"
                  aria-expanded={dropOpen}
                >
                  <svg
                    width="10" height="6" viewBox="0 0 10 6" fill="none"
                    className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""} ${scrolled ? "stroke-white" : "stroke-ink"}`}
                    aria-hidden="true"
                  >
                    <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-ink border-t-[3px] border-accent min-w-[280px] z-50 transition-all duration-150 shadow-lg ${
                  dropOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
                }`}
              >
                <Link href={`${BASE}/our-services/sem/`} className="flex flex-col gap-0.5 px-5 py-3.5 no-underline hover:bg-white/[0.07]">
                  <span className="text-sm font-bold text-paper">Google Ads Management</span>
                  <span className="text-xs text-white/45">Buy customers at a profit from day one.</span>
                </Link>
                <Link href={`${BASE}/our-services/seo/`} className="flex flex-col gap-0.5 px-5 py-3.5 no-underline hover:bg-white/[0.07]">
                  <span className="text-sm font-bold text-paper">Local SEO</span>
                  <span className="text-xs text-white/45">Rank higher, get found, own your local market.</span>
                </Link>
                <Link href={`${BASE}/our-services/`} className="block px-5 py-3 text-xs font-semibold text-paper uppercase tracking-widest border-t border-white/[0.08] no-underline hover:opacity-75">
                  All services →
                </Link>
              </div>
            </div>

            {(["About", "Blog", "Contact"] as const).map((label) => (
              <Link
                key={label}
                href={`${BASE}/${label.toLowerCase()}/`}
                className={`text-[15px] font-medium no-underline whitespace-nowrap transition-colors ${linkCls}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href={`${BASE}/contact/`}
              className={`hidden md:inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap no-underline transition-all border ${
                scrolled
                  ? "bg-accent text-ink border-accent hover:bg-accent-dk hover:border-accent-dk"
                  : "bg-ink text-paper border-ink hover:bg-accent hover:text-ink hover:border-accent"
              }`}
            >
              Book a Call
            </Link>

            {/* Hamburger */}
            <button
              className={`md:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 bg-transparent border-0 cursor-pointer ${scrolled ? "text-paper" : "text-ink"}`}
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
            >
              <span className={`block w-6 h-0.5 bg-current rounded transition-all duration-200 origin-center ${drawerOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current rounded transition-opacity duration-200 ${drawerOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current rounded transition-all duration-200 origin-center ${drawerOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 bg-paper z-40 flex flex-col pt-[120px] px-7 pb-10 overflow-y-auto transition-transform duration-300 md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!drawerOpen}
      >
        <nav className="flex flex-col gap-4" aria-label="Mobile primary">
          {(["About", "Blog", "Contact"] as const).map((label) => (
            <Link
              key={label}
              href={`${BASE}/${label.toLowerCase()}/`}
              onClick={() => setDrawerOpen(false)}
              className="text-[clamp(32px,8vw,48px)] font-black uppercase tracking-tight text-ink no-underline leading-tight hover:text-accent transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-line mt-8 pt-8 flex flex-col gap-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent mb-1">Services</span>
          {[
            ["Google Ads Management", "/our-services/sem/"],
            ["Local SEO", "/our-services/seo/"],
            ["All Services →", "/our-services/"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={`${BASE}${href}`}
              onClick={() => setDrawerOpen(false)}
              className="text-[clamp(22px,5vw,32px)] font-black uppercase tracking-tight text-ink no-underline leading-tight hover:text-accent transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href={`${BASE}/contact/`}
          onClick={() => setDrawerOpen(false)}
          className="mt-10 self-start inline-flex items-center px-6 py-3.5 rounded-full text-sm font-semibold bg-ink text-paper no-underline whitespace-nowrap hover:bg-accent hover:text-ink transition-all"
        >
          Book a Call
        </Link>
      </div>
    </>
  );
}
