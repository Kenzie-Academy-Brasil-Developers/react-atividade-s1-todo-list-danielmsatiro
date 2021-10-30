import "./App.css";
import { useState } from "react";
import Form from "./component/Form";
import TodoList from "./component/TodoList";
import Clean from "./component/Clean";

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(newTodo) {
    return setTodos([...todos, newTodo]);
  }
  function handleTodo(check) {
    return setTodos(todos.filter((item,index) => index !== check));
  }

  function clean(){
    return setTodos([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do</h1>
        <Form addTodo={addTodo}/>
        <TodoList todos={todos} handleTodo={handleTodo}/>
        <Clean clean={clean}/>
      </header>
    </div>
  );
}

export default App;
