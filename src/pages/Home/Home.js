import React from "react";
import { Form, Input } from "antd";
import { Row, Col, Button } from "antd";
import Card from "@mui/material/Card";
import SimpleImageSlider from "react-simple-image-slider";
import "./Home.css";
import image1 from "../../assets/images/Untitled.jpeg";
import image2 from "../../assets/images/vaccine-boy.jpeg";
import image3 from "../../assets/images/vaccine-doctor.jpg";
import image4 from "../../assets/images/pfl-paid-family-leave-bonding-5.jpg";
import image5 from "../../assets/images/vaccine-girl.jpg";
import image6 from "../../assets/images/online-booking.jpg";
import image7 from "../../assets/images/whyVaccine.jpg";
import image8 from "../../assets/images/ministryOfHealth-removebg-preview.png";
import image9 from "../../assets/images/vaccine-tracking.png";
import image10 from "../../assets/images/health-tips.jpeg";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";
import image11 from "../../assets/images/reporting.jpg";
import image12 from "../../assets/images/vaccines_spot.png";
import image13 from "../../assets/images/donation.jpg";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../services/auth";

const Home = () => {
  React.useEffect(() => {
    getAllUsers().then((v) => console.log(v));
  }, []);

  const sliderImages = [
    {
      url: image5,
      caption:
        "SCHEDULE VACCINATION FOR YOUR CHILD\n Experience hassle-free online booking for child vaccinations\n available to all parents!\n Secure your child's health with a few clicks.\n Book now!",
    },
    {
      url: image2,
      caption: "image 2 caption",
    },
    {
      url: image3,
      caption: "image 1 caption",
    },
    {
      url: image4,
      caption: "image 1 caption",
    },
    {
      url: image1,
      caption: "image 1 caption",
    },
  ];

  sliderImages.forEach((image) => {
    const lines = image.caption.split("\n");
    const title = lines[0];
    const content = lines.slice(1).join(" ");

    console.log("Title:", title);
    console.log("Content:", content);
  });

  const renderSliderItem = (item) => (
    <div>
      <img src={item.url} alt={item.caption} className="slideshow" />
    </div>
  );

  const splitCaption = (caption) => caption.split("\n");

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Navbar />
      {/* slider images */}
      <Row className="rsis-image" id="home">
        <Col span={24}>
          <div className="slider-container">
            <SimpleImageSlider
              width="100%"
              height={700}
              images={sliderImages}
              autoPlay={true}
              showBullets={true}
              showNavs={false}
              showIndex={true}
              disableScroll={true}
              slideDuration={0}
              slideInterval={5000}
              onItemClick={null}
              renderItem={renderSliderItem}
            />
            <div className="caption-container">
              {splitCaption(sliderImages[0].caption).map((line, index) => (
                <div
                  className={`caption-line caption-line-${index}`}
                  key={index}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      {/* Vaccine details by age */}
      <Row>
        <Col span={12} style={{ padding: "50px", paddingLeft: "5%" }}>
          <Row style={{ paddingLeft: "8%" }}>
            <span
              style={{
                fontSize: "35px",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Why Vaccinate?
            </span>
          </Row>
          <Row style={{ paddingLeft: "8%" }}>
            <img
              src={image7}
              alt="image1"
              style={{
                width: "80%",
                height: "100%",
                marginTop: "20px",
                borderRadius: "10px",
              }}
            />
          </Row>
          <Row style={{ paddingLeft: "8%" }}>
            <span style={{ fontSize: "25px", marginTop: "20px" }}>
              Reasons to Vaccinate Your Child
            </span>
          </Row>
          <Row style={{ paddingLeft: "8%" }}>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>
              On-time vaccination helps provide immunity
              <br />
              against potentially life-threatening diseases.
            </p>
          </Row>
          <Row style={{ paddingLeft: "8%" }}>
            {/* <Button type="primary" style={{ width: '200px', height: '45px', backgroundColor: '#1976d2', fontWeight: 'bolder', fontSize: '20px', marginBottom: '20px' }}>
                            Why Vaccinate
                        </Button> */}

            <button class="button">
              <div class="button-overlay"></div>
              <span>Why Vaccinate</span>
            </button>
          </Row>
        </Col>
        <Col span={12} style={{ padding: "50px", paddingLeft: "5%" }}>
          <Row style={{ paddingLeft: "8%" }}>
            <span
              style={{
                fontSize: "35px",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Vaccines By Age
            </span>
          </Row>
          <Row style={{ paddingLeft: "8%", paddingTop: "50px" }}>
            <Link to="/newborn">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">New Born</span>
              </button>
            </Link>
            <Link to="/onemonth">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">1 -2 Months</span>
              </button>
            </Link>
            <Link to="/fourmonth">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">4 Months</span>
              </button>
            </Link>
          </Row>
          <Row style={{ paddingLeft: "8%", paddingTop: "50px" }}>
            <Link to="/sixmonth">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">6 Months</span>
              </button>
            </Link>
            <Link to="/sevenmonth">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">7 - 11 Months</span>
              </button>
            </Link>

            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">12 - 23 Months</span>
            </button>
          </Row>
          <Row style={{ paddingLeft: "8%", paddingTop: "50px" }}>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">2 - 3 Years</span>
            </button>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">4 - 6 Years</span>
            </button>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">7 - 10 Years</span>
            </button>
          </Row>
          <Row style={{ paddingLeft: "8%", paddingTop: "50px" }}>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">11 - 12 Years</span>
            </button>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">13 - 18 Years</span>
            </button>
          </Row>
        </Col>
      </Row>

      {/* about page */}
      <Row style={{ backgroundColor: "#f6f3ee" }} id="about">
        <Col span={12} style={{ padding: "20px" }}>
          <Row style={{ paddingLeft: "18%" }}>
            <h3 style={{ fontSize: "48px" }}>About</h3>
          </Row>
          <Row className="horizontal-line"></Row>
          <Row style={{ paddingLeft: "18%" }}>
            <p style={{ fontSize: "20px" }}>
              Welcome to our Child Vaccination Management System! We are
              dedicated to providing a convenient and efficient solution for
              managing and tracking children's vaccination schedules. Our system
              is designed to empower parents, guardians, and healthcare
              providers with the tools they need to ensure timely and accurate
              vaccinations, ultimately promoting better health outcomes for
              children.
              <br />
              <br />
              <h2>Our Mission and Vision</h2>
              Our Mission and Vision Our mission is to promote and prioritize
              children's health by simplifying the management of vaccination
              schedules. We envision a world where every child receives the
              recommended vaccinations on time, leading to healthier and happier
              lives.
              <br />
            </p>
          </Row>
        </Col>
        <Col span={12} style={{ padding: "100px" }}>
          <img
            src={image12}
            alt="image12"
            style={{ width: "100%", height: "100%" }}
          />
        </Col>
      </Row>
      {/* service page */}
      <Row style={{ backgroundColor: "#b2cdeb" }}>
        <Row style={{ width: "100%" }} id="service">
          <h3 style={{ fontSize: "48px", width: "100%", textAlign: "center" }}>
            Our Services
          </h3>
        </Row>
        <Row className="horizontal-line-donate"></Row>
        <Row style={{ width: "100%" }}></Row>
        <Col
          span={6}
          style={{ width: "100%", paddingTop: "40px", paddingLeft: "2px" }}
        >
          <Row style={{ padding: "10px 50px 10px 50px" }}>
            <img
              src={image6}
              alt="image6"
              style={{ width: "400px", height: "300px", borderRadius: "10px" }}
            />
          </Row>
          <Row style={{ paddingLeft: "18%" }}>
            <h2 style={{ fontSize: "20px", textAlign: "justify" }}>
              Online Vaccination Booking System
            </h2>
          </Row>
        </Col>
        <Col
          span={6}
          style={{ width: "100%", paddingTop: "40px", paddingBottom: "40px" }}
        >
          <Row style={{ padding: "10px 50px 10px 50px" }}>
            <img
              src={image9}
              alt="image9"
              style={{ width: "400px", height: "300px", borderRadius: "10px" }}
            />
          </Row>
          <Row style={{ paddingLeft: "18%" }}>
            <h2 style={{ fontSize: "20px", textAlign: "justify" }}>
              Sreamlined Vaccines Tracking
            </h2>
          </Row>
        </Col>
        <Col
          span={6}
          style={{ width: "100%", paddingTop: "40px", paddingBottom: "40px" }}
        >
          <Row style={{ padding: "10px 50px 10px 50px" }}>
            <img
              src={image10}
              alt="image10"
              style={{ width: "400px", height: "300px", borderRadius: "10px" }}
            />
          </Row>
          <Row style={{ paddingLeft: "18%" }}>
            <h2 style={{ fontSize: "20px", textAlign: "justify" }}>
              Health Tips and Meal Plans
            </h2>
          </Row>
        </Col>
        <Col span={6} style={{ width: "100%", paddingTop: "40px" }}>
          <Row style={{ padding: "10px 50px 10px 50px" }}>
            <img
              src={image11}
              alt="image11"
              style={{ width: "400px", height: "300px", borderRadius: "10px" }}
            />
          </Row>
          <Row style={{ paddingLeft: "18%" }}>
            <h2 style={{ fontSize: "20px", textAlign: "justify" }}>
              Data Analytics and Reporting
            </h2>
          </Row>
        </Col>
      </Row>

      {/* Donate page */}
      <Row>
        <Row style={{ width: "100%" }} id="donate">
          <h3 style={{ fontSize: "48px", width: "100%", textAlign: "center" }}>
            Donate
          </h3>
        </Row>
        <Row className="horizontal-line-donate"></Row>
        <Row style={{ width: "100%" }}>
          <Col span={12} style={{ width: "100%", paddingTop: "55px" }}>
            <Row style={{ paddingLeft: "18%" }}>
              <p style={{ fontSize: "20px", textAlign: "justify" }}>
                Thank you for considering a donation to support our Child
                Vaccination <br />
                Management System. Your contribution can make a significant
                difference <br /> in ensuring that children receive timely and
                life-saving vaccinations,
                <br /> protecting them from preventable diseases and improving
                their overall health.
              </p>
            </Row>
            <Row style={{ padding: "10px 150px 10px 160px" }}>
              <img
                src={image13}
                alt="image13"
                style={{ width: "100%", height: "100%" }}
              />
            </Row>
          </Col>
          <Col span={12} style={{ width: "100%", padding: "90px 100px" }}>
            <Card
              sx={{ minWidth: 800 }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px 60px",
                backgroundColor: "#f6f3ee",
                width: "60%",
                marginTop: "20px",
              }}
            >
              <Row>
                <span style={{ fontSize: "100px", color: "brown" }}>
                  100 Rs
                </span>
              </Row>
              <Row>
                <span
                  style={{
                    fontSize: "30px",
                    color: "black",
                    marginTop: "10px",
                    marginBottom: "20px",
                  }}
                >
                  Donation Amount
                </span>
              </Row>
              <Row>
                <Button className="donate-btn">Rs 10</Button>
                <Button className="donate-btn">Rs 25</Button>
                <Button className="donate-btn">Rs 50</Button>
                <Button className="donate-btn">Rs 100</Button>
                <Button className="donate-btn">Rs 200</Button>
              </Row>
              <Row>
                <Button
                  style={{
                    marginTop: "30px",
                    color: "brown",
                    border: "1px solid brown",
                  }}
                >
                  Other
                </Button>
              </Row>
              <Row>
                <Link className="back-btn" to="/Donations" underline="none">
                  <Button
                    type="primary"
                    style={{
                      marginTop: "50px",
                      width: "300px",
                      height: "45px",
                      backgroundColor: "brown",
                      fontWeight: "bolder",
                      fontSize: "20px",
                    }}
                  >
                    Donate Now
                  </Button>
                </Link>
              </Row>
            </Card>
          </Col>
        </Row>
      </Row>

      {/* Contact page */}
      <Row style={{ backgroundColor: "#f6f3ee" }} id="contact">
        <Row style={{ width: "100%" }}>
          <h3 style={{ fontSize: "48px", width: "100%", textAlign: "center" }}>
            Contact
          </h3>
        </Row>
        <Row className="horizontal-line-donate"></Row>
        <Row style={{ width: "100%" }}>
          <Col span={12} style={{ width: "100%", padding: "50px" }}>
            {/* <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: '10px' }}> */}
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{
                maxWidth: 800,
                padding: "50px",
              }}
            >
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "age"]}
                label="Phone Number"
                rules={[
                  {
                    type: "number",
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "Message"]}
                label="Message"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  ...layout.wrapperCol,
                  offset: 8,
                }}
              >
                <button class="btn1">
                  <span>
                    Submit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill="#ffffff"
                          d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                  <span>Sure ?</span>
                  <span>
                    Done !
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          stroke-linecap="round"
                          stroke-width="2"
                          stroke="#ffffff"
                          d="M8.00011 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6"
                        ></path>{" "}
                        <path
                          fill="#ffffff"
                          d="M11.1892 12.2368L15.774 6.63327C16.1237 6.20582 16.0607 5.5758 15.6332 5.22607C15.2058 4.87635 14.5758 4.93935 14.226 5.36679L9.65273 10.9564L11.1892 12.2368ZM8.02292 16.1068L6.48641 14.8263L5.83309 15.6248L2.6 13.2C2.15817 12.8687 1.53137 12.9582 1.2 13.4C0.868627 13.8419 0.95817 14.4687 1.4 14.8L4.63309 17.2248C5.49047 17.8679 6.70234 17.7208 7.381 16.8913L8.02292 16.1068Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </button>
              </Form.Item>
            </Form>
            {/* </Card> */}
          </Col>
          <Col
            span={12}
            style={{ width: "100%", paddingLeft: "200px", paddingTop: "1%" }}
          >
            <Row>
              <img
                src={image8}
                alt="image8"
                style={{ width: "15%", height: "15%" }}
              />
            </Row>
            <Row>
              <span
                style={{
                  marginLeft: "22px",
                  fontSize: "28px",
                  fontWeight: "bolder",
                  marginTop: "10px",
                }}
              >
                Ministry Of Health
              </span>
            </Row>
            <Row>
              <p
                style={{
                  marginLeft: "22px",
                  fontSize: "18px",
                  marginTop: "10px",
                }}
              >
                SUWASIRIPAYA, No 385, Rev.
                <br />
                Baddegama Wimalawansa Thero Mawatha,
                <br />
                Colombo 10, Sri Lanka.
                <br />
                Telephone(General):
                <br />
                (+94)112 694033, (+94)112 675011,
                <br /> (+94)112 675449, (+94)112 693493
              </p>
            </Row>
            <Row>
              <span
                style={{
                  marginLeft: "22px",
                  fontSize: "22px",
                  fontWeight: "bolder",
                  marginTop: "10px",
                }}
              >
                Social Links
              </span>
            </Row>
            <Row style={{ display: "flex", flexDirection: "row" }}>
              <Col span={3} style={{ width: "100%", height: "100%" }}>
                <a
                  href="https://twitter.com/MoH_SriLanka"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={twitter}
                    alt="twitter"
                    style={{ width: "65%", height: "65%", marginLeft: "5px" }}
                  />
                </a>
              </Col>
              <Col span={3} style={{ width: "100%", height: "100%" }}>
                <a
                  href="https://web.facebook.com/MoHNIMSriLanka/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={facebook}
                    alt="twitter"
                    style={{ width: "60%", height: "60%" }}
                  />
                </a>
              </Col>
              <Col span={3} style={{ width: "100%", height: "100%" }}>
                <a
                  href="https://www.youtube.com/channel/UCqcu0trpaF_EEgs9dBsYJcw/featured"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={youtube}
                    alt="twitter"
                    style={{ width: "55%", height: "55%" }}
                  />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Home;
