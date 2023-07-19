import React from "react";
import { Space, Table, Tag, Row, Col, Input, Button, Modal } from "antd";
import VaccinationNavbar from "../VaccinationNavbar/VaccinationNavbar";
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

const columns = [
  {
    title: "Batch ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
    width: "10%",
  },
  {
    title: "Vaccine Name",
    dataIndex: "name",
    key: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: "15%",
  },
  {
    title: "Manufacturer",
    dataIndex: "manufacturer",
    key: "manufacturer",
    width: "15%",
  },
  {
    title: "Manufacturing Date",
    dataIndex: "manufacdate",
    key: "manufacdate",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: "15%",
  },
  {
    title: "Expiary Date",
    dataIndex: "expiarydate",
    key: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: "15%",
  },
  {
    title: "Quantity",
    dataIndex: "Quantity",
    key: "Quantity",
  },
  {
    title: "Details",
    key: "action",
    width: "10%",
    render: (_, record) => (
      <Space size="middle">
        <a>Details</a>
      </Space>
    ),
  },
  {
    title: "Add",
    key: "tags",
    dataIndex: "tags",
    render: (_, record) => (
      <Button type="primary" style={{ background: "green" }}>
        + Add Vaccines
      </Button>
    ),
  },
  {
    title: "Remove",
    key: "remove",
    dataIndex: "remove",
    render: (_, record) => (
      <Button type="primary" style={{ background: "red" }}>
        - Remove Vaccines
      </Button>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const onSearch = (value) => console.log(value);

const VaccinationVaccines = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <VaccinationNavbar />
      <Row style={{ padding: "120px 0px 30px 30px" }}>
        <Col span={2}>
          {" "}
          <h2>Vaccines</h2>
        </Col>
        <Col span={6}>
          {" "}
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </Col>

        <Col style={{ paddingLeft: "1100px" }}>
          <Button type="primary" onClick={() => setOpen(true)}>
            + Add Vaccines
          </Button>

          <Modal
            title="Add New Vaccine Batch"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
            okText="Add"
            cancelText="Cancel"
            cancelButtonProps={{ className: "custom-cancel-button" }}
  
          >
            <div style={{padding: '30px'}}>
            <Input placeholder="Batch ID" style={{padding: '10px'}}/>; <br/><br/>
            <Input placeholder="Vaccine Name" />;
            <Input placeholder="Manufacturer" />;
            <Input placeholder="Manufacturing Date" />;
            <Input placeholder="Expiary Date" />;
            <Input placeholder="Qunatity" />;
            <Input placeholder="Details" />;
            </div>
          </Modal>
        </Col>
      </Row>
      <Row style={{ padding: "10px 30px 20px 30px" }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          style={{ width: "100%" }}
        />
        ;
      </Row>
    </>
  );
};

export default VaccinationVaccines;
