import instanceServer from './instance-server';

export function getMeRequest() {
  return instanceServer.get('api/v1/admin/user/get-me');
}
