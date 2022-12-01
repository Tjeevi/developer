import React, { Component } from "react"


class Inc extends Component{
    //increment 
    state={
        book:0,
    
    }
    //increment arrow fun
    tick=()=>{
        this.setState({book:this.state.book+1})
    }
    render(){
        return(
            <div>
                <h1>Sri Sinema</h1>
                <h4>Movie Nmae: {this.props.film}</h4>
                <h4>Ticket Booking: {this.state.book}</h4>
                <button onClick={this.tick}>BOOK NOW</button>

    
        
            </div>
        )
    }
}
export default Inc