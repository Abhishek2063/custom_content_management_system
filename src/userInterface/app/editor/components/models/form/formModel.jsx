import React, { useState } from "react";
import { Modal } from "antd";
import ReactDOMServer from "react-dom/server";

const FormModel = (props) => {
  const [fields, setFields] = useState([]);

  const addField = () => {
    setFields([
      ...fields,
      { label: "", placeholder: "", type: "text", options: [] },
    ]);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const deleteOption = (index, optionIndex) => {
    const updatedFields = [...fields];
    const optionField = updatedFields[index];
    const options = [...optionField.options];
    options.splice(optionIndex, 1);
    updatedFields[index].options = options;
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
              onChange={(e) => handleFieldChange(index, "type", e.target.value)}
            >
              <option value="number">Number</option>
              <option value="password">Password</option>
              <option value="select">Select</option>
              <option value="text">Text</option>
              <option value="textarea">Textarea</option>
              {/* <option value="checkbox">Checkbox</option> */}
              {/* <option value="radio">Radio</option> */}

              {/* Add more options for different field types */}
            </select>
          </div>
          <label className="labelfordiv fw-bold">Label:</label>

          <input
            type="text"
            placeholder="Label"
            value={field.label}
            onChange={(e) => handleFieldChange(index, "label", e.target.value)}
          />
        </div>
        <div className="m-2">
          <label className="labelfordiv fw-bold">Placeholder:</label>

          <input
            type="text"
            placeholder="Placeholder"
            value={field.placeholder}
            onChange={(e) =>
              handleFieldChange(index, "placeholder", e.target.value)
            }
          />
        </div>

        {field.type === "select" && (
          <div>
            <label className="labelfordiv fw-bold">Options:</label>
            {field.options.map((option, optionIndex) => (
              <div>
                <input
                  key={optionIndex}
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const updatedOptions = [...field.options];
                    updatedOptions[optionIndex] = e.target.value;
                    handleFieldChange(index, "options", updatedOptions);
                  }}
                />
                <button
                  className="btn btn-danger"
                  onClick={() => deleteOption(index, optionIndex)}
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              className="btn btn-primary m-2"
              onClick={() =>
                handleFieldChange(index, "options", [...field.options, ""])
              }
            >
              Add Option
            </button>
          </div>
        )}

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
            <div className="formFieldsContainer">{renderFields()}</div>
          </div>
          <div className="col-6">
            <h2>Preview Form</h2>
            <div className="formPreviewContainer">
              {fields.map((field, index) => (
                <div key={index} className="m-2">
                  <label className="labelfordiv fw-bold">
                    {field.label} :{" "}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea placeholder={field.placeholder} />
                  ) : field.type === "select" ? (
                    <select name={field.label} id="cars">
                      {field.options && field.options.length > 0
                        ? field.options.map((option, index) => (
                            <option value={option} key={index}>
                              {option}
                            </option>
                          ))
                        : ""}
                    </select>
                  ) : (
                    <input type={field.type} placeholder={field.placeholder} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FormModel;
