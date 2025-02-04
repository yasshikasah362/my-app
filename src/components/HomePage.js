import React from 'react';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="text-center my-5">
        <h1>Welcome to the Home Page</h1>
        <p>Click on the links above to go to different pages with specific functionality.</p>
      </div>
    </div>
  );
};

export default HomePage;
