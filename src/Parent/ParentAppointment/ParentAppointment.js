import React from "react";
import { useState, useEffect } from "react";
import {
  getAppointments,
  getAppointmentsByParent,
} from "../../services/appointment";
import { Button, Space, Table } from "antd";
import { Col, Row, Card } from "antd";
import { Link } from "react-router-dom";
import "./ParentAppointment.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import image1 from "../../assets/images/appointment1234. girl jpg.jpg";
import image2 from "../../assets/images/appointment1234 boy.jpg";
import useUser from "../../hooks/useUser";
// {
//   "appointmentId": 4,
//   "vaccinationName": "Polio",
//   "parentName": "Navod",
//   "vaccinationCardNumber": "123",
//   "status": true,
//   "childName": "Karuna",
//   "vaccinationCenter": "Thissa",
//   "date": "2023-03-12",
//   "time": "23:59:59",
//   "parent": {
//       "id": 3,
//       "userRole": "parent",
//       "password": "$2a$10$9lBT1AdksAs8cPalrZipUuc9G20Z72zZppsPfuFJAQy8dcTl5DjTW",
//       "email": "parent@gmail.com",
//       "contactNumber": "0712594045",
//       "isActivate": true,
//       "firstName": "Prineeth",
//       "lastName": "Wimalaweera",
//       "address": "161 Helambagaswala Tissamaharama",
//       "emergencyContactNumber": "0719270003",
//       "nicnumber": "702475873V"
//   },
//   "vaccineCenter": {
//       "id": 1,
//       "userRole": "vaccine_center",
//       "password": "$2a$10$d/CMMhMpzNLfZHyRt6us9uP6NSHaHwME3zEZpPZ50RUZQg27aVSPG",
//       "email": "ridgeway@gmail.com",
//       "contactNumber": "123",
//       "isActivate": true,
//       "centerType": "MOH",
//       "centerName": "Lady Ridgeway",
//       "centerAddress": "Colombo 08",
//       "province": "Western"
//   },
//   "child": null,
//   "schedule": {
//       "scheduleId": 2,
//       "scheduleDate": null,
//       "startTime": "10:10:00",
//       "endTime": "10:20:00",
//       "status": true,
//       "vaccineCenter": {
//           "id": 1,
//           "userRole": "vaccine_center",
//           "password": "$2a$10$d/CMMhMpzNLfZHyRt6us9uP6NSHaHwME3zEZpPZ50RUZQg27aVSPG",
//           "email": "ridgeway@gmail.com",
//           "contactNumber": "123",
//           "isActivate": true,
//           "centerType": "MOH",
//           "centerName": "Lady Ridgeway",
//           "centerAddress": "Colombo 08",
//           "province": "Western"
//       }
//   }
// }

const Appointments = () => {
  const [appointmentData, setAppointments] = useState([]);
  const user = useUser();
  useEffect(() => {
    // Call the getAppointments function to fetch the data
    if (!user) {
      return;
    }
    getAppointmentsByParent(user.id)
      .then((data) => {
        // Update the state with the fetched appointments data
        setAppointments(
          data.map((d) => {
            return {
              ...d,
              scheduleDate: d.schedule.scheduleDate,
              startTime: d.schedule.startTime,
              centerName: d.vaccineCenter.centerName,
            };
          })
        );
      })
      .catch((error) => {
        // Handle error if needed
        console.log("Error fetching appointments:", error);
      });
  }, [user, user.id]);

  console.log(appointmentData);
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
      dataIndex: "appointmentId",
      key: "appointmentId",
    },
    {
      title: "Date",
      dataIndex: "scheduleDate",
      key: "scheduleDate",
      sorter: (a, b) => a.scheduleDate - b.scheduleDate,
      sortOrder:
        sortedInfo.columnKey === "scheduleDate" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Time",
      dataIndex: "startTime",
      key: "startTime",
      sorter: (a, b) => a.time - b.time,
      sortOrder: sortedInfo.columnKey === "startTime" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Child Name",
      dataIndex: "childName",
      key: "childName",
      sorter: (a, b) => a.childName - b.childName,
      sortOrder: sortedInfo.columnKey === "childName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Parent Name",
      dataIndex: "parentName",
      key: "parentName",
    },
    {
      title: "Vaccination Center Name",
      dataIndex: "centerName",
      key: "centerName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    // {
    //   title: "Vaccinated",
    //   dataIndex: "Vaccinated",
    //   key: "Vaccinated",
    // },
  ];
  return (
    <>
      <ParentNavbar />
      <Row className="createbtn" style={{ paddingTop: "100px" }}>
        <Link to="../../ParentSearch" underline="none">
          <Button type="primary" size="large">
            Start scheduling
          </Button>{" "}
        </Link>
      </Row>
      <Row>
        <Col span={4} style={{ paddingLeft: "50px", paddingTop: "50px" }}>
          <img
            src={image1}
            alt="girl"
            style={{ width: "100%", height: "100%", position: "fix" }}
          />
        </Col>
        <Col span={16} style={{ padding: "50px 40px 40px 40px" }}>
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
        <Col span={4} style={{ paddingRight: "50px", paddingTop: "50px" }}>
          <img
            src={image2}
            alt="girl"
            style={{ width: "100%", height: "100%", position: "fix" }}
          />
        </Col>
      </Row>

      <Row>
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
          dataSource={appointmentData}
          onChange={handleChange}
          pagination={false}
        />
      </Row>
    </>
  );
};

export default Appointments;
