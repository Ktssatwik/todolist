import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cookies from 'js-cookie';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function AuthLogin() {
  //navigate to redirect after login
  const navigate = useNavigate();

  const theme = useTheme();

  const [checked, setChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ NEW: Form fields state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // ✅ NEW: Loading & error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // ✅ NEW: Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/auth/jwt/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }, { withCredentials: true })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Invalid credentials');
      }

      const data = await response.json();
      console.log('Login success:', response);
      console.log('Access Token:', data);
      // alert('Login successful!');
      const accesstoken = data.access;
      Cookies.set('access_token', accesstoken);
      const refreshToken = data.refresh;
      Cookies.set('refresh_token', refreshToken);
      // data.cookie('access_token', token, {
      //   httpOnly: true,
      //   secure: false, // 👈 must be true if served over https
      //   sameSite: 'lax' // 👈 needed if frontend & backend are on different domains/ports
      // });
      navigate('/dashboard/default'); // redirect to dashboard
      // 👉 here you can save the token to localStorage or context
    } catch (err) {
      console.error(err);
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
        <InputLabel htmlFor="outlined-adornment-username-login">Username</InputLabel>
        <OutlinedInput
          id="outlined-adornment-username-login"
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          autoComplete="off"
        />
      </FormControl>

      <FormControl fullWidth sx={{ ...theme.typography.customInput, mt: 3 }}>
        <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password-login"
          type={showPassword ? 'text' : 'password'}
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="large"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
        <Grid>
          <Typography variant="subtitle1" component={Link} to="/forgotPassword" color="secondary" sx={{ textDecoration: 'none' }}>
            Forgot Password?
          </Typography>
        </Grid>
      </Grid>

      {/* ✅ Show error message */}
      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}

      <Box sx={{ mt: 2 }}>
        <AnimateButton>
          <Button color="secondary" fullWidth size="large" type="submit" variant="contained" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </AnimateButton>
      </Box>
    </form>
  );
}
