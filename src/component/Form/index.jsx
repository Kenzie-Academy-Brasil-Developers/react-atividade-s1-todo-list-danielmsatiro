import { useState } from "react";

function Form({ addTodo }) {
  const [todoInput, setTodoInput] = useState("");
  return (
    <>
      <form action="#">
        <input
          type="text"
          value={todoInput}
          placeholder="Nova Tarefa"
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <button className="buttons" onClick={() => addTodo(todoInput)}>Enviar</button>
      </form>
    </>
  );
}

export default Form;
