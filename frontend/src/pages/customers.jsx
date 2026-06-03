import { useEffect, useState } from "react";

function Customers() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:5000/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data));

  }, []);

  return (

    <div className="flex-1 bg-[#0f172a] min-h-screen p-6 text-white">

      <h1 className="text-3xl font-bold mb-6">
        Customers
      </h1>

      <div className="bg-[#1e293b] p-6 rounded-2xl overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="text-left text-gray-400 border-b border-slate-700">

              <th className="pb-4">Customer</th>
              <th className="pb-4">Orders</th>
              <th className="pb-4">Total Spent</th>

            </tr>

          </thead>

          <tbody>

            {customers.map((customer, index) => (

              <tr
                key={index}
                className="border-b border-slate-800"
              >

                <td className="py-4">
                  {customer.name}
                </td>

                <td>
                  {customer.orders}
                </td>

                <td>
                  ${customer.spent}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default Customers;