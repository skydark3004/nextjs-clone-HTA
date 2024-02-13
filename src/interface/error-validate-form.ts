/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IErrorValidateForm {
  errorFields: IErrorField[];
  outOfDate: false;
  values: any;
}

interface IErrorField {
  errors: [string];
  name: [string];
  warnings: [];
}
