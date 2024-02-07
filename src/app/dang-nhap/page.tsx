'use client';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import styles from './page.module.css';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function LoginPage() {
  return (
    <>
      <Row style={{ maxWidth: '100vw', height: '100vh' }}>
        <Col span={12}>
          <div className='center-screen'>
            <h1 className='text-5xl font-bold text-violet-950'>Đăng nhập</h1>
            <p className={`${styles.subTitle}`}>Điền đầy đủ thông tin để đăng nhập</p>
            <hr
              style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 0.5,
                borderColor: '#000000',
              }}
            />

            <Form
              name='basic'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              autoComplete='off'>
              <Form.Item<FieldType> label='Username' name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
              </Form.Item>

              <Form.Item<FieldType> label='Password' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType> name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>

        <Col span={12} style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%' }}>
          <img alt='background image' src='/login/background.svg' style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
        </Col>
      </Row>
    </>
  );
}
