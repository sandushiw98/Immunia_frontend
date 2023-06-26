import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import logo from "../../assets/images/logonew.png";
const pages = ["Home", "Donations", "About", "Contact Us"];



const settings = ['Profile', 'Logout'];

function DashboardNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#28465c",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "30%", height: "30%" }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

          <Link to = '/'>
            <Button
              sx={{
                my: 2,
                color: "#28465c",
                display: "block",
                fontWeight: "bold",
                mx: 3,
              }}
            >
              Dashboard
            </Button>
            </Link>

            <Link to = '../../viewCenter'>
            <Button
              sx={{
                my: 2,
                color: "#28465c",
                display: "block",
                fontWeight: "bold",
                mx: 3,
              }}
            >
              Centers
            </Button>
            </Link>

           <Link to = '../../viewParent'>
            <Button
              sx={{
                my: 2,
                color: "#28465c",
                display: "block",
                fontWeight: "bold",
                mx: 3,
              }}
            >
              Parents 
            </Button>
            </Link>

            <Button
              sx={{
                my: 2,
                color: "#28465c",
                display: "block",
                fontWeight: "bold",
                mx: 3,
              }}
            >
              Notifications
            </Button>

            <Link to = '../../Appointments'>
            <Button
              sx={{
                my: 2,
                color: "#28465c",
                display: "block",
                fontWeight: "bold",
                mx: 3,
              }}
            >
              Appointments
            </Button>
            </Link>

            <Link to = '../../Reviews'>
            <Button
              sx={{
                my: 2,
                color: "#28465c",
                display: "block",
                fontWeight: "bold",
                mx: 3,
              }}
            >
              Reports
            </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", gap: "10px" }} >
            
          <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jp" />
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default DashboardNavbar;


