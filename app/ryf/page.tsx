import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { worlds } from "@/data/site";

const ryf = worlds.find((w) => w.key === "ryf")!;

export const metadata: Metadata = {
  title: "Remember Your Future",
  description: ryf.line,
};

export default function RYFPage() {
  return (
    <>
      <PageHero
        label="Podcast · YouTube"
        title={
          <>
            Remember
            <br />
            Your Future<span className="accent">.</span>
          </>
        }
        lede={<p>{ryf.line}</p>}
      >
        <div className="ryf-hero__mark">
          <img src={ryf.logo} alt={ryf.logoAlt} width={1200} height={1200} />
        </div>
        <div className="ryf-hero__actions">
          {ryf.url ? (
            <a href={ryf.url} className="btn btn--solid" target="_blank" rel="noopener">
              {ryf.urlLabel} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <p className="meta ryf-hero__soon">
              <span className="dot" aria-hidden="true" /> YouTube channel coming soon
            </p>
          )}
        </div>
      </PageHero>

      <section className="section section--tight ryf-about" aria-labelledby="ryf-about-title">
        <div className="container ryf-about__grid">
          <SectionHead
            label="What this is"
            id="ryf-about-title"
            title={
              <>
                Love who you are
                <br />
                <span className="dim">while you become.</span>
              </>
            }
          />
          <div className="ryf-about__copy reveal">
            <p>
              I know what it feels like to see a future for yourself and keep getting pulled
              back into the old way of living. Recovery is part of my story, and it always
              will be.
            </p>
            <p>
              Each episode starts with a real moment from my journal: what I believed then,
              what happened next, and what I understand differently now. Then one thing you
              can actually try.
            </p>
            <p>
              I haven&rsquo;t arrived. I&rsquo;m arriving, and you can watch it happen.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="ryf-episodes-title">
        <div className="container">
          <SectionHead label="Episodes" id="ryf-episodes-title" title="Coming soon." />
          <p className="ryf-placeholder reveal">
            Episodes will live here once the channel is up.
          </p>
          <p className="ryf-more">
            Want the films and the mythology behind it?{" "}
            <Link href="/things/awakened-creators">Enter the Awakened Creators Universe →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
