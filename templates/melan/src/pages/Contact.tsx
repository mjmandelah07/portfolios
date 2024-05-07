import React, { useRef } from "react";
import "../assets/css/contact.css";
import Footer from "../sections/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const messageTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const subjectInputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = (
    inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (inputRef.current) {
      inputRef.current.placeholder = "";
    }
  };

  const handleBlur = (
    inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>,
    placeholder: string
  ) => {
    if (inputRef.current && inputRef.current.value === "") {
      inputRef.current.placeholder = placeholder;
    }
  };

  return (
    <section id="home">
      <div className="bradcam_area bradcam_bg_1" >
        <Container>
          <Row>
            <Col xl={12}>
              <div className="bradcam_text text-center">
                <h3>Contact Us</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="contact-section section_padding">
        <Container>
          <Row>
            <Col xl={12}>
              <h2 className="contact-title">Get in Touch</h2>
            </Col>
            <Col lg={8}>
              <form
                className="form-contact contact_form"
                id="contactForm"
                noValidate
              >
                <Row>
                  <Col xl={12}>
                    <div className="mb-3">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols={30}
                        rows={9}
                        onFocus={() => handleFocus(messageTextareaRef)}
                        onBlur={() =>
                          handleBlur(messageTextareaRef, "Enter Message")
                        }
                        ref={messageTextareaRef}
                        placeholder="Enter Message"
                      />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        onFocus={() => handleFocus(nameInputRef)}
                        onBlur={() =>
                          handleBlur(nameInputRef, "Enter your name")
                        }
                        ref={nameInputRef}
                        placeholder="Enter your name"
                      />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        onFocus={() => handleFocus(emailInputRef)}
                        onBlur={() =>
                          handleBlur(emailInputRef, "Enter email address")
                        }
                        ref={emailInputRef}
                        placeholder="Enter email address"
                      />
                    </div>
                  </Col>
                  <Col xl={12}>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onFocus={() => handleFocus(subjectInputRef)}
                        onBlur={() =>
                          handleBlur(subjectInputRef, "Enter Subject")
                        }
                        ref={subjectInputRef}
                        placeholder="Enter Subject"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="my-3">
                  <button
                    type="submit"
                    className="button button-contactForm btn_4 boxed-btn"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </Col>
            <Col lg={4}>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="fa-solid fa-house"></i>
                </span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="fa-solid fa-tablet"></i>
                </span>
                <div className="media-body">
                  <h3>00 (440) 9865 562</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <div className="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </section>
  );
}
