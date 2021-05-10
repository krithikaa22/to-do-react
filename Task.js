import React from 'react'

function Task({text, item,todo, setTodo, setTask})
{
    const deleteHandler = () => {
        setTodo(todo.filter((el) => el.id !== item.id))
    }
    const edit = () => {
        document.getElementById("entertask").value = item.text;
    }
   const changeTask = () => { 
        setTodo(todo.map(el => {
            if(el.id === item.id)
            {
                return {...el, text: document.getElementById("entertask").value}
            }
            return el
        }))
        setTask("");
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
            <div><button onClick={changeTask}>CHANGE</button></div>
        </div>
    )
}

export default Task