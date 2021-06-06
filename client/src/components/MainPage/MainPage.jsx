import { Layout } from 'antd';
import { useState } from 'react';
import Friends from '../ProfileMenu/Friends/Friends';

import UserMenuSider from './UserMenuSider/UserMenuSider';


const { Header } = Layout;

const MainPage = () =>  {

  return (
    <Layout  >
      <Header style={{opacity: 0.1}}/>

        <UserMenuSider /> 
    </Layout>
  )
}

export default MainPage
