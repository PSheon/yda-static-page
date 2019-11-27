import React from 'react';
import { FuseAnimate } from '@fuse';
import { useSelector } from 'react-redux';
import {
  Paper,
  Tooltip,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  Avatar
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import { avatarNameToPathConverter } from 'app/utils';
import LoadingSpinnerOverlay from 'app/main/shared/LoadingSpinnerOverlay';

function renderPaddingReviews(length) {
  let countToGenerate = length;

  if (countToGenerate && countToGenerate > 0) {
    return Array.from({ length }).map((item, index) => (
      <TableRow
        key={`padding-${index}`}
        hover
        className="cursor-pointer relative"
      >
        <TableCell colSpan={5} component="th" scope="row">
          <div className="h-40" />
        </TableCell>
      </TableRow>
    ));
  } else {
    return [];
  }
}

function WidgetEventReviewTable() {
  const REVIEW_REDUCER = useSelector(
    ({ adminDashboard }) => adminDashboard.reviewLogs
  );
  const REVIEW_LOGS = REVIEW_REDUCER.docs;
  const REVIEW_LOGS_COUNT = REVIEW_LOGS.length;
  const isSyncing = REVIEW_REDUCER.loading;

  function tooltipTitle(applicantDetail) {
    return (
      <>
        <Typography color="inherit">
          名稱：{applicantDetail.displayName}
        </Typography>
        <Typography color="inherit">信箱：{applicantDetail.email}</Typography>
      </>
    );
  }

  return (
    <FuseAnimate animation="transition.slideUpIn" delay={200}>
      <Paper className="w-full rounded-8 shadow-md border-1 hover:shadow-lg">
        <div className="flex items-center justify-between px-16 h-64 border-b-none">
          <Typography className="text-16">
            最近 {REVIEW_LOGS_COUNT} 筆活動回饋
          </Typography>
        </div>
        <div className="table-responsive">
          {isSyncing && <LoadingSpinnerOverlay width="64" height="64" />}
          <Table className="w-full min-w-full">
            <TableHead>
              <TableRow>
                <TableCell className="whitespace-no-wrap">參與者</TableCell>
                <TableCell className="whitespace-no-wrap">
                  給予課程的評價
                </TableCell>
                <TableCell className="whitespace-no-wrap">
                  給予講師內容的評價
                </TableCell>
                <TableCell className="whitespace-no-wrap">
                  給予講師表達的評價
                </TableCell>
                <TableCell className="whitespace-no-wrap">
                  給予課程的回饋
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {REVIEW_LOGS.map(row => (
                <TableRow
                  key={row._id}
                  hover
                  className="cursor-pointer relative"
                >
                  <TableCell component="th" scope="row" className="pl-16 pr-0">
                    <Tooltip
                      title={tooltipTitle(row.applicant)}
                      placement="top"
                    >
                      <Avatar
                        src={avatarNameToPathConverter(row.applicant.photoURL)}
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="flex justify-center items-center">
                      <Rating value={row['eventStars']} size="small" readOnly />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="flex justify-center items-center">
                      <Rating
                        value={row['speakerContentStars']}
                        size="small"
                        readOnly
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="flex justify-center items-center">
                      <Rating
                        value={row['speakerExpressionStars']}
                        size="small"
                        readOnly
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row" className="truncate">
                    <Typography className="inline text-11 font-500 px-8 py-4 rounded-4">
                      {row['eventComments']}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
              {renderPaddingReviews(9 - REVIEW_LOGS_COUNT)}
            </TableBody>
          </Table>
        </div>
      </Paper>
    </FuseAnimate>
  );
}

export default WidgetEventReviewTable;
