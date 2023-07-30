import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { Col, Row } from "antd";
import React, { useRef } from "react";
import image1 from "../../assets/images/cartoon1.jpg";
import image2 from "../../assets/images/cartoon2.jpg";
import image3 from "../../assets/images/10_Vaccine.jpg";
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
import { useState } from "react";
import { saveVaccinationCenter } from "../../services/vaccination-center";
import emailjs from '@emailjs/browser';
import { generateRandomPassword } from "../../services/generateRandomPassword";


const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const uploadProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      console.log(info);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  customRequest: async (req) => {
    console.log(req.file);
    var formdata = new FormData();
    formdata.append("file", req.file, req.filename);
    formdata.append("upload_preset", "pivdduzw");
    formdata.append("api_key", "448574453683149");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "manual",
    };

    return fetch(
      "https://api.cloudinary.com/v1_1/dpf5wav8h/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        req.onSuccess(res);
        return res;
      })
      .catch((error) => console.log("error", error));
  },
  maxCount: 1,
};

const AdminCenterSignup = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Form values:", values);
    values.password = generateRandomPassword(8);
    const templateParams = {
      user_email: values.email,
      password: values.password
    }
    emailjs.send('service_yqtp07c', 'template_wqyu7qv', templateParams, 'onmue6jxNsAMtwS7D')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    saveVaccinationCenter({
      password: values.password,
      email: values.email,
      contactNumber: values.contactNumber,
      centerType: values.centerType,
      centerName: values.centerName,
      centerAddress: values.centerAddress,
      province: values.province,
    }).then((v) => {
      if (v) {
        // TODO : Navigate to success page
      }
    });
  };

  return (
    <>
      <Row>
        <AdminNavbar />
      </Row>
      <Row>
        <Col
          span={5}
          style={{
            paddingTop: "180px",
            paddingBottom: "20px",
            paddingLeft: "40px",
          }}
        >
          <img
            src={image1}
            alt="girl"
            style={{ width: "60%", height: "70%", position: "fix" }}
          />
        </Col>
        <Col span={14} style={{ paddingTop: "90px", textAlign: "center" }}>
          <h1> Vaccination Center SignUp </h1>
          <Form
            onFinish={onFinish}
            form={form}
            layout="horizontal"
            disabled={componentDisabled}
            labelAlign="right"
            style={{
              border: "1px solid black",
              padding: "30px",
              borderRadius: "0.7px",
            }}
            onFinishFailed={(v) => {
              console.log("Faled", v);
            }}
          >
            {/* <Form.Item
              name="photo"
              valuePropName="fileList"
              label="Upload Child Photo"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
              getValueFromEvent={normFile}
            >
              <Upload {...uploadProps} listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div>Upload</div>
                </div>
              </Upload>
            </Form.Item> */}
            <Form.Item
              name="email"
              label="Email"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item
              name="password"
              label="Password"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item> */}
            <Form.Item
              name="centerName"
              label="Vaccination Center Name"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="centerAddress"
              label="Vaccination Center Address"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="centerId"
              label="Vaccination Center ID Number"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="province"
              label="Province"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Select>
                <Select.Option value="Central">Central</Select.Option>
                <Select.Option value="North Central">
                  North Central
                </Select.Option>
                <Select.Option value="Nothern">Nothern</Select.Option>
                <Select.Option value="Eastern">Eastern</Select.Option>
                <Select.Option value="North Western">
                  North Western
                </Select.Option>
                <Select.Option value="Southern">Southern</Select.Option>
                <Select.Option value="Uva">Uva</Select.Option>
                <Select.Option value="Sabaragamuwa">Sabaragamuwa</Select.Option>
                <Select.Option value="Western">Western</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="centerType"
              label="Vaccination Center Type"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Radio.Group>
                <Radio value="Hospital"> Hospital </Radio>
                <Radio value="MOH"> MOH </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="contactNumber"
              label="Contact Number"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item
             name="comments"
              label="Comments"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <TextArea rows={4} />
            </Form.Item> */}
            {/* <Form.Item
              label="Upload Birth Certificate of your Child"
              labelAlign="right"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 17 }}
            >
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item> */}

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
                <Form.Item>
                  <Button
                    size="large"
                    style={{
                      backgroundColor: "rgb(105, 105, 226)",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    htmlType="submit"
                  >
                    Create
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col
          span={5}
          style={{
            paddingTop: "150px",
            paddingBottom: "20px",
            paddingLeft: "30px",
          }}
        >
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
