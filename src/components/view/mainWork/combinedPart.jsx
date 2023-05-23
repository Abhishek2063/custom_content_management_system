import React from "react";
import TextEditor from "./textEditor";
import Header from "./header";
import Footer from "./footer";

const CombinedPart = (props) => {
  return (
    <>
      <div className="combinedPart">
        <Header 
          modelShowHide={props.modelShowHide}
          setModelShowHide={props.setModelShowHide}
        />
        <TextEditor
          editorMessage={props.editorMessage}
          setEditorMessage={props.setEditorMessage}
        />
        <Footer />
      </div>
    </>
  );
};

export default CombinedPart;
