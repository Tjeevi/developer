 import React, { Component } from 'react'
//import { Route, Routes,Link,BrowserRouter } from "react-router-dom"
//import Student from "./Student"
// import Inc from "./Inc"
// import Review from './Component/Birthday/Review'
 //import Acc from './Component/Accordion/Acc'
// import Fun from "./Fun"
// import Birthfunc from "./Component/Funstart/Birthfunc"
// import Filter from "./Filter"
import Menu from "./Component/Menucard/Menu"
// import APIintro from "./APIintro"
//import Crud from "./Crud"
//import CrudAPIintegration from './CrudAPIintegration'
  //import Tabdep from "./Component/Table/Tabdep"
// import Tap from './Component/Arun/Tap'
  // import Sanjay from './Sanjay'

export default class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      <div>
           {/* <Student/>
         <Inc film="Vikram"/>
        <Inc film="OK OK"/> 
         <Review/> 
        <Acc/>
         <Fun film="PS1"/>
        <Fun film="VIP"/>
        <Birthfunc/>
        <Filter/> */}
        <Menu/>  
        {/* <APIintro/> 
    <Crud/>  */}
        {/* <Tabdep/>    */}
        {/* <CrudAPIintegration/> */}
        {/* <ul className='king'>
          <li ><Link to="/Studentform">Students</Link></li>
          <li><Link to="/Accordion">Accordion</Link></li>
           <li><Link to="/Crudoperation">Crud</Link></li> 
        </ul>


     <Routes>
      <Route path="/Studentform" element={<Student/>} />
      <Route path="/Accordion" element={<Acc/>}/>
     <Route path="/Crudoperation" element={<Crud/>} /> 
    </Routes>  */}

  
    {/* <Tap/> */}
    {/* <Sanjay/> */}
  
      
         
      </div>
      // </BrowserRouter>
    )
  }
}
