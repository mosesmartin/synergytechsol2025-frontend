import React from "react";
import Header from "../../component/Header/Header";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import home1 from "../../assets/home1synergytechsol.avif"
import home2 from "../../assets/home2_synergytechsol.avif"
import { Helmet } from 'react-helmet';
export default function Home() {
  return (
    <>
    <Helmet>
        <title>Synergy Tech Solutions | Web & Digital Solutions</title>
        <meta
          name="description"
          content="Synergy Tech Solutions offers custom web app development, full-stack services, digital marketing, UI/UX design, and business solutions to help your brand grow online."
        />
        <meta
          name="keywords"
          content="Synergy Tech Solutions, Web Development, Full Stack Development, Digital Marketing, UI/UX Design, E-commerce Solutions, Business Services"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.synergytechsol.com/" />
      </Helmet>
      <Header
        backgroundImage={
      home1
        }
        headertext={""}
        typeText={"Synergy Tech Solutions"}
        typeText1={"Welcomes You"}
      />
      <Container>
        <Row>
          <Col md={12} className="text-center mt-5 ">
            <h2>Welcome to Synergy Tech Solutions</h2>

            <p style={{ fontSize: "16px" }}>
              Your trusted partner for web app development and digital
              solutions. We specialize in providing innovative and customized
              web applications, including full-stack development, that empower
              businesses to thrive in the digital world. Whether you're a
              startup looking to launch a new product or an established
              enterprise seeking to enhance your online presence, we have the
              expertise and passion to deliver exceptional results.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={12} className="text-center mt-5 ">
            <h2>Our Services</h2>
          </Col>
        </Row>

        {/* !...............Cards 1..........! */}
        <Row style={{ justifyContent: "space-around" }}>
          <Col md={3} xs={12} className=" card text-center mt-5 ">
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>Full Stack Development</h5>
              <p className="card-text">
                We build robust web apps with expertise in frontend and backend.
              </p>
              <Link to="/FullStackDev" className="btn btn-primary">
                Find Out More
              </Link>
            </div>
          </Col>
          <Col md={3} xs={12} className="card text-center mt-5 ">
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>Web App Development</h5>
              <p className="card-text">
                We develop custom web apps aligning with your business goals.
              </p>
              <Link to="/webappdevelopment" className="btn btn-primary">
                Find Out More
              </Link>
            </div>
          </Col>
          <Col md={3} xs={12} className=" card text-center mt-5 ">
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>Customer Services</h5>
              <p className="card-text">
              Exceptional service, exceeding expectations, lasting relationships.
              </p>
              <Link to="/CustomerService" className="btn btn-primary">
                Find Out More
              </Link>
            </div>
          </Col>

          {/* !...............Cards 1 ends..........! */}
        </Row>

        {/* !...............Cards 2..........! */}
        <Row style={{ justifyContent: "space-around" }}>
        
          <Col md={3} xs={12} className=" card text-center mt-5 ">
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>E-commerce</h5>
              <p className="card-text">
                Tap into e-commerce opportunities with our robust solutions.
              </p>
              <Link
                to="/Ecommerces"
                className="btn btn-primary"
                
              >
                Find Out More
              </Link>
            </div>
          </Col>
          <Col md={3} xs={12} className="card text-center mt-5 ">
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>Financial Services</h5>
              <p className="card-text">
              Customized financial solutions designed for your business success.
              </p>
              <Link
                to="/FinancialServices"
                className="btn btn-primary"
                
              >
                Find Out More
              </Link>
            </div>
          </Col>
          <Col md={3} xs={12} className=" card text-center mt-5 ">
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>UI/UX Design</h5>
              <p className="card-text">
                Engaging, intuitive user experiences. Stunning UI/UX design
                enhances branding.
              </p>
              <Link
                to="/UiUxDesign"
                className="btn btn-primary"
                
              >
                Find Out More
              </Link>
            </div>
          </Col>

          {/* !...............Cards2 ends..........! */}
        </Row>

        {/* !...............Cards 3..........! */}
        <Row style={{ justifyContent: "space-around" }}>
          <Col md={3} xs={12} className=" card text-center mt-5 ">
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>Human Resourses Management</h5>
              <p className="card-text">
              Optimize HR, streamline workforce, enhance engagement.
              </p>
              <Link to="/HrManagement" className="btn btn-primary">
                Find out More
              </Link>
            </div>
          </Col>
          <Col md={3} xs={12} className="card text-center mt-5 ">
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>Branding Sales & Marketing</h5>
              <p className="card-text">
                Strong brand identity drives sales with our branding services.
              </p>
              <Link
                to="/BrandingSalesMarket"
                className="btn btn-primary"
                
              >
                Find Out More
              </Link>
            </div>
            </Col>
         
          <Col md={3} xs={12} className=" card text-center mt-5 ">
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>Digital Media Marketing</h5>
              <p className="card-text">
              "Boost online presence, attract, convert with digital marketing.
              </p>
              <Link to="/DigitalMedia" className="btn btn-primary">
                Find Out More
              </Link>
            </div>
          </Col>

          {/* !...............Cards3 ends..........! */}

          {/* !...............Cards 3..........! */}
          <Row style={{ justifyContent: "space-around" }}>
            <Col md={3} xs={12} className="  text-center mt-5 "></Col>
            <Col md={3} xs={12} className="card text-center mt-5 ">
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight:'bold'}}>Email & Chat Support</h5>
                <p className="card-text">
                  Enhance customer service with email and chat support.
                </p>
                <Link to="/EmailChatSupport" className="btn btn-primary">
                  Find Out More
                </Link>
              </div>
            </Col>
            <Col md={3} xs={12} className=" text-center mt-5 "></Col>

            {/* !...............Cards3 ends..........! */}
          </Row>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={6} xs={12} lg={6} className="text-center">
            <h2 style={{ marginTop: "11px" }}>
              Integrated Business Solutions.
            </h2>
            <p
              style={{
                lineHeight: "29px",
                fontSize: "16px",
                textAlign: "justify",
              }}
            >
              {" "}
              Our team of dedicated professionals is driven by a relentless
              commitment to excellence. We combine cutting-edge technologies
              with industry best practices to create web applications that are
              not only visually stunning but also highly functional and
              user-friendly. With our expertise in full-stack development,
              customer services, digital marketing, financial services, UI/UX
              design, human resources, branding sales & marketing, e-commerce,
              and email & chat support, we offer comprehensive solutions that
              cater to all your business needs.
            </p>
          </Col>

          <Col md={6} xs={12} lg={6}>
            <img
              className="gif "
              style={{ width: "100%" }}
              src={home2}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
