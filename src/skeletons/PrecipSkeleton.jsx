import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function PrecipSkeleton() {
  return (
    <div className="layer-child precip">
      {/* Header */}
      <p className="hooks-header">
        <Skeleton width={50} height={18} />
        <Skeleton width={130} height={16} />
      </p>

      {/* Main value */}
      <div style={{ marginTop: "-21px" }}>
        <Skeleton width={70} height={36} />
        <Skeleton width={50} height={12} style={{ marginTop: 6 }} />
      </div>

      {/* Message */}
      <div
        className="average-details"
        style={{ marginTop: "15px" }}
      >
        <Skeleton width="100%" height={14} />
        <Skeleton width="90%" height={14} style={{ marginTop: 6 }} />
      </div>
    </div>
  );
}
