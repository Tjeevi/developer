import React, { useState } from "react"



 export default function Fun(props){

   const[ticket,setTicket]=useState(0)
    const para=()=>{
      setTicket(ticket+1)  
     }
    return(
       <div>
            <h1>SRI CINEMA</h1>
             <h3>Movie Name testing : {props.film}</h3>
             <h3>Booking ticket : {ticket}</h3>
             <button onClick={para} className="btn btn-info">BOOK NOW</button>
       </div>
   )
 }