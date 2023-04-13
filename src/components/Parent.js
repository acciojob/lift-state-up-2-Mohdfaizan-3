import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [text, setText] = useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="parent">
    <h2>Parent Component</h2>
       <p>{text}</p>
      <Child text={text} handleText={handleText} />
    </div>
  );
};

export default Parent;
