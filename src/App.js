import React, { useState, useEffect } from "react";

function Hello() {
  function byFn(){
    console.log("bye");
  }
  function hiFn(){
    console.log("hi");
    return byFn;
  }
  useEffect(hiFn, [])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(pre => !pre);
  return (
    <React.Fragment>
      {showing? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </React.Fragment>
  );
}

export default App;
