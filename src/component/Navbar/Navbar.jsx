import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import WhiteLogo from "../../assets/Logo.png";
import BlackLogo from "../../assets/Logo1.png";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsScrolled(!isTop);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const navbarShrink = () => {
      const navbarCollapsible = document.body.querySelector("#mainNav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    navbarShrink();

    document.addEventListener("scroll", navbarShrink);

    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        rootMargin: "0px 0px -40%",
      });
    }

    const handleResize = () => {
      setIsResponsiveMode(window.matchMedia("(max-width: 990px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isResponsiveMode, setIsResponsiveMode] = useState(
    window.matchMedia("(max-width: 990px)").matches
  );

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavMenu = () => {
    setIsNavCollapsed(true);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            <img
              // src={isResponsiveMode ? BlackLogo : WhiteLogo}
              src={isResponsiveMode || isScrolled ? BlackLogo : WhiteLogo}
              alt="Synergy tech Sol"
              style={{
                width: "197px",
                marginTop: "11px",
              }}
            />
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeNavMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="dropdown">
                    <div className="dropbtn">Services</div>
                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link
                        className="a"
                        to="/FullStackDev"
                        onClick={closeNavMenu}
                      >
                        Full Stack Development
                      </Link>
                      <Link
                        className="a"
                        to="/MobileAppDevelopment"
                        onClick={closeNavMenu}
                      >
                        Mobile App Development
                      </Link>
                      <Link
                        className="a"
                        to="/CustomerService"
                        onClick={closeNavMenu}
                      >
                        Customer Services
                      </Link>
                      <Link
                        className="a"
                        to="/DigitalMedia"
                        onClick={closeNavMenu}
                      >
                        Digital Media Marketing
                      </Link>
                      <Link
                        className="a"
                        to="/FinancialServices"
                        onClick={closeNavMenu}
                      >
                        Financial Services
                      </Link>
                      <Link
                        className="a"
                        to="/UiUxDesign"
                        onClick={closeNavMenu}
                      >
                        UI/UX Design
                      </Link>
                      <Link
                        className="a"
                        to="/HrManagement"
                        onClick={closeNavMenu}
                      >
                        Human Resources Management
                      </Link>
                      <Link
                        className="a"
                        to="/BrandingSalesMarket"
                        onClick={closeNavMenu}
                      >
                        Branding Sales & Marketing
                      </Link>
                      <Link
                        className="a"
                        to="/Ecommerces"
                        onClick={closeNavMenu}
                      >
                        E-commerce
                      </Link>
                      <Link
                        className="a"
                        to="/EmailChatSupport"
                        onClick={closeNavMenu}
                      >
                        Email & Chat Support
                      </Link>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus" onClick={closeNavMenu}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/ContactUs"
                  onClick={closeNavMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
