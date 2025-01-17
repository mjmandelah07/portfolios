import { Col } from "react-bootstrap";

const ShowCaseItem = ({ image, title, link }) => {
  return (
    <Col sm={6} md={4} className="portfolio-item">
      <div className="card" style={{ backgroundImage: `url(${image})` }}>
        <div className="background-overlay"></div>
        <div className="card-wrapper">
          <div className="card-img-overlay hover-element d-flex align-items-start">
            <div className="z-2 mt-auto text-left">
              <h5 className="showcase-text-title mb-2">{title}</h5>
              <a
                href={link}
                target="_blank"
                className="btn btn-sm btn-white mb-0"
                rel="noreferrer"
              >
                View detail
                <i className="fa-solid fa-arrow-right-long fa-fw ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ShowCaseItem;
