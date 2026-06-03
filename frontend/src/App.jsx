import Sidebar from "./components/sidebar";

import Dashboard from "./pages/dashboard";
import Inventory from "./pages/inventory";
import Customers from "./pages/customers";
import AIInsightsPage from "./pages/aiinsightspage";
import Reports from "./pages/reports";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <div className="flex">

        <Sidebar />

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route
            path="/inventory"
            element={<Inventory />}
          />

          <Route
            path="/customers"
            element={<Customers />}
          />

          <Route
            path="/ai-insights"
            element={<AIInsightsPage />}
          />
          
          <Route 
          path="/reports" 
          element={<Reports />} 
          />
          
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;