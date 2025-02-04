import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const UserDataForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });
  const [userID, setUserID] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    // Auto-generate User ID when the component mounts
    setUserID(`user_${Math.floor(Math.random() * 10000)}`);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      setIsDirty(true);
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('User data saved successfully!');
  };

  const handleBeforeUnload = (e) => {
    if (isDirty) {
      const confirmationMessage = 'You have unsaved changes. Do you really want to leave?';
      e.returnValue = confirmationMessage; // Standard for most browsers
      return confirmationMessage;
    }
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);

  return (
    <div className="container mt-4">
      <Navbar />
      <h2>User Data Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="form-control"
            id="address"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="form-control"
            id="phone"
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default UserDataForm;
