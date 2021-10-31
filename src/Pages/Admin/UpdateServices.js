import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";

const UpdateServices = () => {
  const params = useParams();
  const nameRef = useRef();
  const priceRef = useRef();
  const photoRef = useRef();
  const id = params.id;
  const handleUpdateServices = (e) => {
    alert(
      "Developer is busy with his studies and he didn't get enough time to work on this section. It will be developed soon. If it's urgent try with delete and add method. Thank you"
    );
    e.preventDefault();
  };

  return (
    <div className="my-5 pt-5">
      <h2>This is update section for admin</h2>
      <p>Id : {id}</p>
      <div>
        <form onSubmit={handleUpdateServices}>
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
            value="Update"
            className="btn btn-success my-2"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateServices;
