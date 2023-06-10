import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Row, Col } from "antd";
import './Donations.css';
import { Select, MenuItem, InputLabel } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";  


const defaultTheme = createTheme();

const Donation = () => {

  const [selectedOption, setSelectedOption] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  

  return (
    <>
    <Navbar/>
      <Row className="container">
       <Col span={12} style={{padding:'60px'}}>
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box style={{marginTop:'10px'}}
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                
                <Typography component="h1" variant="h5">
                  Donation
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                      <TextField
                        autoComplete="given-name"
                        name="fullName"
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        autoFocus
                        className="fulltextfield"
                        
                      />
                    </Grid>
                  
                    <Grid item xs={12}>
                      <TextField
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
                        required
                        fullWidth
                        id="Home Address"
                        label="Home Address"
                        name="Home Address"
                        autoComplete="Home Address"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="Amount"
                        label="Amount Rs."
                        name="Amount"
                        autoComplete="Amount"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputLabel id="dropdown-label">Donate For</InputLabel>
                      <Select
                        labelId="dropdown-label"
                        id="dropdown"
                        value={selectedOption}
                        onChange={handleOptionChange}
                        fullWidth
                        
                      >
                        <MenuItem value="option1">Vaccination Centre</MenuItem>
                        <MenuItem value="option2">MOH</MenuItem>
                        
                      </Select>
                    </Grid>

                    <Grid item xs={12} >
                      <TextField
                        required
                        fullWidth
                        name="comment"
                        label="Comment"
                        type="comment"
                        id="comment"
                        autoComplete="Comment"
                        multiline
                        rows={3}
                      />
                    </Grid>
                    
                  </Grid>
                  <Button style={{height:'40px'}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                   Donate 
                  </Button>
                  
                </Box>
              </Box>
             
            </Container>
          </ThemeProvider>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "5%",
            paddingTop: "3%",
          }}
        >
        
        </Col> 
        
      </Row>
      <Footer/>
       
    </>
  );
      
}
export default Donation;
