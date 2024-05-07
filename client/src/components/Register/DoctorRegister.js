// import React, { useState } from 'react';
// import axios from 'axios';
// import Layout from '../Layout/Layout';

// function DoctorRegister() {
//     const [userData, setUserData] = useState({ name: '', email: '', password: '', specialty: '' });

//     const handleChange = (event) => {
//         setUserData({ ...userData, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             await axios.post('http://localhost:5001/api/register/doctor', userData);
//             alert('Doctor registered successfully!');
//         } catch (error) {
//             alert('Failed to register doctor');
//         }
//     };

//     return (
//         <Layout>
//             <h2>Doctor Registration</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//                 <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//                 <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//                 <input type="text" name="specialty" placeholder="Specialty" onChange={handleChange} required />
//                 <button type="submit">Register</button>
//             </form>
//         </Layout>
//     );
// }

// export default DoctorRegister;
import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import './DoctorRegister.css'; // Ensure the CSS file is linked
import heroImage from './Images/loginn.jpg'; // Ensure the correct image path
import { useNavigate } from "react-router-dom";

function DoctorRegister() {
    const [userData, setUserData] = useState({ name: '', email: '', password: '', specialty: '' });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/register/doctor', userData);
            alert('Doctor registered successfully!');
            navigate("/dashboard");
        } catch (error) {
            alert('Failed to register doctor');
        }
    };

    return (
        <Layout>
            <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <h1>Join Our Medical Team</h1>
            </div>
            <div className="register-container">
                <div className="doctor-register-container">
                    <h2>Doctor Registration</h2>
                    <form onSubmit={handleSubmit} className="doctor-register-form">
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                        <input type="text" name="specialty" placeholder="Specialty" onChange={handleChange} required />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default DoctorRegister;
