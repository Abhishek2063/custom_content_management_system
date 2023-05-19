import React from "react";
import MainFile from "../editor/mainFile";
import Sidebar from "../components/sidebar";

const ComponentStarter = () => {
  console.log("asdbasgsfasfdasfsf");
  return (
    <div className="d-flex">
        <Sidebar />
        <MainFile />
    </div>
  );
};

export default ComponentStarter;
