import React,{useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Menu, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';

import { HomeOutlined, CheckOutlined, MehOutlined } from '@ant-design/icons';

export default function LayoutContainer() {
  const { Header, Content, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items =[
    getItem(
      <Link to="/">Home </Link>,"home",<HomeOutlined />
    ),
    getItem(
      <Link to="/donelist"> Completed </Link>,"done",<CheckOutlined />
    ),
    getItem(
      <Link to="/about">:̸̧̦̤̔͊̇̈:̷͔̞͂͒̀̊̊̕A̶͖̫̟̓̈́̋̓ḃ̵̛̺̩͍̘̦͊́̒͊õ̷̗̥̬̏̀ͅu̸̩͖̬͎̔̈̂̽͜t̷̲͖͎͖̎̽͘ ̶͎̃̈́͝M̶̨̩̞̂ḛ̷̡̧̠̀͜ </Link>,"about", <MehOutlined />
    ),
    
    
  ]
  return (
    <Layout className="layout" style={{minHeight:"100vh"}}>
      <Sider 
        width={180} 
        collapsible collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}>
          <Menu  
          theme='dark'
          defaultSelectedKeys={["home"]}
                  mode="inline"
                  items={items}  >
          </Menu>
      </Sider>
      <Layout>
        <Content 
          
          style={{ padding: '50px 30px', backgroundColor:"#121212"}}
          
          >
            <div className='content'> 
                <Outlet/>
            </div>
        </Content>

          <Footer theme="dark" style={{ textAlign: 'center',backgroundColor:"#7289da" }}>
              <body2>Do Your Homework OnTime Limited ©2022| 解決不了問題 - 就解決出問題的人</body2>
          </Footer>
        </Layout>
          
    </Layout>
  )
}
