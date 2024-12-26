const heading = React.createElement("h1",{
    id:"header"
},"Hello World from React!")

       const root = ReactDOM.createRoot(document.getElementById("root"))
       root.render(heading);

       
       const childHeading = React.createElement("h2",{},"Hello World from Child Div!");
       const child = ReactDOM.createRoot(document.getElementById("child"));
       child.render(childHeading);

       RemotePlayback