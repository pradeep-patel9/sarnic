import React from "react";

const Savedjob = () => {
  return (
    <>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center gap-2">
            <h4 className="mb-0">Saved Jobs</h4>
            <span className="text-secondary">(2 positions)</span>
          </div>
          <div className="header-actions d-flex align-items-center">
            <button className="btn btn-secondary-action">
              <i className="fas fa-sort-amount-down me-2" />
              Sort
            </button>
            <button className="btn btn-secondary-action" style={{width:"250px"}}>
              <i className="fas fa-filter me-2" />
              Filter
            </button>
            {/* <button className="btn btn-add-job" style={{width:"300px"}}>
              <i className="fas fa-plus me-2" />
              Add Job
            </button> */}
          </div>
        </div>
        <div className="card table-container">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Location</th>
                  <th>Applied Date</th>
                  <th>Experience</th>
                  <th>Salary</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="company-info">
                      <div className="company-logo">
                        <i className="fa-brands fa-apple" />
                      </div>
                      <div className="company-details">
                        <span className="company-name">Apple</span>
                        <small className="text-secondary">technology</small>
                      </div>
                    </div>
                  </td>
                  <td>Senior Frontend Engineer</td>
                  <td>
                    <div className="location-info">
                      <span>Cupertino, CA</span>
                      <small className="text-secondary">United States</small>
                    </div>
                  </td>
                  <td>2024-02-18</td>
                  <td>5+ years</td>
                  <td className="salary-range">$150k-200k</td>
                  <td>
                    <span className="badge-status badge-full-time">
                      Full-time
                    </span>
                  </td>
                  <td>
                    <span className="badge-status badge-saved">Saved</span>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-link text-primary p-0">
                        <i className="fas fa-edit action-icon" title="Edit" />
                      </button>
                      <button className="btn btn-link text-danger p-0">
                        <i className="fas fa-trash-alt" title="Delete" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="company-info">
                      <div className="company-logo">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                          alt="Microsoft"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="company-details">
                        <span className="company-name">Microsoft</span>
                        <small className="text-secondary">technology</small>
                      </div>
                    </div>
                  </td>
                  <td>Full Stack Developer</td>
                  <td>
                    <div className="location-info">
                      <span>Redmond, WA</span>
                      <small className="text-secondary">United States</small>
                    </div>
                  </td>
                  <td>2024-02-17</td>
                  <td>3-7 years</td>
                  <td className="salary-range">$130k-170k</td>
                  <td>
                    <span className="badge-status badge-full-time">
                      Full-time
                    </span>
                  </td>
                  <td>
                    <span className="badge-status badge-saved">Saved</span>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-link text-primary p-0">
                        <i className="fas fa-edit action-icon" title="Edit" />
                      </button>
                      <button className="btn btn-link text-danger p-0">
                        <i className="fas fa-trash-alt" title="Delete" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Savedjob;
