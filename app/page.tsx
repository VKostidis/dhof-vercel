import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TrustedBy from "@/components/TrustedBy";
import Stats from "@/components/Stats";
import QuickAnswer from "@/components/QuickAnswer";
import WhyDhof from "@/components/WhyDhof";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Compare from "@/components/Compare";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import NotForEveryone from "@/components/NotForEveryone";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Digital Hall of Fame — Not an Agency. A Digital Growth Partner That Actually Delivers.",
  description:
    "NZ digital marketing agency built for established businesses tired of agencies that over-promise and under-deliver. SEO, Google Ads, Web Dev, AI. Battle-tested since 2015.",
  alternates: {
    canonical: "https://www.digitalhalloffame.com/",
  },
  openGraph: {
    title: "Digital Hall of Fame — Not an Agency. A Digital Growth Partner That Actually Delivers.",
    description:
      "Battle-tested NZ digital marketing agency. SEO, Google Ads, Web Dev, AI Consultancy. Real results since 2015.",
    url: "https://www.digitalhalloffame.com/",
    images: [
      {
        url: "https://www.digitalhalloffame.com/wp-content/themes/digital-hall-of-fame/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Hall of Fame",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.digitalhalloffame.com/#organization",
      name: "Digital Hall of Fame",
      url: "https://www.digitalhalloffame.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.digitalhalloffame.com/wp-content/themes/digital-hall-of-fame/assets/img/logo.webp",
      },
      description:
        "A digital consulting firm built for established NZ businesses ready to dominate online. SEO, Google Ads, Web Development, Social Media, Video Production, and AI Consultancy.",
      foundingDate: "2015",
      areaServed: ["NZ", "AU", "Worldwide"],
      sameAs: [
        "https://www.linkedin.com/company/digital-hall-of-fame",
        "https://www.facebook.com/digitalhalloffame",
        "https://www.instagram.com/digitalhalloffame",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.digitalhalloffame.com/#website",
      url: "https://www.digitalhalloffame.com",
      name: "Digital Hall of Fame",
      publisher: { "@id": "https://www.digitalhalloffame.com/#organization" },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        <Hero />
        <Marquee />
        <TrustedBy />
        <Stats />
        <QuickAnswer />
        <WhyDhof />
        <Manifesto />
        <Services />
        <Compare />
        <Industries />
        <Process />
        <CaseStudies />
        <NotForEveryone />
        <CtaBand />
        <Faq />
        <Blog />
      </main>
    </>
  );
}
