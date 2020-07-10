import React from "react";
import "./dashboard.css";

import { Layout, Menu, Avatar, PageHeader, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ProjectFilled,
  HomeOutlined,
  PoweroffOutlined,
  SearchOutlined,
  BellOutlined,
  ProfileOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const DashBoard = ({ children, title }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <section className="dashboard-section">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div
            className="logo"
            style={collapsed ? { height: "10vh" } : { margin: "0.3rem 0" }}
          >
            <Avatar size={collapsed ? 48 : 78} icon={<UserOutlined />} />
            <p style={collapsed ? { display: "none" } : null}>Abbey Nelson</p>
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <h3 style={collapsed ? { display: "none" } : null}>MENU</h3>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<ProjectFilled />}>
              Projects
            </Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />}>
              People
            </Menu.Item>
            <h3 style={collapsed ? { display: "none" } : null}>ACCOUNT</h3>
            <Menu.Item key="4" icon={<ProfileOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="6" icon={<PoweroffOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="header-title">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
              <PageHeader
                className="site-page-header"
                title={title}
                style={{ float: "right", height: "62px" }}
              />
            </div>
            <div className="header-function">
              <Button type="text" shape="circle" icon={<SearchOutlined />} />
              <Button type="text" shape="circle" icon={<BellOutlined />} />
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
          </Header>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </section>
  );
};

export default DashBoard;
