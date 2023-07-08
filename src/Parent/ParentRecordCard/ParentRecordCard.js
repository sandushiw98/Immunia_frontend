import React from "react";
import "./ParentRecordCard.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import { Link } from 'react-router-dom';
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
  Form,
  Input,
} from "antd";
import image2 from "../../assets/images/childprofile3.jpg";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const columns = [
  
  {
    title: "Vaccine Type",
    dataIndex: "vaccine",
  },
  {
    title: "Dosage",
    dataIndex: "dosage",
  },
  
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
];

const data = [
  {
    key: "1",
    date: "23/3/2022",
    dosage: "1st dose",
    vaccine: "Polio",
    location: "Lady Ridgway",
  },
  {
    key: "2",
    date: "9/4/2022",
    dosage: "2nd dose",
    vaccine: "Polio",
    location: "Lady Ridgway",
  },

  { key: "3",
  date: "3/5/2022",
  dosage: "3rd dose",
  vaccine: "Polio",
  location: "Lady Ridgway",
  },
  {
    key: "4",
    date: "14/7/2022",
    dosage: "1st dose",
    vaccine: "Sarampa",
    location: "National Hospital",
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


const data1 = [
  {
    key: "1",
    name: "John Brown",
    chinese: 98,
    math: 60,
    english: 70,
  },
];

const menuProps = {
  
  onClick: handleMenuClick,
};

const columnschild = [
 
  {
    title: 'Vaccine',
    dataIndex: 'vaccine',
    key: 'vaccine',
    width: 80,
  },
  {
    title: 'Dosage',
    dataIndex: 'Dosage',
    key: 'Dosage',
    
  },
  {
    title: 'Return Date',
    dataIndex: 'Return_Date',
    key: 'Return_Date',
    
  },
  
  
];
const datachild = [
  {
    key: '1',
    vaccine: 'Sarampa',
    Dosage: '2nd Dose',
    Return_Date: '02/08/2022',
  },
 
];


const ParentRecordCard = () => {
  return (
    <div className="cover">
      <Row>
        <ParentNavbar />
      </Row>
      <Row style={{paddingTop: '120px', paddingRight: '30px', display: 'flex', justifyContent: 'right', alignItems: 'right'}} >
      <Link  to='../../ParentSearch' underline="none"><Button type="primary" > Create New + </Button> </Link>
      </Row>
      <Row>
        <Col span={10} style={{ paddingTop: "60px", paddingLeft: "150px" }}>
          <Card
            style={{
              width: 500,
            }}
            cover={<img alt="example" src={image2} />}
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
        <Col span={14} className="childtable">
          <Card className="childshadow">
            <div className="childcontent">
          <table class="childclass">
          <tr>
              <th>Vaccination Card ID:</th>
              <td>C345</td>
            </tr>
            <tr>
              <th>Age:</th>
              <td>1 Year</td>
            </tr>
            <tr>
              <th>Weight:</th>
              <td>5kg 400g</td>
            </tr>
            <tr>
              <th>Date Of Birth:</th>
              <td> 2022/ 07/ 08</td>
            </tr>
            <tr>
              <th>Address:</th>
              <td> Sulakshi, Temple Road, Colombo 8</td>
            </tr>
            <tr>
              <th>Gender:</th>
              <td>Female</td>
            </tr>
            <tr>
              <th>Guardian Name:</th>
              <td> Lakshmi Jasinghe</td>
            </tr>
            <tr>
              <th>Contact Number:</th>
              <td> 071-4020626</td>
            </tr>
            
          </table>
          </div>
          </Card>
        </Col>
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

      
      <Row>
        <Table
          columns={columns}
          dataSource={data}
          style={{ width: 2000, padding: "30px" }}
          pagination = {false}
        />
      </Row>
      <Row>
        <h2 style={{paddingLeft: '30px'}}>Return Date</h2>
      </Row>
      <Row className="returndate">
      <Table columns={columnschild} dataSource={datachild} pagination= {false} style={{width: '100%', paddingLeft: '20px', paddingRight: '20px',color: 'red'}} />;
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
                Please keep this record card, it includes the medical information,
          details and the vaccine you have received. This card will show the
          next schedule of your vaccine. It is important to show this card to
          the next vaccination schedule for health officials to verify.
                  {/* <a class="alert-prompt-link" href="#">
                    Upgrade To Premium
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Row>
      
      
    </div>
  );
};

export default ParentRecordCard;
