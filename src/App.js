import React, { useState, useEffect } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const [counter, setCounter] = useState(0);

  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setCounter(pre => pre + 1);

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword);
    } 
  }, [keyword]);

  useEffect(()=>{
    console.log("I run when 'counter' change.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'counter' && 'counter' change.");
  }, [counter, keyword])
  
  return (
    <React.Fragment>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </React.Fragment>
  );
}

export default App;
