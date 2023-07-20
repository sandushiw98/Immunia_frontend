import React from "react";
import VaccinationNavbar from "../VaccinationNavbar/VaccinationNavbar";
import "./VaccinationDashboard.css";
import { Col, Row, Dropdown, Divider, Tag } from "antd";
import {
  Avatar,
  Button,
  Card,
  Space,
  Table,
  Modal,
  TimePicker,
  Input,
} from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  CheckOutlined,
  FileTextOutlined,
  SolutionOutlined,
  DollarOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const data2 = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "August",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "September",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "October",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "November",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "December",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const style = {
  background: "#0092ff",
  padding: "8px 0",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "bold",
};

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
        children: [
          {
            text: "Yellow",
            value: "Yellow",
          },
          {
            text: "Pink",
            value: "Pink",
          },
        ],
      },
      {
        text: "Category 2",
        value: "Category 2",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
  },
  {
    title: "Donor Name",
    dataIndex: "donorname",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Amount (Rs)",
    dataIndex: "amount",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Donor Contact Number",
    dataIndex: "mobile",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Donor Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
  },
];
const data = [
  {
    key: "1",
    date: "23/10/2023",
    donorname: "Navod Shehan",
    amount: "200,000",
    mobile: "0773294197",
    address: "sulakshi, Temple Road, Colombo 8",
  },
  {
    key: "2",
    date: "23/10/2023",
    donorname: "Navod Shehan",
    amount: "200,000",
    mobile: "0773294197",
    address: "sulakshi, Temple Road, Colombo 8",
  },
  {
    key: "3",
    date: "23/10/2023",
    donorname: "Navod Shehan",
    amount: "200,000",
    mobile: "0773294197",
    address: "sulakshi, Temple Road, Colombo 8",
  },
  {
    key: "4",
    date: "23/10/2023",
    donorname: "Navod Shehan",
    amount: "200,000",
    mobile: "0773294197",
    address: "sulakshi, Temple Road, Colombo 8",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const VaccinationDashboard = () => {
  const [inputs, setInputs] = useState([{ id: 1, value: "" }]);
  const [inputs2, setInputs2] = useState([{ id: 1, value: "" }]);
  const [inputs3, setInputs3] = useState([{ id: 1, value: "" }]);
  const [inputs4, setInputs4] = useState([{ id: 1, value: "" }]);
  const [inputs5, setInputs5] = useState([{ id: 1, value: "" }]);
  const [inputs6, setInputs6] = useState([{ id: 1, value: "" }]);
  const [inputs7, setInputs7] = useState([{ id: 1, value: "" }]);


  const handleDeleteInput1 = (id) => {
    const updatedInputs = inputs.filter((input) => input.id !== id);
    setInputs(updatedInputs);
  };
  const handleAddInput1 = () => {
    const newId = inputs.length > 0 ? inputs[inputs.length - 1].id + 1 : 1;
    setInputs([...inputs, { id: newId, value: "" }]);
  };
  const handleDeleteInput2 = (id) => {
    const updatedInputs = inputs2.filter((input) => input.id !== id);
    setInputs2(updatedInputs);
  };
  const handleAddInput2 = () => {
    const newId = inputs2.length > 0 ? inputs2[inputs2.length - 1].id + 1 : 1;
    setInputs2([...inputs2, { id: newId, value: "" }]);
  };

  const handleDeleteInput3 = (id) => {
    const updatedInputs = inputs3.filter((input) => input.id !== id);
    setInputs3(updatedInputs);
  };
  const handleAddInput3 = () => {
    const newId = inputs3.length > 0 ? inputs3[inputs3.length - 1].id + 1 : 1;
    setInputs3([...inputs3, { id: newId, value: "" }]);
  };

  const handleDeleteInput4 = (id) => {
    const updatedInputs = inputs4.filter((input) => input.id !== id);
    setInputs4(updatedInputs);
  };
  const handleAddInput4= () => {
    const newId = inputs4.length > 0 ? inputs4[inputs4.length - 1].id + 1 : 1;
    setInputs4([...inputs4, { id: newId, value: "" }]);
  };
  const handleDeleteInput5 = (id) => {
    const updatedInputs = inputs5.filter((input) => input.id !== id);
    setInputs5(updatedInputs);
  };
  const handleAddInput5= () => {
    const newId = inputs5.length > 0 ? inputs5[inputs5.length - 1].id + 1 : 1;
    setInputs5([...inputs5, { id: newId, value: "" }]);
  };
  const handleDeleteInput6 = (id) => {
    const updatedInputs = inputs6.filter((input) => input.id !== id);
    setInputs6(updatedInputs);
  };
  const handleAddInput6= () => {
    const newId = inputs6.length > 0 ? inputs6[inputs6.length - 1].id + 1 : 1;
    setInputs6([...inputs6, { id: newId, value: "" }]);
  };

  const handleDeleteInput7 = (id) => {
    const updatedInputs = inputs7.filter((input) => input.id !== id);
    setInputs7(updatedInputs);
  };
  const handleAddInput7= () => {
    const newId = inputs7.length > 0 ? inputs7[inputs7.length - 1].id + 1 : 1;
    setInputs7([...inputs7, { id: newId, value: "" }]);
  };






  const handleChange = (id, value) => {
    const updatedInputs = inputs.map((input) =>
      input.id === id ? { ...input, value } : input
    );
    setInputs(updatedInputs);
  };

  const [numInputs, setNumInputs] = useState(1);

  // const handleAddInput = () => {
  //   setNumInputs((prevNum) => prevNum + 1);
  // };

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

  return (
    <>
      <VaccinationNavbar />

      <Row style={{ paddingTop: "100px" }}>
        <Col className="card-container-parent" span={6}>
          <Card
            className="parent-card"
            bordered={false}
            style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Space>
                <CheckOutlined style={{ fontSize: "20px", color: "#1779e8" }} />
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "bolder",
                    color: "#1779e8",
                  }}
                >
                  Monthly Vaccines Adminstered
                </span>
              </Space>
            </div>
            <Col span={24} style={{ textAlign: "right", fontWeight: "bolder" }}>
              <span style={{ fontSize: "35px", color: "#1779e8" }}>2</span>
            </Col>
          </Card>
        </Col>
        <Col className="card-container-parent" span={6}>
          <Card
            className="parent-card"
            bordered={false}
            style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Space>
                <FileTextOutlined
                  style={{ fontSize: "20px", color: "#1779e8" }}
                />
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    color: "#1779e8",
                  }}
                >
                  Vaccines Avialble
                </span>
              </Space>
            </div>
            <Col span={24} style={{ textAlign: "right", fontWeight: "bolder" }}>
              <span style={{ fontSize: "35px", color: "#1779e8" }}>2</span>
            </Col>
          </Card>
        </Col>
        <Col className="card-container-parent" span={6}>
          <Card
            className="parent-card"
            bordered={false}
            style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Space>
                <SolutionOutlined
                  style={{ fontSize: "20px", color: "#1779e8" }}
                />
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    color: "#1779e8",
                  }}
                >
                  Monthly Appointments
                </span>
              </Space>
            </div>
            <Col span={24} style={{ textAlign: "right", fontWeight: "bolder" }}>
              <span style={{ fontSize: "35px", color: "#1779e8" }}>2</span>
            </Col>
          </Card>
        </Col>
        <Col className="card-container-parent" span={6}>
          <Card
            className="parent-card"
            bordered={false}
            style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Space>
                <DollarOutlined
                  style={{ fontSize: "20px", color: "#1779e8" }}
                />
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    color: "#1779e8",
                  }}
                >
                  Donations(Rs)
                </span>
              </Space>
            </div>
            <Col span={24} style={{ textAlign: "right", fontWeight: "bolder" }}>
              <span style={{ fontSize: "35px", color: "#1779e8" }}>2</span>
            </Col>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          paddingRight: "60px",
          paddingTop: "30px",
        }}
      >
        <div>
          <Button type="primary" onClick={showModal}>
            Customize Schedule
          </Button>
          <Modal
            title={
              <span
                style={{
                  fontSize: "24px",
                  color: "green",
                  textAlign: "center",
                }}
              >
                Customize Your Vaccinationa Center Schedule
              </span>
            }
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            okText="Add"
            cancelText="Cancel"
            cancelButtonProps={{ className: "custom-cancel-button" }}
          >
            <Row>
              <h2>Morning</h2>
            </Row>
            <Row>
              <Col style={{ paddingRight: "60px" }}>
                <TimePicker
                  defaultValue={dayjs("12:08:23", "HH:mm:ss")}
                  size="large"
                  placeholder="Starting time"
                />
              </Col>
              <Col style={{ paddingRight: "180px" }}>
                <TimePicker
                  defaultValue={dayjs("12:08:23", "HH:mm:ss")}
                  size="large"
                  placeholder="Ending time"
                />
              </Col>
              <Col>
                <Input
                  style={{ width: "360px", height: "40px" }}
                  placeholder="Time gap that you wish to allocate for one child (Min)"
                />
                ;
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>Lunch Break</h2>{" "}
              <span style={{ paddingLeft: "10px", fontSize: "24px" }}>
                <CoffeeOutlined />
              </span>
            </Row>
            <Row>
              <h2>Evening</h2>
            </Row>
            <Row style={{ paddingBottom: "20px" }}>
              <Col style={{ paddingRight: "60px" }}>
                <TimePicker
                  defaultValue={dayjs("12:08:23", "HH:mm:ss")}
                  size="large"
                  placeholder="Starting time"
                />
              </Col>
              <Col style={{ paddingRight: "180px" }}>
                <TimePicker
                  defaultValue={dayjs("12:08:23", "HH:mm:ss")}
                  size="large"
                  placeholder="Ending time"
                />
              </Col>
              <Col>
                <Input
                  style={{ width: "360px", height: "40px" }}
                  placeholder="Time gap that you wish to allocate for one child (Min)"
                />
                ;
              </Col>
            </Row>

            <Row>
              <h3>Select Vaccination Date</h3>
              <p>
                You can schedule your vaccination days. Fill the vaccination
                name accroding to your relevant vaccinations days.
              </p>
              <br />
            </Row>
            <Row>
              <Col>
                {" "}
                <Space size={[0, 8]} wrap>
                  <Tag
                    color="green"
                    style={{
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      width: "120px",
                    }}
                  >
                    Monday
                  </Tag>
                </Space>
              </Col>
              <Col>
                {inputs.map((input) => (
                  <div
                    key={input.id}
                    style={{ marginBottom: "8px", paddingRight: "10px" }}
                  >
                    <Input
                      value={input.value}
                      placeholder={`Vaccine ${input.id}`}
                      style={{ width: "100px", marginRight: "8px" }}
                      onChange={(e) => handleChange(input.id, e.target.value)}
                    />
                    <Button
                      type="primary"
                      danger
                      onClick={() => handleDeleteInput1(input.id)}
                      style={{ height: "35px" }}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </Col>
              <Col>
                <Button type="primary" onClick={handleAddInput1}>
                  Add Input
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Space size={[0, 8]} wrap>
                  <Tag
                    color="red"
                    style={{
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      width: "120px",
                    }}
                  >
                    Tuesday
                  </Tag>
                </Space>
              </Col>
              <Col>
                {inputs2.map((input) => (
                  <div
                    key={input.id}
                    style={{ marginBottom: "8px", paddingRight: "10px" }}
                  >
                    <Input
                      value={input.value}
                      placeholder={`Vaccine ${input.id}`}
                      style={{ width: "100px", marginRight: "8px" }}
                      onChange={(e) => handleChange(input.id, e.target.value)}
                    />
                    <Button
                      type="primary"
                      danger
                      onClick={() => handleDeleteInput2(input.id)}
                      style={{ height: "35px" }}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </Col>
              <Col>
                <Button type="primary" onClick={handleAddInput2}>
                  Add Input
                </Button>
              </Col>
            </Row> 
            <Row>
              <Col>
                {" "}
                <Space size={[0, 8]} wrap>
                  <Tag
                    color="magenta"
                    style={{
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      width: "120px",
                    }}
                  >
                    Wednesday
                  </Tag>
                </Space>
              </Col>
              <Col>
                {inputs3.map((input) => (
                  <div
                    key={input.id}
                    style={{ marginBottom: "8px", paddingRight: "10px" }}
                  >
                    <Input
                      value={input.value}
                      placeholder={`Vaccine ${input.id}`}
                      style={{ width: "100px", marginRight: "8px" }}
                      onChange={(e) => handleChange(input.id, e.target.value)}
                    />
                    <Button
                      type="primary"
                      danger
                      onClick={() => handleDeleteInput3(input.id)}
                      style={{ height: "35px" }}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </Col>
              <Col>
                <Button type="primary" onClick={handleAddInput3}>
                  Add Input
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Space size={[0, 8]} wrap>
                  <Tag
                    color="purple"
                    style={{
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      width: "120px",
                    }}
                  >
                    Thursday
                  </Tag>
                </Space>
              </Col>
              <Col>
                {inputs4.map((input) => (
                  <div
                    key={input.id}
                    style={{ marginBottom: "8px", paddingRight: "10px" }}
                  >
                    <Input
                      value={input.value}
                      placeholder={`Vaccine ${input.id}`}
                      style={{ width: "100px", marginRight: "8px" }}
                      onChange={(e) => handleChange(input.id, e.target.value)}
                    />
                    <Button
                      type="primary"
                      danger
                      onClick={() => handleDeleteInput4(input.id)}
                      style={{ height: "35px" }}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </Col>
              <Col>
                <Button type="primary" onClick={handleAddInput4}>
                  Add Input
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                {" "}
                <Space size={[0, 8]} wrap>
                  <Tag
                    color="blue"
                    style={{
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      width: "120px",
                    }}
                  >
                    Friday
                  </Tag>
                </Space>
              </Col>
              <Col>
                {inputs5.map((input) => (
                  <div
                    key={input.id}
                    style={{ marginBottom: "8px", paddingRight: "10px" }}
                  >
                    <Input
                      value={input.value}
                      placeholder={`Vaccine ${input.id}`}
                      style={{ width: "100px", marginRight: "8px" }}
                      onChange={(e) => handleChange(input.id, e.target.value)}
                    />
                    <Button
                      type="primary"
                      danger
                      onClick={() => handleDeleteInput5(input.id)}
                      style={{ height: "35px" }}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </Col>
              <Col>
                <Button type="primary" onClick={handleAddInput5}>
                  Add Input
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Space size={[0, 8]} wrap>
                  <Tag
                    color="volcano"
                    style={{
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      width: "120px",
                    }}
                  >
                    Saturday
                  </Tag>
                </Space>
              </Col>
              <Col>
                {inputs6.map((input) => (
                  <div
                    key={input.id}
                    style={{ marginBottom: "8px", paddingRight: "10px" }}
                  >
                    <Input
                      value={input.value}
                      placeholder={`Vaccine ${input.id}`}
                      style={{ width: "100px", marginRight: "8px" }}
                      onChange={(e) => handleChange(input.id, e.target.value)}
                    />
                    <Button
                      type="primary"
                      danger
                      onClick={() => handleDeleteInput6(input.id)}
                      style={{ height: "35px" }}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </Col>
              <Col>
                <Button type="primary" onClick={handleAddInput6}>
                  Add Input
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Space size={[0, 8]} wrap>
                  <Tag
                    color="gold"
                    style={{
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      width: "120px",
                    }}
                  >
                    Sunday
                  </Tag>
                </Space>
              </Col>
              <Col>
                {inputs7.map((input) => (
                  <div
                    key={input.id}
                    style={{ marginBottom: "8px", paddingRight: "10px" }}
                  >
                    <Input
                      value={input.value}
                      placeholder={`Vaccine ${input.id}`}
                      style={{ width: "100px", marginRight: "8px" }}
                      onChange={(e) => handleChange(input.id, e.target.value)}
                    />
                    <Button
                      type="primary"
                      danger
                      onClick={() => handleDeleteInput7(input.id)}
                      style={{ height: "35px" }}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </Col>
              <Col>
                <Button type="primary" onClick={handleAddInput7}>
                  Add Input
                </Button>
              </Col>
            </Row>
       
       
          </Modal>
        </div>
      </Row>
      
      <Row>
        <h1 style={{ paddingLeft: "60px" }}>Schedule</h1>
      </Row>
      <Row
        gutter={[16, 24]}
        style={{
          padding: "30px 60px 30px 60px",
          background: "#c7d3d9",
          borderRadius: "0.5",
        }}
      >
        <Col className="gutter-row" span={4}>
          <div style={style}>9.00 A.M- 9.15 A.M</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}> 9.15 A.M - 9.30 A.M</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      {/* <Row>
        <Col
          span={24}
          style={{ padding: "50px 40px 30px 40px", width: "100%" }}
        >
          <Card
            style={{
              width: "100%",
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
                Request Appointments
              </span>
              <Button type="primary">Click Here to See</Button>
            </div>
          </Card>
        </Col>
      </Row> */}
      <Row style={{ padding: "20px 40px 30px 70px" }}>
        <h1>Donation Details</h1>
      </Row>
      <Row style={{ paddingBottom: "30px" }}>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          pagination={false}
          style={{ width: "100%", paddingLeft: "40px", paddingRight: "40px" }}
        />
      </Row>
      <Row style={{ paddingBottom: "30px", paddingLeft: "1700px" }}>
        <Link to="../VaccinationDonation">
          <Button type="primary">See More Donations</Button>
        </Link>
      </Row>
      <Row style={{ paddingBottom: "60px" }}>
        <Col
          span={12}
          style={{
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
            border: "2px solid grey",
          }}
        >
          <Row>
            <Col span={24}>
              <h1 style={{ textAlign: "center" }}>Issued Vaccines</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: "400px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={800} height={1000}>
                  <Pie
                    data={data1}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={180}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Col>
        <Col
          span={12}
          style={{
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
            border: "2px solid grey",
          }}
        >
          <Row>
            <Col span={24}>
              <h1 style={{ textAlign: "center" }}>Monthly Vaccine Count</h1>
            </Col>
          </Row>
          <Row style={{ paddingTop: "40px" }}>
            <Col span={24} style={{ height: "400px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={100} height={40} data={data2}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="uv" fill="#1779e8" />
                </BarChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default VaccinationDashboard;
