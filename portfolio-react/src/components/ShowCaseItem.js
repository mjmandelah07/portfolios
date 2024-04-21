import { Col } from "react-bootstrap";

const ShowCaseItem = ({ image, title, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="card card-img-scale card-element-hover card-img-blur overflow-hidden">
        <div className="card-img-scale-wrapper">
          <div className="card-img-overlay hover-element d-flex align-items-center">
            <div className="z-2 mt-auto mx-auto text-center">
              <h5 className="showcase-text-title mb-2">{title}</h5>
              <a href={link} target="_blank"  className="btn btn-sm btn-white mb-0" rel="noreferrer">
                View detail
                <i className="fa-solid fa-arrow-right-long fa-fw ms-2"></i>
              </a>
            </div>
          </div>

          <img
            src={image}
            className="img-scale img-blur card-img-top"
            alt="portfolio-img"
          />
        </div>
      </div>
    </Col>
  );
};

export default ShowCaseItem;
