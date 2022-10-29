
import React, { useState } from "react";
import ToDo from './ToDo'
import ToDoForm  from "./ToDoForm";

function App() {
   const [ todos,setTodos]=useState([])
   const addTasks =()=>{

   }
   const removeTasks =()=>{

   }
   const handleToggle =()=>{

   }
  return (
<div className="App">
  <header>
    <h1>Todo list:{todos.length}</h1>
  </header>
</div>
  );
}

export default App;
