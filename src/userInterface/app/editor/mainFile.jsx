import React from "react";
import TextEditor from "./components/textEditor";

const MainFile = (props) => {
  return (
    <div className="mainFile">
      <TextEditor
        editorMessage={props.editorMessage}
        setEditorMessage={props.setEditorMessage}
      />
    </div>
  );
};

export default MainFile;
