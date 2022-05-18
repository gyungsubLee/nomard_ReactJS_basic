import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter(pre => pre + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  return (
    <React.Fragment>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </React.Fragment>
  );
}

export default App;
