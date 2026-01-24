import Skeleton from "react-loading-skeleton";
import { WiBarometer } from "react-icons/wi";
import "react-loading-skeleton/dist/skeleton.css";
// import "./hooks.css";

export default function PressureCardSkeleton() {
  return (
    <div className="layer-child pressure-card">
      {/* Header */}
      <div className="hooks-header">
        <WiBarometer size={22} />
        <Skeleton width={90} height={14} />
      </div>

      {/* Gauge */}
      <div className="gauge">
        <svg viewBox="0 0 200 120">
          {/* Static tick skeleton */}
          {[...Array(36)].map((_, i) => {
            const angle = -90 + i * 5;
            return (
              <line
                key={i}
                x1="100"
                y1="30"
                x2="100"
                y2="40"
                transform={`rotate(${angle} 100 100)`}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
              />
            );
          })}

          {/* Needle placeholder */}
          <line
            x1="100"
            y1="28"
            x2="100"
            y2="43"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="3"
          />
        </svg>

        {/* Pressure value */}
        <div className="pressure-value">
          <Skeleton width={80} height={28} />
        </div>
      </div>

      {/* Footer */}
      <div className="pressure-footer">
        <Skeleton width={30} height={12} />
        <Skeleton width={30} height={12} />
      </div>
    </div>
  );
}
