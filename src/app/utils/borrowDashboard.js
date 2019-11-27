export const countingWaitingAppointmentLogs = ({
  CONSULTING_LOGS,
  BORROW_LOGS,
  GUIDE_LOGS
}) => {
  const consultingLogs = CONSULTING_LOGS.docs;
  const borrowLogs = BORROW_LOGS.docs;
  const guideLogs = GUIDE_LOGS.docs;
  const totalWaitingAppointmentLogs = consultingLogs
    .concat(borrowLogs)
    .concat(guideLogs)
    .filter(
      log =>
        log.appointmentStatus === 'pending' ||
        log.appointmentStatus === 'queueing'
    );

  return totalWaitingAppointmentLogs.length;
};
