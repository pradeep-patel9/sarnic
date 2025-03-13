import React from 'react'

const CreateDesignerList = () => {
  return (
    <>
    <div className="container">
        <div className="card form-container p-4 rounded-3 shadow-sm">
          <h4 className="mb-4">Designer List</h4>
          <form>
            <div className="row g-4">
              {/* Keyword and By Date */}
              <div className="col-md-6">
                <label className="form-label">Keyword</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="col-md-6">
                <label className="form-label">By Date</label>
                <input type="date" className="form-control" />
              </div>
              {/* Project Number and Brand */}
              <div className="col-md-6">
                <label className="form-label">Project Number</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Brand</label>
                <select className="form-select">
                  <option selected="">Select Brand</option>
                  <option>demo1</option>
                  <option>demo1</option>
                  <option>demo1</option>
                </select>
              </div>
              {/* Pack Type and Pack Size */}
              <div className="col-md-6">
                <label className="form-label">Pack Type</label>
                <select className="form-select">
                  <option selected="">Select Pack Type</option>
                  <option>demo1</option>
                  <option>demo1</option>
                  <option>demo1</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Pack Size</label>
                <select className="form-select">
                  <option selected="">Select Pack Size</option>
                  <option>demo1</option>
                  <option>demo1</option>
                  <option>demo1</option>
                </select>
              </div>
              {/* Market and Factory */}
              <div className="col-md-6">
                <label className="form-label">Market</label>
                <select className="form-select">
                  <option selected="">Select Market</option>
                  <option>Domestic</option>
                  <option>International</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Factory</label>
                <select className="form-select">
                  <option selected="">Select Factory</option>
                  <option>Factory A</option>
                  <option>Factory B</option>
                  <option>Factory C</option>
                </select>
              </div>
              {/* Client and Status */}
              <div className="col-md-6">
                <label className="form-label">Client</label>
                <select className="form-select">
                  <option selected="">Select Client</option>
                  <option>Client A</option>
                  <option>Client B</option>
                  <option>Client C</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Status</label>
                <select className="form-select">
                  <option selected="">Select Status</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Completed</option>
                </select>
              </div>
              {/* Promotion and Pack Code */}
              <div className="col-md-6">
                <label className="form-label">Promotion</label>
                <select className="form-select">
                  <option selected="">Select Promotion</option>
                  <option>None</option>
                  <option>Discount 10%</option>
                  <option>Buy 1 Get 1</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Pack Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter pack code"
                />
              </div>
              {/* FG Code */}
              <div className="col-md-6">
                <label className="form-label">FG Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter FG code"
                />
              </div>
            </div>
            {/* Action Buttons */}
            <div className="d-flex justify-content-end gap-3 mt-4">
              <button type="reset" className="btn btn-reset">
                Reset
              </button>
              <button type="submit" className="btn btn-create">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateDesignerList