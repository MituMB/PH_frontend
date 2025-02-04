import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
{
    key:1,
    label:<NavLink to="/admin/dashboard">Dashboard</NavLink>  
},
// {
//     key:2,
//     label:'Profile'
// },
{
    key:3,
    label:'User Management',
    children:[
        {
            key:1.1,
            label:<NavLink to={"/admin/create-admin"}>create Admin</NavLink>, 
        },
        {
            key:1.2,
            label:<NavLink to={"/admin/create-student"}>Create Student</NavLink>, 
        },
        {
          key:1.3,
          label:<NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>, 
      },
    ]
},

]

const MainLayout = () => {

  
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <h1 className='' style={{color:'white', textAlign:'center'}}>PH University</h1>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0}} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
          
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;