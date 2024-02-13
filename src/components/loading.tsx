'use client';
import { useLoadingStore } from '@/store';
import ReactLoading from 'react-loading';

export const Loading = () => {
  const loadingStore = useLoadingStore((state) => state.isLoading);
  return (
    <>
      {loadingStore && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '999',
          }}>
          <ReactLoading type={'spin'} color={'black'} height={'10%'} width={'20%'} />
        </div>
      )}
    </>
  );
};
