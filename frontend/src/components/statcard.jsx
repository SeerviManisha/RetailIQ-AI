function StatCard({ title, value }) {
  return (
    <div className="
      bg-gradient-to-br
      from-[#1e293b]
      to-[#0f172a]
      p-6
      rounded-2xl
      shadow-xl
      border
      border-slate-700
      hover:scale-105
      transition-all
      duration-300
    ">

      <h3 className="text-gray-400 text-sm tracking-wide">
        {title}
      </h3>

      <p className="text-white text-3xl font-bold mt-3">
        {value}
      </p>

    </div>
  );
}

export default StatCard;