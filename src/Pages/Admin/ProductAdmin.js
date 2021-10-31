import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductAdmin = ({ food }) => {
  const handleDelete = (id) => {
    fetch(`https://dreadful-coffin-02745.herokuapp.com/products/${id}`, {
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
      <Col>
        <Card style={{ width: "16rem" }}>
          <Card.Body className="d-flex justify-content-around">
            <div>
              <Card.Title>{food.name}</Card.Title>
              <br />
              <Card.Subtitle className="mb-2 text-muted">
                TK {food.price}
              </Card.Subtitle>
            </div>
            <div>
              <Link to={`/updateProtected/${food._id}`}>
                <button className="btn btn-success  mb-3 ">Update</button>
              </Link>
              <br />
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(food._id)}
              >
                Delete
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ProductAdmin;
