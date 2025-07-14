import React from "react";
import Header from "../../component/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bsm from '../../assets/bsm_synergytech.avif'
import bsm3 from '../../assets/bsm3_synergytech.avif'
import bsm2 from '../../assets/bsm2_synergytech.jpg'

export const BrandingSalesMarket = () => {
  return (
    <>
      <Header
        backgroundImage={
          bsm
        }
        headertext={""}
        typeText={"Synergy Tech Solutions"}
        typeText1={"Branding Sales & Marketing"}
      />

      <Container>
        <Row>
          <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
            <h2>Branding, Sales, and Marketing</h2>
          </Col>
        </Row>
      </Container>
      <Container className="text-center text-justify mt-5">
        <Row>
          <Col
            md={12}
            xs={12}
            lg={6}
            style={{ display: "flex", alignItems: "center" }}
          >
            <p className="text1">
              Welcome to Synergy Tech Sol's Branding, Sales, and Marketing page.
              In today's competitive business landscape, effective branding,
              sales, and marketing strategies are essential for achieving growth
              and standing out from the competition. At Synergy Tech Sol, we
              understand the importance of creating a strong brand identity,
              driving sales, and reaching your target audience. In this section,
              we will provide valuable insights and strategies to help you build
              a powerful brand, optimize your sales efforts, and implement
              effective marketing campaigns.
            </p>
          </Col>
          <Col md={12} xs={12} lg={6}>
            <img
              className="gif"
              style={{ width: "100%", height: "68vh", objectFit: "cover" }}
              src={bsm2}
              alt="Synergy Tech Sol"
            />
          </Col>
        </Row>

        {/* !..................caards........................! */}
        <Container className="mt-5">
          <Row style={{ justifyContent: " space-evenly" }}>
            <Col
              md={5}
              className="card  "
              style={{ backgroundColor: "#e5e1e1" }}
            >
              <div className="card-body">
                <h3 className="card-title text-center">
                  Building a Strong Brand Identity
                </h3>
                <p className="card-text text-justify mt-3  text-center">
                  A strong brand identity sets you apart from competitors and
                  builds trust and loyalty among your customers. We will guide
                  you through the process of defining your brand's core values,
                  creating a compelling brand story, and developing a consistent
                  visual identity. Our experts will share tips on brand
                  positioning, logo design, brand messaging, and establishing
                  brand guidelines to ensure a cohesive and impactful brand
                  presence.
                </p>
              </div>
            </Col>
            <Col
              md={5}
              style={{ backgroundColor: "#e5e1e1" }}
              className="card marginCard  "
            >
              <div className="card-body">
                <h3 className="card-title text-center">
                  Sales Strategies and Techniques
                </h3>
                <p className=" marginCard card-text text-justify  mt-3 text-center">
                  Sales are the lifeblood of any business. We will explore
                  effective sales strategies and techniques that can help you
                  drive revenue and grow your customer base. From prospecting
                  and lead generation to nurturing customer relationships and
                  closing deals, our content will provide valuable insights into
                  sales processes, customer acquisition, negotiation tactics,
                  and effective sales team management.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* !..................caards2........................! */}
        <Container className="mt-5">
          <Row style={{ justifyContent: " space-evenly" }}>
            <Col
              md={5}
              className="card  "
              style={{ backgroundColor: "#e5e1e1" }}
            >
              <div className="card-body">
                <h3 className="card-title text-center">
                  Digital Marketing and Online Presence
                </h3>
                <p className="card-text text-justify mt-3  text-center">
                  In today's digital age, a strong online presence is crucial
                  for reaching your target audience and driving business growth.
                  We will delve into the world of digital marketing and provide
                  guidance on building an effective online marketing strategy.
                  Our content will cover topics such as search engine
                  optimization (SEO), social media marketing, content marketing,
                  email marketing, and paid advertising. We will also discuss
                  website optimization, user experience (UX), and analytics to
                  help you make data-driven marketing decisions.
                </p>
              </div>
            </Col>
            <Col
              md={5}
              style={{ backgroundColor: "#e5e1e1" }}
              className="card marginCard  "
            >
              <div className="card-body">
                <h3 className="card-title text-center">
                  Customer Engagement and Relationship Management
                </h3>
                <p className=" marginCard card-text text-justify  mt-3 text-center">
                  Building strong and lasting relationships with your customers
                  is essential for business success. We will explore customer
                  engagement strategies, including personalized marketing,
                  customer loyalty programs, and effective customer service
                  practices. Our content will provide insights on how to listen
                  to your customers, gather feedback, and adapt your marketing
                  efforts to meet their needs. Additionally, we will discuss
                  customer relationship management (CRM) systems and tools to
                  help you streamline and enhance your customer interactions.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
                <h2>Data-Driven Marketing Strategies for Business Growth</h2>
              </Col>
            </Col>
          </Row>
        </Container>

        <Container className="text-center text-justify mt-5">
          <Row>
            <Col className="orderimg" md={12} xs={12} lg={6}>
              <img
                className=" "
                style={{ width: "100%" }}
                src={bsm3}
                alt="Synergy Tech Sol"
              />
            </Col>

            <Col
              md={12}
              lg={6}
              xs={{ span: 12, order: 1 }}
              // data-aos="fade-down"
              // data-aos-offset="90"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p className="text1 mt-5">
                In today's digital era, leveraging data is crucial for
                maximizing the effectiveness of your marketing efforts. At
                Synergy Tech Sol, we emphasize the importance of data-driven
                marketing strategies to drive business growth. In this section,
                we will explore how you can harness the power of data to make
                informed marketing decisions, optimize campaigns, and achieve
                measurable results. Discover the transformative potential of
                data-driven marketing and unlock new avenues for success.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
