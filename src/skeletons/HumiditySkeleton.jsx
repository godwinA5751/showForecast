import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HumiditySkeleton() {
  return (
    <div className="layer-child humidity-card">
      {/* Header */}
      <p className="hooks-header">
        <Skeleton width={50} height={18} />
        <Skeleton width={90} height={16} />
      </p>

      {/* Humidity value */}
      <div style={{ marginTop: "-5px" }}>
        <Skeleton width={60} height={36} />
      </div>

      {/* Description */}
      <div
        className="average-details"
        style={{ marginTop: "40px" }}
      >
        <Skeleton width="100%" height={14} />
        <Skeleton width="85%" height={14} style={{ marginTop: 6 }} />
      </div>
    </div>
  );
}
