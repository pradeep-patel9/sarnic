import React from 'react'

const MyJob = () => {
  return (
    <>
    <div className="container mt-5">
  <div className="card table-container bg-white p-4 rounded-3 shadow-sm">
    <div className="job-header">
      <h4 className="mb-0">My Jobs</h4>
      
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
            <th>Action</th>
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
              <span className="status-badge status-delayed">Delayed</span>
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

export default MyJob