import React from 'react';
import LisEmployeeComponent from './components/LisEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployee from './components/UpdateEmployee';

 function App() {
  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<LisEmployeeComponent />} />
            <Route path='/employees' element={<LisEmployeeComponent />} />
            <Route path='/add-employee' element={<CreateEmployeeComponent/>}/>
            <Route path='/update-employee/:id' element={<UpdateEmployee/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;