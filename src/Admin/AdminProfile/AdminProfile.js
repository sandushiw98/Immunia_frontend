// this is the admin profile page
import React, { useState } from 'react';
import { Col, Image, Row } from 'antd';
import { Button, Form, Input } from 'antd';
import { LockOutlined, MobileOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import './AdminProfile.css';
import AdminNavbar from '../AdminNavbar/AdminNavbar';


const AdminProfile = () => {

    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({});

    return (
        <>
            <AdminNavbar />
            <Row style={{paddingTop:'100px'}}>
                <Col span={24} style={{ width: '100%', textAlign: 'center', fontSize: '18px' }}>
                    <h1>Profile</h1>
                </Col>
            </Row>

            <Row>
                <Col span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Form name="horizontal_login"
                        style={{ width: '45%', paddingTop: '30px' }}
                        onFinish={(values) => {
                            console.log(values); // Handle form submission
                            setEditMode(false);
                        }}
                        initialValues={formData} // Set initial form values from the state
                        onValuesChange={(changedValues) => setFormData({ ...formData, ...changedValues })} >
                        <Row>
                            <Col span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '20px' }}>
                                {editMode ? (
                                    <>
                                        <Image
                                            width={150}
                                            height={150}
                                            style={{ borderRadius: '50%' }}
                                            src={formData.image || 'https://hips.hearstapps.com/hmg-prod/images/best-animated-movies-05-encanto-1669748585.jpeg'}
                                            fallback="https://hips.hearstapps.com/hmg-prod/images/best-animated-movies-05-encanto-1669748585.jpeg"
                                        />
                                        <Button
                                            type="primary"
                                            onClick={() => {
                                                // Handle image update logic
                                                // You can open a file picker or show a modal to select a new image
                                            }}
                                            style={{ marginTop: '13%', color: 'blue', backgroundColor: 'white', borderColor: 'blue' }}
                                        >
                                            Upload Image
                                        </Button>
                                    </>
                                ) : (
                                    <Image
                                        width={150}
                                        height={150}
                                        style={{ borderRadius: '50%' }}
                                        src="https://hips.hearstapps.com/hmg-prod/images/best-animated-movies-05-encanto-1669748585.jpeg"
                                        fallback="https://hips.hearstapps.com/hmg-prod/images/best-animated-movies-05-encanto-1669748585.jpeg"
                                    />
                                )}
                            </Col>

                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="firstname"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your firstname!',
                                        },
                                    ]}
                                >
                                    <Input
                                        className='input-field'
                                        disabled={!editMode}
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        placeholder="First Name"
                                        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} // Store updated value in the state
                                        value={formData.firstname} // Set input value from state to retain the updated value
                                        defaultValue="Sandushi"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="lastname"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your lastname',
                                        },
                                    ]}
                                >
                                    <Input
                                        className='input-field'
                                        disabled={!editMode}
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        placeholder="Last Name"
                                        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} // Store updated value in the state
                                        value={formData.firstname} // Set input value from state to retain the updated value
                                        defaultValue="Weraduwa"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email',
                                        },
                                    ]}
                                >
                                    <Input
                                        className='input-field'
                                        disabled={!editMode}
                                        prefix={<MailOutlined className="site-form-item-icon" />}
                                        placeholder="Email"
                                        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} // Store updated value in the state
                                        value={formData.firstname} // Set input value from state to retain the updated value
                                        defaultValue="sandushi@gmail.com"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    name="number"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phone number',
                                        },
                                    ]}
                                >
                                    <Input
                                        className='input-field'
                                        disabled={!editMode}
                                        prefix={<MobileOutlined className="site-form-item-icon" />}
                                        placeholder="Phone Number"
                                        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} // Store updated value in the state
                                        value={formData.firstname} // Set input value from state to retain the updated value
                                        defaultValue="0773294197"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    name="oldPassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your old password',
                                        },
                                    ]}
                                >
                                    <Input
                                        className='input-field'
                                        disabled={!editMode}
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Old Password"
                                        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} // Store updated value in the state
                                        value={formData.firstname} // Set input value from state to retain the updated value
                                        defaultValue="Sandushi@123"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    name="newPassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your new password',
                                        },
                                    ]}
                                >
                                    <Input
                                        className='input-field'
                                        type="password"
                                        disabled={!editMode}
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        placeholder="New Password"
                                        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} // Store updated value in the state
                                        value={formData.firstname} // Set input value from state to retain the updated value
                                        defaultValue="Sandushi@123"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    name="confirmPassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Confirm password',
                                        },
                                    ]}
                                >
                                    <Input
                                        className='input-field'
                                        type="password"
                                        disabled={!editMode}
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        placeholder="Confirm Password"
                                        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} // Store updated value in the state
                                        value={formData.firstname} // Set input value from state to retain the updated value
                                        defaultValue="Sandushi@123"
                                    />

                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} style={{ display: 'flex', alignItems: 'right', justifyContent: 'right' }}>
                                {editMode ? (
                                    <>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            style={{ width: '120px', height: '40px', fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            type="default"
                                            onClick={() => {
                                                setEditMode(false);
                                                setFormData({}); // Clear the form data
                                            }}
                                            style={{ width: '120px', height: '40px', fontSize: '16px', fontWeight: 'bold' }}
                                        >
                                            Cancel
                                        </Button>
                                    </>
                                ) : (
                                    <Button
                                        type="primary"
                                        onClick={() => setEditMode(true)}
                                        style={{ width: '120px', height: '40px', fontSize: '16px', fontWeight: 'bold' }}
                                    >
                                        Edit
                                    </Button>
                                )}
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default AdminProfile;