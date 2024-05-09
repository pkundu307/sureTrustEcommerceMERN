import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectOrders } from "../order/orderSlice";

function OrderSummary({ onClose }) {
  const order = useSelector(selectOrders);
  const lastOrder = order[order.length - 1]; // Access the last order

  let date = new Date().toLocaleDateString("de-DE");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-fuchsia-200 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 p-3 m-2 rounded-xl">
        <div className="flex justify-between">
          <h1 className="mb-3 text-left font-bold text-xl px-10 mt-3">
            Order Summary
          </h1>
          <button onClick={onClose} className="mr-10 text-xl">
            <IoMdClose />
          </button>
        </div>
        <div className="border-b border-gray-500 ml-10 mr-10"></div>

        <div className="p-4">
          <table className="w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                  Order Number
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                  Payment Method
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              <tr>
                <td className="px-6 py-3 text-left ">{date}</td>
                <td className="px-6 py-3 text-left ">024-125478956</td>
                <td className="px-6 py-3 text-left ">
                  {lastOrder?.paymentMethod} {/* Display payment method of last order */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {lastOrder && (
          <div>
            {lastOrder.items.map((item) => (
              <div key={item.id} className="flex mb-5">
                <img
                  src={item.product.images[0]}
                  className="w-20 h-20 rounded-xl ml-8"
                  alt={item.product.title}
                />
                <div className="ml-8 text-left">
                  <p className="font-bold">{item.product.title}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
                <p className="font-bold ml-auto">₹{item.product.price}</p>
              </div>
            ))}
          </div>
        )}

        <div className="border-b border-gray-500 ml-10 mr-10"></div>

        <div className=" text-gray-500 font-bold">
          <div className="flex justify-between mt-2">
            <p className="ml-10">Sub Total</p>
            <p className="mr-10">₹{lastOrder?.totalAmount}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="ml-10">Shipping</p>
            <p className="mr-10">₹2.0</p>
          </div>
          <div className="flex justify-between mt-2 mb-3">
            <p className="ml-10">Tax</p>
            <p className="mr-10">₹5.0</p>
          </div>
        </div>

        <div className="border-b border-gray-500 ml-10 mr-10"></div>

        <div className="flex justify-between font-bold text-xl mt-4">
          <p className="ml-10">Order Total</p>
          <p className="mr-10">
            ₹{lastOrder?.totalAmount + 2 + 5}
          </p>
        </div>
        <Link to="/">
          <button style={{marginLeft:'40px'}} className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg w-36">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
