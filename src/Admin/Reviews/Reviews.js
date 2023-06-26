import React from "react";
import "./Reviews.css";
import { Avatar, Badge, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { Col, Row } from "antd";
import { DatePicker, Space, Button } from "antd";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
const { RangePicker } = DatePicker;

const Reviews = () => {
  return (
    <>
      <AdminNavbar/>

      <Row style={{ padding: '100px 50px 0px 50px' }}>
        <Col span={20}>
          <h1 style={{ margin: '0' }}>Reviews</h1>
        </Col>
        <Col span={4} >
          <Space direction="vertical" size={12}>
            <RangePicker showTime size="large" className="datesorter" />
          </Space>
        </Col>
      </Row>

      <Divider />

      <Row style={{ padding: '20px 50px' }}>
        <Col span={1}>
          <Image
            className="parentimage"
            width={80}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={4} style={{ paddingLeft: '20px' }}>
          <Row>
            <Col span={24}>
              <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>Sandushi Jasinghe</span>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <span>26/07/2-23</span>
            </Col>
            <Col span={14}>
              <span>3.15 P.M</span>
            </Col>
          </Row>
        </Col>
        <Col span={19} style={{ paddingLeft: '15px' }}>
          <Col>
            <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>Message <Badge dot>
              <Avatar style={{ width: '30px', height: '30px', marginLeft: '10px' }} shape="square" icon={<UserOutlined />} />
            </Badge></span>
          </Col>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te
            dicta? Refert tamen, quo modo.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
            licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo
            modo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            nonne merninisti licere mihi ista probare, quae sunt a te dicta?
            Refert tamen, quo modo.
          </p>
          <Row className="replybutton">
            <Button type="primary">Reply for Review</Button>
            <div class="con-like" style={{ paddingLeft: '20px' }}>
              <input title="like" type="checkbox" class="like" />
              <div class="checkmark">
                <svg
                  viewBox="0 0 24 24"
                  class="outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  class="filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  class="celebrate"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="10,10 20,20" class="poly"></polygon>
                  <polygon points="10,50 20,50" class="poly"></polygon>
                  <polygon points="20,80 30,70" class="poly"></polygon>
                  <polygon points="90,10 80,20" class="poly"></polygon>
                  <polygon points="90,50 80,50" class="poly"></polygon>
                  <polygon points="80,80 70,70" class="poly"></polygon>
                </svg>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      <Divider />
      <Row style={{ padding: '20px 50px' }}>
        <Col span={1}>
          <Image
            className="parentimage"
            width={80}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={4} style={{ paddingLeft: '20px' }}>
          <Row>
            <Col span={24}>
              <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>Sandushi Jasinghe</span>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <span>26/07/2-23</span>
            </Col>
            <Col span={14}>
              <span>3.15 P.M</span>
            </Col>
          </Row>
        </Col>
        <Col span={19} style={{ paddingLeft: '15px' }}>
          <Col>
            <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>Message <Badge dot>
              <Avatar style={{ width: '30px', height: '30px', marginLeft: '10px' }} shape="square" icon={<UserOutlined />} />
            </Badge></span>
          </Col>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te
            dicta? Refert tamen, quo modo.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
            licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo
            modo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            nonne merninisti licere mihi ista probare, quae sunt a te dicta?
            Refert tamen, quo modo.
          </p>
          <Row className="replybutton">
            <Button type="primary">Reply for Review</Button>
            <div class="con-like" style={{ paddingLeft: '20px' }}>
              <input title="like" type="checkbox" class="like" />
              <div class="checkmark">
                <svg
                  viewBox="0 0 24 24"
                  class="outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  class="filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  class="celebrate"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="10,10 20,20" class="poly"></polygon>
                  <polygon points="10,50 20,50" class="poly"></polygon>
                  <polygon points="20,80 30,70" class="poly"></polygon>
                  <polygon points="90,10 80,20" class="poly"></polygon>
                  <polygon points="90,50 80,50" class="poly"></polygon>
                  <polygon points="80,80 70,70" class="poly"></polygon>
                </svg>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      <Divider />
      <Row style={{ padding: '20px 50px' }}>
        <Col span={1}>
          <Image
            className="parentimage"
            width={80}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={4} style={{ paddingLeft: '20px' }}>
          <Row>
            <Col span={24}>
              <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>Sandushi Jasinghe</span>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <span>26/07/2-23</span>
            </Col>
            <Col span={14}>
              <span>3.15 P.M</span>
            </Col>
          </Row>
        </Col>
        <Col span={19} style={{ paddingLeft: '15px' }}>
          <Col>
            <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>Message <Badge dot>
              <Avatar style={{ width: '30px', height: '30px', marginLeft: '10px' }} shape="square" icon={<UserOutlined />} />
            </Badge></span>
          </Col>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te
            dicta? Refert tamen, quo modo.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
            licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo
            modo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            nonne merninisti licere mihi ista probare, quae sunt a te dicta?
            Refert tamen, quo modo.
          </p>
          <Row className="replybutton">
            <Button type="primary">Reply for Review</Button>
            <div class="con-like" style={{ paddingLeft: '20px' }}>
              <input title="like" type="checkbox" class="like" />
              <div class="checkmark">
                <svg
                  viewBox="0 0 24 24"
                  class="outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  class="filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  class="celebrate"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="10,10 20,20" class="poly"></polygon>
                  <polygon points="10,50 20,50" class="poly"></polygon>
                  <polygon points="20,80 30,70" class="poly"></polygon>
                  <polygon points="90,10 80,20" class="poly"></polygon>
                  <polygon points="90,50 80,50" class="poly"></polygon>
                  <polygon points="80,80 70,70" class="poly"></polygon>
                </svg>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      <Divider />
      <Row style={{ padding: '20px 50px' }}>
        <Col span={1}>
          <Image
            className="parentimage"
            width={80}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={4} style={{ paddingLeft: '20px' }}>
          <Row>
            <Col span={24}>
              <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>Sandushi Jasinghe</span>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <span>26/07/2-23</span>
            </Col>
            <Col span={14}>
              <span>3.15 P.M</span>
            </Col>
          </Row>
        </Col>
        <Col span={19} style={{ paddingLeft: '15px' }}>
          <Col>
            <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>Message <Badge dot>
              <Avatar style={{ width: '30px', height: '30px', marginLeft: '10px' }} shape="square" icon={<UserOutlined />} />
            </Badge></span>
          </Col>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te
            dicta? Refert tamen, quo modo.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
            licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo
            modo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            nonne merninisti licere mihi ista probare, quae sunt a te dicta?
            Refert tamen, quo modo.
          </p>
          <Row className="replybutton">
            <Button type="primary">Reply for Review</Button>
            <div class="con-like" style={{ paddingLeft: '20px' }}>
              <input title="like" type="checkbox" class="like" />
              <div class="checkmark">
                <svg
                  viewBox="0 0 24 24"
                  class="outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  class="filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  class="celebrate"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="10,10 20,20" class="poly"></polygon>
                  <polygon points="10,50 20,50" class="poly"></polygon>
                  <polygon points="20,80 30,70" class="poly"></polygon>
                  <polygon points="90,10 80,20" class="poly"></polygon>
                  <polygon points="90,50 80,50" class="poly"></polygon>
                  <polygon points="80,80 70,70" class="poly"></polygon>
                </svg>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      <Divider />

    </>
  );
};

export default Reviews;
