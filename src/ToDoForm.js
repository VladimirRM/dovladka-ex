import React,{useState} from 'react'

const ToDoForm = () => {
    const [userInput, setUserInput]=useState('')
    const handleSubmit =()=>{

    }
    const handleChange =()=>{

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
             <input value={userInput} type='text' 
             onChange={handleChange}
             onKeyDown={handleKeyPress}/>
        </form>
    </div>
  )
}

export default ToDoForm