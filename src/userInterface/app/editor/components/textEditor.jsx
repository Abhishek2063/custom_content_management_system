import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { editorConfig } from "../../../../common/editorConfigure/joditReact";
import FormBuilder from "./models/form/formDesign";

const TextEditor = (props) => {
  const editorRef = useRef(null);
  // editorMessage={editorMessage}
  // setEditorMessage={setEditorMessage}
  const handleEditorMessage = (content) => {
    props.setEditorMessage({
      ...props.editorMessage,
      message: content,
    });
    
  };
  return (
    <div className="textEditorDiv">
      <div className="alignment">
        <JoditEditor
          ref={editorRef}
          value={props.editorMessage.message}
          config={editorConfig}
          placeholder="Please type here..."
          onBlur={(e) => {
            handleEditorMessage(e);
          }}
        />
      </div>
      <FormBuilder />
    </div>
  );
};

export default TextEditor;
