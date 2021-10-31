import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

const Product = ({ food }) => {
  const { user } = useFirebase();
  const handleAddItem = (id) => {
    const name = food.name;
    const price = food.price;
    const newOrder = { id, name, price };
    fetch("https://dreadful-coffin-02745.herokuapp.com/newOrder", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert(
            'Your order is successfully added. Click "proceed order" button to show all order.'
          );
        }
      });
  };
  console.log(food.name);
  return (
    <div>
      <Col>
        <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src={food.photo} />
          <Card.Body className="d-flex justify-content-around">
            <div>
              <Card.Title>{food.name}</Card.Title>
              <br />
              <Card.Subtitle className="mb-2 text-muted">
                TK {food.price}
              </Card.Subtitle>
            </div>
            {user?.email ? (
              <div
                onClick={() => handleAddItem(food._id)}
                style={{ cursor: "pointer" }}
              >
                <h2>+</h2>
              </div>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "gray" }}
              >
                <div style={{ cursor: "pointer" }}>
                  <h2>+</h2>
                </div>
              </Link>
            )}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Product;
