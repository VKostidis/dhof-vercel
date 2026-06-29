import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";
const IMG = `${BASE}/wp-content/themes/digital-hall-of-fame/assets/img`;

const services = [
  ["Search Engine Optimisation", "/our-services/seo/"],
  ["Google Ads Management", "/our-services/sem/"],
  ["Web Development", "/our-services/web-development/"],
  ["Social Media Advertising", "/our-services/social-media/"],
  ["Video Production", "/our-services/video-production/"],
  ["AI Automation", "/our-services/ai-consultancy/"],
];

const company = [
  ["About Us", "/about/"],
  ["Our Services", "/our-services/"],
  ["Industries We Serve", "/industries-we-serve/"],
  ["Case Studies", "/case-studies/"],
  ["Blog", "/blog/"],
  ["Contact", "/contact/"],
];

const industries = [
  ["Mechanics", "/mechanic-marketing/"],
  ["Accountants", "/accountant-marketing/"],
  ["Arborists", "/arborist-marketing/"],
  ["Builders", "/builder-marketing/"],
  ["Dentists", "/dentist-marketing/"],
  ["Electricians", "/electrician-marketing/"],
  ["Plumbers", "/plumber-marketing/"],
  ["Solar Installers", "/solar-marketing/"],
  ["Orthodontists", "/orthodontist-marketing/"],
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-white/[0.08]">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)] pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand col */}
          <div className="flex flex-col gap-5">
            <Link href={`${BASE}/`} aria-label="Digital Hall of Fame — home" className="inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/logo.webp`}
                alt="Digital Hall of Fame"
                style={{ height: 80, width: "auto", display: "block" }}
              />
            </Link>
            <p className="text-sm text-white/55 leading-relaxed max-w-[32ch]">
              A digital consulting firm built for established NZ businesses ready to win online. Not an agency — a growth partner.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/digital-hall-of-fame", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                { label: "Facebook", href: "https://www.facebook.com/digitalhalloffame", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Instagram", href: "https://www.instagram.com/digitalhalloffame", d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" },
              ].map(({ label, href, d }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {d.split(" M").map((seg, i) => (
                      <path key={i} d={i === 0 ? seg : `M${seg}`} />
                    ))}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-white/40 mb-4">Services</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {services.map(([label, href]) => (
                <li key={href}>
                  <Link href={`${BASE}${href}`} className="text-sm text-white/65 no-underline hover:text-paper transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-white/40 mb-4">Company</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {company.map(([label, href]) => (
                <li key={href}>
                  <Link href={`${BASE}${href}`} className="text-sm text-white/65 no-underline hover:text-paper transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries col */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-white/40 mb-4">Industries</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {industries.map(([label, href]) => (
                <li key={href}>
                  <Link href={`${BASE}${href}`} className="text-sm text-white/65 no-underline hover:text-paper transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/35">
          <span>© {new Date().getFullYear()} Digital Hall of Fame Ltd. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href={`${BASE}/privacy-policy/`} className="text-white/35 no-underline hover:text-paper transition-colors">Privacy Policy</Link>
            <Link href={`${BASE}/terms-of-service/`} className="text-white/35 no-underline hover:text-paper transition-colors">Terms of Service</Link>
            <Link href={`${BASE}/cookie-policy/`} className="text-white/35 no-underline hover:text-paper transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
