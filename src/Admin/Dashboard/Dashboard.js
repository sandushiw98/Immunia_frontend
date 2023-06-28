import { Button, Image, Space, Tooltip } from "antd";
import { Col, Row, Card } from "antd";
import React from "react";
import {
  AreaChart,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  CartesianGrid,
  Area,
} from "recharts";
import './Dashboard.css'
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { BankOutlined, CarryOutOutlined, CheckSquareOutlined, MedicineBoxOutlined, TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const data1 = [
  {
    name: "Western",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Southern",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Uva",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "North Central",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Wayamba",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sabaragamuwa",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Central",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Eastern",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Northern",
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

const data3 = [
  {
    name: "New Born",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "1-2 Mon",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "4 Mon",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "6 Mon",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "7-11 Mon",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "12-23 Mon",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "2-3 Yr",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "4-6 Yr",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "7-10 Yr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "11-12 Yr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "13-18 Yr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
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
      <AdminNavbar />
      <Row gutter={[32]} style={{ padding: '120px 20px 20px 20px' }}>
        <Col span={4}>
          <Card
          className="dashboard-cards"
            bordered={false}
            style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'}}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Space>
                <BankOutlined style={{ fontSize: '20px' }} />
                <span style={{ fontWeight: 'bolder' }}>Vaccination Centres</span>
              </Space>
            </div>
            <Col span={24} style={{ textAlign: 'right', fontWeight: 'bolder' }}>
              <span style={{ fontSize: '30px' }}>2234</span>
            </Col>
          </Card>
        </Col>
        <Col span={4}>
          <Card
          className="dashboard-cards"
            bordered={false}
            style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Space>
                <TeamOutlined style={{ fontSize: '20px' }} />
                <span style={{ fontWeight: 'bolder' }}>Registered Parents</span>
              </Space>
            </div>
            <Col span={24} style={{ textAlign: 'right', fontWeight: 'bolder' }}>
              <span style={{ fontSize: '30px' }}>223</span>
            </Col>
          </Card>
        </Col>
        <Col span={4}>
          <Card
          className="dashboard-cards"
            bordered={false}
            style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Space>
                <TeamOutlined style={{ fontSize: '20px' }} />
                <span style={{ fontWeight: 'bolder' }}>Registered Children</span>
              </Space>
            </div>
            <Col span={24} style={{ textAlign: 'right', fontWeight: 'bolder' }}>
              <span style={{ fontSize: '30px' }}>430</span>
            </Col>
          </Card>
        </Col>
        <Col span={4}>
          <Card
          className="dashboard-cards"
            bordered={false}
            style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Space>
                <CarryOutOutlined style={{ fontSize: '20px' }} />
                <span style={{ fontWeight: 'bolder' }}>Monthly Appoinments</span>
              </Space>
            </div>
            <Col span={24} style={{ textAlign: 'right', fontWeight: 'bolder' }}>
              <span style={{ fontSize: '30px' }}>430</span>
            </Col>
          </Card>
        </Col>
        <Col span={4}>
          <Card
          className="dashboard-cards"
            bordered={false}
            style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Space>
                <MedicineBoxOutlined style={{ fontSize: '20px' }} />
                <span style={{ fontWeight: 'bolder' }}>Monthly Administered Vaccines</span>
              </Space>
            </div>
            <Col span={24} style={{ textAlign: 'right', fontWeight: 'bolder' }}>
              <span style={{ fontSize: '30px' }}>420</span>
            </Col>
          </Card>
        </Col>
        <Col span={4}>
          <Card
          className="dashboard-cards"
            bordered={false}
            style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Space>
                <CheckSquareOutlined style={{ fontSize: '20px' }} />
                <span style={{ fontWeight: 'bolder' }}>Available Vaccines</span>
              </Space>
            </div>
            <Col span={24} style={{ textAlign: 'right', fontWeight: 'bolder' }}>
              <span style={{ fontSize: '30px' }}>420</span>
            </Col>
          </Card>
        </Col>
      </Row>


      <Row gutter={[32]} style={{ padding: '40px 20px 20px 20px' }}>
        <Col span={12} className="donor-details">
          <Row style={{ padding: '0px 50px  40px 0px' }}>
            <Col span={24}>
              <Card type="inner" title="Donations" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', border: '2px solid grey' }} extra={<a href="#">More</a>}>
                <Row >
                  <Col span={8} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                    <Row ><Col span={24}><span style={{ fontSize: '20px' }}>For Hospitals</span></Col></Row>
                    <Row><Col span={24}><span style={{ fontSize: '30px' }}>220 000 LKR</span></Col></Row>
                  </Col>
                  <Col span={8} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                    <Row ><Col span={24}><span style={{ fontSize: '20px' }}>For MOH</span></Col></Row>
                    <Row><Col span={24}><span style={{ fontSize: '30px' }}>110 000 LKR</span></Col></Row>
                  </Col>
                  <Col span={8} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                    <Row ><Col span={24}><span style={{ fontSize: '20px' }}>Total Donations</span></Col></Row>
                    <Row><Col span={24}><span style={{ fontSize: '30px' }}>330 000 LKR</span></Col></Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row style={{ padding: '0px 50px  20px 0px' }}>
            <Col span={24}>
              <Card title="Reviews" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', border: '2px solid grey' }}>
                <Row>
                  <Col span={5} >
                    <Row>
                      <Col span={24}>
                        <Image
                          className="parentimage"
                          width={60}
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <span style={{ fontSize: '16px', fontWeight: 'bolder' }}>Sandushi Jasinghe</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={10}>
                        <span>26/07/2023</span>
                      </Col>
                      <Col span={2}></Col>
                      <Col span={12}>
                        <span>3.15 P.M</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={19} style={{ paddingLeft: '15px' }}>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
                      merninisti licere mihi ista probare, quae sunt a te dicta? Refert
                      tamen, quo modo.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te
                      dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <Row className="replybutton" style={{ paddingTop: '30px' }}>
                      <Link to="/Reviews">
                        <Button type="primary">More</Button>
                      </Link>

                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col span={12} >
          <Row>
            <Col span={24} style={{ padding: '0px 0px 30px 0px' }}>
              <h1 style={{ textAlign: "center" }}>Who Receive Vaccines</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: "350px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data3}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={[32]} style={{ padding: '40px 20px 70px 20px' }}>
        <Col span={12} className="donor-details">
          <Row style={{ padding: '0px 50px  40px 0px' }}>
            <Col span={24}>
              <Row>
                <Col span={24}>
                  <h1 style={{ textAlign: "center" }}>Monthly Vaccines Count</h1>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "400px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      width={500}
                      height={400}
                      data={data1}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                  </ResponsiveContainer>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col span={12} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', border: '2px solid grey' }}>
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
      </Row>
    </>
  );
};

export default Dashbaord;
