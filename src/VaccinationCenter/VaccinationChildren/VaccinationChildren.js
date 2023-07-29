

import React, { useState } from 'react';
import { Button, Table, Row } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Vaccination Card ID',
          dataIndex: 'id',
        },
        {
            title: 'Age',
            dataIndex: 'age',
          },
        {
          title: 'Weight',
          dataIndex: 'weight',
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
          },
          {
            title: 'Address',
            dataIndex: 'address',
          },
          
          {
            title: 'Gender',
            dataIndex: 'gender',
          },
          {
            title: 'Guardian Name',
            dataIndex: 'guardianname',
          },
          {
            title: 'Contact Number',
            dataIndex: 'mobile',
    
          },
      ];
      const data = [
        {
            name: `Edward King`,
            id:' C123',
            age: '2',
            weight: '15kg',
            dob: '21/02/2021',
            address: 'sulakshi, temple road, colombo 8' ,
            gender: 'female',
            guardianname : 'lakshmi jasinge',
            mobile: '0773284721'
        },
        {
            name: `Edward King`,
            id:' C123',
            age: '2',
            weight: '15kg',
            dob: '21/02/2021',
            address: 'sulakshi, temple road, colombo 8' ,
            gender: 'female',
            guardianname : 'lakshmi jasinge',
            mobile: '0773284721'
        }
      ];

const VaccinationChildren = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);




  return (
    <div style={{ padding: '20px' }}>
      <Row style={{ paddingTop: '50px', fontSize: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Registered Children</Row>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        
      </div>
      {/* Wrap the Table component with the Link */}
      <Link to="/vaccinationupdate">
        <Table  columns={columns} dataSource={data} />
      </Link>
    </div>
  );
};

export default VaccinationChildren;
