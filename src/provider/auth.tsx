'use client';
import { IUser, useUserStore } from '@/store';
import { getCookie, setCookie } from 'cookies-next';

interface IProps {
  children: React.ReactNode;
}

export const AuthProvider = (props: IProps) => {
  /*   const accessToken = useUserStore((state: IUser) => state.accessToken);
  console.log('accessToken', accessToken);
  const cookieFromClient = getCookie('tokenFromNext1');
  console.log('cookieFromClient', cookieFromClient);
  if (!accessToken) {
    console.log('không có accessToken');
  } */

  return <> {props.children}</>;
};
