import React, { useState } from 'react';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...formFields];
    updatedFields[index][field] = value;
    setFormFields(updatedFields);
  };

  const handleAddField = () => {
    setFormFields([...formFields, { type: '', label: '', placeholder: '', options: [] }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  const renderFormField = (field, index) => {
    return (
      <div key={index}>
        <label>
          Field Type:
          <select value={field.type} onChange={(e) => handleFieldChange(index, 'type', e.target.value)}>
            <option value="">Select Type</option>
            <option value="text">Text</option>
            <option value="select">Select</option>
            <option value="radio">Radio</option>
          </select>
        </label>

        <label>
          Label:
          <input
            type="text"
            value={field.label}
            onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
          />
        </label>

        <label>
          Placeholder:
          <input
            type="text"
            value={field.placeholder}
            onChange={(e) => handleFieldChange(index, 'placeholder', e.target.value)}
          />
        </label>

        {field.type === 'select' && (
          <div>
            Options:
            {field.options.map((option, optionIndex) => (
              <input
                key={optionIndex}
                type="text"
                value={option}
                onChange={(e) => {
                  const updatedOptions = [...field.options];
                  updatedOptions[optionIndex] = e.target.value;
                  handleFieldChange(index, 'options', updatedOptions);
                }}
              />
            ))}
            <button onClick={() => handleFieldChange(index, 'options', [...field.options, ''])}>
              Add Option
            </button>
          </div>
        )}

        {field.type === 'radio' && (
          <div>
            Options:
            {field.options.map((option, optionIndex) => (
              <input
                key={optionIndex}
                type="text"
                value={option}
                onChange={(e) => {
                  const updatedOptions = [...field.options];
                  updatedOptions[optionIndex] = e.target.value;
                  handleFieldChange(index, 'options', updatedOptions);
                }}
              />
            ))}
            <button onClick={() => handleFieldChange(index, 'options', [...field.options, ''])}>
              Add Option
            </button>
          </div>
        )}

        <button onClick={() => handleRemoveField(index)}>Remove Field</button>
      </div>
    );
  };

  return (
    <div>
      <h1>Form Builder</h1>
      {formFields.map((field, index) => renderFormField(field, index))}
      <button onClick={handleAddField}>Add Field</button>
    </div>
  );
};

export default FormBuilder;
