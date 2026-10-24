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
      <span className="art__plate meta">Plate / abstract</span>
    </div>
  );
}
