import React from "react";
import { Modal } from "antd";
import ReactDOMServer from "react-dom/server";

const ModuleDiv = (props) => {
  const handleLayoutChange = (layoutNumber) => {
    props.setLayout(layoutNumber);
  };

  const handleShapeChange = (index, shape) => {
    props.setShapes((prevShapes) => {
      const newShapes = [...prevShapes];
      newShapes[index] = shape;
      return newShapes;
    });
  };

  const handleColorChange = (index, color) => {
    props.setColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = color;
      return newColors;
    });
  };

  const handleSpacingChange = (value) => {
    props.setSpacing(value);
  };
  const renderDivs = () => {
    const divLayout = (
      <div className="row">
        {props.layoutOptions[props.layout - 1].cols.map((col, index) => {
          return (
            <div
              className={`col-${col}`}
              key={`div-${index}`}
              style={{
                backgroundColor: props.colors[index],
                // background: gradientColor[index],
                margin: props.spacing,
                height: "200px",
                borderRadius:
                  props.shapes[index] === "rounded"
                    ? "8px"
                    : props.shapes[index] === "circle"
                    ? "50%"
                    : " 0",
              }}
            ></div>
          );
        })}
      </div>
    );

    return divLayout;
  };

  function generateDivLayouts() {
    // Generate the div layouts dynamically
    const sourceCode = ReactDOMServer.renderToStaticMarkup(renderDivs());
    return sourceCode;
  }

  const handleOk = () => {
    props.setModuleShow({
      ...props.moduleShow,
      moduleDivSectionShow: false,
    });

    props.setEditorMessage({
      ...props.editorMessage,
      message: props.editorMessage.message.concat(generateDivLayouts()),
    });
  };
  const handleCancel = () => {
    props.setModuleShow({
      ...props.moduleShow,
      moduleDivSectionShow: false,
    });
  };
  return (
    <>
      <Modal
        title="Module Div Design"
        open={props.moduleShow.moduleDivSectionShow}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="row ">
          {/* Desgining Screen */}
          <div className="col-6 moduleDivDesginingScreen d-flex justify-content-center">
            <div className="row">
              <h2>Design Screen</h2>
              <div>
                <h4 className="fw-bold">Select Layout:</h4>
                {props.layoutOptions.map((option, index) => (
                  <button
                    key={`button_${index}`}
                    onClick={() => handleLayoutChange(option.id)}
                    style={{ marginRight: "1rem" }}
                    disabled={props.layout === option.id}
                    className="btn btn-primary mt-1"
                  >
                    {option.name}
                  </button>
                ))}
              </div>

              <div>
                <h3 className="fw-bold mt-3">Shape:</h3>
                {props.layoutOptions[props.layout - 1].cols.map(
                  (col, index) => (
                    <div
                      className="col-12 mt-2  "
                      key={`layoutDivKey_${index}`}
                    >
                      <label
                        // htmlFor={shapes - `${index}`}
                        className="labelfordiv fw-bold"
                      >
                        div #{index + 1}Shape:
                      </label>
                      <select
                        // id={shapes - `${index}`}
                        value={props.shapes[index]}
                        onChange={(e) =>
                          handleShapeChange(index, e.target.value)
                        }
                      >
                        {props.shapeOptions.map((shape) => (
                          <option value={shape} key={`shapeKey_${shape}`}>
                            {shape}
                          </option>
                        ))}
                      </select>
                    </div>
                  )
                )}
              </div>

              <div>
                <h3 className="fw-bold mt-3">Colors:</h3>
                <div className="row">
                  {props.layoutOptions[props.layout - 1].cols.map(
                    (col, index) => (
                      <div className="col-3 mt-2  " key={`layout_${index}`}>
                        <div className="d-flex">
                          <label className="fw-bold">
                            div #{index + 1}
                            <input
                              type="color"
                              value={props.colors[index]}
                              onChange={(e) =>
                                handleColorChange(index, e.target.value)
                              }
                            />
                          </label>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="fw-bold mt-3">Spacing:</h3>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={props.spacing}
                  onChange={(e) =>
                    handleSpacingChange(parseInt(e.target.value))
                  }
                />
              </div>
            </div>
          </div>

          {/* preview Screen */}
          <div className="col-6">
            <h2>Preview Screen</h2>
            <div className="preview row">{renderDivs()}</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModuleDiv;
