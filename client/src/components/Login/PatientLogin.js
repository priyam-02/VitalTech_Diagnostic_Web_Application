// import React, { useState } from 'react';
// import axios from 'axios';
// import Layout from '../Layout/Layout';

// function PatientLogin() {
//     const [credentials, setCredentials] = useState({ email: '', password: '' });

//     const handleChange = (event) => {
//         setCredentials({ ...credentials, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5001/api/login/patient', credentials);
//             console.log(response.data);
//             alert('Patient login successful!');
//         } catch (error) {
//             alert('Patient login failed');
//         }
//     };

//     return (
//         <Layout>
//             <h2>Patient Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//                 <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//                 <button type="submit">Login</button>
//             </form>
//         </Layout>
//     );
// }

// export default PatientLogin;
import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import './PatientLogin.css'; // Ensure the CSS file is linked
import heroImage from './Images/loginn.jpg'; // Ensure the correct image path
import { useNavigate } from "react-router-dom";

function PatientLogin() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();


    const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/login/patient', credentials);
            alert('Patient login successful!');
            navigate("/dashboard");
        } catch (error) {
            alert('Patient login failed');
        }
    };

    return (
        <Layout>
            <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <h1>Welcome Patients</h1>
            </div>
            <div className="login-container">
                <div className="patient-login-container">
                    <h2>Patient Login</h2>
                    <form onSubmit={handleSubmit} className="patient-login-form">
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default PatientLogin;
