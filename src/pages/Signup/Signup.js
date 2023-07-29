import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Copyright } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Row, Col } from "antd";
import signup from "../../assets/images/signup.jpg";
import "./Signup.css";
import { signUpParent } from "../../services/auth";

function validateFirstName(firstName) {
  const minLength = 2;
  const lettersOnlyRegex = /^[A-Za-z']+$/;
  if (firstName.length < minLength) {
    return false;
  }
  if (!lettersOnlyRegex.test(firstName)) {
    return false;
  }
  return true;
}

function validateLastName(lastName) {
  const minLength = 2;
  const lettersOnlyRegex = /^[A-Za-z']+$/;
  if (lastName.length < minLength) {
    return false;
  }
  if (!lettersOnlyRegex.test(lastName)) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password) {
  // Check if password length is more than 8 characters
  if (password.length < 8) {
    return false;
  }

  // Check if there is at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check if there is at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check if there is at least one number
  if (!/\d/.test(password)) {
    return false;
  }

  // Check if there is at least one special character
  if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(password)) {
    return false;
  }

  return true;
}


function validateContactNumber(mobile) {
  return /^[0-9]{10}$/.test(mobile); // Validates if the contact number is a 10-digit number
}

function validateEmergencyNumber(emergency) {
  return /^[0-9]{10}$/.test(emergency); // Validates if the contact number is a 10-digit number
}

function validateNIC(nic) {
  return true; // Validates if the NIC number is a 9-digit number followed by 'V' or 'v'
}

const defaultTheme = createTheme();

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Validate inputs
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirmpassword"); // Updated to "confirmpassword" to match the input field name
    const mobile = data.get("mobile");
    const emergency = data.get("emergency");
    const nic = data.get("nic");
    const address = data.get("address");

    const newErrors = {};
    if (!validateFirstName(firstName)) {
      newErrors.firstName = "Invalid First Name";
    }

    if (!validateLastName(lastName)) {
      newErrors.lastName = "Invalid Last Name";
    }

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!validatePassword(password)) {
      newErrors.password = "Invalid Password";
    }
    

    if (password !== confirmPassword) {
      newErrors.confirmpassword = "Passwords do not match";
    }

    if (!validateContactNumber(mobile)) {
      newErrors.mobile = "Invalid contact number";
    }

    if (!validateEmergencyNumber(emergency)) {
      newErrors.emergency = "Invalid contact number";
    }

    if (!validateNIC(nic)) {
      newErrors.nic = "Invalid NIC number";
    }

    if (!address) {
      newErrors.address = "Address is required";
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
    const res = await signUpParent({
      password: password.valueOf(),
      email: email.valueOf(),
      contactNumber: mobile.valueOf(),
      firstName: firstName.valueOf(),
      lastName: lastName.valueOf(),
      address: address.valueOf(),
      nicnumber: nic.valueOf(),
      emergencyContactNumber: emergency.valueOf(),
    });
    // if (res) {
    //   navigate("/login");
    // }
    console.log(res);
  };

  return (
    <>
      <Row>
        <Link className="back-btn" to="/" underline="none">
          <button className="backbtn">Back to Home </button>
        </Link>
      </Row>
      <Row>
        <Col span={12}>
          <Row>
            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h5">
                    <h2>Signup</h2>
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          error={!!errors.firstName}
                          helperText={errors.firstName}
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
                          error={!!errors.lastName}
                          helperText={errors.lastName}
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
                          error={!!errors.address}
                          helperText={errors.address}
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
                          type={showPassword ? "text" : "password"}
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={handleTogglePassword}
                                edge="end"
                                aria-label="toggle password visibility"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
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
                          type={showPassword ? "text" : "password"}
                          error={!!errors.confirmpassword}
                          helperText={errors.confirmpassword}
                          // error={!passwordMatch || !!errors.confirmpassword}
                          // helperText={
                          //   !passwordMatch
                          //     ? "Passwords do not match"
                          //     : errors.confirmpassword
                          // }

                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={handleTogglePassword}
                                edge="end"
                                aria-label="toggle password visibility"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            ),
                          }}
                        />
                         <Typography variant="body2" color="textSecondary">
    Password should contain more than 8 characters with lowercase , uppercasses and special characters.
  </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="allowExtraEmails"
                              color="primary"
                            />
                          }
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
                        <Link
                          to="/login"
                          variant="body2"
                          style={{ textDecoration: "none" }}
                        >
                          Already have an account? Login
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </Row>
        </Col>
        <Col span={12} style={{ paddingTop: "120px" }}>
          <img
            src={signup}
            alt="signup"
            style={{ width: "80%", height: "80%", marginTop: "70px" }}
          />
        </Col>
      </Row>
    </>
  );
}
