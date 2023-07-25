import { Col, Row } from "antd";
import "./ViewParent.css";
import { Button, Popconfirm, Table } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { getAllParents } from "../../services/parent";

const ViewCenter = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: 2,
      userRole: "parent",
      password: "$2a$10$0dTu5L3buj37Gu1tNF18TOnyH635ZJZWQMCl3b8JEQZhxCbRK7eoi",
      email: "navod98@gmail.com",
      contactNumber: "456",
      isActivate: true,
      firstName: "Navodh",
      lastName: "shehan",
      address: "160/A/1",
      emergencyContactNumber: "123",
      nicnumber: "984343",
    },
    {
      id: "1",
      name: "Edward King 1",
      contactNumber: "32",
      address: "London, Park Lane no. 1",
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
      onFilter: (value, record) => record.id.includes(value),
      sorter: (a, b) => a.id.length - b.id.length,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
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
      dataIndex: "contactNumber",

      sorter: (a, b) => a.contactNumber - b.contactNumber,
      sortOrder:
        sortedInfo.columnKey === "contactNumber" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Location",
      dataIndex: "address",
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
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
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

  React.useEffect(() => {
    getAllParents().then((v) => {
      setDataSource(
        v.map((parent) => {
          return { ...parent, name: `${parent.firstName} ${parent.lastName}` };
        })
      );
    });
  }, []);

  return (
    <>
      <AdminNavbar />
      <Row style={{ paddingTop: "100px" }}>
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
