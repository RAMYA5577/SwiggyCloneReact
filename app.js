const heading=document.createElement("h1");
heading.innerHTML="Heading from JavaScript";

const root=document.getElementById("root");
root.append(heading);

const ReactHeading=React.createElement("h1",{id:"reactHeading"},"Heading from React!");
const reactRoot=ReactDOM.createRoot(document.getElementById("reactRoot"));
reactRoot.render(ReactHeading);


// <div id="grandParent">
   //<div id="parent">
       //<div id="child">
           // <h1> Hello React I'm nested element</h1>
       //</div>
   //</div>
// </div>

const reactElement=React.createElement("div",{id:"grandParent"},
    React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
            React.createElement("h1",{id:"head"},"I'm the Nested Element!")
        )
    )
)
const nestedRoot=ReactDOM.createRoot(document.getElementById("nestedRoot"));
nestedRoot.render(reactElement);