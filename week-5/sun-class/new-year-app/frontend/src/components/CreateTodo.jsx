import React, { useState } from "react";

function CreateTodo({ fetchTodos }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const addTodo = async () => {
    await fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
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

    setFormData({
      title: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <input
        type='text'
        placeholder='text'
        name='title'
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <input
        type='text'
        placeholder='description'
        name='description'
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default CreateTodo;
