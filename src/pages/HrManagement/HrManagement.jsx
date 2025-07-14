import React from "react";
import Header from "../../component/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hrm from '../../assets/hrm_synergytech.avif'
import hrm2 from '../../assets/hrm2_synergytech.avif'
import hrm3 from '../../assets/hrm3_synergytech.avif'
export const HrManagement = () => {
  return (
    <>
      <Header
        backgroundImage={
          hrm
        }
        headertext={""}
        typeText={"Synergy Tech Solutions"}
        typeText1={"Human Resources Management"}
      />

      <Container>
        <Row>
          <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
            <h2>Human Resources Management</h2>
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
              At Synergy Tech Sol, we recognize the importance of effective
              human resource management (HRM) in driving organizational success.
              Our dedicated HR team is committed to creating an engaging work
              environment, attracting top talent, and fostering the growth and
              development of our employees. In this section, we will provide
              valuable insights, tips, and strategies related to various aspects
              of HR management.
            </p>
          </Col>
          <Col md={12} xs={12} lg={6}>
            <img
              className="gif"
              style={{ width: "100%" }}
              src={hrm2}
              alt="Synergy Tech Sol"
            />
          </Col>
        </Row>

        <Container>
          <Row>
            <Col>
              <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
                <h2>Why Your Company Needs Human Resource Management (HRM)</h2>
                <span>
                  Effective human resource management (HRM) is a vital component
                  of any successful organization, and at Synergy Tech Sol, we
                  understand the significance it holds for our company's growth.
                  Here are four key reasons why your company needs HRM:
                </span>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* !..................caards........................! */}
      <Container className="mt-5">
        <Row style={{ justifyContent: " space-evenly" }}>
          <Col md={5} className="card  " style={{ backgroundColor: "#e5e1e1" }}>
            <div className="card-body">
              <h3 className="card-title text-center">
                Talent Acquisition and <br/> Retention
              </h3>
              <p className="card-text text-justify  text-center">
                In today's competitive job market, attracting and retaining top
                talent is crucial for organizational success. HRM plays a
                pivotal role in sourcing and selecting qualified candidates who
                align with Synergy Tech Sol's values and goals. Moreover, our
                HRM strategies, such as competitive compensation packages,
                employee development opportunities, and recognition programs,
                help enhance employee satisfaction and retention rates. By
                investing in HRM, Synergy Tech Sol can secure a talented
                workforce.
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
                Employee Performance and Productivity
              </h3>
              <p className=" marginCard card-text text-justify  text-center">
                HRM practices are instrumental in maximizing employee
                performance and productivity. Through our performance management
                systems, our HR professionals provide clear expectations, set
                measurable goals, and provide regular feedback to employees at
                Synergy Tech Sol. Additionally, HRM facilitates skill
                development and training opportunities, enabling employees to
                enhance their capabilities and contribute more effectively to
                our organization's objectives.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* !..................caards2........................! */}
      <Container className="mt-5">
        <Row style={{ justifyContent: " space-evenly" }}>
          <Col md={5} className="card  " style={{ backgroundColor: "#e5e1e1" }}>
            <div className="card-body">
              <h3 className="card-title text-center">
                Organizational Culture and Employee Engagement
              </h3>
              <p className="card-text text-justify  text-center">
              A positive and inclusive organizational culture is essential for attracting, engaging, and retaining employees. At Synergy Tech Sol, HR plays a vital role in shaping and nurturing our company's culture. Our professionals establish policies and practices that promote diversity, equity, and inclusion, fostering an environment where employees feel valued and motivated to perform their best.
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
                Compliance with Employment Laws and Regulations
              </h3>
              <p className=" marginCard card-text text-justify  text-center">
              Navigating complex employment laws and regulations is critical for any organization. At Synergy Tech Sol, HR ensures compliance, safeguarding our company from legal risks. Our professionals stay updated on labor laws, maintain records, and implement policies aligned with requirements. Synergy Tech Sol demonstrates commitment to ethical business practices.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <h2 className="text-center mt-5">Our HR Solutions for Small and Medium-Sized Businesses</h2>
          <Col
            className="text-center mt-5 "
            md={12}
            xs={12}
            lg={6}
            style={{ display: "flex", alignItems: "center" }}
          >
            <span className="text1">
              Synergy Tech Sol understands the unique needs of small and
              medium-sized businesses (SMBs) when it comes to human resource
              management. We offer tailored HR solutions specifically designed
              to address the challenges faced by SMBs. Our comprehensive
              services encompass all aspects of HR management, providing you
              with the expertise and support you need to build a strong
              foundation for your organization's success.
            </span>
          </Col>
          <Col className="text-center mt-5 " md={12} xs={12} lg={6}>
            <img
              className="gif"
              style={{ width: "100%" }}
              src={hrm3}
              alt="synergy tech sol"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
