import React from 'react'
import { Link } from 'react-router-dom'
import MyProject from './MyProject'
import AllProject from './AllProject'
import ActiveProject from './ActiveProject'
import CompleteProject from './CompleteProject'
import OnHoldProject from './OnHoldProject'


const Project = () => {
  return (
    <>
    <div className="container py-4">
  {/* Navigation */}
  <ul className="nav nav-tabs mb-4" id="projectTabs" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active"
        id="overview-tab"
        data-bs-toggle="tab"
        data-bs-target="#overview"
        type="button"
        role="tab"
      >
        Overview
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="myprojects-tab"
        data-bs-toggle="tab"
        data-bs-target="#myprojects"
        type="button"
        role="tab"
      >
        My Projects
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="allprojects-tab"
        data-bs-toggle="tab"
        data-bs-target="#allprojects"
        type="button"
        role="tab"
      >
        All Projects
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="active-tab"
        data-bs-toggle="tab"
        data-bs-target="#active"
        type="button"
        role="tab"
      >
        Active
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="completed-tab"
        data-bs-toggle="tab"
        data-bs-target="#completed"
        type="button"
        role="tab"
      >
        Completed
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="onhold-tab"
        data-bs-toggle="tab"
        data-bs-target="#onhold"
        type="button"
        role="tab"
      >
        On Hold
      </button>
    </li>
  </ul>
  {/* Tab Content */}
  <div className="tab-content" id="projectTabsContent">
    {/* Overview Tab */}
    <div className="tab-pane fade show active" id="overview" role="tabpanel">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Project Overview</h4>
        <Link to="/newprojects">
        <button
          className="btn text-white w-auto"
          style={{ backgroundColor: "#94d2cc", fontWeight: 500 }}
        >
          New Project
        </button>
        </Link>
      </div>
      {/* Stats Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card rounded-3 shadow-sm bg-white p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <i className="fas fa-tasks fa-lg" />
              </div>
              <div>
                <h6 className="mb-1">Total Tasks</h6>
                <h3 className="mb-0">48</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card rounded-3 shadow-sm bg-white p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <i className="fas fa-clock fa-lg" />
              </div>
              <div>
                <h6 className="mb-1">Total Hours</h6>
                <h3 className="mb-0">164</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card rounded-3 shadow-sm bg-white p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <i className="fas fa-users fa-lg" />
              </div>
              <div>
                <h6 className="mb-1">Team Members</h6>
                <h3 className="mb-0">12</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Activities */}
      <div className="card shadow-sm rounded-3">
        <div className="card-body">
          <h5 className="card-title mb-4">Recent Activities</h5>
          <hr />
          <div className="activity-list">
            <div className="activity-item d-flex align-items-start mb-4">
              <div className="avatar me-3 bg-dark rounded-circle px-2 text-white">
                R
              </div>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h6 className="mb-0">Rahul Sharma</h6>
                  <span className="text-muted small">2 hours ago</span>
                </div>
                <p className="mb-0">Added a new task</p>
              </div>
            </div>
            <hr />
            <div className="activity-item d-flex align-items-start mb-4">
              <div className="avatar me-3 bg-dark rounded-circle px-2 text-white">
                P
              </div>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h6 className="mb-0">Priya Gupta</h6>
                  <span className="text-muted small">4 hours ago</span>
                </div>
                <p className="mb-0">Added a comment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* My Projects Tab */}
    <div className="tab-pane fade" id="myprojects" role="tabpanel">
      <div className="empty-state">
        <MyProject/>
      </div>
    </div>
    {/* All Projects Tab */}
    <div className="tab-pane fade" id="allprojects" role="tabpanel">
      <div className="empty-state">
      <AllProject/>
      </div>
    </div>
    {/* Active Tab */}
    <div className="tab-pane fade" id="active" role="tabpanel">
      <div className="empty-state">
        <ActiveProject/>
      </div>
    </div>
    {/* Completed Tab */}
    <div className="tab-pane fade" id="completed" role="tabpanel">
      <div className="empty-state">
        <CompleteProject />
      </div>
    </div>
    {/* On Hold Tab */}
    <div className="tab-pane fade" id="onhold" role="tabpanel">
      <div className="empty-state">
       <OnHoldProject />
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Project