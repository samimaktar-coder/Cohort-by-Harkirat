import React, { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(async () => {
      await fetch("https://sum-server.100xdevs.com/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data.todos));
    }, 5000);
  }, []);
  
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <h2>{todo.description}</h2>
        </div>
      ))}
    </div>
  );
}

export default Todos;
