import React from "react";
import { Link } from "react-router-dom";
import CreateNewJob from "./CreateNewJob";
import MyJob from "./MyJob";
import AppliedJob from "./AppliedJob";
import Savedjob from "./Savedjob";
import InterviewsJob from "./InterviewsJob";
import ArchivedJob from "./ArchivedJob";

const Job = () => {
  return (
    <>
      <div className="container mt-5">
        {/* Navigation */}
        <ul className="nav nav-tabs mb-4" id="projectTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="overview-tab"
              data-bs-toggle="tab"
              data-bs-target="#job"
              type="button"
              role="tab">
              All Job
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="myprojects-tab"
              data-bs-toggle="tab"
              data-bs-target="#myprojects"
              type="button"
              role="tab">
              My Job
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="allprojects-tab"
              data-bs-toggle="tab"
              data-bs-target="#allprojects"
              type="button"
              role="tab">
              Applied Jobs
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="active-tab"
              data-bs-toggle="tab"
              data-bs-target="#active"
              type="button"
              role="tab">
              Saved Jobs
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="completed-tab"
              data-bs-toggle="tab"
              data-bs-target="#completed"
              type="button"
              role="tab">
              Interviews
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="onhold-tab"
              data-bs-toggle="tab"
              data-bs-target="#onhold"
              type="button"
              role="tab">
              Archived
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="createjob-tab"
              data-bs-toggle="tab"
              data-bs-target="#createjob"
              type="button"
              role="tab">
              Create New Job
            </button>
          </li>
        </ul>
        {/* Tab Content */}
        <div className="tab-content">
          {/* Jobs Tab (Default Active) */}
          <div className="tab-pane fade show active" id="job" role="tabpanel">
            <div className="table-container bg-white p-4 rounded-3 shadow-sm">
              <div className="job-header">
                <h4 className="mb-0">Jobs</h4>
                <div className="d-flex gap-2">
                  <Link to="/createnewjob" className="btn-add">
                    <i className="fas fa-plus me-2" />
                    New Job
                  </Link>
                  <Link to="/excelimportjob" className="btn-import">
                    <i className="fas fa-file-import me-2" />
                    Import
                  </Link>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>Job #</th>
                      <th>Brand</th>
                      <th>Sub Brand</th>
                      <th>Flavour</th>
                      <th>Pack Type</th>
                      <th>Size</th>
                      <th>PackCode</th>
                      <th>FGCode</th>
                      <th>Barcode</th>
                      <th>Status</th>
                      <th>3D</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>JOB001</td>
                      <td>Coca Cola</td>
                      <td>Classic</td>
                      <td>Original</td>
                      <td>Can</td>
                      <td>330ml</td>
                      <td>PC001</td>
                      <td>FG001</td>
                      <td>123456789</td>
                      <td>
                        <span className="status-badge status-in-progress">
                          In Progress
                        </span>
                      </td>
                      <td>
                        <button className="btn-3d">
                          <i className="fas fa-cube fa-lg" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>JOB002</td>
                      <td>Pepsi</td>
                      <td>Max</td>
                      <td>Zero</td>
                      <td>Bottle</td>
                      <td>500ml</td>
                      <td>PC002</td>
                      <td>FG002</td>
                      <td>987654321</td>
                      <td>
                        <span className="status-badge status-delayed">
                          Delayed
                        </span>
                      </td>
                      <td>
                        <button className="btn-3d">
                          <i className="fas fa-cube fa-lg" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* My Projects Tab */}
          <div className="tab-pane fade" id="myprojects" role="tabpanel">
            <div className="empty-state">
             <MyJob />
            </div>
          </div>
          {/* All Projects Tab */}
          <div className="tab-pane fade" id="allprojects" role="tabpanel">
            <div className="empty-state">
              <AppliedJob />
            </div>
          </div>
          {/* Active Tab */}
          <div className="tab-pane fade" id="active" role="tabpanel">
            <div className="empty-state">
              <Savedjob />
            </div>
          </div>
          {/* Completed Tab */}
          <div className="tab-pane fade" id="completed" role="tabpanel">
            <div className="empty-state">
              <InterviewsJob />
            </div>
          </div>
          {/* On Hold Tab */}
          <div className="tab-pane fade" id="onhold" role="tabpanel">
            <div className="empty-state">
              <ArchivedJob />
            </div>
          </div>
          {/* create new job */}
          <div className="tab-pane fade" id="createjob" role="tabpanel">
            <div className="empty-state">
              <CreateNewJob/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
