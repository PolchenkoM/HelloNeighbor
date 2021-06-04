import { UserOutlined } from '@ant-design/icons';
import { FacebookOutlined,InstagramOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Typography,Button } from 'antd';

import style from './userMenuSider.sass'



import Sider from 'antd/lib/layout/Sider';
import Avatar from 'antd/lib/avatar/avatar';
import Rater from '../Rater/Rater';

const UserMenuSider = () => {

  const { Title } = Typography
  const [collapsed,setCollapsed] = useState(false)

  const size = 'large'

  const onCollapse = () => {
    console.log(collapsed);
    setCollapsed(prev => !prev)
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className='class'>

        <Avatar size={120} icon={<UserOutlined />} src='https://gameguru.ru/clf/43/ef/08/2e/news.1610973171890.jpg' draggable={true}/>
        <Rater />
        <Title level={3}>h3. Ant Design</Title>
        <div >
          <Button type="primary"  icon={<FacebookOutlined />} size={size} />
          <Button type="primary"  icon={<InstagramOutlined />} size={size} />
        </div>


    </Sider>
  )
}

export default UserMenuSider
