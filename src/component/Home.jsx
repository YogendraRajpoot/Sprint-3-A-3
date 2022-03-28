import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

export const Home = () => {
  const { isAuth } = useContext(AuthContext);
  const { token } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>Home</h1>
      <h1>successfully login</h1>
      <h3>Token :- {token}</h3>
    </div>
  );
};
