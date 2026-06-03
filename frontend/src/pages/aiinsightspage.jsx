import AIInsights from "../components/aiinsights";

function AIInsightsPage() {
  return (
    <div className="flex-1 bg-[#0f172a] min-h-screen p-6">

      <h1 className="text-white text-3xl font-bold mb-6">
        AI Insights
      </h1>

      <AIInsights />

    </div>
  );
}

export default AIInsightsPage;