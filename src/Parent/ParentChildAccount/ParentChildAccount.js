import ParentNavbar from "../ParentNavbar/ParentNavbar";
import { Avatar, Col, Dropdown, Row, Card } from "antd";
import React from "react";
import image1 from "../../assets/images/girl.jpg";
import image2 from "../../assets/images/boy.jpg";
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
import "./ParentChildAccount.css";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const ParentChildAccount = () => {
  return (
    <>
      <Row>
        <ParentNavbar />
      </Row>
      <Row>
        <Col span={5} style={{ paddingTop: "180px" }}>
          <img
            src={image1}
            alt="girl"
            style={{ width: "100%", height: "100%", position: "fix" }}
          />
        </Col>
        <Col span={14} style={{ paddingTop: "90px", textAlign: "center" }}>
          <h1> Create Your Child Account </h1>

          <Form.Item label="Child Full Name">
            <Input />
          </Form.Item>
          <Form.Item label="Vaccination ID Number">
            <Input />
          </Form.Item>
          <Form.Item label="Province">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date of Birth">
            <Input />
          </Form.Item>
          <Form.Item label="Age">
            <Input />
          </Form.Item>
          <Form.Item label="Gender">
            <Radio.Group>
              <Radio value="apple"> Male </Radio>
              <Radio value="pear"> Female </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="How many children do you have including this child">
            <Input />
          </Form.Item>
          <Form.Item label="Comments">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Upload Birth Certificate of your Child"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
          <Row className="lastbtn" gutter={100}>
            <Col> 
            <Form.Item>
              <Button  style={{backgroundColor: '#425df5', width: '100px', height: '40px', fontWeight: 'bold'}}>Button</Button>
            </Form.Item>
            </Col>
            <Col>
            <Form.Item>
              <Button style={{backgroundColor: '#425df5', width: '100px', height: '40px',fontWeight: 'bold'}}>Button</Button>
            </Form.Item>
            </Col>
            
            
          </Row>
        </Col>
        <Col span={5} style={{ paddingTop: "200px" }}>
          <img
            src={image2}
            alt="boy"
            style={{ width: "100%", height: "100%", position: "fix" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default ParentChildAccount;
