export const consultingFormChecker = form =>
  !!form.consultingIntention &&
  !!form.consultingTopic &&
  !!form.consultingExpectation &&
  !!form.consultingHaveParticipated &&
  !!form.consultingHeardFrom;

export const borrowFormChecker = form =>
  !!form.institutionName &&
  !!form.institutionAddress &&
  !!form.borrowingDate &&
  !!form.borrowingTimeSlot &&
  !!form.borrowingNumber &&
  !!form.borrowingSpace &&
  !!form.borrowingIntention &&
  !!form.borrowingHeardFrom;

export const guideFormChecker = form =>
  !!form.institutionName &&
  !!form.institutionAddress &&
  !!form.guideDate &&
  !!form.guideTimeSlot &&
  !!form.guideNumber &&
  !!form.guideIntention &&
  !!form.guideHeardFrom;
