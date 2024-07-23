import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

export default function CreateEmployeeComponent() {

  const Navigate=useNavigate();
  const [employee,setEmployee]=useState({
    firstName:"",
    lastName:"",
    email:""
  })
const saveHandler=()=>{
 
  EmployeeService.createEmployees(employee);
  console.log(employee);
  Navigate("/employees");
}
  const handleClick=(e)=>{
     const name=e.target.name;
     const value=e.target.value;
     setEmployee({...employee,[name]:value});
    
     
  }

  const cancelHandler=()=>{
    Navigate('/employees');
  }
  return (

    <div className='container mt-4'>
      <div className='card w-50 offset-md-3'>
        <h3 className='text-center'>Add employee</h3>
        <div className='card-body'>
          <form autoComplete="off">
            <div className='form-group'>
              <label>FirstName:</label>
              <input type='text' name='firstName' id='firstName' className='form-control' autoComplete="off" value={employee.firstName} onChange={handleClick}/>
            </div>
            <div className='form-group'>
              <label>LastName:</label>
              <input type='text' name='lastName' id='lastName' className='form-control' autoComplete="off" value={employee.lastName}  onChange={handleClick}/>
            </div>
            <div className='form-group'>
              <label>email:</label>
              <input type='text' name='email' id='email' className='form-control' autoComplete="off" value={employee.email}  onChange={handleClick}/>
            </div>
            <button className='btn btn-success float-start ' onClick={saveHandler}>save</button>
            <button className='btn btn-danger float-end' onClick={cancelHandler}>cancel</button>
          </form>
        </div>
      </div>

    </div>
    
  )
}
