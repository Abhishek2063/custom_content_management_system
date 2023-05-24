import React from "react";
import Sidebar from "./view/sidebar";
import CombinedPart from "./view/mainWork/combinedPart";
import { useEditorMessage, useModelShowHide, useModuleDivModelStates } from "../common/commonStates";
import ModuleDivModel from "./view/mainWork/model/moduleDivModel";
import ButtonSectionModel from "./view/mainWork/model/buttonSectionModel";

const Main = () => {

  const [editorMessage, setEditorMessage] = useEditorMessage()

  const [modelShowHide, setModelShowHide] = useModelShowHide()

  const [moduleDivStates, setModuleDivStates] = useModuleDivModelStates()
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

        {/* model boxes */}
        <ModuleDivModel 
           editorMessage={editorMessage}
           setEditorMessage={setEditorMessage}
           modelShowHide={modelShowHide}
           setModelShowHide={setModelShowHide}
           moduleDivStates={moduleDivStates}
           setModuleDivStates={setModuleDivStates}

        />

        {/* button section model */}
        <ButtonSectionModel 
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
