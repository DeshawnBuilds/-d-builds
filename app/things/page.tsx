import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ACUPortal from "@/components/ACUPortal";
import Newsletter from "@/components/Newsletter";
import { pillarByKey, projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Building Things",
  description:
    "Films, worlds, software and experiments that didn't exist until I decided to make them.",
};

export default function ThingsPage() {
  const pillar = pillarByKey("things");

  return (
    <>
      <PageHero
        variant="things"
        number={pillar.number}
        label={`${pillar.tagline} What didn't exist before.`}
        title={<>Building<br />Things.</>}
        lede={<p>{pillar.description}</p>}
      />

      <section className="section" aria-labelledby="index-title">
        <div className="container">
          <SectionHead label="Project Index" id="index-title" title="Currently on the bench." />
          <ol className="projects">
            <li className="projects__head meta" aria-hidden="true">
              <span>No.</span>
              <span>Project</span>
              <span>Type</span>
              <span>Status</span>
            </li>
            {projects.map((p, i) => {
              const inner = (
                <>
                  <span className="project__num meta">{String(i + 1).padStart(2, "0")}</span>
                  <span className="project__main">
                    <span className="project__title">{p.title}</span>
                    <span className="project__desc">{p.description}</span>
                  </span>
                  <span className="project__cat meta">{p.category}</span>
                  <span className={`project__status meta status--${p.status.toLowerCase().replace(/ /g, "-")}`}>
                    <span className="dot" aria-hidden="true" /> {p.status}
                  </span>
                </>
              );
              return (
                <li key={p.title} className="project reveal">
                  {p.href ? (
                    <Link href={p.href} className="project__row project__row--link">
                      {inner}
                      <span className="project__arrow" aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <div className="project__row">{inner}</div>
                  )}
                </li>
              );
            })}
          </ol>
          <p className="meta note">No screenshots or results are shown until they exist.</p>
        </div>
      </section>

      <ACUPortal />
      <Newsletter />
    </>
  );
}
