import React, { useState } from "react";
import PopUp from "./PopUp";

interface PortfolioItemProps {
  image: string;
  title: string;
  alt: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, alt }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleImageClick = () => {
    setShow(true);
  };
  // Function to handle modal close
  const handleCloseModal = () => {
    setShow(false);
  };
   const handleHoverClick = () => {
     setShow(true);
   };
  return (
    <div className="single_Portfolio">
      <div className="portfolio_thumb">
        <img src={image} alt="" onClick={() => handleImageClick()} />
      </div>
      {show && (
        <PopUp show={show} image={image} alt={alt} onHide={handleCloseModal} />
      )}
      <div className="portfolio_hover" onClick={() => handleHoverClick()}>
        <div className="title">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
