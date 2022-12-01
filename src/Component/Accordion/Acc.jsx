import React, { Component } from "react"
import Accchild from "./Accchild"
import './style.css'

export default class App extends Component{
    state={
        dates:[
        {
        id:1,
        title:"Open Section-1",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
        id:1,
        title:"Open Section-1",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },

        {
        id:1,
        title:"Open Section-1",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
       },
    ]}
    render(){
        return(
            <div className="container">
                <h1>Click the Accordion</h1>
                {this.state.dates.map(data=>
                    <div>
                    <Accchild title={data.title} info={data.info}/>
                    </div>)}
            </div>
        )
    }
}