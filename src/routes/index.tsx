import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { I18nProvider, useI18n } from "@/i18n";
import { SECTIONS, scrollToSection } from "@/lib/brand";
import { Navbar } from "@/components/Navbar";
import { CinematicScrollHero } from "@/components/CinematicScrollHero";
import { ArtOfChocolate } from "@/components/ArtOfChocolate";
import { Collections } from "@/components/Collections";
import { TextureSection } from "@/components/TextureSection";
import { Atelier } from "@/components/Atelier";
import { Craftsmanship } from "@/components/Craftsmanship";
import { Masterclasses } from "@/components/Masterclasses";
import { BespokeCreations } from "@/components/BespokeCreations";
import { Gifting } from "@/components/Gifting";
import { Journal } from "@/components/Journal";
import { InstagramGallery } from "@/components/InstagramGallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CustomCursor } from "@/components/CustomCursor";

const Chocolate3D = lazy(() =>
  import("@/components/Chocolate3D").then((m) => ({ default: m.Chocolate3D })),
);

const TITLE = "FRUZZI — Endorfine by FRUZZI | Chocolate Atelier";
const DESCRIPTION =
  "Discover handcrafted chocolate creations, confectionery experiences, gifting and masterclasses by Endorfine by FRUZZI in Karaganda, Kazakhstan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://fruzzi.lovable.app/" }],
  }),
  component: Index,
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FRUZZI",
  alternateName: "Endorfine by FRUZZI",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karaganda",
    addressCountry: "KZ",
  },
  sameAs: ["https://www.instagram.com/fruzzikz/", "https://wa.me/77015285601"],
};

function Index() {
  return (
    <I18nProvider>
      <HomePage />
    </I18nProvider>
  );
}

function HomePage() {
  const { language } = useI18n();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <CustomCursor />
      <Navbar />

      <main>
        <CinematicScrollHero
          language={language}
          frameCount={147}
          framesBasePath="/hero-frames"
          scrollLength={300}
        />

        <ArtOfChocolate />
        <Collections />
        <TextureSection />
        <Atelier />
        <Craftsmanship />
        <Masterclasses />
        <BespokeCreations />

        <Suspense fallback={<div className="min-h-[40svh]" />}>
          <Chocolate3D />
        </Suspense>

        <Gifting />
        <Journal />
        <InstagramGallery />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
