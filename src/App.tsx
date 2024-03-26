import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { mainTest } from "./tempPractice/test";
import { main } from "./practice/test";
import { PaginationComponent } from "./practice/component";
mainTest();
main();
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PaginationComponent />
      </div>
    </>
  );
}

export default App;
