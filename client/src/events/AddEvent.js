import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css"

const AddEvent=()=>{

    const navigate=useNavigate();
    //redirection to dashboard
    function Cancel(){
      navigate("/Dashboard")
    }

    const [eventName, setEventName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const createEvent =()=>{
        const formData = new FormData();
        formData.append('eventName',eventName);
        formData.append('date',date);
        formData.append('description',description);
        formData.append('image',image);
       try {Axios.post("http://localhost:3001/createEvent",
            formData,
        ).then((response) => {
            console.log(response);
            alert("New Event Created")
            navigate("/Dashboard")
        })
        
       } catch (error) {
        alert(error);
       } 
    };

    return(
        <div className="App">
            <div className="Login">
            <h2>Create New Event</h2>
            <div>
            <input
            type="text"
            placeholder="Event Name..."
            onChange={(e) => {
                setEventName(e.target.value);
            }}
            />
            <input
            type="date"
            placeholder="Date..."
            onChange={(e) => {
                setDate(e.target.value);
            }}
            />
            <input
            type="text"
            placeholder="Description..."
            onChange={(e) => {
                setDescription(e.target.value);
            }}
            />
            <input
            type="file"
            name="image"
            placeholder="Image..."
            onChange={(e) => {
                setImage(e.target.files[0]);
            }}
            />
            <button onClick={createEvent}> Create Event </button>
            </div>
            <button onClick={Cancel}>Cancel</button>
        </div>
        </div>

    );
}

export default AddEvent;