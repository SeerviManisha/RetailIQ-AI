const products = [
  {
    name: "iPhone 15",
    sales: 120,
    revenue: "$12,000",
  },
  {
    name: "Wireless Headphones",
    sales: 95,
    revenue: "$6,500",
  },
  {
    name: "Smart Watch",
    sales: 80,
    revenue: "$5,000",
  },
];

function TopProducts() {
  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl">

      <h2 className="text-white text-xl font-semibold mb-4">
        Top Selling Products
      </h2>

      <div className="space-y-4">

        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#334155] p-4 rounded-xl flex justify-between"
          >
            <div>
              <h3 className="text-white font-semibold">
                {product.name}
              </h3>

              <p className="text-gray-400 text-sm">
                Sales: {product.sales}
              </p>
            </div>

            <p className="text-cyan-400 font-bold">
              {product.revenue}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default TopProducts;