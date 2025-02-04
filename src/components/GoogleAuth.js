import React, { useState } from 'react';
import Navbar from './Navbar';

const GoogleAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    // This is a mock authentication
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="text-center mt-5">
        <h2>{isLoggedIn ? 'Dashboard' : 'Sign In'}</h2>
        <div className="mt-3">
          {isLoggedIn ? (
            <button 
              className="btn btn-danger"
              onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <button 
              className="btn btn-primary"
              onClick={handleSignIn}>
              Sign In with Google
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
