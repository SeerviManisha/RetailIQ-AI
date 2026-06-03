import { useEffect, useState } from "react";

function AIInsights() {

  const [insights, setInsights] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:5000/ai-insights")
      .then((response) => response.json())
      .then((data) => setInsights(data));

  }, []);

  return (

    <div className="
      bg-[#1e293b]
      p-6
      rounded-2xl
      shadow-xl
      border
      border-slate-700
    ">

      <h2 className="
        text-white
        text-2xl
        font-bold
        mb-6
      ">
        AI Business Insights
      </h2>

      <div className="space-y-4">

        {insights.map((insight, index) => (

          <div
            key={index}
            className="
              bg-[#0f172a]
              p-4
              rounded-xl
              text-gray-300
              border
              border-slate-800
            "
          >

            {insight}

          </div>

        ))}

      </div>

    </div>
  );
}

export default AIInsights;