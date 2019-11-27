/* Extract gender stastic datasets for admin dashboard */
export const userGenderExtractor = originList => {
  const DEFAULT_GENDER_DATASETS = {
    /* 男性 > 多元性別 > 女性 > 未提供 */
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

  if (!originList || !Array.isArray(originList)) {
    return DEFAULT_GENDER_DATASETS;
  } else {
    // verified
    let verifiedMaleCount = 0;
    let verifiedDiversityCount = 0;
    let verifiedFemaleCount = 0;
    let verifiedNullCount = 0;
    // unVerified
    let unVerifiedMaleCount = 0;
    let unVerifiedDiversityCount = 0;
    let unVerifiedFemaleCount = 0;
    let unVerifiedNullCount = 0;

    originList.forEach(list => {
      const hasVerified = list._id.verified === true;
      const applicantGender = list._id.gender;

      if (hasVerified) {
        switch (applicantGender) {
          case 'male':
            verifiedMaleCount = list.usersCount;
            break;
          case 'diversity':
            verifiedDiversityCount = list.usersCount;
            break;
          case 'female':
            verifiedFemaleCount = list.usersCount;
            break;
          default:
            verifiedNullCount = list.usersCount;
            break;
        }
      } else {
        switch (applicantGender) {
          case 'male':
            unVerifiedMaleCount = list.usersCount;
            break;
          case 'diversity':
            unVerifiedDiversityCount = list.usersCount;
            break;
          case 'female':
            unVerifiedFemaleCount = list.usersCount;
            break;
          default:
            unVerifiedNullCount = list.usersCount;
            break;
        }
      }
    });

    return {
      /* 男性 > 多元性別 > 女性 > 未提供 */
      verified: [
        {
          data: [
            verifiedMaleCount,
            verifiedDiversityCount,
            verifiedFemaleCount,
            verifiedNullCount
          ],
          change: [-0.6, 0.7, 0.1, 0]
        }
      ],
      unVerified: [
        {
          data: [
            unVerifiedMaleCount,
            unVerifiedDiversityCount,
            unVerifiedFemaleCount,
            unVerifiedNullCount
          ],
          change: [-2.3, 0.3, -0.2, 0]
        }
      ]
    };
  }
};

/* Extract employment status stastic datasets for admin dashboard */
export const userEmploymentStatusExtractor = originList => {
  const DEFAULT_EMPLOYMENT_STATUS_DATASETS = {
    /* 學生 > 在職中 > 待業中 > 其他 */
    /* 'student', 'employed', 'unemployed', 'other */
    verified: [
      {
        data: [50, 50, 50, 50, 50]
      }
    ],
    unVerified: [
      {
        data: [50, 50, 50, 50, 50]
      }
    ]
  };

  if (!originList || !Array.isArray(originList)) {
    return DEFAULT_EMPLOYMENT_STATUS_DATASETS;
  } else {
    // verified
    let verifiedCountArray = [0, 0, 0, 0, 0];
    // unVerified
    let unVerifiedCountArray = [0, 0, 0, 0, 0];

    originList.forEach(list => {
      const applicantEmploymentStatus = list._id.employmentStatus;

      switch (applicantEmploymentStatus) {
        case 'student':
          verifiedCountArray[0]++;
          break;
        case 'employed':
          verifiedCountArray[1]++;
          break;
        case 'unemployed':
          verifiedCountArray[2]++;
          break;
        case 'other':
          verifiedCountArray[3]++;
          break;
        default:
          verifiedCountArray[4]++;
          break;
      }
    });

    return {
      /* 學生 > 在職中 > 待業中 > 其他 */
      verified: [
        {
          data: verifiedCountArray
        }
      ],
      unVerified: [
        {
          data: unVerifiedCountArray
        }
      ]
    };
  }
};

/* Extract age period stastic datasets for admin dashboard */
export const userAgePeriodExtractor = originList => {
  const DEFAULT_AGE_PERIOD_DATASETS = {
    /* 15 - 20 > 20 - 25 > 25 - 30 > 30 - 35 > 未提供 */
    verified: [
      {
        data: [50, 50, 50, 50, 50]
      }
    ],
    unVerified: [
      {
        data: [50, 50, 50, 50, 50]
      }
    ]
  };

  if (!originList || !Array.isArray(originList)) {
    return DEFAULT_AGE_PERIOD_DATASETS;
  } else {
    // verified
    let verifiedCountArray = [0, 0, 0, 0, 0];
    // unVerified
    let unVerifiedCountArray = [0, 0, 0, 0, 0];

    originList.forEach(list => {
      const applicantAgePeriod = list._id;

      switch (applicantAgePeriod) {
        case 15:
          verifiedCountArray[0]++;
          break;
        case 20:
          verifiedCountArray[1]++;
          break;
        case 25:
          verifiedCountArray[2]++;
          break;
        case 30:
          verifiedCountArray[3]++;
          break;
        default:
          verifiedCountArray[4]++;
          break;
      }
    });

    return {
      /* 國中 > 高中 > 大專 > 大學 > 研究所 > 未提供 */
      verified: [
        {
          data: verifiedCountArray
        }
      ],
      unVerified: [
        {
          data: unVerifiedCountArray
        }
      ]
    };
  }
};

/* Extract education stastic datasets for admin dashboard */
export const userEducationExtractor = originList => {
  const DEFAULT_EDUCATION_DATASETS = {
    /* 國中 > 高中 > 高職 > 專科 > 大學(包含四技、二技) > 研究所 > 其他 > 未提供 */
    /* 'middle', 'high', 'vocational', 'faculty', 'bachelor', 'institute', 'other' */
    verified: [
      {
        data: [50, 50, 50, 50, 50, 50, 50, 50]
      }
    ],
    unVerified: [
      {
        data: [50, 50, 50, 50, 50, 50, 50, 50]
      }
    ]
  };

  if (!originList || !Array.isArray(originList)) {
    return DEFAULT_EDUCATION_DATASETS;
  } else {
    // verified
    let verifiedCountArray = [0, 0, 0, 0, 0, 0, 0, 0];
    // unVerified
    let unVerifiedCountArray = [0, 0, 0, 0, 0, 0, 0, 0];

    originList.forEach(list => {
      const applicantEducation = list._id.education;

      switch (applicantEducation) {
        case 'middle':
          verifiedCountArray[0]++;
          break;
        case 'high':
          verifiedCountArray[1]++;
          break;
        case 'vocational':
          verifiedCountArray[2]++;
          break;
        case 'faculty':
          verifiedCountArray[3]++;
          break;
        case 'bachelor':
          verifiedCountArray[4]++;
          break;
        case 'institute':
          verifiedCountArray[5]++;
          break;
        case 'other':
          verifiedCountArray[6]++;
          break;
        default:
          verifiedCountArray[7]++;
          break;
      }
    });

    return {
      /* 國中 > 高中 > 高職 > 專科 > 大學(包含四技、二技) > 研究所 > 其他 > 未提供 */
      verified: [
        {
          data: verifiedCountArray
        }
      ],
      unVerified: [
        {
          data: unVerifiedCountArray
        }
      ]
    };
  }
};

/* Extract heard from stastic datasets for admin dashboard */
export const userHeardFromExtractor = originList => {
  const DEFAULT_HEARD_FROM_DATASETS = {
    /*  
      新聞報導 > 
      電台廣播 > 
      YS臉書 > 
      YS官網 > 
      台灣就業通網站連結 > 
      校園徵才博覽會 > 
      校園講座 > 
      收到DM > 
      收到Email活動通知 > 
      親友介紹 > 
      其他 >
      未提供
    */
    verified: [
      {
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
      }
    ],
    unVerified: [
      {
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
      }
    ]
  };

  if (!originList || !Array.isArray(originList)) {
    return DEFAULT_HEARD_FROM_DATASETS;
  } else {
    // verified
    let verifiedCountArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // unVerified
    let unVerifiedCountArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    originList.forEach(list => {
      const applicantHeardFrom = list._id.heardFrom;

      switch (applicantHeardFrom) {
        case '新聞報導':
          verifiedCountArray[0]++;
          break;
        case '電台廣播':
          verifiedCountArray[1]++;
          break;
        case 'YS臉書':
          verifiedCountArray[2]++;
          break;
        case 'YS官網':
          verifiedCountArray[3]++;
          break;
        case '台灣就業通網站連結':
          verifiedCountArray[4]++;
          break;
        case '校園徵才博覽會':
          verifiedCountArray[5]++;
          break;
        case '校園講座':
          verifiedCountArray[6]++;
          break;
        case '收到DM':
          verifiedCountArray[7]++;
          break;
        case '收到Email活動通知':
          verifiedCountArray[8]++;
          break;
        case '親友介紹':
          verifiedCountArray[9]++;
          break;
        case '其他':
          verifiedCountArray[10]++;
          break;
        default:
          verifiedCountArray[11]++;
          break;
      }
    });

    return {
      verified: [
        {
          data: verifiedCountArray
        }
      ],
      unVerified: [
        {
          data: unVerifiedCountArray
        }
      ]
    };
  }
};
