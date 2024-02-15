import { IErrorValidateForm } from '@/interface/error-validate-form';
import { FormInstance } from 'antd/es/form/Form';

export const isValidForm = async (form: FormInstance) => {
  try {
    await form.validateFields();
    return true;
  } catch (error: any) {
    const errorInfor: IErrorValidateForm = error;
    return errorInfor.errorFields.length ? false : true;
  }
};
