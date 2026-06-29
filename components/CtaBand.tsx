import Link from "next/link";

const BASE = "https://www.digitalhalloffame.com";

interface CtaBandProps {
  variant?: "ink" | "accent";
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaBand({
  variant = "ink",
  heading = "Ready to Join the Digital Hall of Fame?",
  subheading = "Book a no-obligation strategy call. We'll tell you exactly where your digital presence is bleeding money and what we'd do about it.",
  primaryLabel = "Book Your Free Strategy Call",
  primaryHref = "/contact/",
  secondaryLabel = "View Our Services",
  secondaryHref = "/our-services/",
}: CtaBandProps) {
  const isAccent = variant === "accent";

  return (
    <section
      id="section-cta"
      className={`py-20 md:py-24 text-center ${isAccent ? "bg-accent" : "bg-ink"}`}
    >
      <div className="max-w-[900px] mx-auto px-[clamp(24px,5vw,100px)]">
        <h2
          className={`text-[clamp(32px,4vw,60px)] font-black uppercase tracking-[-0.02em] leading-[1.05] mb-4 ${
            isAccent ? "text-ink" : "text-paper"
          }`}
        >
          {heading}
        </h2>
        <p
          className={`text-[clamp(17px,1.3vw,20px)] leading-[1.55] mb-8 max-w-[60ch] mx-auto ${
            isAccent ? "text-ink/75" : "text-white/75"
          }`}
        >
          {subheading}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={`${BASE}${primaryHref}`}
            className={`inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold no-underline transition-all ${
              isAccent
                ? "bg-ink text-paper border border-ink hover:bg-ink/90"
                : "bg-accent text-ink border border-accent hover:bg-accent-dk hover:border-accent-dk"
            }`}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <Link
              href={`${BASE}${secondaryHref}`}
              className={`inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold no-underline transition-all border ${
                isAccent
                  ? "border-ink/30 text-ink/80 hover:border-ink hover:text-ink"
                  : "border-white/30 text-paper/80 hover:border-paper hover:text-paper"
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
