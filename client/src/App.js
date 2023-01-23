import React from "react";
import {  Route,Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";
import Register from "./Register";
import Login from "./Login";
import UsersList from "./UsersList";
import AddEvent from "./events/AddEvent";
import  Cart  from "./Cart";

function App() {
  return (
  <div className="App">
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/" element={<Login />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/UsersList" element={<UsersList />}/>
        <Route path="/AddEvent" element={<AddEvent />}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/Homepage" element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
