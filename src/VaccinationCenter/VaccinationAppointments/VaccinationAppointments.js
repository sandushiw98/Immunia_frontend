import React from "react";
import VaccinationNavbar from "../VaccinationNavbar/VaccinationNavbar";
import "./VaccinationAppointments.css";
import { Row, Col, Table, Space, Input, Button,Dropdown } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const items = [
  {
    key: '1',
    label: (
      <a >
        All
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a >
        Upcomming vaccinations
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a>
       Vaccinated
      </a>
    ),
  },
];


const onSearch = (value) => console.log(value);

const data = [
  {
    key: "1",
    appointments: "A34",
    date: "23/09/2023",
    time: "10.30 P.M",
    childname: "Shalani Tharuka",
    parentname: "Hemali de silva",
    hallnumber: "1",
    vaccinationType: "BCG",
  },
  {
    key: "2",
    appointments: "A37",
    date: "23/09/2023",
    time: "1.15 P.M",
    childname: "Tharindu Bandara",
    parentname: "Saman Bandara",
    hallnumber: "2",
    vaccinationType: "BCG",
  },
  {
    key: "3",
    appointments: "A90",
    date: "30/09/2023",
    time: "8.00 A.M",
    childname: "Savini Harshani",
    parentname: "Sandun Ruwan",
    hallnumber: "1",
    vaccinationType: "Polio",
  },
  {
    key: "1",
    appointments: "A954",
    date: "1/10/2023",
    time: "9.45 A.M",
    childname: "Sasmika Harith",
    parentname: "DinithI Perera",
    hallnumber: "2",
    vaccinationType: "ATD",
  },
];

const VaccinationAppointments = () => {


  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuClick = ({ key }) => {
    const selectedItem = items.find((item) => item.key === key);
    setSelectedItem(selectedItem);
  };


  <Space direction="vertical"></Space>;

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
  const setHallSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "hallnumber",
    });
  };
  const columns = [
    {
      title: "Appointment ID",
      dataIndex: "appointments",
      key: "appointments",
      filters: [
        {
          text: "A34",
          value: "A34",
        },
        {
          text: "A37",
          value: "A37",
        },
        {
          text: "A90",
          value: "A90",
        },
        {
          text: "A954",
          value: "A954",
        },
      ],
      filteredValue: filteredInfo.appointments || null,
      onFilter: (value, record) => record.appointments.includes(value),
      sorter: (a, b) => a.appointments.length - b.appointments.length,
      sortOrder:
        sortedInfo.columnKey === "appointments" ? sortedInfo.order : null,
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
      sortOrder:
        sortedInfo.columnKey === "parentname" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Vaccination Hall Number",
      dataIndex: "hallnumber",
      key: "hallnumber",
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
      filteredValue: filteredInfo.hallnumber || null,
      onFilter: (value, record) => record.hallnumber.includes(value),
      sorter: (a, b) => a.hallnumber.length - b.hallnumber.length,
      sortOrder:
        sortedInfo.columnKey === "hallnumber" ? sortedInfo.order : null,
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
          text: "BCG",
          value: "BCG",
        },
        {
          text: "ATD",
          value: "ATD",
        },
      ],
      filteredValue: filteredInfo.vaccinationType || null,
      onFilter: (value, record) => record.vaccinationType.includes(value),
      sorter: (a, b) => a.vaccinationType.length - b.vaccinationType.length,
      sortOrder:
        sortedInfo.columnKey === "vaccinationType" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Respond",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Accept {record.name}</a>
          <a>Reject</a>
        </Space>
      ),
    },
  ];

  const columns2 = [
    {
      title: "Appointment ID",
      dataIndex: "appointments",
      key: "appointments",
      filters: [
        {
          text: "A34",
          value: "A34",
        },
        {
          text: "A37",
          value: "A37",
        },
        {
          text: "A90",
          value: "A90",
        },
        {
          text: "A954",
          value: "A954",
        },
      ],
      filteredValue: filteredInfo.appointments || null,
      onFilter: (value, record) => record.appointments.includes(value),
      sorter: (a, b) => a.appointments.length - b.appointments.length,
      sortOrder:
        sortedInfo.columnKey === "appointments" ? sortedInfo.order : null,
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
      sortOrder:
        sortedInfo.columnKey === "parentname" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Vaccination Hall Number",
      dataIndex: "hallnumber",
      key: "hallnumber",
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
      filteredValue: filteredInfo.hallnumber || null,
      onFilter: (value, record) => record.hallnumber.includes(value),
      sorter: (a, b) => a.hallnumber.length - b.hallnumber.length,
      sortOrder:
        sortedInfo.columnKey === "hallnumber" ? sortedInfo.order : null,
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
          text: "BCG",
          value: "BCG",
        },
        {
          text: "ATD",
          value: "ATD",
        },
      ],
      filteredValue: filteredInfo.vaccinationType || null,
      onFilter: (value, record) => record.vaccinationType.includes(value),
      sorter: (a, b) => a.vaccinationType.length - b.vaccinationType.length,
      sortOrder:
        sortedInfo.columnKey === "vaccinationType" ? sortedInfo.order : null,
      ellipsis: true,
    },
    
  ];

  return (
    <>
      <VaccinationNavbar />
      <Row style={{ padding: "90px 0px 30px 1600px" }}>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          style={{ width: "250px" }}
        />
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Appointment Request</h1>
      </Row>
      <Row style={{ padding: "20px" }}>
        <Space
          style={{
            marginBottom: 16,
          }}
        >
          <Button onClick={setHallSort}>Sort Hall</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table
          columns={columns}
          dataSource={data}
          onChange={handleChange}
          pagination={false}
          scroll={{
            y: 200,
          }}
        />
      </Row>
      <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}>
        <h1> Appointments</h1>
      </Row>
      <Row style={{paddingLeft: '1640px'}}>
   
      <Dropdown
        menu={{
          items,
          onClick: handleMenuClick,
        }}
        placement="bottom"
        arrow
      >
        <Button style={{background: '#036ffc', color: 'white', width: '200px'}}>{selectedItem ? selectedItem.label : 'bottom'}</Button>
      </Dropdown>
      
      </Row>
      <Row>
      <Row style={{ padding: "20px" ,paddingBottom: '80px'}}>
        <Space
          style={{
            marginBottom: 16,
          }}
        >
          <Button onClick={setHallSort}>Sort Hall</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table
          columns={columns2}
          dataSource={data}
          onChange={handleChange}
          pagination={false}
          scroll={{
            y: 200,
          }}
        />
      </Row>
      </Row>
    </>
  );
};

export default VaccinationAppointments;
