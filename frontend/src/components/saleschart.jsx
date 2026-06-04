import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { useEffect, useState } from "react";

function SalesChart() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://retailiq-ai-backend.onrender.com/sales-chart")
      .then((response) => response.json())
      .then((data) => setData(data));

  }, []);

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl mt-6">

      <h2 className="text-white text-xl font-semibold mb-6">
        Sales Overview
      </h2>

      <div className="w-full h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#38bdf8"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default SalesChart;