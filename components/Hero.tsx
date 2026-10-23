import { site } from "@/data/site";

export default function Hero() {
  const [first, second, third] = site.headline;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__light" aria-hidden="true" />
      <div className="hero__frame" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero__meta-top meta">
        <p>
          Deshawn <span className="dim">/</span> {site.roles.join(" · ")}
        </p>
        <p className="hero__log">
          <span className="rec" aria-hidden="true" /> Build Log / 001
        </p>
      </div>

      <h1 id="hero-title" className="hero__title">
        <span className="line"><span>{first}</span></span>
        <span className="line"><span>{second}</span></span>
        <span className="line line--em"><span>{third}</span></span>
      </h1>

      <div className="hero__bottom">
        <p className="hero__support">{site.supporting}</p>
        <dl className="hero__meta-bottom meta">
          <div>
            <dt>Location</dt>
            <dd>{site.location}</dd>
          </div>
          <div>
            <dt>Est.</dt>
            <dd>Now</dd>
          </div>
        </dl>
      </div>

      <a href="#worlds" className="hero__cue meta">
        Scroll to enter the build <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
