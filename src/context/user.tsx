'use client';

import { createContext, useContext, useEffect, useState } from 'react';
//import { getDataFromCookie } from '@/api-be/client';
import useSWRMutation from 'swr/mutation';
import { EnumRoleCode } from '@/core/enum';

interface IProps {
  children: React.ReactNode;
}

interface IUserFromToken {
  fullname: string;
  roleCode: EnumRoleCode;
  accessToken: string;
}
export type GlobalContent = {
  dataContext: IUserFromToken | null;
  setDataContext: (_value: IUserFromToken) => void;
};

export const UserGlobalContext = createContext<GlobalContent>({
  dataContext: null,
  setDataContext: () => {},
});

export const useUserContext = () => useContext(UserGlobalContext);

export const UserProvider = (props: IProps) => {
  const [user, setUser] = useState<IUserFromToken | null>(null);

  /*   const { trigger } = useSWRMutation(getDataFromCookie.key, getDataFromCookie.function, {
    onSuccess({ data }) {
      const payload = data?.data;
      if (payload) {
        console.log('payload::', payload);
        setUser({
          fullname: payload?.fullname,
          roleCode: payload.role.code,
          accessToken: payload?.accessToken,
        });
      }
    },
  });

  useEffect(() => {
    trigger();
  }, [trigger]); */

  return (
    <>
      <UserGlobalContext.Provider value={{ dataContext: user, setDataContext: setUser }}> {props.children}</UserGlobalContext.Provider>
    </>
  );
};
