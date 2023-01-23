import { useState, useEffect } from "react";
import Axios from "axios";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";

function UsersList() {
    const navigate = useNavigate();
  const [listOfUsers, setListOfUsers] = useState([]);

    //dashboard redirection
    function Dashboard(){
        navigate("/Dashboard")
    }

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
        <button onClick={Dashboard}>Back</button>
      <div className="eventsDisplay">
        {listOfUsers.map((user) => {
          return (
            <div className="event">
              <h1>Name: {user.name}</h1>
              <h1>Password: {user.password}</h1>
              <h1>_isadmin: {user._isadmin}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UsersList;
