// import React, { useState } from 'react';
// import axios from 'axios';
// import Layout from '../Layout/Layout';

// function PatientRegister() {
//     const [userData, setUserData] = useState({ name: '', email: '', password: '' });

//     const handleChange = (event) => {
//         setUserData({ ...userData, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             await axios.post('http://localhost:5001/api/register/patient', userData);
//             alert('Patient registered successfully!');
//         } catch (error) {
//             alert('Failed to register patient');
//         }
//     };

//     return (
//         <Layout>
//             <h2>Patient Registration</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//                 <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//                 <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//                 <button type="submit">Register</button>
//             </form>
//         </Layout>
//     );
// }

// export default PatientRegister;
import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import './PatientRegister.css'; // Make sure the CSS file is correctly linked
import heroImage from './Images/loginn.jpg'; // Make sure the image path is correct
import { useNavigate } from "react-router-dom";

function PatientRegister() {
    const [userData, setUserData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/register/patient', userData);
            alert('Patient registered successfully!');
            navigate("/dashboard");
        } catch (error) {
            alert('Failed to register patient');
        }
    };

    return (
        <Layout>
            <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <h1>Welcome New Patients</h1>
            </div>
            <div className="register-container">
                <div className="patient-register-container">
                    <h2>Patient Registration</h2>
                    <form onSubmit={handleSubmit} className="patient-register-form">
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default PatientRegister;
