import { PythagorasTree } from "./PythagorasTree.js";

// JSX
ReactDOM.render(
  <a href="https://xkcd.com/221/">
    <img src="https://imgs.xkcd.com/comics/random_number.png" />
  </a>,
  document.getElementById("app")
);

// JS
ReactDOM.render(
  React.createElement(
    "a",
    { href: "https://xkcd.com/221/" },
    React.createElement("img", {
      src: "https://imgs.xkcd.com/comics/random_number.png"
    })
  ),
  document.getElementById("app")
);
