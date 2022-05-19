import React, { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = event => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === ""){
      return;
    }
    setToDos(currentArray => [...currentArray, todo]);
    setTodo("");
  }
  const onClick = () => {
    setToDos([]);
  }

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <input 
          placeholder="please write your todo"
          value={todo}
          onChange={onChange}
        />
        <input type="submit" value="submit" />    
        <button onClick={onClick}>reset</button>
      </form>
      {toDos.map((item, idx)=>(
            <li key={idx}>{item}</li>
        ))}
    </React.Fragment>
  );
}

export default App;
