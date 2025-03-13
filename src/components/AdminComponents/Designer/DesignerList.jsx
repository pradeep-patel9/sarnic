import React from "react";
import { Link } from "react-router-dom";

const DesignerList = () => {
  return (
    <>
      <div className="container mt-5">
        {/* Navigation */}
        <ul className="nav nav-tabs mb-4" id="designerTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#all"
              type="button"
              role="tab">
              All Designers
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
              Active
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="on-leave-tab"
              data-bs-toggle="tab"
              data-bs-target="#on-leave"
              type="button"
              role="tab">
              On Leave
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="all" role="tabpanel">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center gap-4 mb-4">
                  <h4 className="mb-0">Designer List</h4>
                  <div className="d-flex gap-2">
                    <Link to="/createdesigner">
                    <button className="btn-action" style={{width:"max-content"}}>
                      <i className="fas fa-plus" />
                      Add Designer
                    </button>
                    </Link>
                    <button className="btn-action">
                      <i className="fas fa-file-excel" />
                      Import Excel
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead>
                      <tr>
                        <th style={{ width: 40 }}>
                          <input type="checkbox" className="form-check-input" />
                        </th>
                        <th>Designer Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                        <th>Status</th>
                        <th style={{ width: 100 }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="checkbox" className="form-check-input" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="designer-avatar">
                              <i className="fas fa-user" />
                            </div>
                            <span>John Doe</span>
                          </div>
                        </td>
                        <td>john.doe@example.com</td>
                        <td>+1 234 567 8901</td>
                        <td>UI/UX Design</td>
                        <td>5 years</td>
                        <td>
                          <span className="badge bg-success-subtle text-success rounded-pill px-3">
                            Active
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <button className="btn btn-link text-primary p-0">
                              <i
                                className="fas fa-edit action-icon"
                                title="Edit"
                              />
                            </button>
                            <button className="btn btn-link text-danger p-0">
                              <i className="fas fa-trash-alt" title="Delete" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" className="form-check-input" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="designer-avatar">
                              <i className="fas fa-user" />
                            </div>
                            <span>Jane Smith</span>
                          </div>
                        </td>
                        <td>jane.smith@example.com</td>
                        <td>+1 234 567 8902</td>
                        <td>Graphic Design</td>
                        <td>3 years</td>
                        <td>
                          <span className="badge bg-warning-subtle text-warning rounded-pill px-3">
                            On Leave
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <button className="btn btn-link text-primary p-0">
                              <i
                                className="fas fa-edit action-icon"
                                title="Edit"
                              />
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
                <div className="mt-4">
                  <h5 className="mb-2">Notes</h5>
                  <textarea
                    className="notes-input"
                    placeholder="Add your notes here..."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Active Tab */}
          <div className="tab-pane fade" id="active" role="tabpanel">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center gap-4 mb-4">
                  <h4 className="mb-0">Designer List</h4>
                  <div className="d-flex gap-2">
                    {/* <button className="btn-action">
                      <i className="fas fa-plus" />
                      Add Designer
                    </button> */}
                    <button className="btn-action">
                      <i className="fas fa-file-excel" />
                      Import Excel
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead>
                      <tr>
                        <th style={{ width: 40 }}>
                          <input type="checkbox" className="form-check-input" />
                        </th>
                        <th>Designer Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                        <th>Status</th>
                        <th style={{ width: 100 }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="checkbox" className="form-check-input" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="designer-avatar">
                              <i className="fas fa-user" />
                            </div>
                            <span>John Doe</span>
                          </div>
                        </td>
                        <td>john.doe@example.com</td>
                        <td>+1 234 567 8901</td>
                        <td>UI/UX Design</td>
                        <td>5 years</td>
                        <td>
                          <span className="badge bg-success-subtle text-success rounded-pill px-3">
                            Active
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <button className="btn btn-link text-primary p-0">
                              <i
                                className="fas fa-edit action-icon"
                                title="Edit"
                              />
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
                <div className="mt-4">
                  <h5 className="mb-2">Notes</h5>
                  <textarea
                    className="notes-input"
                    placeholder="Add your notes here..."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Leave Tab */}
          <div className="tab-pane fade" id="on-leave" role="tabpanel">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center gap-4 mb-4">
                  <h4 className="mb-0">Designer List</h4>
                  <div className="d-flex gap-2">
                    {/* <button className="btn-action">
                      <i className="fas fa-plus" />
                      Add Designer
                    </button> */}
                    <button className="btn-action">
                      <i className="fas fa-file-excel" />
                      Import Excel
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead>
                      <tr>
                        <th style={{ width: 40 }}>
                          <input type="checkbox" className="form-check-input" />
                        </th>
                        <th>Designer Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                        <th>Status</th>
                        <th style={{ width: 100 }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="checkbox" className="form-check-input" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="designer-avatar">
                              <i className="fas fa-user" />
                            </div>
                            <span>Jane Smith</span>
                          </div>
                        </td>
                        <td>jane.smith@example.com</td>
                        <td>+1 234 567 8902</td>
                        <td>Graphic Design</td>
                        <td>3 years</td>
                        <td>
                          <span className="badge bg-warning-subtle text-warning rounded-pill px-3">
                            On Leave
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <button className="btn btn-link text-primary p-0">
                              <i
                                className="fas fa-edit action-icon"
                                title="Edit"
                              />
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
                <div className="mt-4">
                  <h5 className="mb-2">Notes</h5>
                  <textarea
                    className="notes-input"
                    placeholder="Add your notes here..."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignerList;
