import React from "react";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import { Button, Space, Table } from "antd";
import { useState } from "react";
import { Col, Row, Card } from "antd";
import "./Appointments.css";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const Appointments = () => {
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
      title: "Appointment ID",
      dataIndex: "appointments",
      key: "appointments",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
      ],
      filteredValue: filteredInfo.appointments || null,
      onFilter: (value, record) => record.appointments.includes(value),
      sorter: (a, b) => a.appointments.length - b.appointments.length,
      sortOrder: sortedInfo.columnKey === "appointments" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => a.date - b.date,
      sortOrder: sortedInfo.columnKey === "date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
        title: "Time",
        dataIndex: "time",
        key: "time",
        sorter: (a, b) => a.time - b.time,
        sortOrder: sortedInfo.columnKey === "time" ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: "Child Name",
        dataIndex: "childname",
        key: "childname",
        sorter: (a, b) => a.childname - b.childname,
        sortOrder: sortedInfo.columnKey === "childname" ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: "Parent Name",
        dataIndex: "parentname",
        key: "parentname",
        sorter: (a, b) => a.parentname - b.parentname,
        sortOrder: sortedInfo.columnKey === "parentname" ? sortedInfo.order : null,
        ellipsis: true,
      },
    {
      title: "Vaccination Center Name",
      dataIndex: "vaccinationName",
      key: "vaccinationName",
      filters: [
        {
          text: "Lady Ridgway ",
          value: "Lady Ridgway",
        },
        {
          text: "National Hospital Colombo",
          value: "National Hospital Colombo",
        },
      ],
      filteredValue: filteredInfo.vaccinationName || null,
      onFilter: (value, record) => record.vaccinationName.includes(value),
      sorter: (a, b) => a.vaccinationName.length - b.vaccinationName.length,
      sortOrder: sortedInfo.columnKey === "vaccinationName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Vaccination Type",
      dataIndex: "vaccinationType",
      key: "vaccinationType",
      filters: [
        {
          text: "Poliyo ",
          value: "Poliyo",
        },
        {
          text: "Hepatiteas",
          value: "Hepatiteas",
        },
      ],
      filteredValue: filteredInfo.vaccinationType || null,
      onFilter: (value, record) => record.vaccinationType.includes(value),
      sorter: (a, b) => a.vaccinationType.length - b.vaccinationType.length,
      sortOrder: sortedInfo.columnKey === "vaccinationType" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
    <>
      <Row>
        <DashboardNavbar />
      </Row>
      <Row style={{ paddingTop: "80px" }}>
        <Col span={24}>
          <h1 className="heading"> Appointments</h1>
        </Col>
      </Row>
      <Row style={{ padding:'20px' }}>
        <Space
          style={{
            marginBottom: 16,
          }}
        >
          <Button onClick={setAgeSort} >Sort age</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table columns={columns} dataSource={data} onChange={handleChange} pagination = {false} />
      </Row>
    </>
  );
};

export default Appointments;
