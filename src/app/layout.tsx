import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ToastContainer } from 'react-toastify';
import { Loading } from '@/components';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/provider';
import { IBaseProps } from '@/interface';

const inter = Montserrat({ subsets: ['vietnamese'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: 'favicon1.jpg', // /public path
  },
};

export default function RootLayout(props: IBaseProps) {
  return (
    <html lang='en'>
      {/* <link rel='icon' href='/favicon.ico' sizes='any' /> */}
      <body className={inter.className} suppressHydrationWarning={true}>
        <ToastContainer />
        {/*         <Loading></Loading> */}
        <AntdRegistry>
          <AuthProvider> {props.children}</AuthProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
