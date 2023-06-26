import { Button, Col, Row } from 'antd';
import React from 'react';
import './Navbar.css';
import logo from "../../assets/images/logonew.png";
import { Link } from 'react-router-dom';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
};

const AdminNavbar = () => {

  return (
    <div className="navbar-container">
      <Row gutter={8} className="main-row">
        <Col span={4} className='nav-section'>
          <Link to='/'>
            <img
              src={logo}
              alt="logo"
              style={{ width: "60%", }}
            />
          </Link>
        </Col>
        <Col span={2} className='nav-section'>

            <Button
              onClick={() => scrollToSection('home')}
            >
              HOME
            </Button>

        </Col>
        <Col span={2} className='nav-section'>

            <Button
              onClick={() => scrollToSection('about')}
            >
              ABOUT
            </Button>

        </Col>
        <Col span={2} className='nav-section'>

            <Button
              onClick={() => scrollToSection('service')}
            >
              SERVICES
            </Button>

        </Col>
        <Col span={2} className='nav-section'>
          <Button
            onClick={() => scrollToSection('donate')}
          >
            DONATIONS
          </Button>
        </Col>
        <Col span={2} className='nav-section'>
          <Button
            onClick={() => scrollToSection('contact')}
          >
            CONTACT US
          </Button>
        </Col>
        <Col span={8} className='nav-section-name'>
          <Link className='login-btn' to="/login" underline="none">
            Login
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </Link>

        </Col>
        <Col span={2} className='nav-section-name'>
          <Link className='login-btn' to="/signup" underline="none">
            Signup
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </Link>

        </Col>
      </Row>
    </div>
  );
};

export default AdminNavbar;