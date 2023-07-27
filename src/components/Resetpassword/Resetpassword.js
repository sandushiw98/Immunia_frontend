import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';

const Resetpassword = () => {
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
        Reset Password
      </Button>
      <Modal
        title={<h2 style={{ textAlign: 'center', fontSize: '24px',paddingTop: '20px'}}>Reset Your Password</h2>}
        visible={isModalOpen}
        footer={[
            <div key="footer" style={{ textAlign: 'center' }}>
          <Button key="ok" type="primary" onClick={handleChagepassword} >
            Change Password
          </Button>,
          </div>
        ]}
        onCancel={() => setIsModalOpen(false)} // Remove the default cancel behavior
      >
        <Input placeholder="Enter your password" /><br/><br/>
        <Input placeholder="Confirm your new password" />
      </Modal>
    </div>
  );
};

export default Resetpassword;

