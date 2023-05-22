import React, { useState } from "react";
import { Modal } from "antd";
import ReactDOMServer from "react-dom/server";

const FormModel = (props) => {
  const [fields, setFields] = useState([]);

  const addField = () => {
    setFields([...fields, { label: "", placeholder: "", type: "text" }]);
  };

  const handleLabelChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index].label = value;
    setFields(updatedFields);
  };

  const handlePlaceholderChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index].placeholder = value;
    setFields(updatedFields);
  };

  const handleTypeChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index].type = value;
    setFields(updatedFields);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const renderFields = () => {
    return fields.map((field, index) => (
      <div key={index} className="form-field">
        <div className="m-2">
          <div className="m-2">
            <label className="labelfordiv fw-bold">Input Field Type:</label>

            <select
              value={field.type}
              onChange={(e) => handleTypeChange(index, e.target.value)}
            >
              <option value="text">Text</option>
              <option value="textarea">Textarea</option>
              {/* <option value="checkbox">Checkbox</option> */}
              {/* <option value="radio">Radio</option> */}
              {/* <option value="select">Select</option> */}
              <option value="number">Number</option>
              <option value="password">Password</option>

              {/* Add more options for different field types */}
            </select>
          </div>
          <label className="labelfordiv fw-bold">Label:</label>

          <input
            type="text"
            placeholder="Label"
            value={field.label}
            onChange={(e) => handleLabelChange(index, e.target.value)}
          />
        </div>
        <div className="m-2">
          <label className="labelfordiv fw-bold">Placeholder:</label>

          <input
            type="text"
            placeholder="Placeholder"
            value={field.placeholder}
            onChange={(e) => handlePlaceholderChange(index, e.target.value)}
          />
        </div>

        <button className="btn btn-danger" onClick={() => removeField(index)}>
          Remove
        </button>
      </div>
    ));
  };

  function generateDivLayouts() {
    // Generate the div layouts dynamically
    const divLayouts = fields.map((field, index) => (
      <div key={index} className="m-2">
        <label className="labelfordiv fw-bold">{field.label} : </label>
        {field.type === "textarea" ? (
          <textarea placeholder={field.placeholder} />
        ) : (
          <input type={field.type} placeholder={field.placeholder} />
        )}
      </div>
    ));
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
  const handleCancel = () => {
    props.setModuleShow({
      ...props.moduleShow,
      moduleDivSectionShow: false,
      buttonSectionShow: false,
      backgroundImageSectionShow: false,
      FormSectionShow: false,
    });
  };
  return (
    <div>
      <Modal
        title="Form"
        open={props.moduleShow.FormSectionShow}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="row contanier">
          <div className="col-6">
            <h2>Form Designer</h2>
            <button className="btn btn-primary" onClick={addField}>
              Add Field
            </button>
            {renderFields()}
          </div>
          <div className="col-6">
            <h2>Preview Background Image</h2>
            {fields.map((field, index) => (
              <div key={index} className="m-2">
                <label className="labelfordiv fw-bold">{field.label} : </label>
                {field.type === "textarea" ? (
                  <textarea placeholder={field.placeholder} />
                ) : (
                  <input type={field.type} placeholder={field.placeholder} />
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FormModel;
