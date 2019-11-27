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

const labels = [
  '新聞報導',
  '電台廣播',
  'YS臉書',
  'YS官網',
  '台灣就業通網站連結',
  '校園徵才博覽會',
  '校園講座',
  '收到DM',
  '收到Email活動通知',
  '親友介紹',
  '其他',
  '未提供'
];
const DEFAULT_HEARD_FROM_DATASETS = {
  verified: [
    {
      data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
    }
  ]
};

function WidgetHeardFromChart() {
  const theme = useTheme();
  const HEARD_FROM_STASTIC = useSelector(
    ({ adminDashboard }) => adminDashboard.heardFromStastic
  );
  const verifiedHeardFromStastic = HEARD_FROM_STASTIC['verified'];
  const chartLoading = HEARD_FROM_STASTIC['loading'];

  const [datasetId, setDatasetId] = useState('verified');
  const [isLoading, setIsLoading] = useState(true);
  const [chartDatasets, setChartDatasets] = useState(
    DEFAULT_HEARD_FROM_DATASETS
  );

  useEffect(() => {
    if (verifiedHeardFromStastic.length) {
      setChartDatasets({
        verified: verifiedHeardFromStastic
      });
      setIsLoading(false);
    }
  }, [HEARD_FROM_STASTIC, verifiedHeardFromStastic]);

  return (
    <FuseAnimate delay={600}>
      <Card className="w-full rounded-12 shadow-md hover:shadow-lg border-none relative min-h-128">
        {isLoading || chartLoading ? (
          <LoadingSpinnerOverlay width={64} height={64} />
        ) : (
          <React.Fragment>
            <div className="p-16 flex flex-row items-center justify-between">
              <Typography className="h1 font-300">得知管道分布</Typography>

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
                        theme.palette.primary.light,
                        theme.palette.primary.light,
                        theme.palette.secondary.light,
                        theme.palette.secondary.light,
                        theme.palette.secondary.light,
                        theme.palette.tertiary.light,
                        theme.palette.tertiary.light,
                        theme.palette.tertiary.light,
                        theme.palette.quaternary.light,
                        theme.palette.quaternary.light,
                        theme.palette.quaternary.light
                      ],
                      hoverBackgroundColor: [
                        theme.palette.primary.dark,
                        theme.palette.primary.dark,
                        theme.palette.primary.dark,
                        theme.palette.secondary.dark,
                        theme.palette.secondary.dark,
                        theme.palette.secondary.dark,
                        theme.palette.tertiary.dark,
                        theme.palette.tertiary.dark,
                        theme.palette.tertiary.dark,
                        theme.palette.quaternary.dark,
                        theme.palette.quaternary.dark,
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

            <div className="p-16 flex flex-row items-center justify-around">
              {labels.slice(0, 3).map((label, index) => (
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

export default WidgetHeardFromChart;
