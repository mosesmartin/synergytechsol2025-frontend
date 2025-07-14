import React from "react";
import Header from "../../component/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fin from '../../assets/financial_synergytech.avif'
import fin1 from '../../assets/financial2_synergytech.avif'

export const FinancialServices = () => {
  return (
    <>
      <Header
        backgroundImage={
          fin
        }
        headertext={""}
        typeText={"Synergy Tech Solutions"}
        typeText1={"Financial Services"}
      />

      <Container>
        <Row>
          <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
            <h1>Financial Services</h1>
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
            <p className="text1 ">
              Our comprehensive financial services are tailored to meet your
              business needs. We provide expert solutions in financial analysis,
              planning, forecasting, and loan assistance. Whether you require
              insights into your financial performance or strategic planning for
              growth, we have the expertise to guide you. Our dedicated team
              works closely with you, understanding your goals and collaborating
              on a customized financial roadmap. By leveraging our services, you
              can confidently navigate the complex financial landscape and focus
              on core business operations. Trust us to help you achieve
              financial success and unlock your business's full potential.
            </p>
          </Col>
          <Col md={12} xs={12} lg={6}>
            <img
              className="gif"
              style={{ width: "100%", marginTop: "-6px" }}
              src={fin1}
              alt="Synergy Tech Sol"
            />
          </Col>
        </Row>

        <Container>
          <Row>
            <Col>
              <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
                <h1>Our Services</h1>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* !..................caards........................! */}
      <Container fluid className="mt-5">
        <Row style={{ justifyContent: " space-evenly" }}>
          <Col
            md={3}
            xs={12}
            className="card  "
            style={{ backgroundColor: "#e5e1e1 ", width: "400px" }}
          >
            <div className="card-body">
              <h3 className="card-title text-center">Merchant Cash Advance</h3>
              <h4 className="card-title text-center">
                A near-instant influx of capital.
              </h4>
              <p className="card-text text-justify  text-center">
                Available at a moment’s notice, our team will walk you through
                all the steps to obtaining a Merchant Cash Advance so that your
                business has capital within 24 hours of the request.
              </p>
              <h4 className="card-title ">A near-instant influx of capital.</h4>
              <li>3 Months of Recent Bank Statements</li>
              <li>Minimum $20,000 in Monthly Revenue</li>
              <li>500+ FICO Score</li>
            </div>
          </Col>
          <Col
            md={3}
            xs={12}
            style={{ backgroundColor: "#e5e1e1", width: "400px" }}
            className="card marginCard  "
          >
            <div className="card-body">
              <h3 className="card-title text-center">Reverse Consolidations</h3>
              <h5 className="card-title text-center">
                Pay-off existing advances & get new funding
              </h5>
              <p className=" marginCard card-text text-justify  text-center">
              Simplify and save with reverse consolidation. We work with your current funders to pay down balances while providing financing through our programs at Synergy Tech Sol.
              </p>
              <h5 className="card-title ">Term Length:</h5>
              <br/>
              <li>4 - 10 months</li>
            </div>
          </Col>
          <Col
            md={3}
            xs={12}
            style={{ backgroundColor: "#e5e1e1", width: "400px" }}
            className="card marginCard  "
          >
            <div className="card-body">
              <h3 className="card-title text-center">Consolidation</h3>
              <h5 className="card-title text-center">
                Revamp your financing with Synergy Tech Sol
              </h5>
              <p className=" marginCard card-text text-justify  text-center">
              Pay off existing financing, access new capital. Our team works with your funders to settle balances and provide funding through Synergy Tech Sol's programs.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
