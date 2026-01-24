import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HeaderSkeleton() {
  return (
    <div className="header">
      {/* Location */}
      <h2>
        <Skeleton width={180} height={28} />
      </h2>

      {/* Temperature */}
      <h2>
        <Skeleton width={60} height={32} />
      </h2>

      {/* Weather icon / description */}
      <h3>
        <Skeleton width={90} height={18} />
      </h3>
    </div>
  );
}
