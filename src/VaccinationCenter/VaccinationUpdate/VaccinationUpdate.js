import React from "react";
import "./VaccinationUpdate.css";
import VaccinationNavbar from "../VaccinationNavbar/VaccinationNavbar";
import { Link, useParams } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";
import image1 from "../../assets/images/reminder.jpg";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

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
  Modal,
  Select,
  DatePicker,
} from "antd";
import image2 from "../../assets/images/childprofile3.jpg";
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getChildById } from "../../services/child";
import { VaccineTypeEnum, VaccineTypes } from "../../services/constants";
import {
  getReturnDatesById,
  getVaccineRecordsById,
  submitVaccineRecord,
} from "../../services/record";
import useUser from "../../hooks/useUser";

const { Meta } = Card;

const columns = [
  {
    title: <span class="vaccine_details">Vaccine Type</span>,
    dataIndex: "vaccineType",
    key: "vaccineType",
    render: (_, itm) => <>{VaccineTypes[VaccineTypeEnum[itm.vaccineType]]}</>,
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

const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const columnschild = [
  {
    title: <span class="vaccine_details">Vaccine Type</span>,
    dataIndex: "vaccineType",
    key: "vaccineType",
    render: (_, itm) => <>{VaccineTypes[VaccineTypeEnum[itm.vaccineType]]}</>,
  },
  {
    title: <span class="vaccine_details">Dosage</span>,
    dataIndex: "dosage",
    key: "dosage",
  },
  {
    title: <span class="vaccine_details">Return Date</span>,
    dataIndex: "returnDate",
    key: "returnDate",
  },
];
const datachild = [
  {
    key: "1",
    vaccine: <span class="return">Sarampa</span>,
    Dosage: <span class="return">2nd Dose</span>,
    Return_Date: <span class="return">02/08/2022</span>,
  },
];

const VaccinationUpdate = () => {
  const { id: childId } = useParams();
  const [size, setSize] = useState("large");
  const [vaccineRecords, setvaccineRecords] = useState([]);
  const [returnDates, setReturnDates] = useState([]);
  const user = useUser();
  const [kid, setKid] = useState();
  const dataweight = [
    {
      name: "January",
      One_Year: 240,
      Two_Year: 400,
      Three_Year: 600,
    },
    {
      name: "February",
      One_Year: 300,
      Two_Year: 350,
      Three_Year: 240,
    },
    {
      name: "March",
      One_Year: 500,
      Two_Year: 600,
      Three_Year: 650,
    },
    {
      name: "April",

      One_Year: 789,
      Two_Year: 400,
      Three_Year: 754,
    },
    {
      name: "May",

      One_Year: 890,
      Two_Year: 321,
      Three_Year: 678,
    },
    {
      name: "June",

      One_Year: 400,
      Two_Year: 700,
      Three_Year: 900,
    },
    {
      name: "July",

      One_Year: 690,
      Two_Year: 678,
      Three_Year: 890,
    },
    {
      name: "August",

      One_Year: 435,
      Two_Year: 678,
      Three_Year: 456,
    },
    {
      name: "September",

      One_Year: 890,
      Two_Year: 345,
      Three_Year: 567,
    },
    {
      name: "October",

      One_Year: 800,
      Two_Year: 899,
      Three_Year: 900,
    },
    {
      name: "November",

      One_Year: 1000,
      Two_Year: 289,
      Three_Year: 678,
    },
    {
      name: "December",

      One_Year: 800,
      Two_Year: 450,
      Three_Year: 800,
    },
  ];

  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  React.useEffect(() => {
    getChildById(childId).then((c) => setKid(c));
  }, [childId]);
  React.useEffect(() => {
    getVaccineRecordsById(childId).then((rs) => setvaccineRecords(rs));
  }, [childId]);
  React.useEffect(() => {
    getReturnDatesById(childId).then((rd) => setReturnDates(rd));
  }, [childId]);

  if (!kid) {
    return;
  }

  return (
    <div className="cover">
      <Row>
        <VaccinationNavbar />
      </Row>

      <Row style={{paddingTop: "80px"}}>
        <Link className="back-btn" to="/vaccinationchildren" underline="none">
          <button className="backbtn">Back </button>
        </Link>
      </Row>

      <Row>
        <Col span={10} style={{paddingTop: "80px", paddingLeft: "150px" }}>
          <Card
            style={{
              width: 400,
            }}
            cover={<img alt="example" src={image2} />}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title=<span className="custom-table-header">
                Amani Wirathma Wimalaweera
              </span>
            />
          </Card>
        </Col>
        <Col span={14} className="childtable" style={{ paddingTop: "80px" }}>
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
        <h1 style={{ color: "#4281f5" }}>Child Vaccination Record Card</h1>
      </Row>

      <Row>
        <Table
          columns={columns}
          dataSource={vaccineRecords}
          style={{ width: 2000, padding: "30px" }}
          pagination={false}
        />
      </Row>
      <Row>
        <h2 style={{ paddingLeft: "30px" }}>Return Date</h2>
      </Row>
      <Row className="returndate">
        <Table
          columns={columnschild}
          dataSource={returnDates}
          pagination={false}
          style={{
            width: "100%",
            paddingLeft: "20px",
            paddingRight: "20px",
            color: "red",
          }}
        />
        ;
      </Row>

      <Row
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          color: "#4281f5",
        }}
      >
        <h1>Your babies weight according to their first three year</h1>
      </Row>
      <Row style={{ paddingTop: "50px" }}>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LineChart
            width={1800}
            height={500}
            data={dataweight}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{ value: "Month", position: "insideBottom" }}
            />
            <YAxis
              label={{ value: "Year", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="One_Year"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Two_Year" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Three_Year" stroke="#f5aa42" />
          </LineChart>
        </Col>
      </Row>

      <Row className="reminder" style={{padding: '50px 0px  50px 0px'}}>
 
        <Col span={4} style={{ paddingLeft: "100px" }}>
          <Button type="primary" onClick={showModal1}>
            Update Details
          </Button>

          <Modal
            title={
              <h1 style={{ fontSize: "40px", textAlign: "center" }}>
                Updating Vaccination Details
              </h1>
            }
            onOk={handleOk1}
            onCancel={handleCancel1}
            open={isModalOpen1}
            cancelButtonProps={{ hidden: true }}
            okButtonProps={{ hidden: true }}
            width={1000}
          >
            <Form
              onFinish={(values) => {
                submitVaccineRecord({
                  vaccineRecord: {
                    vaccineType: values.vaccineType,
                    dosage: values.dosage,
                    location: user.centerName,
                    date: values.date.format("YYYY-MM-DD"),
                    weight: values.weight,
                    child: {
                      childId: childId,
                    },
                  },

                  returnDate: {
                    vaccineType: values.returnVaccineType,
                    dosage: values.returnDosage,
                    returnDate: values.returnDate.format("YYYY-MM-DD"),
                    child: {
                      childId: childId,
                    },
                  },
                }).then((v) => {
                  handleOk1();
                });
              }}
              labelCol={{
                span: 5,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
            >
              <h3>Update Details of Child Vaccination Record Card</h3>
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
              <Form.Item name="dosage" label="Dosage">
                <Input />
              </Form.Item>
              {/* <Form.Item name="location" label="Location">
                <Input />
              </Form.Item> */}
              <Form.Item name="date" label="Date">
                <DatePicker />
              </Form.Item>
              <h3>Return Date Details</h3>
              <Form.Item name="returnVaccineType" label="Vaccine Type">
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
              <Form.Item name="returnDosage" label="Dosage">
                <Input />
              </Form.Item>
              <Form.Item name="returnDate" label="Return Date">
                <DatePicker />
              </Form.Item>
              <h3>Child's Weight Details</h3>
              <Form.Item name="weight" label="Child's Weight">
                <Input />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" size="large" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Col>
        <Col span={4} style={{ paddingLeft: "100px" }}>
          <Button type="primary" onClick={showModal}>
            Update Weight
          </Button>

          <Modal
            title={
              <h1 style={{ fontSize: "40px", textAlign: "center" }}>
                Updating Vaccination Details
              </h1>
            }
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Update"
            cancelText="Cancel"
            cancelButtonProps={{ className: "custom-cancel-button" }}
            width={1000}
          >
            <div>
              <h3>Child's Weight Details</h3>
              <Input placeholder="Child's Weight" />;
              <Input placeholder="Month" />;
            </div>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default VaccinationUpdate;
