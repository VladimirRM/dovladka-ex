import React,{useState} from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import './index.css'

const App = () => {
  const [todos,setTodos]=useState([])

  const addTask =()=>{
    
  }
  const removeTask =()=>{

  }
  const handleToggle =()=>{

  }
  return (
    <div className='App'>
      <header>
        <h1>Todo List:{todos.length}</h1>
      </header>
      T

      
    </div>
  )
}

export default App
