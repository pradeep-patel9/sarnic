import React from 'react'

const ExcelImportJob = () => {
  return (
    <>
    <div className="container mt-5">
  <div className="card shadow-sm">
    <div className="card-body">
      <div className="import-header">
        <h4 className="mb-0">Excel Import</h4>
        <button className="btn-import-excel w-auto">
          <i className="fas fa-file-excel me-2" />
          Import Excel
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="form-check-input" />
              </th>
              <th>Brand</th>
              <th>Sub Brand</th>
              <th>Flavour</th>
              <th>Pack Type</th>
              <th>Pack Size</th>
              <th>Pack Code</th>
              <th>FG Code</th>
              <th>Barcode</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>Coca Cola</td>
              <td>Classic</td>
              <td>Original</td>
              <td>Can</td>
              <td>330ml</td>
              <td>PC001</td>
              <td>FG001</td>
              <td>890123456789</td>
              <td>
                <span className="status-badge status-in-progress">
                  In Progress
                </span>
              </td>
              <td className="action-icons">
                <button title="Edit">
                  <i className="fas fa-edit" />
                </button>
                <button title="View 3D">
                  <i className="fas fa-cube" />
                </button>
                <button title="More">
                  <i className="fas fa-ellipsis-v" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>Pepsi</td>
              <td>Max</td>
              <td>Zero Sugar</td>
              <td>Bottle</td>
              <td>500ml</td>
              <td>PC002</td>
              <td>FG002</td>
              <td>890123456790</td>
              <td>
                <span className="status-badge status-delayed">Delayed</span>
              </td>
              <td className="action-icons">
                <button title="Edit">
                  <i className="fas fa-edit" />
                </button>
                <button title="View 3D">
                  <i className="fas fa-cube" />
                </button>
                <button title="More">
                  <i className="fas fa-ellipsis-v" />
                </button>
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

export default ExcelImportJob