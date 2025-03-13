import React from 'react'
import { Link } from 'react-router-dom'
const Traffic = () => {
  return (
    <>
    <div className="container mt-5">
  <div className="card shadow-sm">
    <div className="card-body">
      <div className="traffic-header">
        <h4 className="mb-0">Traffic List</h4>
        <div className="d-flex gap-2">
          <Link to="/createtrafficlist" className="btn-action">
            <i className="fas fa-plus" />
            Add
          </Link>
          <a href="#" className="btn-action">
            <i className="fas fa-file-excel" />
            Import Excel
          </a>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="form-check-input" />
              </th>
              <th>Time</th>
              <th>Location</th>
              <th>Direction</th>
              <th>Speed</th>
              <th>Vehicle Type</th>
              <th>License Plate</th>
              <th>FG Code</th>
              <th>Barcode</th>
              <th>TD No.</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>09:30 AM</td>
              <td>Main Street</td>
              <td>Northbound</td>
              <td>65 km/h</td>
              <td>Car</td>
              <td>ABC123</td>
              <td>FG001</td>
              <td>890123456789</td>
              <td>PRJ001</td>
              <td>
                <span className="status-badge status-in-progress">
                  In Progress
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>10:15 AM</td>
              <td>Highway 101</td>
              <td>Southbound</td>
              <td>80 km/h</td>
              <td>Truck</td>
              <td>XYZ789</td>
              <td>FG002</td>
              <td>890123456790</td>
              <td>PRJ002</td>
              <td>
                <span className="status-badge status-delayed">Delayed</span>
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
    </>
  )
}

export default Traffic