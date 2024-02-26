'use client';
import { Navbar } from '@/components';
import { UserContext } from '@/context';
import { CookieUtilsClient } from '@/utils/cookie/client';
import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

export default function Home() {
  const user = useContext(UserContext);
  console.log('user::', user);

  const token = CookieUtilsClient.get('accessToken');
  console.log(token);
  console.log('render at server');
  return (
    <>
      <Row style={{ backgroundColor: '#F4F7FE' }}>
        <Col span={5} style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 0px 5px #bcbebf' }}>
          <Row>
            <Link href={'/'} style={{ margin: '30px auto' }}>
              <Image
                src={'https://storage.googleapis.com/staging-vfl/companies/3f51a76a92ad12b02579.png'}
                alt='logo company'
                width={100}
                height={100}
                priority={true}
                style={{ width: '100%' }}></Image>
            </Link>

            <Image src={'./slash.svg'} alt='slash' width={100} height={100} style={{ width: '80%', margin: '0 auto' }}></Image>
          </Row>
          {/*  <Navbar></Navbar> */}
        </Col>
        <Col span={19}>
          <h1>hello</h1>
          <Link href={'/'}>redirect to home</Link>
          {/* <Image src='/login/background.svg' preview={false} /> */}
        </Col>
      </Row>
    </>
  );
}
