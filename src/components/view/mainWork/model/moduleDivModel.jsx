import { Modal } from "antd";
import React, { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import VerticalShadesClosedIcon from "@mui/icons-material/VerticalShadesClosed";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { PlusOutlined } from "@ant-design/icons";
import AddMoreDivLayoutModel from "./addMoreDivLayoutModel";
const ModuleDivModel = (props) => {
    const [addMoreLayoutModelShow,setAddMoreLayoutModel] = useState(false)
  const handleLayoutOption = (value) => {
    props.setModuleDivStates({
      ...props.moduleDivStates,
      layout: value,
    });
  };

  const handleOk = () => {
    props.setModelShowHide({
      ...props.modelShowHide,
      moduleDivModel: false,
      buttonModel: false,
      backgroundImageModel: false,
      FormModel: false,
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
        title="Module Div"
        open={props.modelShowHide.moduleDivModel}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="row m-2">
          {/* desgining Screen */}
          <div className="col-6 moduleDivDesigningScreen">
            <h3>Desiging Screen</h3>

            <h5>Layout Option</h5>
            <div className="row">
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => handleLayoutOption([12])}
                >
                  <CheckBoxOutlineBlankIcon />
                  [12]
                </button>
              </div>
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => handleLayoutOption([6, 6])}
                >
                  <ViewAgendaIcon /> [6,6]
                </button>
              </div>
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => handleLayoutOption([4, 4, 4])}
                >
                  <ViewColumnIcon /> [4,4,4]
                </button>
              </div>
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => handleLayoutOption([3, 3, 3, 3])}
                >
                  <VerticalShadesClosedIcon /> [3,3,3,3]
                </button>
              </div>
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => handleLayoutOption([12, 6, 6])}
                >
                  <ViewComfyIcon /> [12,6,6]
                </button>
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-info"  onClick={() => setAddMoreLayoutModel(true)}>
                  <PlusOutlined />
                </button>
              </div>
            </div>
          </div>
          {/* preview screen */}
          <div className="col-6 moduleDivPreviewScreen">
            <h3>Preview Screen</h3>
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
