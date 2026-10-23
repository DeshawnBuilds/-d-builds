import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Newsletter from "@/components/Newsletter";
import { pillars, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "I'm Deshawn. Creator. Builder. Student.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label={`About / ${site.location}`}
        title={<>I&rsquo;m<br />Deshawn<span className="accent">.</span></>}
      >
        <figure className="about-portrait">
          <img
            src="/deshawn.webp"
            alt="Deshawn looking upward, backlit in warm gold light"
            width={1000}
            height={1333}
          />
        </figure>
        <p className="about-roles">
          {site.roles.map((r) => (
            <span key={r}>{r}.</span>
          ))}
        </p>
      </PageHero>

      <section className="section" aria-label="Why D BUILDS exists">
        <div className="container about-idea">
          <p className="meta reveal">The idea</p>
          <div className="about-idea__text reveal">
            <p className="about-idea__lead">
              I spent years imagining things I wanted to create while wondering whether
              I&rsquo;d waited too long to become the person capable of creating them.
            </p>
            <p className="about-idea__lead ink">
              D BUILDS is what happened when I stopped treating those as separate problems.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-builds">
        <div className="container">
          <SectionHead label="The Build Log" id="about-builds" title="What’s being built." />
          <ol className="about-builds">
            {pillars.map((p) => (
              <li key={p.key} className="about-build reveal">
                <span className="meta">{p.number}</span>
                <h3 className="about-build__title">{p.title}</h3>
                <p className="about-build__tag">{p.tagline}</p>
                <p className="about-build__desc">{p.description}</p>
                <Link href={p.href} className="arrow-link meta">
                  Enter {p.short} <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
