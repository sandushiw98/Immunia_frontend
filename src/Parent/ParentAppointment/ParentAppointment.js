import React from "react";
import { Button, Space, Table } from "antd";
import { useState } from "react";
import { Col, Row, Card} from "antd";
import { Link } from 'react-router-dom';
import "./ParentAppointment.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import image1 from "../../assets/images/appointment1234. girl jpg.jpg";
import image2 from "../../assets/images/appointment1234 boy.jpg";

const data = [
  {
    appointments: "A23",
    date: "23/05/2023",
    time: "3.15 P.M",
    childname: " Nehani Suranimala",
    parentname: "Dushani Kodithuwakku",
    vaccinationName: "National Hospital Colombo",
    vaccinationType: "Hepatitiease",
    Status: "Completed",
  },
  {
    appointments: "A23",
    date: "23/05/2023",
    time: "3.15 P.M",
    childname: " Nehani Suranimala",
    parentname: "Dushani Kodithuwakku",
    vaccinationName: "National Hospital Colombo",
    vaccinationType: "Hepatitiease",
    Status: "Upcomming",
  },
  {
    appointments: "A23",
    date: "23/05/2023",
    time: "3.15 P.M",
    childname: " Nehani Suranimala",
    parentname: "Dushani Kodithuwakku",
    vaccinationName: "National Hospital Colombo",
    vaccinationType: "Hepatitiease",
    Status: "Upcomming",
  },
  {
    appointments: "A23",
    date: "23/05/2023",
    time: "3.15 P.M",
    childname: " Nehani Suranimala",
    parentname: "Dushani Kodithuwakku",
    vaccinationName: "National Hospital Colombo",
    vaccinationType: "Hepatitiease",
    Status: "Upcomming",
  },
];

const Appointments = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Appointment ID",
      dataIndex: "appointments",
      key: "appointments",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => a.date - b.date,
      sortOrder: sortedInfo.columnKey === "date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      sorter: (a, b) => a.time - b.time,
      sortOrder: sortedInfo.columnKey === "time" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Child Name",
      dataIndex: "childname",
      key: "childname",
      sorter: (a, b) => a.childname - b.childname,
      sortOrder: sortedInfo.columnKey === "childname" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Parent Name",
      dataIndex: "parentname",
      key: "parentname",
    },
    {
      title: "Vaccination Center Name",
      dataIndex: "vaccinationName",
      key: "vaccinationName",
    },
    {
      title: "Vaccination Type",
      dataIndex: "vaccinationType",
      key: "vaccinationType",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
  ];

  return (
    <>
      <ParentNavbar />
      <Row >
        <Col span={4} style={{ paddingLeft: "50px",  paddingTop: "100px" }}>
          <img
            src={image1}
            alt="girl"
            style={{ width: "100%", height: "100%", position: "fix" }}
          />
        </Col>
        <Col span={16} style={{ padding: "120px 40px 40px 40px" }}>
          <div className="site-card-wrapper">
            <Card
              title="We always give priority for your appointment"
              bordered={true}
              className="card-with-shadow"
            >
              Thank you for scheduling your appointment through the IMMUNIA
              website. We are committed to fulfilling your vaccination needs and
              giving priority to your health and well-being. Our team is
              dedicated to ensuring a smooth vaccination experience for you. If,
              for any reason, you are unable to attend your scheduled
              appointment, we kindly request that you cancel it in advance. By
              doing so, you will provide an opportunity for another individual
              who is eagerly waiting for their vaccination. Your consideration
              and cooperation are greatly appreciated. We value your trust in
              our services and will continue to strive for excellence in
              delivering the highest quality care. Thank you for choosing
              IMMUNIA for your vaccination needs.
            </Card>
          </div>
        </Col>
        <Col span={4} style={{ paddingRight: "50px", paddingTop: '100px' }}>
          <img
            src={image2}
            alt="girl"
            style={{ width: "100%", height: "100%", position: "fix" }}
          />
        </Col>
      </Row>
      <Row className="createbtn">
      <Link  to='../../ParentSearch' underline="none"><Button type="primary" >Start scheduling</Button> </Link>
      </Row>
      <Row >
        <Col span={24}>
          <h1 className="heading"> Appointments</h1>
        </Col>
      </Row>
      <Row style={{ padding: "20px" }}>
        <Space
          style={{
            marginBottom: 16,
          }}
        ></Space>
        <Table
          columns={columns}
          dataSource={data}
          onChange={handleChange}
          pagination={false}
        />
      </Row>
      
    </>
  );
};

export default Appointments;
