
import React from 'react'
import {Button, Table,Row, Col,Space,Card,Avatar, Input} from "antd";
import { useState } from "react";
import { Link } from 'react-router-dom';
import "./ChildProfile.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import image1 from "../../assets/images/childprofile3.jpg";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ChildProfile = () => {
  return (
    <>
    <ParentNavbar/>
    <Row>
        <Col span={8} style={{paddingTop: '150px', paddingLeft: '150px'}}>
        <Card
    style={{
      width: 400,
    }}
    cover={
      <img
        alt="example"
        src={image1}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Amani Wirathma Wimalaweera "
    //   description="Age  : 1 year"
      
    />
      
  </Card>
        </Col>
        <Col span = {16}></Col>
        
    </Row>
      
    </>
  )
}

export default ChildProfile


