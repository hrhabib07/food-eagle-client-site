import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img
        src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-11840.jpg"
        alt=""
      />
      <Link to={"/home"}>
        <button>GoBack</button>
      </Link>
    </div>
  );
};

export default NotFound;
