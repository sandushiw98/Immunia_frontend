import React, { useCallback } from "react";
import VaccinationNavbar from "../VaccinationNavbar/VaccinationNavbar";
import "./VaccinationDashboard.css";
import { Col, Row, Dropdown, Divider, Tag, DatePicker } from "antd";
import {
  Avatar,
  Button,
  Card,
  Table,
  Modal,
  TimePicker,
  Input,
  Space
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
import { getScheduleByDate, saveAllSchedule } from "../../services/schedule";
import useUser from "../../hooks/useUser";

function splitTimeRange(startTime, endTime, gapInMinutes, date, centerId) {
  const result = [];
  let currentTime = dayjs(startTime);
  const endTimeObj = dayjs(endTime);

  while (currentTime.isBefore(endTimeObj)) {
    const nextTime = currentTime.add(gapInMinutes, "minute");
    const endTimeInRange = nextTime.isBefore(endTimeObj)
      ? nextTime
      : endTimeObj;

    result.push({
      startTime: currentTime.format("HH:mm:ss"),
      endTime: endTimeInRange.format("HH:mm:ss"),
      scheduleDate: date.format("YYYY-MM-DD"),
      vaccineCenter: {
        id: centerId,
      },
    });

    currentTime = nextTime;
  }

  return result;
}

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

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setselectedDate] = useState(dayjs(Date.now()));
  const [schedules, setschedules] = useState([]);
  const user = useUser();
  const [scheduleData, setscheduleData] = useState({
    date: dayjs(Date.now()),
    morning: {
      startTime: dayjs("8:00:00", "HH:mm:ss"),
      endTime: dayjs("12:00:00", "HH:mm:ss"),
      gap: 30,
    },
    evening: {
      startTime: dayjs("13:00:00", "HH:mm:ss"),
      endTime: dayjs("17:00:00", "HH:mm:ss"),
      gap: 30,
    },
  });
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = useCallback(() => {
    console.log(scheduleData);
    const morningschedules = splitTimeRange(
      scheduleData.morning.startTime,
      scheduleData.morning.endTime,
      scheduleData.morning.gap,
      scheduleData.date,
      user.id
    );
    const eveningschedules = splitTimeRange(
      scheduleData.evening.startTime,
      scheduleData.evening.endTime,
      scheduleData.evening.gap,
      scheduleData.date,
      user.id
    );
    console.log(eveningschedules);
    // setschedules([...morningschedules, ...eveningschedules]);
    saveAllSchedule([...morningschedules, ...eveningschedules]).then((v) => {
      setselectedDate(scheduleData.date);
    });
    setIsModalOpen(false);
  }, [scheduleData]);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  React.useEffect(() => {
    if (user && selectedDate) {
      getScheduleByDate(user.id, selectedDate.format("YYYY-MM-DD")).then((v) =>
        setschedules(v)
      );
    }
  }, [selectedDate, user]);
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
            Customize schedule
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
                Customize Your Vaccination Center schedule
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
            <Space direction="vertical">
   
    
  </Space>
            </Row>
            <Row>
              <DatePicker
                value={scheduleData.date}
                onChange={(v) => {
                  setscheduleData((sd) => {
                    return { ...sd, date: v };
                  });
                }}
                defaultValue={dayjs(Date.now())}
              />
            </Row>
            <Row>
              <h2>Morning</h2>
            </Row>

            <Row>
              <Col style={{ paddingRight: "60px" }}>
                <TimePicker
                  value={scheduleData.morning.startTime}
                  onChange={(v) =>
                    setscheduleData((d) => {
                      return { ...d, morning: { ...d.evening, startTime: v } };
                    })
                  }
                  defaultValue={dayjs("8:00:00", "HH:mm:ss")}
                  size="large"
                  placeholder="Starting time"
                />
              </Col>
              <Col style={{ paddingRight: "180px" }}>
                <TimePicker
                  value={scheduleData.morning.endTime}
                  onChange={(v) =>
                    setscheduleData((d) => {
                      return { ...d, morning: { ...d.morning, endTime: v } };
                    })
                  }
                  defaultValue={dayjs("12:00:00", "HH:mm:ss")}
                  size="large"
                  placeholder="Ending time"
                />
              </Col>
              <Col>
                <Input
                  onChange={(e) =>
                    setscheduleData((v) => {
                      return {
                        ...v,
                        morning: { ...v.morning, gap: e.target.value },
                      };
                    })
                  }
                  value={scheduleData.morning.gap}
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
                  value={scheduleData.evening.startTime}
                  onChange={(v) =>
                    setscheduleData((d) => {
                      return { ...d, evening: { ...d.evening, startTime: v } };
                    })
                  }
                  defaultValue={dayjs("13:00:00", "HH:mm:ss")}
                  size="large"
                  placeholder="Starting time"
                />
              </Col>
              <Col style={{ paddingRight: "180px" }}>
                <TimePicker
                  value={scheduleData.evening.endTime}
                  onChange={(v) =>
                    setscheduleData((d) => {
                      return { ...d, evening: { ...d.evening, endTime: v } };
                    })
                  }
                  defaultValue={dayjs("17:00:00", "HH:mm:ss")}
                  size="large"
                  placeholder="Ending time"
                />
              </Col>
              <Col>
                <Input
                  onChange={(e) =>
                    setscheduleData((v) => {
                      return {
                        ...v,
                        evening: { ...v.evening, gap: e.target.value },
                      };
                    })
                  }
                  value={scheduleData.evening.gap}
                  style={{ width: "360px", height: "40px" }}
                  placeholder="Time gap that you wish to allocate for one child (Min)"
                />
                ;
              </Col>
            </Row>
          </Modal>
        </div>
      </Row>

      <Row>
        <Col>
          <h1 style={{ paddingLeft: "60px" }}>Schedule</h1>
        </Col>
        <Col>
          <DatePicker value={selectedDate} onChange={setselectedDate} />
        </Col>
      </Row>

      <Row
        gutter={[16, 24]}
        style={{
          padding: "30px 60px 30px 60px",
          background: "#c7d3d9",
          borderRadius: "0.5",
        }}
      >
        {schedules.map((s, ind) => {
          return (
            <Col key={ind} className="gutter-row" span={4}>
              <div
                style={{
                  background: s.status ? "red" : "#0092ff",
                  padding: "8px 0",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {s.startTime}- {s.endTime}
              </div>
            </Col>
          );
        })}
      </Row>
      
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
