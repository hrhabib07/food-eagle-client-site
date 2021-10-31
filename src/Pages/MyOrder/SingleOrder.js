import React from "react";
import { Card } from "react-bootstrap";

const SingleOrder = ({ order }) => {
  const { orders } = order;
  const handleDelete = (id) => {
    fetch(`https://dreadful-coffin-02745.herokuapp.com/customersOrder/${id}`, {
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
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{order.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <p>Phone: {order?.phone}</p>
            <p>Address : {order?.address} </p>{" "}
          </Card.Subtitle>
          <Card.Text>
            {orders.map((od) => (
              <div>
                <>{od.name}</>
              </div>
            ))}
          </Card.Text>
          <button
            className="btn btn-danger me-2"
            onClick={() => handleDelete(order._id)}
          >
            Delete
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleOrder;
