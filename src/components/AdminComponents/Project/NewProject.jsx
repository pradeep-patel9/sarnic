import React from 'react'

const NewProject = () => {
  return (
    <>
    <div className="container">

<div className="search-container">

  <h4 className="mb-4">New Project</h4>

  <form>

    <div className="row g-4">

      {/* Keyword Search */}

      <div className="col-md-6">

        <label className="form-label">Keyword search</label>

        <input

          type="text"

          className="form-control"

          placeholder="Enter keywords"

        />

      </div>

      {/* Date Range */}

      <div className="col-md-6">

        <label className="form-label">Date range</label>

        <div className="row g-2">

          <div className="col-6">

            <div className="date-input">

              <input

                type="text"

                className="form-control"

                placeholder="-/-/-"

              />

            </div>

          </div>

          <div className="col-6">

            <div className="date-input">

              <input

                type="text"

                className="form-control"

                placeholder="-/-/-"

              />

            </div>

          </div>

        </div>

      </div>

      {/* Project Number */}

      <div className="col-md-6">

        <label className="form-label">Project Number</label>

        <input type="text" className="form-control" />

      </div>

      {/* Brand */}

      <div className="col-md-6">

        <label className="form-label">Brand</label>

        <input type="text" className="form-control" />

      </div>

      {/* Pack Type */}

      <div className="col-md-6">

        <label className="form-label">Pack Type</label>

        <select className="form-select">

          <option selected="">Select Pack Type</option>

          <option>Type 1</option>

          <option>Type 2</option>

          <option>Type 3</option>

        </select>

      </div>

      {/* Pack Size */}

      <div className="col-md-6">

        <label className="form-label">Pack Size</label>

        <input type="text" className="form-control" />

      </div>

      {/* Market */}

      <div className="col-md-6">

        <label className="form-label">Market</label>

        <select className="form-select">

          <option selected="">Select Market</option>

          <option>Market 1</option>

          <option>Market 2</option>

          <option>Market 3</option>

        </select>

      </div>

      {/* Factory */}

      <div className="col-md-6">

        <label className="form-label">Factory</label>

        <select className="form-select">

          <option selected="">Select Factory</option>

          <option>Factory 1</option>

          <option>Factory 2</option>

          <option>Factory 3</option>

        </select>

      </div>

      {/* Client */}

      <div className="col-md-6">

        <label className="form-label">Client</label>

        <input type="text" className="form-control" />

      </div>

      {/* Status */}

      <div className="col-md-6">

        <label className="form-label">Status</label>

        <select className="form-select">

          <option selected="">Select Status</option>

          <option>Active</option>

          <option>Completed</option>

          <option>On Hold</option>

        </select>

      </div>

      {/* Promotion */}

      <div className="col-md-6">

        <label className="form-label">Promotion</label>

        <input type="text" className="form-control" />

      </div>

      {/* Pack Code */}

      <div className="col-md-6">

        <label className="form-label">Pack Code</label>

        <input type="text" className="form-control" />

      </div>

      {/* FG Code */}

      <div className="col-md-6">

        <label className="form-label">FG Code</label>

        <input type="text" className="form-control" />

      </div>

      {/* Barcode */}

      <div className="col-md-6">

        <label className="form-label">Barcode</label>

        <input type="text" className="form-control" />

      </div>

    </div>

    {/* Buttons */}

    <div className="d-flex justify-content-end gap-2 mt-4">

      <button type="button" className="btn btn-cancel">

        Cancel

      </button>

      <button type="submit" className="btn btn-create">

        Create Project

      </button>

    </div>

  </form>

</div>

</div>
    </>
  )
}

export default NewProject