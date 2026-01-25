import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import "./WindCard.css";

export default function WindCardSkeleton() {
  return (
    <div className="wind-card">
      {/* LEFT INFO */}
      <div className="wind-info">
        <p className="hooks-header title">
          <Skeleton width={50} height={18} />
          <Skeleton width={50} height={14} style={{ marginLeft: 6 }} />
        </p>

        <div className="row">
          <Skeleton width={40} height={12} />
          <Skeleton width={50} height={12} />
        </div>

        <div className="row">
          <Skeleton width={50} height={12} />
          <Skeleton width={60} height={12} />
        </div>

        <div className="row">
          <Skeleton width={65} height={12} />
          <Skeleton width={80} height={12} />
        </div>
      </div>

      {/* COMPASS */}
      <div className="compass">
        <div className="dial">
          {/* Cardinal letters stay for structure */}
          <span className="n">N</span>
          <span className="e">E</span>
          <span className="s">S</span>
          <span className="w">W</span>

          {/* Static arrow */}
          <div
            className="arrow"
            style={{
              "--rotation": "90deg",
              background: "rgba(255,255,255,0.25)"
            }}
          />

          {/* Center value */}
          <div className="center">
            <Skeleton width={28} height={18} />
            <Skeleton width={30} height={10} style={{ marginTop: 4 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
