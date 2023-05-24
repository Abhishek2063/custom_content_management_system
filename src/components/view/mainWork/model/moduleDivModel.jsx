import { Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import VerticalShadesClosedIcon from "@mui/icons-material/VerticalShadesClosed";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { PlusOutlined } from "@ant-design/icons";
import AddMoreDivLayoutModel from "./addMoreDivLayoutModel";
import ReactDOMServer from "react-dom/server";

const ModuleDivModel = (props) => {
  const [addMoreLayoutModelShow, setAddMoreLayoutModel] = useState(false);

  const handleLayoutOption = (value) => {
    props.setModuleDivStates({
      ...props.moduleDivStates,
      layout: value,
    });
  };

  useEffect(() => {
    props.setModuleDivStates({
      ...props.moduleDivStates,
      borders: new Array(props.moduleDivStates.layout.length).fill("1"),
      borderColors: new Array(props.moduleDivStates.layout.length).fill(
        "#5f1c1c"
      ),
    }); // eslint-disable-next-line
  }, [props.moduleDivStates.layout]);

  const handleShapeChange = (value) => {
    props.setModuleDivStates({
      ...props.moduleDivStates,
      shape: value,
    });
  };

  const handleColorChange = (event, index) => {
    const newColors = [...props.moduleDivStates.colors];
    newColors[index] = event.target.value;
    props.setModuleDivStates({
      ...props.moduleDivStates,
      colors: newColors,
    });
  };

  const handleSpacingChange = (event) => {
    props.setModuleDivStates({
      ...props.moduleDivStates,
      spacing: Number(event.target.value),
    });
  };

  const handleHeightChange = (event) => {
    props.setModuleDivStates({
      ...props.moduleDivStates,
      divHeight: Number(event.target.value),
    });
  };

  const handleBorderChange = (event, index) => {
    const newBorders = [...props.moduleDivStates.borders];
    newBorders[index] = event.target.value;
    props.setModuleDivStates({
      ...props.moduleDivStates,
      borders: newBorders,
    });
  };

  const handleBorderColorChange = (event, index) => {
    const newBorderColors = [...props.moduleDivStates.borderColors];
    newBorderColors[index] = event.target.value;
    props.setModuleDivStates({
      ...props.moduleDivStates,
      borderColors: newBorderColors,
    });
  };

  const renderDivs = () => {
    const divLayout = (
      <div className="preview row">
        {props.moduleDivStates.layout.map((col, index) => (
          <div
            key={index}
            className={`col-${col} ${props.moduleDivStates.shape}`}
            style={{
              height: `${props.moduleDivStates.divHeight}px`,
              backgroundColor: props.moduleDivStates.colors[index] || "",
              margin: `0 ${props.moduleDivStates.spacing}px`,
              border:
                `${props.moduleDivStates.borders[index]}px solid ${props.moduleDivStates.borderColors[index]}` ||
                "none",
            }}
          />
        ))}
      </div>
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

    props.setModuleDivStates({
      ...props.moduleDivStates,
      layout: [12],
      shape: "square",
      colors: [
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
      ],
      spacing: 0,
      divHeight: 100,
      borders: ["1"],
      borderColors: ["#f05151"],
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
    props.setModuleDivStates({
      ...props.moduleDivStates,
      layout: [12],
      shape: "square",
      colors: [
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
        "#f05151",
      ],
      spacing: 0,
      divHeight: 100,
      borders: ["1"],
      borderColors: ["#f05151"],
    });
  };
  return (
    <>
      <Modal
        title="Module Div"
        open={props.modelShowHide.moduleDivModel}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="row m-2">
          {/* desgining Screen */}
          <div className="col-6 moduleDivDesigningScreen p-3">
            <h3>Desiging Screen</h3>
            {/* layout options */}
            <h5>Layout Option</h5>
            <div className="row">
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary m-2 layoutButton"
                  onClick={() => handleLayoutOption([12])}
                >
                  <CheckBoxOutlineBlankIcon />
                  [12]
                </button>
              </div>
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary m-2 layoutButton"
                  onClick={() => handleLayoutOption([6, 6])}
                >
                  <ViewAgendaIcon /> [6,6]
                </button>
              </div>
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary m-2 layoutButton"
                  onClick={() => handleLayoutOption([4, 4, 4])}
                >
                  <ViewColumnIcon /> [4,4,4]
                </button>
              </div>
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary m-2 layoutButton"
                  onClick={() => handleLayoutOption([3, 3, 3, 3])}
                >
                  <VerticalShadesClosedIcon /> [3,3,3,3]
                </button>
              </div>
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary m-2 layoutButton"
                  onClick={() => handleLayoutOption([12, 6, 6])}
                >
                  <ViewComfyIcon /> [12,6,6]
                </button>
              </div>
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-info m-2 layoutButton"
                  onClick={() => setAddMoreLayoutModel(true)}
                >
                  <PlusOutlined /> Create
                </button>
              </div>
            </div>

            {/* Shape selection */}

            <div className="col-12 mt-4">
              <label htmlFor="shape" className="fw-bold">
                Select Shape:
              </label>

              <Select
                value={props.moduleDivStates.shape}
                onChange={handleShapeChange}
                options={[
                  {
                    value: "rounded",
                    label: "rounded",
                  },
                  {
                    value: "circle",
                    label: "circle",
                  },
                  {
                    value: "square",
                    label: "square",
                  },
                ]}
              />
            </div>

            {/* Div color inputs */}
            <div className="row">
              {props.moduleDivStates.layout.map((col, index) => (
                <div key={index} className="mt-3 col-5">
                  <label htmlFor={`color-${index}`} className="fw-bold">
                    Color for Div {index + 1}:
                  </label>
                  <input
                    id={`color-${index}`}
                    type="color"
                    value={props.moduleDivStates.colors[index]}
                    onChange={(event) => handleColorChange(event, index)}
                  />
                </div>
              ))}
            </div>
            {/* Spacing input */}

            <div className="col-12 mt-4">
              <label htmlFor="spacing" className="fw-bold">
                Spacing between Divs (in pixels):
              </label>
              <input
                id="spacing"
                type="number"
                min="0"
                value={props.moduleDivStates.spacing}
                onChange={handleSpacingChange}
              />
            </div>

            {/* Height input */}
            <div className="col-12 mt-4">
              <label htmlFor="height" className="fw-bold">
                Height of Divs (in pixels):
              </label>
              <input
                id="height"
                type="number"
                min="0"
                value={props.moduleDivStates.divHeight}
                onChange={handleHeightChange}
              />
            </div>

            {props.moduleDivStates.layout.map((col, index) => (
              <div key={index} className="col-12 mt-2">
                <label htmlFor={`border_${index}`} className="fw-bold">
                  Border for Div {index + 1}:
                </label>

                <input
                  id={`border_${index}`}
                  type="number"
                  min="0"
                  value={props.moduleDivStates.borders[index]}
                  onChange={(event) => handleBorderChange(event, index)}
                />
              </div>
            ))}
            {props.moduleDivStates.layout.map((col, index) => (
              <div key={index} className="col-12 mt-2">
                <label htmlFor={`borderColor_${index}`} className="fw-bold">
                  Border Color for Div {index + 1}:
                </label>
                <input
                  id={`borderColor_${index}`}
                  type="color"
                  value={props.moduleDivStates.borderColors[index]}
                  onChange={(event) => handleBorderColorChange(event, index)}
                />
              </div>
            ))}
          </div>
          {/* preview screen */}
          <div className="col-6 moduleDivPreviewScreen">
            <h3>Preview Screen</h3>
            {renderDivs()}
          </div>
        </div>
      </Modal>

      {/* addMorelayoutModel */}
      <AddMoreDivLayoutModel
        moduleDivStates={props.moduleDivStates}
        setModuleDivStates={props.setModuleDivStates}
        addMoreLayoutModelShow={addMoreLayoutModelShow}
        setAddMoreLayoutModel={setAddMoreLayoutModel}
      />
    </>
  );
};

export default ModuleDivModel;
