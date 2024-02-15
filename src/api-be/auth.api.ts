import instanceAxios from './init';

interface ILogin {
  email: string;
  password: string;
  isKeepLogin: boolean;
}

export const login = {
  key: 'LOGIN',
  function: function login(key: string, data: { arg: ILogin }) {
    return instanceAxios.post('api/v1/admin/auth/login', data.arg);
  },
};
