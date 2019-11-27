import moment from 'moment';

import * as converter from './converter';

export const consultingAppointmentListToCsvConverter = originalJson =>
  originalJson.map(appointmentDetail => ({
    申請者編號: appointmentDetail.applicant['_id'],
    申請者全名: appointmentDetail.applicant['fullName'],
    申請者信箱: appointmentDetail.applicant['email'],
    申請者電話: appointmentDetail.applicant['phone'],

    預約日期: moment(appointmentDetail['consultingDate']).format('YYYY-MM-DD'),
    預約時段: appointmentDetail['consultingTimeSlot'],
    預約話題: appointmentDetail['consultingTopic'],
    預約意圖: appointmentDetail['consultingIntention'],
    諮詢期待: appointmentDetail['consultingExpectation'],

    簽到狀況: appointmentDetail['checkinStatus'] ? '已簽到' : '未簽到',
    預約狀態: appointmentDetail['appointmentStatus']
  }));

export const borrowAppointmentListToCsvConverter = originalJson =>
  originalJson.map(appointmentDetail => ({
    借用者編號: appointmentDetail.applicant['_id'],
    借用者全名: appointmentDetail.applicant['fullName'],
    借用者信箱: appointmentDetail.applicant['email'],
    借用者電話: appointmentDetail.applicant['phone'],

    借用機關: appointmentDetail['institutionName'],
    借用機關地址: appointmentDetail['institutionAddress'],

    借用日期: moment(appointmentDetail['borrowingDate']).format('YYYY-MM-DD'),
    借用時段: appointmentDetail['borrowingTimeSlot'],
    借用場域: appointmentDetail['borrowingSpace'],
    借用人數: appointmentDetail['borrowingNumber'],
    借用意圖: appointmentDetail['borrowingIntention'],
    從何處得知: appointmentDetail['borrowingHeardFrom'],

    簽到狀況: appointmentDetail['checkinStatus'] ? '已簽到' : '未簽到',
    借用狀態: appointmentDetail['appointmentStatus']
  }));

export const guideAppointmentListToCsvConverter = originalJson =>
  originalJson.map(appointmentDetail => ({
    申請者編號: appointmentDetail.applicant['_id'],
    申請者全名: appointmentDetail.applicant['fullName'],
    申請者信箱: appointmentDetail.applicant['email'],
    申請者電話: appointmentDetail.applicant['phone'],

    借用機關: appointmentDetail['institutionName'],
    借用機關地址: appointmentDetail['institutionAddress'],

    借用日期: moment(appointmentDetail['guideDate']).format('YYYY-MM-DD'),
    借用時段: appointmentDetail['guideTimeSlot'],
    借用人數: appointmentDetail['guideNumber'],
    借用意圖: appointmentDetail['guideIntention'],

    簽到狀況: appointmentDetail['checkinStatus'] ? '已簽到' : '未簽到',
    借用狀態: appointmentDetail['appointmentStatus']
  }));

export const userListToCsvConverter = originalJson =>
  originalJson.map(userDetail => ({
    會員編號: userDetail['_id'],
    顯示名稱: userDetail['displayName'],
    全名: userDetail['fullName'] || '未填寫',
    性別: userDetail['gender']
      ? converter.genderConverter(userDetail['gender'])
      : '未填寫',
    生日: userDetail['bob']
      ? moment(userDetail['bob']).format('YYYY-MM-DD')
      : '未填寫',
    信箱: userDetail['email'],
    電話: userDetail['phone'] || '未填寫',
    居住地: userDetail['city'] || '未填寫',
    地址: userDetail['postAddress'] || '未填寫',

    '連結 Google 帳號': userDetail['google']
      ? userDetail.google['displayName']
      : '未綁定',
    '連結 Facebook 帳號': userDetail['facebook']
      ? userDetail.facebook['displayName']
      : '未綁定',

    教育程度: userDetail['education']
      ? converter.educationConverter(userDetail['education'])
      : '未填寫',
    學校名稱: userDetail['schoolName'] || '未填寫',
    科系類別: userDetail['departmentName']
      ? converter.departmentNameConverter(userDetail['departmentName'])
      : '未填寫',
    身分狀態: userDetail['employmentStatus']
      ? converter.statusConverter(userDetail['employmentStatus'])
      : '未填寫',

    任職企業: userDetail['companyName'] || '未填寫',
    任職部門: userDetail['serviceDepartment'] || '未填寫',
    職稱: userDetail['jobTitle'] || '未填寫',

    啟用狀態: userDetail['active'] ? '啟用中' : '未啟用',
    身分驗證: userDetail['verified'] ? '通過' : '未通過'
  }));

export const eventLogToCsvExporter = originalJson =>
  originalJson.map(userEventLog => {
    return {
      隊列編號:
        userEventLog['queueOrder'] > 0
          ? userEventLog['queueOrder']
          : '等待同意中',
      申請人全名: userEventLog.applicant['fullName'],
      申請人電話: userEventLog.applicant['phone'],
      申請人信箱: userEventLog.applicant['email'],
      想參加本次活動的原因: userEventLog['participateReason'] || '未填寫',
      如何得知本次活動訊息: userEventLog['participantHeardFrom'] || '未填寫',
      學員期待: userEventLog['participantExpectation'] || '未填寫',
      身分證字號: userEventLog['participantID'] || '未填寫',
      是否有管理職: userEventLog['participantIsManager'] || '未填寫',
      參加中午餐敘與否: userEventLog['participateLunch'] || '未填寫',
      葷素: userEventLog['lunchType'] || '未填寫',
      簽到狀況: userEventLog['checkinStatus'] ? '已簽到' : '未簽到',

      給予活動評價: userEventLog['eventStars'] || '尚未給予評價',
      給予講師整體評價: userEventLog['speakerStars'] || '尚未給予評價',
      給予講師表達方式評價:
        userEventLog['speakerExpressionStars'] || '尚未給予評價',
      給予講師內容評價: userEventLog['speakerContentStars'] || '尚未給予評價',
      給予活動評論: userEventLog['eventComments'] || '尚未給予評論'
    };
  });
