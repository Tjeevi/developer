
import React from 'react'
import "./style.css"
import Table from 'react-bootstrap/Table'
function Tabdep(){

  return( 
    <div className='heat'>
    <div className='tap'>
      <Table>
      <thead>
        <tr className='head'>
          <th>R.No</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Checkbox</th>
        </tr>
      </thead>
      <tbody>
        <tr className='colr'>
          <td>1</td>
          <td>Hari</td>
          <td>Male</td>
          <td><input type='checkbox'/></td>
          
        </tr>
        <tr className='colr'>
          <td>2</td>
          <td>Asha</td>
          <td>Female</td>
          <td><input type='checkbox' /></td>
        </tr>
        <tr className='colr'>
          <td>3</td>
          <td>Maysha</td>
          <td>Female</td>
          <td><input type='checkbox'/></td>
        </tr>
        <tr className='colr'>
          <td>4</td>
          <td>Arsh</td>
          <td>Male</td>
          <td><input type='checkbox'/></td>
        </tr>
        <tr className='colr'>
          <td>5</td>
          <td>Maya</td>
          <td>Female</td>
          <td><input type='checkbox'/></td>
        </tr>
        <tr className='colr'>
          <td>6</td>
          <td>Ashwin</td>
          <td>Male</td>
          <td><input type='checkbox'/></td>
        </tr>
        <tr className='colr'>
          <td>7</td>
          <td>Debak</td>
          <td>Male</td>
          <td><input type='checkbox'/></td>
        </tr>
        <tr className='colr'>
          <td>8</td>
          <td>Aila</td>
          <td>Female</td>
          <td><input type='checkbox'/></td>
        </tr>
        <tr className='colr'>
          <td>9</td>
          <td>Thanvi</td>
          <td>Female</td>
          <td><input type='checkbox'/></td>
        </tr>
        <tr className='colr'>
          <td>10</td>
          <td>Fiyash</td>
          <td>Male</td>
          <td><input type='checkbox'/></td>
        </tr>
     </tbody>
  </Table> 
     <button className='btn btn-primary'>Submit</button> 
       </div>
  
 </div>
  )

}  

export default Tabdep