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

interface Props {
  state: string[]
}

const Navbar: React.FC<Props> = (props) => {
  const [current, setCurrent] = useState('home');
  const router = useRouter();

  const onClick: MenuProps['onClick'] = (e) => {
    
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

    setCurrent(e.key)

  };

  return <Menu onClick={onClick} selectedKeys={props.state} mode="horizontal" items={items} />;
};

export default Navbar;