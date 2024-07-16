/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import "./App.css";
import { main } from "./practice/code/test";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  main();
  return (
    <div>
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        click
      </button>
    </div>
  );
};

export default App;
