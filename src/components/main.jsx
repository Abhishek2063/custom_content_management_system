import React from "react";
import { useEditorMessage, useModelShowHide, useModuleDivModelStates } from "../common/commonStates";
import CombinedPart from "./view/mainWork/combinedPart";
import BackgroundImageModel from "./view/mainWork/model/BackgroundImageModel";
import ButtonSectionModel from "./view/mainWork/model/buttonSectionModel";
import ModuleDivModel from "./view/mainWork/model/moduleDivModel";
import Sidebar from "./view/sidebar";

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

        {/* Background Image Model */}
        <BackgroundImageModel 
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
