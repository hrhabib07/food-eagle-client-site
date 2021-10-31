import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const DeliveryForm = () => {
  const [orders, setOrders] = useState();
  // console.log(orders);
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const history = useHistory();
  useEffect(() => {
    fetch("https://dreadful-coffin-02745.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);
  const handleFormSubmit = (e) => {
    const name = nameRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const customer = { name, address, phone, orders };
    console.log(customer);

    fetch("https://dreadful-coffin-02745.herokuapp.com/customer", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(customer),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert(
            "Your order is successfully added to our website. Thank you for ordering Stay connected"
          );
          history.push("/");
        } else {
          alert("Server is not responding Please try again later");
        }
      });

    fetch(`https://dreadful-coffin-02745.herokuapp.com/clearOrders`, {
      method: "delete",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {});

    e.preventDefault();
  };

  return (
    <div className="my-5 pt-2">
      <h3>Please give your delivery address.</h3>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Your name"
          className="my-2"
          ref={nameRef}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Your address"
          className="my-2"
          ref={addressRef}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Phone Number"
          className="my-2"
          ref={phoneRef}
          required
        />
        <br />
        <input type="submit" value="submit" className="btn btn-success my-2" />
      </form>
    </div>
  );
};

export default DeliveryForm;
