import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Newsletter from "@/components/Newsletter";
import { articles, pillarByKey } from "@/data/site";

const pillar = pillarByKey("future");

export const metadata: Metadata = {
  title: "Building My Future",
  description: pillar.description,
};

export default function FuturePage() {
  const essay = articles.find((a) => a.slug === "the-48hr-shot-clock");

  return (
    <>
      <PageHero
        variant="future"
        number={pillar.number}
        label={pillar.tagline}
        title={<>Building<br />My Future.</>}
        lede={
          <p>
            I want freedom. Not because I hate work.
            <br />
            <span className="ink">Because I love life.</span>
          </p>
        }
      />

      {essay && (
        <section className="section" aria-labelledby="future-essay">
          <div className="container">
            <SectionHead label="Where it starts" />
            <Link href={`/writing/${essay.slug}`} className="feature-essay reveal">
              <span className="feature-essay__clock meta" aria-hidden="true">48:00:00</span>
              <h2 id="future-essay" className="feature-essay__title">{essay.title}</h2>
              <p className="feature-essay__excerpt">{essay.excerpt}</p>
              <p className="meta feature-essay__status">
                <span className="dot" aria-hidden="true" /> Read the essay
              </p>
            </Link>
          </div>
        </section>
      )}

      <Newsletter />
    </>
  );
}
