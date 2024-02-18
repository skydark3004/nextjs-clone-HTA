import { EnumRoleCode } from '@/core/enum';
import { create } from 'zustand';

export interface IUser {
  email: string;
  accessToken: string;
  fullName: string;
  roleCode: EnumRoleCode | null;
  setInforUser: (value: any) => void;
}

const initState = {
  email: '',
  accessToken: '',
  fullName: '',
  roleCode: null,
};

export const useUserStore = create<IUser>((set) => ({
  ...initState,
  setInforUser: (value: any) => set(() => ({ ...value })),
}));
