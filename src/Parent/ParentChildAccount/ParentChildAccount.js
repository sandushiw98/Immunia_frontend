import ParentNavbar from "../ParentNavbar/ParentNavbar";
import { Col, Row } from "antd";
import React from "react";
import image1 from "../../assets/images/girl.jpg";
import image2 from "../../assets/images/boy.jpg";
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
import "./ParentChildAccount.css";
import { useState } from "react";
import { uploadProps } from "../../Admin/AdminCenterSignup/AdminCenterSignup";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

// const props = {
//   name: 'file',
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };

const ParentChildAccount = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      <Row>
        <ParentNavbar />
      </Row>
      <Row>
        <Col span={5} style={{ paddingTop: "150px", paddingBottom: "150px" }}>
          <img
            src={image1}
            alt="girl"
            style={{ width: "100%", height: "100%", position: "fix" }}
          />
        </Col>
        <Col span={14} style={{ paddingTop: "90px", textAlign: "center" }}>
          <h1> Create Your Child Account </h1>
          <Form
            layout="horizontal"
            disabled={componentDisabled}
            labelAlign="right"
            style={{
              border: "1px solid black",
              padding: "20px",
              borderRadius: "0.7px",
            }}
          >
            <Form.Item
              label="Upload Child Photo"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Upload {...uploadProps} listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Child Full Name"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Vaccination ID Number"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Province"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Date of Birth"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Age"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Gender"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Radio.Group>
                <Radio value="apple"> Male </Radio>
                <Radio value="pear"> Female </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="How many children do you have including this child"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Comments"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label="Upload Birth Certificate of your Child"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Form>

          <Row className="lastbtn" gutter={48} style={{ paddingTop: "20px" }}>
            <Col span={18}></Col>
            <Col
              span={3}
              style={{
                display: "flex",
                alignItems: "right",
                justifyContent: "right",
              }}
            >
              <Button
                size="large"
                style={{
                  backgroundColor: "rgb(238, 53, 53)",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </Button>
            </Col>
            <Col
              span={3}
              style={{
                display: "flex",
                alignItems: "right",
                justifyContent: "right",
              }}
            >
              <Button
                size="large"
                style={{
                  backgroundColor: "rgb(105, 105, 226)",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Create
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={5} style={{ paddingTop: "150px", paddingBottom: "150px" }}>
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
