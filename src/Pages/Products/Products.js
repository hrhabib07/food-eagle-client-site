import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const [foods, setFoods] = useState();
  useEffect(() => {
    fetch("https://dreadful-coffin-02745.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="container d-flex justify-content-center">
      <div>
        <Row xs={1} md={3} className="gy-4 my-2 mx-2">
          {foods?.map((food) => (
            <Product key={food._id} food={food}></Product>
          ))}
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Body className="d-flex justify-content-around">
                <div>
                  <Card.Title className="text-info">
                    Add new services
                  </Card.Title>
                  <br />
                  <Card.Subtitle className="mb-2 text-success">
                    Only admin cad add or update new services
                  </Card.Subtitle>
                </div>
                <Link
                  to="/adminLogin"
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <div style={{ cursor: "pointer" }}>
                    <h2 className="text-primary">+</h2>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="my-5">
          <Link to="/orderSummery">
            <button className="btn btn-outline-secondary">
              Proceed Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
