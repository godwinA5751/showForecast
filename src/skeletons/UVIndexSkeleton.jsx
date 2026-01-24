import Skeleton from "react-loading-skeleton";
import { WiDaySunny } from "react-icons/wi";
import "react-loading-skeleton/dist/skeleton.css";

export default function UVIndexSkeleton() {
  return (
    <div className="layer-child uv-card">
      {/* Header */}
      <p className="hooks-header">
        <WiDaySunny size={30} />
        <Skeleton width={70} height={14} />
      </p>

      {/* UV value + level */}
      <div>
        <p className="temp">
          <Skeleton width={30} height={28} />
        </p>
        <span className="ave-desc">
          <Skeleton width={60} height={12} />
        </span>
      </div>

      {/* Bar + message */}
      <div className="average-details">
        <div
          className="uv-bar"
          style={{ position: "relative", margin: "30px 0 10px 0" }}
        >
          {/* Bar */}
          <div
            className="bar-range"
            style={{ opacity: 0.35 }}
          />

          {/* Static dot */}
          <div
            className="uv-dot"
            style={{
              left: "50%",
              background: "rgba(255,255,255,0.4)",
              boxShadow: "none"
            }}
          />
        </div>

        {/* Message */}
        <div className="message">
          <Skeleton width="90%" height={14} />
          <Skeleton width="70%" height={14} style={{ marginTop: 6 }} />
        </div>
      </div>
    </div>
  );
}
