import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Placeholder from "@/components/Placeholder";
import ArticleList from "@/components/ArticleList";
import Newsletter from "@/components/Newsletter";
import { articles, pillarByKey } from "@/data/site";

export const metadata: Metadata = {
  title: "Building Myself",
  description: "The internal work behind becoming who I'm trying to become.",
};

export default function MyselfPage() {
  const pillar = pillarByKey("myself");
  const featured = articles.find((a) => a.pillar === "myself" && a.featured);
  const archive = articles.filter((a) => a.pillar === "myself");

  return (
    <>
      <PageHero
        variant="myself"
        number={pillar.number}
        label={`${pillar.tagline} The internal work.`}
        title={<>Building<br />Myself.</>}
        lede={
          <p>
            &ldquo;Before I can build the future, I have to build the person capable of
            living it.&rdquo;
          </p>
        }
      >
        <ul className="tags" aria-label="Themes">
          {pillar.themes.map((t) => (
            <li key={t} className="tag meta">{t}</li>
          ))}
        </ul>
      </PageHero>

      {featured && (
        <section className="section" aria-labelledby="featured-essay">
          <div className="container">
            <SectionHead label="Featured Essay" />
            <Link href={`/writing/${featured.slug}`} className="feature-essay reveal">
              <h2 id="featured-essay" className="feature-essay__title">{featured.title}</h2>
              <p className="feature-essay__excerpt">{featured.excerpt}</p>
              <p className="meta feature-essay__status">
                <span className="dot" aria-hidden="true" /> Essay in development
              </p>
            </Link>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="field-notes">
        <div className="container">
          <SectionHead label="Latest Field Notes" id="field-notes" title="Notes from the inside." />
          <div className="slots">
            <Placeholder index={0} title="Field notes" note="Short dispatches on becoming, discipline and identity—published as they're lived." />
            <Placeholder index={1} title="Feeling behind" note="Writing about the distance between where I am and where I imagined I'd be." />
            <Placeholder index={2} title="Survival → creation" note="What changes when life stops being only about getting through it." />
          </div>
        </div>
      </section>

      <section className="section ryf" aria-labelledby="ryf-title">
        <div className="container ryf__grid">
          <p className="meta reveal">Framework / Developing</p>
          <div className="reveal">
            <h2 id="ryf-title" className="ryf__title">Remember<br />Your Future.</h2>
            <p className="prose">
              A personal framework still being written. When it&rsquo;s ready to be
              useful to someone other than me, it will live here.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="archive-title">
        <div className="container">
          <SectionHead label="Essay Archive" id="archive-title" title="Everything written here." />
          <ArticleList items={archive} />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
