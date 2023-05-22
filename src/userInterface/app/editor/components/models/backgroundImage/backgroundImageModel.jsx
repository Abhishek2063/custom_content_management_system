import React, { useState } from "react";
import { Modal } from "antd";
import ReactDOMServer from "react-dom/server";

const BackgroundImageModel = (props) => {
  const [image, setImage] = useState(null);
  // const [imgeData, setimageData] = useState(null);
  const [width, setWidth] = useState("100%");
  const [height, setHeight] = useState("100%");
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shape, setShape] = useState("rectangle");
  // const containerRef = useRef();
  // const imageRef = useRef();

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];

    const imageUrl = URL.createObjectURL(uploadedImage);

    setImage(imageUrl);
    // setimageData(uploadedImage);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleShapeChange = (e) => {
    setShape(e.target.value);
  };

  function generateDivLayouts() {
    // Generate the div layouts dynamically
    const divLayouts = (
      <div className="container backgroundImageContainer">
        <div
          className={`background-image = ${shape}`}
          style={{ backgroundImage: `url(${image})`, width, height }}
        ></div>
      </div>
    );
    const sourceCode = ReactDOMServer.renderToStaticMarkup(divLayouts);

    return sourceCode;
  }

  const handleOk = () => {
    props.setModuleShow({
      ...props.moduleShow,
      moduleDivSectionShow: false,
      buttonSectionShow: false,
      backgroundImageSectionShow: false,
      FormSectionShow: false,
    });
    props.setEditorMessage({
      ...props.editorMessage,
      message: props.editorMessage.message.concat(generateDivLayouts()),
    });
  };
  const handleCancel = () => {
    props.setModuleShow({
      ...props.moduleShow,
      moduleDivSectionShow: false,
      buttonSectionShow: false,
      backgroundImageSectionShow: false,
      FormSectionShow: false,
    });
  };
  return (
    <div>
      <Modal
        title="Background Image"
        open={props.moduleShow.backgroundImageSectionShow}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="row">
          {/* desiging Section */}
          <div className="col-6 backgroundImageDesgin">
            <div className="design-screen m-5">
              <h2>Design Background Image</h2>
              {/* <div className="container" ref={containerRef}>
            <div
              ref={imageRef}
              className={`background-image ${shape}`}
              style={{ backgroundImage: `url(${image})`, width, height }}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            ></div>
          </div> */}
              <div className="controls ">
                <label className="m-3 fw-bold">
                  Image:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
                <label className="m-3 fw-bold">
                  Width (%):
                  <input
                    type="text"
                    value={width}
                    onChange={handleWidthChange}
                  />
                </label>
                <label className="m-3 fw-bold">
                  Height (%):
                  <input
                    type="text"
                    value={height}
                    onChange={handleHeightChange}
                  />
                </label>
                <label className="m-3 fw-bold">
                  Shape:
                  <select value={shape} onChange={handleShapeChange}>
                    <option value="rectangle">Rectangle</option>
                    <option value="circle">Circle</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          {/* preview section */}
          <div className="col-6">
            <div className="preview-screen">
              <h2>Preview Background Image</h2>
              <div className="container backgroundImageContainer">
                <div
                  className={`background-image = ${shape}`}
                  style={{ backgroundImage: `url(${image})`, width, height }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BackgroundImageModel;
