import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Ensure you have Chart.js installed

const Dashboard = () => {
    useEffect(() => {
        // Tabs
        const tabLinks = document.querySelectorAll('.nav-link');
        const tabPanes = document.querySelectorAll('.tab-pane');

        const handleTabClick = (e) => {
            e.preventDefault();
            const tabId = e.target.getAttribute('href').substring(1);

            // Deactivate all tabs and panes
            tabLinks.forEach(link => link.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Activate clicked tab and corresponding pane
            e.target.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        };

        tabLinks.forEach(link => link.addEventListener('click', handleTabClick));

        // Initialize Charts
        const chartsData = [
            { id: 'projectsChart', data: [8, 9, 10, 11, 12, 12] },
            { id: 'projectsChart1', data: [8, 9, 10, 11, 12, 12] },
            { id: 'projectsChart2', data: [8, 9, 10, 11, 12, 12] },
        ];

        const chartInstances = [];

        chartsData.forEach(chart => {
            const ctx = document.getElementById(chart.id).getContext('2d');
            const chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        data: chart.data,
                        borderColor: '#4F46E5',
                        backgroundColor: 'rgba(79, 70, 229, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { display: false },
                        y: { display: false }
                    }
                }
            });
            chartInstances.push(chartInstance);
        });

        // Cleanup function to destroy charts and remove event listeners
        return () => {
            chartInstances.forEach(chartInstance => chartInstance.destroy());
            tabLinks.forEach(link => link.removeEventListener('click', handleTabClick));
        };
    }, []);

    return (
        <>
            <div className="container py-4">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4 ">
                    <h2 className="mb-0">Dashboard</h2>
                    <button className="btn btn-primary w-auto" style={{background:"#94d2cc",border:"none"}}>+ Add Project</button>
                </div>
                {/* Stats Cards */}
                <div className="row g-4 mb-4">
                    <div className="col-md-3">
                        <div className="card stats-card h-100 rounded-3 shadow-sm">
                            <div className="card-body">
                                <div className="text d-flex justify-content-between align-items-center">
                                    <h6 className="card-subtitle">Active Projects</h6>
                                    <h2 className="card-title mb-3">12</h2>
                                </div>
                                <div className="chart-container" style={{ height: 60 }}>
                                    <canvas id="projectsChart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card stats-card h-100 rounded-3 shadow-sm">
                            <div className="card-body">
                                <div className="text d-flex justify-content-between align-items-center">
                                    <h6 className="card-subtitle mb-2">Tasks Completed</h6>
                                    <h2 className="card-title text-success mb-3">85%</h2>
                                </div>
                                <div className="chart-container" style={{ height: 60 }}>
                                    <canvas id="projectsChart1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card stats-card h-100 rounded-3 shadow-sm">
                            <div className="card-body">
                                <div className="text d-flex justify-content-between align-items-center">
                                    <h6 className="card-subtitle mb-2">Team Members</h6>
                                    <h2 className="card-title mb-3">24</h2>
                                </div>
                                <div className="team-avatars d-flex align-items-center">
                                    <i className="fa-solid fa-user avatar mt-2 ms-3" />
                                    <i className="fa-solid fa-user avatar mt-2" />
                                    <i className="fa-solid fa-user avatar mt-2" />
                                    <span className="avatar more-members mt-2">20+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card stats-card h-100 rounded-3 shadow-sm">
                            <div className="card-body">
                                <div className="text d-flex justify-content-between align-items-center">
                                    <h6 className="card-subtitle mb-2">Budget Status</h6>
                                    <h2 className="card-title text-success mb-3">$45.2K</h2>
                                </div>
                                <div className="chart-container" style={{ height: 60 }}>
                                    <canvas id="projectsChart2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Activity Section */}
                <div className="card shadow-sm">
                    <div className="card-body">
                        <ul className="nav nav-tabs mb-4">
                            <li className="nav-item">
                                <a className="nav-link active" href="#activity">
                                    Activity
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#my-tasks">
                                    My Tasks
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#late-tasks">
                                    Late Tasks <span className="badge bg-danger ms-1">2</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#upcoming-tasks">
                                    Upcoming Tasks{" "}
                                    <span className="badge bg-warning text-dark ms-1">5</span>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="activity">
                                <div className="activity-list">
                                    <div className="activity-item d-flex align-items-start mb-4">
                                        <i className="fa-solid fa-user avatar me-3" />
                                        <div>
                                            <h6 className="mb-1">Michael Anderson</h6>
                                            <p className="mb-1">
                                                Updated the design files for the landing page
                                            </p>
                                            <div className="activity-meta">
                                                <span className="badge bg-primary me-2">Design</span>
                                                <small className="text-muted">
                                                    Project: Website Redesign
                                                </small>
                                                <small className="text-muted ms-3">2 hours ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity-item d-flex align-items-start">
                                        <i className="fa-solid fa-user avatar me-3 d-flex justify-content-center align-items-center" />
                                        <div>
                                            <h6 className="mb-1">Sarah Wilson</h6>
                                            <p className="mb-1">Completed the user research interviews</p>
                                            <div className="activity-meta">
                                                <span className="badge bg-success me-2">Research</span>
                                                <small className="text-muted">
                                                    Project: Marketing Campaign
                                                </small>
                                                <small className="text-muted ms-3">4 hours ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="my-tasks">
                                <div className="no-data text-center py-5">
                                    <i
                                        className="fa-regular fa-clipboard text-muted mb-3 d-block"
                                        style={{ fontSize: "3rem" }}
                                    />
                                    <h5 className="text-muted">No tasks assigned to you</h5>
                                </div>
                            </div>
                            <div className="tab-pane" id="late-tasks">
                                <div className="no-data text-center py-5">
                                    <i
                                        className="fa-regular fa-clock text-muted mb-3 d-block"
                                        style={{ fontSize: "3rem" }}
                                    />
                                    <h5 className="text-muted">No late tasks</h5>
                                </div>
                            </div>
                            <div className="tab-pane" id="upcoming-tasks">
                                <div className="no-data text-center py-5">
                                    <i
                                        className="fa-regular fa-calendar text-muted mb-3 d-block"
                                        style={{ fontSize: "3rem" }}
                                    />
                                    <h5 className="text-muted">No upcoming tasks</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;