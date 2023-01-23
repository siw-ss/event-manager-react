import React, { useContext } from "react";
const{listOfCart} = require('./Homepage');


function Cart(){

    return (
    <div>
        <h2>Cart</h2>
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
)}

export default Cart;