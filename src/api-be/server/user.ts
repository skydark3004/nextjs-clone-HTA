import { instanceServer } from './instance';

export function getMeRequest() {
  return instanceServer.get('api/v1/admin/user/get-me');
}
