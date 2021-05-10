import React from 'react'
import Task from './Task'

function TodoList({setTodo, todo, filtertodo, setTask})
{
   
    return(
        <div className="tasks">
            <ul>
                {filtertodo.map((items) =>{
                    return(
                    <Task 
                    text = {items.text}
                    key = {items.id}
                    item = {items}
                    todo = {todo}
                    setTodo = {setTodo}
                    setTask = {setTask}>
                    </Task>)
                })}
            </ul>
        </div>
    )
}

export default TodoList