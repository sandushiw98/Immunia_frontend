import React from 'react';
import { Space, Table, Tag, Row,Col,Input,Button} from 'antd';
import VaccinationNavbar from "../VaccinationNavbar/VaccinationNavbar";
import { AudioOutlined,PlusOutlined,MinusOutlined } from '@ant-design/icons';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Vaccine Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: '30%',
    },
    {
      title: 'Manufacturer',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
    {
        title: 'Manufacturing Date',
        dataIndex: 'manufacdate',
        key: 'manufacdate',
        filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Category 1',
              value: 'Category 1',
            },
            {
              text: 'Category 2',
              value: 'Category 2',
            },
          ],
          filterMode: 'tree',
          filterSearch: true,
          onFilter: (value, record) => record.name.startsWith(value),
          width: '30%',

      },
      {
        title: 'Expiary Date',
        dataIndex: 'expiarydate',
        key: 'name',
        filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Category 1',
              value: 'Category 1',
            },
            {
              text: 'Category 2',
              value: 'Category 2',
            },
          ],
          filterMode: 'tree',
          filterSearch: true,
          onFilter: (value, record) => record.name.startsWith(value),
          width: '30%',
      },
      {
        title: 'Quantity',
        dataIndex: 'Quantity',
        key: 'Quantity',
      },
      {
        title: 'Details',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>Details</a>
            
          </Space>
        ),
      },
    {
      title: 'Add',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, record) => (
        <Button type="primary" style={{background: 'green'}}><PlusOutlined />Add Vaccines</Button>
      ),
    },
    {
        title: 'Remove',
        key: 'remove',
        dataIndex: 'remove',
        render: (_, record) => (
          <Button type="primary" style={{background: 'red'}}><MinusOutlined />Remove Vaccines</Button>
        ),
      },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
const onSearch = (value) => console.log(value);

const VaccinationVaccines = () => {

    
  return (
    <>
    <VaccinationNavbar/>
    <Row style={{padding: '90px 0px 30px 30px'}}>
        <Col span={2}> <h2>Vaccines</h2></Col>
        <Col span={6}> <Search placeholder="input search text" onSearch={onSearch} enterButton />
     </Col>
        <Col style={{paddingLeft: '1100px'}}> <Button type="primary"><PlusOutlined />Add Vaccines</Button></Col>
    </Row>
    <Row style={{padding: '10px 30px 20px 30px'}}>
    <Table columns={columns} dataSource={data} pagination= {false} style={{width: '100%'}}/>;
    </Row>
      
    </>
  )
}

export default VaccinationVaccines
