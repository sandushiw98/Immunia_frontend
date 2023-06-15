import React, { useState } from 'react';
import { Layout, Row, Col, Collapse } from 'antd';
import Sidebar from '../SideBar/Sidebar';
import cover from '../../assets/images/7-11-months.png';

const { Content } = Layout;
const { Panel } = Collapse;

const SevenMonth = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <Layout>
            <Sidebar />
            <Layout >
                <Content style={{ margin: '24px 16px 0' }}>
                    <Row style={{ padding: '30px 100px 60px 100px', background: '#fff', minHeight: '100vh' }}>
                        <Col style={{ minWidth: '100%' }}>
                            <Row style={{ paddingBottom: '30px' }}>
                                <span style={{ fontSize: '45px' }}>Vaccines at 7 to 11 Months</span>
                            </Row>
                            <Row>
                                <img src={cover} alt="Vaccines Shortly after Birth" style={{ width: '100%' }} />
                            </Row>
                            <Row style={{ paddingTop: '30px' }}>
                                <span style={{ fontSize: '35px' }}>Vaccines your baby should get</span>
                            </Row>
                            <Row>
                                <p style={{ fontSize: '18px' }}>There are no specific age-based vaccinations during this age range but talk to your child’s doctor about annual flu vaccination, and any vaccines that needed 3rd doses due at this time.</p>
                            </Row>

                           
                            <Row style={{paddingTop:'10px'}}>
                                <span style={{ fontSize: '28px' }}>Influenza (Flu)</span>
                            </Row>
                            <Row style={{paddingTop:'10px'}}>
                                <span style={{ fontSize: '20px' }}>Yearly</span>
                            </Row>
                            <Row style={{paddingTop:'10px'}}>
                                <p style={{fontSize:'18px'}}>Flu is a respiratory illness caused by influenza viruses. Flu spreads easily and can cause serious illness, especially in children younger than 5 years and children of any age with certain chronic conditions including asthma. Everyone 6 months of age and older should get a flu vaccine every year by the end of October.</p>
                            </Row>
                            <Row style={{ paddingTop: '30px' }}>
                                <span style={{ fontSize: '35px' }}>Care for your child after vaccinations</span>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <span style={{ fontSize: '22px' }}>Give your child extra care and attention</span>
                            </Row>
                            <Row>
                                <p style={{ fontSize: '18px' }}>Pay extra attention to your baby for a few days. If you see something that concerns you, call your baby’s doctor.</p>
                                <ul style={{ fontSize: '15px' }}>
                                    <li>Read the Vaccine Information Sheet(s) your baby’s doctor gave you to learn about side effects your baby may experience.</li>
                                    <li>Swaddle.</li>
                                    <li>Offer breastmilk or formula more often. It is normal for some babies to eat less during the 24 hours after getting vaccines.</li>
                                </ul>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <span style={{ fontSize: '22px' }}>Treat mild reactions</span>
                            </Row>
                            <Row>
                                <p style={{ fontSize: '18px' }}>Sometimes children have mild reactions from vaccines, such as pain at the injection site or a rash. These reactions, also called side effects, are normal and will soon go away.</p>
                                <ul style={{ fontSize: '15px' }}>
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

export default SevenMonth;