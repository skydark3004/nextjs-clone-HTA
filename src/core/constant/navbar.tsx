import Image from 'next/image';
import Link from 'next/link';

const renderIcon = (nameFile: string) => (
  <Link href={`/${nameFile}`} style={{}}>
    <Image alt='icon menu' src={`./icon_${nameFile}.svg`} width={30} height={30}></Image>
  </Link>
);

const renderSubIcon = (href: string) => <Link href={`/${href}`} style={{}}></Link>;

export const menuNavbar = {
  ACCOUNT: {
    key: 'ACCOUNT',
    label: 'Tài khoản',
    icon: renderIcon('tai-khoan'),
  },
  PERMISSION: {
    key: 'PERMISSION',
    label: 'Quyền Hạn',
    icon: renderIcon('quyen-han'),
  },
  ARTICLE: {
    key: 'ARTICLE',
    label: 'Bài Viết',
    icon: renderIcon('bai-viet'),
    children: [
      {
        key: 'LIST_ARTICLES',
        label: 'Danh sách bài viết',
        icon: renderSubIcon('bai-viet'),
      },
      {
        key: 'LIST_CATEGORIES',
        label: 'Quản lý chủ đề bài viết',
        icon: renderSubIcon('danh-muc-bai-viet'),
      },
    ],
  },
  TAG: {
    key: 'TAG',
    label: 'Tag',
    icon: renderIcon('tag'),
  },
  TIME_KEEPING: {
    key: 'TIME_KEEPING',
    label: 'Quản lý công',
    icon: renderIcon('quan-ly-cong'),
  },
  ABSENCE_OVERTIME: {
    key: 'ABSENCE_OVERTIME',
    label: 'Yêu cầu',
    icon: renderIcon('yeu-cau'),
  },
  SALARY: {
    key: 'SALARY',
    label: 'Lương',
    icon: renderIcon('luong'),
  },
};
