import { Button, Modal, Select } from "antd";
import React, { useState } from "react";

const AddMoreDivLayoutModel = (props) => {
  const [numberOfColumns, setNumberOfColumns] = useState([1]);
  const [columnValues, setColumnValues] = useState(["12"]);

  const handleChange = (value) => {
    setNumberOfColumns([value]);

    setColumnValues(Array.from({ length: value }, () => "2"));
  };
  const handleColumnChange = (value, index) => {
    const newColumnValues = [...columnValues];
    newColumnValues[index] = value;
    setColumnValues(newColumnValues);
  };
  const handleOk = () => {
    props.setAddMoreLayoutModel(false);
    props.setModuleDivStates({
      ...props.moduleDivStates,
      layout: columnValues,
    });
    setColumnValues([]);
    setNumberOfColumns([1]);
  };
  const handleCancel = () => {
    props.setAddMoreLayoutModel(false);
    setColumnValues([]);
    setNumberOfColumns([1]);
  };
  return (
    <>
      <Modal
        title="Add More Div Layout"
        open={props.addMoreLayoutModelShow}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        maskClosable={false}
        className="addMoreDivModelBox"
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
          <div className="col-6 moduleDivDesigningScreen">
            <h3>Desiging Screen</h3>

            <div className="form-group">
              <label htmlFor="numberColumn" className="fw-bold">
                Select Number Of Columns :
              </label>
              <Select
                value={numberOfColumns}
                onChange={handleChange}
                options={[
                  {
                    value: "1",
                    label: "1",
                  },
                  {
                    value: "2",
                    label: "2",
                  },
                  {
                    value: "3",
                    label: "3",
                  },
                  {
                    value: "4",
                    label: "4",
                  },
                  {
                    value: "5",
                    label: "5",
                  },
                  {
                    value: "6",
                    label: "6",
                  },
                ]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cloumnValue" className="fw-bold">
                Select Value Of Columns
              </label>

              {/* Column value inputs */}
              {Array.from({ length: numberOfColumns }).map((_, index) => (
                <div className="form-group m-4" key={index}>
                  <label htmlFor={`columnValue_${index}`} className="fw-bold">
                    Select Value of Column {index + 1}:
                  </label>
                  <Select
                    id={`columnValue_${index}`}
                    value={columnValues[index]}
                    onChange={(value) => handleColumnChange(value, index)}
                    options={[
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                      { value: "4", label: "4" },
                      { value: "5", label: "5" },
                      { value: "6", label: "6" },
                      { value: "8", label: "8" },
                      { value: "10", label: "10" },
                      { value: "12", label: "12" },
                    ]}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* preview screen */}
          <div className="col-6 moduleDivPreviewScreen">
            <h3>Preview Screen</h3>
            <div className="preview row m-2">
              {columnValues.map((value, index) => (
                <div
                  key={index}
                  className={`col-${value}`}
                  style={{
                    // width: `100%`,
                    height: "100px",
                    border: "1px Solid black",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddMoreDivLayoutModel;
