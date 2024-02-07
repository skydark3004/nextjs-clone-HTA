import { Col, Row, Image } from 'antd';

export default function LoginPage() {
  return (
    <>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>
          <h1>hello</h1>
          <Image alt='background image' src='/login/background.svg' preview={false} />
        </Col>
      </Row>
    </>
  );
}
