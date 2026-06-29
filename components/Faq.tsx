const faqs = [
  {
    q: "What makes Digital Hall of Fame different from other NZ digital marketing agencies?",
    a: "Most NZ agencies pitch senior strategists and deliver junior execution. We run lean, high-skill, and every client gets real attention from people who have been doing this since 2015. We also built and operate BusinessMe.co.nz ourselves — a live asset with real traffic — which means our strategies come from genuine experience, not theory.",
  },
  {
    q: "How quickly can we expect to see results?",
    a: "For Google Ads campaigns, we target live within 7 days, with meaningful data within 30. For SEO, credible movement typically starts showing within 90 days and compounds significantly by month six. We set real expectations in the strategy call because overselling timelines is how agencies destroy relationships.",
  },
  {
    q: "Do you work with businesses outside New Zealand?",
    a: "Yes. While our roots and many clients are NZ-based, our team operates digitally and we serve clients in Australia and internationally. The strategies are the same; we adjust for market-specific search behaviour, ad platforms, and audience nuances.",
  },
  {
    q: "What does 'no pricing on the site' mean? Are you expensive?",
    a: "We don't post pricing because every engagement is scoped to your business. We don't want someone to rule us out before they've understood what the return could be, and we don't want to undersell what we actually deliver. We talk pricing in the strategy call, openly. No ambush invoices.",
  },
  {
    q: "What is the 'Website That Wins' subscription model?",
    a: "A fully managed website on a predictable monthly fee. Covers hosting, security, software updates, performance monitoring, minor content updates, and ongoing consultancy. No massive upfront build cost. If the subscription ends, the site is no longer active under that agreement. It's designed for businesses that want a revenue-generating web presence without a capital expenditure.",
  },
  {
    q: "Is there a minimum contract term?",
    a: "We'll cover terms in the strategy call based on the engagement. We don't believe in punitive lock-in clauses. Our position: if we're doing the job, you won't want to leave.",
  },
];

export default function Faq() {
  return (
    <section id="section-faq" className="py-12 md:py-20 lg:py-24">
      <div className="max-w-[860px] mx-auto px-[clamp(24px,5vw,100px)]">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-mute">FAQ</span>
          <h2 className="text-[clamp(34px,4.2vw,64px)] font-black uppercase tracking-[-0.02em] leading-none max-w-[22ch]">
            Questions We Actually Get Asked
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-line">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none text-left">
                <span className="text-base md:text-[18px] font-bold leading-snug">{q}</span>
                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </summary>
              <p className="mt-4 text-base text-ink-mute leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
