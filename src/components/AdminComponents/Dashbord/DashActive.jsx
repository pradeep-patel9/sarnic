import React from "react";

const DashActive = () => {
  return (
    <>
      <div className="activity-item d-flex align-items-start mb-4">
        <i className="fa-solid fa-user avatar me-3" />
        <div>
          <h6 className="mb-1">Michael Anderson</h6>
          <p className="mb-1">Updated the design files for the landing page</p>
          <div className="activity-meta">
            <span className="badge bg-primary me-2">Design</span>
            <small className="text-muted">Project: Website Redesign</small>
            <small className="text-muted ms-3">2 hours ago</small>
          </div>
        </div>
      </div>
      <div className="activity-item d-flex align-items-start">
        <i className="fa-solid fa-user avatar me-3 d-flex justify-content-center align-items-center" />
        <div>
          <h6 className="mb-1">Sarah Wilson</h6>
          <p className="mb-1">Completed the user research interviews</p>
          <div className="activity-meta">
            <span className="badge bg-success me-2">Research</span>
            <small className="text-muted">Project: Marketing Campaign</small>
            <small className="text-muted ms-3">4 hours ago</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashActive;
