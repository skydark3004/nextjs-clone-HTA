import { Col, Row } from 'antd';

export default function Home() {
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
