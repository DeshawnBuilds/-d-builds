import Link from "next/link";
import { useId } from "react";
import SignupForm from "./SignupForm";
import { socialLinks, worlds } from "@/data/site";

type Props = { headingLevel?: "h1" | "h2" };

// Points to the worlds, then offers the free guide signup.
export default function Newsletter({ headingLevel = "h2" }: Props) {
  const id = useId();
  const Heading = headingLevel;

  return (
    <section className="newsletter" aria-labelledby={`${id}-title`}>
      <div className="container newsletter__grid">
        <div className="reveal">
          <p className="meta newsletter__label">
            <span className="section-head__rule" aria-hidden="true" />
            Follow along
          </p>
          <Heading id={`${id}-title`} className="newsletter__title">
            Follow
            <br />
            the build<span className="accent">.</span>
          </Heading>
        </div>

        <div className="newsletter__form-wrap reveal">
          <p className="newsletter__copy">
            Pick the way in that fits you: listen, watch the films, or just catch the feeling.
          </p>
          <ul className="follow-links">
            {worlds.map((w) => (
              <li key={w.key}>
                {w.url ? (
                  <a href={w.url} target="_blank" rel="me noopener" className="follow-link">
                    <img src={w.logo} alt="" width={1200} height={1200} />
                    <span>
                      {w.short} <span className="dim">· {w.where}</span>
                    </span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link href={w.href ?? "/"} className="follow-link">
                    <img src={w.logo} alt="" width={1200} height={1200} />
                    <span>
                      {w.short} <span className="dim">· {w.where}</span>
                    </span>
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </li>
            ))}
            {socialLinks.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="me noopener" className="follow-link">
                  {s.logo && <img src={s.logo} alt="" width={192} height={192} />}
                  <span>{s.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="newsletter__signup">
            <p className="newsletter__signup-copy">
              <span className="ink">Start building your own.</span> Get{" "}
              <Link href="/free-guide">Awaken the Creator</Link>, my free guide to making your
              first creative piece with AI.
            </p>
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  );
}
