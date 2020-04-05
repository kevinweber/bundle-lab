/* eslint-disable react/react-in-jsx-scope */
import { render } from "preact";

function HelloWorld() {
  return <div>Hello World</div>;
}

render(<HelloWorld />, document.getElementById("root-preact"));
