import React,{useState} from 'react'

const ToDoForm = () => {
    const [userInput, setUserInput]=useState('')
    const handleSubmit =()=>{

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
             <input value={userInput} type='text' 
             onChange={handleChange}/>
        </form>
    </div>
  )
}

export default ToDoForm