import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

const BASE = "https://www.digitalhalloffame.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book your free 30-minute strategy call. We'll review your digital setup, tell you what we'd attack first, and be honest if we're not the right fit.",
  alternates: { canonical: `${BASE}/contact/` },
};

const checks = [
  "No obligation — we will tell you honestly if we are not the right fit",
  "Google Ads from $600/mo · Local SEO from $1,500/mo",
  "Month to month, no lock-in contracts",
  "Full transparency on every dollar spent",
  "Direct access — you deal with the person doing the work",
  "We respond within one business day",
];

const revenueOptions = ["$0 – $10k", "$10k – $30k", "$30k – $80k", "$80k+"];
const spendOptions = ["Yes, ready to go", "Not yet, but open to it"];

export default function ContactPage() {
  return (
    <>
      <main id="main">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="bg-ink min-h-[calc(100vh-100px)] max-h-[1100px] flex items-center relative overflow-hidden hero-glow">
          <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,100px)] py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            {/* Left */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent mb-5">
                Free 30-minute strategy call
              </p>
              <h1 className="text-[clamp(40px,5vw,72px)] font-black uppercase tracking-[-0.02em] leading-[1.0] text-paper mb-6">
                Let&rsquo;s See<br />If We&rsquo;re the<br />Right Fit.
              </h1>
              <p className="text-[clamp(16px,1.2vw,18px)] text-white/65 leading-relaxed mb-8 max-w-[52ch]">
                All we need is 30 minutes. We will review your current digital setup, tell you exactly what we would attack first. If we are not the right partner for your business, we will tell you that too.
              </p>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {checks.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Form card */}
            <div className="bg-paper rounded-2xl p-8 md:p-10 shadow-none border border-white/[0.08]">
              <h2 className="text-[22px] font-black uppercase tracking-[-0.01em] text-ink text-center mb-6">
                Book Your Free 30-Minute Audit
              </h2>
              <form
                action={`${BASE}/contact/`}
                method="POST"
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-ink/70">
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First name"
                      className="w-full border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-ink/70">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@yourbusiness.co.nz"
                      className="w-full border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-ink/70">
                      Business name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your business"
                      className="w-full border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-ink/70">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Your phone number"
                      className="w-full border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-ink/70">
                      Monthly revenue <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full border border-line rounded-lg px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:border-ink/50 transition-colors appearance-none"
                    >
                      <option value="">— Please choose —</option>
                      {revenueOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-ink/70 leading-tight">
                      Comfortable spending $30–$100/day on ads? <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full border border-line rounded-lg px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:border-ink/50 transition-colors appearance-none"
                    >
                      <option value="">— Please choose —</option>
                      {spendOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full bg-accent text-ink font-bold text-sm rounded-full py-4 hover:bg-accent-dk transition-colors"
                >
                  Book My Free 30-Minute Audit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
