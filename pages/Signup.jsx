import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/signup', { username, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err));
    navigate('/login')
    // Perform signup logic here
    // console.log('Signup submitted:', { username, email, password });
  };

  return (
    <div
      className="d-flex min-vh-100 justify-content-center align-items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1444392061186-9fc38f84f726?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container p-5 rounded shadow-sm bg-light w-50">
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please provide a username.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please provide a valid email address.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password" // Add autocomplete attribute
            />
            <div className="invalid-feedback">Please provide a password.</div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
          <div className="text-center mt-4">
            <span>Already have an account? </span>
            <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
