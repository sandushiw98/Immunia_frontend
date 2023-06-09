import React from 'react';
import { Form, Input } from 'antd';
import { Row, Col, Button } from 'antd';
import Card from '@mui/material/Card';
import SimpleImageSlider from 'react-simple-image-slider';
import './Home.css';
import image1 from '../../assets/images/Untitled.jpeg';
import image2 from '../../assets/images/vaccine-boy.jpeg';
import image3 from '../../assets/images/vaccine-doctor.jpg';
import image4 from '../../assets/images/pfl-paid-family-leave-bonding-5.jpg';
import image5 from '../../assets/images/vaccine-girl.jpg';
import image6 from '../../assets/images/donation.jpg';
import image7 from '../../assets/images/whyVaccine.jpg';
import image8 from '../../assets/images/ministryOfHealth-removebg-preview.png';
import twitter from '../../assets/images/twitter.png';
import facebook from '../../assets/images/facebook.png';
import youtube from '../../assets/images/youtube.png';
import image10 from '../../assets/images/vaccines_spot.png';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    const sliderImages = [
        {
            url: image5,
            caption: 'SCHEDULE VACCINATION\nFOR YOUR CHILD\nThe booking service will provide an option\nfor parents to book a vaccine for their\nchild vaccination, accessible on\nonline for everyone',
        },
        {
            url: image2,
            caption: 'image 2 caption',
        },
        {
            url: image3,
            caption: 'image 1 caption',
        },
        {
            url: image4,
            caption: 'image 1 caption',
        },
        {
            url: image1,
            caption: 'image 1 caption',
        },
    ];

    const renderSliderItem = (item) => (
        <div >
            <img src={item.url} alt={item.caption} style={imageStyle}/>
        </div>
    );

    const splitCaption = (caption) => caption.split('\n');

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

    const imageStyle = {
        opacity: 0.5, // Set the desired opacity value (0.0 - 1.0)
    };

    return (
        <>
              <Navbar />
            {/* slider images */}
            <Row id='home'>
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
                                <div className={`caption-line caption-line-${index}`} key={index}>
                                    {line}
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Vaccine details by age */}
            <Row>
                <Col span={12} style={{ padding: '50px', paddingLeft: '5%' }}>
                    <Row style={{ paddingLeft: '8%' }}>
                        <span style={{ fontSize: '35px', fontWeight: 'bold', marginBottom: '5px' }}>Why Vaccinate?</span>
                    </Row>
                    <Row style={{ paddingLeft: '8%' }}>
                        <img src={image7} alt="image1" style={{ width: '80%', height: '100%', marginTop: '20px', borderRadius: '10px'}} />
                    </Row>
                    <Row style={{ paddingLeft: '8%' }}>
                        <span style={{ fontSize: '25px', marginTop: '20px' }}>Reasons to Vaccinate Your Child</span>
                    </Row>
                    <Row style={{ paddingLeft: '8%' }}>
                        <p style={{ fontSize: '15px', marginTop: '10px' }}>On-time vaccination helps provide immunity<br />against potentially life-threatening diseases.</p>
                    </Row>
                    <Row style={{ paddingLeft: '8%' }}>
                        <Button type="primary" style={{ width: '200px', height: '45px', backgroundColor: '#1976d2', fontWeight: 'bolder', fontSize: '20px', marginBottom: '20px' }}>
                            Why Vaccinate
                        </Button>
                    </Row>
                </Col>
                <Col span={12} style={{ padding: '50px', paddingLeft: '5%' }}>
                    <Row style={{ paddingLeft: '8%' }}>
                        <span style={{ fontSize: '35px', fontWeight: 'bold', marginBottom: '5px' }}>Vaccines By Age</span>
                    </Row>
                    <Row style={{ paddingLeft: '8%', paddingTop: '50px' }}>
                        <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">New Born</span>
                        </button>
                        <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">1 -2 Months</span>
                        </button>
                        <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">4 Months</span>
                        </button>
                    </Row>
                    <Row style={{ paddingLeft: '8%', paddingTop: '50px' }}>

                        <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">6 Months</span>
                        </button>
                        <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">7 - 11 Months</span>
                        </button>
                        <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">12 - 23 Months</span>
                        </button>
                    </Row>
                    <Row style={{ paddingLeft: '8%', paddingTop: '50px' }}>
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
                    <Row style={{ paddingLeft: '8%', paddingTop: '50px' }}>
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
            <Row style={{ backgroundColor: '#f6f3ee' }} id='about'>
                <Col span={12} style={{ padding: '20px' }}>
                    <Row style={{ paddingLeft: '18%' }}>
                        <h3 style={{ fontSize: '48px' }}>About</h3>
                    </Row>
                    <Row className="horizontal-line" ></Row>
                    <Row style={{ paddingLeft: '18%' }}>
                        <p style={{ fontSize: '20px' }}>
                            The About page is the core description of your website. Here<br />is where you let clients know what your website is about.<br />You can edit all of this text and replace it with what you<br />want to write. For example you can let them know how long<br />you have been in business, what makes your company<br />special, what are its core values and more.<br /><br />

                            Edit your About page from the Pages tab by clicking the edit<br />button.
                        </p>
                    </Row>
                </Col>
                <Col span={12} style={{ padding: '100px' }}>
                    <img src={image10} alt="image1" style={{ width: '100%', height: '100%' }} />
                </Col>
            </Row>

            {/* Donate page */}
            <Row>
                <Row style={{ width: '100%' }} id='donate'>
                    <h3 style={{ fontSize: '48px', width: '100%', textAlign: 'center' }}>Donate</h3>
                </Row>
                <Row className="horizontal-line-donate" ></Row>
                <Row style={{ width: '100%' }}>
                    <Col span={12} style={{ width: '100%', paddingTop: '55px' }}>
                        <Row style={{ paddingLeft: '18%' }}>
                            <p style={{ fontSize: '20px' }}>
                                This page is used for setting up your website to receive donations. It can<br />be used for causes and charities to collect money. You can edit all of this<br />text and replace it with what you want to write. Edit your Donate from<br />the Pages tab by clicking the edit button.
                            </p>
                        </Row>
                        <Row style={{ padding: '10px 150px 10px 160px' }}>
                            <img src={image6} alt="image6" style={{ width: '100%', height: '100%' }} />
                        </Row>
                    </Col>
                    <Col span={12} style={{ width: '100%', padding: '90px 100px' }}>
                        <Card sx={{ minWidth: 275 }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '30px 60px', backgroundColor: '#f6f3ee', width: '60%', marginTop: '20px' }}>
                            <Row><span style={{ fontSize: '100px', color: 'brown' }}>100 Rs</span></Row>
                            <Row><span style={{ fontSize: '30px', color: 'black', marginTop: '10px', marginBottom: '20px' }}>Donation Amount</span></Row>
                            <Row>
                                <Button className='donate-btn'>Rs 10</Button>
                                <Button className='donate-btn'>Rs 25</Button>
                                <Button className='donate-btn'>Rs 50</Button>
                                <Button className='donate-btn'>Rs 100</Button>
                                <Button className='donate-btn'>Rs 200</Button>
                            </Row>
                            <Row>
                                <Button style={{ marginTop: '30px', color: 'brown', border: '1px solid brown' }}>Other</Button>
                            </Row>
                            <Row>
                                <Button type="primary" style={{ marginTop: '50px', width: '300px', height: '45px', backgroundColor: 'brown', fontWeight: 'bolder', fontSize: '20px' }}>
                                    Donate Now
                                </Button>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Row>

            {/* Contact page */}
            <Row style={{ backgroundColor: '#f6f3ee' }} id='contact'>
                <Row style={{ width: '100%' }}>
                    <h3 style={{ fontSize: '48px', width: '100%', textAlign: 'center' }}>Contact</h3>
                </Row>
                <Row className="horizontal-line-donate" ></Row>
                <Row style={{ width: '100%' }}>
                    <Col span={12} style={{ width: '100%', padding: '50px' }}>
                        {/* <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: '10px' }}> */}
                        <Form
                            {...layout}
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{
                                maxWidth: 800,
                                padding: '50px'
                            }}
                        >
                            <Form.Item
                                name={['user', 'name']}
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
                                name={['user', 'email']}
                                label="Email"
                                rules={[
                                    {
                                        type: 'email',
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'age']}
                                label="Phone Number"
                                rules={[
                                    {
                                        type: 'number',
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'Message']}
                                label="Message"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}>
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    ...layout.wrapperCol,
                                    offset: 8,
                                }}
                            >
                                <Button type="primary" htmlType="submit" style={{ marginLeft: '84%', marginTop: '5%' }}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        {/* </Card> */}

                    </Col>
                    <Col span={12} style={{ width: '100%', paddingLeft: '200px', paddingTop: '1%' }}>
                        <Row>
                            <img src={image8} alt="image8" style={{ width: '15%', height: '15%' }} />
                        </Row>
                        <Row>
                            <span style={{ marginLeft: '22px', fontSize: '28px', fontWeight: 'bolder', marginTop: '10px' }}>Ministry Of Health</span>
                        </Row>
                        <Row>
                            <p style={{ marginLeft: '22px', fontSize: '18px', marginTop: '10px' }}>SUWASIRIPAYA, No 385, Rev.<br/>Baddegama Wimalawansa Thero Mawatha,<br/>Colombo 10, Sri Lanka.<br/>Telephone(General):<br/>(+94)112 694033, (+94)112 675011,<br/> (+94)112 675449, (+94)112 693493</p>
                        </Row>
                        <Row>
                            <span style={{ marginLeft: '22px', fontSize: '22px', fontWeight: 'bolder', marginTop: '10px' }}>Social Links</span>
                        </Row>
                        <Row style={{display:'flex', flexDirection:'row'}}>
                            <Col span={3} style={{width:'100%', height:'100%'}}><a href="https://twitter.com/MoH_SriLanka" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" style={{ width: '65%', height: '65%', marginLeft:'5px' }} /></a></Col>
                            <Col span={3} style={{width:'100%', height:'100%'}}><a href="https://web.facebook.com/MoHNIMSriLanka/?_rdc=1&_rdr" target="_blank" rel="noreferrer"><img src={facebook} alt="twitter" style={{ width: '60%', height: '60%' }} /></a></Col>
                            <Col span={3} style={{width:'100%', height:'100%'}}><a href="https://www.youtube.com/channel/UCqcu0trpaF_EEgs9dBsYJcw/featured" target="_blank" rel="noreferrer" ><img src={youtube} alt="twitter" style={{ width: '55%', height: '55%' }} /></a></Col> 
                        </Row>
                    </Col>
                </Row>
            </Row>
        </>
    );
};

export default Home;
