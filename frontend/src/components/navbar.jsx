function Navbar() {
  return (
    <div className="
      bg-[#1e293b]
      p-5
      rounded-2xl
      flex
      justify-between
      items-center
      shadow-lg
      border
      border-slate-700
    ">

      <div>
        <h2 className="text-white text-3xl font-bold">
          Retail Dashboard
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          AI-Powered Business Intelligence
        </p>
      </div>

      <div className="
        bg-cyan-500
        text-black
        px-4
        py-2
        rounded-xl
        font-semibold
      ">
        Admin
      </div>

    </div>
  );
}

export default Navbar;