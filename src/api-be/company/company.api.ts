import { IGetMyCompany } from './company.interface';
import instanceAxios from '../init';

export const getMyCompany = {
  key: 'GET_MY_COMPANY',
  function: function (key?: string): Promise<IGetMyCompany> {
    return instanceAxios.get('api/v1/admin/company/get-my-company');
    //return instanceAxios.post('api/v1/admin/absence/test', {});
  },
};
