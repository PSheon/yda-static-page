import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/styles';
import { FuseAnimate } from '@fuse';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

import LoadingSpinner from 'app/main/shared/LoadingSpinner';
import DashboardBreadcrumbs from 'app/main/shared/DashboardBreadcrumbs';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: '9.6em',
    background:
      'linear-gradient(to bottom, ' +
      theme.palette.primary.dark +
      ' 20%, ' +
      theme.palette.primary.main +
      ' 90%, ' +
      theme.palette.background.default +
      ' 100%)'
  }
}));
const CHART_OPTIONS = {
  spanGaps: false,
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 32,
      left: 32,
      right: 32
    }
  },
  elements: {
    point: {
      radius: 4,
      borderWidth: 2,
      hoverRadius: 4,
      hoverBorderWidth: 2
    }
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false,
          tickMarkLength: 18
        },
        ticks: {
          fontColor: '#ffffff'
        }
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  plugins: {
    filler: {
      propagate: false
    },
    xLabelsOnTop: {
      active: true
    }
  }
};

function WidgetNewRegisteredUserHistory(props) {
  const mainThemeDark = useSelector(({ fuse }) => fuse.settings.mainThemeDark);
  const REGISTERED_USER_INFOS = useSelector(
    ({ adminDashboard }) => adminDashboard.newRegisteredUser
  );
  const verifiedRegisteredUserInfos = REGISTERED_USER_INFOS['verified'];
  const unVerifiedRegisteredUserInfos = REGISTERED_USER_INFOS['unVerified'];
  const chartLoading = REGISTERED_USER_INFOS['loading'];

  const classes = useStyles(props);
  const theme = useTheme();
  const [chartType, setChartType] = useState('verified');
  const [chartDatasets, setChartDatasets] = useState({
    verified: {
      male: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      diversity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      female: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      other: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    unVerified: {
      male: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      diversity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      female: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      other: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  });

  useEffect(() => {
    if (unVerifiedRegisteredUserInfos != null) {
      const NEW_DATA_SETS = {
        verified: verifiedRegisteredUserInfos,
        unVerified: unVerifiedRegisteredUserInfos
      };

      setChartDatasets(NEW_DATA_SETS);
    }
  }, [
    REGISTERED_USER_INFOS,
    unVerifiedRegisteredUserInfos,
    verifiedRegisteredUserInfos
  ]);

  return (
    <ThemeProvider theme={mainThemeDark}>
      <div className={classes.root}>
        <div className="container relative p-16 sm:p-24 flex flex-row justify-between items-center">
          <FuseAnimate delay={100}>
            <div className="flex-col">
              {/* <div className="flex items-center mb-16">
                <Icon className="text-18" color="action">
                  home
                </Icon>
                <Icon className="text-16" color="action">
                  chevron_right
                </Icon>
                <Typography color="textSecondary">統計報表</Typography>
              </div> */}
              <DashboardBreadcrumbs
                className="mb-16"
                dense
                pageNames={['統計報表']}
              />
              <Typography className="h2" color="textPrimary">
                {/* <LogoCryptoIcon TYPE={cryptoType} /> */}
                每月新加入會員
              </Typography>
              <Typography className="h5" color="textSecondary">
                依性別分類
              </Typography>
            </div>
          </FuseAnimate>

          <div className="flex flex-row items-center">
            {Object.keys(chartDatasets).map(key => (
              <Button
                key={key}
                className="py-8 px-12 rounded-full"
                size="small"
                onClick={() => setChartType(key)}
                disabled={key === chartType}
              >
                {key === 'verified' ? '已驗證身分' : '未驗證身分'}
              </Button>
            ))}
          </div>
        </div>
        <div className="container relative h-256 sm:h-288 pb-16 flex justify-center">
          {chartLoading ? (
            <LoadingSpinner width={128} height={128} />
          ) : (
            <Line
              data={{
                labels: [
                  '一月',
                  '二月',
                  '三月',
                  '四月',
                  '五月',
                  '六月',
                  '七月',
                  '八月',
                  '九月',
                  '十月',
                  '十一月',
                  '十二月'
                ],
                datasets: [
                  {
                    data: chartDatasets[chartType]['male'],
                    label: '男性',
                    fill: 'start',
                    borderColor: theme.palette.secondary.opacity,
                    backgroundColor: theme.palette.secondary.light,
                    pointBackgroundColor: theme.palette.secondary.main,
                    pointHoverBackgroundColor: theme.palette.secondary.main,
                    pointBorderColor: theme.palette.secondary.contrastText,
                    pointHoverBorderColor: theme.palette.secondary.contrastText
                  },
                  {
                    data: chartDatasets[chartType]['female'],
                    label: '女性',
                    fill: 'start',
                    borderColor: theme.palette.tertiary.opacity,
                    backgroundColor: theme.palette.tertiary.light,
                    pointBackgroundColor: theme.palette.tertiary.main,
                    pointHoverBackgroundColor: theme.palette.tertiary.main,
                    pointBorderColor: theme.palette.tertiary.contrastText,
                    pointHoverBorderColor: theme.palette.tertiary.contrastText
                  },
                  {
                    data: chartDatasets[chartType]['diversity'],
                    label: '多元性別',
                    fill: 'start',
                    borderColor: theme.palette.quaternary.opacity,
                    backgroundColor: theme.palette.quaternary.light,
                    pointBackgroundColor: theme.palette.quaternary.main,
                    pointHoverBackgroundColor: theme.palette.quaternary.main,
                    pointBorderColor: theme.palette.quaternary.contrastText,
                    pointHoverBorderColor: theme.palette.quaternary.contrastText
                  },
                  {
                    data: chartDatasets[chartType]['other'],
                    label: '未提供',
                    fill: 'start',
                    borderColor: theme.palette.quinary.opacity,
                    backgroundColor: theme.palette.quinary.light,
                    pointBackgroundColor: theme.palette.quinary.main,
                    pointHoverBackgroundColor: theme.palette.quinary.main,
                    pointBorderColor: theme.palette.quinary.contrastText,
                    pointHoverBorderColor: theme.palette.quinary.contrastText
                  }
                ]
              }}
              options={CHART_OPTIONS}
            />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

// export default React.memo(WidgetNewRegisteredUserHistory);
export default WidgetNewRegisteredUserHistory;
