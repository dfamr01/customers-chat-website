import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TableComponent, mainTest } from "./tempPractice/test";
import { main } from "./practice/code/test";
import {
  PaginationComponent,
  TimerBox,
  useKeyboard,
} from "./practice/components/pagination";
mainTest();
const url = "https://jsonplaceholder.typicode.com/users";

// main();
function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(url);
      const res = await response.json();
      setUsers(res);
      setFilter(res);
    };
    fetchUsers();
    // return ()=>{

    // }
  }, []);
  const deleteRow = (cell) => {
    const filtered = users.filter((user) => user.id != cell.id);
    setUsers(filtered);
    setFilter(filtered);
  };

  const onFilterClick = (event) => {
    const text = event.target.value;
    if (!text) {
      setFilter(users);
      return;
    }
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
    console.log("🚀 ~ onFilterClick ~ filtered:", filtered);
    setFilter(filtered);
  };
  return (
    <>
      <div>
        <input type={"text"} onChange={onFilterClick} />
        <TableComponent
          columns={[
            { headerName: "id", cellKey: "id" },
            { headerName: "name", cellKey: "name" },
            { headerName: "user Name", cellKey: "username" },
            {
              headerName: "action",
              action: (cell) => {
                return (
                  <button onClick={() => deleteRow(cell)}>my button</button>
                );
              },
            },
          ]}
          cells={filter}
        />
      </div>
    </>
  );
}

export default App;
