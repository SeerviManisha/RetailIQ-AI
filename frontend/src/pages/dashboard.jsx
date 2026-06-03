import { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import StatCard from "../components/statcard";
import SalesChart from "../components/saleschart";
import AIInsights from "../components/aiinsights";
import TopProducts from "../components/topproducts";
import ForecastCard from "../components/forecastcard";

function Dashboard() {

  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {

    fetch("http://127.0.0.1:5000/dashboard")
      .then((response) => response.json())
      .then((data) => setDashboardData(data));

  }, []);

  return (
    <div className="flex-1 bg-gradient-to-br from-[#0f172a] to-[#020617] min-h-screen p-6">

      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

        <StatCard
          title="Total Revenue"
          value={dashboardData.revenue}
        />

        <StatCard
          title="Total Orders"
          value={dashboardData.orders}
        />

        <StatCard
          title="Customers"
          value={dashboardData.customers}
        />

        <StatCard
          title="Products Sold"
          value={dashboardData.products}
        />

      </div>

      <SalesChart />
      <ForecastCard />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

        <TopProducts />

        <AIInsights />

      </div>

    </div>
  );
}

export default Dashboard;