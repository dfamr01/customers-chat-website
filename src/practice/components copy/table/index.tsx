import { useEffect, useState } from "react";
import "./App.css";
import { TableComponent } from "./table";

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(USERS_API_URL);
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = (selectedUser) => {
    const updatedUsers = users.filter((user) => user.id !== selectedUser.id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleFilterChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = searchTerm
      ? users.filter((user) => user.name.toLowerCase().includes(searchTerm))
      : users;
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <input type="text" onChange={handleFilterChange} />
      <TableComponent
        headers={[
          { headerName: "ID", cellKey: "id" },
          { headerName: "Name", cellKey: "name" },
          { headerName: "Username", cellKey: "username" },
          {
            headerName: "Action",
            action: (user) => (
              <button onClick={() => handleDeleteUser(user)}>Delete</button>
            ),
          },
        ]}
        data={filteredUsers}
      />
    </div>
  );
}

export default UserTable;
