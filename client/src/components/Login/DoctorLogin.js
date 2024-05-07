// import React, { useState } from 'react';
// import axios from 'axios';
// import Layout from '../Layout/Layout';

// function DoctorLogin() {
//     const [credentials, setCredentials] = useState({ email: '', password: '' });

//     const handleChange = (event) => {
//         setCredentials({ ...credentials, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5001/api/login/doctor', credentials);
//             console.log(response.data);
//             alert('Doctor login successful!');
//         } catch (error) {
//             alert('Doctor login failed');
//         }
//     };

//     return (
//         <Layout>
//             <h2>Doctor Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//                 <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//                 <button type="submit">Login</button>
//             </form>
//         </Layout>
//     );
// }

// export default DoctorLogin;

import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import './DoctorLogin.css'; // Make sure the path to your CSS file is correct
import heroImage from './Images/loginn.jpg'; // Update with your actual path
import { useNavigate } from "react-router-dom";

function DoctorLogin() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/login/doctor', credentials);
            alert('Doctor login successful!');
            navigate("/dashboard");
        } catch (error) {
            alert('Doctor login failed');
        }
    };

    return (
        <Layout>
            <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <h1>Welcome to the Doctor Portal</h1>
                
            </div>
            <div className="login-container">
                <div className="doctor-login-container">
                    <h2>Doctor Login</h2>
                    <form onSubmit={handleSubmit} className="doctor-login-form">
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default DoctorLogin;
