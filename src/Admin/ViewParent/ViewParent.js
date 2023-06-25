import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import { Col, Row, Card } from "antd";
import "./ViewParent.css";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

const ViewCenter = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: "0",
      name: "Edward King 0",
      mobile: "32",
      location: "London, Park Lane no. 0",
      name0fDirector: "R.J.Perera",
      type: "MOH",
    },
    {
      id: "1",
      name: "Edward King 1",
      mobile: "32",
      location: "London, Park Lane no. 1",
      name0fDirector: "R.J.Perera",
      type: "MOH",
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
      title: "Parent ID",
      dataIndex: "ID",
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
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "30%",
      sorter: (a, b) => a.name - b.name,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Contact Number",
      dataIndex: "monbile",

      sorter: (a, b) => a.mobile - b.mobile,
      sortOrder: sortedInfo.columnKey === "mobile" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Location",
      dataIndex: "Location",
      editable: true,

      filters: [
        {
          text: "Borala",
          value: "Boralla",
        },
        {
          text: "Maradana",
          value: "Maradana",
        },
      ],
      filteredValue: filteredInfo.Location || null,
      onFilter: (value, record) => record.Location.includes(value),
      sorter: (a, b) => a.Location.length - b.Location.length,
      sortOrder: sortedInfo.columnKey === "Location" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a style={{ color: "red" }}>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <>
      <Row>
        <DashboardNavbar />
      </Row>
      <Row style={{ paddingTop: "80px" }}>
        <Col span={24}>
          <h1 className="heading"> Parent</h1>
        </Col>
      </Row>
      <Row style={{ padding: "20px" }}>
        <Col span={12}>
          <Button
            type="primary"
            style={{
              height: "40px",
            }}
          >
            <span style={{ fontSize: "15px", fontWeight: "bolder" }}>
              {" "}
              <PlusOutlined />
              Add Parent{" "}
            </span>
          </Button>
        </Col>
        <Col span={12} className="center-searchbar">
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Search Centers" type="search" class="input" />
          </div>
        </Col>
      </Row>
      <Row style={{ padding: "20px" }}>
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

export default ViewCenter;
