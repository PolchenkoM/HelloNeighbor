import { Layout } from 'antd';

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
