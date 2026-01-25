import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FeelsLikeSkeleton() {
  return (
    <div className="feels-like spacer-child-child">
      {/* Header */}
      <p className="hooks-header">
        <Skeleton width={50} height={18} />
        <Skeleton width={90} height={16} />
      </p>

      {/* Temperature */}
      <Skeleton width={60} height={36} style={{ margin: "10px 0" }} />

      {/* Description */}
      <Skeleton width="100%" height={14} />
      <Skeleton width="80%" height={14} style={{ marginTop: 6 }} />
    </div>
  );
}
