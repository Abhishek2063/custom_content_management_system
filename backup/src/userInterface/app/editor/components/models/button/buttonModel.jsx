import { Modal } from "antd";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import ReactDOMServer from "react-dom/server";

const ButtonModel = (props) => {
  const handleCancel = () => {
    props.setModuleShow({
      ...props.moduleShow,
      moduleDivSectionShow: false,
      buttonSectionShow: false,
      backgroundImageSectionShow: false,
      FormSectionShow: false,
    });
  };

  const [buttonName, setButtonName] = useState("View Button");
  const [buttonShape, setButtonShape] = useState("square");
  const [buttonHoverEffect, setButtonHoverEffect] = useState("none");
  const [buttonColor, setButtonColor] = useState("#000000");
  const [buttonGradientColor1, setButtonGradientColor1] = useState("#000000");
  const [buttonGradientColor2, setButtonGradientColor2] = useState("#ffffff");

  const handleNameChange = (e) => {
    setButtonName(e.target.value);
  };

  const handleShapeChange = (e) => {
    setButtonShape(e.target.value);
  };

  const handleHoverEffectChange = (e) => {
    setButtonHoverEffect(e.target.value);
  };

  const handleColorChange = (color) => {
    setButtonColor(color.hex);
  };

  const handleGradientColorChange = (color, colorIndex) => {
    if (colorIndex === 1) {
      setButtonGradientColor1(color.hex);
    } else if (colorIndex === 2) {
      setButtonGradientColor2(color.hex);
    }
  };
  const style = {
    borderRadius: buttonShape === "rounded" ? "50px" : "0",
    backgroundColor: buttonColor,
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  };

  switch (buttonHoverEffect) {
    case "color":
      style.backgroundColor = buttonColor;
      break;
    case "gradient":
      style.backgroundImage = `linear-gradient(to right, ${buttonGradientColor1}, ${buttonGradientColor2})`;
      break;
    default:
      break;
  }

  function generateDivLayouts() {
    // Generate the div layouts dynamically
    const divLayouts = <div><button style={style}>{buttonName}</button></div>;
    const sourceCode = ReactDOMServer.renderToStaticMarkup(divLayouts);

    return sourceCode;
  }

  const handleOk = () => {
    props.setModuleShow({
      ...props.moduleShow,
      moduleDivSectionShow: false,
      buttonSectionShow: false,
      backgroundImageSectionShow: false,
      FormSectionShow: false,
    });

    props.setEditorMessage({
      ...props.editorMessage,
      message: props.editorMessage.message.concat(generateDivLayouts()),
    });
  };
  return (
    <div>
      <Modal
        title="Button"
        open={props.moduleShow.buttonSectionShow}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="row ">
          {/* desigining Section */}
          <div className="col-6 buttonDesginPanel d-flex ">
            <div className="m-5">
              <h4>Button Design Panel</h4>

              <div className="design-panel">
                <div className="m-3">
                  <label className="labelfordiv fw-bold">Button Name:</label>
                  <input
                    type="text"
                    value={buttonName}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="m-3">
                  <label className="labelfordiv fw-bold">Button Shape:</label>
                  <select value={buttonShape} onChange={handleShapeChange}>
                    <option value="square">Square</option>
                    <option value="circle">Circle</option>
                    <option value="rounded">Rounded</option>
                  </select>
                </div>

                <div className="m-3">
                  <label className="labelfordiv fw-bold">
                    Button Hover Effect:
                  </label>
                  <select
                    value={buttonHoverEffect}
                    onChange={handleHoverEffectChange}
                  >
                    <option value="none">None</option>
                    <option value="color">Color</option>
                    <option value="gradient">Gradient</option>
                  </select>
                </div>
                <div className="m-2">
                  {buttonHoverEffect === "color" && (
                    <label className="labelfordiv fw-bold">
                      Button Color:
                      <ChromePicker
                        color={buttonColor}
                        onChange={handleColorChange}
                      />
                    </label>
                  )}
                  {buttonHoverEffect === "gradient" && (
                    <div className="m-2">
                      <label className="labelfordiv fw-bold">
                        Gradient Color 1:
                        <ChromePicker
                          color={buttonGradientColor1}
                          onChange={(color) =>
                            handleGradientColorChange(color, 1)
                          }
                        />
                      </label>
                      <label className="labelfordiv fw-bold">
                        Gradient Color 2:
                        <ChromePicker
                          color={buttonGradientColor2}
                          onChange={(color) =>
                            handleGradientColorChange(color, 2)
                          }
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="col-6">
            <h4>Preview Screen</h4>

            <div className="button-preview">
              <button style={style}>{buttonName}</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ButtonModel;
