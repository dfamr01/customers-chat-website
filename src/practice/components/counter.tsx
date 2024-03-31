// const url = "https://api.escuelajs.co/api/v1/products?offset=1&limit=2"

import { useEffect, useReducer } from "react";

import React, { useState, FC } from "react";

export const TimerBox: FC = () => {
  const [input, setInput] = useState(3);
  const [count, setCount] = useState(3);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let intervalId: number | null = null;
    const countFunc = () => {
      console.log("🚀 ~ countFunc ~ countFunc:", start);

      setCount((c) => {
        if (c === 0) {
          setStart(false);
          return c;
        }
        return c - 1;
      });
    };

    if (start) {
      intervalId = setInterval(countFunc, 1000);
      console.log("🚀 ~ useEffect ~ intervalId:", intervalId);
    }
    return () => {
      console.log("🚀 ~ return ~ intervalId:", intervalId);

      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
  }, [start]);

  const onChangeInput = (event) => {
    const inputCount = event.target.value;
    setInput(inputCount);
    setStart(false);
    setCount(inputCount);
  };

  const onClickStart = async () => {
    setCount(input);
    setStart(true);
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Timer</h2>
      <div>
        <input type="text" onChange={onChangeInput} />
      </div>
      <div>
        <button onClick={onClickStart}>Start</button>
      </div>
      {start && !!count && <div>{count}</div>}
    </div>
  );
};
