import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import UserDetailPage from './components/UserDetails/UserDetailPage';
import Footer from './components/footer/footer';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:id" element={<UserDetailPage />} />
    </Routes>
    <Footer/>
  </Router>
);

export default App;
