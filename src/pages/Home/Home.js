import React from 'react'
import { Row, Col, Card } from 'antd'
import { Button } from '@material-ui/core'
import SimpleImageSlider from "react-simple-image-slider";
// import backgroundImage from '../../../src/assets/images/vaccine_istock_000015676356small.jpg'
import './Home.css'


const Home = () => {
    const sliderImages = [
        {
            url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTdUmK6fRPfPQIMyOxUOjiTnR2VYizvkkWUxLhGoVJNobm5Id3fpRhsIGtPj3H06ujPb4&usqp=CAU",
        },
        {
            url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQduUpBWhSdgkWqqIrSmw5MMU697Xlx3SCjlB4eZSv0Q&s",
        },
        {
            url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTnzApyh1ZmbXLBUg_iFRio23hzRyAJfwBRfnVozXdEnu-NK4jFt2_gsYujKf-CbT6Cr_A&usqp=CAU",
        },
        {
            url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTDnfOIY9gjVyoT4ulMp55roiV5KefqaDByUc0HdD8p3tdpXuwxTaXjhLdyUFeQzZ2ZwE&usqp=CAU",
        },
        {
            url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s",
        },
        {
            url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU",
        },
        {
            url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg",
        },
    ];
    return (
        <>

            <Row>
                <Col span={12} className="headet-text">
                    <h1>Schedule vaccination</h1>
                    <h1>for your child</h1>
                    <p>The booking service will provide an option<br />for parents to book a vaccine for their<br />child vaccination, accessible on<br />online for everyone</p>
                    <Button variant="contained">Learn more</Button>
                </Col>
                <Col span={12} style={{ padding: '50px', paddingTop: '90px' }}>
                    <SimpleImageSlider
                        width={750}
                        height={470}
                        images={sliderImages}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}
                    // onStartSlide={(index, length) => {
                    //     setImageNum(index);
                    // }}
                    // autoPlayDelay={3}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24} className="donation-section">
                    <h1>Donations</h1>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="donation-cont">
                    <h3>"No one has ever<br />become poor from<br />giving."</h3>
                </Col>
            </Row>
            <Row>
                <Col span={12} className="card-donation">
                    <Card bordered={false} style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', padding: '30px', backgroundColor:'#b2e4eb' }}>
                        <p>
                            The health sector of Sri Lanka has managed to<br />achieve remarkable progress over the years, mainly<br />through a network of well-established public<br />healthcare delivery institutions, which is free of charge<br />at the point of care.Through your generous donations,<br />you can be a part of our journey by providing essential<br />medical needs.
                        </p>
                    </Card>
                </Col>
                <Col span={12} style={{ padding: '50px' }}>
                    <Row style={{ padding: '80px 100px 80px 300px' }}>
                        <Button variant="contained" style={{ height: '60px', width: '200px', backgroundColor: 'rgb(58, 95, 175)', color: 'white', fontWeight:'bolder' }}>Watch video</Button>
                    </Row>
                    <Row style={{ padding: '80px 100px 80px 300px' }}>
                        <Button variant="contained" style={{ height: '60px', width: '200px', backgroundColor: 'rgb(58, 95, 175)', color: 'white',fontWeight:'bolder' }}>Donate now</Button>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="about-section">
                    <h1>About Us</h1>
                </Col>
            </Row>
            <Row>
                About Us section
            </Row>
            <Row>
                <Col span={24} className="contact-section">
                    <h1>Contact Us</h1>
                </Col>
            </Row>
            <Row>
                Contact Us section
            </Row>
        </>
    )
}

export default Home;
