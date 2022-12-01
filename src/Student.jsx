import React, { Component } from "react"


class Student extends Component{
    state={
        //Form
        studentname:"",
        Registergno:"",
        fathername:"",
        age:"",
        email:"",
        address:"",
        password:"",
        cpassword:"",
        submit:false,
    
        player1:"Dhoni",
        player2:"virat"

        
}
//Form arrow fun
handle=(e)=>{
      this.setState({[e.target.name]:e.target.value})
}
sub=()=>{
    if(this.state.password===this.state.cpassword){
        this.setState({submit:true})
    }
    else{
        alert("incorrect password")
    }


}
    render(){
        return(
            <div>
                <h1>Student Registration Form</h1><br></br>
                <label> Student Name</label>
                <input name="studentname" value={this.state.studentname} onChange={this.handle}/><br></br>
                <label> Register number</label>
                <input name="registerno" value={this.state.registerno} onChange={this.handle}/><br></br>
                <label> Father Name</label>
                <input name="fathername" value={this.state.fathername} onChange={this.handle}/><br></br>
                <label> Age</label>
                <input name="age" value={this.state.age} onChange={this.handle}/><br></br>
                <label> Email</label>
                <input name="email" value={this.state.email} onChange={this.handle}/><br></br>
                <label> Address</label>
                <input name="address" value={this.state.address} onChange={this.handle}/><br></br>
                <label>Password</label>
                <input name="password" type="password" value={this.state.password} onChange={this.handle}/><br></br>
                <label> Conform password</label>
                <input name="cpassword" type="password" value={this.state.cpassword} onChange={this.handle}/><br></br><br></br>

                <button onClick={this.sub}>Submit</button>
            {
                this.state.submit && 
                <div>
                    <h5>I am {this.state.studentname}</h5>
                    <h5>My reg.no is {this.state.registerno3}</h5>
                    <h5>My farher name {this.state.fathername}</h5>
                    <h5>My age is {this.state.age}</h5>
                    <h5>My mail id is {this.state.email}</h5>
                    <h5>My address is {this.state.address}</h5>
                </div>
            }<br></br><br></br>

               <h1>Cricket Player</h1>
               <ol>
                <li>{this.state.player1}</li>
                <li>{this.state.player2}</li>
               </ol>

            


            

            
            </div>
        )
    }
}
export default Student