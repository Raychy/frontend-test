"use client";
import React, { FC, useState } from "react";
import OrdersComponent from "./Orders";
import { ordersList } from "../model/orders";

const HomeC: FC = () => {
  const [orders, setOrders] = useState<GlobalProps["orders"]>(ordersList ?? []);
  const [keywordText, setKeywordText] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");


  //This function filter orders by status
  const filterByStatus = () => {
    setOrders(ordersList);
    if (status) {
      return setOrders(
        orders.filter((item) => {
          return status
            .toLowerCase()
            .split(" ")
            .every((v) => item.status.toLowerCase().includes(v));
        })
      );
    } else {
      return setOrders(ordersList);
    }
  };
  //This function filter orders by category
  const filterByCategory = () => {
    setOrders(ordersList);
    if (category) {
      return setOrders(
        orders.filter((item) => {
          return category
            .toLowerCase()
            .split(" ")
            .every((v) => item.country.toLowerCase().includes(v));
        })
      );
    } else {
      return setOrders(ordersList);
    }
  };
  //This function filter orders by keyword
  const filterByKeyword = () => {
    if (keywordText) {
      return setOrders(
        orders.filter((item) => {
          return keywordText
            .toLowerCase()
            .split(" ")
            .every(
              (v) =>
                item.status.toLowerCase().includes(v) ||
                item.customer.toLowerCase().includes(v) ||
                item.email.toLowerCase().includes(v) ||
                item.source.toLowerCase().includes(v)
            );
        })
      );
    } else {
      return setOrders(ordersList);
    }
  };


  return (
    <div>
      <section className="flex justify-between items-center  m-auto">
        <h1 className="font-bold text-2xl">Orders</h1>
        <button className="block bg-blue-700 text-white rounded-lg px-10 py-3 uppercase text-sm">
          create new
        </button>
      </section>
      <section className="w-full  m-auto md:grid grid-cols-4 gap-5 justify-center items-end mt-5 bg-white shadow-md px-4 py-8 rounded-lg ">
        <div className="mb-4 md:mb-0">
          <p>What are you looking for?</p>
          <div className="border border-gray-200 px-2 py-2 w-full flex items-center">
            <svg
              className="text-gray-400 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>

            <input
              type="text"
              defaultValue={keywordText}
              onChange={(e) => setKeywordText(e.target.value)}
              onKeyUp={filterByKeyword}
              className="w- outline-none focus:outline-none pl-2 text-sm"
              placeholder="Search for category, name, company, etc"
            />
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <p>Category</p>
          <div>
            <select
              name=""
              id=""
              className="w-full border border-gray-200 px-2 py-2 bg-white"
              defaultValue={category}
              onChange={(e) => setCategory(e.target.value)}
              onClick={filterByCategory}
            >
              <option value="">All</option>
              <option value="Australia">Australia</option>
              <option value="nigeria">Nigeria</option>
            </select>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <p>Status</p>
          <div>
            <select
              name=""
              id=""
              className="w-full border border-gray-200 px-2 py-2 bg-white"
              defaultValue={status}
              onChange={(e) => setStatus(e.target.value)}
              onClick={filterByStatus}
            >
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="successful">Successful</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>
        </div>
        <div className="flex items-center">
          <button className=" bg-slate-100 text-gray-800 rounded-lg px-5 py-2 mr-1">
            <svg
              className="text-gray-400 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 19.1642L18.2071 12.9571L16.7929 11.5429L12 16.3358L7.20711 11.5429L5.79289 12.9571L12 19.1642ZM12 13.5143L18.2071 7.30722L16.7929 5.89301L12 10.6859L7.20711 5.89301L5.79289 7.30722L12 13.5143Z"></path>
            </svg>
          </button>
          <button
            type="button"
            onClick={filterByKeyword}
            className=" bg-blue-700 text-white rounded-lg px-10 py-3 uppercase text-sm"
          >
            Search
          </button>
        </div>
      </section>
      {/* THIS SHOWS THE ORDER RECORDS */}
      <OrdersComponent orders={orders} />
    </div>
  );
};

export default HomeC;
