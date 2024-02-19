//import { IGetMyCompany, getMyCompany } from '@/api-be';
import { menuNavbar } from '@/core/constant';
import { EnumModule } from '@/core/enum';
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Image from 'next/image';
import React from 'react';

// 1. check modules của công ty -> có thì hiển thị
// 2. nếu là role admin thì hiển thị hết
// 3. nếu kh phải role admin thì check theo account group

export const Navbar = async () => {
  /*   const res: IGetMyCompany = await getMyCompany.function();
  const menus = res?.data?.package?.modules?.map((el) => menuNavbar[el]); */
  //console.log(res);

  return (
    <>
      {/*       <Sider style={{ backgroundColor: 'red' }}>
        <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ minWidth: '100%' }} items={menus} />
      </Sider> */}
    </>
  );
};
