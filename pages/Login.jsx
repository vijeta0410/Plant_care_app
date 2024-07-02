import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "success") {
          navigate('/home');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div
      className="d-flex min-vh-100 justify-content-center align-items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1476842634003-7dcca8f832de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container p-5 rounded shadow-sm bg-light w-50">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="mb-3">
            <label htmlFor="login-email" className="form-label">Email</label>
            <input
              type="text"
              id="login-email"
              name="login-email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please provide an email.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="login-password" className="form-label">Password</label>
            <input
              type="password"
              id="login-password"
              name="login-password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              autoComplete="current-password" // Added autocomplete attribute
            />
            <div className="invalid-feedback">Please provide a password.</div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <div className="text-center mt-4">
            <span>Don't have an account? </span>
            <a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
