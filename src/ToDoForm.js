import React from 'react'

const ToDoForm = ({todo,removeTask,toggleTask}) => {
  return (
    <div className='item-todo' key={todo.id}>
      <div className={todo.complete ?'item-text strike':'item-text'} onClick={()=>toggleTask(todo.id)}>{todo.task}</div>
      <div className="item-delete" onClick={()=>removeTask(todo.id)}>X</div>
    </div>
  )
}

export default ToDoForm