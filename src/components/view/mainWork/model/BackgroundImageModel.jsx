import { Button, Input, Modal, Radio, Select } from "antd";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
const { Option } = Select;

const BackgroundImageModel = (props) => {
  const [sectionType, setSectionType] = useState("color");
  const [gradientColors, setGradientColors] = useState(["#ffffff", "#000000"]);
  const [gradientType, setGradientType] = useState("linear");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [imageOptions, setImageOptions] = useState({
    imageUrl: "",
    repeat: "no-repeat",
    size: "cover",
    position: "center",
  });

  const handleSectionTypeChange = (value) => {
    setSectionType(value);
  };

  const handleGradientColorsChange = (index, color) => {
    const colors = [...gradientColors];
    colors[index] = color;
    setGradientColors(colors);
  };

  const handleGradientTypeChange = (e) => {
    setGradientType(e.target.value);
  };

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleGradientNumberChange = (event) => {
    setGradientColors(new Array(Number(event.target.value)).fill("#000000"));
  };

  const handleImageOptionsChange = (field, value) => {
    setImageOptions((prevOptions) => ({
      ...prevOptions,
      [field]: value,
    }));
  };

  const handleImageUrlChange = (e) => {
    handleImageOptionsChange("imageUrl", e.target.value);
  };

  const handleImageRepeatChange = (e) => {
    handleImageOptionsChange("repeat", e.target.value);
  };

  const handleImageSizeChange = (e) => {
    handleImageOptionsChange("size", e.target.value);
  };

  const handleImagePositionChange = (e) => {
    handleImageOptionsChange("position", e.target.value);
  };

  const renderGradientInputs = () => {
    return gradientColors.map((color, index) => (
      <Input
        key={index}
        type="color"
        value={color}
        onChange={(e) => handleGradientColorsChange(index, e.target.value)}
      />
    ));
  };

  const renderImageOptions = () => {
    return (
      <div>
        <Input
          type="text"
          placeholder="Image URL"
          value={imageOptions.imageUrl}
          onChange={handleImageUrlChange}
        />
        <div>
          <Radio.Group
            value={imageOptions.repeat}
            onChange={handleImageRepeatChange}
          >
            <Radio.Button value="no-repeat">No Repeat</Radio.Button>
            <Radio.Button value="repeat">Repeat</Radio.Button>
            <Radio.Button value="repeat-x">Repeat X</Radio.Button>
            <Radio.Button value="repeat-y">Repeat Y</Radio.Button>
          </Radio.Group>
        </div>
        <div>
          <Radio.Group
            value={imageOptions.size}
            onChange={handleImageSizeChange}
          >
            <Radio.Button value="cover">Cover</Radio.Button>
            <Radio.Button value="contain">Contain</Radio.Button>
          </Radio.Group>
        </div>
        <div>
          <Radio.Group
            value={imageOptions.position}
            onChange={handleImagePositionChange}
          >
            <Radio.Button value="center">Center</Radio.Button>
            <Radio.Button value="left">Left</Radio.Button>
            <Radio.Button value="right">Right</Radio.Button>
            <Radio.Button value="top">Top</Radio.Button>
            <Radio.Button value="bottom">Bottom</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    );
  };

  const renderDivs = () => {
    const divLayout = (
      <div
        style={{
          flex: 1,
          padding: "20px",
          background:
            sectionType === "color"
              ? backgroundColor
              : sectionType === "gradient"
              ? `linear-gradient(to right, ${gradientColors.join(",")})`
              : `url(${imageOptions.imageUrl}) ${imageOptions.repeat} ${imageOptions.position}/${imageOptions.size}`,
        }}
      ></div>
    );

    return divLayout;
  };

  const generateDivLayouts = () => {
    // Generate the div layouts dynamically
    const sourceCode = ReactDOMServer.renderToStaticMarkup(renderDivs());
    return sourceCode;
  };
  const handleOk = () => {
    props.setModelShowHide({
      ...props.modelShowHide,
      moduleDivModel: false,
      buttonModel: false,
      backgroundImageModel: false,
      FormModel: false,
    });

    props.setEditorMessage({
      ...props.editorMessage,
      message: props.editorMessage.message.concat(generateDivLayouts()),
    });
  };
  const handleCancel = () => {
    props.setModelShowHide({
      ...props.modelShowHide,
      moduleDivModel: false,
      buttonModel: false,
      backgroundImageModel: false,
      FormModel: false,
    });
  };
  return (
    <Modal
      title="Background Section"
      className="ModuleDivModelBox"
      open={props.modelShowHide.backgroundImageModel}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      maskClosable={false}
      footer={[
        <Button key="back" className="btn btn-danger" onClick={handleCancel}>
          Discard
        </Button>,
        <Button
          key="submit"
          type="primary"
          className="btn btn-success"
          onClick={handleOk}
        >
          Submit
        </Button>,
      ]}
    >
      <div className="row m-2">
        {/* desgining Screen */}
        <div className="col-6 moduleDivDesigningScreen p-3">
          <div style={{ flex: 1, padding: "20px" }}>
            <h2>Designing Screen</h2>
            <Select
              defaultValue="color"
              style={{ width: "200px", marginBottom: "10px" }}
              onChange={handleSectionTypeChange}
            >
              <Option value="color">Color</Option>
              <Option value="gradient">Gradient</Option>
              <Option value="image">Image</Option>
            </Select>
            {sectionType === "color" && (
              <Input
                type="color"
                value={backgroundColor}
                onChange={handleBackgroundColorChange}
              />
            )}
            {sectionType === "gradient" && (
              <div>
                <div>
                  Number of Colors:{" "}
                  <Input
                    type="number"
                    min={2}
                    value={gradientColors.length}
                    onChange={handleGradientNumberChange}
                  />
                </div>
                {renderGradientInputs()}
                <div>
                  <Radio.Group
                    value={gradientType}
                    onChange={handleGradientTypeChange}
                  >
                    <Radio.Button value="linear">Linear</Radio.Button>
                    <Radio.Button value="radial">Radial</Radio.Button>
                  </Radio.Group>
                </div>
              </div>
            )}
            {sectionType === "image" && renderImageOptions()}
          </div>
          {/* Choose the type of the background Set */}
        </div>
        {/* preview screen */}
        <div className="col-6 moduleDivPreviewScreen">
          <h3>Preview Screen</h3>
          {renderDivs()}
        </div>
      </div>
    </Modal>
  );
};

export default BackgroundImageModel;
