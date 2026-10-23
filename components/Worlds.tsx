import Link from "next/link";
import SectionHead from "./SectionHead";
import { worlds } from "@/data/site";

type Props = { headingLevel?: "h2" | "h3"; compact?: boolean };

// The three worlds: same person, same brand, three ways in.
export default function Worlds({ headingLevel = "h2", compact = false }: Props) {
  return (
    <section id="worlds" className="section worlds" aria-labelledby="worlds-title">
      <div className="container">
        <SectionHead
          label="Three Worlds"
          id="worlds-title"
          as={headingLevel}
          title={
            <>
              Three worlds.
              <br />
              <span className="dim">One person.</span>
            </>
          }
          aside={
            compact ? undefined : (
              <>
                <img
                  className="worlds__portrait"
                  src="/deshawn.webp"
                  alt="Deshawn, backlit in warm gold light"
                  width={1000}
                  height={1333}
                />
                <p>
                  I&rsquo;m Deshawn. I talk about it, I make films about it, and I capture the
                  feeling of it. Same story every time: moving from survival into creation.
                </p>
              </>
            )
          }
        />
        <ul className="worlds__list">
          {worlds.map((w) => (
            <li key={w.key} className={`world world--${w.key} reveal`}>
              <img
                className="world__logo"
                src={w.logo}
                alt={w.logoAlt}
                width={1200}
                height={1200}
                loading="lazy"
                decoding="async"
              />
              <div className="world__body">
                <p className="meta world__where">{w.where}</p>
                <h3 className="world__name">{w.name}</h3>
                <p className="world__line">{w.line}</p>
                <p className="world__desc">{w.description}</p>
                <div className="world__actions">
                  {w.url ? (
                    <a href={w.url} target="_blank" rel="me noopener" className="btn btn--solid world__btn">
                      {w.urlLabel} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <p className="meta world__soon">
                      <span className="dot" aria-hidden="true" /> {w.urlLabel} coming soon
                    </p>
                  )}
                  {w.href && w.cta && (
                    <Link href={w.href} className="world__cta meta">
                      {w.cta} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
