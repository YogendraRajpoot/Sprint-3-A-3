import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

export const Home = () => {
  const { isAuth } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const Logout = () => {
    logout();
  };

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => Logout()}>Logout</button>
      <h1>successfully login</h1>
      <h3>Token :- {token}</h3>
    </div>
  );
};
