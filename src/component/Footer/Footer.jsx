import React from "react";
import logo from "../../assets/Logo.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Footer.css";

const date = new Date();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
};
const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "black", color: "white" }}
        className="mt-5"
      >
        <Container>
          <Row>
            <Col md={4} xs={12} className="text-start">
              <Link to="/">
                <img
                  className="logofooter"
                  src={logo}
                  alt="Synergy tech solutions"
                />
              </Link>
            </Col>

            <Col
              md={4}
              xs={12}
              className="footerservices"
              style={{ marginTop: "20px" }}
            >
              <h5 className="text-start">Services</h5>
              <div className="list text-start">
                <Link className="linkList" to="/FullStackDev">
                  <li>Full stack Development</li>
                </Link>
                <Link className="linkList" to="/MobileAppDevelopment">
                  <li>Mobile App Development</li>
                </Link>
                <Link className="linkList" to="/Ecommerces">
                  <li>E-Commerce</li>
                </Link>
                <Link className="linkList" to="/CustomerService">
                  <li>Customer Services</li>
                </Link>
                <Link className="linkList" to="/DigitalMedia">
                  <li>Digital Media Marketing</li>
                </Link>
                <Link className="linkList" to="/FinancialServices">
                  <li>Financial Services</li>
                </Link>
                <Link className="linkList" to="/UiUxDesign">
                  <li>UI/UX Design</li>
                </Link>
                <Link className="linkList" to="/HrManagement">
                  <li>Human Resources Management</li>
                </Link>
                <Link className="linkList" to="/BrandingSalesMarket">
                  <li>Brand Sales & Marketing</li>
                </Link>
                <Link className="linkList" to="/EmailChatSupport">
                  <li>Email & Chat Support</li>
                </Link>
              </div>
            </Col>

            <Col md={4} xs={12} className="text-start">
              <h5 style={{ marginTop: "20px" }} className="text-start">
                Contact
              </h5>
              <li className="conlist">
                <i className="bi bi-inbox"></i> sales@synergytechsol.com
              </li>
              <h5 style={{ marginTop: "20px" }}>Phone Number</h5>
              <li className="conlist">
                <i className="bi-phone"></i> +1 815 219 1969
              </li>
              
              
            </Col>
          </Row>
        </Container>
      </div>

      <div className="text-center bg-black text-white">
        <Container>
          <Row>
            <span className="fDetail">
              All Rights Reserved © Synergy Tech Solutions{" "}
              {new Date().getFullYear()}
            </span>
          </Row>
         
        </Container>
      </div>
    </>
  );
};

export default Footer;
