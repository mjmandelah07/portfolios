import React from "react";

export default function ResumeItem({
  title,
  company,
  location,
  jobType,
  start,
  end,
}) {
  return (
    <div className="d-flex resume-item work">
      <div>
        <h4>{title}</h4>
        <div className="d-flex">
          <div className="d-flex resume-meta">
            <span className="me-3">
              <span className="icon">
                <i className="bi bi-building"></i>
              </span>
              <span>{company}</span>
            </span>
            <span className="icon">
              <i className="bi bi-geo-alt-fill"></i>
            </span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="ms-auto resume-meta">
        <div className="clearfix">
          <span className="period d-block float-end">
            <span>{jobType}</span>
          </span>
        </div>
        <span className="icon">
          <i className="bi bi-calendar"></i>
              </span>
              <span>{start} - {end}</span>
      </div>
    </div>
  );
}
