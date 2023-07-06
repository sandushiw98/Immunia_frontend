import React from "react";
import "./ParentRecordCard.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import image1 from "../../assets/images/vaccine-record-removebg-preview.png";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Col,
  Dropdown,
  Row,
  Card,
  Table,
  Divider,
  message,
  Button,
} from "antd";

const columns = [
  {
    title: "Order",
    dataIndex: "english",
  },
  {
    title: "Date",
    dataIndex: "name",
  },
  {
    title: "Dosage",
    dataIndex: "chinese",
  },
  {
    title: "Manufacturer",
    dataIndex: "math",
  },
  {
    title: "Location",
    dataIndex: "english",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const columnsreminder = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
const data1 = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};


const menuProps = {
  items,
  onClick: handleMenuClick,
};

const ParentRecordCard = () => {
  return (
    <div className="cover">
      <Row>
        <ParentNavbar />
      </Row>
      <Row
        style={{
          paddingTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Child Vaccination Record Card</h1>
      </Row>
      <Row gutter={16} style={{ padding: "30px" }}>
        <Col span={8}>
          <Card title="Name" bordered={false}>
            Sanduhsi Weraduwa
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Age" bordered={false}>
            6
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Date of Birth" bordered={false}>
            2022/2/13
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ padding: "30px" }}>
        <Col span={8}>
          <Card title="Gender" bordered={false}>
            Female
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Address" bordered={false}>
            "Sulakshi", Temple Road, Maradana
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Vaccination Card ID" bordered={false}>
            C12
          </Card>
        </Col>
      </Row>
      <Row>
        <h1 style={{ paddingLeft: "30px" }}>Vaccination Record</h1>
      </Row>
      <Row className="drop-down">
        <Dropdown.Button
          menu={menuProps}
          onClick={handleButtonClick}
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
            paddingRight: "30px",
          }}
        >
          Select Vaccination
        </Dropdown.Button>
      </Row>
      <Row>
        <Table
          columns={columns}
          dataSource={data}
          style={{ width: 2000, padding: "30px" }}
        />
      </Row>
      <Row
        style={{
          paddingBottom: "70px",
          fontSize: "18px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <p>
          Please keep this record card, it includes the medical information,
          details and the vaccine you have received. This card will show the
          next schedule of your vaccine. It is important to show this card to
          the next vaccination schedule for health officials to verify.
        </p>
      </Row>
      <Row className="reminder">
        <div class="notifications-container">
          <div class="alert">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 alert-svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="alert-prompt-wrap">
                <h1>REMINDER</h1>
                <p class="text-sm text-yellow-700">
                  Please return to your second vaccination schedule. Please
                  bring this card for your next schedule of vaccines. Always
                  check with the health workers and verify all information is
                  correct so you won’t miss the next dose.
                  {/* <a class="alert-prompt-link" href="#">
                    Upgrade To Premium
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </Row>
      <Row className="helthcare-details">
        <Table columns={columns} dataSource={data1} onChange={onChange} style={{width: 1000}} />;
        </Row>
        <Row>
          <Col span={12}>
          <img
            src={image1}
            alt="Vaccination"
            style={{ width: "100%", height: "100%",position: 'fix' }}
          />
          </Col>
          <Col span={12}></Col>
        </Row>
    </div>
  );
};

export default ParentRecordCard;
