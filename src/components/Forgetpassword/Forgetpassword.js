import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';

const Forgetpassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleChagepassword = () => {
    setIsModalOpen(false);
    // Perform the logic to handle password change here
    // For example, you can get the input values using refs and perform password update logic
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '50px', border: '1px' }}>
      <Button type="primary" onClick={showModal}>
        Forgot Passowrd
      </Button>
      <Modal
        title={<h2 style={{ textAlign: 'center', fontSize: '24px',paddingTop: '20px'}}>Forgot Password</h2>}
        visible={isModalOpen}
        footer={[
            
          <Button key="ok" type="primary" onClick={handleChagepassword} >
            Send
          </Button>,
         
        ]}
        onCancel={() => setIsModalOpen(false)} // Remove the default cancel behavior
      >
        <p>We will be sending a reset password link to your email</p>
        <Input placeholder="Enter your email" /><br/><br/>
        
      </Modal>
    </div>
  );
};

export default Forgetpassword ;

