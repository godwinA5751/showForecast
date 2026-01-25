import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AverageCardSkeleton() {
  return (
    <div className="average-weather spacer-child-child">
      {/* Header */}
      <p className="hooks-header">
        <Skeleton width={50} height={18} />
        <Skeleton width={90} height={16} />
      </p>

      {/* Main value */}
      <div>
        <Skeleton width={70} height={36} />
        <Skeleton width={160} height={14} style={{ marginTop: 6 }} />
      </div>

      {/* Rows */}
      <div className="average-details">
        <div className="rows">
          <Skeleton width={60} />
          <Skeleton width={50} />
        </div>

        <div className="rows">
          <Skeleton width={60} />
          <Skeleton width={50} />
        </div>
      </div>
    </div>
  );
}
