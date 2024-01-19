import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import useTodos from "./hooks/useTodos";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <button onClick={() => setCount(1)}>1</button>
      <button onClick={() => setCount(2)}>2</button>
      <button onClick={() => setCount(3)}>3</button>
      <button onClick={() => setCount(4)}>4</button>
      <button onClick={() => setCount(5)}>5</button>
      <button onClick={() => setCount(6)}>6</button>
      <button onClick={() => setCount(7)}>7</button>
      <button onClick={() => setCount(8)}>8</button>
      <button onClick={() => setCount(9)}>9</button>
      <button onClick={() => setCount(10)}>10</button>
      <Todo id={count <= 10 ? count : 7} />
      {/* <UseMemo/> */}
      {/* <UseCallback /> */}
    </>
  );
}

function Todo({ id }) {
  const todo = useTodos(id);

  return (
    <div
      style={{
        background: "#333",
        padding: ".5rem 1rem",
        borderRadius: ".5rem",
        marginBlock: "1rem",
      }}
    >
      <h2>{todo.title}</h2>
      <h2>{todo.description}</h2>
    </div>
  );
}

export default App;
