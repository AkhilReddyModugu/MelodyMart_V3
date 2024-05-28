import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from './components/user/UserNavbar';
import Home from './components/user/Home';
import SignUp from './components/auth/Signup';
import Login from './components/auth/Login';
import Cart from './components/user/Cart';
import Orders from './components/user/Orders';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <UserNavbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
