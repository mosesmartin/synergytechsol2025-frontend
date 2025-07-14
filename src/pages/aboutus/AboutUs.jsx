import React from 'react'
import Header from '../../component/Header/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./about.css"
import about1 from "../../assets/about1_synergytech.avif"
import about2 from "../../assets/about2_synergytech.avif"
import about3 from "../../assets/about3_synergytech.avif"
import { Helmet } from 'react-helmet';
export default function AboutUs() {
  return (
    <>
     <Helmet>
        <title>About Us | Synergy Tech Solutions</title>
        <meta
          name="description"
          content="Learn about Synergy Tech Solutions — a passionate team delivering innovative web applications, digital solutions, and affordable, cutting-edge technologies that empower business growth."
        />
        <meta
          name="keywords"
          content="About Synergy Tech Solutions, Business Growth, Web Development Company, Affordable IT Solutions, Digital Solutions Provider"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.synergytechsol.com/aboutus" />
      </Helmet>


    <Header backgroundImage={about1} typeText= {"Synergy Tech Solutions"}  typeText1={"About Us"}/>
    
      <Container>
        <Row>
          <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
          <h2>Empowering Business Growth</h2>
          </Col>
        </Row>
      </Container>
  <Container className="text-center text-justify mt-5">
          
          <Row>
            <Col md={12} xs={12} lg={6}>
              <p className="text1 mt-5" style={{fontSize:'18px'}}>
              At Synergy Tech Solutions, we pride ourselves on being a team of highly skilled and experienced professionals who are deeply passionate about creating exceptional web applications. Our journey started with a vision to transform the digital landscape by offering innovative and customized solutions to businesses. As the years have gone by, we have earned a reputation as a reliable partner for businesses in diverse industries, assisting them in reaching their objectives and fostering their growth.
              </p>
             
            </Col>
            <Col md={12} xs={12} lg={6}>
              <img
                className="gif"
                style={{ width: "100%", marginTop: "-6px" }}
                src={about2}
                alt="Synergy Tech Sol"
              />
            </Col>
          </Row>

          <Container>
                <Row>
                  <Col >
                  <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
          <h2>Our Mission: Advancing Quality and Affordability</h2>
          </Col>
                  </Col>
                </Row>
              </Container>

          <Container className="text-center text-justify mt-5">
            <Row>
              <Col className="orderimg" md={12} xs={12} lg={6}>
                <img
                  className="abutimg  "
                  style={{ width: "100%" }}
                  src={about3}
                  alt="Synergy Tech Sol"
                />
              </Col>

              
              <Col
                md={12}
                lg={6}
                xs={{ span: 12, order: 1 }}
                // data-aos="fade-down"
                // data-aos-offset="90"
              >
              
                <Col>
                  <p className="text1" style={{fontSize:'18px'}}>
                  At Synergy Tech Solutions, our mission is to offer our customers the most advanced and cutting-edge solutions that are not only high in quality but also affordable. We are committed to providing innovative and customized products that meet the evolving needs of our customers. By staying at the forefront of technology and constantly upgrading our skills, we ensure that our solutions are effective, efficient, and exceed customer expectations. Our dedication to delivering exceptional value enables us to empower businesses of all sizes to thrive in the digital landscape. We strive to make advanced technology accessible and affordable, driving the success and growth of our customers.
                  </p>
                </Col>
              </Col>
            </Row>
          </Container>

        </Container>
    </>
  )
}
