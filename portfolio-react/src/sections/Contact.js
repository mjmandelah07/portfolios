import React, { useState } from "react";
import "../assets/css/contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
  // State variables to hold form data and validation errors
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // Input change handler to update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const errors = {};
    if (!formData.fname.trim()) {
      errors.fname = "First name is required";
    }
    if (!formData.lname.trim()) {
      errors.lname = "Last name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    // Update form errors state
    setFormErrors(errors);

    // If there are no errors, submit the form and reset form data
    if (Object.keys(errors).length === 0) {
      submitForm();
      setFormData({
        fname: "",
        lname: "",
        email: "",
        message: "",
      });
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    // Email regex pattern for basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to submit the form to getForm using the api
   const submitForm = async () => {
     try {
       const response = await fetch(
         "https://getform.io/f/02174391-7454-4bc6-a777-0aee2f8dc5e3",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         }
       );
       if (response.ok) {
         console.log("Form submitted successfully");
       } else {
         console.error("Failed to submit form");
       }
     } catch (error) {
       console.error("Error submitting form:", error);
     }
   };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row>
          <Col className="mb-5 wow fadeInUp">
            <div className="contact-section text-center">
              <h2>Contact Me</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <form className="contact-form wow fadeInUp" onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <div className="mb-3">
                    <label for="fname" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        formErrors.fname ? "is-invalid" : ""
                      }`}
                      id="fname"
                      name="fname"
                      value={formData.fname}
                      onChange={handleInputChange}
                    />
                    {formErrors.fname && (
                      <div className="invalid-feedback">{formErrors.fname}</div>
                    )}
                  </div>
                </Col>
                <Col>
                  <div className="mb-3">
                    <label for="lname" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        formErrors.lname ? "is-invalid" : ""
                      }`}
                      id="lname"
                      name="lname"
                      value={formData.lname}
                      onChange={handleInputChange}
                    />
                    {formErrors.lname && (
                      <div className="invalid-feedback">{formErrors.lname}</div>
                    )}
                  </div>
                </Col>
              </Row>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    formErrors.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <div className="invalid-feedback">{formErrors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">
                  Message
                </label>
                <textarea
                  className={`form-control ${
                    formErrors.message ? "is-invalid" : ""
                  }`}
                  id="message"
                  name="message"
                  cols={30}
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {formErrors.message && (
                  <div className="invalid-feedback">{formErrors.message}</div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </Col>
          <Col lg={4} className="ms-auto wow fadeInUp">
            <h3 className="h5 mb-4">Contact Info</h3>
            <address className="text-black d-flex">
              <span className="me-2">
                <i className="bi bi-geo-alt-fill"></i>
              </span>
              <span>Lagos, Nigeria</span>
            </address>
            <ul className="list-unstyled ul-links mb-4">
              <li className="mb-3">
                <a
                  href="tel:+2348167065474"
                  className="d-flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="me-2">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  <span>+234 816 706 5474</span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="mailto:aramidemojisola7@gmail.com"
                  className="d-flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="me-2">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <span>aramidemojisola7@gmail.com</span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="https://www.linkedin.com/in/mojisola-aramide"
                  className="d-flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="me-2">
                    <i className="bi bi-linkedin"></i>
                  </span>
                  <span>https://www.linkedin.com/in/mojisola-aramide</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
