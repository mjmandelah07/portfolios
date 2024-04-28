import React from "react";

interface ServiceItemProps {
  img: string;
  alt: string;
  header: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  img,
  alt,
  header,
  description,
}) => {
  return (
    <div className="single_service text-center">
      <span className="icon">
        <img src={img} alt={alt} />
      </span>
      <h3 className="mb-3">{header}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
