import { IGetMyCompany, getMyCompany } from '@/api-be';
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
require('util').inspect.defaultOptions.depth = null;

// 1. check modules của công ty -> có thì hiển thị
// 2. nếu là role admin thì hiển thị hết
// 3. nếu kh phải role admin thì check theo account group

export const Navbar = async () => {
  const res: IGetMyCompany = await getMyCompany.function();
  //console.log(res);

  const items = [
    {
      key: 'key',
      label: 'label',
      //icon: '',
      children: [
        {
          key: 'sub key',
          label: 'sub label',
        },
      ],
    },
  ];

  return (
    <>
      <Sider style={{}} width={200}>
        <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }} items={items} />
      </Sider>
      {JSON.stringify(res)}
    </>
  );
};
