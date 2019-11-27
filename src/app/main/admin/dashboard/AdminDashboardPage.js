import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { useDispatch } from 'react-redux';

import * as Actions from 'app/store/actions';
import WidgetNewRegisteredUserHistory from './widgets/WidgetNewRegisteredUserHistory';
import WidgetGenderChart from './widgets/WidgetGenderChart';
import WidgetEmploymentStatusChart from './widgets/WidgetEmploymentStatusChart';
import WidgetAgePeriodChart from './widgets/WidgetAgePeriodChart';
import WidgetEducationChart from './widgets/WidgetEducationChart';
import WidgetHeardFromChart from './widgets/WidgetHeardFromChart';
import WidgetReviewStarsSection from './widgets/WidgetReviewStarsSection';
import WidgetEventReviewTable from './widgets/WidgetEventReviewTable';

function AdminDashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.syncAdminDashboardReviewStars());
    dispatch(Actions.syncAdminDashboardReviewLogs());
    dispatch(Actions.syncAdminDashboardNewRegisteredUser());
    dispatch(Actions.syncAdminDashboardGenderStatistic());
    dispatch(Actions.syncAdminDashboardEmploymentStatusStatistic());
    dispatch(Actions.syncAdminDashboardAgePeriodStatistic());
    dispatch(Actions.syncAdminDashboardEducationStatistic());
    dispatch(Actions.syncAdminDashboardHeardFromStatistic());
  }, [dispatch]);

  return (
    <div className="w-full">
      <WidgetNewRegisteredUserHistory />

      <FuseAnimate animation="transition.slideUpIn" delay={200}>
        <div className="flex flex-col md:flex-row sm:p-8 container -mt-128">
          <div className="flex flex-1 flex-col min-w-0 order-last md:order-first">
            <FuseAnimate delay={600}>
              <Typography className="p-16 pb-8 text-18 font-600 text-black md:text-white">
                活動滿意度統計
              </Typography>
            </FuseAnimate>
            <WidgetReviewStarsSection />

            {/* <Typography className="px-16 pb-8 text-18 font-600">
              最近的活動回饋
            </Typography> */}
            <div className="widget w-full p-16 pb-32">
              <FuseAnimate delay={600}>
                <WidgetEventReviewTable />
              </FuseAnimate>
            </div>
          </div>

          <div className="flex flex-wrap w-full md:w-400 pt-16">
            <div className="mb-32 w-full sm:w-1/2 md:w-full">
              <FuseAnimate delay={600}>
                <Typography className="px-16 pb-8 text-18 font-600 text-white">
                  性別統計
                </Typography>
              </FuseAnimate>

              <div className="widget w-full p-16">
                <WidgetGenderChart />
              </div>
            </div>

            <div className="mb-32 w-full sm:w-1/2 md:w-full">
              <FuseAnimate delay={600}>
                <Typography className="px-16 pb-8 text-18 font-600 text-black sm:text-white md:text-black">
                  目前身分統計
                </Typography>
              </FuseAnimate>

              <div className="widget w-full p-16">
                <WidgetEmploymentStatusChart />
              </div>
            </div>
          </div>
        </div>
      </FuseAnimate>

      {/* YS Information */}
      <FuseAnimate delay={600}>
        <div className="container">
          {/* <Typography className="p-16 pb-8 text-18 font-600 flex justify-between">
            會員統計
          </Typography> */}
          <div className="flex flex-col sm:flex sm:flex-row">
            {/* 年齡區間統計 */}
            <div className="mb-32 w-full sm:w-1/3 md:w-full">
              <FuseAnimate delay={600}>
                <Typography className="px-16 pb-8 text-18 font-600 lg:pt-0">
                  年齡區間統計
                </Typography>
              </FuseAnimate>
              <div className="widget w-full p-16">
                <WidgetAgePeriodChart />
              </div>
            </div>

            {/* 學歷統計 */}
            <div className="mb-32 w-full sm:w-1/3 md:w-full">
              <FuseAnimate delay={600}>
                <Typography className="px-16 pb-8 text-18 font-600 lg:pt-0">
                  學歷統計
                </Typography>
              </FuseAnimate>
              <div className="widget w-full p-16">
                <WidgetEducationChart />
              </div>
            </div>

            {/* 得知本站方式統計分析  */}
            <div className="mb-32 w-full sm:w-1/3 md:w-full">
              <FuseAnimate delay={600}>
                <Typography className="px-16 pb-8 text-18 font-600 lg:pt-0">
                  得知本站管道統計
                </Typography>
              </FuseAnimate>
              <div className="widget w-full p-16">
                <WidgetHeardFromChart />
              </div>
            </div>
          </div>
        </div>
      </FuseAnimate>
    </div>
  );
}

export default AdminDashboardPage;
