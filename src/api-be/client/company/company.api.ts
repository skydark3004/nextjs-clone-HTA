import { instanceClient } from '../instance-client';

export const getMyCompany = {
  key: 'GET_MY_COMPANY',
  function: function login(key: string) {
    return instanceClient.get(`admin/company/get-my-company`);
  },
};
