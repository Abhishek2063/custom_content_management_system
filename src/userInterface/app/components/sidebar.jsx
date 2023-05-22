import React, { useState } from "react";
import {
  // AppstoreOutlined,
  // ContainerOutlined,
  MenuFoldOutlined,
  // PieChartOutlined,
  // DesktopOutlined,
  MenuUnfoldOutlined,
  WindowsOutlined,
  BuildFilled,
  FileImageFilled,
  FormOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import ModuleDiv from "../editor/components/models/moduleDiv/moduleDiv";
import ButtonModel from "../editor/components/models/button/buttonModel";
import BackgroundImageModel from "../editor/components/models/backgroundImage/backgroundImageModel";
import FormModel from "../editor/components/models/form/formModel";

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
    getItem("Module Div", "1", <WindowsOutlined />),
    getItem("Button", "2", <BuildFilled />),
    getItem("Background Image", "3", <FileImageFilled />),
    getItem("Form", "4", <FormOutlined />),
  ];

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleSideBarClick = ({ key }) => {
    if (key === 1 || key === "1") {
      props.setModuleShow({
        ...props.moduleShow,
        moduleDivSectionShow: true,
        buttonSectionShow: false,
        backgroundImageSectionShow: false,
        FormSectionShow: false,
      });
    }

    if (key === 2 || key === "2") {
      props.setModuleShow({
        ...props.moduleShow,
        moduleDivSectionShow: false,
        buttonSectionShow: true,
        backgroundImageSectionShow: false,
        FormSectionShow: false,
      });
    }

    if (key === 3 || key === "3") {
      props.setModuleShow({
        ...props.moduleShow,
        moduleDivSectionShow: false,
        buttonSectionShow: false,
        backgroundImageSectionShow: true,
        FormSectionShow: false,
      });
    }

    if (key === 4 || key === "4") {
      props.setModuleShow({
        ...props.moduleShow,
        moduleDivSectionShow: false,
        buttonSectionShow: false,
        backgroundImageSectionShow: false,
        FormSectionShow: true,
      });
    }
  };

  return (
    <div>
      <div>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          // defaultSelectedKeys={["1"]}
          // defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={({ key }) => handleSideBarClick({ key })}
        />
      </div>
      <ModuleDiv
        moduleShow={props.moduleShow}
        setModuleShow={props.setModuleShow}
        layoutOptions={props.layoutOptions}
        layout={props.layout}
        setLayout={props.setLayout}
        shapeOptions={props.shapeOptions}
        shapes={props.shapes}
        setShapes={props.setShapes}
        colors={props.colors}
        setColors={props.setColors}
        spacing={props.spacing}
        setSpacing={props.setSpacing}
        editorMessage={props.editorMessage}
        setEditorMessage={props.setEditorMessage}
      />
      <ButtonModel 
       moduleShow={props.moduleShow}
       setModuleShow={props.setModuleShow}
       editorMessage={props.editorMessage}
       setEditorMessage={props.setEditorMessage}
      />

      <BackgroundImageModel 
        moduleShow={props.moduleShow}
        setModuleShow={props.setModuleShow}
        editorMessage={props.editorMessage}
        setEditorMessage={props.setEditorMessage}
      /> 

      <FormModel 
         moduleShow={props.moduleShow}
         setModuleShow={props.setModuleShow}
         editorMessage={props.editorMessage}
         setEditorMessage={props.setEditorMessage}
      />
    </div>
  );
};

export default Sidebar;
