import React from "react";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Axios from "axios";

const Dashboard = ()=> {

    const navigate = useNavigate();
    const [listOfEvents, setListOfEvents] = useState([]);
    const [newEventName,setNewEventName]=useState("");
    const [newEventDescription,setNewEventDescription]=useState("");
    const [newEventDate,setNewEventDate]=useState("");
    const [newEventImage,setNewEventImage]=useState("");

    //eventslist redirection
    function ViewEvents(){
        navigate("/Homepage")
    }
    //userslist redirection
    function UsersList(){
        navigate("/UsersList")
    }
    //logout redirection
    function Logout(){
        navigate("/LogIn")
    }
   //Add a new event redirection
    function AddEvent(){
        navigate("/AddEvent")
    }
    //fetching the events
    useEffect(() => {
        Axios.get("http://localhost:3001/getEvents").then((response) => {
          setListOfEvents(response.data);
        });
      }, []);
    //uploading new picture
    const uploadImage = ()=>{
        try {Axios.post("http://localhost:3001/uploadImage",newEventImage)
        .then((res)=>{alert("image uploaded")})
    }catch(err){alert(err)}
    };
    //update event details function
    const updateEvent =(id)=>{
        Axios.put("http://localhost:3001/updateEvent",{
            id: id,
            newEventName: newEventName,
            newEventDescription : newEventDescription,
            newEventDate : newEventDate,
        })
    }
    //update event details function
    const updateEventImage =(id)=>{
        const formData = new FormData();
        formData.append('id',id);
        formData.append('newEventImage',newEventImage);
        try{
            Axios.put("http://localhost:3001/updateEventImage",
            formData)
            .then((response) => {
                console.log(response);
                alert("Image changed")
            })
        }catch (error) {
       } 
    }
    //delete event details function
    const deleteEvent =(id)=>{
        try {
            Axios.delete('http://localhost:3001/deleteEvent/'+id)
            .then((response) => {
                alert("Event Deleted successfully!")
            })
        } catch (error) {
            alert(error);
        }
    };

        return (
        <div className="App">
            <div className="Navbar">
            <div className="admin-links">
            <button onClick={ViewEvents}>Events List View</button>
            <button onClick={UsersList}>Users List View</button>
            <button onClick={AddEvent}>Add New Event</button>
            <button onClick={Logout}>Logout</button>
            </div>
            </div>
            <p className="dashboard-title">Welcome to your Admin Dashboard</p>

        <div className="eventsDisplay">
        {listOfEvents.map((event,key)=>{
            return(
                <div className="App">
                <div key={key} className="event-admin">
                    <h1>Event Name: {event.eventName}</h1>
                    <input
                     type="text" 
                     placeholder="New event name..."
                     onChange={(e)=>{
                        setNewEventName(e.target.value);
                     }}
                     />
                    <button onClick={()=>updateEvent(event._id)}>Update Name</button>
                    <h1>Date: {event.date}</h1>
                    <input
                     type="date" 
                     placeholder="New event date..."
                     onChange={(e)=>{
                        setNewEventDate(e.target.value);
                     }}
                     />
                    <button onClick={()=>updateEvent(event._id)}>Update Date</button>
                    <h1>Description: {event.description}</h1>
                    <input
                     type="text" 
                     placeholder="Change event description..."
                     onChange={(e)=>{
                        setNewEventDescription(e.target.value);
                     }}
                     />
                     <button onClick={()=>{
                        updateEvent(event._id);}
                        }>Update Description</button>
                     <img className="event-img" src={"http://localhost:3001/"+event.image}/>
                     <input
                        type="file"
                        name="image"
                        placeholder="Image..."
                        onChange={(e) => {
                            setNewEventImage(e.target.files[0]);
                            //uploadImage(e.target.files[0]);
                        }}
                        />
                    <button onClick={()=>{
                        updateEventImage(event._id)}}>Update Image</button>
                    <button className="delete" onClick={()=>deleteEvent(event._id)}>Delete</button>
                </div>
                </div>
            )
        })}

    </div>
        </div>
    );
    };
export default Dashboard;