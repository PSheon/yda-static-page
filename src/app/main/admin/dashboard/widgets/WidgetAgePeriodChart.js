import React, { useState, useEffect } from 'react';
import {
  Select,
  Card,
  FormControl,
  MenuItem,
  Typography
} from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from '@material-ui/styles';

import LoadingSpinnerOverlay from 'app/main/shared/LoadingSpinnerOverlay';

const labels = ['15 - 20', '20 - 25', '25 - 30', '30 - 35', '未提供'];
const DEFAULT_AGE_STATUS_DATASETS = {
  verified: [
    {
      data: [50, 50, 50, 50, 50]
    }
  ]
};

function WidgetAgePeriodChart() {
  const theme = useTheme();
  const AGE_PERIOD_STASTIC = useSelector(
    ({ adminDashboard }) => adminDashboard.agePeriodStastic
  );
  const verifiedAgePeriodStastic = AGE_PERIOD_STASTIC['verified'];
  const chartLoading = AGE_PERIOD_STASTIC['loading'];

  const [datasetId, setDatasetId] = useState('verified');
  const [isLoading, setIsLoading] = useState(true);
  const [chartDatasets, setChartDatasets] = useState(
    DEFAULT_AGE_STATUS_DATASETS
  );

  useEffect(() => {
    if (verifiedAgePeriodStastic.length) {
      setChartDatasets({
        verified: verifiedAgePeriodStastic
      });
      setIsLoading(false);
    }
  }, [AGE_PERIOD_STASTIC, verifiedAgePeriodStastic]);

  return (
    <FuseAnimate delay={600}>
      <Card className="w-full rounded-12 shadow-md hover:shadow-lg border-none relative min-h-128">
        {isLoading || chartLoading ? (
          <LoadingSpinnerOverlay width={64} height={64} />
        ) : (
          <React.Fragment>
            <div className="p-16 flex flex-row items-center justify-between">
              <Typography className="h1 font-300">年齡區間分布</Typography>

              <FormControl>
                <Select
                  value={datasetId}
                  onChange={ev => setDatasetId(ev.target.value)}
                >
                  <MenuItem value="verified">已驗證</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="h-224 relative">
              <Doughnut
                data={{
                  labels,
                  datasets: [
                    {
                      data: chartDatasets[datasetId][0].data,
                      borderColor: theme.palette.divider,
                      backgroundColor: [
                        theme.palette.primary.light,
                        theme.palette.secondary.light,
                        theme.palette.tertiary.light,
                        theme.palette.quaternary.light,
                        theme.palette.quinary.light
                      ],
                      hoverBackgroundColor: [
                        theme.palette.primary.dark,
                        theme.palette.secondary.dark,
                        theme.palette.tertiary.dark,
                        theme.palette.quaternary.dark,
                        theme.palette.quinary.dark
                      ]
                    }
                  ]
                }}
                options={{
                  cutoutPercentage: 65,
                  spanGaps: false,
                  legend: {
                    display: false
                  },
                  maintainAspectRatio: false
                }}
              />
            </div>

            <div className="p-16 flex flex-row items-center justify-around">
              {labels.slice(0, 4).map((label, index) => (
                <div key={label} className="px-6 flex flex-col items-center">
                  <Typography className="h4" color="textSecondary">
                    {label}
                  </Typography>
                  <Typography className="h2 font-300 py-8">
                    {chartDatasets[datasetId][0].data[index]}
                  </Typography>
                </div>
              ))}
            </div>
          </React.Fragment>
        )}
      </Card>
    </FuseAnimate>
  );
}

export default WidgetAgePeriodChart;
