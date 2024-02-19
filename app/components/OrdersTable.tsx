import React from "react";
interface TableProps {
  slice: any[];
  onCheckboxClick: any;
  selected: any;
  allChecked: boolean;
}
const OrdersTable = ({
  onCheckboxClick,
  selected,
  slice,
  allChecked,
}: TableProps) => {
  return (
    <div>
      <section className="overflow-x-scroll lg:overflow-x-hidden">
        <table className="w-full m-auto">
          <thead>
            <tr className="bg-blue-50 text-black h-[60px] uppercase text-sm text-left ">
              <th className=" px-2">
                <input
                  type="checkbox"
                  name="select"
                  onChange={onCheckboxClick}
                  defaultValue={selected.size}
                />
              </th>
              <th className=" px-2">Id</th>
              <th className=" px-2">shipid</th>
              <th className=" px-2">date</th>
              <th className=" px-2">status</th>
              <th className=" px-2">customer</th>
              <th className=" px-2">email</th>
              <th className=" px-2">country</th>
              <th className=" px-2">shipping</th>
              <th className=" px-2">source</th>
              <th className=" px-2">order type</th>
              <th className=" px-2"></th>
            </tr>
          </thead>
          <tbody>
            {slice.map((i) => (
              <tr
                className="text-sm h-[60px] px-2 border-b border-[#D9D9D9]"
                key={i.id}
              >
                <td className=" px-2">
                  <input
                    type="checkbox"
                    name="select"
                    checked={allChecked}
                    defaultValue={selected.size}
                    onChange={onCheckboxClick}
                  />
                </td>
                <td className=" px-2">{i.id} </td>
                <td className=" px-2">{i.shipid}</td>
                <td className=" px-2">{i.date}</td>
                <td className=" px-2 capitalize">{i.status}</td>
                <td className=" px-2 capitalize">{i.customer}</td>
                <td className=" px-2">{i.email}</td>
                <td className=" px-2 capitalize">{i.country}</td>
                <td className=" px-2 capitalize">{i.shipping}</td>
                <td className=" px-2 capitalize">{i.source}</td>
                <td className=" px-2 capitalize">{i.orderType}</td>
                <td className=" px-2">
                  <button>
                    <svg
                      className="text-gray-400 w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16.7574 2.99677L14.7574 4.99677H5V18.9968H19V9.23941L21 7.23941V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99677C3 3.44448 3.44772 2.99677 4 2.99677H16.7574ZM20.4853 2.09727L21.8995 3.51149L12.7071 12.7039L11.2954 12.7063L11.2929 11.2897L20.4853 2.09727Z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default OrdersTable;
