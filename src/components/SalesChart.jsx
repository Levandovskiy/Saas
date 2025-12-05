import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./SalesChart.scss";

const data = [
  { date: "1 May", sales: 120 },
  { date: "", sales: 180 },
  { date: "", sales: 110 },
  { date: "", sales: 260 },
  { date: "", sales: 540 },
  { date: "31 May", sales: 450 },
];

export const SalesChart = () => {
  return (
    <div className="sales-card">
      <h3>Sales</h3>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <CartesianGrid stroke="#2b3242" strokeDasharray="0" />
            <XAxis dataKey="date" stroke="#6c7a92" />
            <YAxis stroke="#6c7a92" />
            <Tooltip
              contentStyle={{
                background: "#1e2635",
                border: "1px solid #2b3242",
                borderRadius: "6px",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#4aa3ff"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
