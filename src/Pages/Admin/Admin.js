import React, { useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import ProductAdmin from "./ProductAdmin";

const Admin = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const photoRef = useRef();
  const [foods, setFoods] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const handleAddServices = (e) => {
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const photo = photoRef.current.value;
    const newOrder = { name, price, photo };
    fetch("http://localhost:5000/newServices", {
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
    e.preventDefault();
  };
  return (
    <div className="my-5 py-5">
      <div className="container">
        <h2>
          Ara apni tho Admin vai <br /> amar messageta ektu poran tarpor haisen
        </h2>
        <p>
          {" "}
          <b className="text-danger">Reason of aplying Bangla System : </b>
          Ami ekjon HSC examinee tai amar dourer upor saradin Jaitasa. Private
          route dia korta jaia error kaisi solve korta pari nia aijonno bangla
          system use kortasi. But main jinisgula bujtasi ami aita amar
          assignment deklai buja jay.
        </p>
      </div>
      <br />
      <br />
      <div>
        <div>
          <h2>Add Services</h2>
          <form onSubmit={handleAddServices}>
            <input
              type="text"
              placeholder="Service Name"
              className="my-2"
              ref={nameRef}
              required
            />
            <br />
            <input
              type="number"
              placeholder="Price"
              className="my-2"
              ref={priceRef}
            />
            <br />
            <input
              type="text"
              placeholder="Photo url"
              className="my-2"
              ref={photoRef}
              required
            />
            <br />
            <input
              type="submit"
              value="Add"
              className="btn btn-success my-2"
              required
            />
          </form>
        </div>
        <div>
          <Row xs={1} md={3} className="gy-4 my-2 mx-2">
            {foods?.map((food) => (
              <ProductAdmin food={food} key={food._id}></ProductAdmin>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Admin;
