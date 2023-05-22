import React, { useState } from "react";
import MainFile from "../editor/mainFile";
import Sidebar from "../components/sidebar";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import GridViewIcon from "@mui/icons-material/GridView";
import PowerInputIcon from "@mui/icons-material/PowerInput";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
const ComponentStarter = () => {
  const [moduleShow, setModuleShow] = useState({
    moduleDivSectionShow: false,
  });

  // Editor State
  const [editorMessage, setEditorMessage] = useState({
    message : ""
  });

  // module div states collections.
  const layoutOptions = [
    { id: 1, name: <CheckBoxOutlineBlankIcon />, cols: [12] },
    { id: 2, name: <ViewAgendaIcon />, cols: [6, 6] },
    { id: 3, name: <ViewComfyIcon />, cols: [12, 6, 6] },
    { id: 4, name: <GridViewIcon />, cols: [6, 6, 6, 6] },
    { id: 5, name: <PowerInputIcon />, cols: [12, 4, 4, 4] },
    { id: 6, name: <ViewComfyIcon />, cols: [12, 4, 8] },
  ];

  const [layout, setLayout] = useState(1);

  const shapeOptions = ["square", "rounded", "circle"];
  const [shapes, setShapes] = useState(["square"]);

  const [colors, setColors] = useState([
    "#ff0000",
    "#008000",
    "#ffff00",
    "#800080",
  ]);

  const [spacing, setSpacing] = useState(0);

  return (
    <div className="d-flex">
      <Sidebar
        moduleShow={moduleShow}
        setModuleShow={setModuleShow}
        layoutOptions={layoutOptions}
        layout={layout}
        setLayout={setLayout}
        shapeOptions={shapeOptions}
        shapes={shapes}
        setShapes={setShapes}
        colors={colors}
        setColors={setColors}
        spacing={spacing}
        setSpacing={setSpacing}
        editorMessage={editorMessage}
        setEditorMessage={setEditorMessage}
      />
      <MainFile
        moduleShow={moduleShow}
        setModuleShow={setModuleShow}
        editorMessage={editorMessage}
        setEditorMessage={setEditorMessage}
      />
    </div>
  );
};

export default ComponentStarter;
