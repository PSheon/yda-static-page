import moment from 'moment';

export const eventReviewStarsExtractot = (eventActivityLogs = []) => {
  let validCount = 0;
  let eventStarsCount = 0;
  let speakerStarsCount = 0;

  eventActivityLogs.forEach(log => {
    if (log.eventStars && log.speakerStars) {
      validCount++;
      eventStarsCount += log.eventStars;
      speakerStarsCount += log.speakerStars;
    }
  });

  if (validCount === 0) validCount = 1;

  return {
    eventStarsAvg: (eventStarsCount / validCount).toFixed(1),
    speakerStarsAvg: (speakerStarsCount / validCount).toFixed(1)
  };
};

export const eventDateStatus = (
  enrollStartDate,
  enrollEndDate,
  startDate,
  endDate
) => {
  const now = moment();
  const enrollStart = moment(enrollStartDate);
  const enrollEnd = moment(enrollEndDate);
  const start = moment(startDate);
  const end = moment(endDate);

  if (now.isBefore(enrollStart)) {
    /* 報名開始倒數天數 */
    return {
      statusCode: 0,
      humanize: `距離報名開始還有 ${enrollStart.diff(now, 'days')} 天`,
      label: '活動預告中'
    };
  } else if (now.isBefore(enrollEnd)) {
    /* 報名截止倒數天數 */
    return {
      statusCode: 1,
      humanize: `距離報名截止還有 ${enrollEnd.diff(now, 'days')} 天`,
      label: '活動報名中'
    };
  } else if (now.isBetween(enrollEnd, start)) {
    /* 活動開始倒數天數 */
    return {
      statusCode: 2,
      humanize: `距離活動開始還有 ${start.diff(now, 'days')} 天`,
      label: '活動準備中'
    };
  } else if (now.isBetween(start, end)) {
    /* 活動進行中 */
    return {
      statusCode: 3,
      humanize: `活動進行中`,
      label: '活動進行中'
    };
  } else {
    /* 活動已結束 */
    return {
      statusCode: 4,
      humanize: '活動已經結束',
      label: '活動已經結束'
    };
  }
};

export const permitToSelfCancel = eventDetail => {
  const now = moment();
  const start = moment(eventDetail.startDate);

  return start.diff(now, 'days', true) >= 3;
};
