import React, { useEffect, useRef } from "react";
import "./ParentRecordCard.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import { Link, useParams } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";
import image1 from "../../assets/images/reminder.jpg";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { useReactToPrint } from "react-to-print";

import {
  Avatar,
  Col,
  Row,
  Card,
  Table,
  Divider,
  message,
  Button,
} from "antd";
import image2 from "../../assets/images/childprofile3.jpg";
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getChildById } from "../../services/child";
import { calculateAge } from "../../services/utils";

const { Meta } = Card;

const columns = [
  // ... (existing columns)
];

const data = [
  // ... (existing data)
];

const ParentRecordCard = () => {
  const componentPDF = useRef();

  const [size, setSize] = useState("large");
  const params = useParams();
  const [childData, setChildData] = useState({
    weights: [],
    child: undefined,
  });

  useEffect(() => {
    getChildById(params.id).then((child) => {
      setChildData((prevData) => {
        return { ...prevData, child };
      });
    });
  }, [params.id]);

  useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Userdata",
    onafterprint: () => alert("Data saved in PDF"),
  });

  if (!childData.child) {
    return null; // Return something meaningful or a loading indicator
  }

  return (
    <div className="cover">
      <Row>
        <ParentNavbar />
      </Row>
      <Row
        style={{
          paddingTop: "120px",
          paddingRight: "30px",
          display: "flex",
          justifyContent: "right",
          alignItems: "right",
        }}
      >
        <Link to="../../ParentChildAccount" underline="none">
          <Button type="primary">Create New +</Button>
        </Link>
      </Row>
      <div ref={componentPDF} style={{ width: "100%" }}>
        <Row>
          <Col span={10} style={{ paddingTop: "60px", paddingLeft: "150px" }}>
            <Card
              style={{
                width: 400,
              }}
              cover={<img alt="example" src={childData.child.photoURL} />}
            >
              <Meta
                avatar={<Avatar src={childData.child.photoURL} />}
                title={
                  <span className="custom-table-header">
                    {`${childData.child.firstName} ${childData.child.lastName}`}
                  </span>
                }
              />
            </Card>
          </Col>
          <Col span={14} className="childtable">
            <Card className="childshadow">
              <div className="childcontent">
                {/* ... (existing table data) */}
              </div>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: "#4281f5" }}>Child Vaccination Record Card</h1>
        </Row>
        {/* ... (existing table data) */}
        <Row
          style={{
            display: "flex",
            alignContent: "right",
            justifyContent: "right",
            paddingRight: "30px",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <div>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              size={size}
              onClick={() => window.print()} // Print directly using the browser's print function
            >
              Download PDF
            </Button>
          </div>
        </Row>
        {/* ... (existing chart data) */}
      </div>
      <Row className="reminder">
        {/* ... (existing reminder data) */}
      </Row>
    </div>
  );
};

export default ParentRecordCard;
