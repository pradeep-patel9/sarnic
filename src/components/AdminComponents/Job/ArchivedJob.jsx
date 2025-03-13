import React from 'react'

const ArchivedJob = () => {
  return (
    <>
    <div className="container py-4">
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h4 className="mb-0">Archived</h4>
    <div className="header-actions d-flex align-items-center" >
            <button className="btn btn-secondary-action" >
              <i className="fas fa-sort-amount-down me-2" />
              Sort
            </button>
            <button className="btn btn-secondary-action" style={{width:"300px"}}>
              <i className="fas fa-filter me-2" />
              Filter
            </button>
          </div>
  </div>
  <div className="interview-table">
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Interview Date</th>
            <th>Time</th>
            <th>Interviewer</th>
            <th>Type</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="company-info">
                <div className="company-logo">
                  <i className="fa-brands fa-apple" />
                </div>
                <div className="company-details">
                  <span className="company-name">Apple</span>
                  <span className="position-title">
                    Senior Frontend Engineer
                  </span>
                </div>
              </div>
            </td>
            <td>Senior Frontend Engineer</td>
            <td>2024-02-20</td>
            <td>10:00 AM PST</td>
            <td>
              <div className="interviewer-info">
                <span className="interviewer-name">Sarah Johnson</span>
                <span className="interviewer-title">Engineering Manager</span>
              </div>
            </td>
            <td>
              <span className="badge-interview badge-technical">Technical</span>
            </td>
            <td>
              <div className="location-info">
                <i className="fas fa-video" />
                <span>Video Call (Zoom)</span>
              </div>
            </td>
            <td>
              <span className="badge-interview badge-scheduled">Archived</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="company-info">
                <div className="company-logo">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                    alt="Microsoft"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="company-details">
                  <span className="company-name">Microsoft</span>
                  <span className="position-title">Full Stack Developer</span>
                </div>
              </div>
            </td>
            <td>Full Stack Developer</td>
            <td>2024-02-21</td>
            <td>2:30 PM EST</td>
            <td>
              <div className="interviewer-info">
                <span className="interviewer-name">Michael Chen</span>
                <span className="interviewer-title">Tech Lead</span>
              </div>
            </td>
            <td>
              <span className="badge-interview badge-behavioral">
                Behavioral
              </span>
            </td>
            <td>
              <div className="location-info">
                <i className="fas fa-building" />
                <span>On-site, Redmond, WA</span>
              </div>
            </td>
            <td>
              <span className="badge-interview badge-scheduled">Archived</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="company-info">
                <div className="company-logo">
                  <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="company-details">
                  <span className="company-name">Google</span>
                  <span className="position-title">Software Engineer</span>
                </div>
              </div>
            </td>
            <td>Software Engineer</td>
            <td>2024-02-22</td>
            <td>11:00 AM PST</td>
            <td>
              <div className="interviewer-info">
                <span className="interviewer-name">Alex Wong</span>
                <span className="interviewer-title">Senior Engineer</span>
              </div>
            </td>
            <td>
              <span className="badge-interview badge-system">
                System Design
              </span>
            </td>
            <td>
              <div className="location-info">
                <i className="fas fa-video" />
                <span>Video Call (Google Meet)</span>
              </div>
            </td>
            <td>
              <span className="badge-interview badge-scheduled">Archived</span>
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

export default ArchivedJob