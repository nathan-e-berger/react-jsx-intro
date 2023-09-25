"use strict";

const root = ReactDOM.createRoot(document.getElementById("root"));



function MyFirst() {
  return <h1>My Very First Component</h1>;
}

function NamedComponent(prop) {
  return <p>My name is {prop.name}</p>;
}

function App() {
  return (<div>
    <MyFirst />
    <NamedComponent name="Brian" />
  </div>);
}



root.render(<App />);