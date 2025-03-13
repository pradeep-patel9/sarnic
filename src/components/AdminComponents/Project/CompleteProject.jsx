import React from "react";

const CompleteProject = () => {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">My Projects</h4>
        {/* <button className="new-project-btn w-auto">New Project</button> */}
      </div>
      {/* Status Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <div className="card status-card">
            <div className="d-flex align-items-center gap-3 mb-2">
              <div className="status-dot completed">
                <i
                  className="fa-solid fa-circle-check text-success p-2 rounded-4 mt-5"
                  style={{ backgroundColor: "#e8f5e9" }}
                />
              </div>
              <span className="text-secondary">Completed</span>
            </div>
            <h3 className="mb-0 ms-5">12</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card status-card">
            <div className="d-flex align-items-center gap-3 mb-2">
              <div className="status-dot in-progress">
                <i
                  className="fa-solid fa-clock text-warning mt-5 p-2 rounded-4"
                  style={{ backgroundColor: "#fff3e0" }}
                />
              </div>
              <span className="text-secondary">In Progress</span>
            </div>
            <h3 className="mb-0 ms-5">8</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card status-card">
            <div className="d-flex align-items-center gap-3 mb-2">
              <div className="status-dot on-hold">
                <i
                  className="fa-regular fa-circle-pause text-primary mt-5 p-2 rounded-4"
                  style={{ backgroundColor: "#e3f2fd" }}
                />
              </div>
              <span className="text-secondary">On Hold</span>
            </div>
            <h3 className="mb-0 ms-5">3</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card status-card">
            <div className="d-flex align-items-center gap-3 mb-2">
              <div className="status-dot new">
                <i
                  className="fa-solid fa-circle-plus mt-5 p-2 rounded-4"
                  style={{ color: "#6a1b9a", backgroundColor: "#f3e5f5" }}
                />
              </div>
              <span className="text-secondary">New</span>
            </div>
            <h3 className="mb-0 ms-5">5</h3>
          </div>
        </div>
      </div>
      {/* Project Cards */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card project-card">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h5 className="mb-2">Web Development</h5>
                <p className="text-secondary mb-0">
                  Redesign and development of the company website using React
                  and Tailwind CSS.
                </p>
              </div>
              <span
                className="status-badge in-progress nowarp"
                style={{ whiteSpace: "nowrap" }}>
                Completed
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="avatar-group">
                <div className="avatar">
                  <img
                    src="https://i.ibb.co/PG9JBqVN/Ellipse-5-6.png"
                    alt="JD"
                  />
                </div>
                <div className="avatar">
                  <img src="https://i.ibb.co/PvLrjqL5/Ellipse-5.png" alt="AS" />
                </div>
              </div>
              <span className="text-secondary">Due in 2 weeks</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card project-card">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h5 className="mb-2">Mobile App</h5>
                <p className="text-secondary mb-0">
                  Development of a cross-platform mobile app using Flutter.
                </p>
              </div>
              <span
                className="status-badge in-progress nowarp"
                style={{ whiteSpace: "nowrap" }}>
                Completed
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="avatar-group">
                <div className="avatar">
                  <img
                    src="https://i.ibb.co/PG9JBqVN/Ellipse-5-6.png"
                    alt="JD"
                  />
                </div>
                <div className="avatar">
                  <img src="https://i.ibb.co/PvLrjqL5/Ellipse-5.png" alt="AS" />
                </div>
              </div>
              <span className="text-secondary">Due in 1 month</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card project-card">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h5 className="mb-2">Data Analytics</h5>
                <p className="text-secondary mb-0">
                  Building data visualization dashboard for business metrics.
                </p>
              </div>
              <span
                className="status-badge in-progress nowarp"
                style={{ whiteSpace: "nowrap" }}>
                Completed
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="avatar-group">
                <div className="avatar">
                  <img
                    src="https://i.ibb.co/PG9JBqVN/Ellipse-5-6.png"
                    alt="JD"
                  />
                </div>
                <div className="avatar">
                  <img src="https://i.ibb.co/PvLrjqL5/Ellipse-5.png" alt="AS" />
                </div>
              </div>
              <span className="text-secondary">Due in 3 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProject;
