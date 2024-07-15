/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";

import "./App.css";

import Table2 from "../practice/components/table2/index";
const USERS_DATA_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  // main();
  useEffect(() => {
    const fetchUsers = async () => {
      const result = (await fetch(USERS_DATA_URL)).json();
      const data = await result;
      console.log("🚀 ~ fetchUsers ~ data:", data);
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const deleteUser = (user) => {
    const filteredUsers = users.filter((el) => el.id !== user.id);
    setUsers(filteredUsers);
  };

  const action = (user) => {
    return <button onClick={() => deleteUser(user)}>delete</button>;
  };

  return (
    <>
      <Table2
        headers={[
          { caption: "id", dataKey: "id" },
          { caption: "name", dataKey: "name" },
          { caption: "user name", dataKey: "username" },
          { caption: "delete", render: action },
        ]}
        data={users}
      />
    </>
  );
}

export default App;
