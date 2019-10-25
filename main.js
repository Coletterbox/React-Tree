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

const square = React.createElement("div", {
  style: {
    width: "100px",
    height: "100px",
    backgroundColor: "purple",
    margin: "10px"
  }
});

const circle = React.createElement("div", {
  style: {
    width: "100px",
    height: "100px",
    backgroundColor: "green",
    margin: "10px",
    borderRadius: "50px"
  }
});

const container = React.createElement(
  "div",
  {
    style: {
      border: "5px dotted black"
    }
  },

  square,
  circle,
  square,
  circle,
  square,
  circle,
  square,
  circle,
  square,
  circle
);

ReactDOM.render(container, document.getElementById("app"));
