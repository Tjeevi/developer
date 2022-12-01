import React from 'react'
import img1 from "./logg.png"
import "./style.css"
import Table from 'react-bootstrap/Table'


function Tap() {
  return (
    <div className='get'>
      <div className='hol'>
      <div className='container'>
        <div classname="box"><img src={img1} className="round" height={70} width="70px"/></div>
        <div classname="box"><h1>Project Title</h1></div>
        <div classname="box"><button className='btn btn-info'>Logout</button></div>
      </div></div>
      
      <div className='heading'>
        <h3>Roll.No:</h3>
        <h3>Name:</h3>
        <h3>Photo:</h3>
      </div>

      <div className='heat'>
    <div className='tap'>
      <Table>
      <thead>
        <tr className='head'>
          <th>R.No</th>
          <th>Name</th>
          <th>Photo</th>
          <th>Radio btn</th>
        </tr>
      </thead>
      <tbody>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
          
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio' /></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
        <tr className='colr'>
          <td></td>
          <td></td>
          <td></td>
          <td><input type='radio'/></td>
        </tr>
      <br></br>
     </tbody>
  </Table> 
       <button className='btn btn-primary'>Submit</button>
      </div>
 </div>

    </div>
  )
}

export default Tap