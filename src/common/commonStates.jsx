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
