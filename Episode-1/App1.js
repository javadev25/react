//   <div id="parent">
//   <div id="child">
//   <h1>I am H1 tag from child</h1>
//   <h2>I am H2 tag from child</h2>
//   </div>

//   <div id="child2">
//   <h1>I am H1 tag from child2</h1>
//   <h2>I am H2 tag from child2</h2>
//   </div>
//   </div>

const heading = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag from child"),
    React.createElement("h2", {}, "I am H2 tag from child"),
  ]),React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag from child2"),
    React.createElement("h2", {}, "I am H2 tag from child2"),
  ])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
