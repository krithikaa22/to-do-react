import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Complete from './Complete';

function Form({todo, setTask, setTodo, task, setStatus,  setFilter})
{
    const addTask = (e) => {
        setTask(e.target.value);
    };
    const updateTodo = (e) => {
        e.preventDefault();
        setTodo([...todo, {text: task, id: todo.length, completed: false}]);
        setFilter([...todo, {state: false}]);
        setTask("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
   
    return(
        <div className="inputs">
            
            <input 
            value={task}
            placeholder="enter task"
            type="text" 
            onChange={addTask} id="entertask" >
            </input>
            <button onClick={updateTodo} className="button">Add</button>
            <select onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed" >Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}

export default Form