import _ from 'lodash';

export * from './converter';
export * from './exporter';
export * from './event';
export * from './appointment';
export * from './reduceState';
export * from './stockChart';
export * from './statisticChart';
export * from './adminDashboard';
export * from './borrowDashboard';

export const exchangesExtractor = (
  EXCHANGES,
  { onlyTradable = false, onlyImportable = false }
) => {
  let exchanges = Object.assign({}, EXCHANGES);

  if (_.isEmpty(exchanges)) return false;

  if (onlyTradable) {
    _.each(exchanges, (e, name) => {
      if (!e.tradable) delete exchanges[name];
    });
  }

  if (onlyImportable) {
    _.each(exchanges, (e, name) => {
      if (!e.importable) delete exchanges[name];
    });
  }

  return exchanges;
};

export const userDetailChecker = userDetail => {
  return (
    !!userDetail.fullName &&
    !!userDetail.bob &&
    !!userDetail.gender &&
    !!userDetail.education &&
    !!userDetail.schoolName &&
    !!userDetail.departmentName &&
    !!userDetail.employmentStatus &&
    !!userDetail.phone &&
    !!userDetail.city &&
    !!userDetail.heardFrom &&
    !!userDetail.haveParticipated
  );
};

export const preQuestionFormChecker = (form, requiredList) => {
  if (!requiredList || requiredList.length === 0) {
    return true;
  } else {
    let tempStatus = true;
    requiredList.forEach(item => {
      if (!form[item]) {
        tempStatus = false;
      }
    });

    return tempStatus;
  }
};
