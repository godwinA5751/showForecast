import AverageCardSkeleton from "../skeletons/AverageSkeleton";
import FeelsLikeSkeleton from "../skeletons/FeelsLikeSkeleton";
import HeaderSkeleton from "../skeletons/HeaderSkeleton";
import HumiditySkeleton from "../skeletons/HumiditySkeleton";
import PrecipSkeleton from "../skeletons/PrecipSkeleton";
import PressureCardSkeleton from "../skeletons/PressureCardSkeleton";
import SunRiseSkeleton from "../skeletons/SunRiseSkeleton";
import TenDayForecastSkeleton from "../skeletons/TenDaysForecastSkeleton";
import UVIndexSkeleton from "../skeletons/UVIndexSkeleton";
import VisibilitySkeleton from "../skeletons/VisibilitySkeleton";
import WindCardSkeleton from "../skeletons/WindCardSkeleton";


export default function GeneralSkeleton() {
  return (
    <div className='city-weather-box'>
      <>
        <div className='header'>
          <HeaderSkeleton />
        </div>
        <div className='sections'>
          <div className="first-section">
            <div className="condition"><TenDayForecastSkeleton/></div>
            <div className='spacer'>
              <div className='spacer-child'>
                <AverageCardSkeleton />
                <FeelsLikeSkeleton />
              </div>
              <div className='wind'>
                <WindCardSkeleton />
              </div>
            </div>
          </div>
          <div className="second-section">
            <UVIndexSkeleton />
            <SunRiseSkeleton />
            <PrecipSkeleton />
            <VisibilitySkeleton />
            <HumiditySkeleton />
            <PressureCardSkeleton />
          </div>
        </div>
      </>
    </div>
  )
}
