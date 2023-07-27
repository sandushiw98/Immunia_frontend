import { Avatar, Button, Col, Dropdown, Row } from 'antd';
import React from 'react';
import './VaccinationNavbar.css';
import logo from "../../assets/images/logonew.png";
import { Link } from 'react-router-dom';
import { AlignCenterOutlined, UserOutlined } from '@ant-design/icons';
import { signOutUser } from '../../services/auth';

const VaccinationNavbar = () => {

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
        <div className="navbar-container" style={{height: '100px'}}>
            <Row gutter={8} className="main-row">
                <Col span={3} className='nav-section'>
                    <Link to='/'>
                        <img
                            src={logo}
                            alt="logo"
                            style={{ width: "60%" }}
                        />
                    </Link>
                </Col>
                <Col span={2} className='nav-section'>
                    <Link to='/VaccinationDashboard'>
                        <Button className='center-button'>
                            DASHBOARD
                        </Button>
                    </Link>
                </Col>
                <Col span={2} className='nav-section'>
                    <Link to='../VaccinationAppointments'>
                        <Button className='center-button'>
                            APPOINTMENTS
                        </Button>
                    </Link>
                </Col>
                <Col span={2} className='nav-section'>
                    <Link to='/vaccinationupdate'>
                        <Button className='center-button'>
                            CHILDREN
                        </Button>
                    </Link>
                </Col>
                <Col span={2} className='nav-section'>
               
                <Link to='/vaccinationvaccines'>
                    <Button className='center-button'>
                        VACCINES
                    </Button>
                    </Link>
                </Col>
                <Col span={2} className='nav-section'>
                    <Link to='../VaccinationDonation'>
                        <Button className='center-button'>
                            DONATIONS
                        </Button>
                    </Link>
                </Col>
                
                <Col span={10} className='nav-section-name'>
                    <Link to='/adminprofile'>
                        <span style={{ fontWeight: '500', fontSize: '16px', color: 'black' }}>Sandushi Weraduwa</span>
                    </Link>
                </Col>
                <Col span={1} className='nav-section-img'>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomRight"
                    >
                        <Avatar size={48} icon={<UserOutlined />} className='center-avatar' />
                    </Dropdown>
                </Col>
            </Row>
        </div>
    );
};

export default VaccinationNavbar;
