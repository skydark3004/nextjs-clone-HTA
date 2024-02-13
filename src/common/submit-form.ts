import { FormInstance } from 'antd/es/form/Form';
import { isValidForm } from './is-valid-form';

export const submitForm = async (form: FormInstance, callback: () => Promise<any> | void) => {
  const isValid = await isValidForm(form);
  if (isValid) {
    callback();
  }
};
