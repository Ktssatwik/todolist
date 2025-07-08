import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from 'ui-component/Logo';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import './ForgotPassword.css'; 
import InputLabel from '@mui/material/InputLabel';
import { color } from "framer-motion";

const NewPassword = () => {
    const navigate = useNavigate();
    const theme = useTheme();  

    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Password changed successfully!");
        navigate('/login'); 
    };

    return (
        <div className="forgot-container">
            <div className="forgot-card">
                <Link to="#" aria-label="logo">
                    <Logo />
                </Link>
                <h2 style={{color:' #673ab7'}}>Chnage pasword</h2>
                <p className="forgot-subtext">Enter your new password below.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <FormControl fullWidth variant="outlined" sx={{ ...theme.typography.customInput }}>
                         <InputLabel htmlFor="new-password">New Password</InputLabel>
                            <OutlinedInput
                                id="new-password"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                label="New Password"
                                autoComplete="off"
                                required
                            />
                        </FormControl>
                    </div>
                    <div className="input-group">
                        <FormControl fullWidth variant="outlined" sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="confirm-new-password">Confirm New Password</InputLabel>
                            <OutlinedInput
                                type="password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                label="Confirm New Password"
                                autoComplete="off"
                                required
                            />
                        </FormControl>
                    </div>
                    <button type="submit" className="forgot-submit">Change Password</button>
                </form>
                <p className="forgot-footer">
                    Remembered your password? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default NewPassword;
