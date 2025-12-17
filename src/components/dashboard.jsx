import React, { useState } from "react"; // 1. Імпортуємо useState
import "./Dashboard.scss";

const Dashboard = () => {
  // 2. Створюємо масив даних для карток
  const statsData = [
    { id: 0, label: "Clients", value: 128, icon: "user" },
    { id: 1, label: "Completed tasks", value: 32, icon: "clipboard" },
    { id: 2, label: "Notifications", value: 2, icon: "bell" },
    { id: 3, label: "Reports", value: 4, icon: "report" },
  ];

  // 3. Стан для збереження ID активної картки (за замовчуванням 1 - "Completed tasks")
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="dashboard">
      <div className="dashboard__stats">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            // 4. Умовне додавання класу stat--active
            className={`stat ${activeId === stat.id ? "stat--active" : ""}`}
            // 5. Зміна стану при кліку
            onClick={() => setActiveId(stat.id)}
          >
            <i className={`icon ${stat.icon}`} />
            <span className="stat__value">{stat.value}</span>
            <span className="stat__label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="dashboard__chart">
        <h3>Sales</h3>
        <img src="/assets/sales-chart.png" alt="Sales chart for May" />
      </div>
    </section>
  );
};

export default Dashboard;
