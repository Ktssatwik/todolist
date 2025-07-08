import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPassword.css'; // import CSS
import Logo from 'ui-component/Logo';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/forgot-password/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to send reset link');
      }

      alert('Password reset link sent to your email!, Kindly check your inbox.');
      // navigate('/newPassword');
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending reset link: ' + error.message);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <Link to="#" aria-label="logo">
          <Logo />
        </Link>
        <h2 className="forgot-password-heading">Forgget passwrod</h2>
        <p className="forgot-subtext">Enter mail id to get a reset link.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="forgot-password-email">Email</InputLabel>
              <OutlinedInput
                id="forgot-password-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
              />
            </FormControl>
          </div>
          <button type="submit" className="forgot-submit">
            Send Reset Link
          </button>
        </form>
        <p className="forgot-footer">
          Remembered your password? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
