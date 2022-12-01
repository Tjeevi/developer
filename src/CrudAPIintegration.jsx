import React from 'react'
import { useState } from 'react'
import{v4 as uuidv4} from 'uuid';
import axios from 'axios';
import { useEffect } from 'react';

export default function CrudAPIintegration() {
    const[input,setInput]=useState([])
    const[todos,setTodos]=useState([
    //   {id:1,
    //    task:"Hi"
    //   },
    //   {id:2,
    //     task:"Hello"
    //    },
    //    {id:3,
    //     task:"Welcome"
    //    },
    //    {id:4,
    //     task:"Our Home"
    //    },/
    ])
     const fetchdata=async()=>{
        const response=await axios.get("")
        setTodos(response.data)
     }

    //  useEffect(()=>
    //    fetchdata(),[] )
     
    const handlechange=(e)=>{
      setInput(e.target.value)
    }
    const handleadd=async()=>{
      await axios.post('',{"id":uuidv4(),"task":input})
      fetchdata();
      setInput("")
    }
    const handledelete=async(id)=>{
    //    const filter=todos.filter(to=>to.id !==id)
    //    setTodos(filter)
    await axios.delete(`/${id}`)
    fetchdata()
    }
    const handleupdate=async(index)=>{
       const update=prompt("Edit your task",todos[index].task)
     await axios.put(`/${todos[index].id}`,{"id":todos[index].id,"task":update})
    fetchdata()
    }

  return (
    <div>
      <h1>Breakfast List</h1>
      <label className='mx-3'>Enter Food List</label>
      <input type="text" value={input} onChange={handlechange} />
      <button onClick={handleadd} className='mx-5 btn btn-warning'>Add Menu</button>
      {todos.map((to,index)=>
      <div key={to.id}>
        {to.task}
        <button onClick={()=>handledelete(to.id)} className='mx-3 my-3 btn btn-danger'>Delete</button>
        <button onClick={()=>handleupdate(index)} className='mx-3 my-3 btn btn-secondary'>Edit</button>
        </div>)}

    </div>
  )
}
