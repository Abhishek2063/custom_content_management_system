import React, { useState } from "react";
import {
  // AppstoreOutlined,
  // ContainerOutlined,
  MenuFoldOutlined,
  // PieChartOutlined,
  // DesktopOutlined,
  MenuUnfoldOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

const Sidebar = (props) => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Dashboard", "1", <WindowsOutlined />),
    
  ];

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleSideBarClick = ({ key }) => {
   
  };

  return (
    <div>
      <div>
      
        <div className="logo-head">
          {!collapsed && <span className="logo-text">CMS</span>}
        <Button
          type="primary"
          onClick={toggleCollapsed}
          
        >
          {collapsed ? <MenuUnfoldOutlined /> : <span>  <MenuFoldOutlined /> </span>}
        </Button>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={({ key }) => handleSideBarClick({ key })}
        />
      </div>
      
     
    </div>
  );
};

export default Sidebar;
