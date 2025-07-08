  import { useState } from 'react';
  import axios from 'axios';

  import Tooltip from '@mui/material/Tooltip';
  import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


  // material-ui
  import { useTheme } from '@mui/material/styles';
  import Button from '@mui/material/Button';
  import FormControl from '@mui/material/FormControl';
  import Grid from '@mui/material/Grid';
  import IconButton from '@mui/material/IconButton';
  import InputAdornment from '@mui/material/InputAdornment';
  import InputLabel from '@mui/material/InputLabel';
  import OutlinedInput from '@mui/material/OutlinedInput';
  import TextField from '@mui/material/TextField';
  import Typography from '@mui/material/Typography';
  import Box from '@mui/material/Box';

  // project imports
  import AnimateButton from 'ui-component/extended/AnimateButton';

  // assets
  import Visibility from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';

  export default function AuthRegister() {
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');

    const [mobileError, setMobileError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


      const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };


    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleMobileChange = (e) => {
  const value = e.target.value;
  if (!/^\d*$/.test(value)) {
    setMobileError('Only numbers are allowed');
  } else if (value.length !== 10) {
    setMobileError('Mobile number must be 10 digits');
  } else {
    setMobileError('');
  }
  setMobilenumber(value);
};
    const handlePasswordChange = (e) => {
      const value = e.target.value;
      setPassword(value);

      const errors = [];

      if (value.length < 8 || !/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value) || !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        errors.push('Password is invalid');
      }
      if (errors.length > 0) {
        setPasswordError(errors.join(' '));
      } else {
        setPasswordError('');
      }
    };
    const handleFirstNameChange = (e) => {
      const value = e.target.value;
      setFirstName(value);

      const trimmed = value.trim();
      let error = '';

      if (trimmed.length === 0) {
        error = 'First name cannot be empty.';
      } else if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
        error = 'Only letters and spaces allowed.';
      }

      setFirstNameError(error);
    };

    const handleLastNameChange = (e) => {
      const value = e.target.value;
      setLastName(value);

      const trimmed = value.trim();
      let error = '';

      if (trimmed.length === 0) {
        error = 'Last name cannot be empty.';
      } else if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
        error = 'Only letters and spaces allowed.';
      }

      setLastNameError(error);
    };

    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmail(value);
      if (!value.includes('@') || value.indexOf('.') < value.indexOf('@') + 2) {
        setEmailError('Invalid email address');
      } else {
        setEmailError('');
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (
        mobileError ||
        passwordError ||
        emailError ||
        firstNameError ||
        lastNameError
      ) {
        alert('Please fix validation errors before submitting.');
        return;
      }

      try {
        const response = await axios.post('http://localhost:8000/api/users/register/', {
          first_name: firstName,
          last_name: lastName,
          email: email,
          mobilenumber: mobilenumber,
          password: password,
        });

        if (response.status === 200) {
          console.log('Registration successful:', response.data);
          alert('Registration successful!');
        }
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed! Please try again.');
      }
    };
return (
  <form onSubmit={handleSubmit}>
    <Grid container spacing={2} >
      
      {/* First name and Last name */}
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
          sx={{width:'250px'}}
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            autoComplete='off'
          />
          <Typography
            variant="caption"
            color={firstNameError ? 'error' : 'transparent'}
            sx={{ mt: 0.5 }}
          >
            {firstNameError || ' '}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
           sx={{width:'250px'}}
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            autoComplete='off'
          />
          <Typography
            variant="caption"
            color={lastNameError ? 'error' : 'transparent'}
            sx={{ mt: 0.5 }}
          >
            {lastNameError || ' '}
          </Typography>
        </Box>
      </Grid>



      {/* Mobile number and Email */}
      <Grid item xs={12} sm={6} >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
          sx={{width:'250px'}}
            label="Mobile Number"
            name="mobilenumber"
            value={mobilenumber}
            onChange={handleMobileChange}
            autoComplete='off'
          />
          <Typography
            variant="caption"
            color={mobileError ? 'error' : 'transparent'}
            sx={{ mt: 0.5 }}
          >
            {mobileError || ' '}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <FormControl >
            <InputLabel>Email Address</InputLabel>
            <OutlinedInput
            sx={{width:'250px'}}
              label="Email Address"
              value={email}
              name="email"
              onChange={handleEmailChange}
              autoComplete='off'
            />
          </FormControl>
          <Typography
            variant="caption"
            color={emailError ? 'error' : 'transparent'}
            sx={{ mt: 0.5 }}
          >
            {emailError || ' '}
          </Typography>
        </Box>
      </Grid>

    {/* Password */}
<Grid item xs={12} sm={6}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <FormControl>
      <InputLabel>Password</InputLabel>
      <OutlinedInput
      sx={{width:'250px'}}
        type={showPassword ? 'text' : 'password'}
        value={password}
        name="password"
        onChange={handlePasswordChange}
        label="Password"
        endAdornment={
          <InputAdornment position="end">
            {/* Info icon with tooltip */}
            <Tooltip
              title={
                <Box sx={{ fontSize: '12px', textAlign: 'left' }}>
                  • Minimum 8 characters<br/>
                  • At least 1 uppercase letter<br/>
                  • At least 1 lowercase letter<br/>
                  • At least 1 number<br/>
                  • At least 1 special character
                </Box>
              }
              placement="top"
              arrow
            >
              <IconButton size="small">
                <InfoOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            {/* Show/hide password toggle */}
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
    <Typography
      variant="caption"
      color={passwordError ? 'error' : 'transparent'}
      sx={{ mt: 0.5 }}
    >
      {passwordError || ' '}
    </Typography>
  </Box>
</Grid>
{/* Confirm Password */}
<Grid item xs={12} sm={6}>
  <Box sx={{ display: 'flex', flexDirection: 'column'}}>
    <FormControl>
      <InputLabel>Confirm Password</InputLabel>
      <OutlinedInput
      sx={{width:'250px'}}
        type={showConfirmPassword ? 'text' : 'password'}
        value={confirmPassword}
        name="confirmPassword"
        onChange={handleConfirmPasswordChange}
        label="Confirm Password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              edge="end"
            >
              {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
    <Typography
      variant="caption"
      color={confirmPasswordError ? 'error' : 'transparent'}
      sx={{ mt: 0.5 }}
    >
      {confirmPasswordError || ' '}
    </Typography>
  </Box>
</Grid>




{/* submit */}
<Grid item xs={12} sx={{marginLeft : 'auto',marginRight:'auto'}}>
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',  
      alignItems: 'center',       
      width: '100%',               
    }}
  >
    <AnimateButton>
      <Button
        disableElevation
        size="large"
        type="submit"
        variant="contained"
        color="secondary"
        sx={{ minWidth: 200 }} 
      >
        Sign up
      </Button>
    </AnimateButton>
  </Box>
</Grid>

    </Grid>
  </form>
);
  }
