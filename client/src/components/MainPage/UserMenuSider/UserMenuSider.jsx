import 'antd/dist/antd.css';
import style from './userMenuSider.sass'
import { UserOutlined } from '@ant-design/icons';
import { FacebookOutlined,InstagramOutlined,ProfileOutlined,TeamOutlined,HistoryOutlined,LogoutOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Typography, Button, Row, Col, Menu } from 'antd';

import Sider from 'antd/lib/layout/Sider';
import Avatar from 'antd/lib/avatar/avatar';

import Rater from './Rater/Rater'

const UserMenuSider = () => {

  const { Title } = Typography
  const [collapsed,setCollapsed] = useState(false)
  const size = 'large'

  const onCollapse = () => {
    setCollapsed(prev => !prev)
  }

  const [drag, setDrag] = useState(false)

  return (
  
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className='sider' >
      <Row>
        <Col span={24} className='avatar'>
          {!collapsed ? <Avatar size={180} src='https://gameguru.ru/clf/43/ef/08/2e/news.1610973171890.jpg' draggable={true}/> : <Avatar size={40} src='https://gameguru.ru/clf/43/ef/08/2e/news.1610973171890.jpg' draggable={true}/>}
        </Col>
      </Row>
      {!collapsed ? 
      <>
      <Row>
        <Col span={24} className='userName'>
          <Title level={4}>User Name</Title>
        </Col>
      </Row>
      <Row >
        <Col span={24} className='ratingButtons'>
          <Rater />
        </Col>
      </Row>
      <Row>
        <Col span={24} className='socialsButtons'>
          <Button type="dashed"  icon={<FacebookOutlined />} size={size} />
          <Button type="dashed" className='buttons' icon={<InstagramOutlined />} size={size} />
        </Col>
      </Row>
      </> : 
      null}
      <Menu >
        <Menu.Item key="1" className='userLinksButton' icon={<ProfileOutlined />} title='Profile'>Profile
        </Menu.Item>
        <Menu.Item key="2"  className='userLinksButton' icon={<TeamOutlined />} title='Friends'>Friends
        </Menu.Item>
        <Menu.Item key="3"  className='userLinksButton'icon={<HistoryOutlined />} title='History'>History
        </Menu.Item>
        <Menu.Item key="4"  className='userLinksButton'icon={<LogoutOutlined />} title='Logout'>Logout
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default UserMenuSider
