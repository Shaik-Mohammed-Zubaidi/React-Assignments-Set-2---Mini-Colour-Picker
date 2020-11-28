import React, { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
  const { applyColor } = props;

  const [styleVar, setStyleVar] = useState({ background: "" });

  const handleClick = () => {
    applyColor(setStyleVar);
  };
  return (
    <div className="fix-box" style={styleVar} onClick={handleClick}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
