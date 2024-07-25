/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import "./App.css";
// import { main } from "./code/test";

interface AppProps {}

function main(...args) {
  console.log("🚀 ~ main ~ args:", args);
}

const App: React.FC<AppProps> = () => {
  main();
  return <div></div>;
};

export default App;
