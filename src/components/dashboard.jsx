import React from "react";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard__stats">
        <div className="stat">
          <i className="icon user" />
          <span className="stat__value">128</span>
          <span className="stat__label">Clients</span>
        </div>
        <div className="stat stat--active">
          <i className="icon clipboard" />
          <span className="stat__value">32</span>
          <span className="stat__label">Completed tasks</span>
        </div>
        <div className="stat">
          <i className="icon bell" />
          <span className="stat__value">2</span>
          <span className="stat__label">Notifications</span>
        </div>
        <div className="stat">
          <i className="icon report" />
          <span className="stat__value">4</span>
          <span className="stat__label">Reports</span>
        </div>
      </div>

      <div className="dashboard__chart">
        <h3>Sales</h3>
        <img src="/assets/sales-chart.png" alt="Sales chart for May" />
      </div>
    </section>
  );
};

export default Dashboard;
