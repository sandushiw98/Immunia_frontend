import React, { useState } from 'react';
import { Button, Col, Layout, Menu, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Row style={{height:'100vh'}}>
            <Col>
                <Sider
                    width={250}
                    theme="light"
                    collapsible
                    collapsed={collapsed}
                    onCollapse={toggleCollapsed}
                    trigger={null} // Remove the default trigger icon
                >
                    <Row className="hamburger-icon" onClick={toggleCollapsed}>
                        <Col span={18}><Link to='/'><Button type="primary">Home</Button></Link></Col>
                        <Col span={6}><MenuOutlined style={{ fontSize: '30px' }} className='hamburger-btn'/></Col>
                        
                    </Row>
                    <Row>
                        <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']} style={{width:'100%'}}>
                            {/* Add your menu items here */}
                            
                            <Menu.Item key="1"><Link to="/newborn">New Born</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/onemonth">1 - 2 Months</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/fourmonth">4 Months</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/sixmonth">6 Months</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/sevenmonth">7 -11 Months</Link></Menu.Item>
                            <Menu.Item key="6">12 - 23 Months</Menu.Item>
                            <Menu.Item key="7">2 - 3 Years</Menu.Item>
                            <Menu.Item key="8">4 - 6 Years</Menu.Item>
                            <Menu.Item key="9">7 - 10 Years</Menu.Item>
                            <Menu.Item key="10">11 - 12 Years</Menu.Item>
                            <Menu.Item key="11">13 - 18 Years</Menu.Item>
                        </Menu>
                    </Row>
                </Sider>
            </Col>
        </Row>
    );
};

export default Sidebar;
