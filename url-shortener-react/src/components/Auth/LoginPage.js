import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if (!email.trim()) {
    //   errors.email = 'Email is required';
    // } else if (!emailRegex.test(email)) {
    //   errors.email = 'Invalid email format';
    // }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (!username.trim()) errors.emailOrUsername = 'Username is required';
    if (!password.trim()) errors.password = 'Password is required';
  

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post('/api/auth/public/login', { username, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
      toast.success("Login Successful!")
    } catch (err) {
      console.log(err)
      toast.error('Login failed. Check your credentials.');
    }
  };

  

  return (
    <div className="container mt-5 col-md-6 border border-1 rounded rounded-4 p-4">
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} noValidate>
        <div className='mb-3'>
        <label>UserName</label>
          <input
            type="text"
            name="username"
            placeholder=" Enter username"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div> */}

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder='Enter Password'
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button className="btn btn-success w-100" type="submit">Login</button>
      </form>
      <div className='mt-3'>
          <p>
            Don't have an account? 
            <a href='/register'>Signup now </a>
          </p>
      </div>
    </div>
  );
};

export default LoginPage;
