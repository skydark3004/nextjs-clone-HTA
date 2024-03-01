import { instanceClientToNext } from '@/api-be/client-to-nextjs/instance';
import { EnumRoleCode } from '@/core/enum';
import { create } from 'zustand';

export interface IUser {
  fullname: string | null;
  roleCode: EnumRoleCode | null;
  accessToken: string | null;
  setInforUser: (value: any) => void;
}

export const useUserStore = create<IUser>((set) => ({
  accessToken: null,
  fullname: null,
  roleCode: null,
  setInforUser: (value: any) => set(() => ({ ...value })),
}));

// Fetch that gets the current bears from api
instanceClientToNext.get(`api/auth/get-token`).then((response) => {
  console.log('response at zustand:', response);
  useUserStore.setState({
    accessToken: response?.token,
  });
});

export const { getState: getStateFromUserStore } = useUserStore;
