'use client';
import { Navbar } from '@/components';
import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Row style={{ backgroundColor: '#F4F7FE' }}>
        <Col span={5} style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 0px 5px #bcbebf' }}>
          <Row>
            <Link href={'/'} style={{ margin: '30px auto' }}>
              <Image
                src={'https://storage.googleapis.com/staging-vfl/companies/5be774db4a029a6c12cf.png'}
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
          <Link href={'/context'}>context</Link>
          {/* <Image src='/login/background.svg' preview={false} /> */}
        </Col>
      </Row>
    </>
  );
}
