import { EnumModule, EnumOffConfigType } from '@/core/enum';

export interface IGetMyCompany {
  data: IData | null;
}

export interface IData {
  offWithPay: {
    type: EnumOffConfigType;
    resetDate?: { month: number; dayInMonth: number };
  };
  status: {
    isActive: boolean;
    isDeleted: boolean;
  };
  duration: {
    day: number;
    month: number;
    week: number;
    year: number;
  };
  _id: string;
  name: string;
  logo: string;
  offMaximum: number;
  admin: string;
  unionFee: number;
  typeOfRound: string;
  createdAt: string;
  updatedAt: string;
  package: IPackage;
  activeAt: string;
  expiredAt: string;
  price: number;
  branches: IBranch[];
}

export interface IPackage {
  _id: string;
  name: string;
  description: string;
  isActive: boolean;
  modules: EnumModule[];
  createdAt: string;
  updatedAt: string;
}

export interface IBranch {
  _id: string;
  name: string;
  type: string;
  province: string;
  district: string;
  address: string;
  description: string;
  company: string;
  createdAt: string;
  updatedAt: string;
}
