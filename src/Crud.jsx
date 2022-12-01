import React from 'react'
import { useState } from 'react'
import{v4 as uuidv4} from 'uuid';

export default function Crud() {
    const[input,setInput]=useState([])
    const[todos,setTodos]=useState([
      {id:1,
       task:"Idly"
      },
      {id:2,
        task:"Dosa"
       },
       {id:3,
        task:"Upma"
       },
       {id:4,
        task:"Capathi"
       },
    ])
    const handlechange=(e)=>{
      setInput(e.target.value)
    }
    const handleadd=()=>{
      setTodos([...todos,{id:uuidv4(),task:input}])
      setInput("")
    }
    const handledelete=(id)=>{
       const filter=todos.filter(to=>to.id !==id)
       setTodos(filter)
    }
    const handleupdate=(index)=>{
       const update=prompt("Edit your task",todos[index].task)
       let copy=[...todos];
       copy[index].task=update
       setTodos(copy)
    }

  return (
    <div>
      <h1>Breakfast</h1>
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
