import React from "react";

const Child = ({ text, handleText }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <input type="text" value={text} onChange={handleText} />
    </div>
  );
};

export default Child;
