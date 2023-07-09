import { CalendarOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Space } from 'antd';
import React from 'react';
import './ParentDashboard.css';
import ParentNavbar from '../ParentNavbar/ParentNavbar';
import image13 from "../../assets/images/donation.jpg";


const ParentDashboard = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <Row>
                        <ParentNavbar />
                    </Row>
                    <Row style={{ paddingTop: '100px', paddingRight: '20px' }}>
                        <Col span={8}>
                            <Row>
                                <Col className='card-container-parent'>
                                    <Card
                                        className='parent-card'
                                        bordered={false}
                                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Space>
                                                <TeamOutlined style={{ fontSize: '20px', color: 'yellowgreen' }} />
                                                <span style={{ fontSize: '20px', fontWeight: 'bolder', color: 'yellowgreen' }}>Number of Children</span>
                                            </Space>
                                        </div>
                                        <Col span={24} style={{ textAlign: 'right', fontWeight: 'bolder' }}>
                                            <span style={{ fontSize: '35px', color: 'yellowgreen' }}>2</span>
                                        </Col>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='card-container-parent'>
                                    <Card
                                        className='parent-card'
                                        bordered={false}
                                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Space>
                                                <TeamOutlined style={{ fontSize: '20px', color: 'yellowgreen' }} />
                                                <span style={{ fontSize: '20px', fontWeight: 'bolder', color: 'yellowgreen' }}>Upcoming Appointments</span>
                                            </Space>
                                        </div>
                                        <Col span={24} style={{ textAlign: 'right', fontWeight: 'bolder' }}>
                                            <span style={{ fontSize: '35px', color: 'yellowgreen' }}>2</span>
                                        </Col>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={16} className='card-container-parent1'>
                            <Card
                                className='parent-card-appoinments'
                                title="Upcoming Appointments"
                                extra={<Button type="primary">+ Create Appointment</Button>}
                                bordered={false}
                                style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
                            >
                                <Row>
                                    <Col span={24} style={{ padding: '3px 0px' }}>
                                        <Card
                                            bordered={true}
                                        >
                                            <Row style={{ textAlign: 'center', fontWeight: 'bold', color: 'orangered' }}>
                                                <Col span={2}>
                                                    <CalendarOutlined />
                                                </Col>
                                                <Col span={4}>
                                                    <span>2023-08-08</span>
                                                </Col>
                                                <Col span={4}>
                                                    <span>10.00 - 10.20</span>
                                                </Col>
                                                <Col span={7}>
                                                    <span>Sandushi Weraduwa</span>
                                                </Col>
                                                <Col span={7}>
                                                    <span>Lady Ridgeway</span>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24} style={{ padding: '3px 0px' }}>
                                        <Card
                                            bordered={true}
                                        >
                                            <Row style={{ textAlign: 'center', fontWeight: 'bold', color: 'orangered' }}>
                                                <Col span={2}>
                                                    <CalendarOutlined />
                                                </Col>
                                                <Col span={4}>
                                                    <span>2023-08-08</span>
                                                </Col>
                                                <Col span={4}>
                                                    <span>10.00 - 10.20</span>
                                                </Col>
                                                <Col span={7}>
                                                    <span>Sandushi Weraduwa</span>
                                                </Col>
                                                <Col span={7}>
                                                    <span>Lady Ridgeway</span>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24} style={{ padding: '3px 0px' }}>
                                        <Card
                                            bordered={true}
                                        >
                                            <Row style={{ textAlign: 'center', fontWeight: 'bold', color: 'orangered' }}>
                                                <Col span={2}>
                                                    <CalendarOutlined />
                                                </Col>
                                                <Col span={4}>
                                                    <span>2023-08-08</span>
                                                </Col>
                                                <Col span={4}>
                                                    <span>10.00 - 10.20</span>
                                                </Col>
                                                <Col span={7}>
                                                    <span>Sandushi Weraduwa</span>
                                                </Col>
                                                <Col span={7}>
                                                    <span>Lady Ridgeway</span>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '40px' }}>
                        <Col span={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Card
                                className='parent-children'
                                title="Children"
                                extra={<Button type="primary">+ Create Child Account</Button>}
                                bordered={false}
                                style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
                            >
                                <Row>
                                    <Col span={24} style={{ padding: '3px 0px' }}>
                                        <Card
                                            bordered={true}
                                        >
                                            <Row style={{ textAlign: 'center', fontWeight: 'bold', color: 'rgb(153, 153, 235)' }}>
                                                <Col span={2}>
                                                    <Avatar
                                                        icon={<UserOutlined />}
                                                    />
                                                </Col>

                                                <Col span={16}>
                                                    <span>Sandushi Weraduwa</span>
                                                </Col>
                                                <Col span={6}>
                                                    <span>2021-05-13</span>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24} style={{ padding: '3px 0px' }}>
                                        <Card
                                            bordered={true}
                                        >
                                            <Row style={{ textAlign: 'center', fontWeight: 'bold', color: 'rgb(153, 153, 235)' }}>
                                                <Col span={2}>
                                                    <Avatar
                                                        icon={<UserOutlined />}
                                                    />
                                                </Col>

                                                <Col span={16}>
                                                    <span>Sandushi Weraduwa</span>
                                                </Col>
                                                <Col span={6}>
                                                    <span>2022-02-13</span>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={16} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight:'30px' }}>
                            <Row style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'}}>
                                <Col span={10} style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'20px 0px'}}>
                                    <img
                                        src={image13}
                                        alt="image13"
                                        style={{ width: "80%", height: "90%", borderRadius:'10px' }}
                                    />
                                </Col>
                                <Col span={14} style={{padding:'20px 0px'}}>
                                    <Row>
                                        <Col span={24} style={{textAlign:'center', fontWeight: 'bolder', fontSize: '25px', color: 'red', paddingTop:'20px' }}>
                                            <span>Help us to ensure that more people can benefit from vaccines, no matter where they live or their economic status.</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24} style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '30px', paddingTop: '25px' }}>
                                            <span>How you can help?</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24} style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '30px', paddingTop: '25px' }}>
                                        <Button type="primary">Donate Now</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Col>
            </Row >
        </>
    );
};

export default ParentDashboard;