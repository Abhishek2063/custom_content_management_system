import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer className="d-flex">
        <div className="container d-flex align-items-center justify-content-between w-100">
          <div className="copytext">
            © {new Date().getFullYear()}
            Content Management System | All Rights Reserved.
          </div>
          <ul className="quicklinks d-flex flex-wrap">
            {/* <li><a href="#">Privacy Policy</a></li> */}
            {/* <li><a href="#">Terms of Services</a></li> */}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
