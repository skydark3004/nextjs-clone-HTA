import { instanceServer } from './instance';

interface ILogin {
  email: string;
  password: string;
  isKeepLogin: boolean;
}

export function loginRequest(body: ILogin) {
  return instanceServer.post('/api/v1/admin/auth/login', body);
}
