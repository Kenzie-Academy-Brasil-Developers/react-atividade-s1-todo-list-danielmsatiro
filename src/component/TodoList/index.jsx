function TodoList({ todos, handleTodo }) {
  return (
    <ul>
      {todos.map((item, index) => (
        <div className="task">
          <li key={index}>{item}</li>
          <button onClick={() => handleTodo(index)}>Concluir</button>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
