import React from "react";
import Header from "../../component/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import uiux from '../../assets/uiux_synergytech.avif'
import uiux2 from '../../assets/uiux2_synergytech.avif'
export const UiUxDesign = () => {
  return (
    <>
      <Header
        backgroundImage={
          uiux
        }
        headertext={""}
        typeText={"Synergy Tech Solutions"}
        typeText1={"UI/UX Design"}
      />

      <Container>
        <Row>
          <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
            <h1>UI/UX Design</h1>
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
              Web and app designs are regarded as meticulous crafts, carefully
              crafted to ensure user-friendliness and drive the success of these
              designs. They incorporate various technologies to achieve optimal
              results. Building and rendering web pages adhere to different
              standards, including HTML, CSS, SVG, device APIs, and other web
              application technologies. These elements collectively form the
              foundation of web design and applications. At Synergy Tech Sol, we
              also provide custom web application services.
            </p>
          </Col>
          <Col md={12} xs={12} lg={6}>
            <img
              className="gif"
              style={{ width: "100%", height: "66vh", objectFit: "cover" }}
              src={uiux2}
              alt="Synergy Tech Sol"
            />
          </Col>
        </Row>

        <Container className=" mt-5 ">
          <Row>
            <Col>
              <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
                <h1>
                  UI (User Interface) and UX (User Experience) designs are vital
                  for the growth of your brand
                </h1>
                <p>
                  The primary goal of any business is to boost sales and drive
                  industry growth. UX/UI designs in an application enhance user
                  experience and satisfaction, ultimately leading to an increase
                  in the user base. In a highly competitive market where
                  customers have numerous choices, capturing their attention
                  within a short span of time is crucial. UI and UX design play
                  a vital role in gaining customer trust and encouraging their
                  engagement with your application or website by providing what
                  they are seeking. The number of customers acquired on your
                  site/application is a measure of the effectiveness of
                  exceptional UI and UX. For startups or small enterprises, the
                  significance of UI and UX design becomes even more crucial, as
                  the initial impression can make a lasting impact and the use
                  of effective UI and UX design can make or break memorability.
                </p>
              </Col>
            </Col>
          </Row>
        </Container>

        <Container className="text-center mt-5  ">
          <Row>
            <Col md={12}>
              <h2>What UI and UX services do we offer?</h2>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* !..................caards 1........................! */}
      <Container className="mt-3">
        <Row style={{ justifyContent: " space-evenly" }}>
          <Col md={5} className="card  " style={{ backgroundColor: "#e5e1e1" }}>
            <div className="card-body">
              <h3 className="card-title text-center">Saas UI Design</h3>
              <p className="card-text text-justify  text-center mt-3">
                
Create visually appealing SaaS UI designs. Science Delicate develops striking interfaces that resonate with the audience, ensuring memorability and high user retention. We prioritize target audience preferences for customized designs.
              </p>
            </div>
          </Col>
          <Col
            md={5}
            className="card marginCard  "
            style={{ backgroundColor: "#e5e1e1" }}
          >
            <div className="card-body">
              <h3 className="card-title text-center">Website UI Design</h3>
              <p className=" marginCard card-text text-justify  text-center mt-3">
              Website design: UI is the foundation, UX is essential. They overlap, creating exceptional user experiences. Understand their synergy for optimal outcomes. Mastering UI/UX integration drives success in the digital landscape.
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
              <h3 className="card-title text-center">E-commerce UX Design</h3>
              <p className="card-text text-justify  text-center mt-3">
                The fundamental concept behind a typical user experience (UX)
                design in e-commerce is to delve into the mindset of the end
                user and determine what will provide them with a seamless,
                intuitive, and enjoyable shopping experience. The goal is to
                create a user-centric design that meets their needs and
                preferences, ultimately enhancing their overall satisfaction
                during the online shopping process.
              </p>
            </div>
          </Col>
          <Col
            md={5}
            className="card marginCard  "
            style={{ backgroundColor: "#e5e1e1" }}
          >
            <div className="card-body">
              <h3 className="card-title text-center">Mobile UI Design</h3>
              <p className=" marginCard card-text text-justify  text-center mt-3">
                A mobile UI (user interface) refers to the graphical display,
                typically touch-sensitive, on a mobile device such as a
                smartphone or tablet. It enables users to interact with the
                device's applications, features, content, and functionalities.
                Mobile UI design focuses on creating visually appealing and
                user-friendly interfaces that optimize the mobile user
                experience and facilitate seamless navigation.
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
              <h3 className="card-title text-center">
                Mobile and Web UX Design
              </h3>
              <p className="card-text text-justify  text-center mt-3">
              Tailor user experiences for mobile and web platforms. Designers prioritize accessibility, discoverability, and efficiency to optimize usability and engagement. Enhance interactive experiences on the go, ensuring satisfaction across devices.
              </p>
            </div>
          </Col>
          <Col
            md={5}
            className="card marginCard  "
            style={{ backgroundColor: "#e5e1e1" }}
          >
            <div className="card-body">
              <h3 className="card-title text-center">SaaS UX Design</h3>
              <p className=" marginCard card-text text-justify  text-center mt-3">
              The SaaS Dashboard UX Design Stack optimizes the user experience of SaaS dashboards, focusing on a seamless and intuitive interface. It enhances usability, accessibility, and satisfaction, prioritizing user-centricity.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
