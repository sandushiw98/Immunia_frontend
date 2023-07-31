import { Avatar, Button, Col, Dropdown, Row } from "antd";
import React from "react";
import "./ParentNavbar.css";
import logo from "../../assets/images/logonew.png";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";
import { getChildrenByParentId } from "../../services/child";
import useParent from "../../hooks/useParent";
import { signOutUser } from "../../services/auth";

const ParentNavbar = () => {
  const user = useUser();
  const [children] = useParent();
  //   const items = [
  //     {
  //       key: "1",
  //       label: <Link to="/adminprofile">My Profile</Link>,
  //     },
  //     {
  //       key: "2",
  //       label: <Link to="/">Logout</Link>,
  //     },
  //   ];

  const items1 = [
    
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

  const items = children.map((child, ind) => {
    return {
      key: ind,
      label: (
        <Link to={`/ParentRecordCard/${child.childId}`}>{child.firstName}</Link>
      ),
    };
  });

  return (
    <div className="navbar-container">
      <Row gutter={8} className="main-row">
        <Col span={4} className="nav-section">
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: "60%" }} />
          </Link>
        </Col>
        <Col span={2} className="nav-section">
          <Link to="/ParentDashboard">
            <Button>DASHBOARD</Button>
          </Link>
        </Col>
        <Col span={2} className="nav-section">
          <Link to="../../ParentAppointment">
            <Button>APPOINMENTS</Button>
          </Link>
        </Col>
        <Col span={2} className="nav-section">
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
          >
            <Button>CHILDREN</Button>
          </Dropdown>
          {/* <Link to='../../ParentRecordCard'>
                    <Button>
                        CHILDREN
                    </Button>
                </Link> */}
        </Col>
        <Col span={2} className="nav-section">
          <Link to="../../ParentCenter">
            <Button>CENTERS</Button>
          </Link>
        </Col>

        <Col span={2} className="nav-section">
          <Button>NOTIFICATIONS</Button>
        </Col>

      

        <Col span={9} className="nav-section-name">
          
          {user && `${user.firstName} ${user.lastName}`}
           
        </Col>
        <Col span={1} className="nav-section-img">
          <Dropdown menu={{ items: items1 }} placement="bottomRight">
            <Avatar
              size={48}
              icon={<UserOutlined />}
              className="center-avatar"
            />
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

export default ParentNavbar;
