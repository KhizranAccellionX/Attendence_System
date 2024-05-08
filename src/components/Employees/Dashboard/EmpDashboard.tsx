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
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const EmpDashboard: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

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
                onClick: () => navigate("/employee/dashboard")
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Profile",
                onClick: () => navigate("/employee/profile")
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Leave Applications",
                onClick: () => navigate("/employee/leave-applications")
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
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default EmpDashboard;
