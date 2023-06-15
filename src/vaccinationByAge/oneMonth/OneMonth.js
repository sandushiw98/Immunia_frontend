import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import Sidebar from '../../vaccinationByAge/SideBar/Sidebar';
import cover from '../../assets/images/1-2-months.png';
import { Collapse } from 'antd';
import './OneMonth.css';

const { Content } = Layout;
const { Panel } = Collapse;


const OneMonth = () => {

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
                                <span style={{ fontSize: '45px' }}>Vaccines at 1 to 2 Months</span>
                            </Row>
                            <Row>
                                <img src={cover} alt="Vaccines Shortly after Birth" style={{ width: '100%' }} />
                            </Row>
                            <Row style={{ paddingTop: '30px' }}>
                                <span style={{ fontSize: '35px' }}>Vaccines your baby should get</span>
                            </Row>
                            <Row>
                                <p style={{ fontSize: '18px' }}>During the first months of your baby’s life, routine vaccines can help protect your child from a variety of serious or potentially fatal diseases.<br /><br />At 1 to 2 months, your baby should receive vaccines to protect them from the following diseases:</p>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Collapse
                                    // expandIconPosition="right"
                                    className={`expandable-component ${expanded ? 'expanded' : ''}`}
                                    expandIcon={({ isActive }) => <span className={`arrow-icon ${isActive ? 'expanded' : ''}`} />}
                                >
                                    <Panel
                                        header={
                                            <div onClick={handleExpand}>
                                                <span style={{fontSize: '22px'}}>Diphtheria, tetanus and whooping cough (pertussis) (DTaP)</span>
                                            </div>
                                        }
                                    >
                                        {/* Content of the expandable component */}
                                        {expanded && <div className="additional-content">
                                            <Row>
                                                <span style={{ fontSize: '20px' }}>1st dose of 3</span>
                                            </Row>
                                            <Row style={{ paddingTop: '10px' }}>
                                                <p style={{ fontSize: '18px' }}>A DTaP vaccine is the best protection from three serious diseases: diphtheria, tetanus, and whooping cough (pertussis). All three of these diseases can be deadly for people of any age, and whooping cough is especially dangerous for babies.</p>
                                            </Row>
                                        </div>}
                                    </Panel>
                                </Collapse>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Collapse
                                    // expandIconPosition="right"
                                    className={`expandable-component ${expanded ? 'expanded' : ''}`}
                                    expandIcon={({ isActive }) => <span className={`arrow-icon ${isActive ? 'expanded' : ''}`} />}
                                >
                                    <Panel
                                        header={
                                            <div onClick={handleExpand}>
                                                <span style={{fontSize: '22px'}}>Haemophilus influenzaae type B disease (Hib)</span>
                                            </div>
                                        }
                                    >
                                        {/* Content of the expandable component */}
                                        {expanded && <div className="additional-content">
                                            <Row>
                                                <span style={{ fontSize: '20px' }}>1st dose of 3 or 4</span>
                                            </Row>
                                            <Row style={{ paddingTop: '10px' }}>
                                                <p style={{ fontSize: '18px' }}>Hib disease is a serious illness caused by the bacteria Haemophilus influenzae type b (Hib). Babies and children younger than 5 years old are most at risk for Hib disease. It can cause lifelong disability and be deadly. Doctors recommend that your child get three or four doses of the Hib vaccine (depending on the brand).</p>
                                            </Row>
                                        </div>}
                                    </Panel>
                                </Collapse>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Collapse
                                    // expandIconPosition="right"
                                    className={`expandable-component ${expanded ? 'expanded' : ''}`}
                                    expandIcon={({ isActive }) => <span className={`arrow-icon ${isActive ? 'expanded' : ''}`} />}
                                >
                                    <Panel
                                        header={
                                            <div onClick={handleExpand}>
                                                <span style={{fontSize: '22px'}}>Hepatitis B (HepB)</span>
                                            </div>
                                        }
                                    >
                                        {/* Content of the expandable component */}
                                        {expanded && <div className="additional-content">
                                            <Row>
                                                <span style={{ fontSize: '20px' }}>2nd dose of 3</span>
                                            </Row>
                                            <Row style={{ paddingTop: '10px' }}>
                                                <p style={{ fontSize: '18px' }}>Hepatitis B is an infectious and potentially serious disease that can cause liver damage and liver cancer. If babies are infected at birth, hepatitis B can be a lifelong, chronic infection.  There is no cure for hepatitis B, but the hepatitis B vaccine is the best way to prevent it.</p>
                                            </Row>
                                        </div>}
                                    </Panel>
                                </Collapse>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Collapse
                                    // expandIconPosition="right"
                                    className={`expandable-component ${expanded ? 'expanded' : ''}`}
                                    expandIcon={({ isActive }) => <span className={`arrow-icon ${isActive ? 'expanded' : ''}`} />}
                                >
                                    <Panel
                                        header={
                                            <div onClick={handleExpand}>
                                                <span style={{fontSize: '22px'}}>Pneumococcal disease</span>
                                            </div>
                                        }
                                    >
                                        {/* Content of the expandable component */}
                                        {expanded && <div className="additional-content">
                                            <Row>
                                                <span style={{ fontSize: '20px' }}>1st dose of 4</span>
                                            </Row>
                                            <Row style={{ paddingTop: '10px' }}>
                                                <p style={{ fontSize: '18px' }}>Pneumococcal disease can cause potentially serious and even deadly infections. The pneumococcal conjugate vaccine  protects against the bacteria that cause pneumococcal disease.</p>
                                            </Row>
                                        </div>}
                                    </Panel>
                                </Collapse>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Collapse
                                    // expandIconPosition="right"
                                    className={`expandable-component ${expanded ? 'expanded' : ''}`}
                                    expandIcon={({ isActive }) => <span className={`arrow-icon ${isActive ? 'expanded' : ''}`} />}
                                >
                                    <Panel
                                        header={
                                            <div onClick={handleExpand}>
                                                <span style={{fontSize: '22px'}}>Polio (IPV)</span>
                                            </div>
                                        }
                                    >
                                        {/* Content of the expandable component */}
                                        {expanded && <div className="additional-content">
                                            <Row>
                                                <span style={{ fontSize: '20px' }}>1st dose of 4</span>
                                            </Row>
                                            <Row style={{ paddingTop: '10px' }}>
                                                <p style={{ fontSize: '18px' }}>Polio is a disabling and life-threatening disease caused by poliovirus, which can infect the spinal cord and cause paralysis. It most often sickens children younger than 5 years old. Polio was eliminated in the United States with vaccination, and continued use of polio vaccine has kept this country polio-free.</p>
                                            </Row>
                                        </div>}
                                    </Panel>
                                </Collapse>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Collapse
                                    // expandIconPosition="right"
                                    className={`expandable-component ${expanded ? 'expanded' : ''}`}
                                    expandIcon={({ isActive }) => <span className={`arrow-icon ${isActive ? 'expanded' : ''}`} />}
                                >
                                    <Panel
                                        header={
                                            <div onClick={handleExpand}>
                                                <span style={{fontSize: '22px'}}>Rotavirus (RV)</span>
                                            </div>
                                        }
                                    >
                                        {/* Content of the expandable component */}
                                        {expanded && <div className="additional-content">
                                            <Row>
                                                <span style={{ fontSize: '20px' }}>1st dose of 2 or 3</span>
                                            </Row>
                                            <Row style={{ paddingTop: '10px' }}>
                                                <p style={{ fontSize: '18px' }}>Rotavirus can be very dangerous, even deadly for babies and young children. Doctors recommend that your child get two or three doses of the Rotavirus vaccine (depending on the brand).</p>
                                            </Row>
                                        </div>}
                                    </Panel>
                                </Collapse>
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

export default OneMonth;