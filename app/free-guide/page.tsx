import type { Metadata } from "next";
import SignupForm from "@/components/SignupForm";

const subhead =
  "A free guide for people who've always felt there's something creative in them, but never knew how to get it out.";

export const metadata: Metadata = {
  title: "Awaken the Creator — Free Guide",
  description: subhead,
  openGraph: { title: "Awaken the Creator — Free Guide", description: subhead },
};

// What the reader leaves with, in the guide's own words.
const outcomes = [
  { title: "Your first creation", note: "An image, a story, a concept." },
  { title: "A one-page Creative Profile", note: "So you can keep going on your own." },
];

export default function FreeGuidePage() {
  return (
    <>
      <section className="page-hero guide-hero" aria-labelledby="guide-title">
        <div className="page-hero__light" aria-hidden="true" />
        <div className="container guide-hero__grid">
          <div className="guide-hero__intro">
            <p className="meta page-hero__label">
              <span className="page-hero__num">01</span>
              Free guide
            </p>
            <h1 id="guide-title" className="page-hero__title guide-hero__title">
              Awaken
              <br />
              the Creator<span className="accent">.</span>
            </h1>
            <p className="page-hero__lede guide-hero__subhead">{subhead}</p>
          </div>

          <div className="guide-hero__offer">
            <p className="guide-hero__body">
              In under an hour, you&rsquo;ll use AI to make the first real piece of your idea: an
              image, a story, a concept. No experience needed. No prompts to memorize. You&rsquo;ll
              walk away with your first creation, and a one-page Creative Profile so you can keep
              going on your own.
            </p>
            <div className="guide-hero__form">
              <SignupForm />
              <p className="meta signup__small">
                Free. Sent straight to your inbox. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="guide-outcomes">
        <div className="container">
          <p className="meta section-head__label guide-outcomes__label">
            <span className="section-head__rule" aria-hidden="true" />
            <span id="guide-outcomes">What you walk away with</span>
          </p>
          <ol className="guide-outcomes">
            {outcomes.map((o, i) => (
              <li key={o.title} className="guide-outcome reveal">
                <span className="meta guide-outcome__num">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="guide-outcome__title">{o.title}</h2>
                <p className="guide-outcome__note">{o.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
