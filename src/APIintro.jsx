
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function APIintro() {
  const[todo,setTodo]=useState([])

  const fetchdata=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(abc => setTodo(abc.slice(0,5)))

  }
   useEffect(()=>{
      fetchdata()
  },[])
  
  const handledelete=(id)=>{
     let newlist=todo.filter(to=>to.id !==id)
     setTodo(newlist)
  }

  return (
    <div>
      {todo.map(to=>
      <div key={to.id}>
       <h3>{to.title}</h3> 
       <button  onClick={()=>handledelete(to.id)} className='btn btn-danger'>Delete</button> 
      
       </div>)}
       <br></br>

        <button onClick={fetchdata} className='btn btn-primary'>Refresh</button>  

    
    </div>
  )
      }