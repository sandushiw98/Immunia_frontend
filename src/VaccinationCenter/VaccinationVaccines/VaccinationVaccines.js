import React from "react";
import {
  Space,
  Table,
  Tag,
  Row,
  Col,
  Input,
  Button,
  Modal,
  Form,
  Select,
  DatePicker,
} from "antd";
import VaccinationNavbar from "../VaccinationNavbar/VaccinationNavbar";
import { AudioOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  getInventory,
  saveInventory,
  updateInventory,
} from "../../services/inventory";
import useUser from "../../hooks/useUser";
import { VaccineTypeEnum, VaccineTypes } from "../../services/constants";
import dayjs from "dayjs";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const onSearch = (value) => console.log(value);

const VaccinationVaccines = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const user = useUser();
  React.useEffect(() => {
    if (user) {
      getInventory(user.id).then((v) => {
        setData(v);
      });
    }
  }, [user]);

  const columns = [
    {
      title: "ID",
      dataIndex: "inventoryId",
      key: "inventoryId",
      render: (text) => <a>{text}</a>,
      width: "10%",
    },
    {
      title: "Batch ID",
      dataIndex: "batchNumber",
      key: "batchNumber",
      render: (text) => <a>{text}</a>,
      width: "10%",
    },
    {
      title: "Vaccine Name",
      dataIndex: "vaccineType",
      key: "vaccineType",
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
      onFilter: (value, record) => record.vaccineType.startsWith(value),
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
      dataIndex: "manufactureDate",
      key: "manufactureDate",
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
      onFilter: (value, record) => record.manufactureDate.startsWith(value),
      width: "15%",
    },
    {
      title: "Expiary Date",
      dataIndex: "expireDate",
      key: "expireDate",
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
      onFilter: (value, record) => record.expireDate.startsWith(value),
      width: "15%",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Details",
      dataIndex: "description",
      key: "description",
      width: "10%",
      render: (_, record) => (
        <Space size="middle">
          <a>{record.description}</a>
        </Space>
      ),
    },
    {
      title: "Update",
      key: "update",
      render: (_, record) => (
        <Button
          onClick={() => {
            form.setFieldsValue({
              batchNumber: record.batchNumber,
              quantity: record.quantity,
              vaccineType: record.vaccineType,
              manufacturer: record.manufacturer,
              description: record.description,
              inventoryId: record.inventoryId,
              manufactureDate: dayjs(record.manufactureDate),
              expireDate: dayjs(record.expireDate),
            });
            setOpen(true);
          }}
          type="primary"
          style={{ background: "blue" }}
        >
          Update Vaccines
        </Button>
      ),
    },
  ];

  const onClose = () => {
    setOpen(false);
    form.resetFields();
  };
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
            title={
              <span style={{ fontSize: "24px", paddingLeft: "10px" }}>
                Add New Vaccine Batch <br />
                <br />
              </span>
            }
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={onClose}
            width={1000}
            okText="Add"
            cancelText="Cancel"
            okButtonProps={{ hidden: true }}
            cancelButtonProps={{
              className: "custom-cancel-button",
              hidden: true,
            }}
          >
            <Form
              form={form}
              onFinish={(values) => {
                console.log(values);
                if (user) {
                  if (values.inventoryId) {
                    updateInventory({
                      batchNumber: values.batchNumber,
                      quantity: values.quantity,
                      vaccineType: values.vaccineType,
                      manufactureDate:
                        values.manufactureDate.format("YYYY-MM-DD"),
                      expireDate: values.expireDate.format("YYYY-MM-DD"),
                      manufacturer: values.manufacturer,
                      description: values.description,
                      vaccineCenter: {
                        id: user.id,
                      },
                    }).then((v) => {
                      onClose();
                      getInventory(user.id).then((d) => {
                        setData(d);
                      });
                    });
                  } else {
                    saveInventory({
                      batchNumber: values.batchNumber,
                      quantity: values.quantity,
                      vaccineType: values.vaccineType,
                      manufactureDate:
                        values.manufactureDate.format("YYYY-MM-DD"),
                      expireDate: values.expireDate.format("YYYY-MM-DD"),
                      manufacturer: values.manufacturer,
                      description: values.description,
                      vaccineCenter: {
                        id: user.id,
                      },
                    }).then((v) => {
                      onClose();
                      getInventory(user.id).then((d) => {
                        setData(d);
                      });
                    });
                  }
                }
              }}
              labelCol={{
                span: 10,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              style={{
                maxWidth: 1000,
              }}
              className="formfont"
            >
              <div style={{ padding: "20px 160px 10px 40px" }}>
                <Form.Item name="inventoryId" label="Inventory Id">
                  <Input
                    disabled={true}
                    placeholder="Description"
                    style={{ padding: "10px" }}
                  />
                </Form.Item>
                <Form.Item name="batchNumber" label="Batch ID">
                  <Input placeholder="Batch ID" style={{ padding: "10px" }} />
                </Form.Item>
                <Form.Item name="vaccineType" label="Vaccine Type">
                  <Select>
                    {Object.keys(VaccineTypeEnum).map((v) => {
                      return (
                        <Select.Option value={VaccineTypeEnum[v]}>
                          {VaccineTypes[VaccineTypeEnum[v]]}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item name="manufacturer" label="Manufacturer">
                  <Input
                    placeholder="Manufacturer"
                    style={{ padding: "10px" }}
                  />
                </Form.Item>
                <Form.Item name="manufactureDate" label="Manufacturing Date">
                  <DatePicker />
                </Form.Item>
                <Form.Item name="expireDate" label="Expiary Date">
                  <DatePicker />
                </Form.Item>
                <Form.Item name="quantity" label="Qunatity">
                  <Input placeholder="Qunatity" style={{ padding: "10px" }} />
                </Form.Item>

                <Form.Item name="description" label="Description">
                  <Input
                    placeholder="Description"
                    style={{ padding: "10px" }}
                  />
                </Form.Item>
              </div>
              <Row className="finalbuttons">
                <Col style={{ padding: "40px  60px 40px 240px" }}>
                  <Button
                    htmlType="submit"
                    style={{ backgroundColor: "#036bfc", color: "white" }}
                  >
                    SUBMIT
                  </Button>
                </Col>
                <Col>
                  <Button
                    onClick={onClose}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    CANCEL
                  </Button>
                </Col>
              </Row>
            </Form>
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
