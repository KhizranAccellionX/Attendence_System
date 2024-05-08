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
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
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
                onClick: () => navigate("/dashboard")
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Add Employee",
                onClick: () => navigate("/dashboard/add-employee")
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Employees",
                onClick: () => navigate("/dashboard/employees")
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: "Attendence Report",
                onClick: () => navigate("/dashboard/attendence-report")
              },
              {
                key: "5",
                icon: <UploadOutlined />,
                label: "Leave Applications",
                onClick: () => navigate("/dashboard/leave-applications")
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
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
