import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import {Bookmarks} from "phosphor-react";
var listOfCart ;
function Homepage(){

    const [listOfEvents, setListOfEvents] = useState([]);
    const [listOfCart , setListOfCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("http://localhost:3001/getEvents").then((response) => {
          setListOfEvents(response.data);
        });
      }, []);

    //logout redirection
    function Logout(){
        navigate("/LogIn")
    }
    //Add to cart
    function AddEventToCart(eventName,date,description,image) {
        try {
           setListOfCart([
            ...listOfCart,
            {
                eventName,
                date,
                description,
                image,
            }
        ]); 
        } catch (error) {
            alert('error')
        }
        
        alert("you chose to participate in"+eventName);
    }

    return (
    <div className="App">
        <div className="Homepage">
        <div className="Navbar">
        <p>Welcome to the Homepage</p>
            <div className="links">
                <Link to="/cart">
                    <Bookmarks size={32}></Bookmarks>
                </Link>
                <button onclick="f()">
                Click Me To Get Cart
                </button>
                <button onClick={Logout}>Logout</button>
            </div>
        </div>        

    <div className="eventsDisplay">
        {listOfEvents.map((event)=>{
            return(
                <div className="event">
                    <div className="event-img">
                    <img  src={"http://localhost:3001/"+event.image}/>
                    </div>
                    <div className="content">
                    <div className="event-details">
                    <h1 className="title">{event.eventName}</h1>
                    <h1 className="date">Date: {event.date}</h1>
                    <h1 className="description">Description: {event.description}</h1>
                    </div>
                    <button className="Bttn" onClick={()=>AddEventToCart(event.eventName,event.date,event.description,event.image)}>Participate</button>
                    </div>
                </div>
            )
        })}

    </div>
    <h1>CART</h1>
    <div className="eventsDisplay">
        {listOfCart.map((event)=>{
            return(
                <div className="event">
                    <div className="event-img">
                    <img  src={"http://localhost:3001/"+event.image}/>
                    </div>
                    <div className="content">
                    <div className="event-details">
                    <h1 className="title">{event.eventName}</h1>
                    <h1 className="date">Date: {event.date}</h1>
                    <h1 className="description">Description: {event.description}</h1>
                    </div>
                    </div>
                </div>
            )
        })}

    </div>
    </div>
    </div>
);
};
export default Homepage;