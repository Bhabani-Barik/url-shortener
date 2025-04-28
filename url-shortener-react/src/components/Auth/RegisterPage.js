import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import API from '../../services/api';

const RegisterPage = () => {
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.username.trim()) errs.username = 'Username is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!emailRegex.test(form.email)) errs.email = 'Invalid email format';
    if (!form.password || form.password.length < 6) errs.password = 'Password must be at least 6 characters';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const { data: response } = await API.post(
        "/api/auth/public/register",
        form
    ); 
      toast.success('Registration Successful! Please log in.');
      navigate('/login');
    } catch (err) {
      toast.error('Registration failed. Try again.');
    }
  };

  return (
    <div className="container mt-5 col-md-6 border border-1 p-3 rounded rounded-4">
      <h2 className="mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSignup} noValidate >
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder='Enter username '
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder='Enter Email'
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder='Enter Password'
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button className="btn btn-success w-100" type="submit">Sign Up</button>
      </form>
      <div className='mt-3'>
        <p>
          Already have an account?
          <a href='/login'>Login here</a>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;
