import { Avatar, Button, Col, Dropdown, Row } from 'antd';
import React from 'react';
import './VaccinationNavbar.css';
import logo from "../../assets/images/logonew.png";
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const VaccinationNavbar = () => {

    const items = [
        {
            key: '1',
            label: (
                <Link to='/adminprofile'>
                    My Profile
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to='/'>
                    Logout
                </Link>
            ),
        },
    ];

    return (
        <div className="navbar-container">
        <Row gutter={8} className="main-row">
            <Col span={3} className='nav-section'>
                <Link to='/'>
                <img
                    src={logo}
                    alt="logo"
                    style={{ width: "60%", }}
                />
                </Link>
            </Col>
            <Col span={2} className='nav-section'>
                <Link to='/adminDashboard'>
                    <Button>
                        DASHBOARD
                    </Button>
                </Link>
            </Col>
            <Col span={2} className='nav-section'>
                <Link to='../../ParentAppointment'>
                    <Button>
                        APPOINMENTS
                    </Button>
                </Link>
            </Col>
            <Col span={2} className='nav-section'>
                <Link to='../../ParentChildAccount'>
                    <Button>
                        CHILDREN
                    </Button>
                </Link>
            </Col>
            <Col span={2} className='nav-section'>
                <Button>
                  VACCINES
                </Button>
            </Col>
            
            <Col span={2} className='nav-section'>
                <Button>
                    DONATIONS
                </Button>
            </Col>

            <Col span={2} className='nav-section'>
                <Button>
                    NOTIFICATIONS
                </Button>
            </Col>
           
          
           
            <Col span={8} className='nav-section-name'>
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
                    <Avatar size={48} icon={<UserOutlined />} />
                </Dropdown>
            </Col>
        </Row>
        </div>
    );
};

export default VaccinationNavbar;