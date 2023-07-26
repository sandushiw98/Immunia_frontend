import React from "react";
import { useState, useEffect } from "react";
import { getAppointments } from "../../services/appointment";
import { Button, Space, Table } from "antd";
import { Col, Row, Card} from "antd";
import { Link } from 'react-router-dom';
import "./ParentAppointment.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import image1 from "../../assets/images/appointment1234. girl jpg.jpg";
import image2 from "../../assets/images/appointment1234 boy.jpg";


const Appointments = () => {
  const [appointmentData, setAppointments] = useState([]);
  useEffect(() => {
    // Call the getAppointments function to fetch the data
    getAppointments()
      .then(data => {
        // Update the state with the fetched appointments data
        setAppointments(data);
      })
      .catch(error => {
        // Handle error if needed
        console.log("Error fetching appointments:", error);
      });
  }, []);
  console.log(appointmentData)
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  return (
    <>
      <ParentNavbar />
      <Row className="createbtn" style={{  paddingTop: "100px" }}>
      <Link  to='../../ParentSearch' underline="none"><Button type="primary" size="large" >Start scheduling</Button> </Link>
      </Row>
      <Row >
        <Col span={4} style={{ paddingLeft: "50px",  paddingTop: "50px" }}>
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
        <Col span={4} style={{ paddingRight: "50px", paddingTop: '50px' }}>
          <img
            src={image2}
            alt="girl"
            style={{ width: "100%", height: "100%", position: "fix" }}
          />
        </Col>
      </Row>
      
      <Row >
        <Col span={24}>
          <h1 className="heading"> Appointments</h1>
        </Col>
      </Row>
      
    </>
  );
};

export default Appointments;
