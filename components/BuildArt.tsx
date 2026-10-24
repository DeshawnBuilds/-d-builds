import type { Art } from "@/data/site";

// Abstract CSS/SVG plates that stand in until real imagery exists.
// They are compositions, not depictions of finished work.
export default function BuildArt({ art }: { art: Art }) {
  return (
    <div className={`art art--${art}`} aria-hidden="true">
      {art === "clock" && (
        <>
          <div className="art-clock__dial" />
          <div className="art-clock__hand" />
          <p className="art-clock__time">48:00:00</p>
        </>
      )}
      {art === "portal" && (
        <>
          <div className="art-portal__arch" />
          <div className="art-portal__ring" />
          <div className="art-portal__horizon" />
        </>
      )}
      {art === "network" && (
        <svg className="art-network" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
          <g className="art-network__lines">
            <path d="M20 110 L60 80 L100 92 L140 50 L180 30" />
            <path d="M60 80 L70 40 L140 50" />
            <path d="M100 92 L130 120 L180 30" />
          </g>
          <g className="art-network__nodes">
            {[
              [20, 110], [60, 80], [70, 40], [100, 92], [130, 120], [140, 50],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" />
            ))}
            <circle className="art-network__target" cx="180" cy="30" r="3.5" />
          </g>
        </svg>
      )}
      <span className="art__plate meta">Plate / abstract</span>
    </div>
  );
}
