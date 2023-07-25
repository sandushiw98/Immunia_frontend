import {
  CalendarOutlined,
  TeamOutlined,
  UserOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Col, Row, Space, Modal, Input } from "antd";
import React from "react";
import "./ParentDashboard.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import image13 from "../../assets/images/donation.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import useParent from "../../hooks/useParent";

const { TextArea } = Input;

const ParentDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [kiddos] = useParent();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <Row>
            <ParentNavbar />
          </Row>
          <Row style={{ paddingTop: "100px", paddingRight: "20px" }}>
            <Col span={8}>
              <Row>
                <Col className="card-container-parent">
                  <Card
                    className="parent-card"
                    bordered={false}
                    style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Space>
                        <TeamOutlined
                          style={{ fontSize: "20px", color: "yellowgreen" }}
                        />
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "yellowgreen",
                          }}
                        >
                          Number of Children
                        </span>
                      </Space>
                    </div>
                    <Col
                      span={24}
                      style={{ textAlign: "right", fontWeight: "bolder" }}
                    >
                      <span style={{ fontSize: "35px", color: "yellowgreen" }}>
                        {kiddos.length}
                      </span>
                    </Col>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="card-container-parent">
                  <Card
                    className="parent-card"
                    bordered={false}
                    style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Space>
                        <TeamOutlined
                          style={{ fontSize: "20px", color: "yellowgreen" }}
                        />
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "yellowgreen",
                          }}
                        >
                          Upcoming Appointments
                        </span>
                      </Space>
                    </div>
                    <Col
                      span={24}
                      style={{ textAlign: "right", fontWeight: "bolder" }}
                    >
                      <span style={{ fontSize: "35px", color: "yellowgreen" }}>
                        2
                      </span>
                    </Col>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={16} className="card-container-parent1">
              <Card
                className="parent-card-appoinments"
                title="Upcoming Appointments"
                extra={
                  <Link to="/../ParentSearch">
                    <Button type="primary">+ Create Appointment</Button>
                  </Link>
                }
                bordered={false}
                style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)" }}
              >
                <Row>
                  <Col span={24} style={{ padding: "3px 0px" }}>
                    <Card bordered={true}>
                      <Row
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "orangered",
                        }}
                      >
                        <Col span={2}>
                          <CalendarOutlined />
                        </Col>
                        <Col span={4}>
                          <span>2023-08-08</span>
                        </Col>
                        <Col span={4}>
                          <span>10.00 - 10.20</span>
                        </Col>
                        <Col span={7}>
                          <span>Sandushi Weraduwa</span>
                        </Col>
                        <Col span={7}>
                          <span>Lady Ridgeway</span>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} style={{ padding: "3px 0px" }}>
                    <Card bordered={true}>
                      <Row
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "orangered",
                        }}
                      >
                        <Col span={2}>
                          <CalendarOutlined />
                        </Col>
                        <Col span={4}>
                          <span>2023-08-08</span>
                        </Col>
                        <Col span={4}>
                          <span>10.00 - 10.20</span>
                        </Col>
                        <Col span={7}>
                          <span>Sandushi Weraduwa</span>
                        </Col>
                        <Col span={7}>
                          <span>Lady Ridgeway</span>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} style={{ padding: "3px 0px" }}>
                    <Card bordered={true}>
                      <Row
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "orangered",
                        }}
                      >
                        <Col span={2}>
                          <CalendarOutlined />
                        </Col>
                        <Col span={4}>
                          <span>2023-08-08</span>
                        </Col>
                        <Col span={4}>
                          <span>10.00 - 10.20</span>
                        </Col>
                        <Col span={7}>
                          <span>Sandushi Weraduwa</span>
                        </Col>
                        <Col span={7}>
                          <span>Lady Ridgeway</span>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row style={{ paddingTop: "40px" }}>
            <Col
              span={8}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card
                className="parent-children"
                title="Children"
                extra={
                  <Link to="/../ParentChildAccount">
                    <Button type="primary">+ Create Child Account</Button>
                  </Link>
                }
                bordered={false}
                style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)" }}
              >
                {kiddos.map((kid) => {
                  return (
                    <Row>
                      <Col span={24} style={{ padding: "3px 0px" }}>
                        <Card bordered={true}>
                          <Row
                            style={{
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "rgb(153, 153, 235)",
                            }}
                          >
                            <Col span={2}>
                              <Avatar icon={<UserOutlined />} />
                            </Col>

                            <Col span={16}>
                              <span>{`${kid.firstName} ${kid.lastName}`}</span>
                            </Col>
                            <Col span={6}>
                              <span>{`${kid.dateOfBirth}`}</span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  );
                })}
                {/* <Row>
                  <Col span={24} style={{ padding: "3px 0px" }}>
                    <Card bordered={true}>
                      <Row
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "rgb(153, 153, 235)",
                        }}
                      >
                        <Col span={2}>
                          <Avatar icon={<UserOutlined />} />
                        </Col>

                        <Col span={16}>
                          <span>Sandushi Weraduwa</span>
                        </Col>
                        <Col span={6}>
                          <span>2022-02-13</span>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row> */}
              </Card>
            </Col>
            <Col
              span={16}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "30px",
              }}
            >
              <Row style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)" }}>
                <Col
                  span={10}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px 0px",
                  }}
                >
                  <img
                    src={image13}
                    alt="image13"
                    style={{
                      width: "80%",
                      height: "90%",
                      borderRadius: "10px",
                    }}
                  />
                </Col>
                <Col span={14} style={{ padding: "20px 0px" }}>
                  <Row>
                    <Col
                      span={24}
                      style={{
                        textAlign: "center",
                        fontWeight: "bolder",
                        fontSize: "25px",
                        color: "red",
                        paddingTop: "20px",
                      }}
                    >
                      <span>
                        Help us to ensure that more people can benefit from
                        vaccines, no matter where they live or their economic
                        status.
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      span={24}
                      style={{
                        textAlign: "center",
                        fontWeight: "bolder",
                        fontSize: "30px",
                        paddingTop: "25px",
                      }}
                    >
                      <span>How you can help?</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      span={24}
                      style={{
                        textAlign: "center",
                        fontWeight: "bolder",
                        fontSize: "30px",
                        paddingTop: "25px",
                      }}
                    >
                      <Link
                        className="back-btn"
                        to="/Donations"
                        underline="none"
                      >
                        <Button type="primary">Donate Now</Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Row>
          <Col
            span={24}
            style={{ padding: "50px 40px 30px 70px", width: "100%" }}
          >
            <Card
              style={{
                width: "1800px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 15px",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Any compalin or appreciation! We are here to assist you{" "}
                  <SmileOutlined
                    style={{ fontSize: "30px", color: "#1779e8" }}
                  />
                </span>
                <Button type="primary" onClick={showModal}>
                  Click Here For Comment
                </Button>
                <Modal
                  title="Review Form"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  okText="Send Review"
                  cancelText="Cancel"
                  cancelButtonProps={{ className: "custom-cancel-button" }}
                  width={800} // Set the desired width value here
                  style={{ height: "400px" }} // Set the desired height value here
                >
                  <Row style={{ border: "1px solid grey", padding: "30px" }}>
                    <Input placeholder="Enter Your Name" />;
                    <TextArea
                      rows={4}
                      placeholder="maxLength is 6"
                      maxLength={6}
                    />
                  </Row>
                </Modal>
              </div>
            </Card>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default ParentDashboard;
