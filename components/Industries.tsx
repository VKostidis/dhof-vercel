import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";

const industries = [
  { name: "Mechanics", slug: "mechanic" },
  { name: "Accountants", slug: "accountant" },
  { name: "Arborists", slug: "arborist" },
  { name: "Builders", slug: "builder" },
  { name: "Cosmetic Clinics", slug: "cosmetic-clinic" },
  { name: "Mortgage Brokers", slug: "mortgage-broker" },
  { name: "Lawyers", slug: "lawyer" },
  { name: "Dentists", slug: "dentist" },
  { name: "Solar Installers", slug: "solar" },
  { name: "Electricians", slug: "electrician" },
  { name: "Plumbers", slug: "plumber" },
  { name: "Heat Pump Installers", slug: "heat-pump-installer" },
  { name: "Orthodontists", slug: "orthodontist" },
  { name: "Immigration Advisors", slug: "immigration-advisor" },
];

export default function Industries() {
  return (
    <section id="section-industries" className="bg-off-white py-12 md:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)]">
        <div className="flex flex-col items-center text-center gap-3 mb-12 max-w-[760px] mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-mute">Industries we serve</span>
          <h2 className="text-[clamp(34px,4.2vw,64px)] font-black uppercase tracking-[-0.02em] leading-none max-w-[22ch]">
            We Know Your Industry. <span className="relative inline-block">We&apos;ve Probably Already<br />
            <span className="bg-accent px-1">Won in It.</span></span>
          </h2>
          <p className="text-[clamp(17px,1.3vw,20px)] text-ink-mute max-w-[60ch] leading-[1.55]">
            Generic digital marketing is dead. We specialise deep into the industries we serve so our strategies arrive battle-tested, not built from scratch.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {industries.map(({ name, slug }) => (
            <Link
              key={slug}
              href={`${BASE}/${slug}-marketing/`}
              className="flex items-center justify-between gap-2 px-4 py-4 bg-paper border border-line rounded-lg text-sm font-semibold text-ink no-underline transition-all hover:border-ink hover:-translate-y-0.5 group"
            >
              <span>{name}</span>
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="text-ink-mute flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`${BASE}/industries-we-serve/`}
            className="text-sm font-semibold text-ink-mute no-underline hover:text-ink transition-colors"
          >
            View all industries →
          </Link>
        </div>
      </div>
    </section>
  );
}
