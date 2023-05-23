import React from "react";
import {
  PlusSquareOutlined,
  BookOutlined,
  CloudDownloadOutlined,
  EyeOutlined,
  AppstoreAddOutlined,
  BuildFilled,
  FileImageFilled,
  FormOutlined,
} from "@ant-design/icons";
import { Popover } from "antd";
const Header = (props) => {
  const handlePoverOptionClick = (value) => {
    if (value === "moduleDiv") {
      props.setModelShowHide({
        ...props.modelShowHide,
        moduleDivModel: true,
        buttonModel: false,
        backgroundImageModel: false,
        FormModel: false,
      });
    }
    if (value === "Button") {
      props.setModelShowHide({
        ...props.modelShowHide,
        moduleDivModel: false,
        buttonModel: true,
        backgroundImageModel: false,
        FormModel: false,
      });
    }
    if (value === "Background Image") {
      props.setModelShowHide({
        ...props.modelShowHide,
        moduleDivModel: false,
        buttonModel: false,
        backgroundImageModel: true,
        FormModel: false,
      });
    }
    if (value === "Form") {
      props.setModelShowHide({
        ...props.modelShowHide,
        moduleDivModel: false,
        buttonModel: false,
        backgroundImageModel: false,
        FormModel: true,
      });
    }
  };
  return (
    <div className="d-flex justify-content-between p-3 ">
      <Popover
        overlayClassName=""
        placement="bottomLeft"
        content={
          <div>
            <button
              className="dropdown-item-popover btn btn-block"
              onClick={(e) => handlePoverOptionClick("moduleDiv")}
            >
              <AppstoreAddOutlined /> Module Div
            </button>

            <button
              className="dropdown-item-popover btn btn-block"
              onClick={(e) => handlePoverOptionClick("Button")}
            >
              <BuildFilled />{" "} Button
            </button>

            <button
              className="dropdown-item-popover btn btn-block"
              onClick={(e) => handlePoverOptionClick("Background Image")}
            >
              <FileImageFilled />{" "} BackgroundImage
            </button>

            <button
              className="dropdown-item-popover btn btn-block"
              onClick={(e) => handlePoverOptionClick("Form")}
            >
              <FormOutlined />{" "} Form
            </button>
          </div>
        }
      >
        <button type="submit" className="btn btn-info btn-lg">
          <PlusSquareOutlined />
        </button>
      </Popover>

      <div className="ml-auto gap-2 d-flex">
        <button type="submit" className="btn btn-primary btn-lg">
          
          <BookOutlined />  {" "} Publish
        </button>

        <button type="submit" className="btn btn-warning btn-lg">
          <EyeOutlined />{" "}
          Preview
        </button>

        <button type="submit" className="btn btn-success btn-lg">
          <CloudDownloadOutlined />{" "}
          Save
        </button>
      </div>
    </div>
  );
};

export default Header;
