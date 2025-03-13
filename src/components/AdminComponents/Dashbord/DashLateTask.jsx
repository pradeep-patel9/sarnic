import React from 'react'

const DashLateTask = () => {
  return (
    <>
    <div className="container">
  <div className="row g-4">
    <div className="col-12">
      <div className="task-card bg-white p-3 rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="task1" />
            </div>
            <div>
              <h5 className="mb-1">Backend API Integration</h5>
              <p className="text-muted mb-0">Overdue by 2 days</p>
            </div>
          </div>
          <span className="priority-badge priority-high">High</span>
        </div>
      </div>
    </div>
    <div className="col-12">
      <div className="task-card bg-white p-3 rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="task2" />
            </div>
            <div>
              <h5 className="mb-1">User Authentication System</h5>
              <p className="text-muted mb-0">Overdue by 1 day</p>
            </div>
          </div>
          <span className="priority-badge priority-high">High</span>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default DashLateTask