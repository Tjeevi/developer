import React, { useState } from "react"
import "./App.css"

function Filter(){
    const[datas,setDatas]=useState([
        {
            stuname:"Thennarasu",
            id:1,
            dept:"CSE"
        },{
            stuname:"Senthil",
            id:2,
            dept:"IT"
        },{
            stuname:"Dinesh",
            id:3,
            dept:"EEE"
        },{
            stuname:"Yesvanth",
            id:4,
            dept:"CSE"
        },{
            stuname:"Magilan",
            id:5,
            dept:"IT"
        },{
            stuname:"Mogith",
            id:6,
            dept:"EEE"
        },{
            stuname:"Murugan",
            id:7,
            dept:"CSE"
        },{
            stuname:"Thanvi",
            id:8,
            dept:"IT"
        },
   ])

   const[dataren,setDataren]=useState(datas)

   const depart=datas.map(data=>data.dept)
   console.log(depart);

   const uniqdept=[...new Set(depart)]
   console.log(uniqdept);

   uniqdept.unshift("ALL")

   const tab=(de)=>{
      if(de==="ALL"){
        setDataren(datas)
        return
      }
      

      const filterdata=datas.filter(
        data=>data.dept===de)
       setDataren(filterdata)
     
    }
    
 return(
        <div>
            <h1>Student List</h1>
            {uniqdept.map(de=>
                <span onClick={()=>tab(de)} className="heading">{de}</span>)}
          {dataren.map(data=>
            <div key={data.id}>
                <h2>{data.stuname}</h2>
            </div> )}
            <hr></hr>
        <br></br><br></br>
        </div>
    )
}
export default Filter