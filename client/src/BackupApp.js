import { Route,Routes } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import Dashboard from "./Dashboard";
import Register from "./Register";
import UsersList from "./UsersList";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [_isadmin, setAdminState] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      password,
      _isadmin,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          password,
          _isadmin,
        },
      ]);
    });
  };

  return (
  <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Password: {user.password}</h1>
              <h1>_isadmin: {user._isadmin}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="isAdmin..."
          onChange={(event) => {
            setAdminState(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default App;
