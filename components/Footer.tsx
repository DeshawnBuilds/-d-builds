import Link from "next/link";
import { buildNav, followNav, primaryNav, site, socialLinks, worlds } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <p className="footer__brand">
            D BUILDS<span className="accent">.</span>
          </p>
          <p className="footer__mantra">
            Build the person.
            <br />
            Build the thing.
            <br />
            Build the future.
          </p>
        </div>

        <div className="footer__cols">
          <nav aria-label="Footer">
            <p className="meta footer__heading">Index</p>
            <ul className="footer__list">
              {[{ label: "Home", href: "/" }, ...primaryNav, ...buildNav, followNav].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="meta footer__heading">Three worlds, one person</p>
            <ul className="footer__worlds">
              {worlds.map((w) => (
                <li key={w.key}>
                  {w.url ? (
                    <a href={w.url} target="_blank" rel="me noopener" className="footer__world">
                      <img src={w.logo} alt="" width={1200} height={1200} loading="lazy" />
                      <span>
                        {w.short} <span aria-hidden="true">↗</span>
                        <span className="footer__world-where">{w.where}</span>
                      </span>
                    </a>
                  ) : (
                    <Link href={w.href ?? "/"} className="footer__world">
                      <img src={w.logo} alt="" width={1200} height={1200} loading="lazy" />
                      <span>
                        {w.short}
                        <span className="footer__world-where">{w.where} · coming soon</span>
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            {socialLinks.length > 0 && (
              <ul className="footer__worlds">
                {socialLinks.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} rel="me noopener" target="_blank" className="footer__world">
                      {s.logo && (
                        <img src={s.logo} alt="" width={192} height={192} loading="lazy" />
                      )}
                      <span>
                        {s.label} <span aria-hidden="true">↗</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="footer__bottom meta">
          <p>© 2026 Deshawn Builds</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
