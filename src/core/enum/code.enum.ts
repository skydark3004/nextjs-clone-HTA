// 1. membership
// 2. combo
// 3. renting - thuê
// 4. retail - bán lẻ
// 5. Personal trainer - PT
export enum EnumCategoryCode {
  MEMBERSHIP = 'MEMBERSHIP',
  COMBO = 'COMBO',
  RENTING = 'RENTING',
  RETAIL = 'RETAIL',
  PERSONAL_TRAINER = 'PERSONAL_TRAINER',
}

export enum EnumRoleCode {
  ADMIN = 'ADMIN',
  SUPPER_ADMIN = 'SUPPER_ADMIN',
  CUSTOMER = 'CUSTOMER',
  PT = 'PT',
  EMPLOYEE = 'EMPLOYEE',
}

export enum EnumTimeKeepingStatusCode {
  SUCCESS = 'SUCCESS',
  CHECK_IN_LATE = 'CHECK_IN_LATE',
  CHECK_OUT_SOON = 'CHECK_OUT_SOON',
  CHECK_OUT_LATE = 'CHECK_OUT_LATE',
}

export enum EnumEmitCode {
  RE_INIT_JOB_NOTIFY_TIMEKEEPING = 'RE_INIT_JOB_NOTIFY_TIMEKEEPING',
}
