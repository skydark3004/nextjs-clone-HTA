import axios from 'axios';
import { ILogin } from './auth.interface';

export const login = {
  key: 'LOGIN',
  function: function login(key: string, data: { arg: ILogin }) {
    return axios.post(`api/auth`, data.arg);
  },
};
