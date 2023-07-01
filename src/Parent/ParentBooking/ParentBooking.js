import React from "react";
import "./ParentBooking.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import { Avatar, Col, Dropdown, Row, Card } from "antd";
import image1 from "../../assets/images/bookong.webp";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { useState } from "react";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const ParentBooking = () => {
  return (
    <>
      <Row>
        <ParentNavbar />
      </Row>

      <Row style={{ paddingTop: "100px" }}>
        <Col span={12} >
          <img
            src={image1}
            alt="Vaccination Center"
            style={{ width: "100%", height: "100%",position: 'fix' }}
          />
        </Col>

        <Col span={12}>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <p style={{ fontSize: "15px" }}>
              Hi lakshmi ! Let's make an appointment with Lady Ridgway Hospital,
              Colombo 8{" "}
            </p>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <h1 style={{ fontSize: "30px" }}>Schedule Appointment </h1>
          </Row>

          <div style={{ padding: "20px 160px 10px 40px" }}>
            <Form.Item label="Parent Full Name">
              <Input />
            </Form.Item>
            
            <Form.Item
              label="Child Full Name"
              style={{ marginRight: '130px'}}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Vaccination Card No"  >
              <Input />
            </Form.Item>
            <Form.Item label="Vaccination Type">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Vaccination Center">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Appointment Date">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Select Time Slot">
              <br />
              <br />
              <Radio.Group>
                <Radio value="apple"> Hall No: 1 </Radio>
                <Radio value="pear"> Hall No: 2 </Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <Card title="Avialable Time Slots" style={{textAlign: 'center'}}>
  <Row >
    <Col span={4} >
      <Card.Grid style={{width: '100%',height: '100%'}}>9.00 A.M - 9.15 A.M</Card.Grid>
    </Col>
    <Col span={4}>
    <Card.Grid style={{width: '100%',height: '100%'}}>9.15 A.M - 9.30 A.M</Card.Grid>
    </Col>
    <Col span={4}>
    <Card.Grid style={{width: '100%',height: '100%'}}>9.30 A.M - 9.45 A.M</Card.Grid>
    </Col>
    <Col span={4}>
    <Card.Grid style={{width: '100%',height: '100%'}}>9.45 A.M - 10.00 A.M</Card.Grid>
    </Col>
    <Col span={4}>
    <Card.Grid style={{width: '100%',height: '100%'}}>10.00 A.M -10.15 A.M</Card.Grid>
    </Col>
    <Col span={4}>
    <Card.Grid style={{width: '100%',height: '100%'}}>10.15 A.M -10.30 A.M</Card.Grid>
    </Col>
  </Row>
  <Row >
    <Col span={4} >
      <Card.Grid style={{width: '100%',height: '100%'}}>10.30 A.M -10.45 A.M</Card.Grid>
    </Col>
    <Col span={4}>
    <Card.Grid style={{width: '100%',height: '100%'}}>10.45 A.M -11.00 A.M</Card.Grid>
    </Col>
    <Col span={4}>
    <Card.Grid style={{width: '100%',height: '100%'}}>11.00 A.M -11.15 A.M</Card.Grid>
    </Col>
    <Col span={4}>
    <Card.Grid style={{width: '100%',height: '100%'}}>11.15 A.M -11.30 A.M</Card.Grid>
    </Col>
    <Col span={4}>
    <Card.Grid style={{width: '100%',height: '100%'}}>11.45 A.M -12.00</Card.Grid>
    </Col>
    <Col span={4}>
    <Card.Grid style={{width: '100%',height: '100%'}}>Content</Card.Grid>
    </Col>
  </Row>
  
  
  
  
</Card>

        </Col>
      </Row>
    </>
  );
};

export default ParentBooking;
