import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  let sum = useMemo(() => {
    console.log("UseMemo");
    let sum = 0;
    for (let i = 0; i <= inputValue; i++) {
      sum = sum + i;
    }
    return sum;
  }, [inputValue]);

  return (
    <div>
      <input
        type='number'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>
        Sum from 1 to {inputValue} is {sum}
      </h2>
      <button onClick={() => setCount((prevNum) => prevNum + 1)}>
        Counter {count}
      </button>
    </div>
  );
}

export default UseMemo;
