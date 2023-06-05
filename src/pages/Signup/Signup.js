import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Copyright } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Row, Col } from 'antd';
import signup from '../../assets/images/signup.jpg';

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function validateContactNumber(mobile) {
  return /^[0-9]{10}$/.test(mobile); // Validates if the contact number is a 10-digit number
}

function validateNIC(nic) {
  return /^[0-9]{9}[Vv]$/.test(nic); // Validates if the NIC number is a 9-digit number followed by 'V' or 'v'
}

const defaultTheme = createTheme();

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errors, setErrors] = useState({});

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Validate inputs
    const email = data.get('email');
    const password = data.get('password');
    const confirmPassword = data.get('confirmpassword');
    const mobile = data.get('mobile');
    const nic = data.get('nic');
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
      newErrors.confirmpassword = 'Passwords do not match';
    }

    if (!validateContactNumber(mobile)) {
      newErrors.mobile = 'Invalid contact number';
    }

    if (!validateNIC(nic)) {
      newErrors.nic = 'Invalid NIC number';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log({
        email,
        password,
        mobile,
        nic,
      });
      setPasswordMatch(true);
    } else {
      setErrors(newErrors);
      setPasswordMatch(false);
    }
  };

  return (
    <>
      <Row>
        <Col span={12}>
          <Row>
            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography component="h1" variant="h5">
                    <h2>Signup</h2>
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          error={!!errors.email}
                          helperText={errors.email}
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          error={!!errors.mobile}
                          helperText={errors.mobile}
                          required
                          fullWidth
                          id="mobile"
                          label="Contact Number"
                          name="mobile"
                          autoComplete="mobileContact-Number"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                        error={!!errors.mobile}
                        helperText={errors.mobile}
                          required
                          fullWidth
                          id="emergency"
                          label="Emergency Contact Number"
                          name="emergency"
                          autoComplete="Emergency-Contact-Number"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="address"
                          label="Home Address"
                          name="address"
                          autoComplete="Home-Address"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          error={!!errors.nic}
                          helperText={errors.nic}
                          required
                          fullWidth
                          name="nic"
                          label="NIC Number"
                          type="nic"
                          id="nic"
                          autoComplete="NIC-Number"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="password"
                          name="password"
                          required
                          fullWidth
                          id="password"
                          label="Password"
                          type={showPassword ? 'text' : 'password'}
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={handleTogglePassword}
                                edge="end"
                                aria-label="toggle password visibility"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            ),
                          }}
                          error={!!errors.password}
                          helperText={errors.password}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="confirmpassword"
                          label="Confirm Password"
                          name="confirmpassword"
                          type={showPassword ? 'text' : 'password'}
                          error={!passwordMatch || !!errors.confirmpassword}
                          helperText={!passwordMatch ? 'Passwords do not match' : errors.confirmpassword}
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={handleTogglePassword}
                                edge="end"
                                aria-label="toggle password visibility"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox value="allowExtraEmails" color="primary" />}
                          label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link to="/login" variant="body2" style={{ textDecoration: 'none' }}>
                          Already have an account? Login
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
              </Container>
            </ThemeProvider>
          </Row>
        </Col>
        <Col span={12} style={{ paddingTop: '120px' }}>
          <img src={signup} alt="login" style={{ width: '80%', height: '80%' }} />
        </Col>
      </Row>
    </>
  );
}
