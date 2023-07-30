import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Row, Col } from "antd";
import login1 from "../../assets/images/login.jpg";
import { IconButton } from "@mui/material";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import "./Login.css";
import { signInUser } from "../../services/auth";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect } from "react";

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const context = useAuthContext();
  const [showPassword, setShowPassword] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password should have at least 8 characters, one uppercase, one lowercase, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin2 = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // Validate email and password
    // if (!validateEmail(userData.email)) {
    //   setEmailError("Invalid email address");
    //   return;
    // } else {
    //   setEmailError("");
    // }

    // if (!validatePassword(userData.password)) {
    //   setPasswordError("Password must have at least 8 characters, one uppercase, one lowercase, and one special character");
    //   return;
    // } else {
    //   setPasswordError("");
    // }

    console.log(userData);
    const res = await signInUser(userData);
    if (!res || !res.user) {
      return;
    }
    context.setUser(res.user);
    if (res.user.userRole === "parent") {
      navigate("/parentDashboard");
    } else if (res.user.userRole === "vaccine_center") {
      navigate("/vaccinationdashboard");
    } else if (res.user.userRole === "Admin") {
      navigate("/adminDashboard");
    }

    console.log(res.user);
  };

  return (
    <>
      <Row>
        <Link className="back-btn" to="/" underline="none">
          <button className="backbtn">Back to Home </button>
        </Link>
      </Row>
      <Row>
        <Col
          span={10}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "5%",
            paddingTop: "3%",
          }}
        >
          <img
            src={login1}
            alt="login"
            style={{ width: "100%", height: "90%", marginTop: "100px" }}
          />
        </Col>
        <Col
          span={14}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  <h2>Login</h2>
                </Typography>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 1 }}
                  onSubmit={handleLogin2}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={!!emailError}
                    helperText={emailError}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
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
                    error={!!passwordError}
                    helperText={passwordError}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    // onClick={() => handleLogin(email, password)}
                  >
                    Login
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link
                        href="#"
                        variant="body2"
                        style={{ textDecoration: "none" }}
                      >
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link
                        to="/signup"
                        variant="body2"
                        style={{ textDecoration: "none" }}
                      >
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
          </ThemeProvider>
        </Col>
      </Row>
    </>
  );
}
