import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Ensure the CSS file is correctly linked

function Header({isLoggedIn}) {
  return (
    <header className="header">
      <h1>Vital Tech Health Portal</h1>
      <nav>
        {/* <Link to="/login/patient" style={{ margin: '0 10px' }}>Login (Patient)</Link>
        <Link to="/login/doctor" style={{ margin: '0 10px' }}>Login (Doctor)</Link>
        <Link to="/register/patient" style={{ margin: '0 10px' }}>Register (Patient)</Link>
        <Link to="/register/doctor" style={{ margin: '0 10px' }}>Register (Doctor)</Link> */}
        
        {!isLoggedIn
          ?  
          <>
            <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
            <div className="dropdown">
              <button className="dropbtn">Login</button>
                <div className="dropdown-content">
                  <a href="/login/patient">Patient</a>
                  <a href="/login/doctor">Doctor</a>
                </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Register</button>
                <div className="dropdown-content">
                  <a href="/register/patient">Patient</a>
                  <a href="/register/doctor">Doctor</a>
                </div>
            </div>
          </>
          : 
          <>
            <Link to="/dashboard" style={{ margin: '0 10px' }}>Dashboard</Link>
            <Link to="/" style={{ margin: '0 10px' }}>Logout</Link>
          </>
        }



        </nav>
    </header>
  );
}

export default Header;