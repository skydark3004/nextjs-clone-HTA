/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-control-regex */

import { Rule } from 'antd/es/form';

export function isEmailRule(message?: string): Rule {
  return {
    validator: (rule: any, value: any) => {
      if (value) {
        const isValid = validateEmail(value);
        if (!isValid) return Promise.reject(message || 'Email không hợp lệ');
        return Promise.resolve();
      }
      return Promise.resolve();
    },
  };
}

const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};
