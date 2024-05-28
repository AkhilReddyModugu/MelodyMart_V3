import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">MelodyMart</h5>
            <p>
              Your one-stop destination for all your musical needs. Explore our wide range of instruments, accessories, and music lessons.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">Home</a>
              </li>
              <li>
                <a href="/signup" className="text-dark">SignUp</a>
              </li>
              <li>
                <a href="/login" className="text-dark">Login</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <p className="text-dark mb-0">Email: info@melodymart.com</p>
              </li>
              <li>
                <p className="text-dark mb-0">Phone: +123 456 7890</p>
              </li>
              <li>
                <p className="text-dark mb-0">Address: 123 Music Street, Melody City</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2024 MelodyMart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
