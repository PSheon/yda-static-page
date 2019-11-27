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

// 國中、高中、高職、專科、大學(包含四技、二技)、研究所、其他
// [
//   'middle',
//   'high',
//   'vocational',
//   'faculty',
//   'bachelor',
//   'institute',
//   'other'
// ]
const labels = [
  '國中',
  '高中',
  '高職',
  '專科',
  '大學(包含四技、二技)',
  '研究所',
  '其他',
  '未提供'
];
const DEFAULT_EDUCATION_DATASETS = {
  verified: [
    {
      data: [50, 50, 50, 50, 50, 50, 50, 50]
    }
  ]
};

function WidgetEducationChart() {
  const theme = useTheme();
  const EDUCATION_STASTIC = useSelector(
    ({ adminDashboard }) => adminDashboard.educationStastic
  );
  const verifiedEducationStastic = EDUCATION_STASTIC['verified'];
  const chartLoading = EDUCATION_STASTIC['loading'];

  const [datasetId, setDatasetId] = useState('verified');
  const [isLoading, setIsLoading] = useState(true);
  const [chartDatasets, setChartDatasets] = useState(
    DEFAULT_EDUCATION_DATASETS
  );

  useEffect(() => {
    if (verifiedEducationStastic.length) {
      setChartDatasets({
        verified: verifiedEducationStastic
      });
      setIsLoading(false);
    }
  }, [EDUCATION_STASTIC, verifiedEducationStastic]);

  return (
    <FuseAnimate delay={600}>
      <Card className="w-full rounded-12 shadow-md hover:shadow-lg border-none relative min-h-128">
        {isLoading || chartLoading ? (
          <LoadingSpinnerOverlay width={64} height={64} />
        ) : (
          <React.Fragment>
            <div className="p-16 flex flex-row items-center justify-between">
              <Typography className="h1 font-300">學歷分布</Typography>

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
                        theme.palette.tertiary.light,
                        theme.palette.quaternary.light,
                        theme.palette.quinary.light
                      ],
                      hoverBackgroundColor: [
                        theme.palette.primary.dark,
                        theme.palette.primary.dark,
                        theme.palette.primary.dark,
                        theme.palette.secondary.dark,
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
              {labels.slice(1, 5).map((label, index) => (
                <div key={label} className="px-6 flex flex-col items-center">
                  <Typography className="h4" color="textSecondary">
                    {label}
                  </Typography>
                  <Typography className="h2 font-300 py-8">
                    {chartDatasets[datasetId][0].data[index + 1]}
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

export default WidgetEducationChart;
