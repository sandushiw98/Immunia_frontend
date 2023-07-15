import React from 'react'
import { useState } from 'react';
import { Table,Row,Button } from 'antd';
import VaccinationNavbar from '../VaccinationNavbar/VaccinationNavbar';


const columns = [
    {
      title: 'Childs ID',
      dataIndex: 'name',
      filters: [
        {
          text: 'C350',
          value: 'C350',
        },
        {
          text: 'C234',
          value: 'C234',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Date of Birth',
        dataIndex: 'dob',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.dob - b.dob,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        defaultSortOrder: 'address',
        sorter: (a, b) => a.address - b.address,
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        defaultSortOrder: 'gender',
        sorter: (a, b) => a.gender - b.gender,
      },
      {
        title: 'Guardians Name',
        dataIndex: 'guardiansname',
        defaultSortOrder: 'guardiansname',
        sorter: (a, b) => a.guardiansname - b.guardiansname,
      },
      {
        title: 'Contact Number',
        dataIndex: 'contactnumber',
        defaultSortOrder: 'contactnumber',
        sorter: (a, b) => a.contactnumber - b.contactnumber,
      },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

const VaccinationSchool = () => {
    
  return (
    <>
      <VaccinationNavbar/>
      <Row style={{paddingTop: '90px',paddingBottom: '40px'}}>
      <h2 style={{width:'2000px', textAlign: 'center'}}> Registered Children's Details With IMMUNIA </h2>
      </Row>
      <Row>
      <Table columns={columns} dataSource={data} onChange={onChange}  style={{width: '2500px'}} pagination = {false}/>;
      </Row>
      <Row style={{paddingLeft: '1750px'}}>
      
      </Row>
    </>
  )
}

export default VaccinationSchool
