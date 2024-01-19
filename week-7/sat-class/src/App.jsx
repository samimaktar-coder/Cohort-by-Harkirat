import { useContext, useState } from "react";
import "./App.css";
import { CounterContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={count}>
      <Count setCount={setCount} />
    </CounterContext.Provider>
  );
}

function Count({ setCount }) {
  return (
    <>
      <CountRender />
      <Buttons setCount={setCount} />
    </>
  );
}

function CountRender() {
  const count = useContext(CounterContext);

  return <h1>Count : {count}</h1>;
}

function Buttons({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </div>
  );
}

export default App;
