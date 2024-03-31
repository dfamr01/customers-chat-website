// const url = "https://api.escuelajs.co/api/v1/products?offset=1&limit=2"

import { useEffect, useReducer } from "react";

function getUrl(page, limit = 4) {
  const u = `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${limit}`;
  return u;
}

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_PAGE": {
      return { ...state, page: state.page + 1 };
      break;
    }
    case "PREV_PAGE": {
      return { ...state, page: state.page - 1 };

      break;
    }
    case "SET_DATA": {
      return { ...state, items: action.items };
      break;
    }
  }
}

const PaginationComponent = () => {
  const [state, dispatch] = useReducer(reducer, {
    page: 0,
    limit: 5,
    items: [],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const uri = getUrl(state.page, state.limit);
      const response = await fetch(uri);
      const result = await response.json();
      dispatch({ type: "SET_DATA", items: result });
    };
    fetchProducts();
  }, [state.page, state.limit]);

  const prevClick = () => {
    if (state.page > 0) {
      dispatch({ type: "PREV_PAGE" });
    }
  };
  const nextClick = () => {
    if (state.page < 10) {
      dispatch({ type: "NEXT_PAGE" });
    }
  };

  return (
    <div>
      <div>
        {state.items?.map((product) => {
          return <div key={product.id}>{product.title}</div>;
        })}
      </div>
      <div>{state.page}</div>
      <div>
        <button onClick={prevClick}>prev</button>
        <button onClick={nextClick}>next</button>
      </div>
    </div>
  );
};
export { PaginationComponent };

// useKeyboard("c", () => console.log("Closed Popup"), [])

const useKeyboard = (key: string, cb: () => void, depArr: unknown[]) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        cb && cb();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, depArr);
};
export { useKeyboard };

import React, { useState, FC } from "react";

export const TimerBox: FC = () => {
  const [input, setInput] = useState(3);
  const [count, setCount] = useState(3);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let intervalId = null;
    const countFunc = () => {
      console.log("🚀 ~ countFunc ~ countFunc:", start);

      setCount((c) => {
        console.log("count", c);

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
