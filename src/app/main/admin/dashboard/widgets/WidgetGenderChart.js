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

const labels = ['男性', '多元性別', '女性', '未提供'];
const DEFAULT_GENDER_DATASETS = {
  verified: [
    {
      data: [50, 50, 50, 50],
      change: [-0.6, 0.7, 0.1, 0]
    }
  ],
  unVerified: [
    {
      data: [50, 50, 50, 50],
      change: [-2.3, 0.3, -0.2, 0]
    }
  ]
};

function WidgetGenderChart() {
  const theme = useTheme();
  const GENDER_STASTIC = useSelector(
    ({ adminDashboard }) => adminDashboard.genderStastic
  );
  const verifiedGenderStastic = GENDER_STASTIC['verified'];
  const unVerifiedGenderStastic = GENDER_STASTIC['unVerified'];
  const chartLoading = GENDER_STASTIC['loading'];

  const [datasetId, setDatasetId] = useState('verified');
  const [isLoading, setIsLoading] = useState(true);
  const [chartDatasets, setChartDatasets] = useState(DEFAULT_GENDER_DATASETS);

  useEffect(() => {
    if (verifiedGenderStastic.length && unVerifiedGenderStastic.length) {
      setChartDatasets({
        verified: verifiedGenderStastic,
        unVerified: unVerifiedGenderStastic
      });
      setIsLoading(false);
    }
  }, [GENDER_STASTIC, unVerifiedGenderStastic, verifiedGenderStastic]);

  return (
    <FuseAnimate delay={600}>
      <Card className="w-full rounded-12 shadow-md hover:shadow-lg border-none relative min-h-128">
        {isLoading || chartLoading ? (
          <LoadingSpinnerOverlay width={64} height={64} />
        ) : (
          <React.Fragment>
            <div className="p-16 flex flex-row items-center justify-between">
              <Typography className="h1 font-300">性別分布</Typography>

              <FormControl>
                <Select
                  value={datasetId}
                  onChange={ev => setDatasetId(ev.target.value)}
                >
                  {/* {Object.keys(chartDatasets).map(key => (
                    <MenuItem key={key} value={key}>
                      {key === 'verified' ? '已驗證' : '未驗證'}
                    </MenuItem>
                  ))} */}
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
                      change: chartDatasets[datasetId][0].change,
                      borderColor: theme.palette.divider,
                      backgroundColor: [
                        theme.palette.primary.light,
                        theme.palette.secondary.light,
                        theme.palette.tertiary.light,
                        theme.palette.quaternary.light
                      ],
                      hoverBackgroundColor: [
                        theme.palette.primary.dark,
                        theme.palette.secondary.dark,
                        theme.palette.tertiary.dark,
                        theme.palette.quaternary.dark
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

            <div className="p-16 flex flex-row items-center justify-center">
              {labels.slice(0, 3).map((label, index) => (
                <div key={label} className="px-16 flex flex-col items-center">
                  <Typography className="h4" color="textSecondary">
                    {label}
                  </Typography>
                  <Typography className="h2 font-300 py-8">
                    {chartDatasets[datasetId][0].data[index]}
                  </Typography>

                  {/* <div className="flex flex-row items-center justify-center">
                    {chartDatasets[datasetId][0].change[index] < 0 && (
                      <Icon className="text-18 pr-4 text-red">
                        arrow_downward
                      </Icon>
                    )}

                    {chartDatasets[datasetId][0].change[index] > 0 && (
                      <Icon className="text-18 pr-4 text-green">
                        arrow_upward
                      </Icon>
                    )}
                    <div className="h5">
                      {chartDatasets[datasetId][0].change[index]}%
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </React.Fragment>
        )}
      </Card>
    </FuseAnimate>
  );
}

export default WidgetGenderChart;
