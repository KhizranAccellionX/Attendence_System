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
import { AppHeader } from "./AppHeader";
import { AppContent } from "./AppContent";
import { AddUser } from "../User/AddUser";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
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
                label: "Add Employee",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Employees",
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: "Attendence Report",
              },
              {
                key: "5",
                icon: <UploadOutlined />,
                label: "Leave Applications",
              },
            ]}
          />
        </Sider>
        <Layout className="h-screen">
          <Content
            style={{
              margin: "24px 16px",
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* <AppContent /> */}
            <AddUser />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
