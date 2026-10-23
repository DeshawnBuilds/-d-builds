import BuildPillar from "./BuildPillar";
import SectionHead from "./SectionHead";
import { pillars } from "@/data/site";

export default function ThreeBuilds() {
  return (
    <section id="the-builds" className="section builds" aria-labelledby="builds-title">
      <div className="container">
        <SectionHead
          label="The Build Log"
          id="builds-title"
          title={
            <>
              Underneath
              <br />
              <span className="dim">it all.</span>
            </>
          }
          aside={
            <p>
              The worlds are what I make. This is the life behind them: the person,
              the work and the future, all being built at the same time.
            </p>
          }
        />
        <ol className="pillars">
          {pillars.map((p) => (
            <BuildPillar key={p.key} pillar={p} />
          ))}
        </ol>
      </div>
    </section>
  );
}
