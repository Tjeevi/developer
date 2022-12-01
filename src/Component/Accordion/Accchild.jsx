import React, { Component } from "react"


class Accchild extends Component{
    state={
        showinfo:false
    }
    tog=()=>{
        this.setState({showinfo:!this.state.showinfo})
    }

    render(){
        return(
            <div className="pp">
            
                 <h2 className="title">{this.props.title}</h2>
                 <button className="btn" onClick={this.tog}>{this.state.showinfo?"-":"+"}</button>
                 {this.state.showinfo &&
                 <p>{this.props.info}</p>
                 
            
                 }
            </div>
        );
    }
}
export default Accchild