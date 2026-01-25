import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function VisibilitySkeleton() {
  return (
    <div className="layer-child visibility">
      {/* Header */}
      <p className="hooks-header">
        <Skeleton width={50} height={18} />
        <Skeleton width={70} height={14} />
      </p>

      {/* Visibility value */}
      <div>
        <p className="temp">
          <Skeleton width={80} height={28} />
        </p>
      </div>

      {/* Description */}
      <div
        className="average-details"
        style={{ marginTop: "50px" }}
      >
        <Skeleton width="80%" height={14} />
      </div>
    </div>
  );
}
