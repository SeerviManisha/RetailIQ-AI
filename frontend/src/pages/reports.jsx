import dashboard from "../assets/dashboard.png";
import category from "../assets/category.png";
import salestrend from "../assets/salestrend.png";
import statewise from "../assets/statewise.png";

function Reports() {
  return (
    <div className="flex-1 bg-[#0f172a] min-h-screen p-6 text-white">

      <h1 className="text-3xl font-bold mb-8">
        Business Reports
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-[#1e293b] p-4 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">
            Dashboard Overview
          </h2>

          <a href={dashboard} target="_blank" rel="noopener noreferrer">
  <img
    src={dashboard}
    alt="Dashboard"
    className="rounded-xl cursor-pointer hover:scale-105 transition duration-300"
  />
</a>
        </div>

        <div className="bg-[#1e293b] p-4 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">
            Category Analysis
          </h2>

          <a href={category} target="_blank" rel="noopener noreferrer">
  <img
    src={category}
    alt="Category"
    className="rounded-xl cursor-pointer hover:scale-105 transition duration-300"
  />
</a>
        </div>

        <div className="bg-[#1e293b] p-4 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">
            Sales Trend
          </h2>

          <a href={salestrend} target="_blank" rel="noopener noreferrer">
  <img
    src={salestrend}
    alt="Sales Trend"
    className="rounded-xl cursor-pointer hover:scale-105 transition duration-300"
  />
</a>
        </div>

        <div className="bg-[#1e293b] p-4 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">
            State Wise Sales
          </h2>

          <a href={statewise} target="_blank" rel="noopener noreferrer">
  <img
    src={statewise}
    alt="State Wise"
    className="rounded-xl cursor-pointer hover:scale-105 transition duration-300"
  />
</a>
        </div>

      </div>

    </div>
  );
}

export default Reports;