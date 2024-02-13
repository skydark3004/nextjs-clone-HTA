'use client';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import styles from './page.module.css';
import { login } from '@/api/auth.api';

import useSWRMutation from 'swr/mutation';
import { useRef } from 'react';
import { submitForm } from '@/common';
import { requiredRule, isEmailRule } from '@/rule';
import { useLoadingStore } from '@/store';
import Image from 'next/image';
import { ToastError, ToastSucess } from '@/common/toast';

export default function LoginPage() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const isKeepLoginRef = useRef(false);
  const setLoading = useLoadingStore((state) => state.setIsLoading);
  const [form] = Form.useForm();

  const { data, error, trigger, isMutating } = useSWRMutation(login.key, login.function, {
    onSuccess(data, key) {
      setLoading(false);
      ToastSucess('Đăng nhập thành công');
    },
    onError(err: string, key) {
      ToastError(err);
      setLoading(false);
    },
  });

  const handleSubmitForm = async () => {
    trigger({ email: emailRef.current, password: passwordRef.current, isKeepLogin: isKeepLoginRef.current });
  };

  if (isMutating) {
    setLoading(true);
  }

  return (
    <>
      <Row style={{ maxWidth: '100vw', height: '100vh' }}>
        <Col span={12}>
          <div className='center-screen'>
            <h1 className='text-5xl font-bold text-violet-950 mb-3'>Đăng nhập</h1>
            <p className={`${styles.subTitle}`}>Điền đầy đủ thông tin để đăng nhập</p>
            <div className='mt-10'>
              <Form name='basic' form={form} labelCol={{ span: 24 }} wrapperCol={{ span: 40 }} style={{ maxWidth: 600 }} autoComplete='off'>
                <Form.Item label='Email' name='username' rules={[requiredRule('Vui lòng nhập Email'), isEmailRule()]}>
                  <Input placeholder='Nhập email của bạn...' onChange={(e) => (emailRef.current = e.target.value)} />
                </Form.Item>

                <Form.Item label='Mật khẩu' name='password' rules={[requiredRule('Vui lòng nhập mật khẩu')]}>
                  <Input.Password placeholder='Nhập mật khẩu' onChange={(e) => (passwordRef.current = e.target.value)} />
                </Form.Item>

                <Form.Item name='isKeepLogin' valuePropName='checked' wrapperCol={{ offset: 0, span: 16 }}>
                  <Checkbox onChange={(e) => (isKeepLoginRef.current = e.target.checked)}>Duy trì đăng nhập</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 50 }}>
                  <Button
                    type='primary'
                    htmlType='submit'
                    style={{ width: '100%' }}
                    onClick={async () => {
                      submitForm(form, handleSubmitForm);
                    }}>
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>

        <Col span={12} style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%' }}>
          <Image
            alt='background image'
            width={'100'}
            height={'100'}
            src='/login/background.svg'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}></Image>
        </Col>
      </Row>
    </>
  );
}