
import React from "react";

const ToDo = ({todo,toggleTask,removeTask}) => {
  return <div key={todo.id} className='item-todo'></div>;
};

export default ToDo;
