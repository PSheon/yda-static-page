import React, { useState, useEffect } from 'react';
import { Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import GradeIcon from '@material-ui/icons/Grade';

import LoadingSpinner from 'app/main/shared/LoadingSpinner';

function WidgetReviewStarsSection() {
  const REVIEW_STARS = useSelector(
    ({ adminDashboard }) => adminDashboard.reviewStars
  );
  const isStarsLoading = REVIEW_STARS.loading;

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      if (isStarsLoading) setIsInitialized(true);
    }
  }, [isInitialized, isStarsLoading]);

  if (!isInitialized && isStarsLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <LoadingSpinner width="128" height="128" />
      </div>
    );
  }
  return (
    <div className="flex flex-col sm:flex sm:flex-row pb-12">
      <div className="widget flex w-full sm:w-1/3 p-16">
        <Paper className="w-full rounded-8 shadow-md hover:shadow-lg border-none text-center pt-12 pb-16">
          <Typography className="text-72 leading-none text-blue flex justify-center items-end">
            {REVIEW_STARS['eventStars']}
            <GradeIcon className="block sm:hidden lg:block w-60 h-auto ml-8 self-centers" />
            <span className="text-gray-500 text-16 whitespace-no-wrap text-bold">
              / 5
            </span>
          </Typography>
          <Typography className="text-16 pt-12" color="textSecondary">
            活動整體滿意度
          </Typography>
        </Paper>
      </div>

      <div className="widget flex w-full sm:w-1/3 p-16">
        <Paper className="w-full rounded-8 shadow-md hover:shadow-lg border-none text-center pt-12 pb-16">
          <Typography className="text-72 leading-none text-blue flex justify-center items-end">
            {REVIEW_STARS['speakerContentStars']}
            <GradeIcon className="block sm:hidden lg:block w-60 h-auto ml-8 self-centers" />
            <span className="text-gray-500 text-16 whitespace-no-wrap text-bold">
              / 5
            </span>
          </Typography>
          <Typography className="text-16 pt-12" color="textSecondary">
            講師內容滿意度
          </Typography>
        </Paper>
      </div>

      <div className="widget w-full sm:w-1/3 p-16">
        <Paper className="w-full rounded-8 shadow-md hover:shadow-lg border-none text-center pt-12 pb-16">
          <Typography className="text-72 leading-none text-blue flex justify-center items-end">
            {REVIEW_STARS['speakerExpressionStars']}
            <GradeIcon className="block sm:hidden lg:block w-60 h-auto ml-8 self-centers" />
            <span className="text-gray-500 text-16 whitespace-no-wrap text-bold">
              / 5
            </span>
          </Typography>
          <Typography className="text-16 pt-12" color="textSecondary">
            講師表達滿意度
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

export default WidgetReviewStarsSection;
