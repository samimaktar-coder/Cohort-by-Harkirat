import React from "react";

function Todos({ todos, fetchTodos }) {
  const markCompleted = (todoId) => {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({
        id: todoId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        fetchTodos();
        alert(data.msg);
      });
  };

  return (
    <div className='todo-box'>
      {todos.map((todo) => (
        <div key={todo._id} className='todo'>
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
          <button onClick={() => markCompleted(todo._id)}>
            {todo.completed === true ? "Completed" : "Mark as complete"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
