import { useState } from "react";

export const useLoader = () => {
  const [loader, setLoader] = useState(false);

  return [loader, setLoader];
};

export const useEditorMessage = () => {
  const [editorMessage, setEditorMessage] = useState({
    message: "",
  });

  return [editorMessage, setEditorMessage];
};

export const useModelShowHide = () => {
  const [modelShowHide, setModelShowHide] = useState({
    moduleDivModel : false,
    buttonModel : false,
    backgroundImageModel : false,
    FormModel : false,

  });

  return [modelShowHide, setModelShowHide];
};

export const useModuleDivModelStates = () => {
  const [moduleDivStates, setModuleDivStates] = useState({
    layout : [12],
    shape : "square",
    colors : [],
    spacing : 10,
    divWidth : 100,
    divHeight : 100
  });

  return [moduleDivStates, setModuleDivStates];
};