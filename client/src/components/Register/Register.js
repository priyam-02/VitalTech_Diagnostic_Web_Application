// Updated to include Layout
import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';

function Register() {
  const [userData, setUserData] = useState({ name: '', email: '', password: '', specialty: '' });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register/doctor', userData);
      alert('Doctor registered successfully!');
    } catch (error) {
      alert('Failed to register doctor');
    }
  };

  return (
    <Layout>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </Layout>
  );
}

export default Register;
