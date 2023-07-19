// import React from "react";
// import "./ParentBooking.css";
// import ParentNavbar from "../ParentNavbar/ParentNavbar";
// import { Avatar, Col, Dropdown, Row, Card } from "antd";
// import image1 from "../../assets/images/bookong.webp";
// import { Link } from "react-router-dom";
// import {
//   Button,
//   DatePicker,
//   Form,
//   Input,
//   Modal,
//   Space,
//   Radio,
//   Select,
// } from "antd";
// import { useState } from "react";
// import { red } from "@material-ui/core/colors";

// const gridStyle = {
//   width: "25%",
//   textAlign: "center",
// };

// const ParentBooking = () => {
//   const [componentDisabled, setComponentDisabled] = useState(false);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Row>
//         <ParentNavbar />
//       </Row>
//       <Row style={{ paddingTop: "80px" }}>
//         <Link className="back-btn" to="/parentsearch" underline="none">
//           <button className="backbtn">Back to Home </button>
//         </Link>
//       </Row>

//       <Row >
//         <Col span={12}>
//           <img
//             src={image1}
//             alt="Vaccination Center"
//             style={{ width: "100%", height: "100%", position: "fix" }}
//           />
//         </Col>

//         <Col span={12}>
//           <Row
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignContent: "center",
//             }}
//           >
//             <p style={{ fontSize: "20px" ,paddingBottom: '20px'}}>
//               Hi lakshmi ! Let's make an appointment with Lady Ridgway Hospital,
//               Colombo 8{" "}
//             </p>
//           </Row>
//           <Row
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignContent: "center",
//             }}
//           >
//             <h1 style={{ fontSize: "30px" }}>Schedule Appointment </h1>
//           </Row>

//           <Form
//             labelCol={{
//               span: 10,
//             }}
//             wrapperCol={{
//               span: 14,
//             }}
//             layout="horizontal"
//             disabled={componentDisabled}
//             style={{
//               maxWidth: 1000,
//             }}

//             className="formfont"
//           >
//             <div style={{ padding: "20px 160px 10px 40px"}}>
//               <Form.Item label="Parent Full Name" >
//                 <Input />
//               </Form.Item>

//               <Form.Item label="Child Full Name">
//                 <Input />
//               </Form.Item>
//               <Form.Item label="Vaccination Card No">
//                 <Input />
//               </Form.Item>
//               <Form.Item label="Vaccination Type">
//                 <Select>
//                   <Select.Option value="demo">Demo</Select.Option>
//                 </Select>
//               </Form.Item>
//               <Form.Item label="Vaccination Center">
//                 <Select>
//                   <Select.Option value="demo">Demo</Select.Option>
//                 </Select>
//               </Form.Item>
//               <Form.Item label="Appointment Date">
//                 <DatePicker />
//               </Form.Item>
//               <Form.Item label="Select Hall Number">
//                 <Radio.Group>
//                   <Radio value="apple"> Hall No: 1 </Radio>
//                   <Radio value="pear"> Hall No: 2 </Radio>
//                 </Radio.Group>
//               </Form.Item>
//               <Form.Item label="Time Slots">
//                 <Row>
//                 <Col style={{paddingRight: '50px'}}><Input style={{paddingRight: '80px'}} /></Col>
//                 <Col>
//                 <Button type="primary" onClick={showModal}>
//                   select time slots
//                 </Button>
//                 {/* <Input/> */}
//                 <Modal
//                   title="Basic Modal"
//                   open={isModalOpen}
//                   onOk={handleOk}
//                   onCancel={handleCancel}
//                   width={1200}
//                   height = {1000}
//                 >
//                   <Card
//                     title="Avialable Time Slots"
//                     style={{ textAlign: "center" }}
//                   >
//                     <Row style={{ paddingBottom: "60px" }}>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                         <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'green' }}>
//                           9.00 A.M - 9.15 A.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'red'}}>
//                           9.15 A.M - 9.30 A.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'green'  }}>
//                           9.30 A.M - 9.45 A.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'green' }}>
//                           9.45 A.M - 10.00 A.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'red' }}>
//                           10.00 A.M -10.15 A.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'green'  }}>
//                           10.15 A.M -10.30 A.M
//                           </Button>
//                       </Col>
//                     </Row>
//                     <Row style={{ paddingBottom: "60px" }}>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'green' }}>
//                           10.30 A.M -10.45 A.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'green' }}>
//                           10.45 A.M -11.00 A.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'red' }}>
//                           11.00 A.M -11.15 A.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'green' }}>
//                           11.15 A.M -11.30 A.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'red' }}>
//                           11.45 A.M -12.00 A.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'green' }}>
//                           12.15 A.M - 12.30 A.M
//                           </Button>
//                       </Col>
//                     </Row>
//                     <Row style={{ paddingBottom: "60px" }}>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'red'}}>
//                           12.45 A.M -1.00 P.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'green' }}>
//                           1.00 P.M - 1.15 P.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'green'  }}>
//                           1.15 P.M - 1.30 P.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'red' }}>
//                           1.45 P.M - 2.00 P.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'green' }}>
//                           2.00 P.M - 2.15 P.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%" ,backgroundColor: 'green' }}>
//                           2.15 P.M - 2.30 P.M
//                           </Button>
//                       </Col>
//                     </Row>
//                     <Row style={{ paddingBottom: "60px" }}>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'red' }}>
//                           2.30 P.M - 2.45 P.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'green'  }}>
//                           2.45 P.M - 3.00 P.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'green'  }}>
//                           3.00 P.M - 3.15 P.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'green'  }}>
//                           3.15 P.M - 3.30 P.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'red' }}>
//                           3.45 P.M - 4.00 P.M
//                           </Button>
//                       </Col>
//                       <Col span={4} style={{paddingRight: '20px'}}>
//                       <Button type="primary" onClick={showModal} style={{ width: "100%", height: "250%",backgroundColor: 'green'  }}>
//                           4.00 P.M - 4.15 P.M
//                           </Button>
//                       </Col>
//                     </Row>
//                   </Card>
//                 </Modal>
//                 </Col>
//                 </Row>
//               </Form.Item>
//               <Row className="finalbuttons">
//                 <Col style={{padding: '40px  60px 40px 240px'}}> <Button style={{backgroundColor: '#036bfc',color: 'white'}}>SUBMIT</Button></Col>
//                 <Col><Button style={{backgroundColor: 'red',color: 'white'}}>CANCEL</Button></Col>
//               </Row>
//             </div>
//           </Form>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default ParentBooking;

import React, { useState } from "react";
import "./ParentBooking.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import { Avatar, Col, Dropdown, Row, Card } from "antd";
import image1 from "../../assets/images/bookong.webp";
import { Link } from "react-router-dom";
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
import { red } from "@material-ui/core/colors";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const ParentBooking = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const showModal = (timeSlot) => {
    setIsModalOpen(true);
    setSelectedTimeSlot(timeSlot);
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
        <ParentNavbar />
      </Row>
      <Row style={{ paddingTop: "80px" }}>
        <Link className="back-btn" to="/parentsearch" underline="none">
          <button className="backbtn">Back to Home </button>
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
              <Form.Item label="Parent Full Name">
                <Input />
              </Form.Item>

              <Form.Item label="Child Full Name">
                <Input />
              </Form.Item>
              <Form.Item label="Vaccination Card No">
                <Input />
              </Form.Item>
              <Form.Item label="Vaccination Type">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Vaccination Center">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Appointment Date">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Select Hall Number">
                <Radio.Group>
                  <Radio value="apple"> Hall No: 1 </Radio>
                  <Radio value="pear"> Hall No: 2 </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Time Slots">
                <Row>
                  <Col style={{ paddingRight: "50px" }}>
                  <Input value={selectedTimeSlot} style={{ paddingRight: '80px' }} readOnly />
                  </Col>
                  <Col>
                    <Button type="primary" onClick={showModal}>
                      select time slots
                    </Button>
                    {/* <Input/> */}
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
                        <Row style={{ paddingBottom: "60px" }}>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('9.00 A.M - 9.15 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              9.00 A.M - 9.15 A.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('9.15 A.M - 9.30 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "red",
                              }}
                            >
                              9.15 A.M - 9.30 A.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal(' 9.30 A.M - 9.45 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              9.30 A.M - 9.45 A.M
                            </Button>
                            
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal(' 9.45 A.M - 10.00 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              9.45 A.M - 10.00 A.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('10.00 A.M -10.15 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "red",
                              }}
                            >
                              10.00 A.M -10.15 A.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('10.15 A.M -10.30 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              10.15 A.M -10.30 A.M
                            </Button>
                          </Col>
                        </Row>
                        <Row style={{ paddingBottom: "60px" }}>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('10.30 A.M -10.45 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              10.30 A.M -10.45 A.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('10.45 A.M -11.00 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              10.45 A.M -11.00 A.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('11.00 A.M -11.15 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "red",
                              }}
                            >
                              11.00 A.M -11.15 A.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('11.15 A.M -11.30 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              11.15 A.M -11.30 A.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('11.45 A.M -12.00 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "red",
                              }}
                            >
                              11.45 A.M -12.00 A.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal(' 12.15 A.M - 12.30 A.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              12.15 A.M - 12.30 A.M
                            </Button>
                          </Col>
                        </Row>
                        <Row style={{ paddingBottom: "60px" }}>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('12.45 A.M -1.00 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "red",
                              }}
                            >
                              12.45 A.M -1.00 P.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal(' 1.00 P.M - 1.15 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              1.00 P.M - 1.15 P.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('1.15 P.M - 1.30 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              {" "}
                              1.15 P.M - 1.30 P.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('1.45 P.M - 2.00 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "red",
                              }}
                            >
                              1.45 P.M - 2.00 P.M
                            </Button>
                          </Col>{" "}
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('2.00 P.M - 2.15 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              2.00 P.M - 2.15 P.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal(' 2.15 P.M - 2.30 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              2.15 P.M - 2.30 P.M
                            </Button>
                          </Col>
                        </Row>
                        <Row style={{ paddingBottom: "60px" }}>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal(' 2.30 P.M - 2.45 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "red",
                              }}
                            >
                              2.30 P.M - 2.45 P.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('2.45 P.M - 3.00 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              2.45 P.M - 3.00 P.M{" "}
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('3.00 P.M - 3.15 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              3.00 P.M - 3.15 P.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal(' 3.15 P.M - 3.30 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              3.15 P.M - 3.30 P.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal(' 3.45 P.M - 4.00 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "red",
                              }}
                            >
                              3.45 P.M - 4.00 P.M
                            </Button>
                          </Col>
                          <Col span={4} style={{ paddingRight: "20px" }}>
                            <Button
                              type="primary"
                              onClick={() => showModal('4.00 P.M - 4.15 P.M')}
                              style={{
                                width: "100%",
                                height: "250%",
                                backgroundColor: "green",
                              }}
                            >
                              4.00 P.M - 4.15 P.M
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Modal>
                  </Col>
                </Row>
              </Form.Item>
              <Row className="finalbuttons">
                <Col style={{ padding: "40px  60px 40px 240px" }}>
                  {" "}
                  <Button
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
        </Col>
      </Row>
    </>
  );
};

export default ParentBooking;
