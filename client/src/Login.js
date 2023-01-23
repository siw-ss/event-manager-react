import { useState , useEffect} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const {authUser} = require('./basicAuth')


function Login(){

    const navigate = useNavigate();

  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [_isadmin, setAdminState] = useState(0);
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
 
 useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  /*const verifyUser = (e)=>{
    e.preventDefault()
    const account = listOfUsers.find((user)=>user.name===name);
    if (account && account.password===password){
    return(<h1>"LOGGED IN"</h1>)
    }else{
    return(<h1>"WRONG ACCOUNT OR PASSWORD </h1>)    
    }
    }*/
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = listOfUsers.find((user) => user.name === name);
        if (account && account.password === password) {
                setauthenticated(true);
                alert("user authentified")
                localStorage.setItem("authenticated", true);
                if(account._isadmin===0){navigate("/Homepage")}
                else if(account._isadmin===1){navigate("/Dashboard")}
                else{alert("Unindetified Role")}
                
            }else{alert("wrong name or password")}
        };
  

  return (
    <div className="App">
      <div className="Login">
        <h2>LogIn</h2>
      <div className="form-box">
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleSubmit}> Login </button>
        </div>
      
      <a href="/Register">make a new account</a>
      </div>
    </div>
    
  );
}

export default Login;