import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import WhiteLogo from "../../assets/Logo.png";
import BlackLogo from "../../assets/Logo1.png";
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome import

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isResponsiveMode, setIsResponsiveMode] = useState(
    window.matchMedia("(max-width: 990px)").matches
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navbarShrink = () => {
      const navbar = document.getElementById("mainNav");
      if (!navbar) return;
      if (window.scrollY === 0) {
        navbar.classList.remove("navbar-shrink");
      } else {
        navbar.classList.add("navbar-shrink");
      }
    };

    navbarShrink();

    document.addEventListener("scroll", navbarShrink);

    const mainNav = document.getElementById("mainNav");
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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavMenu = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/" onClick={closeNavMenu}>
          <img
            src={isResponsiveMode || isScrolled ? BlackLogo : WhiteLogo}
            alt="Synergy tech Sol"
            style={{ width: "197px", marginTop: "11px" }}
          />
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded={!isNavCollapsed}
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
              {/* Dropdown toggle without arrow */}
              <Link
                className="nav-link dropbtn"
                to="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                Services
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="servicesDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/FullStackDev" onClick={closeNavMenu}>
                    <i className="fas fa-code icon"></i> Full Stack Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/MobileAppDevelopment" onClick={closeNavMenu}>
                    <i className="fas fa-mobile-alt icon"></i> Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/CustomerService" onClick={closeNavMenu}>
                    <i className="fas fa-headset icon"></i> Customer Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/DigitalMedia" onClick={closeNavMenu}>
                    <i className="fas fa-bullhorn icon"></i> Digital Media Marketing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/FinancialServices" onClick={closeNavMenu}>
                    <i className="fas fa-chart-line icon"></i> Financial Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/UiUxDesign" onClick={closeNavMenu}>
                    <i className="fas fa-pencil-ruler icon"></i> UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/HrManagement" onClick={closeNavMenu}>
                    <i className="fas fa-user-tie icon"></i> Human Resources Management
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/BrandingSalesMarket" onClick={closeNavMenu}>
                    <i className="fas fa-tags icon"></i> Branding Sales & Marketing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Ecommerces" onClick={closeNavMenu}>
                    <i className="fas fa-shopping-cart icon"></i> E-commerce
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/EmailChatSupport" onClick={closeNavMenu}>
                    <i className="fas fa-envelope icon"></i> Email & Chat Support
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/aboutus" onClick={closeNavMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs" onClick={closeNavMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
