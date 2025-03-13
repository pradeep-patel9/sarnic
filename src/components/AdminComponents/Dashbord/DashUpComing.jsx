import React from "react";

const DashUpComing = () => {
  return (
    <>
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
            <div className="task-card bg-white p-3 rounded">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="task1"
                    />
                  </div>
                  <div>
                    <h5 className="mb-1">Design System Update</h5>
                    <p className="text-muted mb-0">Due in 2 days</p>
                  </div>
                </div>
                <span className="priority-badge priority-medium">Medium</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="task-card bg-white p-3 rounded">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="task2"
                    />
                  </div>
                  <div>
                    <h5 className="mb-1">Frontend Performance Optimization</h5>
                    <p className="text-muted mb-0">Due in 3 days</p>
                  </div>
                </div>
                <span className="priority-badge priority-medium">Medium</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="task-card bg-white p-3 rounded">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="task2"
                    />
                  </div>
                  <div>
                    <h5 className="mb-1">Documentation Update</h5>
                    <p className="text-muted mb-0">Due in 4 days</p>
                  </div>
                </div>
                <span className="priority-badge priority-low">Low</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashUpComing;
