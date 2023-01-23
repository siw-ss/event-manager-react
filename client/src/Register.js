import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [_isadmin, setAdminState] = useState(0);
  const [cart, setCartState] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      password,
      _isadmin : 0,
      cart :[],
    }).then((response) => {
        alert("New User Created")
        navigate("/Homepage")
    });
  };

  return (
    <div className="App">
      <div className="Login">
        <h2>Register</h2>
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
        
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default Register;