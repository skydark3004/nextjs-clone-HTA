import { instanceClient } from '../instance';
import { IGetMyCompany } from './company.interface';

export const getMyCompany = {
  key: 'GET_MY_COMPANY',
  function: function login(key: string, data: { arg: IGetMyCompany }) {
    console.log('data when get company', data);
    return instanceClient.get(`api/v1/admin/company/get-my-company`, { headers: { Authorization: `Bearer ${data.arg.token}` } });
  },
};
