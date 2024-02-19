"use client";
import React, { FC, useState } from "react";
import useTable from "../hooks/useTable";
import Pagination from "./Pagination";
import OrdersTable from "./OrdersTable";

const OrdersComponent: FC<GlobalProps> = ({ orders }) => {
  const [selected, setSelected] = useState(new Set());
  const allChecked = selected.size === orders.length;
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(orders, page);
  //This funtion is used to checkbox order records
  const onCheckboxClick = React.useCallback(() => {
    setSelected((select) => {
      const result = new Set(select);
      if (select) {
        orders.forEach(function (order) {
          if (!result.delete(order.id)) result.add(order.id);
        });
      }
      return result;
    });
  }, [orders]);

  return (
    <>
      <section className=" bg-white shadow-md px-6 py-8 rounded-lg mt-7">
        <div className="w-full md:grid gap-10 grid-cols-4 justify-between items-center bg-white py-5 ">
          <div className="mb-4 md:mb-0">
            <h1 className="font-bold text-xl">Project Summary</h1>
          </div>
          <div className="mb-4 md:mb-0">
            <div className=" flex items-center gap-2">
              <button>Show</button>
              <select
                name=""
                id=""
                className="w-full border border-gray-200 px-2 py-2 bg-white uppercase text-xs"
              >
                <option value="">All columns</option>
                <option value="customer">Customer</option>
                <option value="shipping">Shipping</option>
              </select>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <button className=" bg-blue-700 text-white rounded-lg px-10 py-3 uppercase text-sm">
              dispatch selected
            </button>
          </div>
          <Pagination range={range} setPage={setPage} page={page} />
        </div>
        <OrdersTable
          selected={selected}
          onCheckboxClick={onCheckboxClick}
          slice={slice}
          allChecked={allChecked}
        />
      </section>
    </>
  );
};

export default OrdersComponent;
