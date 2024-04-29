import React, { useState, useEffect } from "react";
import "../assets/css/navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Get all the sections
      const sections = document.querySelectorAll("section");

      let active = "";
      let scrolled = false; // Variable to track if scrolled past half of the hero section

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        // Check if scroll position is within the current section's range
        if (scrollPosition >= top && scrollPosition < top + height) {
          active = section.id;
        }

        // Check if the current section is the hero section based on its ID
        if (section.id === "home") {
          // Calculate halfway point of the hero section
          const heroHalfwayPoint = top + height / 2;
          // Check if scroll position is beyond halfway point of the hero section
          if (scrollPosition >= heroHalfwayPoint) {
            scrolled = true;
          }
        }
      });

      setIsScrolled((prevIsScrolled) => {
        // Use functional update to access the previous state
        if (prevIsScrolled !== scrolled) {
          // Only update state if it has changed
          return scrolled;
        }
        // Return previous state if it hasn't changed
        return prevIsScrolled;
      });

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-body-transparent header-absolute header-sticky ${
        isScrolled ? "header-sticky-on" : ""
      }`}
    >
      <Navbar collapseOnSelect expand="xl" className={`px-lg-5 site-nav`}>
        <Container fluid className="site-navigation">
          <Navbar.Brand
            href="#home"
            className="text-center d-block float-start py-0"
          >
            <span className="logo ">MA</span>
          </Navbar.Brand>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="">
              <Nav.Link href="#home" className={`active`}>
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={`${
                  activeSection === "about"
                    ? "header-sticky-on active"
                    : ""
                }`}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                className={`${
                  activeSection === "portfolio" ? "header-sticky-on active" : ""
                }`}
              >
                Porfolio
              </Nav.Link>
              <Nav.Link
                href="#service"
                className={`${
                  activeSection === "service" ? "header-sticky-on active" : ""
                }`}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#resume"
                className={`${
                  activeSection === "resume" ? "header-sticky-on active" : ""
                }`}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={`${
                  activeSection === "contact" ? "header-sticky-on active" : ""
                }`}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <ul className="nav align-items-center ms-sm-2">
            <li className="nav-item position-relative ms-2 ms-sm-3 d-none d-sm-block">
              <a className="btn btn-dark mb-0" href="#footer">
                Let's connect
              </a>
            </li>
            <li className="nav-item">
              <button
                className="navbar-toggler ms-3 p-2 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#responsive-navbar-nav"
                aria-controls="responsive-navbar-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-animation">
                  {" "}
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                </span>
              </button>
            </li>
          </ul>

          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        </Container>
      </Navbar>
    </header>
  );
}
