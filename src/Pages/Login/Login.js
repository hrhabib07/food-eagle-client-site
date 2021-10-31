import React from "react";
import { useHistory } from "react-router";
import useFirebase from "../Hooks/useFirebase";

const Login = () => {
  const history = useHistory();
  const { signInUsingGoogle, user } = useFirebase();
  if (user.email) {
    history.goBack();
  }
  return (
    <div className="container mt-5 pt-3">
      <h2>Please login with your google account</h2>
      <br />
      <button className="btn btn-info" onClick={signInUsingGoogle}>
        Sing in with google
      </button>
    </div>
  );
};

export default Login;
