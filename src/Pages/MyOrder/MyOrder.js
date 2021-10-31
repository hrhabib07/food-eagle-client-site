import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import SingleOrder from "./SingleOrder";

const MyOrder = () => {
  const [allOrders, setAllOrders] = useState();
  useEffect(() => {
    fetch("https://dreadful-coffin-02745.herokuapp.com/myOrder")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);
  return (
    <div className="my-5 pt-3">
      <h3>This is order list {allOrders?.length}</h3>
      <Row xs={1} md={4} className="gy-4 my-2 mx-2">
        {allOrders?.map((order) => (
          <SingleOrder key={order._id} order={order}></SingleOrder>
        ))}
      </Row>
    </div>
  );
};

export default MyOrder;
