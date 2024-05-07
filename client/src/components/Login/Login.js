// Updated to include Layout
import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';

function Login() {
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login/doctor', userData);
      console.log(response.data);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <Layout>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
}

export default Login;
