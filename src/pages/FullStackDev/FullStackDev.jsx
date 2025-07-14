import React from "react";
import Header from "../../component/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FullStack.css";
import fsd from '../../assets/full-stack-dev_synergytechsol.avif'
import fsd1 from '../../assets/full-stack-devlopment-synergytechsol.png'

export const FullStackDev = () => {
  return (
    <>
      <Header
        backgroundImage={
          fsd
        }
        headertext={""}
        typeText={"Synergy Tech Solutions"}
        typeText1={"Full Stack Development"}
      />

      <Container>
        <Row>
          <Col className="text-center mt-5" md={12} xs={12} lg={12}>
            <h2>Full Stack Development</h2>
          </Col>
        </Row>
      </Container>
      <Container className="text-center text-justify mt-5">
        <Row>
          <Col md={12} xs={12} lg={6} style={{display:'flex', alignItems:'center'}}>
            <p className="text1">
              Full-stack development involves working with both front-end and
              back-end aspects of web development. Full-stack developers are
              proficient in HTML, CSS, JavaScript, and server-side languages
              like Python or Node.js. They handle user interface design,
              layouts, interactivity, server logic, and database management.
              Frameworks like Django, Ruby on Rails, or Express.js are commonly
              used. Full-stack developers have a broad understanding of the
              development stack, making them valuable in small teams and
              startups. They can work independently on projects and handle
              end-to-end development tasks. Continuous learning is essential to
              stay updated with the latest technologies and trends in both
              front-end and back-end development. Full-stack development offers
              versatility, scalability, and the ability to build robust web
              applications.
            </p>
          </Col>
          <Col md={12} xs={12} lg={6}>
            <img
              className="gif"
              style={{ width: "100%" }}
              src={fsd1}
              alt="Synergy Tech Sol"
            />
          </Col>
        </Row>

        <Container className="mt-5">
          <Row>
            <Col md={12}>
              <h3>
                What makes obtaining full-stack development services crucial?
              </h3>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <p style={{ textAlign: "justify", fontSize: "16px" }}>
                Full-stack development is crucial for your business and its
                growth, as it can bring significant improvements and
                accomplishments that contribute to the ultimate success of your
                enterprise. Here are a few reasons why full-stack development is
                essential for your business.
              </p>
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
                Increased Brand Recognition
              </h3>
              <p className="card-text   text-center">
                
Full-stack development enhances brand awareness, introducing more people to your brand and services. By effectively promoting and reaching a wider audience, your business gains recognition, boosting sales and growth significantly.
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
                Enhanced SEO Optimization
              </h3>
              <p className=" marginCard card-text text-justify  text-center">
              SEO optimization is crucial for full-stack development, helping your website rank higher on Google's search results. It attracts a larger audience, boosts visibility, and increases popularity to new heights.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* !..................caards 2........................! */}
      <Container className="mt-3">
        <Row style={{ justifyContent: " space-evenly" }}>
          <Col md={5} className="card  " style={{ backgroundColor: "#e5e1e1" }}>
            <div className="card-body">
              <h3 className="card-title text-center">
                Market Relevance and Trendiness
              </h3>
              <p className="card-text text-justify  text-center">
              Investing in full-stack development keeps your business competitive and trendy. A well-developed website establishes a strong presence, gaining popularity, trust, and a favorable reputation.
              </p>
            </div>
          </Col>
          <Col
            md={5}
            className="card marginCard  "
            style={{ backgroundColor: "#e5e1e1" }}
          >
            <div className="card-body">
              <h3 className="card-title text-center">
                Improved Customer Service Relations
              </h3>
              <p className=" marginCard card-text text-justify  text-center">
              Full-stack development facilitates direct customer communication, fostering positive impressions and enhancing satisfaction. Contact information on your website attracts people to your services.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* !..................caards 3........................! */}
      <Container className="mt-3">
        <Row style={{ justifyContent: " space-evenly" }}>
          <Col md={5} className="card  " style={{ backgroundColor: "#e5e1e1" }}>
            <div className="card-body">
              <h3 className="card-title text-center">Site Ownership</h3>
              <p className="card-text text-justify  text-center">
                Having full-stack development allows you to take ownership of
                your business's website by adding your information, ensuring
                exclusive control. This grants you the ability to access all
                insights and stay informed.
              </p>
            </div>
          </Col>
          <Col
            md={5}
            className="card marginCard  "
            style={{ backgroundColor: "#e5e1e1" }}
          >
            <div className="card-body">
              <h3 className="card-title text-center">Easy Accessibility</h3>
              <p className=" marginCard card-text text-justify  text-center">
                With a website at your fingertips, you can effortlessly monitor
                updates and track progress. By keeping your business visible and
                within reach, a well-developed site brings convenience and
                contributes to your overall success.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="text-center  mt-5">
        <Row>
          <Col md={12}>
            <h3>Why Our Full-Stack Development Services Are the Best</h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p style={{ textAlign: "justify",fontSize:'16px' }}>
              Our team stands out with exceptional qualities that we strive to
              uniquely implement based on client demands. Our highly qualified
              developers excel in their respective fields, ensuring top-notch
              expertise in delivering outstanding results.
            </p>
          </Col>
        </Row>
      </Container>

      {/* !..................caards 4........................! */}
      <Container className="mt-3">
        <Row style={{ justifyContent: " space-evenly" }}>
          <Col md={5} className="card  " style={{ backgroundColor: "#e5e1e1" }}>
            <div className="card-body">
              <h3 className="card-title text-center">Responsive Website:</h3>
              <p className="card-text text-justify  text-center">
                We excel at understanding and fulfilling customer requirements.
                Contact us anytime for a personalized and responsive website
                experience.
              </p>
            </div>
          </Col>
          <Col
            md={5}
            className="card marginCard  "
            style={{ backgroundColor: "#e5e1e1" }}
          >
            <div className="card-body">
              <h3 className="card-title text-center">User Experience</h3>
              <p className=" marginCard card-text text-justify  text-center">
              Dedicated to crafting exceptional user experiences, delivering extraordinary services, and exceeding client expectations to earn trust and satisfaction.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* !..................caards 5........................! */}
      <Container className="mt-3">
        <Row style={{ justifyContent: " space-evenly" }}>
          <Col md={5} className="card  " style={{ backgroundColor: "#e5e1e1" }}>
            <div className="card-body">
              <h3 className="card-title text-center">Cost Saving</h3>
              <p className="card-text text-justify  text-center">
              Affordable, top-quality services. Save costs, no extra OS needed. Choose us for the best prices, available anytime. Trust our expertise and experience.
              </p>
            </div>
          </Col>
          <Col
            md={5}
            className="card marginCard  "
            style={{ backgroundColor: "#e5e1e1" }}
          >
            <div className="card-body">
              <h3 className="card-title text-center">
                Scalability and Reliability
              </h3>
              <p className=" marginCard card-text text-justify  text-center">
                We offer a scalable and reliable environment, ensuring seamless
                project execution, effective error handling, and optimized
                performance.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
