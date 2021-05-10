import React from 'react'

function Task({text, item,todo, setTodo, setTask, setEdit})
{
    const deleteHandler = () => {
        setTodo(todo.filter((el) => el.id !== item.id))
    }
    const edit = () => {
        document.getElementById("entertask").value = item.text;
        setEdit(item.id);
    }
  
    const done = () => {
        setTodo(todo.map((el) => {
            if(el.id === item.id)
            {
                el.completed = true;
                return el;
            }
            return el;
        }))
    }
    return(
        <div className={`edit  ${item.completed ? "completed" : ""}`}>
           <li>
                {text}
            </li>
            <div><button onClick={edit}>EDIT</button></div>
            <div><button onClick={deleteHandler}>DELETE</button></div>
            <div><button onClick={done}>DONE</button></div>
        </div>
    )
}

export default Task
