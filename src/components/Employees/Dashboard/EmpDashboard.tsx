import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Typography } from "@mui/material";
import { AppHeader } from "../../Admin/Dashboard/AppHeader";
import { DashContent } from "./DashContent";
import { Profile } from "./Profile";
import { LeaApp } from "../Leave/LeaApp";

const { Header, Sider, Content } = Layout;

const EmpDashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Header
        style={{ padding: 0, background: colorBgContainer, display: "flex" }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <AppHeader />
      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Dashboard",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Profile",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Leave Applications",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* <DashContent/> */}
            {/* <Profile/> */}
            <LeaApp/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default EmpDashboard;
