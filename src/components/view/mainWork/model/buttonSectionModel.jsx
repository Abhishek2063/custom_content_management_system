import { Button, Modal, Select } from "antd";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";

const ModuleDivModel = (props) => {
  const [buttonValue, setButtonValue] = useState("View Button");
  const [buttonShape, setButtonShape] = useState("square");
  const [buttonWidth, setButtonWidth] = useState(100);
  const [buttonHeight, setButtonHeight] = useState(100);
  const [buttonFontSize, setButtonFontSize] = useState(20);
  const [buttonColorType, setButtonColorType] = useState("color");
  const [buttonColorValue, setButtonColorValue] = useState("#000");
  const [buttonGradientColorNumber, setButtonGradientColorNumber] = useState(1);
  const [buttonGradientColorTypeStyle, setButtonGradientColorTypeStyle] =
    useState("linear-gradient");
  const [
    buttonGradientColorTypeStyleValue,
    setButtonGradientColorTypeStyleValue,
  ] = useState("0deg");
  const [buttonGradientColorRadialType, setButtonGradientColorRadialType] =
    useState({
      shape: "ellipse",
      size: "farthest-corner",
      position: "center",
    });
  const [buttonGradientColorValue, setButtonGradientColorValue] = useState([]);
  // Hover type states
  const [buttonHoverColorType, setButtonHoverColorType] = useState("color");
  const [buttonHoverColorValue, setButtonHoverColorValue] = useState("#000");
  const [buttonHoverGradientColorNumber, setButtonHoverGradientColorNumber] =
    useState(1);
  const [
    buttonHoverGradientColorTypeStyle,
    setButtonHoverGradientColorTypeStyle,
  ] = useState("linear-gradient");
  const [
    buttonHoverGradientColorTypeStyleValue,
    setButtonHoverGradientColorTypeStyleValue,
  ] = useState("0deg");
  const [
    buttonHoverGradientColorRadialType,
    setButtonHoverGradientColorRadialType,
  ] = useState({
    shape: "ellipse",
    size: "farthest-corner",
    position: "center",
  });
  const [buttonHoverGradientColorValue, setButtonHoverGradientColorValue] =
    useState([]);

  const handleButtonNameChange = (e) => {
    setButtonValue(e.target.value);
  };

  const handleButtonShapeChange = (value) => {
    setButtonShape(value);
  };

  const handleButtonWidthChange = (event) => {
    setButtonWidth(Number(event.target.value));
  };

  const handleButtonHeightChange = (event) => {
    setButtonHeight(Number(event.target.value));
  };

  const handleButtonFontSizeChange = (event) => {
    setButtonFontSize(Number(event.target.value));
  };

  const handleButtonColorTypeChange = (value) => {
    setButtonColorType(value);
  };

  const handleButtonColorValueChange = (e) => {
    setButtonColorValue(e.target.value);
  };

  const handleButtonGradientColorNumberChange = (event) => {
    setButtonGradientColorNumber(Number(event.target.value));
    setButtonGradientColorValue(
      new Array(Number(event.target.value)).fill("#5f1c1c")
    );
  };

  const handleButtonGradientColorTypeChange = (value) => {
    setButtonGradientColorTypeStyle(value);
  };

  const handleButtonGradientColorTypeValueChange = (value) => {
    setButtonGradientColorTypeStyleValue(value);
  };

  const handleRadialColorShape = (value) => {
    setButtonGradientColorRadialType({
      ...buttonGradientColorRadialType,
      shape: value,
    });
  };

  const handleRadialColorSize = (value) => {
    setButtonGradientColorRadialType({
      ...buttonGradientColorRadialType,
      size: value,
    });
  };
  const handleRadialColorPosition = (value) => {
    setButtonGradientColorRadialType({
      ...buttonGradientColorRadialType,
      position: value,
    });
  };

  const handleGradientColorValueChange = (event, index) => {
    const newBorderColors = [...buttonGradientColorValue];
    newBorderColors[index] = event.target.value;
    setButtonGradientColorValue(newBorderColors);
  };

  // Hover button functions

  const handleButtonHoverColorTypeChange = (value) => {
    setButtonHoverColorType(value);
  };

  const handleButtonHoverColorValueChange = (e) => {
    setButtonHoverColorValue(e.target.value);
  };

  const handleButtonHoverGradientColorNumberChange = (event) => {
    setButtonHoverGradientColorNumber(Number(event.target.value));
    setButtonHoverGradientColorValue(
      new Array(Number(event.target.value)).fill("#5f1c1c")
    );
  };

  const handleButtonHoverGradientColorTypeChange = (value) => {
    setButtonHoverGradientColorTypeStyle(value);
  };

  const handleButtonHoverGradientColorTypeValueChange = (value) => {
    setButtonHoverGradientColorTypeStyleValue(value);
  };

  const handleRadialHoverColorShape = (value) => {
    setButtonHoverGradientColorRadialType({
      ...buttonHoverGradientColorRadialType,
      shape: value,
    });
  };

  const handleRadialHoverColorSize = (value) => {
    setButtonHoverGradientColorRadialType({
      ...buttonHoverGradientColorRadialType,
      size: value,
    });
  };
  const handleRadialHoverColorPosition = (value) => {
    setButtonHoverGradientColorRadialType({
      ...buttonHoverGradientColorRadialType,
      position: value,
    });
  };

  const handleGradientHoverColorValueChange = (event, index) => {
    const newBorderColors = [...buttonGradientColorValue];
    newBorderColors[index] = event.target.value;
    setButtonHoverGradientColorValue(newBorderColors);
  };

  // Helper function to generate gradient style
  const getGradientStyle = (type, value, colors) => {
    if (type === "linear-gradient") {
      return `${type}(${value}, ${colors.join(", ")})`;
    } else if (type === "radial-gradient") {
      const { shape, size, position } = buttonGradientColorRadialType;
      return `${type}(${shape} ${size} at ${position}, ${colors.join(", ")})`;
    }
    return "";
  };

  // Define the style object for the button
  const buttonStyle = {
    width: buttonWidth,
    height: buttonHeight,
    fontSize: buttonFontSize,
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    borderRadius: buttonShape === "rounded" ? "50px" : 0,

    background: buttonColorValue,
    backgroundColor : buttonHoverColorValue,
  };
  switch (buttonColorType) {
    case "color":
      buttonStyle.backgroundColor = buttonColorValue;
      break;
    case "gradient":
      buttonStyle.backgroundImage = getGradientStyle(
        buttonGradientColorTypeStyle,
        buttonGradientColorTypeStyleValue,
        buttonGradientColorValue
      );
      break;
    default:
      break;
  }

  switch (buttonHoverColorType) {
    case "color":
      buttonStyle.backgroundColor = buttonHoverColorValue;
      break;
    case "gradient":
      buttonStyle.backgroundColor = getGradientStyle(
        buttonHoverGradientColorTypeStyle,
        buttonHoverGradientColorTypeStyleValue,
        buttonHoverGradientColorValue
      );
      break;
    default:
      break;
  }
 

  const renderDivs = () => {
    const ButtonLayout = (
      <div className="preview row">
        <button
          style={buttonStyle}
          
        >
          {buttonValue}
        </button>
      </div>
    );

    return ButtonLayout;
  };

  const generateButtonLayouts = () => {
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
      message: props.editorMessage.message.concat(generateButtonLayouts()),
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
    <>
      <Modal
        title="Button"
        className="buttonModelBox"
        open={props.modelShowHide.buttonModel}
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
            <h3>Desiging Screen</h3>

            {/* Button Name */}
            <div className="form-group">
              <label htmlFor="buttonValue" className="fw-bold">
                Enter Button Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="buttonValue"
                placeholder="Enter Button Name"
                value={buttonValue}
                onChange={handleButtonNameChange}
              ></input>
            </div>

            {/* button shape */}

            <div className="form-group mt-3">
              <label htmlFor="buttonShape" className="fw-bold">
                Choose Button Shape :
              </label>
              <Select
                value={buttonShape}
                onChange={handleButtonShapeChange}
                options={[
                  {
                    value: "rounded",
                    label: "Rounded",
                  },
                  {
                    value: "square",
                    label: "Square",
                  },
                ]}
              />
            </div>

            {/* width of the button */}
            <div className="col-12 mt-4">
              <label htmlFor="width" className="fw-bold">
                Width of the Button (in pixels):
              </label>
              <input
                id="width"
                type="number"
                className="form-control"
                min="0"
                value={buttonWidth}
                onChange={handleButtonWidthChange}
              />
            </div>

            {/* Height of the button */}
            <div className="col-12 mt-4">
              <label htmlFor="height" className="fw-bold">
                Height of the Button (in pixels):
              </label>
              <input
                id="height"
                className="form-control"
                type="number"
                min="0"
                value={buttonHeight}
                onChange={handleButtonHeightChange}
              />
            </div>

            {/* Font Size of the button */}
            <div className="col-12 mt-4">
              <label htmlFor="fontSize" className="fw-bold">
                Font Size of the Button Text(in pixels):
              </label>
              <input
                id="fontSize"
                className="form-control"
                type="number"
                min="0"
                value={buttonFontSize}
                onChange={handleButtonFontSizeChange}
              />
            </div>

            {/* button color type */}
            <div className="form-group mt-3">
              <label htmlFor="buttonColor" className="fw-bold">
                Choose Button Color Type :
              </label>
              <Select
                value={buttonColorType}
                onChange={handleButtonColorTypeChange}
                options={[
                  {
                    value: "color",
                    label: "Color",
                  },
                  {
                    value: "gradient",
                    label: "Gradient",
                  },
                ]}
              />
            </div>

            {/* Button Color Choose */}

            {/* color type button choose */}
            {buttonColorType === "color" ? (
              <div className="col-12 mt-4">
                <label htmlFor="buttonColor" className="fw-bold">
                  Color of the Button(in pixels):
                </label>
                <input
                  id="buttonColor"
                  type="color"
                  value={buttonColorValue}
                  onChange={handleButtonColorValueChange}
                />
              </div>
            ) : (
              ""
            )}

            {/* Gradient Color Type */}

            {/* gradient Color Numbers */}
            {buttonColorType === "gradient" ? (
              <div className="col-12 mt-4">
                <label htmlFor="gradientColorType" className="fw-bold">
                  Number of the Gradient Color (in pixels):
                </label>
                <input
                  id="gradientColorType"
                  className="form-control"
                  type="number"
                  min="1"
                  value={buttonGradientColorNumber}
                  onChange={handleButtonGradientColorNumberChange}
                />
              </div>
            ) : (
              ""
            )}

            {/* Gradient Style Type */}
            {buttonColorType === "gradient" ? (
              <div className="form-group mt-3">
                <label htmlFor="buttonColor" className="fw-bold">
                  Choose Button Gradient Color Type Style :
                </label>
                <Select
                  value={buttonGradientColorTypeStyle}
                  onChange={handleButtonGradientColorTypeChange}
                  options={[
                    {
                      value: "linear-gradient",
                      label: "Linear Gradients",
                    },
                    {
                      value: "radial-gradient",
                      label: "Radial Gradients",
                    },
                    {
                      value: "conic-gradient",
                      label: "Conic Gradients",
                    },
                  ]}
                />
              </div>
            ) : (
              ""
            )}
            {/* linear gradient type */}
            {(buttonGradientColorTypeStyle === "linear-gradient") &
            (buttonColorType === "gradient") ? (
              <div className="form-group mt-3">
                <label htmlFor="buttonColor" className="fw-bold">
                  Choose Linear Gradient Color Type Style :
                </label>
                <Select
                  value={buttonGradientColorTypeStyleValue}
                  onChange={handleButtonGradientColorTypeValueChange}
                  options={[
                    {
                      value: "to top",
                      label: "to top",
                    },
                    {
                      value: "to top right",
                      label: "to top right",
                    },
                    {
                      value: "to right",
                      label: "to right",
                    },
                    {
                      value: "to bottom right",
                      label: "to bottom right",
                    },
                    {
                      value: "to bottom",
                      label: "to bottom",
                    },
                    {
                      value: "to bottom left",
                      label: "to bottom left",
                    },
                    {
                      value: "to left",
                      label: "to left",
                    },
                    {
                      value: "to top left",
                      label: "to top left",
                    },
                    {
                      value: " 0deg",
                      label: " 0 degrees",
                    },
                    {
                      value: " 45deg",
                      label: " 45 degrees",
                    },
                    {
                      value: " 90deg",
                      label: " 90 degrees",
                    },
                    {
                      value: " 135deg",
                      label: " 135 degrees",
                    },
                    {
                      value: " 180deg",
                      label: " 180 degrees",
                    },
                    {
                      value: " 225deg",
                      label: " 225 degrees",
                    },
                    {
                      value: " 270deg",
                      label: " 270 degrees",
                    },
                    {
                      value: " 315deg",
                      label: "  315 degrees",
                    },
                  ]}
                />
              </div>
            ) : (
              ""
            )}
            {/* radial gradient type */}
            {/* shape */}
            {buttonGradientColorTypeStyle === "radial-gradient" &&
            buttonColorType === "gradient" ? (
              <div className="form-group mt-3">
                <label htmlFor="buttonColor" className="fw-bold">
                  Choose Radial Gradient Color Shape:
                </label>
                <Select
                  value={buttonGradientColorRadialType.shape}
                  onChange={handleRadialColorShape}
                  options={[
                    {
                      value: "ellipse",
                      label: "Ellipse",
                    },
                    {
                      value: "circle",
                      label: "Circle",
                    },
                  ]}
                />
              </div>
            ) : (
              ""
            )}

            {/* Size */}
            {buttonGradientColorTypeStyle === "radial-gradient" &&
            buttonColorType === "gradient" ? (
              <div className="form-group mt-3">
                <label htmlFor="buttonColor" className="fw-bold">
                  Choose Radial Gradient Color Size:
                </label>
                <Select
                  value={buttonGradientColorRadialType.size}
                  onChange={handleRadialColorSize}
                  options={[
                    {
                      value: "farthest-corner ",
                      label: "Farthest Corner ",
                    },
                    {
                      value: "closest-side",
                      label: "Closest Side",
                    },

                    {
                      value: "closest-corner",
                      label: "Closest Corner",
                    },

                    {
                      value: "farthest-side",
                      label: "Farthest Side",
                    },
                  ]}
                />
              </div>
            ) : (
              ""
            )}

            {/* Position */}
            {buttonGradientColorTypeStyle === "radial-gradient" &&
            buttonColorType === "gradient" ? (
              <div className="form-group mt-3">
                <label htmlFor="buttonColor" className="fw-bold">
                  Choose Radial Gradient Color Position:
                </label>
                <Select
                  value={buttonGradientColorRadialType.position}
                  onChange={handleRadialColorPosition}
                  options={[
                    {
                      value: "to center",
                      label: "To center",
                    },
                    {
                      value: "to top",
                      label: "To top",
                    },
                    {
                      value: "to top right",
                      label: "To top right",
                    },
                    {
                      value: "to right",
                      label: "To right",
                    },
                    {
                      value: "to bottom right",
                      label: "To bottom right",
                    },
                    {
                      value: "to bottom",
                      label: "To bottom",
                    },
                    {
                      value: "to bottom left",
                      label: "To bottom left",
                    },
                    {
                      value: "to left",
                      label: "To left",
                    },
                    {
                      value: "to top left",
                      label: "To top left",
                    },
                    {
                      value: " 0deg",
                      label: " 0 degrees",
                    },
                    {
                      value: " 45deg",
                      label: " 45 degrees",
                    },
                    {
                      value: " 90deg",
                      label: " 90 degrees",
                    },
                    {
                      value: " 135deg",
                      label: " 135 degrees",
                    },
                    {
                      value: " 180deg",
                      label: " 180 degrees",
                    },
                    {
                      value: " 225deg",
                      label: " 225 degrees",
                    },
                    {
                      value: " 270deg",
                      label: " 270 degrees",
                    },
                    {
                      value: " 315deg",
                      label: " 315 degrees",
                    },
                  ]}
                />
              </div>
            ) : (
              ""
            )}

            {/* Gradient Color */}
            {buttonColorType === "gradient"
              ? Array.from({ length: buttonGradientColorNumber }).map(
                  (_, index) => (
                    <div className="form-group m-4" key={index}>
                      <label
                        htmlFor={`gradientColorValue_${index}`}
                        className="fw-bold"
                      >
                        Select Gradient Color {index + 1}:
                      </label>
                      <input
                        id={`gradientColorValue_${index}`}
                        type="color"
                        value={buttonGradientColorValue[index]}
                        onChange={(event) =>
                          handleGradientColorValueChange(event, index)
                        }
                      />
                    </div>
                  )
                )
              : ""}

            {/* Hover Effect in button */}

            <h5 className="mt-3">Hover Effect Of The Button</h5>
            {/* button color type */}
            <div className="form-group mt-3">
              <label htmlFor="buttonColor" className="fw-bold">
                Choose Button Color Type :
              </label>
              <Select
                value={buttonHoverColorType}
                onChange={handleButtonHoverColorTypeChange}
                options={[
                  {
                    value: "color",
                    label: "Color",
                  },
                  {
                    value: "gradient",
                    label: "Gradient",
                  },
                ]}
              />
            </div>

            {/* Button Color Choose */}

            {/* color type button choose */}
            {buttonHoverColorType === "color" ? (
              <div className="col-12 mt-4">
                <label htmlFor="buttonColor" className="fw-bold">
                  Color of the Button(in pixels):
                </label>
                <input
                  id="buttonColor"
                  type="color"
                  value={buttonHoverColorValue}
                  onChange={handleButtonHoverColorValueChange}
                />
              </div>
            ) : (
              ""
            )}

            {/* Gradient Color Type */}

            {/* gradient Color Numbers */}
            {buttonHoverColorType === "gradient" ? (
              <div className="col-12 mt-4">
                <label htmlFor="gradientColorType" className="fw-bold">
                  Number of the Gradient Color (in pixels):
                </label>
                <input
                  id="gradientColorType"
                  className="form-control"
                  type="number"
                  min="1"
                  value={buttonHoverGradientColorNumber}
                  onChange={handleButtonHoverGradientColorNumberChange}
                />
              </div>
            ) : (
              ""
            )}

            {/* Gradient Style Type */}
            {buttonHoverColorType === "gradient" ? (
              <div className="form-group mt-3">
                <label htmlFor="buttonColor" className="fw-bold">
                  Choose Button Gradient Color Type Style :
                </label>
                <Select
                  value={buttonHoverGradientColorTypeStyle}
                  onChange={handleButtonHoverGradientColorTypeChange}
                  options={[
                    {
                      value: "linear-gradient",
                      label: "Linear Gradients",
                    },
                    {
                      value: "radial-gradient",
                      label: "Radial Gradients",
                    },
                    {
                      value: "conic-gradient",
                      label: "Conic Gradients",
                    },
                  ]}
                />
              </div>
            ) : (
              ""
            )}
            {/* linear gradient type */}
            {(buttonHoverGradientColorTypeStyle === "linear-gradient") &
            (buttonHoverColorType === "gradient") ? (
              <div className="form-group mt-3">
                <label htmlFor="buttonColor" className="fw-bold">
                  Choose Linear Gradient Color Type Style :
                </label>
                <Select
                  value={buttonHoverGradientColorTypeStyleValue}
                  onChange={handleButtonHoverGradientColorTypeValueChange}
                    options={[
                      {
                        value: "to top",
                        label: "to top",
                      },
                      {
                        value: "to top right",
                        label: "to top right",
                      },
                      {
                        value: "to right",
                        label: "to right",
                      },
                      {
                        value: "to bottom right",
                        label: "to bottom right",
                      },
                      {
                        value: "to bottom",
                        label: "to bottom",
                      },
                      {
                        value: "to bottom left",
                        label: "to bottom left",
                      },
                      {
                        value: "to left",
                        label: "to left",
                      },
                      {
                        value: "to top left",
                        label: "to top left",
                      },
                      {
                        value: " 0deg",
                        label: " 0 degrees",
                      },
                      {
                        value: " 45deg",
                        label: " 45 degrees",
                      },
                      {
                        value: " 90deg",
                        label: " 90 degrees",
                      },
                      {
                        value: " 135deg",
                        label: " 135 degrees",
                      },
                      {
                        value: " 180deg",
                        label: " 180 degrees",
                      },
                      {
                        value: " 225deg",
                        label: " 225 degrees",
                      },
                      {
                        value: " 270deg",
                        label: " 270 degrees",
                      },
                      {
                        value: " 315deg",
                        label: "  315 degrees",
                      },
                    ]}
                />
              </div>
            ) : (
              ""
            )}
            {/* radial gradient type */}
            {/* shape */}
            {buttonHoverGradientColorTypeStyle === "radial-gradient" &&
            buttonHoverColorType === "gradient" ? (
              <div className="form-group mt-3">
                <label htmlFor="buttonColor" className="fw-bold">
                  Choose Radial Gradient Color Shape:
                </label>
                <Select
                  value={buttonHoverGradientColorRadialType.shape}
                  onChange={handleRadialHoverColorShape}
                  options={[
                    {
                      value: "ellipse",
                      label: "Ellipse",
                    },
                    {
                      value: "circle",
                      label: "Circle",
                    },
                  ]}
                />
              </div>
            ) : (
              ""
            )}

            {/* Size */}
            {buttonHoverGradientColorTypeStyle === "radial-gradient" &&
            buttonHoverColorType === "gradient" ? (
              <div className="form-group mt-3">
                <label htmlFor="buttonColor" className="fw-bold">
                  Choose Radial Gradient Color Size:
                </label>
                <Select
                  value={buttonHoverGradientColorRadialType.size}
                  onChange={handleRadialHoverColorSize}
                  options={[
                    {
                      value: "farthest-corner ",
                      label: "Farthest Corner ",
                    },
                    {
                      value: "closest-side",
                      label: "Closest Side",
                    },

                    {
                      value: "closest-corner",
                      label: "Closest Corner",
                    },

                    {
                      value: "farthest-side",
                      label: "Farthest Side",
                    },
                  ]}
                />
              </div>
            ) : (
              ""
            )}

            {/* Position */}
            {buttonHoverGradientColorTypeStyle === "radial-gradient" &&
            buttonHoverColorType === "gradient" ? (
              <div className="form-group mt-3">
                <label htmlFor="buttonColor" className="fw-bold">
                  Choose Radial Gradient Color Position:
                </label>
                <Select
                  value={buttonHoverGradientColorRadialType.position}
                  onChange={handleRadialHoverColorPosition}
                  options={[
                    {
                      value: "to center",
                      label: "To center",
                    },
                    {
                      value: "to top",
                      label: "To top",
                    },
                    {
                      value: "to top right",
                      label: "To top right",
                    },
                    {
                      value: "to right",
                      label: "To right",
                    },
                    {
                      value: "to bottom right",
                      label: "To bottom right",
                    },
                    {
                      value: "to bottom",
                      label: "To bottom",
                    },
                    {
                      value: "to bottom left",
                      label: "To bottom left",
                    },
                    {
                      value: "to left",
                      label: "To left",
                    },
                    {
                      value: "to top left",
                      label: "To top left",
                    },
                    {
                      value: " 0deg",
                      label: " 0 degrees",
                    },
                    {
                      value: " 45deg",
                      label: " 45 degrees",
                    },
                    {
                      value: " 90deg",
                      label: " 90 degrees",
                    },
                    {
                      value: " 135deg",
                      label: " 135 degrees",
                    },
                    {
                      value: " 180deg",
                      label: " 180 degrees",
                    },
                    {
                      value: " 225deg",
                      label: " 225 degrees",
                    },
                    {
                      value: " 270deg",
                      label: " 270 degrees",
                    },
                    {
                      value: " 315deg",
                      label: " 315 degrees",
                    },
                  ]}
                />
              </div>
            ) : (
              ""
            )}

            {/* Gradient Color */}
            {buttonHoverColorType === "gradient"
              ? Array.from({ length: buttonHoverGradientColorNumber }).map(
                  (_, index) => (
                    <div className="form-group m-4" key={index}>
                      <label
                        htmlFor={`gradientColorValue_${index}`}
                        className="fw-bold"
                      >
                        Select Gradient Color {index + 1}:
                      </label>
                      <input
                        id={`gradientColorValue_${index}`}
                        type="color"
                        value={buttonHoverGradientColorValue[index]}
                        onChange={(event) =>
                          handleGradientHoverColorValueChange(event, index)
                        }
                      />
                    </div>
                  )
                )
              : ""}
          </div>
          {/* preview screen */}
          <div className="col-6 moduleDivPreviewScreen">
            <h3>Preview Screen</h3>
            {renderDivs()}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModuleDivModel;
