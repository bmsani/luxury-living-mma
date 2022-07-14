import React, { useEffect, useState } from "react";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch("/orders/Orders.json")
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);
  return (
    <div className="w-full px-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Pay With</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order, index) => <tr>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.service}</td>
              <td>{order.payWith}</td>
              <td>{order.paid ? <button class="btn btn-sm btn-success text-white">Paid</button> : <button class="btn btn-sm btn-error text-white">Unpaid</button> }</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
