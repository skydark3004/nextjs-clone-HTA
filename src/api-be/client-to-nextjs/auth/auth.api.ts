import { ILogin } from './auth.interface';
import { instanceClientToNext } from '../instance';

export const login = {
  key: 'LOGIN',
  function: function login(key: string, data: { arg: ILogin }) {
    return instanceClientToNext.post(`api/auth/login`, data.arg);
  },
};

export const getDataFromCookie = {
  key: 'GET_DATA_FROM_COOKIE',
  function: function login(key: string) {
    return instanceClientToNext.get(`api/auth`);
  },
};
