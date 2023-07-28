import React from "react";
import VaccinationNavbar from "../VaccinationNavbar/VaccinationNavbar";
import "./VaccinationAppointments.css";
import { Row, Col, Table, Space, Input, Button, Dropdown } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useState } from "react";
import { getAppointmentsByCenter } from "../../services/appointment";
import useUser from "../../hooks/useUser";

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
    key: "1",
    label: <a>All</a>,
  },
  {
    key: "2",
    label: <a>Upcomming vaccinations</a>,
  },
  {
    key: "3",
    label: <a>Vaccinated</a>,
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
  const [appointmentData, setAppointments] = useState([]);
  const user = useUser();
  React.useEffect(() => {
    // Call the getAppointments function to fetch the data
    if (!user) {
      return;
    }
    getAppointmentsByCenter(user.id)
      .then((data) => {
        // Update the state with the fetched appointments data
        setAppointments(
          data
            .filter((d) => d.child)
            .map((d) => {
              return {
                ...d,
                scheduleDate: d.schedule.scheduleDate,
                startTime: d.schedule.startTime,
                centerName: d.vaccineCenter.centerName,
              };
            })
        );
      })
      .catch((error) => {
        // Handle error if needed
        console.log("Error fetching appointments:", error);
      });
  }, [user, user.id]);
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

  const columns2 = [
    {
      title: "Appointment ID",
      dataIndex: "appointmentId",
      key: "appointmentId",
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
    },
    {
      title: "Date",
      dataIndex: "scheduleDate",
      key: "scheduleDate",
      sorter: (a, b) => a.scheduleDate - b.scheduleDate,
      sortOrder:
        sortedInfo.columnKey === "scheduleDate" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Time",
      dataIndex: "startTime",
      key: "startTime",
      sorter: (a, b) => a.startTime - b.startTime,
      sortOrder: sortedInfo.columnKey === "startTime" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Child Name",
      dataIndex: "childName",
      key: "childName",
      sorter: (a, b) => a.childName - b.childName,
      sortOrder: sortedInfo.columnKey === "childName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Parent Name",
      dataIndex: "parentName",
      key: "parentName",
      sorter: (a, b) => a.parentName - b.parentName,
      sortOrder:
        sortedInfo.columnKey === "parentName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <a href={`/vaccinationupdate/${record.child.childId}`}>Record</a>
        );
      },
    },
  ];

  return (
    <>
      <VaccinationNavbar />
      <Row style={{ padding: "110px 0px 30px 1600px" }}>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          style={{ width: "250px" }}
        />
      </Row>
      {/* <Row
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
      </Row> */}
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> Appointments</h1>
      </Row>
      <Row style={{ paddingLeft: "1640px" }}>
        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick,
          }}
          placement="bottom"
          arrow
        >
          <Button
            style={{ background: "#036ffc", color: "white", width: "200px" }}
          >
            {selectedItem ? selectedItem.label : "All"}
          </Button>
        </Dropdown>
      </Row>
      <Row>
        <Row style={{ padding: "20px", paddingBottom: "80px" }}>
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
            dataSource={appointmentData}
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
