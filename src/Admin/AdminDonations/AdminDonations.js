import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { Col, Row, Card, Space } from "antd";
import { Table } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { BankOutlined } from "@ant-design/icons";
import './AdminDonations.css'

const data = [
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
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "September",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "October",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "November",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "December",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const AdminDonations = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: "0",
      donorname: "Sunil Weraduwa",
      receiver: "National Hospital Colombo",
      date: "23/5/2024",
      time: "10.34 A.M",
      amount: "120,000",
      email: "sunil@gmail.com",
      contactnumber: "0752345678",
      location: "Matara",
    },
    {
      id: "0",
      donorname: "Sunil Weraduwa",
      receiver: "National Hospital Colombo",
      date: "23/5/2024",
      time: "10.34 A.M",
      amount: "120,000",
      email: "sunil@gmail.com",
      contactnumber: "0752345678",
      location: "Matara",
    },
    {
      id: "0",
      donorname: "Sunil Weraduwa",
      receiver: "National Hospital Colombo",
      date: "23/5/2024",
      time: "10.34 A.M",
      amount: "120,000",
      email: "sunil@gmail.com",
      contactnumber: "0752345678",
      location: "Matara",
    },
    {
      id: "0",
      donorname: "Sunil Weraduwa",
      receiver: "National Hospital Colombo",
      date: "23/5/2024",
      time: "10.34 A.M",
      amount: "120,000",
      email: "sunil@gmail.com",
      contactnumber: "0752345678",
      location: "Matara",
    },
    {
      id: "0",
      donorname: "Sunil Weraduwa",
      receiver: "National Hospital Colombo",
      date: "23/5/2024",
      time: "10.34 A.M",
      amount: "120,000",
      email: "sunil@gmail.com",
      contactnumber: "0752345678",
      location: "Matara",
    },
    {
      id: "0",
      donorname: "Sunil Weraduwa",
      receiver: "National Hospital Colombo",
      date: "23/5/2024",
      time: "10.34 A.M",
      amount: "120,000",
      email: "sunil@gmail.com",
      contactnumber: "0752345678",
      location: "Matara",
    },
    {
      id: "0",
      donorname: "Sunil Weraduwa",
      receiver: "National Hospital Colombo",
      date: "23/5/2024",
      time: "10.34 A.M",
      amount: "120,000",
      email: "sunil@gmail.com",
      contactnumber: "0752345678",
      location: "Matara",
    },
    {
      id: "0",
      donorname: "Sunil Weraduwa",
      receiver: "National Hospital Colombo",
      date: "23/5/2024",
      time: "10.34 A.M",
      amount: "120,000",
      email: "sunil@gmail.com",
      contactnumber: "0752345678",
      location: "Matara",
    },
  ]);

  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const columns = [
    {
      title: "Donation ID",
      dataIndex: "id",
      filters: [
        {
          text: "1",
          value: "1",
        },
        {
          text: "2",
          value: "2",
        },
      ],
      filteredValue: filteredInfo.id || null,
      onFilter: (value, record) => record.appointments.includes(value),
      sorter: (a, b) => a.id.length - b.id.length,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Donor Name",
      dataIndex: "donorname",
      //   width: "30%",
      sorter: (a, b) => a.donorname - b.donorname,
      sortOrder: sortedInfo.columnKey === "donorname" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Donor Email",
      dataIndex: "email",
      sorter: (a, b) => a.email - b.email,
      sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Donor Conatch Number",
      dataIndex: "contactnumber",
      sorter: (a, b) => a.contactnumber - b.contactnumber,
      sortOrder:
        sortedInfo.columnKey === "contactnumber" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Donor Location",
      dataIndex: "location",
      filters: [
        {
          text: "Boralla",
          value: "Boralla",
        },
        {
          text: "Maradana",
          value: "Maradana",
        },
      ],
      filteredValue: filteredInfo.location || null,
      onFilter: (value, record) => record.location.includes(value),
      sorter: (a, b) => a.location.length - b.location.length,
      sortOrder: sortedInfo.columnKey === "location" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Receiver",
      dataIndex: "receiver",
      filters: [
        {
          text: "Boralla",
          value: "Boralla",
        },
        {
          text: "Maradana",
          value: "Maradana",
        },
      ],
      filteredValue: filteredInfo.receiver || null,
      onFilter: (value, record) => record.receiver.includes(value),
      sorter: (a, b) => a.receiver.length - b.receiver.length,
      sortOrder: sortedInfo.columnKey === "receiver" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Amount Rs.",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
      sortOrder: sortedInfo.columnKey === "amount" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date",
      dataIndex: "date",
      filters: [
        {
          text: "Boralla",
          value: "Boralla",
        },
        {
          text: "Maradana",
          value: "Maradana",
        },
      ],
      filteredValue: filteredInfo.date || null,
      onFilter: (value, record) => record.date.includes(value),
      sorter: (a, b) => a.date.length - b.date.length,
      sortOrder: sortedInfo.columnKey === "date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Time",
      dataIndex: "time",
      sorter: (a, b) => a.time - b.time,
      sortOrder: sortedInfo.columnKey === "time" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Amount Rs.",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
      sortOrder: sortedInfo.columnKey === "amount" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email - b.email,
      sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Conatch Number",
      dataIndex: "contactnumber",
      sorter: (a, b) => a.contactnumber - b.contactnumber,
      sortOrder:
        sortedInfo.columnKey === "contactnumber" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Location",
      dataIndex: "location",
      filters: [
        {
          text: "Boralla",
          value: "Boralla",
        },
        {
          text: "Maradana",
          value: "Maradana",
        },
      ],
      filteredValue: filteredInfo.location || null,
      onFilter: (value, record) => record.location.includes(value),
      sorter: (a, b) => a.location.length - b.location.length,
      sortOrder: sortedInfo.columnKey === "location" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <>
      <Row>
        <AdminNavbar />
      </Row>
      <Row style={{ paddingTop: "80px" }}>
        <Col span={24}>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {" "}
            Donations
          </p>
        </Col>
      </Row>

      <Row style={{ padding: "10px" }}>
        <Col span={12} style={{padding:'200px 50px 50px 50px'}}>
          <Row gutter={[48]} style={{paddingBottom:'100px'}}>
            <Col span={12}>
              <Card
                className="donation-cards"
                bordered={false}
                style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Space>
                    <span style={{fontSize:'22px', fontWeight: 'bolder', color:'rgb(69, 63, 199)' }}>Annual Donations</span>
                  </Space>
                </div>
                <Col span={24} style={{ textAlign: 'right'}}>
                  <span style={{ fontSize: '35px' }}>435</span>
                </Col>
              </Card>
            </Col>
            
            <Col span={12}>
              <Card
                className="donation-cards"
                bordered={false}
                style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Space>
                    <span style={{fontSize:'22px', fontWeight: 'bolder', color:'rgb(69, 63, 199)'  }}>Annual Amount</span>
                  </Space>
                </div>
                <Col span={24} style={{ textAlign: 'right'}}>
                  <span style={{ fontSize: '35px' }}>LKR 350 000</span>
                </Col>
              </Card>
            </Col>
          </Row>


          <Row gutter={[48]}>
            <Col span={12}>
              <Card
                className="donation-cards"
                bordered={false}
                style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Space>
                    <span style={{ fontSize:'22px', fontWeight: 'bolder', color:'rgb(69, 63, 199)'  }}>Monthly Amount</span>
                  </Space>
                </div>
                <Col span={24} style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '35px' }}>LKR 42 000</span>
                </Col>
              </Card>
            </Col>

            <Col span={12}>
              <Card
                className="donation-cards"
                bordered={false}
                style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Space>
                    <span style={{fontSize:'22px', fontWeight: 'bolder', color:'rgb(69, 63, 199)'  }}>Monthly Average Amount</span>
                  </Space>
                </div>
                <Col span={24} style={{ textAlign: 'right'}}>
                  <span style={{ fontSize: '35px', color:'rgb(92, 87, 109)' }}>LKR 36 000</span>
                </Col>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <Row>
            <Col span={24}>
              <h1 style={{ textAlign: "center" }}>Monthly Donations</h1>
            </Col>
          </Row>
          <Row style={{ paddingTop: "40px" }}>
            <Col span={24} style={{ height: "600px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ padding: "30px", textAlign: "center" }}>
        <Col span={24}>
          <span
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}
          >
            Donationa Details
          </span>
        </Col>
      </Row>
      <Row style={{ padding: "20px 50px 80px 50px" }}>
        <Col span={24}>
          <Table
            bordered
            pagination={false}
            dataSource={dataSource}
            columns={columns}
          />
        </Col>
      </Row>
    </>
  );
};

export default AdminDonations;
