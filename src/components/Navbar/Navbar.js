import { Avatar, Button, Col, Dropdown, Row } from "antd";
import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logonew.png";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { UserOutlined } from "@ant-design/icons";
import { signOutUser } from "../../services/auth";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const user = useUser();
  const items = [
    {
      key: "11",
      label: <Link to="/adminprofile">My Profile</Link>,
    },
    {
      key: "222",
      label: (
        <Link
          onClick={() => {
            signOutUser();
          }}
          to="/"
        >
          Logout
        </Link>
      ),
    },
  ];
  return (
    <div className="navbar-container">
      <Row gutter={8} className="main-row">
        <Col span={4} className="nav-section">
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: "60%" }} />
          </Link>
        </Col>
        <Col span={2} className="nav-section">
          <Button onClick={() => scrollToSection("home")}>HOME</Button>
        </Col>
        <Col span={2} className="nav-section">
          <Button onClick={() => scrollToSection("about")}>ABOUT</Button>
        </Col>
        <Col span={2} className="nav-section">
          <Button onClick={() => scrollToSection("service")}>SERVICES</Button>
        </Col>
        <Col span={2} className="nav-section">
          <Button onClick={() => scrollToSection("donate")}>DONATIONS</Button>
        </Col>
        <Col span={2} className="nav-section">
          <Button onClick={() => scrollToSection("contact")}>CONTACT US</Button>
        </Col>
        {/* {!user ? (
          <>
            <Col span={8} className="nav-section-name">
              <Link className="login-btn" to="/login" underline="none">
                Login
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
              </Link>
            </Col>
            <Col span={2} className="nav-section-name">
              <Link className="login-btn" to="/signup" underline="none">
                Signup
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
              </Link>
            </Col>
          </>
          
        ) : (
          <Col span={9} className="nav-section-name">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
            >
              <Avatar
                size={48}
                icon={<UserOutlined />}
                className="center-avatar"
              />
            </Dropdown>
          </Col>
        )} */}
        <>
            <Col span={8} className="nav-section-name">
              <Link className="login-btn" to="/login" underline="none">
                Login
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
              </Link>
            </Col>
            <Col span={2} className="nav-section-name">
              <Link className="login-btn" to="/signup" underline="none">
                Signup
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
              </Link>
            </Col>
          </>
      </Row>
    </div>
  );
};

export default Navbar;
