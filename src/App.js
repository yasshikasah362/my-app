import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';
import Counter from './components/Counter';
import GoogleAuth from './components/GoogleAuth';
import { GoogleOAuthProvider } from '@react-oauth/google';  // Import the provider

const App = () => {
  return (
    <GoogleOAuthProvider clientId="513303851525-i14msql7u6pjrhurb7jhf9br4j5po8ap.apps.googleusercontent.com">  {/* Add your Google Client ID here */}
      <Router>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Dashboard />} />
          <Route path="/userdata" element={<UserDataForm />} />
          <Route path="/texteditor" element={<RichTextEditor />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/googleauth" element={<GoogleAuth />} />
          <Route path="*" element={<HomePage />} />  {/* Default route */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
