import ParentNavbar from "../ParentNavbar/ParentNavbar";
import { Col, Row } from "antd";
import React, { useContext } from "react";
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
import { saveChild } from "../../services/child";
import useAuthContext from "../../hooks/useAuthContext";
import useUser from "../../hooks/useUser";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};



const ParentChildAccount = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const user = useUser();
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
            onFinish={async (values) => {
              console.log(values);
              let data = { ...values };
              data.birthCertificate = undefined;
              data.photo = undefined;
              data.firstName = values.fullName.split(" ")[0];
              data.lastName = values.fullName.split(" ")[1];
              data.birthCertificateURL =
                values.birthCertificate.file.response.url;
              data.photoURL = values.photo.file.response.url;
              data.parent = { id: user.id };
              const res = await saveChild(data);
              console.log(res);
            }}
          >
            <Form.Item
              name="photo"
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
              name={"fullName"}
              label="Child Full Name"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="vaccinationCardNumber"
              label="Vaccination ID Number"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="dateOfBirth"
              label="Date of Birth"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Radio.Group>
                <Radio value="Male"> Male </Radio>
                <Radio value="Female"> Female </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="comments"
              label="Comments"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name="birthCertificate"
              label="Upload Birth Certificate of your Child"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
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
                  htmlType="submit"
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
          </Form>
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
