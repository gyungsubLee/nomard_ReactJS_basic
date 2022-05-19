import React, { useState, useEffect } from "react";

function Todos() {
  const [todo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [index, setIndex] = useState("");

  const deleteTodo = () => setToDos(toDos.filter(( _ , idx)=> index !== idx));

  const onChange = (event) => setTodo(event.target.value);
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
  console.log(typeof index);
  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <input 
          value={todo}
          onChange={onChange}
        />
        <input type="submit" value="submit" />    
        <button onClick={onClick}>reset</button>
      </form>
      {toDos.map((item, idx)=>(
            <li key={idx}>
                {item}
                <button onClick={()=>{
                    setIndex(idx);
                    deleteTodo();
                }}>
                    ❌
                </button>
            </li>
        ))}
    </React.Fragment>
  );
}

export default Todos;
