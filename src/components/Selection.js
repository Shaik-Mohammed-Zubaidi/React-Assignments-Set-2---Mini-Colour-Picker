import React, { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
  const { applyColor } = props;
  const [styleVariable, setStyleVariable] = useState({ background: "" });
  const handleChange = (prop) => {
    setStyleVariable(prop);
  };
  return (
    <div
      className="fix-box"
      style={styleVariable}
      onClick={() => applyColor(handleChange)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
