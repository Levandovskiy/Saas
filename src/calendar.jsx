import React from "react";
import "./calendar.scss";

export default function CalendarActivity() {
  return (
    <div className="container bg-app">
      <div className="calendar-card">
        <div className="header">May 2025</div>
        <div className="calendar-grid">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <div key={d} className="day-label">
              {d}
            </div>
          ))}
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
          ].map((n) => (
            <div key={n} className={`day ${n === 2 ? "active" : ""}`}>
              {n}
            </div>
          ))}
        </div>
      </div>

      <div className="activity-card">
        <div className="header">Activity</div>
        <div className="bars">
          {[40, 60, 80, 70, 50, 30].map((h, i) => (
            <div key={i} className="bar" style={{ height: h + "px" }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
