/* Admin Dashboard */
/* New Registered User History Chart */
export const registeredUsersExtracter = registeredUserInfos => {
  // let REGISTERED_USER_HISTORY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let REGISTERED_USER_HISTORY = {
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
  };

  if (registeredUserInfos.length) {
    Object.values(registeredUserInfos).forEach(user => {
      const { _id, newUsersCount } = user;
      const { verified, gender, createdMonth } = _id;

      if (verified === true) {
        if (gender === null) {
          REGISTERED_USER_HISTORY['verified']['other'][
            createdMonth - 1
          ] = newUsersCount;
        } else {
          REGISTERED_USER_HISTORY['verified'][gender][
            createdMonth - 1
          ] = newUsersCount;
        }
      } else {
        if (gender === null) {
          REGISTERED_USER_HISTORY['unVerified']['other'][
            createdMonth - 1
          ] = newUsersCount;
        } else {
          REGISTERED_USER_HISTORY['unVerified'][gender][
            createdMonth - 1
          ] = newUsersCount;
        }
      }
    });
  }

  return REGISTERED_USER_HISTORY;
};

/* Extract gender stastic datasets for event dashboard */
export const applicantGenderExtractor = activityLogs => {
  const DEFAULT_GENDER_DATASETS = {
    /* 男性 > 多元性別 > 女性 */
    活動參與者: [
      {
        key: 1,
        data: [50, 50, 50],
        change: [-0.6, 0.7, 0.1]
      }
    ],
    所有報名者: [
      {
        key: 2,
        data: [50, 50, 50],
        change: [-2.3, 0.3, -0.2]
      }
    ]
  };

  if (!activityLogs || !Array.isArray(activityLogs)) {
    return DEFAULT_GENDER_DATASETS;
  } else {
    // Total
    let totalMaleCount = 0;
    let totalDiversityCount = 0;
    let totalFemaleCount = 0;
    // Only Succeeded
    let maleCount = 0;
    let diversityCount = 0;
    let femaleCount = 0;

    activityLogs.forEach(activityLog => {
      const hasSucceeded = activityLog.registrationStatus === 'succeeded';
      const applicantGender = activityLog.applicant.gender;

      if (hasSucceeded) {
        switch (applicantGender) {
          case 'male':
            totalMaleCount++;
            maleCount++;
            break;
          case 'diversity':
            totalDiversityCount++;
            diversityCount++;
            break;
          case 'female':
          default:
            totalFemaleCount++;
            femaleCount++;
            break;
        }
      } else {
        switch (applicantGender) {
          case 'male':
            totalMaleCount++;
            break;
          case 'diversity':
            totalDiversityCount++;
            break;
          case 'female':
          default:
            totalFemaleCount++;
            break;
        }
      }
    });

    return {
      /* 男性 > 多元性別 > 女性 */
      活動參與者: [
        {
          data: [maleCount, diversityCount, femaleCount],
          change: [-0.6, 0.7, 0.1]
        }
      ],
      所有報名者: [
        {
          data: [totalMaleCount, totalDiversityCount, totalFemaleCount],
          change: [-2.3, 0.3, -0.2]
        }
      ]
    };
  }
};

/* Extract Education stastic datasets */
export const applicantEducationExtractor = activityLogs => {
  const DEFAULT_EDUCATION_DATASETS = {
    /* 國中 > 高中 > 高職 > 專科 > 大學(包含四技、二技) > 研究所 > 其他 */
    /* 'middle', 'high', 'vocational', 'faculty', 'bachelor', 'institute', 'other' */
    活動參與者: [
      {
        label: '男性',
        data: [50, 50, 50, 50, 50, 50, 50],
        fill: 'start'
      },
      {
        label: '多元性別',
        data: [50, 50, 50, 50, 50, 50, 50],
        fill: 'start'
      },
      {
        label: '女性',
        data: [50, 50, 50, 50, 50, 50, 50],
        fill: 'start'
      }
    ],
    所有報名者: [
      {
        label: '男性',
        data: [50, 50, 50, 50, 50, 50, 50],
        fill: 'start'
      },
      {
        label: '多元性別',
        data: [50, 50, 50, 50, 50, 50, 50],
        fill: 'start'
      },
      {
        label: '女性',
        data: [50, 50, 50, 50, 50, 50, 50],
        fill: 'start'
      }
    ]
  };

  if (!activityLogs || !Array.isArray(activityLogs)) {
    return DEFAULT_EDUCATION_DATASETS;
  } else {
    // Total
    let totalMaleEducationCount = [0, 0, 0, 0, 0, 0, 0];
    let totalDiversityEducationCount = [0, 0, 0, 0, 0, 0, 0];
    let totalFemaleEducationCount = [0, 0, 0, 0, 0, 0, 0];
    // Only Succeeded
    let maleEducationCount = [0, 0, 0, 0, 0, 0, 0];
    let diversityEducationCount = [0, 0, 0, 0, 0, 0, 0];
    let femaleEducationCount = [0, 0, 0, 0, 0, 0, 0];

    activityLogs.forEach(activityLog => {
      const hasSucceeded = activityLog.registrationStatus === 'succeeded';
      const applicantGender = activityLog.applicant.gender;
      const applicantEducation = activityLog.applicant.education;

      if (hasSucceeded) {
        if (applicantGender === 'male') {
          switch (applicantEducation) {
            case 'middle':
              totalMaleEducationCount[0]++;
              maleEducationCount[0]++;
              break;
            case 'high':
              totalMaleEducationCount[1]++;
              maleEducationCount[1]++;
              break;
            case 'vocational':
              totalMaleEducationCount[2]++;
              maleEducationCount[2]++;
              break;
            case 'faculty':
              totalMaleEducationCount[3]++;
              maleEducationCount[3]++;
              break;
            case 'bachelor':
              totalMaleEducationCount[4]++;
              maleEducationCount[4]++;
              break;
            case 'institute':
              totalMaleEducationCount[5]++;
              maleEducationCount[5]++;
              break;
            case 'other':
            default:
              totalMaleEducationCount[6]++;
              maleEducationCount[6]++;
              break;
          }
        } else if (applicantGender === 'diversity') {
          switch (applicantEducation) {
            case 'middle':
              totalDiversityEducationCount[0]++;
              diversityEducationCount[0]++;
              break;
            case 'high':
              totalDiversityEducationCount[1]++;
              diversityEducationCount[1]++;
              break;
            case 'vocational':
              totalDiversityEducationCount[2]++;
              diversityEducationCount[2]++;
              break;
            case 'faculty':
              totalDiversityEducationCount[3]++;
              diversityEducationCount[3]++;
              break;
            case 'bachelor':
              totalDiversityEducationCount[4]++;
              diversityEducationCount[4]++;
              break;
            case 'institute':
              totalDiversityEducationCount[5]++;
              diversityEducationCount[5]++;
              break;
            case 'other':
            default:
              totalDiversityEducationCount[6]++;
              diversityEducationCount[6]++;
              break;
          }
        } else {
          switch (applicantEducation) {
            case 'middle':
              totalFemaleEducationCount[0]++;
              femaleEducationCount[0]++;
              break;
            case 'high':
              totalFemaleEducationCount[1]++;
              femaleEducationCount[1]++;
              break;
            case 'vocational':
              totalFemaleEducationCount[2]++;
              femaleEducationCount[2]++;
              break;
            case 'faculty':
              totalFemaleEducationCount[3]++;
              femaleEducationCount[3]++;
              break;
            case 'bachelor':
              totalFemaleEducationCount[4]++;
              femaleEducationCount[4]++;
              break;
            case 'institute':
              totalFemaleEducationCount[5]++;
              femaleEducationCount[5]++;
              break;
            case 'other':
            default:
              totalFemaleEducationCount[6]++;
              femaleEducationCount[6]++;
              break;
          }
        }
      } else {
        if (applicantGender === 'male') {
          switch (applicantEducation) {
            case 'middle':
              totalMaleEducationCount[0]++;
              break;
            case 'high':
              totalMaleEducationCount[1]++;
              break;
            case 'vocational':
              totalMaleEducationCount[2]++;
              break;
            case 'faculty':
              totalMaleEducationCount[3]++;
              break;
            case 'bachelor':
              totalMaleEducationCount[4]++;
              break;
            case 'institute':
              totalMaleEducationCount[5]++;
              break;
            case 'other':
            default:
              totalMaleEducationCount[6]++;
              break;
          }
        } else if (applicantGender === 'diversity') {
          switch (applicantEducation) {
            case 'middle':
              totalDiversityEducationCount[0]++;
              break;
            case 'high':
              totalDiversityEducationCount[1]++;
              break;
            case 'vocational':
              totalDiversityEducationCount[2]++;
              break;
            case 'faculty':
              totalDiversityEducationCount[3]++;
              break;
            case 'bachelor':
              totalDiversityEducationCount[4]++;
              break;
            case 'institute':
              totalDiversityEducationCount[5]++;
              break;
            case 'other':
            default:
              totalDiversityEducationCount[6]++;
              break;
          }
        } else {
          switch (applicantEducation) {
            case 'middle':
              totalFemaleEducationCount[0]++;
              break;
            case 'high':
              totalFemaleEducationCount[1]++;
              break;
            case 'vocational':
              totalFemaleEducationCount[2]++;
              break;
            case 'faculty':
              totalFemaleEducationCount[3]++;
              break;
            case 'bachelor':
              totalFemaleEducationCount[4]++;
              break;
            case 'institute':
              totalFemaleEducationCount[5]++;
              break;
            case 'other':
            default:
              totalFemaleEducationCount[6]++;
              break;
          }
        }
      }
    });

    return {
      /* 男性 > 多元性別 > 女性 */
      活動參與者: [
        {
          label: '男性',
          data: maleEducationCount,
          fill: 'start'
        },
        {
          label: '多元性別',
          data: diversityEducationCount,
          fill: 'start'
        },
        {
          label: '女性',
          data: femaleEducationCount,
          fill: 'start'
        }
      ],
      所有報名者: [
        {
          label: '男性',
          data: totalMaleEducationCount,
          fill: 'start'
        },
        {
          label: '多元性別',
          data: totalDiversityEducationCount,
          fill: 'start'
        },
        {
          label: '女性',
          data: totalFemaleEducationCount,
          fill: 'start'
        }
      ]
    };
  }
};
