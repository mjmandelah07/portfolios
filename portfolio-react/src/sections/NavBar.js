import React, { useState, useEffect } from "react";
import "../assets/css/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      let isScrolled = false;
      let active = "";

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (!isScrolled && scrollPosition >= top + window.innerHeight) {
          isScrolled = true;
        }

        if (scrollPosition >= top && scrollPosition < top + height) {
          active = section.id;
        }
      });
      console.log(isScrolled);
      setIsScrolled(isScrolled);
      setActiveSection(active);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`bg-body-transparent mb-5 site-nav ${
        isScrolled ? "scrolled awake" : ""
      }`}
    >
      <Container className="site-navigation">
        <Navbar.Brand
          href="#home"
          className="text-center d-block float-start py-0"
        >
          <span className="logo ">MA</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
                activeSection === "about" ? "scrolled active" : ""
              }`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={`${
                activeSection === "portfolio" ? "scrolled active" : ""
              }`}
            >
              Porfolio
            </Nav.Link>
            <Nav.Link
              href="#service"
              className={`${
                activeSection === "services" ? "scrolled active" : ""
              }`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={`${
                activeSection === "resume" ? "scrolled active" : ""
              }`}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`${
                activeSection === "contact" ? "scrolled active" : ""
              }`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
