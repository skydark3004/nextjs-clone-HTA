import { Col, Row } from 'antd';
import Image from 'next/image';

interface IProps {
  message: string;
  type: 'WARNING' | 'ERROR' | 'SUCESS';
}

export const ToastMessage = (props: IProps): React.ReactNode => {
  let typeToast;
  switch (props.type) {
    case 'WARNING':
      typeToast = {
        image: <Image src={'./assets/icon-warning-solid.svg'} width={100} height={100} alt='Chú ý'></Image>,
        title: 'Chú ý!',
      };

      break;
    case 'ERROR':
      typeToast = {
        image: <Image src={'./assets/icon-error.svg'} width={100} height={100} alt='Lỗi'></Image>,
        title: 'Lỗi!',
      };
      break;
    case 'SUCESS':
      typeToast = {
        image: <Image src={'./assets/check_circle.svg'} width={100} height={100} alt='Thành công'></Image>,
        title: 'Thành công!',
      };
      break;
  }

  return (
    <>
      <Row>
        <Col span={2} style={{ marginTop: '-10px', marginLeft: '-5px' }}>
          {typeToast.image}
        </Col>
        <Col span={22} style={{ marginTop: '-8px', marginLeft: '5px' }}>
          <h1 className='font-semibold' style={{ color: '#1C2766' }}>
            {typeToast.title}
          </h1>
          <h1 className='text-sm text-black'>{props.message}</h1>
        </Col>
      </Row>
    </>
  );
};
