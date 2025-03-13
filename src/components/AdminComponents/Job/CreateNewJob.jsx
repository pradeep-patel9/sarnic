import React from 'react'

const CreateNewJob = () => {
  return (
    <>
    <div className="container">
  <div className="form-container">
    <h4 className="mb-4">Create New Jobs</h4>
    <form>
      <div className="row g-3">
        {/* Job ID */}
        <div className="col-12">
          <label className="form-label">Job ID</label>
          <input type="text" className="form-control" />
        </div>
        {/* Project Name */}
        <div className="col-12">
          <label className="form-label">Project Name</label>
          <input type="text" className="form-control" />
        </div>
        {/* Client */}
        <div className="col-12">
          <label className="form-label">Client</label>
          <input type="text" className="form-control" />
        </div>
        {/* Promotion */}
        <div className="col-12">
          <label className="form-label">Promotion</label>
          <input type="text" className="form-control" />
        </div>
        {/* Brand */}
        <div className="col-12">
          <label className="form-label">Brand</label>
          <input type="text" className="form-control" />
        </div>
        {/* Sub Brand */}
        <div className="col-12">
          <label className="form-label">Sub-Brand</label>
          <input type="text" className="form-control" />
        </div>
        {/* Flavour */}
        <div className="col-12">
          <label className="form-label">Flavour</label>
          <input type="text" className="form-control" />
        </div>
        {/* Pack Type */}
        <div className="col-12">
          <label className="form-label">Pack Type</label>
          <input type="text" className="form-control" />
        </div>
        {/* Pack Size */}
        <div className="col-12">
          <label className="form-label">Pack Size</label>
          <input type="text" className="form-control" />
        </div>
        {/* Date Created */}
        <div className="col-12">
          <label className="form-label">Date Created</label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        {/* Target Date */}
        <div className="col-12">
          <label className="form-label">Target Date</label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        {/* FG Code */}
        <div className="col-12">
          <label className="form-label">FG Code</label>
          <input type="text" className="form-control" />
        </div>
        {/* Barcode */}
        <div className="col-12">
          <label className="form-label">Barcode</label>
          <input type="text" className="form-control" />
        </div>
        {/* TD No */}
        <div className="col-12">
          <label className="form-label">TD NO</label>
          <input type="text" className="form-control" />
        </div>
        {/* Dimensions */}
        <div className="col-12">
          <label className="form-label">Dimensions</label>
          <input type="text" className="form-control" />
        </div>
        {/* Trim Size */}
        <div className="col-12">
          <label className="form-label">Trim Size</label>
          <input type="text" className="form-control" />
        </div>
        {/* No of Colours */}
        <div className="col-12">
          <label className="form-label">No of Colours</label>
          <input type="text" className="form-control" />
        </div>
        {/* Print Process */}
        <div className="col-12">
          <label className="form-label">Print Process</label>
          <input type="text" className="form-control" />
        </div>
        {/* Instructions */}
        <div className="col-12">
          <label className="form-label">Instructions</label>
          <textarea className="form-control" defaultValue={""} />
        </div>
      </div>
      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-2 mt-4">
        <button type="button" className="btn btn-action">
          Discard
        </button>
        <button type="button" className="btn btn-action">
          Save &amp; Add
        </button>
        <button type="submit" className="btn btn-action">
          Save &amp; Close
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default CreateNewJob