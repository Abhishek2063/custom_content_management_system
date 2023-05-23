import React from "react";
import Sidebar from "./view/sidebar";
import CombinedPart from "./view/mainWork/combinedPart";
import { useEditorMessage, useModelShowHide } from "../common/commonStates";

const Main = () => {

  const [editorMessage, setEditorMessage] = useEditorMessage()

  const [modelShowHide, setModelShowHide] = useModelShowHide()
  return (
    <>
      <div className="d-flex">
        <Sidebar 
          modelShowHide={modelShowHide}
          setModelShowHide={setModelShowHide}
        />

        <CombinedPart
        editorMessage={editorMessage}
        setEditorMessage={setEditorMessage}
        modelShowHide={modelShowHide}
        setModelShowHide={setModelShowHide}

        />
      </div>
    </>
  );
};

export default Main;
