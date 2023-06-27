import { Table } from "antd";
import { Col, Row, Card } from "antd";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import userpic from "../../assets/images/user.png";
import './Dashboard.css'
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const data2 = [
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

const columns = [
  {
    title: "Donor Name",
    dataIndex: "DonorName",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
    className: "column1",
  },
  {
    title: "Donation Date",
    dataIndex: "Donation_Date",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
    className: "column2",
  },
  {
    title: "Donate For",
    dataIndex: "Donate_For",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
    className: "column3",
  },
  {
    title: "Amount Rs.",
    dataIndex: "Amount",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    className: "column4",
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

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

function getBarColor(index) {
  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffbb28",
    "#ff8042",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
  ];
  return colors[index % colors.length];
}

const Dashbaord = () => {
  return (
    <>
      <AdminNavbar/>
      <Row gutter={[16]} style={{paddingTop:'100px'}}>
        <Col span={4}>
          <Card
            title="Number of Registered Centres"
            bordered={false}
            style={{ backgroundColor: "#ff8042" }}
          >
            34
          </Card>
        </Col>
        <Col span={4}>
          <Card
            title="Number of Registered Parents"
            bordered={false}
            style={{ backgroundColor: "#e34d73" }}
          >
            200
          </Card>
        </Col>
        <Col span={4}>
          <Card
            title="Number of Registered Childrens"
            bordered={false}
            style={{ backgroundColor: "#82ca9d" }}
          >
            324
          </Card>
        </Col>
        <Col span={4}>
          <Card
            title="Monthly Appointment"
            bordered={false}
            style={{ backgroundColor: "#ffbb28" }}
          >
            500
          </Card>
        </Col>
        <Col span={4}>
          <Card
            title="Monthly Vaccines Administered"
            bordered={false}
            style={{ backgroundColor: "#00C49F" }}
          >
            743
          </Card>
        </Col>
        <Col span={4}>
          <Card
            title="Number of Vaccines Available"
            bordered={false}
            style={{ backgroundColor: "#a867b5" }}
          >
            543
          </Card>
        </Col>
      </Row>
      <Row gutter={[8]} style={{ marginTop: "30px", height: "900px" }}>
        <Col span={12} className="who-receive-vaccines">
          <Row>
            <Col span={24}>
              <h1 style={{ textAlign: "center" }}>Who Receive Vaccines</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: "700px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data1}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Col>
        <Col span={12} className="donor-details">
          <Card type="inner" title="Donations" extra={<a href="#">More</a>}>
            <h3>For Hospitals:</h3>
            <h3>For MOH:</h3>
            <h3>Total Donations:</h3>
          </Card><br/><br/>

          <Card title="Reports">
            <Card
              type="inner"
              title="Lakshmi Jasinghe"
              extra={<a href="#">More Reviews</a>}
            >
              <Row>
                <Row gutter={48}>
                  <Col span={4}  className="userimage">
                    {/* <h3>Parent ID</h3> */}
                    <img
                      src={userpic}
                      alt="login"
                      style={{ width: "40%", height: "60%" }}
                    />
                  </Col>
                  <Col span={4}>
                    <h3>Parent ID</h3>
                    <p>P_1234 </p>
                  </Col>
                  <Col span={6}>
                    <h3>To whom</h3>
                    <p>Lady Ridgway Hospital  </p>
                  </Col>
                  <Col span={5}>
                    <h3>Date </h3>
                    <p>23rd september 2023 </p>
                  </Col>
                  <Col span={4}>
                    <h3>Time</h3>
                    <p>10.23 a.m</p>
                  </Col>
                </Row>
                <Row>
                <Col span={24}>
              <h3 style={{ textAlign: "center" }}>Description</h3>
              <p>TI recently visited XYZ Vaccination Centre to receive my COVID-19 vaccine, and I would like to share my review of the experience.Location and Facilities:XYZ Vaccination Centre is conveniently located in the heart of City XYZ. The centre is easily accessible by public transportation and offers ample parking space for those who prefer to drive. The facility is clean, well-maintained, and adheres to all necessary safety protocols. The waiting area is comfortable, with seating arrangements that allow for social distancing.</p>
            </Col>
                </Row>
              </Row>
            </Card>
           
          </Card>
        </Col>
      </Row>
      <Row style={{ height: "500px" }}>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            pagination={false}
            className="table-container"
          />
        </Col>
      </Row>
      <Row gutter={[8]} style={{ marginTop: "30px", height: "500px" }}>
        <Col span={12} className="issued-vaccines">
          <Row>
            <Col span={24}>
              <h1 style={{ textAlign: "center" }}>Iassued Vaccines</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: "400px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={800} height={1000}>
                  <Pie
                    data={data2}
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
        <Col span={12} className="monthly-vaccine-count">
          <Row>
            <Col span={24}>
              <h1 style={{ textAlign: "center" }}>Monthly Vaccines Count</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: "400px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data1}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="uv" fill="#ebb594" />

                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getBarColor(index)} />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Dashbaord;
