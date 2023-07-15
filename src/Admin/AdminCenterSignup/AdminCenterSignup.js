import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { Col, Row } from "antd";
import React from "react";
import image1 from "../../assets/images/cartoon1.jpg";
import image2 from "../../assets/images/cartoon2.jpg";
import image3 from "../../assets/images/10_Vaccine.jpg"
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  message,
  Upload,
} from "antd";
import "./AdminCentersignup.css";
import { useState } from 'react';


const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const AdminCenterSignup = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      <Row>
        <AdminNavbar />
      </Row>
      <Row>
        <Col span={5} style={{ paddingTop: "180px", paddingBottom:'20px',paddingLeft:'40px' }}>
          <img
            src={image1}
            alt="girl"
            style={{ width: "60%", height: "70%", position: "fix" }}
          />
        </Col>
        <Col span={14} style={{ paddingTop: "90px", textAlign: "center"  }}>
          <h1> Vaccination Center SignUp </h1>
          <Form
            layout="horizontal"
            disabled={componentDisabled}
            labelAlign="right"
            style={{border: '1px solid black' ,padding: '30px', borderRadius: '0.7px'}}
          
          >
        
            <Form.Item label="Upload Child Photo" labelAlign="right" labelCol={{ span: 9 }} wrapperCol={{ span: 17 }}>
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div>
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item label="Vaccination Center Name" labelAlign="right" labelCol={{ span: 9 }} wrapperCol={{ span: 17 }}>
              <Input />
            </Form.Item>
            <Form.Item label="Vaccination Center ID Number" labelAlign="right" labelCol={{ span: 9 }} wrapperCol={{ span: 17 }}>
              <Input />
            </Form.Item>
            <Form.Item label="Province" labelAlign="right" labelCol={{ span: 9 }} wrapperCol={{ span: 17 }}>
              <Select>
                <Select.Option value="demo">Central</Select.Option>
                <Select.Option value="demo">North Central</Select.Option>
                <Select.Option value="demo">Nothern</Select.Option>
                <Select.Option value="demo">Eastern</Select.Option>
                <Select.Option value="demo">North Western</Select.Option>
                <Select.Option value="demo">Southern</Select.Option>
                <Select.Option value="demo">Uva</Select.Option>
                <Select.Option value="demo">Sabaragamuwa</Select.Option>
                <Select.Option value="demo">Western</Select.Option>
              </Select>
              
            </Form.Item>
            <Form.Item label="Vaccination Center Type" labelAlign="right" labelCol={{ span: 9 }} wrapperCol={{ span: 17 }}>
              <Radio.Group>
                <Radio value="apple"> Hospital </Radio>
                <Radio value="pear"> MOH </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Contact Number" labelAlign="right" labelCol={{ span: 9 }} wrapperCol={{ span: 17 }}>
              <Input />
            </Form.Item>
            <Form.Item label="Comments" labelAlign="right" labelCol={{ span: 9 }} wrapperCol={{ span: 17 }}>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Upload Birth Certificate of your Child" labelAlign="right" labelCol={{ span: 9 }} wrapperCol={{ span: 17 }}>
              <Upload {...props} action="/upload.do" >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Form>




          <Row className="lastbtn" gutter={48} style={{paddingTop: '20px'}}>
            <Col span={18}></Col>
            <Col span={3} style={{display:'flex', alignItems:'right', justifyContent:'right'}}>
                <Button size="large" style={{backgroundColor:'rgb(238, 53, 53)', color:'white', fontWeight:'bold'}}>
                  Cancel
                </Button>
            </Col>
            <Col span={3} style={{display:'flex', alignItems:'right', justifyContent:'right'}}>
                <Button size="large" style={{backgroundColor:'rgb(105, 105, 226)', color:'white', fontWeight:'bold'}}>
                  Create
                </Button>
            </Col>
          </Row>
        </Col>
        <Col span={5} style={{ paddingTop: "150px", paddingBottom:'20px',paddingLeft: '30px' }}>
          <img
            src={image2}
            alt="boy"
            style={{ width: "80%", height: "70%", position: "fix" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default AdminCenterSignup;
