import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import DoctorRegister from './components/Register/DoctorRegister';
import PatientRegister from './components/Register/PatientRegister';
import DoctorLogin from './components/Login/DoctorLogin';
import PatientLogin from './components/Login/PatientLogin';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/doctor" element={<DoctorRegister />} />
        <Route path="/register/patient" element={<PatientRegister />} />
        <Route path="/login/doctor" element={<DoctorLogin />} />
        <Route path="/login/patient" element={<PatientLogin />} />
        <Route path="/help" element={<div>Help page</div>} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
