import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import UserDataForm  from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';
import Counter from './components/Counter';
import GoogleAuth from './components/GoogleAuth';


const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Dashboard />} />
        <Route path="/userdata" element={<UserDataForm />} />
        <Route path="/texteditor" element={<RichTextEditor />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/googleauth" element={<GoogleAuth />} />
      </Routes>
    </Router>
  );
};

export default App;
