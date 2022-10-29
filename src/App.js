
import React, { useState } from "react";
import ToDo from './ToDo'
import ToDoForm  from "./ToDoForm";

function App() {
   const [ todos,setTodos]=useState([])
   const addTasks =()=>{

   }
   const removeTask =()=>{

   }
   const handleToggle =()=>{

   }
  return (
<div className="App">
  <header>
    <h1>Todo list:{todos.length}</h1>
    <ToDoForm/>
    {todo.map(()=>{
      return(
        <ToDo key={todos.id} />
        todo={todo}
        toggleTask={handleToggle}
        removeTask={removeTask}
      )
    })}
  </header>
</div>
  );
}

export default App;
