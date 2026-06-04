import { useEffect, useState } from "react";

function Inventory() {

  const [inventory, setInventory] = useState([]);

  useEffect(() => {

    fetch("https://retailiq-ai-backend.onrender.com/inventory")
      .then((response) => response.json())
      .then((data) => setInventory(data));

  }, []);

  return (

    <div className="flex-1 bg-[#0f172a] min-h-screen p-6 text-white">

      <h1 className="text-3xl font-bold mb-6">
        Inventory Management
      </h1>

      <div className="bg-[#1e293b] p-6 rounded-2xl overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="text-left text-gray-400 border-b border-slate-700">

              <th className="pb-4">Product</th>
              <th className="pb-4">Category</th>
              <th className="pb-4">Stock</th>

            </tr>

          </thead>

          <tbody>

            {inventory.map((item, index) => (

              <tr
                key={index}
                className="border-b border-slate-800"
              >

                <td className="py-4">
                  {item.product}
                </td>

                <td>
                  {item.category}
                </td>

                <td>
                  {item.stock}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default Inventory;