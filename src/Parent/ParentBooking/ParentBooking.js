import React, { useState } from "react";
import "./ParentBooking.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import { Avatar, Col, Dropdown, Row, Card } from "antd";
import image1 from "../../assets/images/bookong.webp";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Space,
  Radio,
  Select,
} from "antd";
import dayjs from "dayjs";
import { red } from "@material-ui/core/colors";
import { useEffect } from "react";
import { getVaccinationCenters } from "../../services/vaccination-center";
import { getScheduleByDate } from "../../services/schedule";
import useUser from "../../hooks/useUser";
import { saveAppointment } from "../../services/appointment";
import { VaccineTypeEnum, VaccineTypes } from "../../services/constants";
import useParent from "../../hooks/useParent";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const ParentBooking = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const navigate = useNavigate();
  const [vacCenters, setvacCenters] = useState([]);
  const [selectedCenter, setselectedCenter] = useState();
  const [selectedDate, setselectedDate] = useState();
  const [schedules, setschedules] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useUser();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();
  const [kiddos] = useParent();
  const showModal = () => {
    if (selectedCenter && selectedDate) {
      getScheduleByDate(selectedCenter, selectedDate.format("YYYY-MM-DD")).then(
        (v) => setschedules(v)
      );
      setIsModalOpen(true);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    getVaccinationCenters().then((c) => setvacCenters(c));
  }, []);

  return (
    <>
      <Row>
        <ParentNavbar />
      </Row>
      <Row style={{ paddingTop: "80px" }}>
        <Link className="back-btn" to="/parentappointment" underline="none">
          <button className="backbtn">Back </button>
        </Link>
      </Row>

      <Row>
        <Col span={12}>
          <img
            src={image1}
            alt="Vaccination Center"
            style={{ width: "100%", height: "100%", position: "fix" }}
          />
        </Col>

        <Col span={12}>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <p style={{ fontSize: "20px", paddingBottom: "20px" }}>
              Hi lakshmi ! Let's make an appointment with Lady Ridgway Hospital,
              Colombo 8{" "}
            </p>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <h1 style={{ fontSize: "30px" }}>Schedule Appointment </h1>
          </Row>

          <Form
            onFinish={(values) => {
              const child = kiddos.find((s) => s.childId === values.childId);
              if (!child) {
                return;
              }
              const data = {
                vaccineType: values.vaccineType,
                parentName: values.parentName,
                vaccinationCardNumber: child.vaccinationCardNumber,
                slotId: selectedTimeSlot,
                status: true,
                childName: `${child.firstName} ${child.lastName}`,
                vaccinationCenter: vacCenters.find(
                  (s) => s.id === selectedCenter
                ).centerName,
                parent: {
                  id: user.id,
                },
                vaccineCenter: {
                  id: selectedCenter,
                },
                schedule: {
                  scheduleId: selectedTimeSlot,
                },
                child: {
                  childId: values.childId,
                },
              };

              saveAppointment(data).then(() => {
                navigate("/ParentAppointment");
              });
            }}
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            disabled={componentDisabled}
            style={{
              maxWidth: 1000,
            }}
            className="formfont"
          >
            <div style={{ padding: "20px 160px 10px 40px" }}>
              <Form.Item name="parentName" label="Parent Full Name">
                <Input />
              </Form.Item>
              <Form.Item name="childId" label="Select Child">
                <Select>
                  {kiddos.map((v) => {
                    return (
                      <Select.Option value={v.childId}>
                        {v.firstName}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            
              <Form.Item name="vaccineType" label="Vaccine Type">
                <Select>
                  {Object.keys(VaccineTypeEnum).map((v) => {
                    return (
                      <Select.Option value={VaccineTypeEnum[v]}>
                        {VaccineTypes[VaccineTypeEnum[v]]}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item label="Vaccination Center">
                <Select
                  onChange={(s) => {
                    setselectedCenter(s);
                  }}
                >
                  {vacCenters.map((v) => {
                    return (
                      <Select.Option value={v.id}>{v.centerName}</Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item label="Appointment Date">
                <DatePicker onChange={(v) => setselectedDate(v)} />
              </Form.Item>
              <Form.Item label="Time Slots">
                <Row>
                  <Col style={{ paddingRight: "50px" }}>
                    <Input
                      value={(() => {
                        const s = schedules.find(
                          (s) => s.scheduleId === selectedTimeSlot
                        );
                        if (!s) {
                          return "";
                        }
                        return `${s.startTime} - ${s.endTime}`;
                      })()}
                      style={{ paddingRight: "80px" }}
                      readOnly
                    />
                  </Col>
                  <Col>
                    <Button type="primary" onClick={showModal}>
                      select time slots
                    </Button>

                    <Modal
                      title="Basic Modal"
                      visible={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      width={1200}
                      height={1000}
                    >
                      <Card
                        title="Available Time Slots"
                        style={{ textAlign: "center" }}
                      >
                        <Row
                          gutter={[0, 20]}
                          style={{
                            padding: "30px 30px 30px 30px",
                            borderRadius: "0.5",
                          }}
                        >
                          {schedules.map((s) => {
                            if (s.status) {
                              return null;
                            }
                            console.log(s);
                            return (
                              <Col
                                className="gutter-row"
                                style={{ margin: 20 }}
                                span={3}
                              >
                                <Button
                                  type="primary"
                                  onClick={() =>
                                    setSelectedTimeSlot(s.scheduleId)
                                  }
                                  style={{
                                    width: "100%",
                                    height: "250%",
                                    backgroundColor: "green",
                                  }}
                                >
                                  {s.startTime} - {s.endTime}
                                </Button>
                              </Col>
                            );
                          })}
                        </Row>
                      </Card>
                    </Modal>
                  </Col>
                </Row>
              </Form.Item>
              <Row className="finalbuttons">
                <Col style={{ padding: "40px  60px 40px 240px" }}>
                  <Button
                    htmlType="submit"
                    style={{ backgroundColor: "#036bfc", color: "white" }}
                  >
                    SUBMIT
                  </Button>
                </Col>
                <Col>
                  <Button style={{ backgroundColor: "red", color: "white" }}>
                    CANCEL
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
          <Row style={{paddingLeft: '660px',paddingTop: '100px'}}>
  <Link to="/parentsearch" underline="none">
    <Button type="primary">Search Location</Button>
  </Link>
</Row>

        
        </Col>
      </Row>
    </>
  );
};

export default ParentBooking;
