import React, {useState, useEffect} from 'react'
import Form from './Components/Form'
import Task from './Components/Task'
import TodoList from './Components/TodoList'
import './App.css';

function App() {
  const [task, setTask] = useState("")
  const [todo, setTodo] = useState([])
  const [status, setStatus] = useState("all");
  const [filtertodo, setFilter] = useState([]);
  const [edit, setEdit] = useState(null);
  const filterHandler = () => {
    switch(status)
    {
      case 'completed': 
        setFilter(todo.filter(el => {if(el.completed) return el })); 
        break;
      case 'uncompleted':
        setFilter(todo.filter(el => !el.completed));
        break;
      default:
        setFilter(todo);
        break;
    }
  }
  useEffect(() => {filterHandler()},[todo, status]);
  return (
    <div className="App">
      <h1 className="heading">TO DO LIST</h1>
      <Form todo={todo} setTask={setTask} setTodo={setTodo} task ={task} setStatus={setStatus} setFilter={setFilter} edit={edit} setEdit={setEdit}></Form>
      <TodoList todo={todo} setTodo={setTodo} filtertodo={filtertodo} setTask={setTask} edit={edit} setEdit={setEdit}></TodoList>
    </div>
  );
}

export default App;
