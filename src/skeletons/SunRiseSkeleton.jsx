import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SunRiseSkeleton() {
  return (
    <div className="layer-child">
      {/* Header */}
      <p className="hooks-header">
        <Skeleton width={50} height={18} />
        <Skeleton width={90} height={14} />
      </p>

      {/* Time */}
      <p className="temp" style={{ marginTop: "12px" }}>
        <Skeleton width={60} height={28} />
      </p>

      {/* Curve */}
      <div
        className="sun-curve"
        style={{ margin: "15% 4% 0 4%" }}
      >
        <svg viewBox="0 0 300 100" preserveAspectRatio="none">
          {/* Semi-circle path */}
          <path
            d="M20,80 A130,130 0 0 1 250,80"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Horizon line */}
          <line
            x1="0"
            y1="70"
            x2="270"
            y2="70"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="4"
          />

          {/* Static sun dot */}
          <circle
            cx="135"
            cy="60"
            r="6"
            fill="rgba(255,255,255,0.35)"
          />
        </svg>
      </div>

      {/* Footer */}
      <div
        className="average-details"
        style={{ marginTop: "-5px", textAlign: "center" }}
      >
        <Skeleton width={140} height={14} />
      </div>
    </div>
  );
}
