import React from "react";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import {Col, Row, Card } from "antd";
import image1 from "../../assets/images/LRH.jpg";
import { Link } from "react-router-dom";


const ParentSearch = () => {
  return (
    <>
      <Row>
        <ParentNavbar />
      </Row>
      <Row style={{ paddingTop: "120px" }}>
        <Col span={12}></Col>
        <Col span={12} className="searchbar">
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              placeholder="Enter your current location"
              type="search"
              class="input"
            />
          </div>
        </Col>
      </Row>
      <Row style={{ padding: "60px" }}>
        <Col span={12}>
          <Card
            style={{
              width: 800,
              height: 600,
              border: "1px solid black",
              // backgroundColor: "#c4a562",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Hi lakshmi !
            </p>
            <p style={{ textAlign: "center", fontSize: "20px" }}>
              Here's the nearest vaccination center accroding to your current
              location
            </p>
            <br />
            <Row>
              <Col span={12}>
                <p style={{ fontSize: "15px" }}>
                  {" "}
                  Location : Lady Ridgway Hospital Colombo 8{" "}
                </p>
                <p style={{ fontSize: "15px" }}> Distance : 1km away </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row>
                  <Col span={12} style={{ paddingTop: "5px" }}>
                    <button className="callnow">Call Now</button>
                  </Col>
                  <Col span={12}>
                    <button class="contacticon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        viewBox="0 0 32 32"
                        height="32"
                        fill="none"
                        class="svg-icon"
                      >
                        <path
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke="#fff"
                          fill-rule="evenodd"
                          d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <div class="card">
                  <div class="card-details">
                    <img
                      src={image1}
                      alt="Vaccination Center"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <button class="card-button">More info</button>
                </div>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <Link  to='../../ParentBooking' underline="none">
                <button className="appointment"> Make an Appointment</button>
              </Link>
            </Row>
          </Card>
        </Col>
        <Col span={12}>
             
        </Col>
      </Row>
    </>
  );
};

export default ParentSearch;
