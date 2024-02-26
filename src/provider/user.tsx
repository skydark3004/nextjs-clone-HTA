'use client';
import { getDataFromCookie } from '@/api-be/client';
import { UserContext } from '@/context';
import React from 'react';
import useSWRImmutable from 'swr/immutable';

interface IProps {
  children: React.ReactNode;
}

export const UserProvider = (props: IProps) => {
  const { data } = useSWRImmutable(getDataFromCookie.key, getDataFromCookie.function);
  return (
    <>
      <UserContext.Provider value={{ dataUser: data?.data, setDataUser }}> {props.children}</UserContext.Provider>
    </>
  );
};
