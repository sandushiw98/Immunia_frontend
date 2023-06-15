import React from 'react';
import { Layout, Row, Col } from 'antd';
import Sidebar from '../../vaccinationByAge/SideBar/Sidebar';
import cover from '../../assets/images/birth.png';
import './NewBorn.css';

const { Content } = Layout;

const NewBorn = () => {
    return (
        <Layout>
            <Sidebar />
            <Layout >
                <Content style={{ margin: '24px 16px 0' }}>
                    <Row style={{ padding: '30px 100px 60px 100px', background: '#fff', minHeight: '100vh' }}>
                        <Col style={{minWidth:'100%'}}>
                            <Row style={{paddingBottom:'30px'}}>
                                <span style={{ fontSize: '45px' }}>Vaccines Shortly after Birth</span>
                            </Row>
                            <Row>
                                <img src={cover} alt="Vaccines Shortly after Birth" style={{ width: '100%' }} />
                            </Row>
                            <Row style={{paddingTop:'30px'}}>
                                <span style={{ fontSize: '35px' }}>Vaccines your baby should get</span>
                            </Row>
                            <Row>
                                <p style={{fontSize:'18px'}}>Whether you’re becoming a parent for the first time or you’ve been here before, your baby’s birth is an exciting time. This is also the first time your infant will be vaccinated. Your first opportunity to protect your child from serious diseases.</p>
                            </Row>
                            <Row style={{paddingTop:'10px'}}>
                                <span style={{ fontSize: '28px' }}>Hepatitis B (HepB)</span>
                            </Row>
                            <Row style={{paddingTop:'10px'}}>
                                <span style={{ fontSize: '20px' }}>1st dose of 3</span>
                            </Row>
                            <Row style={{paddingTop:'10px'}}>
                                <p style={{fontSize:'18px'}}>Hepatitis B is an infectious and potentially serious disease that can cause liver damage and liver cancer. There is no cure for hepatitis B. Mothers can unknowingly pass the hepatitis B virus to their babies at birth, which is why babies should get their first dose within 24 hours of birth.</p>
                            </Row>
                            <Row>
                                <p style={{fontSize:'18px'}}><b>If you have hepatitis B</b>, your baby should get the first shot of hepatitis vaccine within 12 hours of birth. There’s additional medicine that can help protect your newborn against hepatitis B; it’s called hepatitis B immune globin (HBIG). HBIG gives your baby’s body extra help to fight the virus as soon as your baby is born.</p>
                            </Row>
                            <Row style={{paddingTop:'30px'}}>
                                <span style={{ fontSize: '35px' }}>Care for your child after vaccinations</span>
                            </Row>
                            <Row style={{paddingTop:'10px'}}>
                                <span style={{ fontSize: '22px' }}>Give your child extra care and attention</span>
                            </Row>
                            <Row>
                                <p style={{fontSize:'18px'}}>Pay extra attention to your baby for a few days. If you see something that concerns you, call your baby’s doctor.</p>
                                <ul style={{fontSize:'15px'}}>
                                    <li>Read the Vaccine Information Sheet(s) your baby’s doctor gave you to learn about side effects your baby may experience.</li>
                                    <li>Swaddle.</li>
                                    <li>Offer breastmilk or formula more often. It is normal for some babies to eat less during the 24 hours after getting vaccines.</li>
                                </ul>
                            </Row>
                            <Row style={{paddingTop:'10px'}}>
                                <span style={{ fontSize: '22px' }}>Treat mild reactions</span>
                            </Row>
                            <Row>
                                <p style={{fontSize:'18px'}}>Sometimes children have mild reactions from vaccines, such as pain at the injection site or a rash. These reactions, also called side effects, are normal and will soon go away.</p>
                                <ul style={{fontSize:'15px'}}>
                                    <li>Use a cool, damp cloth to help reduce redness, soreness, and/or swelling at the injection site.</li>
                                    <li>Reduce fever with a cool sponge bath.</li>
                                    <li>Ask your baby’s doctor if you can give your baby a non-aspirin pain reliever.</li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};

export default NewBorn;