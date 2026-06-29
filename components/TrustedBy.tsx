import Image from "next/image";

const BASE = "https://www.digitalhalloffame.com";
const IMG = `${BASE}/wp-content/themes/digital-hall-of-fame/assets/img/clients`;

const clients = [
  { name: "BusinessMe", file: "businessme.webp", href: "https://businessme.co.nz", invert: false, sm: false },
  { name: "Investment Pro", file: "investment-pro.png", href: "https://investorpro.co.nz", invert: true, sm: false },
  { name: "Shamrock", file: "shamrock.webp", href: "https://shamrock.co.nz", invert: false, sm: false },
  { name: "Asgard Investments", file: "asgard-investments.webp", href: "https://asgardinvestments.co.nz", invert: false, sm: false },
  { name: "Kiwi Clean Home", file: "kiwi-clean-home.webp", href: "https://kiwicleanhome.co.nz", invert: false, sm: false },
  { name: "First Contact", file: "first-contact.png", href: "https://firstcontact.net.nz", invert: false, sm: true },
  { name: "Marvel Experiences", file: "marvel-experiences.webp", href: "https://marvelexperiences.co.nz", invert: true, sm: true },
];

export default function TrustedBy() {
  return (
    <section id="section-trusted" className="bg-paper border-t border-b border-line py-8">
      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)] flex flex-col items-center gap-5 text-center">
        <div className="flex flex-row justify-between items-center w-full">
          <span className="text-[clamp(20px,2vw,28px)] font-black leading-tight text-ink">
            Businesses we have helped grow online
          </span>
          <a
            href={`${BASE}/case-studies/`}
            className="text-sm font-semibold text-ink-mute no-underline hover:text-ink transition-colors whitespace-nowrap"
          >
            See all case studies →
          </a>
        </div>

        <div className="mt-8 w-full flex flex-wrap gap-x-[clamp(28px,4vw,64px)] gap-y-6 items-center justify-center">
          {clients.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener"
              aria-label={c.name}
              className={`flex-shrink-0 flex items-center justify-center h-[100px] transition-all hover:-translate-y-0.5 ${c.invert ? "[filter:invert(1)_grayscale(1)_contrast(1.05)] hover:[filter:invert(1)_grayscale(0)_contrast(1)]" : ""}`}
            >
              <Image
                src={`${IMG}/${c.file}`}
                alt={c.name}
                width={240}
                height={c.sm ? 56 : 90}
                className={`object-contain w-auto ${c.sm ? "max-h-14" : "max-h-[90px]"}`}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
