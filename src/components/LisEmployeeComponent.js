import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

export default class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  async componentDidMount() {
    try {
      const res = await EmployeeService.getEmployees();
      this.setState({ employees: res.data });
    } catch (error) {
      console.error("There was an error fetching the employees!", error);
    }
  }

  deleteEmployee = async (employeeId) => {
    try {
      await EmployeeService.deleteEmployee(employeeId);
      const res = await EmployeeService.getEmployees();
      this.setState({ employees: res.data });
    } catch (error) {
      console.error("There was an error deleting the employee!", error);
    }
  };

  render() {
    return (
      <div className='container mt-5'>
        <h2 className='text-center'>Employees Table</h2>
        <Link to='/add-employee' className='btn btn-outline-primary w-100'>Add</Link>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <Link to={`/update-employee/${employee.id}`} className='btn btn-info'>Update</Link>
                  <button 
                    className='btn btn-danger' 
                    style={{ marginLeft: "10px" }} 
                    onClick={() => this.deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
