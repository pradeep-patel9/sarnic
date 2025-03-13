import React from 'react'

const AppliedJob = () => {
  return (
    <>
    <div className="container mt-5">
  <div className="card table-container bg-white p-4 rounded-3 shadow-sm">
    <div className="job-header mb-4">
      <h4 className="mb-0">Applied Jobs</h4>
    </div>
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Location</th>
            <th>Applied Date</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Type</th>
            <th>Barcode</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google</td>
            <td>Frontend Developer</td>
            <td>Mountain View, CA</td>
            <td>2024-02-15</td>
            <td>3-5 years</td>
            <td>$120k-150k</td>
            <td>Full-time</td>
            <td>123456789</td>
            <td>
              <span className="status-badge status-in-progress">Interview</span>
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
            <td>Meta</td>
            <td>Senior UI Developer</td>
            <td>San Francisco, CA</td>
            <td>2024-02-10</td>
            <td>5+ years</td>
            <td>$140k-180k</td>
            <td>Full-time</td>
            <td>987654321</td>
            <td>
              <span className="status-badge status-delayed">Pending</span>
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
  )
}

export default AppliedJob