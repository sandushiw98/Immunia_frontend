import React from 'react'
import VaccinationNavbar from '../VaccinationNavbar/VaccinationNavbar';
import { useState } from "react";
import { Col, Row, Card ,Table} from "antd";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch = (value) => console.log(value);

const VaccinationDonation = () => {

    const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
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
      order: 'descend',
      columnKey: 'age',
    });
  };

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
        
      ];

      <Space direction="vertical"></Space>

      
  return (
    <>
      <VaccinationNavbar/>
      <Row style={{paddingTop:'120px', paddingLeft:'1600px'}}>
      <Search placeholder="input search text" onSearch={onSearch} enterButton style={{width: '250px'}}/>
      </Row>
      <Row style={{paddingTop:'30px', paddingBottom:'20px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
        <h1>Donation Details</h1>
      </Row>
      <Row style={{paddingLeft:'30px', paddingRight: '30px'}}>
      <Col span={24}>
          <Table
            bordered
            pagination={false}
            dataSource={dataSource}
            columns={columns}
            scroll={{
              y: 240,
            }}
          />
        </Col>
      </Row>
    </>
  )
}

export default VaccinationDonation
