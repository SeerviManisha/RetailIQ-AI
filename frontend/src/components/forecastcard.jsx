import { useEffect, useState } from "react";

function ForecastCard() {

  const [prediction, setPrediction] = useState("");

  useEffect(() => {

    fetch("https://retailiq-ai-backend.onrender.com/sales-forecast")
      .then((response) => response.json())
      .then((data) => setPrediction(data.prediction));

  }, []);

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl mt-6">

      <h2 className="text-white text-xl font-semibold mb-4">
        Sales Forecast
      </h2>

      <p className="text-4xl font-bold text-cyan-400">
        ${prediction}
      </p>

      <p className="text-gray-400 mt-2">
        Predicted next month sales
      </p>

    </div>
  );
}

export default ForecastCard;