import React, { useEffect } from 'react';
import ToDoList from './ToDoList'
import Context from './context'
import Loader from './Loader'
//import Modal from "./Modal"
import './App.css';

const AddTodo = React.lazy(() => (import('./AddTodo')))

function App() {

  const [todos, setTodos] = React.useState([
    /*{ id: 1, completed: false, title: 'купить' },
  */])
  const [loader, setLoader] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=0')
    .then(response => response.json())
    .then(todos => {
      setTimeout(() => {
        setTodos(todos)
        setLoader(false)
      },50)
    }
    )
  }, [])


  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }))

  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat(
      [{
        title,
        id: Date.now(),
        completed: false
      }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wraper">
        <h1>Список задач</h1>
       
        <React.Suspense fallback={<p>Loading...</p>}>
        <AddTodo onCreate={addTodo}/>
        </React.Suspense>
         {loader && <Loader />}
        {todos.length ? (<ToDoList todos={todos} onToggle={toggleTodo} />):loader ? null : (<p>Нет задач</p>)}
      </div>
    </Context.Provider>
  );
}

export default App;
