import React from "react";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import { Avatar, Button, Card, Col, Row, Space, Modal, Input, Badge } from "antd";
import { UserOutlined } from '@ant-design/icons';

const ParentNotification = () => {
    const CustomTitle1 = () => (
        <div style={{ height: '50px',display: 'flex', alignItems: 'center' }}>
          <Badge dot>
            <Avatar shape="square" icon={<UserOutlined />}  style={{display: 'flex', alignItems: 'center' , justifyContent: 'center'}}/>
          </Badge>
          <span style={{ marginLeft: 8 }}>Lady Ridgway Hospital</span>
        </div>
      );
      const CustomTitle2 = () => (
        <div style={{ height: '50px',display: 'flex', alignItems: 'center' }}>
          <Badge dot>
            <Avatar shape="square" icon={<UserOutlined />}  style={{display: 'flex', alignItems: 'center' , justifyContent: 'center'}}/>
          </Badge>
          <span style={{ marginLeft: 8 }}>Colombo national Hospital</span>
        </div>
      );
  return (
    <>
      <ParentNavbar />
      <Row style={{ padding: "110px 0px 30px 30px" }}>
        <h2>NOTIFICATIONS</h2>
      </Row>
      <Row>
        <Card title="Reminders" style={{width: '100%'}}>
          <Card
            type="inner"
            title={<CustomTitle1   />}
            extra={<p>2/10/23- Wednesday</p>}
           
          >
            <Space>Your upcomming appoinment details:</Space><br/>
            <Space>Child's Name : Amani Wirathma Wimalaweera</Space><br/>
            <Space> Date : 3rd October 2023</Space><br/>
            <Space>Time : 10.30 A.</Space>

          </Card>
          <Card
            style={{
              marginTop: 16,
            }}
            type="inner"
            title={<CustomTitle2   />}
            extra={<p>1/10/23- Tuesday</p>}
          >
            <Space>Your upcomming appoinment details:</Space><br/>
            <Space>Child's Name : Hansika Wirathma Wimalaweera</Space><br/>
            <Space> Date : 2nd October 2023</Space><br/>
            <Space>Time : 1.30 A.</Space>
          </Card>
        </Card>
      </Row>
    </>
  );
};

export default ParentNotification;
