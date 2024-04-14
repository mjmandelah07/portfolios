import React from 'react'
import "../assets/css/service.css";

export default function ServiceItem({img, alt, header, description}) {
  return (
    <div className="service-item wow fadeIn">
      <span className="icon">
      <img src={img} alt={alt}/>
      </span>
      <h3 className='mb-3'>{header}</h3>
      <p>{description}</p>
    </div>
  );
}
