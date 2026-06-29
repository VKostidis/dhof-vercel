"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  return (
    <>
      <a
        href="#main"
        className="absolute -left-[9999px] top-0 bg-ink text-paper px-4 py-3 z-[1000] focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-[60] transition-colors duration-200 ${
          scrolled
            ? "bg-ink border-b border-white/10"
            : "bg-white border-b border-line"
        }`}
      >
        <div className="flex items-center justify-between gap-6 py-4 px-[clamp(24px,3vw,56px)] max-w-[1600px] mx-auto">
          {/* Logo */}
          <Link href={`${BASE}/`} aria-label="Digital Hall of Fame — home" className="flex items-center h-[100px]">
            <Image
              src={`${BASE}/wp-content/themes/digital-hall-of-fame/assets/img/logo.webp`}
              alt="Digital Hall of Fame"
              width={160}
              height={48}
              className="h-[100px] w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            {/* Services dropdown */}
            <div
              className="relative flex items-center gap-1"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href={`${BASE}/our-services/`}
                className={`text-sm font-medium no-underline transition-colors ${scrolled ? "text-paper hover:text-white/70" : "text-ink hover:text-ink-mute"}`}
              >
                Services
              </Link>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="p-0.5 bg-transparent border-0 cursor-pointer"
                aria-expanded={dropdownOpen}
              >
                <svg
                  width="10" height="6" viewBox="0 0 10 6" fill="none"
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""} ${scrolled ? "stroke-paper" : "stroke-ink"}`}
                >
                  <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dropdown panel */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 bg-ink border-t-[3px] border-accent min-w-[300px] pt-4 pb-2 transition-all duration-200 z-50 ${dropdownOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1.5"}`}>
                <Link href={`${BASE}/our-services/sem/`} className="flex flex-col gap-0.5 px-5 py-3 no-underline hover:bg-white/[0.06]">
                  <span className="text-sm font-bold text-paper">Google Ads Management</span>
                  <span className="text-xs text-white/45">Buy customers at a profit from day one.</span>
                </Link>
                <Link href={`${BASE}/our-services/seo/`} className="flex flex-col gap-0.5 px-5 py-3 no-underline hover:bg-white/[0.06]">
                  <span className="text-sm font-bold text-paper">Local SEO</span>
                  <span className="text-xs text-white/45">Rank higher, get found, own your local market.</span>
                </Link>
                <Link href={`${BASE}/our-services/`} className="block px-4 py-3 text-xs font-semibold text-paper uppercase tracking-widest border-t border-white/[0.08] mt-1 no-underline hover:opacity-75">
                  All services →
                </Link>
              </div>
            </div>

            {["About", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`${BASE}/${item.toLowerCase()}/`}
                className={`text-sm font-medium no-underline transition-colors ${scrolled ? "text-paper hover:text-white/70" : "text-ink hover:text-ink-mute"}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href={`${BASE}/contact/`}
              className="hidden md:inline-flex items-center px-6 py-3.5 rounded-full text-sm font-semibold bg-ink text-paper border border-ink no-underline transition-all hover:bg-accent hover:text-ink hover:border-accent"
            >
              Book a Call
            </Link>
            <button
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 bg-transparent border-0 cursor-pointer text-ink"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
            >
              <span className={`block w-6 h-0.5 bg-current rounded transition-transform duration-200 ${drawerOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current rounded transition-opacity duration-200 ${drawerOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current rounded transition-transform duration-200 ${drawerOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 bg-paper z-40 flex flex-col gap-10 pt-36 px-6 pb-10 overflow-y-auto transition-transform duration-300 md:hidden ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!drawerOpen}
      >
        <nav className="flex flex-col gap-5" aria-label="Mobile">
          {["About", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={`${BASE}/${item.toLowerCase()}/`}
              onClick={() => setDrawerOpen(false)}
              className="text-[clamp(28px,7vw,44px)] font-black uppercase tracking-tight text-ink no-underline"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="border-t border-line pt-5 flex flex-col gap-4">
          <Link href={`${BASE}/our-services/`} className="text-xs font-bold uppercase tracking-widest text-accent no-underline">Services</Link>
          <div className="flex flex-col gap-4">
            {[["Google Ads Management", "/our-services/sem/"], ["Local SEO", "/our-services/seo/"], ["All Services →", "/our-services/"]].map(([label, href]) => (
              <Link
                key={href}
                href={`${BASE}${href}`}
                onClick={() => setDrawerOpen(false)}
                className="text-[clamp(20px,5vw,28px)] font-black uppercase tracking-tight text-ink no-underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <Link
          href={`${BASE}/contact/`}
          onClick={() => setDrawerOpen(false)}
          className="self-start inline-flex items-center px-6 py-3.5 rounded-full text-sm font-semibold bg-ink text-paper no-underline"
        >
          Book a Call
        </Link>
      </div>
    </>
  );
}
