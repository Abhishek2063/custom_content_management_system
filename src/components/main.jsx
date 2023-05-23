import React from "react";
import Sidebar from "./view/sidebar";
import CombinedPart from "./view/mainWork/combinedPart";
import { useEditorMessage } from "../common/commonStates";

const Main = () => {

  const [editorMessage, setEditorMessage] = useEditorMessage()
  return (
    <>
      <div className="d-flex">
        <Sidebar 
        
        />

        <CombinedPart
        editorMessage={editorMessage}
        setEditorMessage={setEditorMessage}
        />
      </div>
    </>
  );
};

export default Main;
