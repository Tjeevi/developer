import React, { Component } from "react"
import "./Style.css"

class Review extends Component{
    state={
        data:[
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
          
            ]}
    render(){
        return(
          <div className="container">
            <div className="bg-color">
                <h2>{this.state.data.length} Birthdays Today</h2>
                {this.state.data.map(d=>
                <div key={d.id}>
                    <img className="round" src={d.image} height="70px" width={70} />
      
                    <h4 className="aa">{d.name}</h4>
                    <h4>{d.age} Years</h4>
                    
                </div>)}
            </div>
            </div>
        )
    }
}
export default Review