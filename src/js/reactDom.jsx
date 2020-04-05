import React from "react";
import { render } from "react-dom";

function HelloWorld() {
  return <div>Hello World</div>;
}

render(<HelloWorld />, document.getElementById("root-reactDom"));
