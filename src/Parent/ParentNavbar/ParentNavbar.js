import { Avatar, Button, Col, Dropdown, Row } from 'antd';
import React from 'react';
import './ParentNavbar.css';
import logo from "../../assets/images/logonew.png";
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const ParentNavbar = () => {

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
                <Link to='/ParentDashboard'>
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
                <Link to='../../ParentRecordCard'>
                    <Button>
                        CHILDREN
                    </Button>
                </Link>
            </Col>
            <Col span={2} className='nav-section'>
            <Link to='../../ParentCenter'>
                <Button>
                  CENTERS
                </Button>
                </Link>
            </Col>
            
            <Col span={2} className='nav-section'>
                <Button>
                    NOTIFICATIONS
                </Button>
            </Col>
           
            {/* <Col span={2} className='nav-section'>
                <Button>
                    RECORDS
                </Button>
            </Col> */}
           
            <Col span={9} className='nav-section-name'>
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
                    <Avatar size={48} icon={<UserOutlined />} className='center-avatar'/>
                </Dropdown>
            </Col>
        </Row>
        </div>
    );
};

export default ParentNavbar;