import {
  FaChartLine,
  FaBox,
  FaUsers,
  FaRobot,
  FaFileAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="
      w-64
      bg-[#020617]
      min-h-screen
      p-6
      border-r
      border-slate-800
    ">

      <h1 className="text-3xl font-bold text-cyan-400 mb-12">
        RetailIQ AI
      </h1>

      <ul className="space-y-6 text-gray-300">

        <Link to="/">
  <li className="flex items-center gap-3 hover:bg-[#1e293b] p-3 rounded-xl cursor-pointer transition-all">
    <FaChartLine />
    Dashboard
  </li>
</Link>

        <Link to="/inventory">
  <li className="flex items-center gap-3 hover:bg-[#1e293b] p-3 rounded-xl cursor-pointer transition-all">
    <FaBox />
    Inventory
  </li>
</Link>

        <Link to="/customers">
  <li className="flex items-center gap-3 hover:bg-[#1e293b] p-3 rounded-xl cursor-pointer transition-all">
    <FaUsers />
    Customers
  </li>
</Link>

        <Link to="/ai-insights">
  <li className="flex items-center gap-3 hover:bg-[#1e293b] p-3 rounded-xl cursor-pointer transition-all">
    <FaRobot />
    AI Insights
  </li>
</Link>

<Link to="/reports">
  <div className="flex items-center gap-3">
  <FaFileAlt />
  <span>Reports</span>
</div>
</Link>

      </ul>
    </div>
  );
}

export default Sidebar;