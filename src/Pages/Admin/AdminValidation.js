import React, { useRef } from "react";
import { useHistory } from "react-router";

const AdminValidation = () => {
  const nameRef = useRef();
  const passRef = useRef();
  const history = useHistory();
  let AdminValidation = false;
  const handleAdminLogin = (e) => {
    const adminId = nameRef.current.value;
    const adminPass = passRef.current.value;
    if (
      adminId === "Jhankar Vai is Boss" &&
      adminPass === "secretPassword1234"
    ) {
      //   AdminValidation = true;
      history.push("/privateRouteBanglaVersion");
    } else {
      alert(
        "Vai apni tho admin na aikane ki koran? Admin hoila github theke id pass nia asan naila apnake dukta dimu na. Sorry"
      );
    }
    e.preventDefault();
  };
  return (
    <div className="my-5 py-3">
      <h2>Please Proof that you are an admin.</h2>
      <p className="text-danger">
        You will get admin id and password on projects github repository.
      </p>
      <form onSubmit={handleAdminLogin}>
        <input
          type="text"
          placeholder="Admin Id"
          className="my-2"
          ref={nameRef}
        />
        <br />
        <input
          type="text"
          placeholder="Admin Password"
          className="my-2"
          ref={passRef}
        />
        <br />
        <input type="submit" value="submit" className="btn btn-success my-2" />
      </form>
    </div>
  );
};

export default AdminValidation;
