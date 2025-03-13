import React from 'react'
import { Link } from 'react-router-dom'

const Production = () => {
  return (
    <div className="container mt-5">
  <div className="card shadow-sm">
    <div className="card-body">
      <div className="production-header">
        <h4 className="mb-0">Production List</h4>
        <Link to="/createproduction">
        <button className="btn-add-production w-auto">
          <i className="fas fa-plus" />
          Add Production
        </button>
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="form-check-input" />
              </th>
              <th>Program Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>Production Run A</td>
              <td>2024-02-01</td>
              <td>2024-02-15</td>
              <td>
                <span className="status-badge status-active">Active</span>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <i className="fas fa-edit me-1 action-icon" title="Edit" />
                  <i className="fas fa-file-pdf me-1 action-icon" title="PDF" />
                  <i className="fas fa-link me-1 action-icon" title="Link" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>Production Run B</td>
              <td>2024-02-05</td>
              <td>2024-02-20</td>
              <td>
                <span className="status-badge status-pending">Pending</span>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <i className="fas fa-edit me-1 action-icon" title="Edit" />
                  <i className="fas fa-file-pdf me-1 action-icon" title="PDF" />
                  <i className="fas fa-link me-1 action-icon" title="Link" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="notes-section">
        <h5>Notes</h5>
        <textarea
          className="notes-input"
          placeholder="Add your notes here..."
          defaultValue={""}
        />
      </div>
    </div>
  </div>
</div>
  )
}

export default Production