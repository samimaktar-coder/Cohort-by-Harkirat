import { memo, useState } from "react";
import "./App.css";
import CardWrapper from "./components/CardWrapper";
import Todos from "./components/Todos";

function App() {
  const [age, setAge] = useState(477);

  return (
    <>
      <button onClick={() => setAge(Math.floor(Math.random() * 25))}>
        Change my name
      </button>
      <h2>This is a great number {age}</h2>

      {/* <Header title={age} />
      <Header title='Samim' />
      <Header title='Bruce' />
      <Header title='Tony' />
      <Header title='Steve' />
      <Header title='Wanda' /> */}

      {/* <CardWrapper>
        <TextComponent />
      </CardWrapper> */}

      <Todos />
    </>
  );
}

const Header = memo(function Header(props) {
  const [num, setNum] = useState(99);
  console.log(props.title);
  return (
    <div style={{ marginBlock: "1rem" }}>
      <h2>My name is {props.title}</h2>
      <p>Number of this header is {num}</p>
      <button onClick={() => setNum(Math.floor(Math.random() * 100))}>
        Click
      </button>
    </div>
  );
});

function TextComponent() {
  return <div>This is a text component</div>;
}

export default App;
