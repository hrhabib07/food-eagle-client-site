import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useFirebase from "../Hooks/useFirebase";
import { Link } from "react-router-dom";

const OrderSummer = () => {
  const { user } = useFirebase();
  // console.log(user);
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch("https://dreadful-coffin-02745.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  let totalPrice = 0;
  orders?.map((od) => {
    totalPrice = totalPrice + Number(od.price);
    // console.log(totalPrice);
  });
  const handleDeleteOrder = (id) => {
    fetch(`https://dreadful-coffin-02745.herokuapp.com/orders/${id}`, {
      method: "delete",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("This item is removed Successfully");
        }
      });
  };

  return (
    <div className="container">
      <Row xs={1} md={3} className="container gy-4 my-5 py-2 ">
        {orders?.map((order) => (
          <Col className="my-2">
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <div>
                  <Card.Title>{order.name}</Card.Title>
                  <br />
                  <Card.Subtitle className="mb-2 text-muted">
                    TK {order.price}
                  </Card.Subtitle>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteOrder(order._id)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="my-2">
        <hr />
        <h2>This is order summery</h2>
        <p>You have selected total {orders?.length} items </p>
        <p>
          Total TK <span className="text-primary">{totalPrice}</span>
        </p>
        <p>Delivery Time : 30 mints</p>
        {user.email ? (
          <Link to="/deliveryForm">
            <button className="btn btn-success"> Proceed Order </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn btn-success"> Proceed Order </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default OrderSummer;
