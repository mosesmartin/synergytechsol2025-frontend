import React from 'react'
import Header from '../../component/Header/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ecom from '../../assets/ecom_synergytech.avif'
import ecom2 from '../../assets/ecom2_synergytech.jpg'
import { Helmet } from "react-helmet";


export const Ecommerces = () => {
  return (
    <>

    <Helmet>
  <title>E-commerce Development Services | Synergy Tech Solutions</title>
  <meta name="description" content="Synergy Tech Solutions offers top-notch e-commerce software and custom solutions for B2B, B2C, C2C, and C2B businesses. Grow your online presence with us." />
  <meta name="keywords" content="E-commerce Solutions, Online Store Development, B2B Ecommerce, B2C Ecommerce, Ecommerce Development Company, Synergy Tech Solutions" />
  <meta name="author" content="Synergy Tech Solutions" />
  <meta property="og:title" content="E-commerce Development Services | Synergy Tech Solutions" />
  <meta property="og:description" content="Custom e-commerce software solutions for businesses to grow online. We specialize in B2B, B2C, and more." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://synergytechsol.com/Ecommerces" />
  <meta property="og:image" content="https://synergytechsol.com/assets/ecom_synergytech.avif" />
</Helmet>
    <Header  backgroundImage={ecom}
         headertext={""} typeText= {"Synergy Tech Solutions"} typeText1={"E-Commerces"} />
    
    <Container>
        <Row>
          <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
          <h2>E-commerce</h2>
          </Col>
        </Row>
      </Container>
  <Container className="text-center text-justify mt-5">
          
          <Row>
            <Col md={12} xs={12} lg={6} style={{display:'flex', alignItems:'center'}}>
              <p className="text1 ">
              In the realm of ecommerce, Synergy Tech Sol excels at providing exceptional software and tailored solutions. We specialize in helping businesses grow and thrive in the online marketplace. With our expertise, you can achieve your ecommerce goals and establish a strong digital presence. Contact us today to unlock the full potential of your ecommerce venture.
              </p>
             
            </Col>
            <Col md={12} xs={12} lg={6}>
              <img
                className="gif"
                style={{ width: "100%",  }}
                src={ecom2}
                alt="Synergy Tech Sol"
              />
            </Col>
          </Row>
        </Container>

        <Container>
                <Row>
                  <Col >
                  <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
          <h1>What Are The Different Types Of E-commerce?</h1>
          </Col>
                  </Col>
                </Row>
              </Container>


              {/* !..................caards........................! */}
      <Container className="mt-5" >
        <Row style={{justifyContent:" space-evenly"}}>
          <Col md={5 } className="card  " style={{backgroundColor:"#e5e1e1"}}>
            <div className="card-body">
              <h3 className="card-title text-center">
              B2B Business
              </h3>
              <p className="card-text text-justify  text-center">
              B2B (Business-to-Business) ecommerce refers to wholesale transactions between businesses. In this type of ecommerce, selling is often conducted with minimal or no profit margin. It focuses on catering to the specific needs of other businesses and facilitating large-scale transactions.
              </p>
            </div>
          </Col>
          <Col md={5} style={{backgroundColor:"#e5e1e1"}} className="card marginCard  ">
            <div className="card-body">
              <h3 className="card-title text-center">
              Business to Customer (B2C)
              </h3>
              <p className=" marginCard card-text text-justify  text-center">
              B2C (Business-to-Customer) ecommerce involves businesses selling directly to individual customers. This type of business allows customers to make purchases through online shopping platforms and ecommerce stores. It enables businesses to reach a wider audience and provide a seamless shopping experience to their customers.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

                    {/* !..................caards 2........................! */}
                    <Container className="mt-5" >
        <Row style={{justifyContent:" space-evenly"}}>
          <Col md={5 } className="card  " style={{backgroundColor:"#e5e1e1"}}>
            <div className="card-body">
              <h3 className="card-title text-center">
              
Consumer to Consumer (C2C)
              </h3>
              <p className="card-text text-justify  text-center">
              C2C (Consumer-to-Consumer) ecommerce refers to online transactions that occur directly between individual consumers. Various ecommerce platforms enable individuals to sell their products or services on their platform, facilitating peer-to-peer transactions. It provides an opportunity for individuals to engage in online selling and buying within a broader online marketplace.
              </p>
            </div>
          </Col>
          <Col md={5} style={{backgroundColor:"#e5e1e1"}} className="card marginCard  ">
            <div className="card-body">
              <h3 className="card-title text-center">
              Consumer to Business (C2B)
              </h3>
              <p className=" marginCard card-text text-justify  text-center">
              C2B (Consumer-to-Business) ecommerce is a less common model where individual customers sell their products or services to businesses. This approach is popular in crowdsourcing projects, where businesses seek contributions from consumers for specific needs. It allows businesses to leverage the skills, expertise, and resources of individual consumers to fulfill their requirements.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    

      <Container>
                <Row>
                  <Col >
                  <Col className="text-center mt-5 " md={12} xs={12} lg={12}>
          <h1>
Which industries do we cater to in ecommerce marketing?</h1>
          </Col>
                  </Col>
                </Row>
              </Container>

              {/* !..................caards........................! */}
      <Container className="mt-5" >
        <Row style={{justifyContent:" space-evenly"}}>
          <Col md={5 } className="card  " style={{backgroundColor:"#e5e1e1"}}>
            <div className="card-body">
              <h3 className="card-title text-center">
              Online Grocery
              </h3>
              <p className="card-text text-justify  text-center">
              Online grocery services have gained immense popularity in recent times, leading to the need for comprehensive development plans and processes for e-commerce startups in this industry. We provide assistance and services tailored specifically for online grocery businesses.
              </p>
            </div>
          </Col>
          <Col md={5} style={{backgroundColor:"#e5e1e1"}} className="card marginCard  ">
            <div className="card-body">
              <h3 className="card-title text-center">
              Online Taxi
              </h3>
              <p className=" marginCard card-text text-justify  text-center">
              The demand for online taxi services has skyrocketed since its inception, with more and more people opting for convenient and efficient transportation solutions. We specialize in serving this thriving industry by providing e-commerce application and website development services tailored specifically for online taxi companies.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

       {/* !..................caards2........................! */}
       <Container className="mt-5" >
        <Row style={{justifyContent:" space-evenly"}}>
          <Col md={5 } className="card  " style={{backgroundColor:"#e5e1e1"}}>
            <div className="card-body">
              <h3 className="card-title text-center">
              Education and Tutoring
              </h3>
              <p className="card-text text-justify  text-center">
              The field of education and tutoring has witnessed a significant shift towards online platforms, especially with the impact of COVID-19. To cater to this growing demand, we develop user-friendly educational applications that offer students a superior learning environment.
              </p>
            </div>
          </Col>
          <Col md={5} style={{backgroundColor:"#e5e1e1"}} className="card marginCard  ">
            <div className="card-body">
              <h3 className="card-title text-center">
              Real Estate and Properties
              </h3>
              <p className=" marginCard card-text text-justify  text-center">
              
The real estate and properties sector is a thriving industry in the eCommerce space, requiring robust digital development solutions. We specialize in creating real estate applications that are designed to provide users with a seamless and immersive experience.
              </p>
            </div>
          </Col>
        </Row>
      </Container>



{/* !..................caards3........................! */}
<Container className="mt-5" >
        <Row style={{justifyContent:" space-evenly"}}>
          <Col md={5 } className="card  " style={{backgroundColor:"#e5e1e1"}}>
            <div className="card-body">
              <h3 className="card-title text-center">
              Food and Restaurants
              </h3>
              <p className="card-text text-justify  text-center">
              The food and restaurant industry has seen a surge in demand for online food delivery apps and related software. With numerous restaurants and companies operating in this sector, we provide top-notch application development services tailored specifically for the food and restaurant industry.
              </p>
            </div>
          </Col>
          <Col md={5} style={{backgroundColor:"#e5e1e1"}} className="card marginCard  ">
            <div className="card-body">
              <h3 className="card-title text-center">
              Clothing Stores
              </h3>
              <p className=" marginCard card-text text-justify  text-center">
              

              Online clothing stores involve the buying and selling of clothing and accessories through digital platforms. To thrive in the highly competitive fashion eCommerce market, retailers can leverage our comprehensive technological solutions to enhance their online presence and attract customers.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
