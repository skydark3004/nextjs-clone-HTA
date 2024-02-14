import { localStorageUtils } from '@/utils';
import { Col, Row } from 'antd';
import { redirect, useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Home() {
  /*   const router = useRouter();
  if (!localStorageUtils.get('accessToken')) {
    router.push('/dang-nhap');
  } */

  /*   useLayoutEffect(() => {
    if (!localStorageUtils.get('accessToken')) {
      redirect('/dang-nhap');
    }
  }, []); */

  return (
    <>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>
          <h1>hello</h1>
          {/* <Image src='/login/background.svg' preview={false} /> */}
        </Col>
      </Row>
    </>
  );
}
