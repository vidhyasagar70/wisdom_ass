import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/images/logo.jpeg" alt="Logo" className="footer-logo" />
        <div className="footer-links">
          <div className="footer-column">
            <h3>Our Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Marketing Services</h3>
            <ul>
              <li><a href="#">SEO Services</a></li>
              <li><a href="#">Digital Marketing Services</a></li>
              <li><a href="#">Social Media Management</a></li>
              <li><a href="#">Content Writing</a></li>
              <li><a href="#">Email Marketing Services</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Technical Services</h3>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Software Development</a></li>
              <li><a href="#">Application Development</a></li>
              <li><a href="#">AI/ML Services</a></li>
              <li><a href="#">Data Analytics & Engineering</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social-links">
            <a href="https://www.facebook.com/people/Wisdom-Peak-Analytics/61562792246721/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            
            <a href="https://www.linkedin.com/company/wisdom-peak-analytics/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <p className="footer-copyright">
            Copyright © codiqbe-tech technology Pvt. Ltd. -2024 All rights reserved || 
            <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Refund Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
