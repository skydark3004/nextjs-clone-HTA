export enum EnumBookingType {
  PERSONAL_TRAINER = 'PERSONAL_TRAINER',
  CLASSROOM = 'CLASSROOM',
}

export enum EnumScheduleType {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
}

export enum EnumCategoryType {
  PRODUCT = 'PRODUCT',
  ARTICLE = 'ARTICLE',
}

export enum EnumActivityHistoryType {
  CUSTOMER = 'CUSTOMER',
  PERSONAL_TRAINER = 'PERSONAL_TRAINER',
  EMPLOYEE = 'EMPLOYEE',
}

export enum EnumTokenType {
  ACCESS_TOKEN = 'ACCESS_TOKEN',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
}

export enum EnumRentingType {
  POST_PAID = 'POST_PAID',
  PRE_PAID = 'PRE_PAID',
}

export enum EnumConfigType {
  WIFI = 'WIFI',
}

export enum EnumTimeKeepingType {
  CUSTOMER = 'CUSTOMER',
  PT = 'PT',
  EMPLOYEE = 'EMPLOYEE',
}

export enum EnumCheckInOutType {
  CHECKIN = 'CHECKIN',
  CHECKOUT = 'CHECKOUT',
}

export enum EnumOffConfigType {
  RESET_BY_YEAR = 'RESET_BY_YEAR',
  ACCUMULATION = 'ACCUMULATION',
}

export enum EnumBranchType {
  HEAD_OFFICE = 'HEAD_OFFICE',
  BRANCH = 'BRANCH',
}

export enum EnumRoundTypeOfCompany {
  ROUND_UP = 'ROUND_UP',
  ROUND_DOWN = 'ROUND_DOWN',
}

export enum EnumSubtractFromSalaryType {
  BHXH = 'BHXH',
  BHYT = 'BHYT',
  TNCN = 'TNCN',
  UNION = 'UNION', // công đoàn
}

export enum EnumColumnType {
  SYSTEM = 'SYSTEM',
  CUSTOM = 'CUSTOM',
  OTHER_SALARY = 'OTHER_SALARY',
}

// loại nghỉ của mỗi ngày
export enum EnumTimeOffType {
  HALF_SHIFT = 'HALF_SHIFT', // nửa ca
  FULL_SHIFT = 'FULL_SHIFT', // nguyên ca
  MANY_DAYS = 'MANY_DAYS', // nhiều ngày
}

// loại nghỉ phép
export enum EnumAbsenceType {
  OFF_WITH_PAY = 'OFF_WITH_PAY', // nghỉ có phép
  OFF_WITHOUT_PAY = 'OFF_WITHOUT_PAY', // nghỉ không phép.
  OFF_WITH_MARRY = 'OFF_WITH_MARRY', // đám cưới
  OFF_WITH_SOMEONE_DIE = 'OFF_WITH_SOMEONE_DIE', // đám ma
}
