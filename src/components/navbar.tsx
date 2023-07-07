import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/router';

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'home',
        icon: <AppstoreOutlined />,
      },
    {
        label: 'About us',
        key: 'aboutus',
        icon: <AppstoreOutlined />,
      },
      {
        label: 'Simple quiz',
        key: 'simplequiz',
        icon: <AppstoreOutlined />,
      },
      {
        label: 'Contact us',
        key: 'contactus',
        icon: <AppstoreOutlined />,
      },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('home');
  const router = useRouter();

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);

    if(e.key === "home"){
      router.push("/")
    }

    if(e.key === "aboutus"){
      router.push("/aboutus")
    }

    if(e.key === "simplequiz"){
      router.push("/simplequiz")
    }

    if(e.key === "contactus"){
      router.push("/contactus")
    }

  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Navbar;