import React, { useState } from 'react';
import Navbar from './Navbar';
import { GoogleLogin, GoogleLogout } from '@react-oauth/google';

const GoogleAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Handle Google login success
  const handleLoginSuccess = (response) => {
    const credential = response.credential;
    // Decode the credential (JWT) and get user information
    const userData = decodeJwt(credential); // A function to decode JWT token if necessary
    setUser(userData);
    setIsLoggedIn(true);
  };

  // Handle Google login failure
  const handleLoginFailure = (error) => {
    console.log("Login Failed:", error);
    setIsLoggedIn(false);
  };

  // Handle Google logout
  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  // Decode JWT (optional depending on your setup)
  const decodeJwt = (token) => {
    // You can use a library like `jwt-decode` to decode the token, or write your own decoding function
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = JSON.parse(window.atob(base64));
    return decoded;
  };

  return (
    <div className="container">
      <Navbar />
      <div className="text-center mt-5">
        <h2>{isLoggedIn ? 'Dashboard' : 'Sign In'}</h2>
        <div className="mt-3">
          {isLoggedIn ? (
            <div>
              <h4>Welcome, {user ? user.name : 'User'}!</h4>
              <button
                className="btn btn-danger"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
              useOneTap
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
