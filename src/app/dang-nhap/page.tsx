'use client';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import styles from './page.module.css';

import useSWRMutation from 'swr/mutation';
import { useEffect, useRef } from 'react';
import { submitForm } from '@/common';
import { requiredRule, isEmailRule } from '@/rule';
import { ILoading, useLoadingStore, useUserStore } from '@/store';
import Image from 'next/image';
import { ToastError, ToastSucess } from '@/common/toast';
import { useRouter } from 'next/navigation';
import { getMyCompany } from '@/api-be/client';
import { login } from '@/api-be/client-to-nextjs';
import { EnumModule, EnumRoleCode } from '@/core/enum';
//import { useUserContext } from '@/context';

export default function LoginPage() {
  // const { setDataContext } = useUserContext();
  const setInforUser = useUserStore((state) => state.setInforUser);

  const router = useRouter();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const isKeepLoginRef = useRef(false);

  const setLoading = useLoadingStore((state: ILoading) => state.setIsLoading);

  const [form] = Form.useForm();

  const { trigger: triggerGetMyCompany } = useSWRMutation(getMyCompany.key, getMyCompany.function, {
    onSuccess(data) {
      console.log('res at trigger company');
      console.log(data);
      if (data.package.modules.includes(EnumModule.ACCOUNT)) {
        router.push('/tai-khoan');
      }
    },
    onError(err: any) {
      ToastError(err?.message);
    },
  });

  const { trigger, isMutating } = useSWRMutation(login.key, login.function, {
    onSuccess(res) {
      setLoading(false);
      ToastSucess('Đăng nhập thành công');
      setInforUser({
        fullname: res?.fullname,
        roleCode: res?.role?.code,
        accessToken: res?.accessToken,
      });
      if (res?.role?.code === EnumRoleCode.SUPPER_ADMIN) {
        console.log('redirect sang super admin page');
        //router.push('/');
      } else {
        triggerGetMyCompany({ token: res?.accessToken });
      }

      //router.push('/');
    },
    onError(err: any) {
      ToastError(err?.message || 'Đăng nhập thất bại');
      setLoading(false);
    },
  });

  useEffect(() => {
    isMutating && setLoading(true);
  }, [isMutating, setLoading]);

  const handleSubmitForm = async () => {
    trigger({ email: emailRef.current, password: passwordRef.current, isKeepLogin: isKeepLoginRef.current });
  };

  return (
    <>
      {/* {isMutating && <Loading></Loading>} */}
      <Row style={{ maxWidth: '100vw', height: '100vh' }}>
        <Col span={12}>
          <div className='center-screen'>
            <h1 className='text-5xl font-bold text-violet-950 mb-3'>Đăng nhập</h1>
            <p className={`${styles.subTitle}`}>Điền đầy đủ thông tin để đăng nhập</p>
            <div className='mt-10'>
              <Form
                name='basic'
                form={form}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 40 }}
                style={{ maxWidth: 600 }}
                autoComplete='off'
                initialValues={{ isKeepLogin: false }}>
                <Form.Item label='Email' name='Email' rules={[requiredRule('Vui lòng nhập Email'), isEmailRule()]}>
                  <Input placeholder='Nhập email của bạn...' onChange={(e) => (emailRef.current = e.target.value)} autoComplete={'email'} />
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
            src='/login_background.svg'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}></Image>
        </Col>
      </Row>
    </>
  );
}
