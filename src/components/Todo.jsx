import React from 'react';
import { IoMdCheckboxOutline } from "react-icons/io";

import { FaDisplay, FaRegTrashCan } from "react-icons/fa6";


const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
            <div className='todo' 
            style={{textDecoration: todo.isCompleted ? "line-through" : ""}} >
              <div className="content">
                  <p>{todo.text}</p>
                  <p className="category">
                    ({todo.category})
                    
                  </p>
                   <button className='complete' onClick={() => completeTodo(todo.id)}>
                    <IoMdCheckboxOutline />

                      Completar
                    
                    </button>
                    <button className='remove' onClick={()=> removeTodo(todo.id)}>
                    <FaRegTrashCan   />

                        Deletar

                  </button>
              </div>
            </div> 
        )
}

export default Todo