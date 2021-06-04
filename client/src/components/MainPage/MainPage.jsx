import { Layout } from 'antd';

import UserMenuSider from './UserMenuSider/UserMenuSider';


const { Header } = Layout;

const MainPage = () =>  {

  return (
    <Layout  >
      <Header />
      <Layout >
        <UserMenuSider /> 
      </Layout>
    </Layout>
  )
}

export default MainPage
