import React from "react"
import { useState } from "react"
import "./Style.css"


export default function Birthfunc(){
    const[datas,setDatas]=useState([
        {
          id: 1,
          name: 'Bertie Yates',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        },
        {
          id: 2,
          name: 'Hester Hogan',
          age: 32,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        },
        {
          id: 3,
          name: 'Larry Little',
          age: 36,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        },
        {
          id: 4,
          name: 'Sean Walsh',
          age: 34,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        },
        {
            id: 5,
            name: 'Lola Gardner',
            age: 29,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
          },
      
       
        ]

            
    )
    return(
        <div className="fun">
        <div  className="funstart">
            
            <h2 className="birth">{datas.length} Birthday today</h2>
            {datas.map(day=>
             <div className="full" key={day.id}>
                <div className="fully">
                <img src={day.image} height="50px" width={50}/>
                <h2>{day.name}</h2>
                <h3>{day.age} years</h3>
 
               </div>
             </div>   
                
                
                
         )}

        </div>
        </div>
    
    )
}