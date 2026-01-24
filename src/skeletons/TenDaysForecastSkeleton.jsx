import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../components/tenDays.css";

export default function TenDayForecastSkeleton() {
  return (
    <div className="forecast-card">
      {/* Title */}
      <h3 className="forecast-title">
        <Skeleton width={160} height={20} />
      </h3>

      <div className="forecast-box">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="forecast-row" key={index}>
            {/* Day */}
            <span className="day">
              <Skeleton width={40} />
            </span>

            {/* Icon */}
            <span className="icon">
              <Skeleton circle width={24} height={24} />
            </span>

            {/* Min temp */}
            <span className="temps min">
              <Skeleton width={30} />
            </span>

            {/* Bar */}
            <div className="bar">
              <Skeleton
                height={6}
                width="100%"
                borderRadius={10}
              />
            </div>

            {/* Max temp */}
            <span className="temps max">
              <Skeleton width={30} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
