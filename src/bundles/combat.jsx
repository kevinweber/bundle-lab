/* eslint-disable react/react-in-jsx-scope */
import { render } from "preact";
import { memo } from "preact/compat";

function HelloWorld() {
  return <div>Hello World</div>;
}

render(memo(<HelloWorld />), document.getElementById("root-preact"));
