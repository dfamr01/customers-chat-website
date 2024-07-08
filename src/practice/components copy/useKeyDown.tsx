// const url = "https://api.escuelajs.co/api/v1/products?offset=1&limit=2"

import { useEffect, useReducer } from "react";

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
