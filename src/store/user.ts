import { EnumRoleCode } from '@/core/enum';
import axios from 'axios';
import { create } from 'zustand';

export interface IUser {
  fullname: string | null;
  roleCode: EnumRoleCode | null;
  accessToken: string | null;
  setInforUser: (value: any) => void;
}

const initState = {
  accessToken: null,
  fullname: null,
  roleCode: null,
};

export const useUserStore = create<IUser>((set) => ({
  ...initState,
  setInforUser: (value: any) => set(() => ({ ...value })),
}));

// Fetch that gets the current bears from api
/* axios
  .get(`api/auth`)
  .then((result) => {
    const response = result.data;
    console.log('response:', response);
    useUserStore.setState({
      fullname: response.data?.fullname,
      roleCode: response.data?.role.code,
      accessToken: response.data?.accessToken,
    });
  })
  .catch((err) => {
    console.log('err at store zustand');
  });
 */
