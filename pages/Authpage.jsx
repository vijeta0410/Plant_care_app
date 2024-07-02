import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Default to login mode
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/user/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        // Login successful
        navigate('/home'); // Redirect to home page
      } else {
        // Handle login error
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/user/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password, email, phone }),
      });
      const data = await response.json();
      if (data.success) {
        // Signup successful
        navigate('/'); // Redirect to home page
      } else {
        // Handle signup error
        console.error('Signup failed:', data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="card p-4 text-white" style={{ width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <h1 className="text-center mb-4">{isLogin ? 'Login' : 'Signup'}</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input type={showPassword ? 'text' : 'password'} className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility}>
              <i className={showPassword ? "faEyeSlash" : "faEye"}></i>
              </button>
            </div>
          </div>
          {!isLogin && (
            <>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </>
          )}
          {isLogin ? (
            <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
          ) : (
            <button type="button" className="btn btn-primary w-100" onClick={handleSignup}>Signup</button>
          )}
        </form>
        <p className="text-center mt-3">
          {isLogin ? 'Don\'t have an account?' : 'Already have an account?'} <button type="button" className="btn btn-link text-white" onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Signup' : 'Login'}</button>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;