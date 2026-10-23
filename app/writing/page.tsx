import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import WritingArchive from "@/components/WritingArchive";
import Newsletter from "@/components/Newsletter";
import { articles, pillarByKey } from "@/data/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and field notes from building myself, things and my future.",
};

export default function WritingPage() {
  const featured = articles.find((a) => a.featured);

  return (
    <>
      <PageHero
        label="Archive / Essays & Field Notes"
        title={<>Writing<span className="accent">.</span></>}
        lede={<p>Essays and field notes from all three builds, written while they&rsquo;re happening.</p>}
      />

      {featured && (
        <section className="section section--tight" aria-label="Featured">
          <div className="container">
            <Link href={`/writing/${featured.slug}`} className="feature-essay reveal">
              <p className="meta">Featured / {pillarByKey(featured.pillar).title}</p>
              <h2 className="feature-essay__title">{featured.title}</h2>
              <p className="feature-essay__excerpt">{featured.excerpt}</p>
              <p className="meta feature-essay__status">
                <span className="dot" aria-hidden="true" />{" "}
                {featured.body ? (featured.date ? `Published ${featured.date}` : "Published") : "Essay in development"}
              </p>
            </Link>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="all-writing">
        <div className="container">
          <SectionHead label="Index" id="all-writing" title="The archive." />
          <WritingArchive />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
